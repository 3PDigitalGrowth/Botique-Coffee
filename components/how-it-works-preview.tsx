"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your team, your space, and the coffee moments that matter in your workplace.",
    expandedDescription: "Every partnership begins with understanding. Chris sits down with you - not to sell, but to listen. What drives your team? What slows them down? We explore your culture, your challenges, and your aspirations. This isn't a sales pitch; it's the start of a relationship built on genuine care and attention to what makes your workplace unique.",
  },
  {
    number: "02",
    title: "Curated Coffee Plan",
    description: "A tailored recommendation combining the right machine, beans, and support, designed around your culture and budget.",
    expandedDescription: "Armed with insights from our conversation, we craft a tailored proposal. Not a cookie-cutter package, but a thoughtful recommendation that considers your unique needs, space, and budget. We present options with transparency, helping you make an informed decision that feels right for your business. Quality matters, but so does value.",
  },
  {
    number: "03",
    title: "Seamless Setup",
    description: "Professional installation plus simple team training so everyone can make a great cup from day one.",
    expandedDescription: "Our team arrives on schedule, equipped and prepared. We handle everything - from setup to training - with minimal disruption to your workflow. Your team learns not just how to operate the equipment, but how to achieve café-quality results every time. We don't leave until you're confident and delighted with your new coffee experience.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description: "Maintenance, beans, check-ins, and fast support. You get consistency without chasing suppliers.",
    expandedDescription: "This is where others stop, but where we truly begin. Regular maintenance keeps your equipment performing at its peak. When you need us, we're there - responsive, reliable, and resourceful. We become an extension of your team, ensuring your coffee culture thrives day after day. Your success is our success.",
  },
]

export function HowItWorksPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">The Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            How It Works
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Step Navigation */}
          <div
            className="space-y-3 opacity-0 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
                  activeStep === index
                    ? "bg-[oklch(0.7_0.15_45)]/10 border border-[oklch(0.7_0.15_45)]/30"
                    : "border border-transparent hover:bg-muted/40"
                }`}
              >
                <span
                  className={`font-serif text-2xl md:text-3xl flex-shrink-0 transition-colors ${
                    activeStep === index
                      ? "text-[oklch(0.7_0.15_45)]"
                      : "text-[oklch(0.7_0.15_45)]/20"
                  }`}
                >
                  {step.number}
                </span>
                <div className="flex-1 pt-1">
                  <h3
                    className={`font-serif text-lg transition-colors ${
                      activeStep === index ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 transition-colors ${
                      activeStep === index ? "text-foreground/70" : "text-muted-foreground/60"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Step Content */}
          <div
            className="opacity-0 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
            }}
          >
            <div className="bg-muted/30 rounded-lg p-6 md:p-8 border border-muted/50 h-full flex flex-col justify-center min-h-96">
              <div className="flex items-start gap-4 mb-6">
                <span className="font-serif text-5xl md:text-6xl text-[oklch(0.7_0.15_45)]/20">
                  {steps[activeStep].number}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <div className="h-1 w-16 bg-[oklch(0.7_0.15_45)] rounded-full" />
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                {steps[activeStep].expandedDescription}
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 opacity-0 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors"
          >
            <span className="text-sm uppercase tracking-wide">See the full six-step process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
