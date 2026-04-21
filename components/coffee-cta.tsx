"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CoffeeCTA() {
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
            Want to talk through the supply side?
          </h2>
          <p className="text-background/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty mb-10">
            Ten minutes with Chris and we'll work out what beans, what volume, and what setup suits your team. No commitment. No pushy follow-up.
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
            Schedule a 10-minute consult
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
          Every rental starts with a 7-day free trial. If the coffee isn't right, we change it. If the setup isn't right, we return it. No card required to start.
        </p>
      </div>
    </section>
  )
}
