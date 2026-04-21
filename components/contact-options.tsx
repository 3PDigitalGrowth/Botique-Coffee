"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, Calendar } from "lucide-react"

const options = [
  {
    icon: Phone,
    label: "Call direct",
    value: "0411 876 625",
    href: "tel:0411876625",
    subtext:
      "Fastest way. Usually picked up, otherwise called back within 2 hours during business hours.",
  },
  {
    icon: Mail,
    label: "Email direct",
    value: "chris@boutiquecoffee.com.au",
    href: "mailto:chris@boutiquecoffee.com.au",
    subtext:
      "Good for questions, site photos, or setting up a time. Replied within 1 business day.",
  },
  {
    icon: Calendar,
    label: "Book a consult",
    value: "Use the form below",
    href: "#consult-form",
    subtext:
      "Tell us your team size and suburb, Chris calls you back within 1 business day to lock in a time.",
  },
]

export function ContactOptions() {
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
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-muted/30 border-y border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {options.map((option, index) => {
            const Icon = option.icon
            const isButton = option.href.startsWith("#")
            const commonClasses =
              "group flex flex-col h-full p-6 md:p-7 rounded-2xl bg-background border border-border hover:border-copper/40 hover:shadow-md transition-all duration-200"
            const inner = (
              <>
                <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mb-5 group-hover:bg-copper/20 transition-colors">
                  <Icon className="w-5 h-5 text-copper" strokeWidth={1.75} />
                </div>
                <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-2">
                  {option.label}
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug group-hover:text-copper transition-colors">
                  {option.value}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {option.subtext}
                </p>
              </>
            )

            return (
              <div
                key={option.label}
                className="transition-all duration-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {isButton ? (
                  <a href={option.href} className={commonClasses}>
                    {inner}
                  </a>
                ) : (
                  <a href={option.href} className={commonClasses}>
                    {inner}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
