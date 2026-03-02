"use client"

import { useState } from "react"
import Image from "next/image"

const steps = [
  {
    step: "01",
    title: "We Listen",
    heading: "Personal Consultation",
    description: "Every partnership begins with understanding. Chris sits down with you - not to sell, but to listen. What drives your team? What slows them down? We explore your culture, your challenges, and your aspirations. This isn't a sales pitch; it's the start of a relationship built on genuine care. We believe that great coffee solutions begin with truly understanding who you are, what you value, and what your workplace needs to thrive. That's why we take time to learn your story, your goals, and the daily rhythms of your business. Your success is our success.",
    imageUrl: "/chris-consultation-warm-setting.jpg",
    imageAlt: "Chris in a warm consultation setting",
  },
  {
    step: "02",
    title: "We Recommend",
    heading: "Custom Proposal",
    description: "Armed with insights from our conversation, we craft a tailored proposal. Not a cookie-cutter package, but a thoughtful recommendation that considers your unique needs, space, and budget. We present options with transparency, helping you make an informed decision that feels right for your business. Our recommendations aren't generic - they're built specifically for you. We consider everything from your office layout and aesthetic preferences to your team size and usage patterns. We'll walk you through each option, explaining the benefits and trade-offs so you can choose with confidence.",
    imageUrl: "/custom-coffee-proposal-planning.jpg",
    imageAlt: "Custom proposal planning session",
  },
  {
    step: "03",
    title: "We Install",
    heading: "Seamless Installation",
    description: "Our team arrives on schedule, equipped and prepared. We handle everything - from setup to training - with minimal disruption to your workflow. Your team learns not just how to operate the equipment, but how to achieve café-quality results every time. We don't leave until you're confident and delighted. Installation day is about more than just placing a machine. We ensure everything is perfectly positioned, dialled in, and ready to deliver exceptional coffee from day one. Our team provides hands-on training so every member of your team feels empowered to create café-quality drinks. We're thorough, professional, and genuinely invested in your success.",
    imageUrl: "/professional-coffee-machine-installation.jpg",
    imageAlt: "Professional installation in progress",
  },
  {
    step: "04",
    title: "We Support",
    heading: "Ongoing Partnership",
    description: "This is where others stop, but where we truly begin. Regular maintenance keeps your equipment performing at its peak. When you need us, we're there - responsive, reliable, and resourceful. We become an extension of your team, ensuring your coffee culture thrives day after day. Ongoing support means proactive maintenance, priority service when issues arise, and regular check-ins to ensure you're delighted with your setup. We handle repairs quickly and efficiently, minimising downtime. We deliver fresh beans on schedule and are always available for advice, troubleshooting, or equipment adjustments. You have direct access to Chris and the team whenever you need us.",
    imageUrl: "/service-technician-maintenance.jpg",
    imageAlt: "Service technician providing ongoing support",
  },
  {
    step: "05",
    title: "We Grow Together",
    heading: "Shared Growth",
    description: "As your business evolves, so does your coffee program. We celebrate your milestones, adapt to your changing needs, and continue to elevate your coffee experience. You're not just a client - you're part of a community that values quality, connection, and the small moments that make work meaningful. We view our relationships as long-term partnerships. If your team grows, we scale with you. If your preferences change, we adapt. We're here to support your workplace culture through every phase of growth. Together, we build a coffee experience that becomes part of your identity and strengthens the connections within your team.",
    imageUrl: "/team-celebration-coffee-culture.jpg",
    imageAlt: "Team celebrating together with coffee",
  },
]

export function JourneyStepsInteractive() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Step Navigation */}
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 text-left ${
                  activeStep === index
                    ? "bg-[oklch(0.7_0.15_45)]/10 border border-[oklch(0.7_0.15_45)]"
                    : "bg-transparent border border-transparent hover:bg-muted/30"
                }`}
              >
                <span
                  className={`flex-shrink-0 text-2xl md:text-3xl font-serif font-bold transition-colors duration-300 ${
                    activeStep === index ? "text-[oklch(0.7_0.15_45)]" : "text-muted-foreground"
                  }`}
                >
                  {step.step}
                </span>
                <span
                  className={`flex-1 text-sm md:text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                    activeStep === index ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Step Content */}
          <div className="flex flex-col gap-6">
            <div
              className="opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
              key={activeStep}
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={steps[activeStep].imageUrl || "/placeholder.svg"}
                  alt={steps[activeStep].imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                {steps[activeStep].heading}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
