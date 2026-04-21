"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react"

export default function FounderCTA() {
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
      className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-foreground text-background"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 text-balance leading-tight">
            Want to talk? Here's my number.
          </h2>
          <p className="text-background/75 text-base md:text-lg leading-relaxed text-pretty">
            A 10-minute call is usually enough to work out if we're a fit. If we are, I'll come and look at your space. If we're not, I'll tell you honestly and point you somewhere better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <a
            href="tel:0411876625"
            className="group rounded-2xl border border-background/15 hover:border-copper/50 hover:bg-background/5 p-7 md:p-8 text-center transition-all duration-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "100ms",
              transitionProperty: "opacity, transform, border-color, background-color",
              transitionDuration: "800ms",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-copper/30 transition-colors">
              <Phone className="w-5 h-5 text-copper" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-2">
              Call me direct
            </p>
            <p className="font-serif text-2xl md:text-3xl text-background group-hover:text-copper transition-colors">
              0411 876 625
            </p>
          </a>

          <a
            href="mailto:chris@boutiquecoffee.com.au"
            className="group rounded-2xl border border-background/15 hover:border-copper/50 hover:bg-background/5 p-7 md:p-8 text-center transition-all duration-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "220ms",
              transitionProperty: "opacity, transform, border-color, background-color",
              transitionDuration: "800ms",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-copper/30 transition-colors">
              <Mail className="w-5 h-5 text-copper" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-2">
              Email me direct
            </p>
            <p className="font-serif text-xl md:text-2xl text-background group-hover:text-copper transition-colors break-words">
              chris@boutiquecoffee.com.au
            </p>
          </a>

          <Link
            href="/contact"
            className="group rounded-2xl bg-copper border border-copper hover:bg-copper-dark p-7 md:p-8 text-center transition-all duration-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "340ms",
              transitionProperty: "opacity, transform, background-color",
              transitionDuration: "800ms",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/85 mb-2">
              Book a consult
            </p>
            <p className="font-serif text-xl md:text-2xl text-white flex items-center justify-center gap-2">
              Schedule a 10-minute call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
        </div>

        <p
          className="mt-10 md:mt-12 text-center text-sm text-background/60 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "550ms",
          }}
        >
          Chris personally responds to every enquiry within one business day.
        </p>
      </div>
    </section>
  )
}
