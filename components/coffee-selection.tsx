"use client"

import { useEffect, useRef, useState } from "react"

export function CoffeeSelection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Subsection A */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 text-balance">The Art of Selection</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Choosing the right coffee is both science and intuition. We consider origin, roast profile, flavor
                notes, sustainability practices, and the story behind each bean. Every selection is made with care,
                ensuring it meets our rigorous standards for quality, ethics, and taste.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "Origin", description: "Single-origin beans from ethical farms" },
                { label: "Roast Profile", description: "Light, medium, or dark based on preference" },
                { label: "Flavor Notes", description: "Fruity, nutty, chocolatey, or floral" },
                { label: "Sustainability", description: "Fair trade, organic, and eco-friendly" },
              ].map((criterion, index) => (
                <div key={index} className="border-l-2 border-copper pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2">{criterion.label}</h3>
                  <p className="font-sans text-base text-muted-foreground">{criterion.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection B */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 text-balance">Tailored to Your Taste</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-sans text-xl font-semibold mb-4">Business Culture</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
                Creative agencies might love experimental, bright roasts. Law firms may prefer classic, bold profiles.
                We match coffee to your company's personality and values.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xl font-semibold mb-4">Team Preferences</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
                We survey your team to understand their tastes. Do they prefer espresso or filter? Light or dark? We
                ensure everyone finds something they love.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xl font-semibold mb-4">Seasonal Variations</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
                Coffee preferences shift with the seasons. Brighter, fruitier coffees in summer; richer, fuller-bodied
                in winter. We adapt your selection throughout the year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
