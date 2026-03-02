import { CreativeAgenciesSection } from "@/components/creative-agencies-section"
import { TechStartupsSection } from "@/components/tech-startups-section"
import { ProfessionalServicesSection } from "@/components/professional-services-section"
import { GrowingBusinessesSection } from "@/components/growing-businesses-section"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsFinalCta } from "@/components/solutions-final-cta"

export default function SolutionsPage() {
  return (
    <main className="bg-background">
      <SolutionsHero />
      <CreativeAgenciesSection />
      <TechStartupsSection />
      <ProfessionalServicesSection />
      <GrowingBusinessesSection />
      <SolutionsFinalCta />
    </main>
  )
}
