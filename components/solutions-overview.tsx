"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "Creative Agencies",
    description: "Fuel ideas with café-quality coffee that matches your studio's energy and taste.",
    image: "/creative-agency-workspace-with-coffee-machine.jpg",
  },
  {
    title: "Tech Startups",
    description: "A clean, reliable setup that keeps pace as your team grows and your space evolves.",
    image: "/tech-startup-office-with-coffee-machine.jpg",
  },
  {
    title: "Professional Services",
    description: "Host clients with coffee that signals quality and attention to detail in every meeting.",
    image: "/professional-services-office-coffee.jpg",
  },
  {
    title: "Growing Businesses",
    description: "Flexible options that fit your stage, with support that stays consistent as things change.",
    image: "/growing-business-office-coffee.jpg",
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tailored Solutions</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Solutions for Every Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {solutions.map((solution, index) => (
            <Link
              key={solution.title}
              href="/solutions"
              className="group opacity-0 transition-all duration-1000"
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
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-[oklch(0.7_0.15_45)] transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-base mb-3 text-pretty">{solution.description}</p>
              <span className="inline-flex items-center gap-2 text-sm text-[oklch(0.7_0.15_45)] uppercase tracking-wide">
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
              className="inline-flex items-center gap-2 text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors"
            >
              <span className="text-sm uppercase tracking-wide">View All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            Not sure where you fit?{" "}
            <Link href="/contact" className="text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors underline decoration-copper/30 hover:decoration-copper">
              Book a quick consult
            </Link>{" "}
            and we'll point you in the right direction.
          </p>
        </div>
      </div>
    </section>
  )
}
