/**
 * Per-client CTA slot configuration.
 *
 * The blog SEO agent only picks the slot — copy, button text, and destination
 * live here. Update this file to change CTA behaviour across every blog post
 * without touching template code. See blog-template-spec.md §3a / §7.
 */

export type CtaSlot = "primary" | "secondary" | "inline-form"

export type PrimaryCta = {
  kind: "primary"
  eyebrow?: string
  headline: string
  subtext?: string
  buttonText: string
  href: string
}

export type SecondaryCta = {
  kind: "secondary"
  eyebrow?: string
  headline: string
  subtext?: string
  linkText: string
  href: string
}

export type InlineFormCta = {
  kind: "inline-form"
  eyebrow?: string
  headline: string
  subtext?: string
  /** Form posts to this endpoint. Existing /api/contact accepts variant:"quick". */
  endpoint: string
  /** Submission source tag, used for routing/labels in admin emails. */
  source: string
  buttonText: string
  successMessage: string
}

export type BottomBandCta = {
  eyebrow?: string
  headline: string
  subtext?: string
  endpoint: string
  source: string
  buttonText: string
  successMessage: string
}

export type StickyMobileCta = {
  label: string
  buttonText: string
  href: string
}

export type CtaConfig = {
  primary: PrimaryCta
  secondary: SecondaryCta
  "inline-form": InlineFormCta
  bottomBand: BottomBandCta
  stickyMobile: StickyMobileCta
}

export const CTA_CONFIG: CtaConfig = {
  primary: {
    kind: "primary",
    eyebrow: "Free 2-week trial",
    headline: "Try a Boutique machine in your office",
    subtext:
      "Two weeks, fully installed, no obligation. If your team loves it, keep it.",
    buttonText: "Start your free trial",
    href: "/free-trial",
  },
  secondary: {
    kind: "secondary",
    headline: "Got a question first?",
    subtext: "Chat to Chris directly. 10 minutes is usually all it takes.",
    linkText: "Book a 10-minute consult",
    href: "/contact",
  },
  "inline-form": {
    kind: "inline-form",
    eyebrow: "Get a quote",
    headline: "Want a tailored quote for your office?",
    subtext:
      "Tell us a bit about your team and we'll come back with the right machine, the beans we'd recommend, and the monthly cost. Usually within one business day.",
    endpoint: "/api/contact",
    source: "blog-inline",
    buttonText: "Send my details",
    successMessage:
      "Thanks — we've got your details and Chris will be in touch shortly.",
  },
  bottomBand: {
    eyebrow: "Boutique Coffee at Work",
    headline: "Real coffee for your team. No commitment.",
    subtext:
      "Two-week free trial. Premium beans, commercial-grade machine, installed and serviced. Cancel any time.",
    endpoint: "/api/contact",
    source: "blog-bottom-band",
    buttonText: "Start your free trial",
    successMessage:
      "Thanks — we've got your details and Chris will be in touch shortly.",
  },
  stickyMobile: {
    label: "Free 2-week trial",
    buttonText: "Start trial",
    href: "/free-trial",
  },
}
