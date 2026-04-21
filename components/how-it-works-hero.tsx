"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function HowItWorksHero() {
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
      className="relative w-full bg-background pt-24 md:pt-28 pb-12 md:pb-20 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className="order-2 lg:order-1 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
              How it works
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Six steps from first enquiry to first espresso shot
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 text-pretty max-w-xl">
              No drawn-out sales process. No tiered call centres. Most Melbourne clients go from a first call to a fully installed machine in 5 to 7 business days, and you deal with the same person the whole way.
            </p>
            <p className="text-foreground/85 text-base md:text-lg leading-relaxed mb-8 text-pretty max-w-xl">
              Here is exactly what happens, who does it, and roughly how long it takes.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/free-trial"
                className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Start my free 30-day trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0411876625"
                className="inline-flex items-center gap-2 px-2 py-3 text-foreground/80 hover:text-copper transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Or call Chris direct: 0411 876 625
              </a>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/lifestyle/how-it-works-hero.jpg"
                alt="A modern Melbourne office kitchen with a commercial coffee machine and two colleagues chatting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
