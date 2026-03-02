"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SolutionsFinalCta() {
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
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance mb-6">
              Not Sure Which Solution is Right for You?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed mb-8">
              Schedule a consultation and we'll help you find the perfect fit
            </p>
            <p className="text-muted-foreground text-balance leading-relaxed mb-10">
              We'll discuss your specific needs and recommend the best solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
