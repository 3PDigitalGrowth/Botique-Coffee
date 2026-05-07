/**
 * All site form submissions (contact page, homepage hero, free-trial landing).
 * Sends (1) admin notification to CONTACT_RECIPIENTS and (2) confirmation to the visitor.
 *
 * Environment variables:
 *   RESEND_API_KEY     (required in production)
 *   RESEND_FROM        — verified sender, e.g. Boutique Coffee <enquiry@coffee.websitesubmission.com.au>
 *   CONTACT_RECIPIENTS — comma-separated admin inboxes (default: alex + chris)
 *   CONTACT_REPLY_TO   — optional; used as Reply-To on user confirmation (default: chris@boutiquecoffee.com.au)
 *   NEXT_PUBLIC_SITE_URL / SITE_PUBLIC_URL — site origin for “open page” links in admin emails
 */

import { NextResponse } from "next/server"
import { Resend } from "resend"
import {
  buildAdminNotificationHtml,
  buildAdminNotificationText,
  buildUserConfirmationHtml,
  buildUserConfirmationText,
  formatMelbourneTimestamp,
  mailtoLink,
  telLink,
  escapeHtml,
  type AdminDataRow,
  type SubmissionContext,
} from "@/lib/email/enquiry-emails"

type ConsultPayload = {
  variant?: string
  pagePath?: string
  name?: string
  businessName?: string
  email?: string
  phone?: string
  /** Office / area / address (optional). Legacy: suburb */
  location?: string
  suburb?: string
  teamSize?: string
  comments?: string
  notes?: string
}

type QuickPayload = {
  variant: "quick"
  source?: string
  pagePath?: string
  businessName?: string
  email?: string
  phone?: string
  postcode?: string
  teamSize?: string
}

const DEFAULT_RECIPIENTS = "alex@3pdigital.com.au,chris@boutiquecoffee.com.au"

const FROM =
  process.env.RESEND_FROM ||
  process.env.CONTACT_FROM ||
  "Boutique Coffee <enquiry@coffee.websitesubmission.com.au>"

const USER_CONFIRM_REPLY_TO =
  process.env.CONTACT_REPLY_TO || "chris@boutiquecoffee.com.au"

function siteBase(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_PUBLIC_URL ||
    "https://boutiquecoffee.com.au"
  ).replace(/\/$/, "")
}

function normalizePagePath(raw: string | undefined, fallback: string): string {
  const p = (raw || "").trim() || fallback
  return p.startsWith("/") ? p : `/${p}`
}

function resolveFormMeta(
  variant: "consult" | "quick",
  source?: string,
): { formLabel: string; pageFallback: string } {
  if (variant === "consult") {
    return {
      formLabel: "Contact page — Book a 10-minute consult",
      pageFallback: "/contact",
    }
  }
  if (source === "homepage-hero") {
    return {
      formLabel: "Homepage — Start your free trial",
      pageFallback: "/",
    }
  }
  if (source === "free-trial") {
    return {
      formLabel: "Free trial landing — Claim your trial",
      pageFallback: "/free-trial",
    }
  }
  return {
    formLabel: "Website — Quick enquiry",
    pageFallback: "/",
  }
}

function makeContext(
  variant: "consult" | "quick",
  source: string | undefined,
  pagePathRaw: string | undefined,
): SubmissionContext {
  const { formLabel, pageFallback } = resolveFormMeta(variant, source)
  const pagePath = normalizePagePath(pagePathRaw, pageFallback)
  const pageUrl = `${siteBase()}${pagePath}`
  return {
    formLabel,
    pagePath,
    pageUrl,
    submittedAtFormatted: formatMelbourneTimestamp(new Date()),
  }
}

function getRecipients(): string[] {
  const raw =
    process.env.CONTACT_RECIPIENTS ||
    [process.env.CONTACT_TO, process.env.CONTACT_CC].filter(Boolean).join(",")
  const list = (raw && raw.trim() ? raw : DEFAULT_RECIPIENTS)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  if (list.length === 0) {
    throw new Error("CONTACT_RECIPIENTS is empty")
  }
  return list
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const isPhone = (value: string) => /[0-9]{6,}/.test(value.replace(/\s+/g, ""))
const isVicPostcode = (value: string) => /^3[0-9]{3}$/.test(value.trim())

function noApiKeyFallback() {
  return process.env.NODE_ENV === "development"
}

function greetingFirstName(fullName: string): string {
  const first = fullName.trim().split(/\s+/)[0]
  return first || ""
}

export async function POST(request: Request) {
  let body: ConsultPayload | QuickPayload
  try {
    body = (await request.json()) as ConsultPayload | QuickPayload
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    )
  }

  if (body.variant === "quick") {
    return handleQuick(body as QuickPayload)
  }
  return handleConsult(body as ConsultPayload)
}

async function handleQuick(body: QuickPayload) {
  const source = (body.source || "").trim() || "unknown"
  const businessName = (body.businessName || "").trim()
  const email = (body.email || "").trim()
  const phone = (body.phone || "").trim()
  const postcode = (body.postcode || "").trim()
  const teamSize = (body.teamSize || "").trim()

  if (!businessName || !email || !phone || !postcode || !teamSize) {
    return NextResponse.json(
      { ok: false, error: "Please fill in every field." },
      { status: 400 },
    )
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "That email doesn't look right. Please check it." },
      { status: 400 },
    )
  }
  if (!isPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "That phone number doesn't look right. Please check it." },
      { status: 400 },
    )
  }
  if (!isVicPostcode(postcode)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid Victorian postcode (e.g. 3000)." },
      { status: 400 },
    )
  }

  const ctx = makeContext("quick", source, body.pagePath)
  const headline = `${businessName} · ${teamSize}`

  const rows: AdminDataRow[] = [
    {
      label: "Business",
      valueText: businessName,
      valueHtml: `<strong>${escapeHtml(businessName)}</strong>`,
    },
    {
      label: "Email",
      valueText: email,
      valueHtml: mailtoLink(email, email),
    },
    {
      label: "Phone",
      valueText: phone,
      valueHtml: telLink(phone, phone),
    },
    { label: "Postcode", valueText: postcode, valueHtml: escapeHtml(postcode) },
    { label: "Team size", valueText: teamSize, valueHtml: escapeHtml(teamSize) },
  ]

  const adminSubject = `[${ctx.formLabel.split(" — ")[0] || "Site"}] ${businessName}`

  return deliverBoth({
    adminSubject,
    adminHtml: buildAdminNotificationHtml(ctx, rows, headline),
    adminText: buildAdminNotificationText(ctx, rows, headline),
    adminReplyTo: email,
    userTo: email,
    userSubject: "We received your enquiry — Boutique Coffee",
    userHtml: buildUserConfirmationHtml({
      greetingName: "",
      formLabel: ctx.formLabel,
      isConsult: false,
    }),
    userText: buildUserConfirmationText({
      greetingName: "",
      formLabel: ctx.formLabel,
      isConsult: false,
    }),
    logLabel: "quick",
    logPayload: {
      source,
      businessName,
      email,
      phone,
      postcode,
      teamSize,
      pagePath: ctx.pagePath,
    },
  })
}

async function handleConsult(body: ConsultPayload) {
  const name = (body.name || "").trim()
  const businessName = (body.businessName || "").trim()
  const email = (body.email || "").trim()
  const phone = (body.phone || "").trim()
  const location = ((body.location ?? body.suburb) || "").trim()
  const teamSize = (body.teamSize || "").trim()
  const comments = ((body.comments ?? body.notes) || "").trim()

  if (!name || !businessName || !email || !phone) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please fill in Contact name, Business name, Work email, and Phone.",
      },
      { status: 400 },
    )
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "That email doesn't look right. Please check it." },
      { status: 400 },
    )
  }
  if (!isPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "That phone number doesn't look right. Please check it." },
      { status: 400 },
    )
  }

  const ctx = makeContext("consult", undefined, body.pagePath)
  const headline = `${name} · ${businessName}`

  const dashHtml = `<span style="color:#a8a29e;">—</span>`
  const dashText = "—"

  const rows: AdminDataRow[] = [
    {
      label: "Contact name",
      valueText: name,
      valueHtml: `<strong>${escapeHtml(name)}</strong>`,
    },
    {
      label: "Business name",
      valueText: businessName,
      valueHtml: `<strong>${escapeHtml(businessName)}</strong>`,
    },
    {
      label: "Work email",
      valueText: email,
      valueHtml: mailtoLink(email, email),
    },
    {
      label: "Phone",
      valueText: phone,
      valueHtml: telLink(phone, phone),
    },
    {
      label: "Location",
      valueText: location || dashText,
      valueHtml: location ? escapeHtml(location) : dashHtml,
    },
    {
      label: "Team size",
      valueText: teamSize || dashText,
      valueHtml: teamSize ? escapeHtml(teamSize) : dashHtml,
    },
    {
      label: "Comments",
      valueText: comments || dashText,
      valueHtml: comments
        ? `<span style="white-space:pre-wrap;">${escapeHtml(comments)}</span>`
        : dashHtml,
    },
  ]

  const adminSubject = `Consult request: ${businessName}`

  const greet = greetingFirstName(name)

  const detailRowsForUser = [
    { label: "Contact name", value: name },
    { label: "Business name", value: businessName },
    { label: "Work email", value: email },
    { label: "Phone", value: phone },
    { label: "Location", value: location || "Not provided" },
    { label: "Team size", value: teamSize || "Not provided" },
    { label: "Comments", value: comments || "Not provided" },
  ]

  return deliverBoth({
    adminSubject,
    adminHtml: buildAdminNotificationHtml(ctx, rows, headline),
    adminText: buildAdminNotificationText(ctx, rows, headline),
    adminReplyTo: email,
    userTo: email,
    userSubject: "We received your consult request — Boutique Coffee",
    userHtml: buildUserConfirmationHtml({
      greetingName: greet,
      formLabel: ctx.formLabel,
      isConsult: true,
      detailRows: detailRowsForUser,
    }),
    userText: buildUserConfirmationText({
      greetingName: greet,
      formLabel: ctx.formLabel,
      isConsult: true,
      detailRows: detailRowsForUser,
    }),
    logLabel: "consult",
    logPayload: {
      name,
      businessName,
      email,
      phone,
      location,
      teamSize,
      pagePath: ctx.pagePath,
    },
  })
}

async function deliverBoth(args: {
  adminSubject: string
  adminHtml: string
  adminText: string
  adminReplyTo: string
  userTo: string
  userSubject: string
  userHtml: string
  userText: string
  logLabel: string
  logPayload: Record<string, unknown>
}) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    if (noApiKeyFallback()) {
      console.info(
        `[contact:${args.logLabel}] RESEND_API_KEY not set. Logging payload and returning ok=true.`,
      )
      console.info(`[contact:${args.logLabel}] payload:`, args.logPayload)
      return NextResponse.json({ ok: true, delivered: false })
    }
    console.error(`[contact:${args.logLabel}] RESEND_API_KEY not set in production.`)
    return NextResponse.json(
      {
        ok: false,
        error:
          "Enquiries are temporarily unavailable. Please call Chris on 0411 876 625.",
      },
      { status: 503 },
    )
  }

  let recipients: string[]
  try {
    recipients = getRecipients()
  } catch (e) {
    console.error("[contact] recipient config error:", e)
    return NextResponse.json(
      { ok: false, error: "Email configuration error." },
      { status: 500 },
    )
  }

  try {
    const resend = new Resend(apiKey)

    const adminResult = await resend.emails.send({
      from: FROM,
      to: recipients,
      replyTo: args.adminReplyTo,
      subject: args.adminSubject,
      html: args.adminHtml,
      text: args.adminText,
    })

    if (adminResult.error) {
      console.error("[contact] Resend admin error:", adminResult.error)
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't deliver your enquiry just now. Please call Chris directly on 0411 876 625.",
        },
        { status: 502 },
      )
    }

    const userResult = await resend.emails.send({
      from: FROM,
      to: args.userTo,
      replyTo: USER_CONFIRM_REPLY_TO,
      subject: args.userSubject,
      html: args.userHtml,
      text: args.userText,
    })

    if (userResult.error) {
      console.error(
        "[contact] Admin email sent but user confirmation failed:",
        userResult.error,
      )
    }

    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.error("[contact] unexpected error:", err)
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our end. Please call Chris directly on 0411 876 625.",
      },
      { status: 500 },
    )
  }
}
