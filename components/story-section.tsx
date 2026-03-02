"use client"

import { useEffect, useRef, useState } from "react"

export function StorySection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image - takes 3/4 of space on large screens */}
          <div
            className="lg:col-span-7 relative"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 50}px)`,
              opacity: scrollProgress,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/chris-prokopiou-professional-portrait--founder-of-.jpg"
                alt="Chris Prokopiou"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text - floats in whitespace */}
          <div
            className="lg:col-span-5 space-y-6"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              opacity: scrollProgress,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">Founder</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Chris Prokopiou
            </h2>
            <h3 className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Building Better Workplaces Through Coffee
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
              With over a decade of experience in the coffee industry, Chris founded this company on a simple belief:
              great coffee creates great connections. Every partnership is personal, every blend is purposeful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
