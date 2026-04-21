"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone, Users, Coffee, Building2 } from "lucide-react"

const baseList = [
  "Commercial-grade machine, matched to your team size and daily volume",
  "Professional on-site install, plumbed or tanked depending on your setup",
  "Staff training on install day, so two or more people can pull a proper shot",
  "Regular bean delivery, topped up on every service call",
  "Consumables included (cups, sugar sticks, stirrers, napkins)",
  "All servicing and maintenance, one call to Chris handles it",
  "Temporary replacement machine at no cost if anything needs workshop repair",
]

const largeExtras = [
  "Heavy-duty commercial machine, or paired setup across multiple floors or tea points",
  "Single point of contact on service, Chris personally manages the account",
  "Priority response on any service issue",
  "Custom bean supply to match high daily volume",
  "Consumables supplied at scale, delivered on the service schedule",
  "Quarterly review with Chris to adjust the setup as the team grows",
]

export function SolutionsLargeOffice() {
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
      id="large-office"
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
              Tier 03, Large office
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              50+ people. From $85 a week.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 text-pretty">
              For corporate head offices, larger law and accounting firms, professional services at scale, and workplaces where a single machine would never keep up. Heavy-duty commercial equipment, often paired across multiple tea points, with service intensity to match.
            </p>

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-5">
                What you get
              </h3>
              <ul className="space-y-4">
                {baseList.map((item) => (
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

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
                  And for large office specifically
                </h4>
                <ul className="space-y-4">
                  {largeExtras.map((item) => (
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
            </div>

            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
                Machines typically in this tier
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Typically Eversys Legacy (Swiss) or WMF commercial range. For multi-floor or multi-site setups, we'll often pair or replicate machines across locations.
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
                    <span className="font-semibold">Team size:</span> 50+ people (we've installed across teams up to 400+)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Coffee className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Daily coffee volume:</span> 150 cups to 500+
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Office type:</span> Corporate head offices, large law firms, accounting practices, multi-floor professional services, large tech companies
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Book a large office consult
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
                src="/maven-ventures-office.jpg"
                alt="A commercial espresso setup installed in a large corporate office kitchen with city views"
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
