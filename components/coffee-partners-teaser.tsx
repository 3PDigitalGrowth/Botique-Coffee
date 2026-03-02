"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export function CoffeePartnersTeaser() {
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
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Image */}
          <div
            className="rounded-lg overflow-hidden aspect-[4/5] opacity-0 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <img
              src="/premium-coffee-beans.jpg"
              alt="Premium coffee beans and roasting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div
            className="opacity-0 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Coffee & Partners</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Coffee that reflects your standards
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              We're selective about the roasters we work with, because your workplace coffee shouldn't taste like an
              afterthought.
            </p>

            {/* Bullets */}
            <ul className="space-y-4 mb-10">
              {["Locally roasted options", "Ethically sourced beans", "Rotations available to keep it interesting"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[oklch(0.7_0.15_45)] flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ),
              )}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/coffee"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.7_0.15_45)] text-background rounded-full hover:bg-[oklch(0.65_0.15_45)] transition-colors font-medium text-sm uppercase tracking-wide"
              >
                Explore Our Coffee & Partners
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors text-sm underline decoration-copper/30 hover:decoration-copper"
              >
                Ask Chris what he recommends
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
