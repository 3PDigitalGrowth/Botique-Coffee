"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Users, Sparkles } from "lucide-react"

const differentiators = [
  {
    icon: Heart,
    title: "Founder-led, always",
    description:
      "You're not passed between departments. Chris stays accountable for the experience, from setup to ongoing support.",
  },
  {
    icon: Users,
    title: "Local roasters, chosen on purpose",
    description:
      "We partner with roasters who care about ethical sourcing, sustainability, and flavour that holds up in the workplace.",
  },
  {
    icon: Sparkles,
    title: "Café-quality, made practical",
    description:
      "The right machine, dialled-in beans, and training that makes great coffee easy for real teams, not baristas.",
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 md:mb-16 text-center opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Our Difference</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Why Choose Us
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start opacity-0 transition-all duration-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 200}ms`,
                  marginLeft: index % 2 === 0 ? "0" : "auto",
                  marginRight: index % 2 === 0 ? "auto" : "0",
                  maxWidth: "700px",
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.7_0.15_45)]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[oklch(0.7_0.15_45)]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed text-pretty">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="mt-16 pt-12 border-t border-muted text-center opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <p className="text-muted-foreground text-base italic max-w-2xl mx-auto">
            If you want a supplier, there are plenty. If you want a coffee partner, you're in the right place.
          </p>
        </div>
      </div>
    </section>
  )
}
