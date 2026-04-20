"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Heart, Users, Sparkles, ArrowRight } from "lucide-react"

const differentiators = [
  {
    icon: Heart,
    title: "Founder-led, always",
    description:
      "You're not passed between departments. Chris stays accountable for the experience, from setup to ongoing support.",
  },
  {
    icon: Users,
    title: "Local roasters, chosen on purpose",
    description:
      "We partner with roasters who care about ethical sourcing, sustainability, and flavour that holds up in the workplace.",
  },
  {
    icon: Sparkles,
    title: "Café-quality, made practical",
    description:
      "The right machine, dialled-in beans, and training that makes great coffee easy for real teams, not baristas.",
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-background overflow-hidden">
      {/* Soft decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-copper/5 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Intro */}
        <div
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            Our difference
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance leading-tight">
            Why teams choose us over the usual coffee suppliers
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Three things set us apart — and they're the things our clients tell us matter most.
          </p>
        </div>

        {/* Grid of differentiators */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group relative flex flex-col h-full p-7 md:p-8 rounded-2xl bg-background border border-muted/50 hover:border-copper/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 150}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "800ms",
                }}
              >
                <span className="absolute top-6 right-6 font-serif text-5xl leading-none text-copper/15 group-hover:text-copper/30 transition-colors">
                  0{index + 1}
                </span>

                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center group-hover:bg-copper/15 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-7 h-7 text-copper" strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                  {item.description}
                </p>

                <span className="mt-6 pt-6 border-t border-muted/40 flex items-center gap-2 text-xs uppercase tracking-widest text-copper/80 group-hover:text-copper transition-colors">
                  <span className="h-px w-6 bg-copper/40 group-hover:w-10 transition-all duration-300" />
                  <span>
                    {index === 0 ? "Personal service" : index === 1 ? "Ethical sourcing" : "Practical quality"}
                  </span>
                </span>
              </article>
            )
          })}
        </div>

        {/* Closing note + CTA */}
        <div
          className="mt-16 md:mt-20 flex flex-col items-center gap-5 text-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic max-w-2xl leading-relaxed text-balance">
            "If you want a supplier, there are plenty. If you want a coffee partner, you're in the right place."
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-copper hover:text-copper-dark text-sm uppercase tracking-widest font-medium transition-colors"
          >
            Schedule a coffee consult
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
