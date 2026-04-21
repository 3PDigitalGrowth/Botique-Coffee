"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function FounderHero() {
  return (
    <section className="relative w-full bg-background pt-20 md:pt-24 lg:pt-0">
      {/* Image: flow (banner) on mobile/tablet, absolute full-bleed on desktop */}
      <div className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/images/Chris_Solo_Van.png"
          alt="Chris Prokopiou in front of the Boutique Coffee at Work branded service van"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 45%" }}
        />

        {/* Subtle top fade on mobile so the fixed header blends over the image */}
        <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/70 to-transparent" />

        {/* Desktop: left-to-right dark gradient for copy legibility, fading off before Chris */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.05) 62%, rgba(0,0,0,0) 72%)",
          }}
        />
      </div>

      {/* Content block */}
      <div className="relative lg:min-h-[760px] xl:min-h-[820px] lg:flex lg:items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:pt-40 lg:pb-24 xl:pt-48">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-4">
              Meet the founder
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground lg:text-white mb-5 leading-[1.05] text-balance">
              Chris Prokopiou. Founder. Still the one who answers the phone.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground lg:text-white/85 leading-relaxed mb-8 text-pretty">
              I started Boutique Coffee at Work in 2008 with one job: make great coffee easy for Melbourne workplaces. Seventeen years later, I'm still doing that same job, and still picking up when you call.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-wider font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Book a 10-minute consult with Chris
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0411876625"
                className="inline-flex items-center gap-2 text-foreground/80 lg:text-white/85 hover:text-copper lg:hover:text-copper transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Or call me direct: 0411 876 625
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
