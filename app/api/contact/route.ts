/**
 * All site form submissions (contact page, homepage hero, free-trial landing).
 *
 * Environment variables:
 *   RESEND_API_KEY     (required in production) — https://resend.com
 *   RESEND_FROM        — e.g. Boutique Coffee <enquiry@coffee.websitesubmission.com.au>
 *                        (must use your verified sending domain in Resend)
 *   CONTACT_RECIPIENTS — comma-separated inbox list (default: alex + chris)
 *
 * Request body:
 *   { "variant": "consult", ... } — full contact form (see ConsultForm)
 *   { "variant": "quick", "source": "homepage-hero" | "free-trial", ... } — short hero forms
 */

import { NextResponse } from "next/server"
import { Resend } from "resend"

type ConsultPayload = {
  variant?: string
  name?: string
  businessName?: string
  email?: string
  phone?: string
  teamSize?: string
  suburb?: string
  notes?: string
}

type QuickPayload = {
  variant: "quick"
  source?: string
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

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const isPhone = (value: string) => /[0-9]{6,}/.test(value.replace(/\s+/g, ""))
const isVicPostcode = (value: string) => /^3[0-9]{3}$/.test(value.trim())

function noApiKeyFallback() {
  const isDev = process.env.NODE_ENV === "development"
  if (isDev) {
    return true
  }
  return false
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

  const sourceLabel =
    source === "homepage-hero"
      ? "Homepage hero"
      : source === "free-trial"
        ? "Free trial landing page"
        : source

  const subject = `[${sourceLabel}] Quick lead: ${businessName}`

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #222; line-height: 1.6;">
      <h2 style="font-family: Georgia, serif; color: #b8651f; margin: 0 0 16px;">Quick lead</h2>
      <p style="margin: 0 0 20px; color: #555;">Source: <strong>${escapeHtml(sourceLabel)}</strong></p>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr><td style="padding: 8px 0; width: 160px; color: #666;">Business</td><td style="padding: 8px 0;"><strong>${escapeHtml(businessName)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #b8651f;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="color: #b8651f;">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Postcode</td><td style="padding: 8px 0;">${escapeHtml(postcode)}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Team size</td><td style="padding: 8px 0;">${escapeHtml(teamSize)}</td></tr>
      </table>
      <p style="margin: 28px 0 0; font-size: 13px; color: #999;">Reply directly to this email to respond to ${escapeHtml(businessName)}.</p>
    </div>
  `.trim()

  const text = [
    `Quick lead — ${sourceLabel}`,
    ``,
    `Business: ${businessName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Postcode: ${postcode}`,
    `Team size: ${teamSize}`,
  ].join("\n")

  return sendWithResend({
    subject,
    html,
    text,
    replyTo: email,
    logLabel: "quick",
    logPayload: { source, businessName, email, phone, postcode, teamSize },
  })
}

async function handleConsult(body: ConsultPayload) {
  const name = (body.name || "").trim()
  const businessName = (body.businessName || "").trim()
  const email = (body.email || "").trim()
  const phone = (body.phone || "").trim()
  const teamSize = (body.teamSize || "").trim()
  const suburb = (body.suburb || "").trim()
  const notes = (body.notes || "").trim()

  if (!name || !businessName || !email || !phone || !teamSize || !suburb) {
    return NextResponse.json(
      { ok: false, error: "Please fill in every required field." },
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

  const subject = `New consult request from ${businessName}, ${teamSize}`

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #222; line-height: 1.6;">
      <h2 style="font-family: Georgia, serif; color: #b8651f; margin: 0 0 16px;">New consult request</h2>
      <p style="margin: 0 0 20px; color: #555;">Submitted via the /contact form at boutiquecoffee.com.au.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr><td style="padding: 8px 0; width: 160px; color: #666;">Name</td><td style="padding: 8px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Business</td><td style="padding: 8px 0;"><strong>${escapeHtml(businessName)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #b8651f;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="color: #b8651f;">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Team size</td><td style="padding: 8px 0;">${escapeHtml(teamSize)}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Suburb</td><td style="padding: 8px 0;">${escapeHtml(suburb)}</td></tr>
      </table>
      ${
        notes
          ? `<div style="margin-top: 24px; padding: 16px; background: #faf6f1; border-left: 4px solid #b8651f; border-radius: 4px;"><p style="margin: 0 0 6px; font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">Notes</p><p style="margin: 0; white-space: pre-wrap;">${escapeHtml(notes)}</p></div>`
          : ""
      }
      <p style="margin: 28px 0 0; font-size: 13px; color: #999;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
    </div>
  `.trim()

  const text = [
    `New consult request from the /contact form`,
    ``,
    `Name: ${name}`,
    `Business: ${businessName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Team size: ${teamSize}`,
    `Suburb: ${suburb}`,
    notes ? `\nNotes:\n${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n")

  return sendWithResend({
    subject,
    html,
    text,
    replyTo: email,
    logLabel: "consult",
    logPayload: { name, businessName, email, phone, teamSize, suburb, notes },
  })
}

async function sendWithResend(args: {
  subject: string
  html: string
  text: string
  replyTo: string
  logLabel: string
  logPayload: Record<string, unknown>
}) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    if (noApiKeyFallback()) {
      console.info(`[contact:${args.logLabel}] RESEND_API_KEY not set. Logging payload and returning ok=true.`)
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
    const result = await resend.emails.send({
      from: FROM,
      to: recipients,
      replyTo: args.replyTo,
      subject: args.subject,
      html: args.html,
      text: args.text,
    })

    if (result.error) {
      console.error("[contact] Resend error:", result.error)
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't deliver your enquiry just now. Please call Chris directly on 0411 876 625.",
        },
        { status: 502 },
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
