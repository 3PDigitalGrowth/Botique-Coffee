"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function SolutionsFinalCta() {
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
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 text-balance leading-tight">
            Still not sure which tier fits?
          </h2>
          <p className="text-background/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty mb-10">
            Ten minutes with Chris is usually enough to work it out. Tell him your team size, daily coffee habits, and what you currently do for coffee, and he'll recommend a tier on the call. No pressure, no quote-by-email runaround.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "150ms",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-200"
          >
            Book a 10-minute consult
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:0411876625"
            className="inline-flex items-center gap-2 px-4 py-4 text-background/90 hover:text-copper transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Or call Chris direct: 0411 876 625
          </a>
        </div>

        <p
          className="mt-8 text-sm text-background/60 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "300ms",
          }}
        >
          Every tier starts with a 30-day free trial. No card required. No lock-in contracts, ever.
        </p>
      </div>
    </section>
  )
}
