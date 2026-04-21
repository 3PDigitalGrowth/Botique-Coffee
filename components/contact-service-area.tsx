"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

const suburbGroups = [
  {
    label: "Melbourne CBD and inner city",
    suburbs: [
      "Melbourne CBD",
      "Docklands",
      "Southbank",
      "Carlton",
      "Fitzroy",
      "Collingwood",
      "Richmond",
      "South Yarra",
      "Cremorne",
      "Abbotsford",
    ],
  },
  {
    label: "Inner east",
    suburbs: [
      "Hawthorn",
      "Kew",
      "Camberwell",
      "Balwyn",
      "Surrey Hills",
      "Glen Iris",
      "Malvern",
    ],
  },
  {
    label: "Inner south",
    suburbs: [
      "Prahran",
      "Windsor",
      "St Kilda",
      "South Melbourne",
      "Port Melbourne",
      "Elwood",
      "Brighton",
    ],
  },
  {
    label: "Inner west",
    suburbs: [
      "Footscray",
      "Yarraville",
      "Seddon",
      "Kensington",
      "Flemington",
      "Ascot Vale",
      "Essendon",
    ],
  },
  {
    label: "Inner north",
    suburbs: [
      "North Melbourne",
      "Brunswick",
      "Coburg",
      "Northcote",
      "Thornbury",
      "Preston",
    ],
  },
  {
    label: "South-east corridor",
    suburbs: [
      "Cheltenham",
      "Moorabbin",
      "Clayton",
      "Mount Waverley",
      "Glen Waverley",
      "Box Hill",
    ],
  },
]

export function ContactServiceArea() {
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
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-muted/30 border-y border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="max-w-3xl mb-12 md:mb-14 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            We service Melbourne metro
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            If you&apos;re inside this area, we install, service, and support directly. Outside these suburbs? Call Chris anyway, we may still be able to help depending on the job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div
            className="transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "100ms",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {suburbGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
                    {group.label}
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-foreground/85 leading-relaxed">
                    {group.suburbs.map((suburb) => (
                      <li key={suburb}>{suburb}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "200ms",
            }}
          >
            <div className="sticky top-28 rounded-2xl overflow-hidden shadow-md aspect-[4/5] lg:aspect-auto lg:h-[600px] border border-border bg-background">
              <iframe
                title="Boutique Coffee at Work service area in Melbourne metro"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d201459.14!2d144.96!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-12 md:mt-14 p-6 md:p-7 rounded-2xl bg-copper/5 border border-copper/20 flex flex-col md:flex-row md:items-center md:justify-between gap-5 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "300ms",
          }}
        >
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-pretty">
            Can&apos;t see your suburb? Give Chris a call. We cover most of the Melbourne metro area, and we&apos;ll let you know straight up whether we can service your location. No runaround.
          </p>
          <a
            href="tel:0411876625"
            className="inline-flex items-center gap-2 px-6 py-3 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-md hover:scale-[1.02] transition-all duration-200 whitespace-nowrap self-start md:self-auto"
          >
            <Phone className="w-4 h-4" />
            0411 876 625
          </a>
        </div>
      </div>
    </section>
  )
}
