"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote:
      "Chris doesn't just supply equipment - he genuinely cares about our team's coffee experience. He visited our office three times before we even signed a contract, just to understand our needs.",
    name: "Sarah Mitchell",
    company: "Pixel & Code",
    role: "Operations Director",
  },
  {
    quote:
      "What sets Chris apart is his honesty. When we wanted a specific machine, he recommended something different that better suited our team size and usage. He was right, and we're grateful for his integrity.",
    name: "James Harrison",
    company: "Maven Ventures",
    role: "CEO",
  },
  {
    quote:
      "It's rare to find someone in business who genuinely prioritizes relationships over sales. Chris has become a trusted advisor for our growing company, not just a supplier.",
    name: "Emma Chen",
    company: "Greenleaf Architecture",
    role: "Partner",
  },
]

function Testimonial({
  quote,
  name,
  company,
  role,
  index,
}: {
  quote: string
  name: string
  company: string
  role: string
  index: number
}) {
  const testimonialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-12")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={testimonialRef}
      className="opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-12 md:mb-16"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <blockquote className="mb-6">
        <p className="text-lg md:text-xl text-foreground leading-relaxed italic text-pretty">"{quote}"</p>
      </blockquote>
      <div className="flex flex-col gap-1">
        <cite className="not-italic font-medium text-foreground">{name}</cite>
        <span className="text-sm text-muted-foreground uppercase tracking-wide">
          {role}, {company}
        </span>
      </div>
    </div>
  )
}

export default function ClientTestimonialsChris() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-16 md:mb-20 text-balance">
          What Clients Say About Working with Chris
        </h2>

        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} index={index} />
        ))}
      </div>
    </section>
  )
}
