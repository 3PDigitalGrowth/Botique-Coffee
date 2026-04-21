"use client"

import { useEffect, useRef, useState } from "react"
import { TestimonialCard } from "@/components/testimonial-card"

const principles = [
  {
    title: "I do the site visit myself",
    body: "Before any quote or contract, I come and look at your space. Where the machine goes, where the power is, how many people will use it, what your morning rush looks like. Thirty minutes, in person, no obligation. I've been doing this long enough to know a spec sheet doesn't tell you what a real office needs.",
  },
  {
    title: "One number, one person",
    body: "When something goes wrong, you call me. Not a helpdesk. Not a ticket system. Not whoever happens to be rostered on. Most fixes I can talk you through in two minutes. Anything bigger, I'm usually on-site the same day or the next. That's the service the rental fee pays for.",
  },
  {
    title: "No lock-in, ever",
    body: "Our rentals are month to month. If we're not doing the job, you give me a month's notice and we pick up the machine. I'd rather you leave happy than stay stuck. In 17 years that policy has never cost me a client I wanted to keep.",
  },
  {
    title: "I won't sell you the wrong machine",
    body: "If your team is 12 people, you don't need a $15,000 Eversys. If your team is 80 people, a home-grade Jura will fall over in a month. I'll tell you what fits, even if it's the cheaper option. Long-term clients are worth more to me than one big first invoice.",
  },
]

export default function ChrisPhilosophy() {
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
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-muted/30 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-copper/5 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            Operating principles
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance leading-tight">
            How I actually work
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Four things I've been consistent on for 17 years. If these don't sound like what you want in a supplier, I'm probably not your guy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {principles.slice(0, 2).map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col h-full p-7 md:p-8 rounded-2xl bg-background border border-muted/50 hover:border-copper/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 120}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow",
                transitionDuration: "800ms",
              }}
            >
              <span className="absolute top-6 right-6 font-serif text-5xl leading-none text-copper/15 group-hover:text-copper/30 transition-colors">
                0{index + 1}
              </span>

              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug text-balance pr-12">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                {item.body}
              </p>
            </article>
          ))}

          <div
            className="md:col-span-2 flex justify-center transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "280ms",
            }}
          >
            <TestimonialCard
              variant="feature"
              quote="A broken machine causes havoc when the office is busy. Chris is easily contactable and the service is reliable and regular, which means our team has coffee when they need it most. Genuinely grateful for that."
              name="Chrissie Straw"
              company="AJM-JV"
            />
          </div>

          {principles.slice(2).map((item, index) => {
            const realIndex = index + 2
            return (
              <article
                key={item.title}
                className="group relative flex flex-col h-full p-7 md:p-8 rounded-2xl bg-background border border-muted/50 hover:border-copper/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${realIndex * 120}ms`,
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "800ms",
                }}
              >
                <span className="absolute top-6 right-6 font-serif text-5xl leading-none text-copper/15 group-hover:text-copper/30 transition-colors">
                  0{realIndex + 1}
                </span>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug text-balance pr-12">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
