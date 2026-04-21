"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone, Users, Coffee, Building2 } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"

const baseList = [
  "Commercial-grade machine, matched to your team size and daily volume",
  "Professional on-site install, plumbed or tanked depending on your setup",
  "Staff training on install day, so two or more people can pull a proper shot",
  "Regular bean delivery, topped up on every service call",
  "Consumables included (cups, sugar sticks, stirrers, napkins)",
  "All servicing and maintenance, one call to Chris handles it",
  "Temporary replacement machine at no cost if anything needs workshop repair",
]

const midExtras = [
  "Higher-capacity machine with faster cycle times for morning rush",
  "Multiple milk options supported (full cream and skim standard, oat, almond, soy on request)",
  "Programmable menu so your team can save favourites",
  "All servicing, maintenance, and temporary replacement included as standard",
]

export function SolutionsMidOffice() {
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
      id="mid-office"
      ref={sectionRef}
      className="scroll-mt-24 py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div
            className="order-1 lg:sticky lg:top-24 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/modern-professional-espresso-machine-in-corporate.jpg"
                alt="A commercial espresso machine in a corporate office kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="order-2 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs uppercase tracking-widest text-copper font-semibold">
                Tier 02, Mid-size office
              </p>
              <span className="inline-flex items-center bg-copper text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full">
                Our most common tier
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              15 to 50 people. From $55 a week.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 text-pretty">
              The sweet spot for most Melbourne offices. A commercial-grade super-automatic that handles steady daily volume without skipping a beat, with enough programmable options to keep a diverse team happy. This is where most of our clients sit, and it's the tier Chris installs most often.
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
                  And for mid-size specifically
                </h4>
                <ul className="space-y-4">
                  {midExtras.map((item) => (
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
                Typically WMF (German) or Eversys (Swiss) depending on your volume and space. Dr Coffee F100 also a strong option for mid-size teams wanting a programmable touch-screen setup.
              </p>
            </div>

            <div className="mb-8">
              <TestimonialCard
                quote="Chris upgraded us to a WMF machine and the whole office noticed. Easy to use, great coffee, great hot chocolate, and the service has been consistent for years. Everyone here loves it."
                name="Paul Bruno"
                company="Pepperl+Fuchs Australia"
              />
            </div>

            <div className="mb-8 p-6 rounded-2xl bg-background border border-border shadow-sm">
              <h3 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
                Who this tier is actually for
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Team size:</span> 15 to 50 people
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Coffee className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Daily coffee volume:</span> 40 to 150 cups
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    <span className="font-semibold">Office type:</span> Established agencies, growing tech companies, law firms, medium professional practices, design studios, corporate offices
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Book a mid-size office consult
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
        </div>
      </div>
    </section>
  )
}
