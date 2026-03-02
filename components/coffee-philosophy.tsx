"use client"

import { useEffect, useRef, useState } from "react"
import { Coffee, Heart, Sparkles } from "lucide-react"

export function CoffeePhilosophy() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const isVisible = (index: number) => visibleSections.has(index)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Subsection A */}
        <div
          ref={(el) => {
            sectionRefs.current[0] = el
          }}
          className={`mb-32 transition-all duration-1000 ${
            isVisible(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance leading-tight">
                "Great coffee isn't just a commodity. It's a craft, a story, and a connection."
              </blockquote>
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                At Boutique Coffee at Work, we don't just supply coffee - we curate experiences. Every bean tells a story
                of dedication, artistry, and community. We partner with local roasters who share our commitment to
                quality, sustainability, and the human connections that make exceptional coffee possible.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Coffee className="w-24 h-24 md:w-32 md:h-32 text-copper opacity-20" strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Subsection B */}
        <div
          ref={(el) => {
            sectionRefs.current[1] = el
          }}
          className={`mb-32 transition-all duration-1000 delay-200 ${
            isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center md:justify-start order-2 md:order-1">
              <Heart className="w-24 h-24 md:w-32 md:h-32 text-copper opacity-20" strokeWidth={1} />
            </div>
            <div className="md:col-span-8 order-1 md:order-2">
              <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance leading-tight">
                "We believe in supporting local artisans and building community."
              </blockquote>
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                Local sourcing isn't just better for the environment - it's about relationships. When you choose our
                coffee, you're supporting small businesses, reducing carbon footprints, and investing in the artisans
                who pour their hearts into every roast. It's coffee with purpose, community, and care.
              </p>
            </div>
          </div>
        </div>

        {/* Subsection C */}
        <div
          ref={(el) => {
            sectionRefs.current[2] = el
          }}
          className={`transition-all duration-1000 delay-400 ${
            isVisible(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance leading-tight">
                "Every coffee selection is curated specifically for your business."
              </blockquote>
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                No two businesses are alike, and neither is their coffee. We take time to understand your team's
                preferences, your company culture, and your unique needs. Whether you prefer bright, fruity notes or
                rich, chocolatey depths, we'll match you with roasters and beans that reflect your values and taste.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Sparkles className="w-24 h-24 md:w-32 md:h-32 text-copper opacity-20" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
