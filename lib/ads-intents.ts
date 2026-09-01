/**
 * One landing page per Google Ads ad group. Each intent carries the wording the
 * searcher used (rental / hire / lease / free trial) so the page reads like the
 * ad that brought them here. Suburb personalisation (lib/ads-suburbs.ts) is
 * layered on top of every intent.
 *
 * URL = /{intent.slug}/{suburb-slug}  or  /{intent.slug}?loc={geo id}
 */

export type Faq = { q: string; a: string }

export type AdsIntent = {
  slug: string
  adGroup: string
  noun: string
  eyebrow: (place: string) => string
  h1: (place: string) => string
  h1Accent: string
  lead: (place: string) => string
  bullets: string[]
  formEyebrow: string
  formTitle: (place: string) => string
  formCta: string
  docketJob: (suburb: string) => string
  docketTrial: string
  docketThen: string
  pricingTitle: (suburb: string) => string
  pricingIntro: string
  stepsTitle: string
  step3Title: string
  step3Body: string
  localCta: (suburb: string) => string
  faqTitle: (suburb: string) => string
  faqs: (suburb: string) => Faq[]
  finalTitle: (suburb: string) => string
  finalBody: string
  metaTitle: (suburb: string) => string
  metaDescription: (suburb: string) => string
}

const SHARED_FAQ = {
  install: (suburb: string): Faq => ({
    q: `How quickly can you install in ${suburb}?`,
    a: `Most ${suburb} installs happen within 5 to 7 business days of booking. If your kitchen has power and a water point near the bench, the install takes 30 to 45 minutes. Tank-fed machines are available if there is no plumbing.`,
  }),
  breakdown: (): Faq => ({
    q: "What happens if the machine breaks?",
    a: "You call Chris on 0411 876 625. Most service calls are attended within 24 hours. If it needs the workshop, a loan machine goes in the same visit so your team is never without coffee. Servicing and parts are included in the weekly rate.",
  }),
  machines: (): Faq => ({
    q: "Which machines do you supply?",
    a: "WMF and Eversys for higher volumes, Jura, Dr Coffee and Faemina for smaller teams. All bean-to-cup super-automatics, so anyone on your team can make a decent flat white without barista training. Chris matches the model to your headcount on the first call.",
  }),
}

export const ADS_INTENTS: Record<string, AdsIntent> = {
  "coffee-machine-rental": {
    slug: "coffee-machine-rental",
    adGroup: "Rental",
    noun: "rental",
    eyebrow: (place) => `Now installing in ${place}`,
    h1: (place) => `Office coffee machine rental in ${place}.`,
    h1Accent: "Free for the first 7 days.",
    lead: (place) =>
      `A commercial machine delivered, plumbed in and dialled in at your ${place} office by Chris. Beans, servicing and consumables included from $35 a week. If your team doesn't love it, we pick it up. Nothing to pay.`,
    bullets: [
      "Free delivery, install and staff training",
      "Beans, cups and servicing in one weekly rate",
      "Month to month after the trial, no lock-in",
      "Loan machine if yours ever needs the workshop",
    ],
    formEyebrow: "7-day free trial",
    formTitle: (place) => `Book a machine for your ${place} office`,
    formCta: "Book my free 7-day trial",
    docketJob: (suburb) => `Office coffee machine rental, ${suburb}`,
    docketTrial: "7 days, no charge, no card",
    docketThen: "From $35 a week, all inclusive, month to month",
    pricingTitle: (suburb) => `What a coffee machine rental costs in ${suburb}`,
    pricingIntro:
      "One weekly rate. No setup fee, no service charges, no consumables bill. Beans are the only variable, and Chris quotes those up front based on how much your team drinks.",
    stepsTitle: "From this form to your first flat white in about a week",
    step3Title: "Drink the coffee. Then decide.",
    step3Body:
      "Live with it for a week at no cost. Keep it month to month, swap to a different machine, or hand it back. Whichever you choose, Chris comes and sorts it.",
    localCta: (suburb) => `Book a free trial in ${suburb}`,
    faqTitle: (suburb) => `Questions ${suburb} office managers ask first`,
    faqs: (suburb) => [
      {
        q: "What does the rental actually cost?",
        a: "From $35 a week for a small office, $55 for mid-size and $85 for large teams. That covers the machine, install, training, servicing, parts, a loan machine and consumables. Beans are quoted separately based on how much your team drinks. No setup fee and no exit fee.",
      },
      {
        q: "Is the 7-day trial really free? What is the catch?",
        a: "It is free. No card, no deposit, no invoice. You sign a one-page agreement that says the machine belongs to Boutique Coffee and we can collect it. If you do not keep it, Chris picks it up and that is the end of it. No follow-up sales calls.",
      },
      SHARED_FAQ.install(suburb),
      {
        q: "Are we locked into a contract?",
        a: "No. After the trial it is month to month. Give a month's notice and Chris collects the machine at no cost. If your team grows or shrinks, he swaps you to a bigger or smaller machine instead.",
      },
      SHARED_FAQ.breakdown(),
      SHARED_FAQ.machines(),
    ],
    finalTitle: (suburb) => `Better coffee in your ${suburb} office by this time next week.`,
    finalBody:
      "Fill in the form and Chris will call to confirm the machine and a date. Or skip the form and ring him now.",
    metaTitle: (suburb) => `Office Coffee Machine Rental ${suburb} | 7-Day Free Trial | Boutique Coffee`,
    metaDescription: (suburb) =>
      `Commercial coffee machine rental for ${suburb} offices from $35 a week. Delivered, installed and serviced by Chris. Try it free for 7 days, no card, no lock-in.`,
  },

  "coffee-machine-hire": {
    slug: "coffee-machine-hire",
    adGroup: "Hire",
    noun: "hire",
    eyebrow: (place) => `Hiring to ${place} offices now`,
    h1: (place) => `Coffee machine hire for ${place} offices.`,
    h1Accent: "First 7 days free.",
    lead: (place) =>
      `Hire a commercial coffee machine for your ${place} workplace. Chris delivers it, plumbs it in and trains your team. Beans, servicing and consumables sit inside one weekly hire rate from $35. No minimum hire period.`,
    bullets: [
      "Ongoing workplace hire, not a one-day event machine",
      "Delivery, install and training included in the hire",
      "Weekly hire rate covers beans, cups and servicing",
      "Hand it back with a month's notice, no exit fee",
    ],
    formEyebrow: "Free 7-day hire to start",
    formTitle: (place) => `Hire a machine for your ${place} office`,
    formCta: "Start my free 7-day hire",
    docketJob: (suburb) => `Coffee machine hire, ${suburb}`,
    docketTrial: "First 7 days free, no card",
    docketThen: "From $35 a week hire, month to month",
    pricingTitle: (suburb) => `What coffee machine hire costs in ${suburb}`,
    pricingIntro:
      "One weekly hire rate. No bond, no setup fee, no separate service invoices. Beans are quoted up front based on how much your team drinks.",
    stepsTitle: "From enquiry to a hired machine pouring coffee in about a week",
    step3Title: "Hire it, swap it or send it back",
    step3Body:
      "The first week costs nothing. After that the hire runs month to month at the weekly rate. Want a bigger machine, or none at all? One call to Chris.",
    localCta: (suburb) => `Hire a machine in ${suburb}`,
    faqTitle: (suburb) => `Questions ${suburb} businesses ask about hire`,
    faqs: (suburb) => [
      {
        q: "Is there a minimum hire period?",
        a: "No. The first 7 days are free, then the hire runs month to month. Give a month's notice whenever you want to stop and Chris collects the machine at no cost. Most clients have been hiring from us for over five years, but nothing holds you to that.",
      },
      {
        q: "What does the weekly hire rate include?",
        a: "The machine, delivery, install, staff training, all servicing and parts, a loan machine if yours goes to the workshop, and consumables (cups, sugar, stirrers, napkins) topped up on every visit. Beans are quoted separately based on volume. From $35 a week for a small office, $55 mid-size, $85 large.",
      },
      {
        q: "Do you do short-term or event hire?",
        a: "No. This is ongoing workplace hire for offices, showrooms, clinics and warehouses. If you need a machine for a single day or event, we are not the right fit and will say so on the phone.",
      },
      SHARED_FAQ.install(suburb),
      SHARED_FAQ.breakdown(),
      SHARED_FAQ.machines(),
    ],
    finalTitle: (suburb) => `Hire a coffee machine for your ${suburb} office this week.`,
    finalBody:
      "Fill in the form and Chris will call to confirm the machine and a delivery date. The first 7 days are on us.",
    metaTitle: (suburb) => `Coffee Machine Hire ${suburb} | Office Machines from $35 a Week | Boutique Coffee`,
    metaDescription: (suburb) =>
      `Commercial coffee machine hire for ${suburb} workplaces. Delivered, installed and serviced by Chris. First 7 days free, then from $35 a week. No minimum hire period.`,
  },

  "coffee-machine-lease": {
    slug: "coffee-machine-lease",
    adGroup: "Lease",
    noun: "lease",
    eyebrow: (place) => `Fully maintained leases in ${place}`,
    h1: (place) => `Commercial coffee machine lease in ${place}.`,
    h1Accent: "No fixed term. From $35 a week.",
    lead: (place) =>
      `Lease a commercial coffee machine for your ${place} office without tying up capital or signing a three-year term. One weekly payment covers the machine, install, beans, servicing and parts. Start with 7 days free.`,
    bullets: [
      "No capital outlay, no balloon payment, no fixed term",
      "Fully maintained: servicing, parts and a loan machine included",
      "Weekly payment is an operating expense, not an asset to depreciate",
      "Scale the machine up or down as your headcount changes",
    ],
    formEyebrow: "Start with 7 days free",
    formTitle: (place) => `Lease a machine for your ${place} office`,
    formCta: "Start with 7 days free",
    docketJob: (suburb) => `Commercial coffee machine lease, ${suburb}`,
    docketTrial: "First 7 days free, no card",
    docketThen: "From $35 a week lease, no fixed term",
    pricingTitle: (suburb) => `What a coffee machine lease costs in ${suburb}`,
    pricingIntro:
      "A mid-range commercial machine costs $5,000 to $15,000 to buy outright, and then you pay separately for servicing. Our lease runs from $35 a week with everything inside it, and you can end it with a month's notice.",
    stepsTitle: "From enquiry to a leased machine on the bench in about a week",
    step3Title: "Seven days free, then the lease starts",
    step3Body:
      "Use the machine for a week at no cost. If it suits, the weekly lease payment starts from day 8 with no paperwork beyond the one-page agreement you already signed. If not, Chris collects it.",
    localCta: (suburb) => `Lease a machine in ${suburb}`,
    faqTitle: (suburb) => `Questions ${suburb} finance managers ask about the lease`,
    faqs: (suburb) => [
      {
        q: "Is there a fixed lease term?",
        a: "No. The lease runs month to month after the free week. A month's notice ends it, with no exit fee and no balloon payment. That is unusual for equipment leases, and it is deliberate: we would rather you stay because the coffee is good than because a contract says so.",
      },
      {
        q: "Lease or buy outright?",
        a: "Buying a mid-range commercial machine costs $5,000 to $15,000 up front, plus servicing, parts and eventually disposal. Leasing at $35 to $85 a week keeps that cash in the business, and the weekly payment is an operating expense rather than an asset you depreciate. Small businesses can also claim the GST on each payment. Your accountant can confirm how it sits for you; the write-off rules for purchases change by financial year.",
      },
      {
        q: "What does the lease include?",
        a: "The machine, delivery, install, staff training, all servicing and parts, a loan machine during any workshop repair, and consumables on every service visit. Beans are quoted separately based on volume. Nothing else is invoiced.",
      },
      {
        q: "Can we upgrade during the lease?",
        a: "Yes. If your team grows from 12 to 40 people, Chris swaps the machine up a tier and the weekly rate moves with it. Downsizing works the same way. No new contract, no penalty.",
      },
      SHARED_FAQ.install(suburb),
      SHARED_FAQ.breakdown(),
    ],
    finalTitle: (suburb) => `Lease a coffee machine for your ${suburb} office. No fixed term.`,
    finalBody:
      "Fill in the form and Chris will call to confirm the machine, the weekly rate and a delivery date. The first 7 days cost nothing.",
    metaTitle: (suburb) => `Commercial Coffee Machine Lease ${suburb} | No Fixed Term | Boutique Coffee`,
    metaDescription: (suburb) =>
      `Fully maintained coffee machine lease for ${suburb} offices from $35 a week. No capital outlay, no fixed term, servicing and parts included. First 7 days free.`,
  },

  "free-coffee-machine-trial": {
    slug: "free-coffee-machine-trial",
    adGroup: "Free trial and near me",
    noun: "free trial",
    eyebrow: (place) => `Free trials available in ${place} this month`,
    h1: (place) => `Free 7-day coffee machine trial for ${place} offices.`,
    h1Accent: "No card. No catch. Installed by Chris.",
    lead: (place) =>
      `A commercial coffee machine in your ${place} office for a week at no cost. Chris delivers it, installs it and trains your team. If you keep it, it's from $35 a week. If you don't, he picks it up and that's the end of it.`,
    bullets: [
      "Free machine, install, training and starter beans for 7 days",
      "No credit card, no deposit, no invoice",
      "Keep it from $35 a week or hand it back, your call",
      "Installing near you: most trials start within the week",
    ],
    formEyebrow: "Free 7-day trial",
    formTitle: (place) => `Book your free trial in ${place}`,
    formCta: "Book my free 7-day trial",
    docketJob: (suburb) => `Free 7-day trial, ${suburb}`,
    docketTrial: "7 days, no charge, no card, no obligation",
    docketThen: "Keep it from $35 a week, or we collect it",
    pricingTitle: (suburb) => `What it costs after the free trial in ${suburb}`,
    pricingIntro:
      "The trial is free. After that, one weekly rate with everything inside it. No setup fee, no service charges, and no exit fee if you decide to stop.",
    stepsTitle: "From this form to a free machine on your bench in about a week",
    step3Title: "Seven days on us. Then you choose.",
    step3Body:
      "Drink the coffee for a week at no cost. Keep the machine from $35 a week, swap it for a different model, or hand it back. Chris comes and sorts whichever you pick.",
    localCta: (suburb) => `Book a free trial in ${suburb}`,
    faqTitle: (suburb) => `The questions ${suburb} offices ask before a free trial`,
    faqs: (suburb) => [
      {
        q: "Is it really free? What is the catch?",
        a: "It is free. No card, no deposit, no invoice. For 7 days you get the machine, install, training and a starter supply of beans at zero cost. You sign a one-page agreement saying the machine belongs to Boutique Coffee and we can collect it. If you do not keep it, Chris picks it up and that is the end of it. No follow-up sales calls.",
      },
      {
        q: "Is the machine free after the trial too?",
        a: "No, and we would rather say that plainly. Some suppliers advertise a free machine that is tied to a minimum bean order every month. Ours is a straight weekly rate from $35 with no minimum bean order, and the trial week is free so you can judge the coffee before paying anything.",
      },
      SHARED_FAQ.install(suburb),
      {
        q: "What if we want to keep it after 7 days?",
        a: "Tell Chris and the weekly rate starts from day 8. From $35 a week for a small office, $55 mid-size, $85 large, covering servicing, parts, a loan machine and consumables. Month to month, a month's notice to stop.",
      },
      SHARED_FAQ.breakdown(),
      SHARED_FAQ.machines(),
    ],
    finalTitle: (suburb) => `Your ${suburb} office could be drinking better coffee by this time next week. Free.`,
    finalBody:
      "Fill in the form and Chris will call to confirm the machine and an install date. Nothing to pay, nothing to sign beyond one page.",
    metaTitle: (suburb) => `Free 7-Day Coffee Machine Trial ${suburb} | No Card | Boutique Coffee`,
    metaDescription: (suburb) =>
      `Try a commercial coffee machine in your ${suburb} office free for 7 days. Delivered, installed and trained by Chris. No card, no obligation. Keep it from $35 a week.`,
  },
}

export const INTENT_SLUGS = Object.keys(ADS_INTENTS)

export const ADS_PATH_PREFIXES = INTENT_SLUGS.map((s) => `/${s}`)

export function getIntent(slug: string): AdsIntent | undefined {
  return ADS_INTENTS[slug]
}

export function isAdsLanderPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  return ADS_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`) || pathname.startsWith(`${p}?`))
}

export function adsLanderHome(pathname: string | null | undefined): string {
  if (!pathname) return ADS_PATH_PREFIXES[0]
  return ADS_PATH_PREFIXES.find((p) => pathname === p || pathname.startsWith(`${p}/`)) ?? ADS_PATH_PREFIXES[0]
}

/** Shared conversion page for every intent. Keep stable: the Ads conversion fires on it. */
export const ADS_THANK_YOU_PATH = "/coffee-machine-rental/thank-you"
