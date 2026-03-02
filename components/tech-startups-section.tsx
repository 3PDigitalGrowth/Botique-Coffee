"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TechStartupsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content on the left */}
          <div className="lg:col-span-6 lg:col-start-1 order-2 lg:order-1">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
              }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-balance mb-6">Coffee That Fuels Innovation</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                Startups move fast and burn bright. Your coffee solution needs to keep pace with late nights, early
                launches, and everything in between. We understand that every dollar counts when you're building
                something from the ground up. That's why we offer flexible leasing with no upfront costs - letting you
                invest in growth, not equipment. Whether you're a team of five or fifty, our scalable solutions adapt to
                your changing needs. From your first office to your tenth location, we're here to ensure your team has
                the fuel they need to innovate. Quick setup, reliable maintenance, and the ability to upgrade as you
                grow - because your coffee service should be as agile as your business. Focus on disrupting your industry;
                we'll handle the caffeine.
              </p>

              <div
                className="space-y-4 mb-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">Quick setup to match your rapid scaling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    No upfront costs - invest in growth, not equipment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">Upgrade as your team expands</p>
                </div>
              </div>

              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
                }}
              >
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Schedule a Consultation
                    <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image on the right, offset downwards */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 order-1 lg:order-2 lg:-mt-12">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <Image
                src="/tech-startup-office-with-coffee-machine.jpg"
                alt="Tech startup workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
