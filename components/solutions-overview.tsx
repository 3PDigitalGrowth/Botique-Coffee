"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "Small office (up to 15 people)",
    description:
      "A compact super-automatic machine that handles morning rush without queues. Perfect for studios, agencies, and small teams who want café-quality without the café trip.",
    priceAnchor: "From $35 a week",
    image: "/creative-agency-workspace-with-coffee-machine.jpg",
    href: "/solutions#small-office",
  },
  {
    title: "Mid-size office (15 to 50 people)",
    description:
      "A step-up commercial machine built for steady daily volume. Ideal for growing teams, professional services, and workplaces where coffee is part of the culture.",
    priceAnchor: "From $55 a week",
    image: "/tech-startup-office-with-coffee-machine.jpg",
    href: "/solutions#mid-office",
  },
  {
    title: "Large office (50+ people)",
    description:
      "Heavy-duty commercial setup, often paired across multiple floors or tea points. Designed for law firms, corporates, and head offices with real daily demand.",
    priceAnchor: "From $85 a week",
    image: "/professional-services-office-coffee.jpg",
    href: "/solutions#large-office",
  },
]

export function SolutionsOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 md:mb-16 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Find your fit</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Packages sized to your team
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {solutions.map((solution, index) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group flex flex-col h-full opacity-0 transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-copper transition-colors text-balance">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-base mb-4 text-pretty leading-relaxed flex-1">
                {solution.description}
              </p>
              <p className="text-sm text-copper font-semibold uppercase tracking-wide mb-3">
                {solution.priceAnchor}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-copper uppercase tracking-wide">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div
          className="mt-12 text-center opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-dark transition-colors"
            >
              <span className="text-sm uppercase tracking-wide">View All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            Not sure which tier fits your team? Chris will walk you through it on a 10-minute call.{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-copper hover:text-copper-dark transition-colors underline decoration-copper/30 hover:decoration-copper font-medium"
            >
              Book a consult
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
