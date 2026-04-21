import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

type ContentFinalCtaProps = {
  heading?: string
  subheading?: string
  primaryLabel?: string
  primaryHref?: string
}

export function ContentFinalCta({
  heading = "Reading time is fine. Talking to Chris is faster.",
  subheading = "Every guide on this site links back to the same thing: a 10-minute phone call. That's where you'll get an answer specific to your team, your space, and your budget. No pressure, no follow-up sales cycle.",
  primaryLabel = "Book a 10-minute consult",
  primaryHref = "/contact",
}: ContentFinalCtaProps) {
  return (
    <section className="bg-foreground text-background py-20 md:py-28 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 text-balance leading-tight">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-background/80 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:0411876625"
            className="inline-flex items-center gap-2 px-2 py-3 text-background/90 hover:text-copper transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Or call direct: 0411 876 625
          </a>
        </div>
      </div>
    </section>
  )
}
