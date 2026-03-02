"use client"

import { useEffect, useRef } from "react"

const philosophyPrinciples = [
  {
    title: "Relationships Over Transactions",
    description:
      "Every business is unique, and every partnership deserves personal attention. I believe in understanding your team, your culture, and your coffee needs before recommending any solution.",
  },
  {
    title: "Quality Is Non-Negotiable",
    description:
      "From the equipment we source to the coffee we recommend to the service we provide - quality is embedded in every decision. Your team deserves nothing less than exceptional.",
  },
  {
    title: "Flexibility Builds Trust",
    description:
      "Business needs change. Equipment needs evolve. Our leasing model was built on the principle that your coffee solution should adapt with you, not hold you back.",
  },
  {
    title: "Transparency Always",
    description:
      "No hidden fees. No complicated contracts. No surprises. Just honest conversations about what you need and how we can deliver it.",
  },
]

function PhilosophyPrinciple({ title, description, index }: { title: string; description: string; index: number }) {
  const principleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (principleRef.current) {
      observer.observe(principleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={principleRef}
      className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 text-pretty">{title}</h3>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

export default function ChrisPhilosophy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">Chris's Philosophy</h2>
          <p className="text-xl md:text-2xl text-muted-foreground italic">
            "We're not another corporate coffee supplier. We're partners in creating workplace experiences."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {philosophyPrinciples.map((principle, index) => (
            <PhilosophyPrinciple key={index} {...principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
