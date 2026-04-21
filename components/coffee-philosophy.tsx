"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Truck, Repeat, Heart } from "lucide-react"

const items = [
  {
    icon: Package,
    title: "Fresh beans, weekly",
    body: "Locally roasted Victorian coffee beans delivered on a schedule that matches your team's volume. No bean running out. No emergency runs to the supermarket.",
  },
  {
    icon: Truck,
    title: "Topped up on every service call",
    body: "When we visit to service the machine, we leave you stocked. Cups, sugar sticks, wooden stirrers, paper napkins, and hot chocolate if you want it.",
  },
  {
    icon: Repeat,
    title: "Flexible rotation",
    body: "Want to mix it up? We can rotate through different roasts seasonally or swap your blend entirely if the team's taste changes. Just ask.",
  },
  {
    icon: Heart,
    title: "Your preferred brand, if you have one",
    body: "Already love a specific Melbourne roaster? We'll often work with it. Tell Chris on the consult and we'll sort the supply side.",
  },
]

export function CoffeePhilosophy() {
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
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-background overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-copper/5 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            What's included in your supply
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance leading-tight">
            What shows up at your door
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Everything your team needs to make good coffee, all day, every day. Included in the weekly rental, no add-ons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group relative flex flex-col h-full p-7 md:p-8 rounded-2xl bg-background border border-muted/50 hover:border-copper/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 120}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "800ms",
                }}
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center group-hover:bg-copper/15 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-7 h-7 text-copper" strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
