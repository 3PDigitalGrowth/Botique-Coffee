"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Phone, Ruler, Wrench, Coffee, Calendar } from "lucide-react"

const tiles = [
  { icon: MessageSquare, number: "01", title: "Enquiry", detail: "2 min", actor: "You" },
  { icon: Phone, number: "02", title: "Phone call", detail: "15 min", actor: "With Chris" },
  { icon: Ruler, number: "03", title: "Site visit", detail: "30 min", actor: "On-site" },
  { icon: Wrench, number: "04", title: "Install", detail: "45 min", actor: "Our team" },
  { icon: Coffee, number: "05", title: "First brew and training", detail: "20 min", actor: "Your team" },
  { icon: Calendar, number: "06", title: "Ongoing rhythm", detail: "Weekly", actor: "Us, for you" },
]

export function HowItWorksSummary() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-10 md:mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            The short version
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-balance leading-tight max-w-3xl mx-auto">
            Scan this strip if you only have thirty seconds
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {tiles.map((tile, index) => {
            const Icon = tile.icon
            return (
              <div
                key={tile.number}
                className="rounded-xl bg-background border border-border p-4 md:p-5 flex flex-col items-start gap-3 transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-9 h-9 rounded-lg bg-copper/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-copper" strokeWidth={2} />
                  </div>
                  <span className="font-serif text-base text-muted-foreground">{tile.number}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm md:text-[15px] leading-snug mb-1">
                    {tile.title}
                  </p>
                  <p className="text-xs md:text-[13px] text-muted-foreground leading-snug">
                    {tile.detail}, {tile.actor}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <p
          className="mt-10 md:mt-12 text-center text-sm md:text-base text-foreground/80 max-w-2xl mx-auto transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          Most clients go from first call to first coffee in{" "}
          <span className="font-semibold text-copper">5 to 7 business days</span>.
        </p>
      </div>
    </section>
  )
}
