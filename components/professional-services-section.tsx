"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProfessionalServicesSection() {
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
          {/* Image centered with text wrapping */}
          <div className="lg:col-span-5 lg:col-start-2">
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.95)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <Image
                src="/professional-services-office-coffee.jpg"
                alt="Professional services office"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content wraps around the image */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
              }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-balance mb-6">Premium Coffee for Premium Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                In professional services, every detail matters. From the reception area to the boardroom, exceptional
                coffee signals excellence. Your clients notice the quality of their morning cappuccino, and your team
                deserves the same attention to detail you bring to every engagement. We provide coffee solutions that
                reinforce your commitment to quality. Whether you're hosting client meetings, powering through tax
                season, or celebrating a major win, our premium machines deliver consistency and reliability. With
                discreet maintenance and a variety of coffee options to suit different preferences, we ensure your
                coffee service never becomes a distraction. Instead, it becomes another way you demonstrate the care and
                precision that defines your firm. Because when you serve the best, you deserve the best.
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
                  <p className="text-muted-foreground leading-relaxed">Premium machines that impress clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">Reliable service for uninterrupted operations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">Variety to suit different client preferences</p>
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
