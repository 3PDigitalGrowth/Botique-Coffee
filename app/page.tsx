"use client"
import { HeroSection } from "@/components/hero-section"
import { FreeTrialStrip } from "@/components/free-trial-strip"
import { HowItWorksPreview } from "@/components/how-it-works-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { WhatsIncluded } from "@/components/whats-included"
import { CoffeePartnersTeaser } from "@/components/coffee-partners-teaser"
import { SolutionsOverview } from "@/components/solutions-overview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <HeroSection />
      <FreeTrialStrip />
      <HowItWorksPreview />
      <WhyChooseUs />
      <WhatsIncluded />
      <CoffeePartnersTeaser />
      <SolutionsOverview />
      <CTASection />
    </main>
  )
}
