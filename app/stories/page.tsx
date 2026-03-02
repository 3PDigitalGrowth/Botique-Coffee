import { StoriesHero } from "@/components/stories-hero"
import { FeaturedStory } from "@/components/featured-story"
import { ClientStory } from "@/components/client-story"
import { StoriesFinalCta } from "@/components/stories-final-cta"

export default function StoriesPage() {
  return (
    <main className="bg-background">
      <StoriesHero />
      {/* </CHANGE> */}

      <FeaturedStory />

      <ClientStory
        layout="offset-left"
        company="Pixel & Code"
        industry="Design Studio"
        quote="Chris doesn't just deliver coffee machines - he creates experiences. Our team's productivity and morale skyrocketed."
        testimonial="When we were scaling from 8 to 25 people, coffee became a real pain point. Chris sat with us for an hour, understanding our workflow, our culture, even our aesthetic preferences. The solution he designed wasn't just functional - it became a centrepiece of our studio. Morning coffee is now a ritual that brings the whole team together."
        clientName="Sarah Chen"
        clientRole="Creative Director"
        workplaceImage="/pixel-code-workspace.jpg"
        clientImage="/sarah-chen-portrait.jpg"
        keyBenefit="Improved Team Morale"
      />

      <ClientStory
        layout="full-width"
        company="Maven Ventures"
        industry="Venture Capital"
        quote="The attention to detail and personal touch is unprecedented in a service provider."
        testimonial="In our world, first impressions matter immensely. When investors and founders visit our office, the coffee experience is part of our brand story. Chris understood this immediately. He didn't pitch us machines - he asked about our values, our aesthetic, our guests. The result is seamless, elegant, and always conversation-worthy."
        clientName="James Morrison"
        clientRole="Managing Partner"
        workplaceImage="/maven-ventures-office.jpg"
        clientImage="/james-morrison-portrait.jpg"
        keyBenefit="Better Client Impressions"
      />

      <ClientStory
        layout="offset-right"
        company="Greenleaf Architecture"
        industry="Architecture Firm"
        quote="It's rare to find someone who cares as much about the details as we do."
        testimonial="As architects, we're obsessed with space, light, and materials. Chris approached our coffee solution with the same mindset. He visited our studio, studied our workflow, and designed a setup that feels like it was always meant to be there. It's not just about the coffee - it's about creating moments of pause and connection in our day."
        clientName="Michael Torres"
        clientRole="Principal Architect"
        workplaceImage="/greenleaf-architecture-office.jpg"
        clientImage="/michael-torres-portrait.jpg"
        keyBenefit="Enhanced Workplace Design"
      />

      <ClientStory
        layout="narrow-center"
        company="Kindred Wellness"
        industry="Health & Wellness"
        quote="Chris brought warmth and intention to something we never thought twice about."
        testimonial="Our practice is built on mindfulness and care. We needed our space to reflect that, including the small moments like making coffee. Chris got it immediately - he helped us create a coffee station that feels like a meditation, not a transaction."
        clientName="Dr. Elena Rodriguez"
        clientRole="Founder"
        workplaceImage="/kindred-wellness-space.jpg"
        clientImage="/elena-rodriguez-portrait.jpg"
        keyBenefit="Mindful Workplace Culture"
      />

      <ClientStory
        layout="split"
        company="Forward Labs"
        industry="Tech Innovation"
        quote="He's built coffee into our company culture."
        testimonial="Fast-paced doesn't mean we skip the good stuff. Chris helped us design a coffee setup that keeps up with our speed but never compromises on quality. Our team actually looks forward to coffee breaks now - it's become part of our innovation ritual."
        clientName="Alex Kumar"
        clientRole="CTO"
        workplaceImage="/forward-labs-office.jpg"
        clientImage="/alex-kumar-portrait.jpg"
        keyBenefit="Improved Staff Retention"
      />

      <StoriesFinalCta />
    </main>
  )
}
