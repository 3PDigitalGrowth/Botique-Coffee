"use client"

import { useRef } from "react"

const partners = [
  {
    name: "Artisan Roasters Co.",
    logo: "/artisan-coffee-roasters-logo-elegant-minimal.jpg",
    description: "Small-batch specialty roasts",
  },
  {
    name: "Mountain Peak Coffee",
    logo: "/mountain-peak-coffee-logo-elegant-minimal.jpg",
    description: "High-altitude single origins",
  },
  {
    name: "Urban Bean Collective",
    logo: "/urban-bean-collective-logo-elegant-minimal.jpg",
    description: "Locally roasted blends",
  },
  {
    name: "Heritage Coffee Co.",
    logo: "/heritage-coffee-company-logo-elegant-minimal.jpg",
    description: "Traditional roasting methods",
  },
  {
    name: "Sustainable Grounds",
    logo: "/sustainable-grounds-coffee-logo-elegant-minimal.jpg",
    description: "Organic & fair trade",
  },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 text-balance">
          Artisan Partners
        </h2>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-[oklch(0.7_0.15_45)] scrollbar-track-transparent"
          style={{
            scrollbarWidth: "thin",
          }}
        >
          {partners.map((partner, index) => (
            <div key={partner.name} className="flex-shrink-0 w-64 group cursor-pointer">
              <div className="bg-[oklch(0.98_0.01_45)] p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Logo */}
                <div className="aspect-[2/1] mb-4 flex items-center justify-center bg-background/50">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-sm tracking-[0.2em] uppercase text-foreground font-medium">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-sm text-muted-foreground mt-4 text-center md:text-left">Scroll to explore our partners →</p>
      </div>
    </section>
  )
}
