"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ClientStoryProps {
  layout: "offset-left" | "offset-right" | "full-width" | "narrow-center" | "split"
  company: string
  industry: string
  quote: string
  testimonial: string
  clientName: string
  clientRole: string
  workplaceImage: string
  clientImage: string
  keyBenefit?: string
}

export function ClientStory({
  layout,
  company,
  industry,
  quote,
  testimonial,
  clientName,
  clientRole,
  workplaceImage,
  clientImage,
  keyBenefit,
}: ClientStoryProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Layout: offset-left
  if (layout === "offset-left") {
    return (
      <section ref={sectionRef} className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image on left */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={workplaceImage || "/placeholder.svg"}
                  alt={`${company} workplace`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content on right */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-2">{company}</h2>
              <p className="text-sm text-muted-foreground mb-8">{industry}</p>

              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-balance">
                "{quote}"
              </blockquote>

              <p className="leading-relaxed text-foreground/80 mb-8">{testimonial}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={clientImage || "/placeholder.svg"} alt={clientName} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{clientName}</p>
                  <p className="text-sm text-muted-foreground">{clientRole}</p>
                </div>
              </div>

              {keyBenefit && (
                <p className="text-sm font-medium text-copper-600 mb-4 uppercase tracking-wider">{keyBenefit}</p>
              )}
              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Layout: offset-right
  if (layout === "offset-right") {
    return (
      <section ref={sectionRef} className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Content on left */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-2">{company}</h2>
              <p className="text-sm text-muted-foreground mb-8">{industry}</p>

              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-balance">
                "{quote}"
              </blockquote>

              <p className="leading-relaxed text-foreground/80 mb-8">{testimonial}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={clientImage || "/placeholder.svg"} alt={clientName} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{clientName}</p>
                  <p className="text-sm text-muted-foreground">{clientRole}</p>
                </div>
              </div>

              {keyBenefit && (
                <p className="text-sm font-medium text-copper-600 mb-4 uppercase tracking-wider">{keyBenefit}</p>
              )}
              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>

            {/* Image on right */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={workplaceImage || "/placeholder.svg"}
                  alt={`${company} workplace`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Layout: full-width
  if (layout === "full-width") {
    return (
      <section ref={sectionRef} className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Full width image */}
          <div
            className={`relative w-full aspect-[21/9] overflow-hidden mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={workplaceImage || "/placeholder.svg"}
              alt={`${company} workplace`}
              fill
              className="object-cover"
            />
          </div>

          {/* Content below, offset to one side */}
          <div
            className={`max-w-2xl ml-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-2">{company}</h2>
            <p className="text-sm text-muted-foreground mb-8">{industry}</p>

            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-balance">
              "{quote}"
            </blockquote>

            <p className="leading-relaxed text-foreground/80 mb-8">{testimonial}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image src={clientImage || "/placeholder.svg"} alt={clientName} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">{clientName}</p>
                <p className="text-sm text-muted-foreground">{clientRole}</p>
              </div>
            </div>

            {keyBenefit && (
              <p className="text-sm font-medium text-copper-600 mb-4 uppercase tracking-wider">{keyBenefit}</p>
            )}
            <Button asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Layout: narrow-center
  if (layout === "narrow-center") {
    return (
      <section ref={sectionRef} className="py-16 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-2 text-center">{company}</h2>
            <p className="text-sm text-muted-foreground mb-12 text-center">{industry}</p>

            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-12 text-center text-balance">
              "{quote}"
            </blockquote>

            {/* Centered portrait image */}
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden mb-8">
              <Image
                src={workplaceImage || "/placeholder.svg"}
                alt={`${company} workplace`}
                fill
                className="object-cover"
              />
            </div>

            <p className="leading-relaxed text-foreground/80 mb-8 text-center">{testimonial}</p>

            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image src={clientImage || "/placeholder.svg"} alt={clientName} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">{clientName}</p>
                <p className="text-sm text-muted-foreground">{clientRole}</p>
              </div>
            </div>

            {keyBenefit && (
              <p className="text-sm font-medium text-copper-600 mb-4 uppercase tracking-wider text-center">
                {keyBenefit}
              </p>
            )}
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Layout: split
  if (layout === "split") {
    return (
      <section ref={sectionRef} className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Content - 3 columns */}
            <div
              className={`md:col-span-3 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-2">{company}</h2>
              <p className="text-sm text-muted-foreground mb-8">{industry}</p>

              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-balance">
                "{quote}"
              </blockquote>

              <p className="leading-relaxed text-foreground/80 mb-8">{testimonial}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={clientImage || "/placeholder.svg"} alt={clientName} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{clientName}</p>
                  <p className="text-sm text-muted-foreground">{clientRole}</p>
                </div>
              </div>

              {keyBenefit && (
                <p className="text-sm font-medium text-copper-600 mb-4 uppercase tracking-wider">{keyBenefit}</p>
              )}
              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>

            {/* Image - 2 columns */}
            <div
              className={`md:col-span-2 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={workplaceImage || "/placeholder.svg"}
                  alt={`${company} workplace`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return null
}
