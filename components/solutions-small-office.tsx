"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone, Users, Coffee, Building2 } from "lucide-react"

const whatYouGet = [
  "Compact super-automatic machine, matched to your space",
  "Professional on-site install, plumbed or tanked depending on your setup",
  "Staff training on install day, so two or more people can pull a proper shot",
  "Regular bean delivery, topped up on every service call",
  "Consumables included (cups, sugar sticks, stirrers, napkins)",
  "All servicing and maintenance, one call to Chris handles it",
  "Temporary replacement machine at no cost if anything needs workshop repair",
]

export function SolutionsSmallOffice() {
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
      id="small-office"
      ref={sectionRef}
      className="scroll-mt-24 py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div
            className="order-2 lg:order-1 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
              Tier 01, Small office
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Up to 15 people. From $35 a week.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 text-pretty">
              For studios, agencies, small professional firms, and growing startups. A compact super-automatic machine that handles the morning rush without queuing, without maintenance hassle, and without the cost of a full commercial rig you don't need yet.
            </p>

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-5">
                What you get
              </h3>
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-copper" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-foreground/85 text-sm md:text-base leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
                Machines typically in this tier
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Typically Jura (Swiss), Dr Coffee Minibar, or Faemina depending on your team's preferences and the space. Chris will confirm the exact model on the consult.
              </p>
            </div>

            <div className="mb-8 p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
                Who this tier is actually for
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Team size:</span> 5 to 15 people
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Coffee className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Daily coffee volume:</span> Up to around 40 cups
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Office type:</span> Creative studios, small agencies, boutique professional firms, early-stage startups
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Book a small office consult
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0411876625"
                className="inline-flex items-center gap-2 px-2 py-3 text-foreground/80 hover:text-copper transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Or call Chris direct: 0411 876 625
              </a>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 lg:sticky lg:top-24 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/creative-agency-workspace-with-coffee-machine.jpg"
                alt="A compact super-automatic coffee machine in a small Melbourne office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
