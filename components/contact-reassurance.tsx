"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    number: "1 business day",
    label: "Chris's typical response time",
  },
  {
    number: "200+",
    label: "Melbourne workplaces we currently service",
  },
  {
    number: "17 years",
    label: "Doing this, just this",
  },
]

export function ContactReassurance() {
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
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-cream bg-muted/40"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10 md:mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-copper mb-2 leading-tight">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty max-w-[220px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p
          className="font-serif text-lg md:text-xl text-foreground/80 italic transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "400ms",
          }}
        >
          Founded 2008 in Melbourne. Still Melbourne-only. Still founder-led.
        </p>
      </div>
    </section>
  )
}
