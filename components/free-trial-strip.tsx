import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function FreeTrialStrip() {
  return (
    <section className="w-full bg-copper text-white py-3 md:py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-6 text-center md:text-left">
        <div className="flex items-center gap-2.5 md:gap-3">
          <Sparkles className="hidden sm:block w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
          <p className="text-sm md:text-base leading-snug">
            <span className="font-semibold tracking-wide">30 days. On us. Zero risk.</span>{" "}
            <span className="text-white/90">
              Try a commercial coffee machine at your workplace, free for a month. No card required.
            </span>
          </p>
        </div>
        <Link
          href="/free-trial"
          className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 bg-background text-foreground hover:bg-background/90 hover:scale-105 rounded-full shadow-md text-xs md:text-sm uppercase tracking-wider font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
        >
          Claim my free trial
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
