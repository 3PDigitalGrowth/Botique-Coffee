"use client"
import { HeroSection } from "@/components/hero-section"
import { ProofStrip } from "@/components/proof-strip"
import { HowItWorksPreview } from "@/components/how-it-works-preview"
import { FeaturedTestimonial } from "@/components/featured-testimonial"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CoffeePartnersTeaser } from "@/components/coffee-partners-teaser"
import { SolutionsOverview } from "@/components/solutions-overview"
import { WhatsIncluded } from "@/components/whats-included"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <HeroSection />
      <ProofStrip />
      <HowItWorksPreview />
      <FeaturedTestimonial />
      <WhyChooseUs />
      <CoffeePartnersTeaser />
      <SolutionsOverview />
      <WhatsIncluded />
      {/* </CHANGE> */}
      <CTASection />
    </main>
  )
}
