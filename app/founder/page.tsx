import FounderHero from "@/components/founder-hero"
import FounderStory from "@/components/founder-story"
import ChrisPhilosophy from "@/components/chris-philosophy"
import FounderPhilosophy from "@/components/founder-philosophy"
import ClientTestimonialsChris from "@/components/client-testimonials-chris"
import FounderCTA from "@/components/founder-cta"

export default function FounderPage() {
  return (
    <main className="bg-background">
      <FounderHero />
      <FounderStory />
      <ChrisPhilosophy />
      <FounderPhilosophy />
      <ClientTestimonialsChris />
      <FounderCTA />
    </main>
  )
}
