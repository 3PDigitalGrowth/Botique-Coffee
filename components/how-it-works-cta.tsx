"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function HowItWorksCta() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/lifestyle/cta-background.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      <div className="relative z-10 py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="max-w-2xl transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
              Ready when you are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-5 text-balance leading-tight">
              Book a ten-minute consult and start the clock
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 text-pretty">
              The fastest way to find out if this is a fit is to jump on the phone. Chris will walk you through the options, price it for your team size, and if it makes sense we can have a machine on your bench next week.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Book my consult
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0411876625"
                className="inline-flex items-center gap-2 px-2 py-3 text-white/90 hover:text-copper transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Or call Chris direct: 0411 876 625
              </a>
            </div>

            <p className="text-sm text-white/70">
              30-day free trial. No credit card. No pressure. Cancel any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
