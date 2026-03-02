"use client"

import { useEffect, useRef } from "react"

const storyMoments = [
  {
    quote: "It started with a simple question",
    paragraph:
      "Why was it so difficult for businesses to access quality coffee equipment without the burden of ownership? Chris spent years in corporate environments, watching companies struggle with outdated machines, expensive purchases, and inflexible contracts. There had to be a better way.",
  },
  {
    quote: "The coffee shop revelation",
    paragraph:
      "Working alongside independent café owners, Chris discovered the same pain point everywhere: access to premium equipment was reserved for those with deep pockets. Small businesses and growing companies were left with subpar solutions that compromised on quality and experience.",
  },
  {
    quote: "Building a new model",
    paragraph:
      "What if businesses could access top-tier coffee machines through flexible leasing? Chris partnered with leading manufacturers to create a model that prioritized accessibility without compromising on quality. Maintenance included, no hidden costs, just exceptional coffee for every business.",
  },
  {
    quote: "A mission realized",
    paragraph:
      "Today, over 500 companies trust our coffee solutions. From startups to enterprise, we've democratised access to premium coffee equipment. But the journey isn't about numbers - it's about the thousands of employees who start their day with an exceptional cup of coffee.",
  },
]

function StoryMoment({ quote, paragraph, index }: { quote: string; paragraph: string; index: number }) {
  const momentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-12")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (momentRef.current) {
      observer.observe(momentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={momentRef} className="opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-24 md:mb-32">
      <div className={`max-w-4xl ${index % 2 === 0 ? "ml-0" : "ml-auto"}`}>
        <blockquote className="font-serif text-3xl md:text-5xl text-foreground mb-6 text-pretty leading-tight">
          "{quote}"
        </blockquote>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{paragraph}</p>
      </div>
    </div>
  )
}

export default function FounderStory() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {storyMoments.map((moment, index) => (
          <StoryMoment key={index} {...moment} index={index} />
        ))}
      </div>
    </section>
  )
}
