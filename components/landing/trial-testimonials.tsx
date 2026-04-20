"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We took the trial on a whim. By week two, our team was cancelling their morning café runs. We kept the machine, signed a plan, and haven't looked back.",
    role: "Founder, Tech Studio, Richmond VIC",
    rating: 5,
  },
  {
    quote:
      "Chris turned up, set it up in 40 minutes, trained the team and left us with coffee better than most Melbourne cafés. The 30 days sold itself.",
    role: "Director, Creative Agency, Collingwood VIC",
    rating: 5,
  },
  {
    quote:
      "As a business owner you're wary of 'free' anything. This was the real deal. Zero pressure, incredible coffee, and Chris actually picks up the phone.",
    role: "Managing Partner, Professional Services, South Melbourne VIC",
    rating: 5,
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
          className="text-center mb-12 md:mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Victorian businesses, real stories</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Owners and founders just like you
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-copper text-copper" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 120+ local reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.role}
              className="bg-background rounded-2xl p-6 md:p-7 shadow-sm border border-muted/40 hover:shadow-lg transition-all duration-500 flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: "800ms",
              }}
            >
              <Quote className="w-8 h-8 text-copper/30 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-copper text-copper" />
                ))}
              </div>
              <blockquote className="font-serif text-lg md:text-xl text-foreground mb-6 leading-relaxed text-pretty flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-auto pt-4 border-t border-muted/40">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
