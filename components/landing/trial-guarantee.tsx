"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, Repeat, Truck } from "lucide-react"

const options = [
  {
    icon: ShieldCheck,
    title: "Keep it",
    description:
      "Love it? Stay on a simple, month-to-month plan. Cancel with 30 days notice, any time. No lock-in contracts.",
  },
  {
    icon: Repeat,
    title: "Swap it",
    description:
      "Want more (or less) machine? We'll swap to a better-fit model for your team, at no cost and no drama.",
  },
  {
    icon: Truck,
    title: "Return it",
    description:
      "Not for you? We pick it up, free, at a time that suits. No guilt, no follow-up sales calls. Ever.",
  },
]

export function TrialGuarantee() {
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
      className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-foreground text-background"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 md:mb-14 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-copper mb-3">The no-catch guarantee</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
            After 7 days, you choose
          </h2>
          <p className="text-base md:text-lg text-background/75 max-w-2xl mx-auto">
            Three simple options. You're never stuck. This is how we'd want to be treated if the tables were turned.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {options.map((o, index) => {
            const Icon = o.icon
            return (
              <div
                key={o.title}
                className="text-center p-6 md:p-8 rounded-2xl border border-background/15 hover:border-copper/50 hover:bg-background/5 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 150}ms`,
                  transitionProperty: "opacity, transform, border-color, background-color",
                  transitionDuration: "800ms",
                }}
              >
                <div className="w-14 h-14 rounded-full bg-copper/20 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{o.title}</h3>
                <p className="text-background/70 text-sm md:text-base leading-relaxed">{o.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className="mt-12 text-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "600ms",
          }}
        >
          <p className="text-background/60 text-sm italic max-w-xl mx-auto">
            We only succeed when you stay by choice, not because a contract traps you.
          </p>
        </div>
      </div>
    </section>
  )
}
