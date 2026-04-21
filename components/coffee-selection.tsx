"use client"

import { useEffect, useRef, useState } from "react"
import { Milk, CupSoda, Package } from "lucide-react"

const extras = [
  {
    icon: Milk,
    title: "Milk options",
    body: "Full cream and skim standard. Oat, almond, and soy available on request. Some teams want all five on the go, others stick to one, whatever suits.",
  },
  {
    icon: CupSoda,
    title: "Hot chocolate",
    body: "A good hot chocolate is surprisingly important for the quarter of your team who don't drink coffee. We supply quality drinking chocolate, not the cheap stuff.",
  },
  {
    icon: Package,
    title: "Consumables",
    body: "Cups (compostable or standard), sugar sticks, wooden stirrers, paper napkins. Restocked on every service visit. If you need something specific, ask.",
  },
]

export function CoffeeSelection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 md:mb-14 max-w-3xl mx-auto transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            Milk, chocolate, and the small stuff
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            Milk, chocolate, and everything else
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Coffee is the main event, but a workplace coffee setup is more than beans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {extras.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col h-full p-6 md:p-7 rounded-2xl bg-background border border-muted/50 hover:border-copper/40 hover:shadow-md transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 120}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "800ms",
                }}
              >
                <div className="w-11 h-11 rounded-2xl bg-copper/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-copper" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 leading-snug text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
