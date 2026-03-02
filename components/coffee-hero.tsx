"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CoffeeHero() {
  const [scrollY, setScrollY] = useState(0)
  const [email, setEmail] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, -rect.top) / rect.height
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 30}%)` }}>
        <Image
          src="/artisan-coffee-brewing-moment.jpg"
          alt="Artisan coffee brewing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative h-full flex items-center px-6" style={{ opacity: 1 - scrollY * 2 }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-2xl bg-black/75 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 text-balance">
              Where Quality Meets Community
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/90 mb-4 text-pretty">
              Artisan coffee, locally sourced, personally curated
            </p>
            <p className="font-sans text-base md:text-lg text-white/80 mb-8 text-pretty leading-relaxed">
              We partner with exceptional local roasters to bring you coffee that tells a story - crafted with care,
              delivered with passion.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-copper"
                required
              />
              <Button
                type="submit"
                className="w-full bg-copper hover:bg-copper/90 text-white rounded-full py-6 font-medium transition-all"
              >
                Discover Our Coffee
              </Button>
              <Link
                href="tel:0411876625"
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                Or call 0411 876 625
              </Link>
            </form>
          </div>
        </div>
      </div>
      {/* </CHANGE> */}
    </section>
  )
}
