"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Coffee, Truck, Users, Leaf, Package, Wrench, Repeat, ArrowRight } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"

const items = [
  {
    icon: Coffee,
    title: "Commercial-grade machine",
    body: "Matched to your team size and daily volume. Choose from WMF (German), Jura (Swiss), Eversys (Swiss), Dr Coffee, and Faemina. The same machines used by boutique Melbourne cafés.",
  },
  {
    icon: Truck,
    title: "Professional installation",
    body: "Delivered and installed on-site by our Melbourne team. Plumbed or tanked depending on your space. No call-out fees.",
  },
  {
    icon: Users,
    title: "Staff training, on-site",
    body: "We train your team on install day, dial in the grind, and make sure at least two people can pull a proper shot before we leave.",
  },
  {
    icon: Leaf,
    title: "Freshly roasted beans",
    body: "A regular supply of locally roasted Victorian beans delivered to your door. Hot chocolate and alternatives available too.",
  },
  {
    icon: Package,
    title: "Consumables on every service call",
    body: "Eco-friendly cups, sugar sticks, wooden stirrers, and paper napkins topped up whenever we visit.",
  },
  {
    icon: Wrench,
    title: "All servicing and maintenance",
    body: "Every service call, part, and on-site fix is covered. One call to Chris and we handle it, no tickets, no call centres.",
  },
  {
    icon: Repeat,
    title: "Temporary replacement machine",
    body: "If anything ever needs a workshop repair, we drop in a loan machine at no extra charge. Your team never goes without coffee.",
  },
]

export function WhatsIncluded() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 md:mb-14 max-w-3xl transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            What's included in your rental
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            Everything included in your weekly rental
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            One simple weekly rate covers the whole setup. No surprise bills, no separate service charges, no consumable fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 items-start p-5 md:p-6 rounded-2xl bg-background border border-muted/50 hover:border-copper/40 hover:shadow-md transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 90}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "800ms",
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-copper/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-copper" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-1.5 leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="flex justify-center mb-10 md:mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <TestimonialCard
            quote="Reliable machine, well maintained, easy to use, and cost-effective. Our team looks forward to their first coffee every morning, and it's great to offer visitors something quality too."
            name="Michael Wood"
          />
        </div>

        <div
          className="p-6 md:p-7 rounded-2xl bg-copper text-white shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-5 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "700ms",
          }}
        >
          <div className="flex-1">
            <p className="font-serif text-xl md:text-2xl font-semibold leading-tight mb-1">
              From $35 a week. Starting price for small offices. Fair weekly rates for mid-size and large teams too.
            </p>
            <p className="text-sm md:text-base text-white/95 leading-snug">
              No lock-in contracts. 7-day free trial.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground hover:bg-background/90 hover:scale-105 rounded-full shadow-md text-sm uppercase tracking-wider font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Schedule a consult
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
