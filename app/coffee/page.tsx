import { CoffeeHero } from "@/components/coffee-hero"
import { CoffeePhilosophy } from "@/components/coffee-philosophy"
import { RoasterStories } from "@/components/roaster-stories"
import { PartnershipOpportunities } from "@/components/partnership-opportunities"
import { CoffeeSelection } from "@/components/coffee-selection"
import { CoffeeExperience } from "@/components/coffee-experience"
import { SourcingCommitment } from "@/components/sourcing-commitment"
import { CoffeeCTA } from "@/components/coffee-cta"

export default function CoffeePage() {
  return (
    <main className="min-h-screen">
      <CoffeeHero />
      <CoffeePhilosophy />
      <RoasterStories />
      <PartnershipOpportunities />
      <CoffeeSelection />
      <CoffeeExperience />
      <SourcingCommitment />
      <CoffeeCTA />
    </main>
  )
}
