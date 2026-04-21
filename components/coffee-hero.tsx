"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CoffeeHero() {
  return (
    <section className="relative w-full bg-background pt-24 md:pt-28 pb-12 md:pb-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-4">
              The coffee
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-[1.05] text-balance">
              Fresh beans, delivered. Matched to your team. Topped up on every visit.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              Every rental includes a regular supply of locally roasted Victorian coffee, delivered to your door. No separate bean contracts. No minimum orders. No &ldquo;we ran out on Tuesday.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-wider font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Schedule a 10-minute consult
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0411876625"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-copper transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Or call Chris direct: 0411 876 625
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/premium-coffee-beans.jpg"
                alt="Freshly roasted coffee beans"
                fill
                priority
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
