import type { Metadata } from "next"
import { CoffeeHero } from "@/components/coffee-hero"
import { CoffeePhilosophy } from "@/components/coffee-philosophy"
import { RoasterStories } from "@/components/roaster-stories"
import { PartnershipOpportunities } from "@/components/partnership-opportunities"
import { CoffeeSelection } from "@/components/coffee-selection"
import { CoffeeCTA } from "@/components/coffee-cta"

export const metadata: Metadata = {
  title: "The Coffee, Fresh beans and supply included with every rental, Boutique Coffee at Work Melbourne",
  description:
    "Every Boutique Coffee rental includes fresh, locally roasted beans delivered weekly. Victorian-roasted, matched to your team's taste, topped up on every service visit. Melbourne workplace coffee from $35 a week.",
  openGraph: {
    title: "The Coffee, included with every Boutique Coffee at Work rental",
    description:
      "Fresh, locally roasted Victorian beans delivered to your Melbourne workplace. Matched to your team's taste. Topped up on every service visit.",
    type: "website",
  },
}

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-background">
      <CoffeeHero />
      <CoffeePhilosophy />
      <RoasterStories />
      <PartnershipOpportunities />
      <CoffeeSelection />
      <CoffeeCTA />
    </main>
  )
}
