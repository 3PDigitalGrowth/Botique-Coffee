"use client"

import { useEffect, useRef, useState } from "react"
import { TestimonialCard } from "@/components/testimonial-card"

const testimonials = [
  {
    quote:
      "Chris upgraded us to a WMF machine and the whole office noticed. Easy to use, great coffee, great hot chocolate, and the service has been consistent for years. Everyone here loves it.",
    name: "Paul Bruno",
    company: "Pepperl+Fuchs Australia",
  },
  {
    quote:
      "Reliable machine, well maintained, easy to use, and cost-effective. Our team looks forward to their first coffee every morning, and it's great to offer visitors something quality too.",
    name: "Michael Wood",
  },
  {
    quote:
      "A broken machine causes havoc when the office is busy. Chris is easily contactable and the service is reliable and regular, which means our team has coffee when they need it most. Genuinely grateful for that.",
    name: "Chrissie Straw",
    company: "AJM-JV",
  },
]

export function TrialTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 md:mb-14 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            Real Victorian clients
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            What long-term clients actually say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Attributed, verified, and pulled straight from years of working with Chris. No anonymous fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="h-full flex transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 140}ms`,
              }}
            >
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                company={t.company}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
