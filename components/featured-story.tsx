"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16">
          <p className="font-serif text-sm uppercase tracking-wider text-muted-foreground mb-3">Featured Case Study</p>
        </div>

        {/* Featured story - asymmetrical layout */}
        <div className="relative">
          {/* Large workplace image - offset right */}
          <div
            className={`relative ml-auto w-full md:w-[75%] aspect-[4/3] overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Image
              src="/tech-studio-workplace-team.jpg"
              alt="Bright modern tech studio workspace"
              fill
              className="object-cover"
            />
          </div>

          {/* Client info - overlapping on left */}
          <div
            className={`relative md:absolute md:top-1/3 md:left-0 bg-background p-8 md:p-12 md:max-w-md mt-8 md:mt-0 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-2">Bright Studio</h2>
            <p className="text-sm text-muted-foreground mb-6">Creative Technology Agency</p>

            <h3 className="font-serif text-xl md:text-2xl mb-6 text-balance">
              How Bright Studio Built a Stronger Culture
            </h3>

            <blockquote className="font-serif text-lg md:text-xl leading-relaxed mb-6 text-balance">
              "Chris transformed our coffee experience from an afterthought into a cornerstone of our culture."
            </blockquote>

            <p className="leading-relaxed text-foreground/80 mb-4">
              When Bright Studio moved into their new space in East London, founder Emma Thompson knew that coffee would
              be essential to their team's creative process. But she didn't expect it to become the heart of their
              studio culture.
            </p>

            <p className="leading-relaxed text-foreground/80 mb-4">
              Chris spent time in their studio, observing workflows and talking to the team. He designed a coffee setup
              that matched their energy - flexible, high-quality, and beautiful. Now, their morning coffee ritual is where
              the best ideas happen.
            </p>

            <p className="leading-relaxed text-foreground/80 mb-8">
              The relationship with Chris goes beyond maintenance visits. He checks in regularly, asks about new team
              members, and adjusts the coffee selection based on their feedback. Three years later, the partnership
              feels like having a coffee expert on the team - someone who genuinely cares about their daily experience and
              workplace culture.
            </p>

            {/* Client portrait with name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image src="/emma-thompson-portrait.jpg" alt="Emma Thompson" fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">Emma Thompson</p>
                <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
              </div>
            </div>

            <Button asChild className="w-full md:w-auto">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
