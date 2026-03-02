"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const philosophyPoints = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Identified a gap in the market for flexible, high-quality coffee machine leasing.",
    image: "/modern-professional-espresso-machine-in-corporate.jpg",
  },
  {
    year: "2019",
    title: "First Partnerships",
    description: "Secured relationships with leading equipment manufacturers and launched pilot program.",
    image: "/modern-professional-espresso-machine-in-corporate.jpg",
  },
  {
    year: "2021",
    title: "Rapid Growth",
    description: "Expanded to serve 200+ businesses across multiple industries, refining our service model.",
    image: "/modern-professional-espresso-machine-in-corporate.jpg",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Now serving 500+ companies with a reputation for excellence, flexibility, and service.",
    image: "/modern-professional-espresso-machine-in-corporate.jpg",
  },
]

function PhilosophyPoint({
  year,
  title,
  description,
  image,
  index,
}: {
  year: string
  title: string
  description: string
  image: string
  index: number
}) {
  const pointRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0")
            entry.target.classList.remove("opacity-0", index % 2 === 0 ? "-translate-x-12" : "translate-x-12")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (pointRef.current) {
      observer.observe(pointRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={pointRef}
      className={`opacity-0 ${
        index % 2 === 0 ? "-translate-x-12" : "translate-x-12"
      } transition-all duration-1000 ease-out mb-16 md:mb-24`}
    >
      <div
        className={`flex flex-col md:flex-row gap-8 items-center ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex-1">
          <div className="font-mono text-sm text-accent mb-2">{year}</div>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-pretty">{title}</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div className="flex-1 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default function FounderPhilosophy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            Building Something Different
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of innovation, partnerships, and unwavering commitment to quality.
          </p>
        </div>

        {philosophyPoints.map((point, index) => (
          <PhilosophyPoint key={index} {...point} index={index} />
        ))}
      </div>
    </section>
  )
}
