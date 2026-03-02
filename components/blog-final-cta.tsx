"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogFinalCta() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      ref={ref}
      className={`max-w-5xl mx-auto px-6 py-20 md:py-32 text-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-copper font-sans">Ready to Transform Your Workplace?</p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-brown leading-tight text-balance">
          Let's Talk About Your Coffee Experience
        </h2>
        <p className="text-xl md:text-2xl text-warm-brown/70 max-w-3xl mx-auto leading-relaxed text-pretty">
          Schedule a consultation and discover how great coffee can improve your business
        </p>
        <p className="text-lg text-warm-brown/60 max-w-2xl mx-auto text-pretty">
          We'll help you build a workplace culture that thrives.
        </p>
        <div className="pt-8">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-copper hover:bg-copper/90 text-white px-12 py-6 text-base rounded-full uppercase tracking-wider font-sans transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
