"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StoriesHero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-balance mb-6">
            Real Relationships, Real Results
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            See how Boutique Coffee at Work has transformed workplace culture for over 500 businesses across Australia.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-copper"
              required
            />
            <Button
              type="submit"
              className="w-full bg-copper hover:bg-copper/90 text-white rounded-full py-6 font-medium transition-all"
            >
              Get Your Success Story
            </Button>
            <Link
              href="tel:0411876625"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              Or call 0411 876 625
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}
