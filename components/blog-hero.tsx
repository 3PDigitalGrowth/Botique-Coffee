"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function BlogHero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-brown mb-6 leading-tight text-balance">
          Coffee Culture & Insights
        </h1>
        <p className="text-xl md:text-2xl text-warm-brown/70 leading-relaxed text-pretty mb-8">
          Explore expert insights on workplace culture, coffee quality, sustainability, and building better businesses
          through intentional coffee experiences.
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
            Subscribe for Insights
          </Button>
          <p className="text-sm text-warm-brown/60 text-center">Join 2,000+ business leaders getting weekly insights</p>
        </form>
      </div>
    </section>
  )
}
