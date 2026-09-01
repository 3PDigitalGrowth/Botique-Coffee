import type { ResolvedSuburb } from "@/lib/ads-suburbs"
import type { AdsIntent } from "@/lib/ads-intents"
import { TrialTestimonials } from "@/components/landing/trial-testimonials"
import { TrialGuarantee } from "@/components/landing/trial-guarantee"
import { TrialStickyCta } from "@/components/landing/trial-sticky-cta"
import { AdsHero } from "./ads-hero"
import { AdsTrustBar } from "./ads-trust-bar"
import { AdsDocket } from "./ads-docket"
import { AdsPricing } from "./ads-pricing"
import { AdsSteps } from "./ads-steps"
import { AdsLocal } from "./ads-local"
import { AdsFaq } from "./ads-faq"
import { AdsFinalCta } from "./ads-final-cta"

export function AdsLander({ intent, suburb }: { intent: AdsIntent; suburb: ResolvedSuburb }) {
  const name = suburb.name
  const regionLabel = suburb.region?.label ?? null

  return (
    <main className="overflow-x-hidden bg-background">
      <AdsHero intent={intent} suburb={name} isMetroDefault={suburb.isMetroDefault} />
      <AdsTrustBar />
      <AdsDocket intent={intent} suburb={name} regionLabel={regionLabel} />
      <AdsPricing intent={intent} suburb={name} />
      <AdsSteps intent={intent} suburb={name} />
      <TrialTestimonials />
      <AdsLocal
        intent={intent}
        suburb={name}
        regionLabel={regionLabel}
        nearby={suburb.nearby}
        known={suburb.known}
      />
      <TrialGuarantee />
      <AdsFaq title={intent.faqTitle(name)} faqs={intent.faqs(name)} />
      <AdsFinalCta intent={intent} suburb={name} />
      <TrialStickyCta />
    </main>
  )
}
