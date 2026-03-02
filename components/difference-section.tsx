"use client"

import { Handshake, Users, Coffee } from "lucide-react"

const pillars = [
  {
    icon: Handshake,
    title: "Relationships",
    description: "We build long-term partnerships, not transactional relationships. Your success is our success.",
    position: "top-0 left-0",
  },
  {
    icon: Users,
    title: "Community",
    description: "We connect businesses with local artisan roasters, supporting the community that supports us.",
    position: "top-20 right-0",
  },
  {
    icon: Coffee,
    title: "Quality",
    description: "Every bean is ethically sourced and expertly roasted. No compromises, no shortcuts.",
    position: "top-40 left-1/4",
  },
]

export function DifferenceSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-[oklch(0.98_0.01_45)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-12 text-center text-balance">
          The Difference is in the Details
        </h2>

        {/* Organic flowing layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative inline-block">
                    <Icon
                      className="w-12 h-12 text-[oklch(0.7_0.15_45)] stroke-[1.5] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground">{pillar.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
