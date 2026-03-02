"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function RoasterStories() {
  const [visibleRoasters, setVisibleRoasters] = useState<Set<number>>(new Set())
  const roasterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = roasterRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleRoasters((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.15 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const isVisible = (index: number) => visibleRoasters.has(index)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-20 text-balance">Our Roasting Partners</h2>

        {/* Roaster 1 - Featured */}
        <div
          ref={(el) => {
            roasterRefs.current[0] = el
          }}
          className={`mb-32 transition-all duration-1000 ${
            isVisible(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/artisan-roastery-at-work.jpg" alt="Artisan roastery" fill className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3">Heritage Roasters</h3>
              <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Melbourne, Victoria
              </p>
              <p className="font-sans text-lg text-copper mb-6 italic">
                Specialty: Single-origin, light roasts with bright, complex notes
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Founded by third-generation coffee enthusiasts, Heritage Roasters brings decades of expertise to every
                batch. They work directly with farmers in Ethiopia, Colombia, and Guatemala, ensuring fair prices and
                sustainable practices. Their light roasts highlight the unique terroir of each origin, creating coffee
                that's as much about the story as the taste. Perfect for teams who appreciate nuanced, fruit-forward
                profiles and ethical sourcing.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-copper hover:text-copper/80 transition-colors group"
              >
                <span className="font-sans text-sm uppercase tracking-wider">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Roaster 2 - Secondary */}
        <div
          ref={(el) => {
            roasterRefs.current[1] = el
          }}
          className={`mb-32 transition-all duration-1000 delay-200 ${
            isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3">Urban Craft Coffee</h3>
              <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Sydney, New South Wales
              </p>
              <p className="font-sans text-lg text-copper mb-6 italic">
                Specialty: Medium roasts with balanced, approachable flavors
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Urban Craft Coffee is all about accessibility without compromise. They believe great coffee shouldn't be
                intimidating, so they create medium roasts that are smooth, balanced, and crowd-pleasing. Their beans
                come from women-owned farms in Central and South America, and they're passionate about creating coffee
                that brings people together. Ideal for diverse teams seeking approachable, high-quality coffee.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-copper hover:text-copper/80 transition-colors group"
              >
                <span className="font-sans text-sm uppercase tracking-wider">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/urban-craft-roastery.jpg"
                  alt="Urban Craft Coffee roastery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Roaster 3 - Tertiary */}
        <div
          ref={(el) => {
            roasterRefs.current[2] = el
          }}
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <div className="relative aspect-[3/4] overflow-hidden max-w-md mx-auto">
                <Image src="/bold-brew-roastery.jpg" alt="Bold Brew roastery" fill className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-serif text-3xl md:text-4xl mb-3">Bold Brew Collective</h3>
              <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Brisbane, Queensland
              </p>
              <p className="font-sans text-lg text-copper mb-6 italic">
                Specialty: Dark roasts with rich, bold, chocolatey notes
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                For teams who love their coffee strong and full-bodied, Bold Brew Collective delivers. They specialize
                in dark roasts that emphasize caramel, chocolate, and toasted nut flavors. Their beans are sourced from
                organic farms in Brazil and Indonesia, roasted to perfection for maximum richness. Perfect for
                businesses that want a classic, robust coffee experience.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-copper hover:text-copper/80 transition-colors group"
              >
                <span className="font-sans text-sm uppercase tracking-wider">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Roasters - Horizontal Scroll */}
        <div className="overflow-x-auto -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 pb-8">
          <div className="flex gap-8 min-w-max">
            {[
              { name: "Coastal Coffee Co.", location: "Perth, WA", specialty: "Organic blends" },
              { name: "Mountain Peak Roasters", location: "Adelaide, SA", specialty: "High-altitude beans" },
              { name: "Artisan Grounds", location: "Hobart, TAS", specialty: "Micro-batch roasting" },
              { name: "The Coffee Lab", location: "Canberra, ACT", specialty: "Experimental roasts" },
            ].map((roaster, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 bg-background p-8 transition-all hover:shadow-lg group cursor-pointer"
              >
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src={`/roaster-${index + 4}.jpg`}
                    alt={roaster.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-serif text-2xl mb-2 group-hover:text-copper transition-colors">{roaster.name}</h4>
                <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-3">
                  {roaster.location}
                </p>
                <p className="font-sans text-sm text-copper italic">{roaster.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
