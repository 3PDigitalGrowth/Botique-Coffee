"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail } from "lucide-react"

export default function DirectContact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <div
      ref={sectionRef}
      className={`space-y-12 lg:space-y-16 lg:sticky lg:top-24 lg:self-start transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Or Get in Touch Directly</h2>
        <div className="space-y-8">
          <div className="group">
            <div className="flex items-center gap-4 mb-2">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground/60">Phone</span>
            </div>
            <a
              href="tel:0411876625"
              className="text-3xl lg:text-4xl font-light text-foreground group-hover:text-accent transition-colors duration-300"
            >
              0411 876 625
            </a>
          </div>

          <div className="group">
            <div className="flex items-center gap-4 mb-2">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground/60">Email</span>
            </div>
            <a
              href="mailto:chris@boutiquecoffee.com.au"
              className="text-xl lg:text-2xl font-light text-foreground group-hover:text-accent transition-colors duration-300 break-words"
            >
              chris@boutiquecoffee.com.au
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-muted-foreground/10">
        <p className="text-muted-foreground/70 text-pretty leading-relaxed mb-4">
          Prefer to call? Chris and the team are happy to chat.
        </p>
        <p className="text-sm text-muted-foreground/60 text-pretty leading-relaxed">
          We typically respond within 24 hours.
        </p>
      </div>
    </div>
  )
}
