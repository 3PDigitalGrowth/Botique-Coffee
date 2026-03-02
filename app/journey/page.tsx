import { JourneyHero } from "@/components/journey-hero"
import { JourneyStep } from "@/components/journey-step"

export default function JourneyPage() {
  return (
    <main className="bg-background">
      <JourneyHero />

      <JourneyStep
        step="01"
        title="Discovery Call"
        heading="Personal Consultation"
        description="Every partnership begins with understanding. Chris sits down with you - not to sell, but to listen. What drives your team? What slows them down? We explore your culture, your challenges, and your aspirations. This isn't a sales pitch; it's the start of a relationship built on genuine care."
        imageUrl="/chris-consultation-warm-setting.jpg"
        imageAlt="Chris in a warm consultation setting"
        alignment="left"
      />

      <JourneyStep
        step="02"
        title="Custom Proposal"
        heading="Curated Coffee Plan"
        description="Armed with insights from our conversation, we craft a tailored proposal. Not a cookie-cutter package, but a thoughtful recommendation that considers your unique needs, space, and budget. We present options with transparency, helping you make an informed decision that feels right for your business."
        imageUrl="/custom-coffee-proposal-planning.jpg"
        imageAlt="Custom proposal planning session"
        alignment="right"
      />

      <JourneyStep
        step="03"
        title="Seamless Setup"
        heading="Professional Installation"
        description="Our team arrives on schedule, equipped and prepared. We handle everything - from setup to training - with minimal disruption to your workflow. Your team learns not just how to operate the equipment, but how to achieve café-quality results every time. We don't leave until you're confident and delighted."
        imageUrl="/professional-coffee-machine-installation.jpg"
        imageAlt="Professional installation in progress"
        alignment="left"
      />

      <JourneyStep
        step="04"
        title="Ongoing Support"
        heading="Maintenance & Partnership"
        description="This is where others stop, but where we truly begin. Regular maintenance keeps your equipment performing at its peak. When you need us, we're there - responsive, reliable, and resourceful. We become an extension of your team, ensuring your coffee culture thrives day after day."
        imageUrl="/service-technician-maintenance.jpg"
        imageAlt="Service technician providing ongoing support"
        alignment="right"
      />

      <JourneyStep
        step="05"
        title="Growing Together"
        heading="Shared Growth"
        description="As your business evolves, so does your coffee program. We celebrate your milestones, adapt to your changing needs, and continue to elevate your coffee experience. You're not just a client - you're part of a community that values quality, connection, and the small moments that make work meaningful."
        imageUrl="/team-celebration-coffee-culture.jpg"
        imageAlt="Team celebrating together with coffee"
        alignment="left"
        isLast={true}
      />
    </main>
  )
}
