"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StoriesFinalCta() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Join Our Community of Satisfied Clients
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-balance">
            Schedule a consultation and discover how Boutique Coffee at Work can improve your business
          </p>
          <Button asChild size="lg" className="mb-6">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            See what 500+ companies already know about the power of great coffee and genuine partnerships.
          </p>
        </div>
      </div>
    </section>
  )
}
