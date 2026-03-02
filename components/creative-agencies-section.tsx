"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CreativeAgenciesSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image on the left, offset upwards */}
          <div className="lg:col-span-7 lg:col-start-1">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <Image
                src="/creative-agency-workspace-with-coffee-machine.jpg"
                alt="Creative agency workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content on the right, overlapping slightly */}
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mt-12">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
              }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-balance mb-6">Build Creative Culture</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                Creative agencies thrive on energy and inspiration. Your coffee service should fuel both. We provide
                machines that become the heartbeat of your studio - where ideas brew as readily as espresso. From
                late-night brainstorms to client presentations, exceptional coffee signals that you care about every
                detail. We understand that in creative environments, aesthetics matter just as much as functionality.
                That's why we offer premium machines that complement your studio's design while delivering
                barista-quality results. With flexible leasing and comprehensive maintenance, your team can focus on
                what they do best - creating remarkable work - while we ensure there's always great coffee to fuel the
                process.
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
                  <p className="text-muted-foreground leading-relaxed">
                    Premium machines that match your aesthetic standards
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    Flexible leasing that scales with project cycles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    Maintenance included so you focus on creativity
                  </p>
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
        </div>
      </div>
    </section>
  )
}
