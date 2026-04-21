"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Users, Coffee, Settings2 } from "lucide-react"

type Tier = {
  name: string
  teamSize: string
  price: string
  cups: string
  machine: string
  anchor: string
  emphasised?: boolean
}

const tiers: Tier[] = [
  {
    name: "Small office",
    teamSize: "Up to 15 people",
    price: "$35/week",
    cups: "Up to 40",
    machine: "Compact super-automatic",
    anchor: "#small-office",
  },
  {
    name: "Mid-size office",
    teamSize: "15 to 50 people",
    price: "$55/week",
    cups: "40 to 150",
    machine: "Commercial super-automatic",
    anchor: "#mid-office",
    emphasised: true,
  },
  {
    name: "Large office",
    teamSize: "50+ people",
    price: "$85/week",
    cups: "150+",
    machine: "Heavy-duty commercial, single or paired",
    anchor: "#large-office",
  },
]

export function SolutionsTierComparison() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center max-w-2xl mx-auto mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            Quick comparison
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            The short version
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Full detail on each tier below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, index) => {
            const emphasised = tier.emphasised
            const cardClasses = emphasised
              ? "relative bg-foreground text-background border-2 border-copper shadow-2xl md:-translate-y-2"
              : "relative bg-background border border-border shadow-sm hover:shadow-md"

            return (
              <a
                key={tier.name}
                href={tier.anchor}
                className={`${cardClasses} rounded-2xl p-7 md:p-8 flex flex-col h-full transition-all duration-300 hover:scale-[1.01]`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${150 + index * 100}ms`,
                }}
              >
                {emphasised && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-copper text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-md">
                    Most popular
                  </span>
                )}

                <h3
                  className={`font-serif text-2xl md:text-3xl mb-2 ${
                    emphasised ? "text-background" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    emphasised ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {tier.teamSize}
                </p>

                <div className="mb-6">
                  <p
                    className={`text-xs uppercase tracking-widest font-semibold mb-1 ${
                      emphasised ? "text-copper" : "text-copper"
                    }`}
                  >
                    Starting from
                  </p>
                  <p
                    className={`font-serif text-3xl md:text-4xl font-semibold ${
                      emphasised ? "text-background" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-3">
                    <Users
                      className={`w-4 h-4 mt-1 flex-shrink-0 ${
                        emphasised ? "text-copper" : "text-copper"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-[11px] uppercase tracking-wider font-semibold ${
                          emphasised ? "text-background/60" : "text-muted-foreground"
                        }`}
                      >
                        Team size
                      </p>
                      <p
                        className={`text-sm ${
                          emphasised ? "text-background/90" : "text-foreground/85"
                        }`}
                      >
                        {tier.teamSize}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coffee
                      className={`w-4 h-4 mt-1 flex-shrink-0 ${
                        emphasised ? "text-copper" : "text-copper"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-[11px] uppercase tracking-wider font-semibold ${
                          emphasised ? "text-background/60" : "text-muted-foreground"
                        }`}
                      >
                        Daily cups (approx)
                      </p>
                      <p
                        className={`text-sm ${
                          emphasised ? "text-background/90" : "text-foreground/85"
                        }`}
                      >
                        {tier.cups}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings2
                      className={`w-4 h-4 mt-1 flex-shrink-0 ${
                        emphasised ? "text-copper" : "text-copper"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-[11px] uppercase tracking-wider font-semibold ${
                          emphasised ? "text-background/60" : "text-muted-foreground"
                        }`}
                      >
                        Machine style
                      </p>
                      <p
                        className={`text-sm ${
                          emphasised ? "text-background/90" : "text-foreground/85"
                        }`}
                      >
                        {tier.machine}
                      </p>
                    </div>
                  </li>
                </ul>

                <span
                  className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold ${
                    emphasised ? "text-copper" : "text-copper hover:text-copper-dark"
                  }`}
                >
                  See full detail
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            )
          })}
        </div>

        <p
          className="text-center text-sm text-muted-foreground mt-10 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "600ms",
          }}
        >
          All tiers include a 30-day free trial, no card required. No lock-in contracts, ever.
        </p>
      </div>
    </section>
  )
}
