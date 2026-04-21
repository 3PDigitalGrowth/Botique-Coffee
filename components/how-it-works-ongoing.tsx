"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Wrench, PhoneCall } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"

const cards = [
  {
    icon: Package,
    title: "Beans and consumables on every visit",
    body: "Freshly roasted Victorian beans delivered and topped up on every service call. Cups, sugar sticks, stirrers, napkins and cleaning products included in the rental. You never run out, you never have to remember to reorder.",
  },
  {
    icon: Wrench,
    title: "Scheduled service, predictable rhythm",
    body: "A regular service cycle based on your volume, typically fortnightly for small offices and weekly for busy kitchens. Clean, calibrate, check pressure, change filters, small fixes on the spot. In and out in twenty minutes.",
  },
  {
    icon: PhoneCall,
    title: "One call, any problem",
    body: "Something breaks mid-morning? Call Chris on 0411 876 625. Most things get talked through in two minutes. Anything bigger, we are usually on-site the same day or the next. No tickets, no call centres, no escalation paths.",
  },
]

export function HowItWorksOngoing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 md:mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            After day one
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            What ongoing service actually looks like
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The rental covers more than the machine. This is the part most suppliers quietly underdeliver on, and it is the part we are built around.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-2xl bg-background p-7 md:p-8 border border-border shadow-sm transition-all duration-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-copper/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-copper" strokeWidth={2} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                  {card.body}
                </p>
              </div>
            )
          })}
        </div>

        <div
          className="mt-12 md:mt-16 flex justify-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "500ms",
          }}
        >
          <TestimonialCard
            quote="We've been with Boutique Coffee for over five years. The machine in our reception is a real asset, customers and staff love the coffee, and Chris's team has a 'nothing is too hard' attitude on service. Highly recommend for any business that cares about the details."
            name="Santo & Alex"
          />
        </div>
      </div>
    </section>
  )
}
