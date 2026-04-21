"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Machine = {
  name: string
  tagline: string
  description: string
  image: string
  imageClassName?: string
  tier: "Small office" | "Mid-size office" | "Large office"
  tierAnchor: string
}

const machines: Machine[] = [
  {
    name: "Faemina",
    tagline: "Italian-built compact espresso",
    description:
      "Lever extraction with natural coffee cream. A boutique café look for small offices and studios that want craft on the bench.",
    image: "/machines/faemina.png",
    imageClassName: "object-cover",
    tier: "Small office",
    tierAnchor: "#small-office",
  },
  {
    name: "Dr Coffee Minibar",
    tagline: "Compact super-automatic, touch screen",
    description:
      "Full-colour LED touch screen with custom branding. Smart fit for small offices, meeting rooms, and public spaces.",
    image: "/machines/dr-coffee-minibar.jpg",
    tier: "Small office",
    tierAnchor: "#small-office",
  },
  {
    name: "Dr Coffee F100",
    tagline: "Programmable, dual-boiler commercial",
    description:
      "New-generation grinder group and dual boiler system for stable production. Six configuration options to match your setup.",
    image: "/machines/dr-coffee-f100.png",
    tier: "Mid-size office",
    tierAnchor: "#mid-office",
  },
  {
    name: "Dr Coffee Coffee Bar",
    tagline: "Fully automatic, hospitality-grade",
    description:
      "Daily drink variety for busy offices, cafés, hotels, and hospitality. Powder and milk systems with extensive customisation.",
    image: "/machines/coffee-bar-horeca.jpg",
    tier: "Mid-size office",
    tierAnchor: "#mid-office",
  },
  {
    name: "Eversys Legacy",
    tagline: "Swiss commercial flagship",
    description:
      "Self-cleaning, dual grinders, built for high volume. Our go-to for large head offices and teams where coffee is genuinely non-negotiable.",
    image: "/machines/eversys-legacy.png",
    tier: "Large office",
    tierAnchor: "#large-office",
  },
]

export function SolutionsMachineRange() {
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
      className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center max-w-2xl mx-auto mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            The machines
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            The machines we actually rent
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A look at some of the models in our Melbourne fleet. Chris will confirm the exact machine for your team on the consult, based on volume, space, and taste preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {machines.map((machine, index) => (
            <a
              key={machine.name}
              href={machine.tierAnchor}
              className="group rounded-2xl border border-border bg-background shadow-sm hover:shadow-md hover:border-copper/40 transition-all duration-300 flex flex-col overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${150 + index * 80}ms`,
              }}
            >
              <div className="relative aspect-square bg-muted/30 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={machine.image}
                    alt={`${machine.name} commercial coffee machine`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={machine.imageClassName ?? "object-contain"}
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1 leading-tight">
                  {machine.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-copper font-semibold mb-3">
                  {machine.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {machine.description}
                </p>
                <span className="mt-4 pt-4 border-t border-border text-xs uppercase tracking-widest text-foreground/70 font-medium">
                  Typical tier, {machine.tier}
                </span>
              </div>
            </a>
          ))}
        </div>

        <p
          className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "700ms",
          }}
        >
          We also rent WMF (German) and Jura (Swiss) machines alongside the models shown. Brand preference? Tell Chris on the consult and we'll work with what suits.
        </p>
      </div>
    </section>
  )
}
