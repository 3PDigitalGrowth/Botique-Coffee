"use client"

import { useEffect, useRef, useState } from "react"

export function SourcingCommitment() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <blockquote className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-12 text-balance leading-tight">
            "We source with integrity, transparency, and care."
          </blockquote>
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-12">
            Every bean we serve comes from farms and roasters committed to ethical practices. We prioritize fair trade,
            organic certification, and direct relationships with growers. When you choose our coffee, you're supporting
            sustainable agriculture, fair wages, and communities around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <span>Fair Trade Certified</span>
            <span>Organic</span>
            <span>Direct Trade</span>
            <span>Carbon Neutral</span>
          </div>
        </div>
      </div>
    </section>
  )
}
