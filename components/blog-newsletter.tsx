"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function BlogNewsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter signup:", email)
  }

  return (
    <section
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-16 md:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center space-y-6">
        <h2 className="font-serif text-4xl md:text-5xl text-warm-brown text-balance">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto text-pretty">
          Get insights on workplace culture and coffee delivered to your inbox
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 rounded-full bg-white text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:ring-2 focus:ring-copper"
          />
          <Button
            type="submit"
            className="bg-copper hover:bg-copper/90 text-white px-8 py-3 rounded-full uppercase tracking-wider text-sm font-sans transition-colors duration-300"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
