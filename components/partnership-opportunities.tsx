"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PartnershipOpportunities() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-20 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-balance">
            Interested in Partnering with Us?
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            We're always looking for passionate local roasters who share our values. If you're committed to quality,
            sustainability, and community, we'd love to hear from you.
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-sans text-xl font-semibold mb-3">What We Look For</h3>
              <ul className="font-sans text-base text-muted-foreground space-y-2">
                <li>• Commitment to ethical sourcing and sustainability</li>
                <li>• Exceptional quality and consistency</li>
                <li>• Local presence and community involvement</li>
                <li>• Passion for craft and storytelling</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xl font-semibold mb-3">Benefits of Partnership</h3>
              <ul className="font-sans text-base text-muted-foreground space-y-2">
                <li>• Access to corporate clients and steady orders</li>
                <li>• Showcase your story and craft to new audiences</li>
                <li>• Collaborative marketing and brand exposure</li>
                <li>• Support from our team for logistics and client relationships</li>
              </ul>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
