import type { Metadata } from "next"
import { HowItWorksHero } from "@/components/how-it-works-hero"
import { HowItWorksSummary } from "@/components/how-it-works-summary"
import { HowItWorksSteps } from "@/components/how-it-works-steps"
import { HowItWorksOngoing } from "@/components/how-it-works-ongoing"
import { HowItWorksFaq } from "@/components/how-it-works-faq"
import { HowItWorksCta } from "@/components/how-it-works-cta"

export const metadata: Metadata = {
  title: "How It Works, From first call to first coffee in 5 to 7 days, Boutique Coffee at Work Melbourne",
  description:
    "The exact six-step process behind every Boutique Coffee rental. Enquiry, phone call, site visit, install, first brew, and ongoing service. Most Melbourne clients go from first call to installed machine in five to seven business days.",
  openGraph: {
    title: "How It Works, Boutique Coffee at Work",
    description:
      "Six simple steps from first enquiry to first espresso shot. Most Melbourne clients are pulling their first coffee within 5 to 7 business days.",
    type: "website",
  },
}

export default function HowItWorksPage() {
  return (
    <main className="bg-background">
      <HowItWorksHero />
      <HowItWorksSummary />
      <HowItWorksSteps />
      <HowItWorksOngoing />
      <HowItWorksFaq />
      <HowItWorksCta />
    </main>
  )
}
