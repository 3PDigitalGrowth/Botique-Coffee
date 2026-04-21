/**
 * Contact form submission endpoint.
 *
 * Environment variables:
 *   RESEND_API_KEY   (required in production) - API key from https://resend.com
 *   CONTACT_TO       (optional) - overrides chris@boutiquecoffee.com.au
 *   CONTACT_CC       (optional) - overrides alex@3pdigital.com.au
 *   CONTACT_FROM     (optional) - overrides noreply@boutiquecoffee.com.au
 *                                 MUST be on a domain verified in Resend.
 *
 * If RESEND_API_KEY is missing at runtime, the payload is logged to the server
 * console and the route returns { ok: true } so the front-end flow still works
 * in dev. This is deliberate so the form is usable before DNS / keys are set up.
 */

import { NextResponse } from "next/server"
import { Resend } from "resend"

type Payload = {
  name?: string
  businessName?: string
  email?: string
  phone?: string
  teamSize?: string
  suburb?: string
  notes?: string
}

const TO = process.env.CONTACT_TO || "chris@boutiquecoffee.com.au"
const CC = process.env.CONTACT_CC || "alex@3pdigital.com.au"
const FROM =
  process.env.CONTACT_FROM || "Boutique Coffee <noreply@boutiquecoffee.com.au>"

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const isPhone = (value: string) => /[0-9]{6,}/.test(value.replace(/\s+/g, ""))

export async function POST(request: Request) {
  let body: Payload
  try {
    body = (await request.json()) as Payload
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    )
  }

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

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set. Logging payload and returning ok=true.")
    console.info("[contact] payload:", { name, businessName, email, phone, teamSize, suburb, notes })
    return NextResponse.json({ ok: true, delivered: false })
  }

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      cc: CC,
      replyTo: email,
      subject,
      html,
      text,
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
