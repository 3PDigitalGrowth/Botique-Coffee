"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PartnershipOpportunities() {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5] transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            <Image
              src="/artisan-roastery-at-work.jpg"
              alt="A Victorian coffee roaster at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div
            className="transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "150ms",
            }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
              Locally roasted
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance leading-tight">
              Locally roasted, for good reasons
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              We source through Victorian roasters. That's a deliberate choice, not a marketing line.
            </p>

            <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed text-pretty">
              <p>
                Melbourne has one of the best coffee scenes in the world. It would be strange to run a workplace coffee business here and ship beans in from somewhere else. So we don't.
              </p>
              <p>
                Victorian roasting means shorter transport, fresher beans in your machine, and money staying in the local industry. When a roaster is 40 kilometres away rather than 4,000, bean-to-cup time drops dramatically, and that shows up in the taste.
              </p>
              <p>
                Our roasters source their green beans ethically, and we'll happily tell you exactly where any bean in your supply comes from if you want to know. Ask Chris on the consult.
              </p>
            </div>

            <div className="mt-8 p-5 md:p-6 rounded-2xl bg-copper/10 border border-copper/20">
              <p className="text-sm md:text-base text-foreground/85 leading-relaxed text-pretty">
                Have a specific roaster or ethical certification you want your office coffee to hold? Tell us on the consult. If it's available through Victorian supply, we can almost always make it work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
