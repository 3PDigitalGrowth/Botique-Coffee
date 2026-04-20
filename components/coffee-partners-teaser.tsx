"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const bullets = [
  "Locally roasted options",
  "Ethically sourced beans",
  "Rotations available to keep it interesting",
]

export function CoffeePartnersTeaser() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/boutique-coffee-van-chris-team.png"
          alt="Chris and the Boutique Coffee at Work team with their branded service van"
          className="w-full h-full object-cover object-[35%_center] md:object-[38%_center]"
        />
        {/* Mobile: darken top portion so content card sits clean below image */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background md:hidden" />
        {/* Desktop: horizontal gradient fading to cream on the right for the card */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-20">
        <div className="min-h-[60vh] md:min-h-[640px] flex items-end md:items-center md:justify-end">
          <div
            className="w-full md:max-w-md lg:max-w-lg bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl p-7 md:p-9 border border-white/50 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
              Coffee &amp; partners
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mb-5 text-balance leading-tight">
              Coffee that reflects your standards
            </h2>
            <p className="text-base text-muted-foreground mb-7 leading-relaxed text-pretty">
              We're selective about the roasters we work with, because your workplace coffee shouldn't taste like an afterthought.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-copper/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-copper" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/coffee"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper hover:bg-copper-dark text-background rounded-full transition-all duration-200 font-medium text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105"
              >
                Explore coffee &amp; partners
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="text-copper hover:text-copper-dark transition-colors text-sm font-medium underline decoration-copper/30 hover:decoration-copper underline-offset-4 text-center sm:text-left"
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
