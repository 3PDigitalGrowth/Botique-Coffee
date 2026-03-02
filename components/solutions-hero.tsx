"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"
import Link from "next/link"

export function SolutionsHero() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${1 + scrollY * 0.1})`,
        }}
      >
        <img
          src="/modern-office-workspace-with-coffee-solutions.jpg"
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="bg-black/75 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-balance mb-6 text-white">
              Coffee Solutions Built for Your Business
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-balance leading-relaxed mb-8">
              We don't believe in one-size-fits-all. We specialise in understanding your unique needs.
            </p>
            {/* </CHANGE> */}
            <p className="text-base text-white/80 mb-6 leading-relaxed">
              Get a personalised coffee solution tailored to your business type, team size, and culture. Start with a
              free consultation.
            </p>

            <form className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">
                  Work Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@company.com"
                  className="bg-white/95 border-white/20 text-foreground h-12 rounded-lg"
                />
              </div>
              <Button asChild className="w-full h-12 text-base bg-copper hover:bg-copper-dark rounded-lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
              <Phone className="w-4 h-4" />
              <span>Or call us at</span>
              <a href="tel:0411876625" className="text-white hover:text-copper transition-colors">
                0411 876 625
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
