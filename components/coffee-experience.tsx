"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function CoffeeExperience() {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const isVisible = (index: number) => visibleImages.has(index)

  const experiences = [
    { image: "/coffee-brewing-process.jpg", word: "Craft" },
    { image: "/latte-art-barista.jpg", word: "Artistry" },
    { image: "/team-enjoying-coffee.jpg", word: "Connection" },
    { image: "/premium-coffee-beans.jpg", word: "Quality" },
    { image: "/coffee-roasting-process.jpg", word: "Passion" },
    { image: "/coffee-community.jpg", word: "Community" },
  ]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-20 text-balance">The Coffee Experience</h2>

        <div className="space-y-16">
          {/* Full width */}
          <div
            ref={(el) => {
              imageRefs.current[0] = el
            }}
            className={`relative aspect-[21/9] overflow-hidden transition-all duration-1000 ${
              isVisible(0) ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={experiences[0].image || "/placeholder.svg"}
              alt={experiences[0].word}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-8 left-8 font-serif text-5xl md:text-7xl text-white">
              {experiences[0].word}
            </span>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((index) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                className={`relative aspect-[4/3] overflow-hidden transition-all duration-1000 delay-${index * 200} ${
                  isVisible(index) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src={experiences[index].image || "/placeholder.svg"}
                  alt={experiences[index].word}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 font-serif text-4xl md:text-5xl text-white">
                  {experiences[index].word}
                </span>
              </div>
            ))}
          </div>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {[3, 4, 5].map((index) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                className={`relative aspect-square overflow-hidden transition-all duration-1000 delay-${(index - 3) * 200} ${
                  isVisible(index) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Image
                  src={experiences[index].image || "/placeholder.svg"}
                  alt={experiences[index].word}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 font-serif text-3xl md:text-4xl text-white">
                  {experiences[index].word}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
