/**
 * Appends every website form submission (including spam-flagged ones) to the
 * "Boutique Coffee Website Leads" Google Sheet so leads are recorded outside
 * of email. Spam rows keep false positives recoverable.
 *
 * Environment variables:
 *   GOOGLE_SERVICE_ACCOUNT_JSON — 3P service account key (same SA as agentops)
 *   LEADS_SHEET_ID              — spreadsheet ID of the leads sheet
 *   LEADS_IMPERSONATE_SUBJECT   — optional DWD subject (default mastermcc@3pdigital.com.au)
 *
 * Failures never block the enquiry flow: errors are logged and swallowed.
 */

import { JWT } from "google-auth-library"

export type LeadLogEntry = {
  /** Melbourne-formatted timestamp, same string as the admin email */
  timestamp: string
  /** Form label, e.g. "Contact page — Book a 10-minute consult" */
  form: string
  pagePath: string
  name: string
  businessName: string
  email: string
  phone: string
  location: string
  teamSize: string
  comments: string
  /** Delivered / Delivery failed / Spam (dropped) ... */
  status: string
  spamScore?: number
  spamReasons?: string
}

const SHEET_RANGE = "Leads!A:M"

export async function recordLead(entry: LeadLogEntry): Promise<void> {
  const rawCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  const sheetId = process.env.LEADS_SHEET_ID
  if (!rawCreds || !sheetId) {
    console.info(
      "[lead-log] GOOGLE_SERVICE_ACCOUNT_JSON or LEADS_SHEET_ID not set; skipping sheet append.",
    )
    return
  }

  try {
    const creds = JSON.parse(rawCreds) as {
      client_email: string
      private_key: string
    }
    const jwt = new JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      subject:
        process.env.LEADS_IMPERSONATE_SUBJECT || "mastermcc@3pdigital.com.au",
    })
    const { token } = await jwt.getAccessToken()
    if (!token) {
      console.error("[lead-log] could not mint access token")
      return
    }

    const row = [
      entry.timestamp,
      entry.form,
      entry.pagePath,
      entry.name,
      entry.businessName,
      entry.email,
      entry.phone,
      entry.location,
      entry.teamSize,
      entry.comments,
      entry.status,
      entry.spamScore ?? "",
      entry.spamReasons ?? "",
    ]

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
        SHEET_RANGE,
      )}:append?valueInputOption=RAW`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
        signal: AbortSignal.timeout(5000),
      },
    )
    if (!res.ok) {
      const detail = (await res.text()).slice(0, 300)
      console.error(`[lead-log] append failed: ${res.status} ${detail}`)
    }
  } catch (err) {
    console.error("[lead-log] error:", err)
  }
}
