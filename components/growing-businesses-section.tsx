"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function GrowingBusinessesSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Full-width content area with image integrated */}
          <div className="lg:col-span-10 lg:col-start-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
                }}
              >
                <h2 className="font-serif text-3xl md:text-5xl text-balance mb-6">Scale Your Coffee as You Grow</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                  Growing businesses face unique challenges - balancing quality with cost, planning for expansion while
                  managing today. Our leasing solutions adapt to your journey, giving you one less thing to worry about.
                  As you hire new team members, open new locations, or expand into larger spaces, your coffee service
                  should grow seamlessly alongside you. We offer flexible agreements that scale with your business, not
                  against it. Start with one machine and add more as your team grows. Upgrade to higher-capacity
                  equipment when you need it. Switch between models as your needs evolve. With predictable monthly costs
                  and comprehensive support, you can budget with confidence while focusing your energy on what matters
                  most - building your business. We've been there, and we understand the balancing act. Let us handle the
                  coffee while you handle the growth.
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
                    <p className="text-muted-foreground leading-relaxed">Scalable solutions that grow with your team</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Predictable monthly costs for better budgeting
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">Full support so you stay focused on growth</p>
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

              <div
                className="lg:mt-16"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/growing-business-office-coffee.jpg"
                    alt="Growing business workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
