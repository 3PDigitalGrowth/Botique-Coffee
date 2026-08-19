/**
 * Score-based spam filter for site enquiry forms.
 *
 * Built for the pattern we actually receive: cold SEO / web design / digital
 * marketing solicitation submitted through the contact forms (free email on
 * "Work email", overseas phone, pitch copy in Comments). Boutique Coffee only
 * serves Victorian workplaces, so overseas signals carry real weight.
 *
 * Each matched signal adds points; at or above SPAM_THRESHOLD the submission
 * is treated as spam. The API route silently accepts spam (fake success) so
 * senders don't learn the filter exists — see app/api/contact/route.ts.
 */

export type SpamInput = {
  name: string
  businessName: string
  email: string
  phone: string
  location: string
  comments: string
  /** Hidden "website" honeypot field — humans never see it, bots fill it. */
  honeypot?: string
}

export type SpamAssessment = {
  isSpam: boolean
  score: number
  reasons: string[]
}

const SPAM_THRESHOLD = 5

/** Pitch language scanned across name + business name + comments. */
const CONTENT_SIGNALS: Array<{ re: RegExp; weight: number; label: string }> = [
  // Cold-outreach openers
  { re: /\bcame across your (web ?site|site|page)\b/i, weight: 4, label: "outreach opener" },
  { re: /\b(visited|noticed|was browsing|while browsing) your (web ?site|site)\b/i, weight: 4, label: "outreach opener" },
  // SEO pitches
  { re: /\bseo\b/i, weight: 3, label: "SEO keyword" },
  { re: /\bsearch engine (optimi[sz]|rank)/i, weight: 4, label: "SEO pitch" },
  { re: /\bfirst page of google\b/i, weight: 4, label: "SEO pitch" },
  { re: /\bgoogle rank/i, weight: 4, label: "SEO pitch" },
  { re: /\brank(s|ing)? (higher|better|on google)\b/i, weight: 4, label: "SEO pitch" },
  { re: /\bbacklinks?\b/i, weight: 4, label: "SEO pitch" },
  { re: /\blink building\b/i, weight: 4, label: "SEO pitch" },
  { re: /\bguest post/i, weight: 4, label: "SEO pitch" },
  // Web design / dev pitches
  { re: /\bredesign(ed|ing)?\b/i, weight: 3, label: "design pitch" },
  { re: /\bmock-?ups?\b/i, weight: 3, label: "design pitch" },
  { re: /\bweb ?site (design|development|audit)/i, weight: 3, label: "design pitch" },
  { re: /\b(web|app|software) (design|development) (service|company|agency|expert)/i, weight: 4, label: "design pitch" },
  { re: /\bgraphic design/i, weight: 3, label: "design pitch" },
  { re: /\bwordpress\b/i, weight: 3, label: "design pitch" },
  { re: /\bvisually appealing\b/i, weight: 3, label: "design pitch" },
  { re: /\buser[- ]friendly\b/i, weight: 2, label: "design pitch" },
  // Marketing / growth pitches
  { re: /\bdigital marketing\b/i, weight: 3, label: "marketing pitch" },
  { re: /\blead generation\b/i, weight: 3, label: "marketing pitch" },
  { re: /\b(boost|increase|grow|drive) (your )?(traffic|leads|sales|revenue)\b/i, weight: 3, label: "marketing pitch" },
  { re: /\bmore (traffic|leads|conversions)\b/i, weight: 3, label: "marketing pitch" },
  { re: /\bsocial media (marketing|management|services)\b/i, weight: 3, label: "marketing pitch" },
  // Freebie hooks common in solicitation
  { re: /\b(completely|totally|its?) free\b/i, weight: 2, label: "freebie hook" },
  { re: /\bno upfront (cost|fee|payment)/i, weight: 3, label: "freebie hook" },
  // Unrelated solicitation
  { re: /\b(crypto(currency)?|forex|loan offer|casino|betting)\b/i, weight: 4, label: "unrelated solicitation" },
]

const FREEMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.com.au",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "icloud.com",
  "rediffmail.com",
  "mail.com",
  "zoho.com",
])

function isAustralianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "")
  if (!digits) return true // empty handled by required-field validation upstream
  if (digits.startsWith("0") || digits.startsWith("61")) return true
  // Bare mobile without leading zero, e.g. "412 345 678"
  return digits.length === 9 && digits.startsWith("4")
}

export function assessSpam(input: SpamInput): SpamAssessment {
  if ((input.honeypot || "").trim()) {
    return { isSpam: true, score: 100, reasons: ["honeypot field filled"] }
  }

  let score = 0
  const reasons: string[] = []

  const text = [input.name, input.businessName, input.comments].join("\n")
  for (const signal of CONTENT_SIGNALS) {
    if (signal.re.test(text)) {
      score += signal.weight
      reasons.push(`${signal.label} (${signal.re.source})`)
    }
  }

  const phone = input.phone.trim()
  const phoneDigits = phone.replace(/\D/g, "")
  const explicitIntl = phone.startsWith("+") || phone.startsWith("00")
  if (!isAustralianPhone(phone) && (explicitIntl || phoneDigits.length >= 11)) {
    score += 4
    reasons.push("non-Australian phone")
  }

  const emailDomain = input.email.split("@")[1]?.toLowerCase() || ""
  if (FREEMAIL_DOMAINS.has(emailDomain)) {
    score += 1
    reasons.push("free email provider on work email")
  }

  if (/(https?:\/\/|www\.)/i.test(input.comments)) {
    score += 2
    reasons.push("link in comments")
  }

  return { isSpam: score >= SPAM_THRESHOLD, score, reasons }
}
