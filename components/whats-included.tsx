"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const inclusions = [
  "Machine recommendation matched to your space",
  "Professional installation",
  "Simple team training",
  "Locally roasted beans delivered",
  "Maintenance and servicing",
  "Fast support when you need it",
  "Options that suit your budget and stage",
]

export function WhatsIncluded() {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            What you get with Boutique Coffee at Work
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Everything you need for café-quality workplace coffee, with a partner who stays accountable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {inclusions.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 items-start opacity-0 transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-[oklch(0.7_0.15_45)]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[oklch(0.7_0.15_45)]" />
                </div>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center gap-4 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "800ms",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-[oklch(0.7_0.15_45)] text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-md hover:bg-[oklch(0.65_0.15_45)] hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Schedule a Coffee Consult
          </Link>
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors"
          >
            <span className="text-sm text-muted-foreground">See client stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
