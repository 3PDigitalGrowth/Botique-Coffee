"use client"

import { useEffect, useRef, useState } from "react"

const partners = [
  "Local Roastery",
  "Creative Studio",
  "Tech Company",
  "Design Team",
  "Modern Agency",
  "Business Hub",
  "Coffee Partners",
  "Workspace Co",
]

export function ProofStrip() {
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
    <section
      ref={sectionRef}
      className="relative py-6 px-6 md:px-12 lg:px-16 bg-background border-t border-b border-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Left: Heading */}
          <div
            className="flex-shrink-0 opacity-0 transition-all duration-1000 whitespace-nowrap"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
              Local partners
            </p>
          </div>

          {/* Right: Logo placeholders - single row */}
          <div
            className="flex items-center gap-3 md:gap-4 overflow-x-auto opacity-0 transition-all duration-1000 flex-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
              transitionDelay: "200ms",
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center flex-shrink-0 h-12 md:h-14 px-3 md:px-4 rounded-md border border-muted/40 bg-muted/10 hover:border-muted/60 hover:bg-muted/20 transition-all duration-300"
              >
                <span className="text-xs text-muted-foreground/70 font-medium uppercase tracking-tight whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
