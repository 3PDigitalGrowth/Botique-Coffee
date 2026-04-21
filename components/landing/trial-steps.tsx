"use client"

import { useEffect, useRef, useState } from "react"
import { ClipboardList, Truck, Coffee } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Tell us about your team",
    description:
      "A 2-minute form. Share your business, team size and Victorian suburb, and Chris will pair you with the right machine for your space and volume.",
  },
  {
    icon: Truck,
    number: "02",
    title: "We deliver &amp; install on-site",
    description:
      "Usually within the week. Our team handles delivery, plumbing/power check, install, and a 10-minute team training. You don't lift a finger.",
  },
  {
    icon: Coffee,
    number: "03",
    title: "Enjoy 30 days on us",
    description:
      "Live with it for a month of barista-quality coffee on tap. Love it? Keep it on a plan that suits you. Not for you? We pick it up, free.",
  },
]

export function TrialSteps() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 md:mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">How it works</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            From enquiry to first espresso in under a week
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We've made it ridiculously simple to try world-class workplace coffee. Three steps, zero risk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative bg-muted/20 border border-muted/50 rounded-2xl p-6 md:p-7 hover:border-copper/40 hover:shadow-lg transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 150}ms`,
                  transitionProperty: "opacity, transform",
                  transitionDuration: "1000ms",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-copper" />
                  </div>
                  <span className="font-serif text-4xl text-copper/30">{step.number}</span>
                </div>
                <h3
                  className="font-serif text-xl md:text-2xl text-foreground mb-3"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className="mt-10 flex justify-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "600ms",
          }}
        >
          <a
            href="#claim-trial"
            className="inline-flex items-center justify-center px-8 py-3 bg-copper text-background text-sm uppercase tracking-widest font-medium rounded-full shadow-md hover:bg-copper-dark hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Start your free trial
          </a>
        </div>
      </div>
    </section>
  )
}
