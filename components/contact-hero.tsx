"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ContactHero() {
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
      className="relative w-full bg-background pt-24 md:pt-28 pb-14 md:pb-20 px-6 md:px-12 lg:px-16"
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
              Talk to Chris directly
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Two ways to start, both go directly to Chris
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty max-w-xl">
              No call centre. No account managers. No &ldquo;someone will get back to you.&rdquo; When you fill in the form or pick up the phone, Chris is the one you&apos;re reaching.
            </p>
          </div>

          <div
            className="order-1 lg:order-2 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/Chris_Solo_Van.png"
                alt="Chris Prokopiou in front of the Boutique Coffee at Work branded service van"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground italic text-center lg:text-left">
              Chris, founder. That&apos;s the van you&apos;ll see in your car park on install day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
