import type { Metadata } from "next"
import { TrialHero } from "@/components/landing/trial-hero"
import { TrialTrustBar } from "@/components/landing/trial-trust-bar"
import { TrialSteps } from "@/components/landing/trial-steps"
import { TrialIncluded } from "@/components/landing/trial-included"
import { TrialBenefits } from "@/components/landing/trial-benefits"
import { TrialTestimonials } from "@/components/landing/trial-testimonials"
import { TrialGuarantee } from "@/components/landing/trial-guarantee"
import { TrialFaq } from "@/components/landing/trial-faq"
import { TrialFinalCta } from "@/components/landing/trial-final-cta"
import { TrialStickyCta } from "@/components/landing/trial-sticky-cta"

export const metadata: Metadata = {
  title: "30-Day Free Coffee Machine Trial | For Victorian Businesses | Boutique Coffee",
  description:
    "Try a premium commercial coffee machine in your Victorian workplace, free for 30 days, delivered and installed on-site. No card, no lock-in. Founder-led by Chris.",
  openGraph: {
    title: "30-Day Free Coffee Machine Trial for Victorian Businesses",
    description:
      "A premium coffee machine in your workplace. Free for 30 days, delivered and installed on-site. No card. No lock-in.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FreeTrialPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <TrialHero />
      <TrialTrustBar />
      <TrialSteps />
      <TrialIncluded />
      <TrialBenefits />
      <TrialTestimonials />
      <TrialGuarantee />
      <TrialFaq />
      <TrialFinalCta />
      <TrialStickyCta />
    </main>
  )
}
