import type { Metadata } from "next"
import FounderHero from "@/components/founder-hero"
import FounderPhilosophy from "@/components/founder-philosophy"
import FounderStory from "@/components/founder-story"
import ChrisPhilosophy from "@/components/chris-philosophy"
import ClientTestimonialsChris from "@/components/client-testimonials-chris"
import FounderCTA from "@/components/founder-cta"

export const metadata: Metadata = {
  title: "About Chris Prokopiou, Founder of Boutique Coffee at Work Melbourne",
  description:
    "Chris Prokopiou founded Boutique Coffee at Work in 2008. Seventeen years on, he still runs every client relationship personally. Melbourne workplace coffee machine rentals, from $35 a week.",
  openGraph: {
    title: "About Chris Prokopiou, Founder of Boutique Coffee at Work",
    description:
      "Chris Prokopiou founded Boutique Coffee at Work in 2008. Seventeen years on, he still runs every client relationship personally.",
    type: "profile",
  },
}

export default function FounderPage() {
  return (
    <main className="bg-background">
      <FounderHero />
      <FounderPhilosophy />
      <FounderStory />
      <ChrisPhilosophy />
      <ClientTestimonialsChris />
      <FounderCTA />
    </main>
  )
}
