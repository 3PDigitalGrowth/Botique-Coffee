"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
        setScrollY(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Image */}
      <div
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          transform: `translateY(${scrollY * 30}%)`,
          transition: "transform 0.1s ease-out",
          backgroundImage: "url('/hero-chris-coffee-shop.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent md:from-black/60 md:via-black/50 md:to-black/30" />
      </div>

      {/* Floating Typography */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div
            className="max-w-2xl bg-black/75 backdrop-blur-md p-8 md:p-10 rounded-2xl"
            style={{
              opacity: 1 - scrollY * 2,
              transform: `translateY(${scrollY * 50}px)`,
              transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
            }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight text-balance">
              Curated coffee experiences for workplaces that care about culture
            </h1>
            <p className="text-white/90 text-lg mb-6 max-w-xl text-pretty">
              Chris personally designs and supports your coffee setup, pairing premium machines with locally roasted beans so your team and clients get café-quality every day.
            </p>

            <p className="text-white/70 text-sm mb-6 max-w-xl">
              Talk directly with Chris. No call centres. No corporate runaround.
            </p>

            <form className="space-y-3 mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="businessName" className="text-white/90 text-xs uppercase tracking-wide mb-1 block">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Your company name"
                    className="bg-white/95 backdrop-blur-sm border-none text-gray-900 placeholder:text-gray-500 h-11 px-4 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white/90 text-xs uppercase tracking-wide mb-1 block">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="bg-white/95 backdrop-blur-sm border-none text-gray-900 placeholder:text-gray-500 h-11 px-4 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="phone" className="text-white/90 text-xs uppercase tracking-wide mb-1 block">
                    Phone <span className="text-white/60">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0411 876 625"
                    className="bg-white/95 backdrop-blur-sm border-none text-gray-900 placeholder:text-gray-500 h-11 px-4 rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="looking" className="text-white/90 text-xs uppercase tracking-wide mb-1 block">
                    What are you looking for? <span className="text-white/60">(optional)</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/95 backdrop-blur-sm border-none text-gray-900 h-11 rounded-lg">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-setup">New workplace setup</SelectItem>
                      <SelectItem value="upgrade">Upgrade our current setup</SelectItem>
                      <SelectItem value="beans-service">Better beans and service</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[oklch(0.7_0.15_45)] hover:bg-[oklch(0.65_0.15_45)] text-white border-none shadow-2xl h-12 text-base rounded-lg"
              >
                Schedule My Coffee Consult
              </Button>
            </form>

            <p className="text-white/70 text-sm mb-3">
              We'll reach out within 24 hours to lock in a time. No commitment, just a friendly chat.
            </p>

            <div>
              <a href="tel:0411876625" className="text-white/70 hover:text-[oklch(0.7_0.15_45)] transition-colors text-sm">
                Prefer to talk first? Call Chris on 0411 876 625
              </a>
            </div>

            <p className="text-white/70 text-sm mt-4">Trusted by Melbourne teams who want coffee that feels personal.</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: 1 - scrollY * 3,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
