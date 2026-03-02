"use client"

import { useEffect, useRef, useState } from "react"

export default function ServiceAreas() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const areas = [
    { name: "Sydney CBD", delay: 0 },
    { name: "North Sydney", delay: 100 },
    { name: "Inner West", delay: 200 },
    { name: "Eastern Suburbs", delay: 300 },
    { name: "Lower North Shore", delay: 400 },
    { name: "Parramatta", delay: 500 },
    { name: "Barangaroo", delay: 600 },
    { name: "Pyrmont", delay: 700 },
  ]

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl mb-12 lg:mb-16 text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Where We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {areas.map((area, index) => (
              <div
                key={area.name}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${area.delay}ms` }}
              >
                <div className="relative group">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-lg md:text-xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                    {area.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 text-center transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground/60 text-pretty max-w-2xl mx-auto">
              Don&apos;t see your area? We&apos;re always expanding. Get in touch to discuss your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
