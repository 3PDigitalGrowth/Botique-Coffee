"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Phone, ArrowRight, Clock } from "lucide-react"

export function TrialFinalCta() {
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
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-chris-coffee-shop.jpg"
          alt="Chris at his workplace coffee setup"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper/20 border border-copper/40 mb-6 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Clock className="w-3.5 h-3.5 text-copper" />
          <span className="text-xs uppercase tracking-widest text-copper font-medium">
            Limited VIC trial slots each month
          </span>
        </div>

        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "100ms",
          }}
        >
          Your best team coffee starts this week.
        </h2>

        <p
          className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "200ms",
          }}
        >
          30 days, delivered and installed on us. Nothing to pay, nothing to sign beyond a simple 1-page agreement. If it's not right, we uplift it free.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "300ms",
          }}
        >
          <a
            href="#claim-trial"
            className="inline-flex items-center gap-2 px-10 py-4 bg-copper hover:bg-copper-dark text-white text-base uppercase tracking-widest font-medium rounded-full shadow-2xl hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Claim my 30-day free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:0411876625"
            className="inline-flex items-center gap-2 px-6 py-4 text-white/90 hover:text-copper transition-colors text-base font-medium"
          >
            <Phone className="w-5 h-5" />
            Or call Chris on 0411 876 625
          </a>
        </div>

        <p
          className="mt-8 text-sm text-white/60 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "500ms",
          }}
        >
          No card required. No lock-in. 100% Victorian-owned and operated.
        </p>
      </div>
    </section>
  )
}
