import { Phone } from "lucide-react"
import type { AdsIntent } from "@/lib/ads-intents"
import { AdsLeadForm } from "./ads-lead-form"

type Props = { intent: AdsIntent; suburb: string }

export function AdsFinalCta({ intent, suburb }: Props) {
  return (
    <section id="enquire" className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[oklch(0.975_0.015_65)] border-t border-border/60">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            {intent.formEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-5">
            {intent.finalTitle(suburb)}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
            {intent.finalBody}
          </p>
          <a
            href="tel:0411876625"
            className="inline-flex items-center gap-3 px-6 h-14 rounded-full border-2 border-foreground/15 hover:border-copper text-foreground hover:text-copper transition-colors"
          >
            <Phone className="w-5 h-5 text-copper" />
            <span className="text-lg font-semibold">0411 876 625</span>
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-background rounded-2xl shadow-xl border border-border/60 p-6 md:p-8">
            <AdsLeadForm suburb={suburb} intentSlug={intent.slug} ctaLabel={intent.formCta} compact formId="footer-lead-form" />
          </div>
        </div>
      </div>
    </section>
  )
}
