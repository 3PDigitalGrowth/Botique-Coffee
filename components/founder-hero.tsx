"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FounderHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return

      const scrolled = window.scrollY
      const heroHeight = heroRef.current.offsetHeight

      // Zoom effect on image
      const scale = 1 + scrolled / heroHeight / 2
      imageRef.current.style.transform = `scale(${scale})`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-neutral-900">
      <div ref={imageRef} className="absolute inset-0 transition-transform duration-100 ease-out" style={{
        backgroundImage: "url('/hero-chris-coffee-shop.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-2xl bg-black/75 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 text-pretty">Chris Prokopiou</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Building Better Workplaces Through Coffee</p>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              With over a decade of experience in hospitality and workplace culture, Chris personally designs each
              coffee solution to reflect your team's unique values and needs.
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
                Meet with Chris
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
