"use client"

import { useEffect, useRef, useState } from "react"

export default function ContactSocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`py-16 px-4 bg-muted/20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-2xl md:text-3xl font-serif text-foreground">
          Join 500+ companies enjoying premium coffee daily
        </p>
        <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto">
          We typically respond within 24 hours and schedule consultations at your convenience.
        </p>
      </div>
    </div>
  )
}
