"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Handshake, PiggyBank } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "A culture your team shows up for",
    description:
      "Great coffee turns your kitchen into the heart of your office. More chats, stronger bonds, less doom-scrolling alone at a desk.",
  },
  {
    icon: Handshake,
    title: "Clients who feel the difference",
    description:
      "Walk a client into a meeting with a latte better than their favourite café, and watch the conversation change tone.",
  },
  {
    icon: TrendingUp,
    title: "Fewer café runs, more deep work",
    description:
      "Reclaim 30–45 minutes of lost productivity a day per person. Great coffee on-site keeps momentum in the building.",
  },
  {
    icon: PiggyBank,
    title: "Premium quality, sensible cost",
    description:
      "Once the trial ends, if you keep it, one commercial machine serves your whole team for less than what daily café runs cost.",
  },
]

export function TrialBenefits() {
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Why owners &amp; founders love it</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            A small upgrade. A big daily win.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Coffee is the most-used appliance in any Victorian workplace. Getting it right pays back every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((b, index) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="flex gap-5 p-6 md:p-7 rounded-2xl border border-muted/50 hover:border-copper/40 hover:shadow-md transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 100}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "700ms",
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-copper" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{b.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
