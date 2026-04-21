"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Coffee, SlidersHorizontal } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "We ask about your team",
    body: "Do they drink mostly espresso or mostly milk-based? Strong and bold, or smooth and balanced? Any specific dislikes? Five minutes of conversation sorts most of it.",
  },
  {
    icon: Coffee,
    number: "02",
    title: "We start you on a well-matched blend",
    body: "Based on the conversation, we pick a starting blend we know suits that profile. First delivery arrives with the machine on install day.",
  },
  {
    icon: SlidersHorizontal,
    number: "03",
    title: "We adjust based on what you say",
    body: "If the team wants something brighter, richer, or different, tell Chris and we change it on the next delivery. No fuss. Most clients settle on a favourite within the first month.",
  },
]

export function RoasterStories() {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            How bean matching works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Matching the bean to the team
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Not every workplace wants the same coffee. Here's how we work out what yours should be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative bg-background border border-muted/50 rounded-2xl p-6 md:p-7 hover:border-copper/40 hover:shadow-lg transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 150}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "1000ms",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-copper" />
                  </div>
                  <span className="font-serif text-4xl text-copper/30">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug text-balance">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                  {step.body}
                </p>
              </div>
            )
          })}
        </div>

        <div
          className="mt-12 md:mt-16 flex justify-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <TestimonialCard
            quote="Chris supplies us with fresh coffee and a fully maintained machine, and his attention to detail is what makes it work. We serve great coffee every day in a busy retail environment, and that's because of him."
            name="Michael May"
          />
        </div>
      </div>
    </section>
  )
}
