"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FounderCTA() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-12")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div
        ref={ctaRef}
        className="max-w-4xl mx-auto text-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      >
        <div className="mb-8">
          <p className="font-mono text-sm uppercase tracking-wide text-accent mb-4">
            Ready to Experience the Difference?
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            Let's Build Your Perfect Coffee Experience
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Schedule a personal consultation with Chris</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground italic">
          No commitment required. Just a conversation about great coffee.
        </p>
      </div>
    </section>
  )
}
