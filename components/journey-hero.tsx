"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Phone } from "lucide-react"

export function JourneyHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 600)
  const scale = 1 + scrollY / 2000

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: "url(/coffee-journey-hero.jpg)",
          transform: `scale(${scale})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-start justify-center" style={{ opacity }}>
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl bg-black/75 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl lg:text-8xl">The Journey</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
              A partnership that begins with listening and grows with your business
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/80">
              From your first consultation to ongoing support, we're with you every step of the way. Discover how our
              proven process transforms workplaces through exceptional coffee experiences.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Your work email"
                  className="flex-1 bg-white/95 border-white/20 text-neutral-900 placeholder:text-neutral-500"
                />
                <Button className="bg-copper hover:bg-copper-dark text-white whitespace-nowrap" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>Or call us directly:</span>
                <Link
                  href="tel:0411876625"
                  className="flex items-center gap-1 text-copper hover:text-copper-light transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>0411 876 625</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2" style={{ opacity }}>
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
