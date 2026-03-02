"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface JourneyStepProps {
  step: string
  title: string
  heading: string
  description: string
  imageUrl: string
  imageAlt: string
  alignment: "left" | "right"
  isLast?: boolean
}

export function JourneyStep({
  step,
  title,
  heading,
  description,
  imageUrl,
  imageAlt,
  alignment,
  isLast = false,
}: JourneyStepProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)

    const handleScroll = () => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.max(0, Math.min(1, 1 - (rect.top - windowHeight * 0.3) / (windowHeight * 0.5)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const imageTransform =
    alignment === "left"
      ? `translateX(${(1 - scrollProgress) * -100}px)`
      : `translateX(${(1 - scrollProgress) * 100}px)`

  const contentTransform =
    alignment === "left"
      ? `translateX(${(1 - scrollProgress) * 100}px)`
      : `translateX(${(1 - scrollProgress) * -100}px)`

  return (
    <section ref={sectionRef} className={`relative min-h-screen w-full ${!isLast ? "mb-0" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
        <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${alignment === "right" ? "lg:grid-flow-dense" : ""}`}>
          {/* Image */}
          <div
            className={`relative ${alignment === "right" ? "lg:col-start-2" : ""}`}
            style={{
              opacity: scrollProgress,
              transform: imageTransform,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center ${alignment === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}
            style={{
              opacity: scrollProgress,
              transform: contentTransform,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">{step}</div>

            <h2
              className="mb-6 font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              {title}
            </h2>

            <h3
              className="mb-4 text-xl font-medium text-accent md:text-2xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
              }}
            >
              {heading}
            </h3>

            <p
              className="text-pretty text-lg leading-relaxed text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Line Between Steps */}
      {!isLast && <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-border" />}
    </section>
  )
}
