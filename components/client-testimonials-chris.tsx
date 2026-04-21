"use client"

import { useEffect, useRef, useState } from "react"

const receipts = [
  {
    value: "200+",
    label: "Melbourne workplaces currently renting from us",
  },
  {
    value: "5+ years",
    label: "Average client relationship",
  },
  {
    value: "24 hours",
    label: "Typical response time on any service call",
  },
]

export default function ClientTestimonialsChris() {
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
      className="py-16 md:py-24 px-6 md:px-12 bg-background"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            The receipts
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that are actually real, as of 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mt-12 md:mt-16">
          {receipts.map((stat, index) => (
            <div
              key={stat.label}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <p className="font-serif text-5xl md:text-6xl text-copper leading-none mb-4">
                {stat.value}
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-snug max-w-xs mx-auto text-balance">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-14 md:mt-16 max-w-2xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "500ms",
          }}
        >
          I'll give you three client references on the first call if you want them. Most suppliers won't.
        </p>
      </div>
    </section>
  )
}
