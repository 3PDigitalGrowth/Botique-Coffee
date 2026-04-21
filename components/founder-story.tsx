"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

export default function FounderStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 bg-background"
    >
      <div
        className="max-w-3xl mx-auto transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 text-balance leading-tight">
          How this started, and why it hasn't changed much
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed text-pretty">
          <p>
            In 2008 I was watching Melbourne offices put up with coffee that didn't match the city they were in. Outside the door, some of the best cafés in the world. Inside, a tin of instant and a kettle. The gap didn't make sense to me.
          </p>
          <p>
            So I started Boutique Coffee at Work with a simple idea. Rent a proper commercial machine to a workplace, install it, keep the beans coming, service it when it needs servicing, and actually answer the phone when something goes wrong. No big contracts. No lock-ins. No hiding behind a support ticket.
          </p>
          <p>
            Seventeen years on, we've grown, but the model hasn't changed. I still do the site visits personally. I still pick the machines that suit the team. I still answer the phone. If you rent a machine from us, you get me. That's the whole point.
          </p>
        </div>

        <figure className="mt-14 md:mt-16 max-w-2xl mx-auto text-center">
          <Quote className="w-8 h-8 text-copper mx-auto mb-4" strokeWidth={1.5} />
          <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug text-balance">
            &ldquo;I'm not trying to be the biggest coffee machine company in Melbourne. I'm trying to be the one that still gives a damn.&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-sm uppercase tracking-[0.2em] text-copper font-semibold">
            Chris
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
