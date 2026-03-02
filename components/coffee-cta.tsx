"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"

export function CoffeeCTA() {
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
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 text-balance">
            Ready to Discover the Difference?
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 text-pretty">
            Schedule a consultation to explore our coffee selection and services
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-12 text-pretty">
            We'll work with you to find the perfect coffee solution for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white px-8">
                Schedule a Consultation
              </Button>
            </Link>
            <a
              href="tel:0411876625"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-copper transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-sans text-sm">Call us at 0411 876 625</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
