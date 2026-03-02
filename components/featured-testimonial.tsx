"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function FeaturedTestimonial() {
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
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Client Stories</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Coffee is never just coffee. It's how your team starts the day, how you host clients, and how culture shows up in the little moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div
            className="opacity-0 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Client story</p>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-copper/40 text-copper/40" />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-foreground mb-6 leading-relaxed text-balance">
              "Chris didn't just install a coffee machine - he transformed our office culture. Our team actually looks
              forward to coming in now."
            </blockquote>
            <div>
              <p className="font-medium text-foreground">Emma Thompson</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Founder, Tech Studio</p>
            </div>
          </div>

          <div
            className="opacity-0 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "400ms",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Client story</p>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-copper/40 text-copper/40" />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-foreground mb-6 leading-relaxed text-balance">
              "The quality of coffee is outstanding, but it's the personal service that sets Chris apart. He genuinely
              cares about getting it right."
            </blockquote>
            <div>
              <p className="font-medium text-foreground">Sarah Chen</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Director, Pixel & Code</p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors"
          >
            <span className="text-sm uppercase tracking-wide">Read More Client Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-muted-foreground text-sm">Or</span>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-copper transition-colors underline decoration-copper/30 hover:decoration-copper"
          >
            schedule a coffee consult
          </Link>
        </div>
      </div>
    </section>
  )
}
