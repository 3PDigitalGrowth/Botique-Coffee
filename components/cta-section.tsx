"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-[oklch(0.97_0.02_120)] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
          Ready to upgrade your workplace coffee?
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          No pushy sales. Just a short call with Chris to understand your team and recommend the right setup.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[oklch(0.7_0.15_45)] hover:bg-[oklch(0.65_0.15_45)] text-white border-none shadow-2xl px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Book a 10-minute consult
            </Button>
          </Link>
          <Link
            href="/coffee"
            className="text-[oklch(0.7_0.15_45)] hover:text-[oklch(0.65_0.15_45)] transition-colors text-base uppercase tracking-wide font-medium"
          >
            Explore Coffee & Partners
          </Link>
        </div>

        <p className="text-sm text-muted-foreground pt-2">
          No commitment required. Just a conversation about great coffee and a better daily ritual.
        </p>
      </div>
    </section>
  )
}
