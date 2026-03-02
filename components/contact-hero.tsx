"use client"

import { useEffect, useRef, useState } from "react"

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="min-h-[50vh] flex items-center justify-center px-4 py-20 lg:py-24 bg-muted/30">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-balance mb-6 text-foreground">
          Let&apos;s Build Something Beautiful Together
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground/80 font-light text-balance">
          Schedule a personal consultation or get in touch with Chris
        </p>
      </div>
    </section>
  )
}
