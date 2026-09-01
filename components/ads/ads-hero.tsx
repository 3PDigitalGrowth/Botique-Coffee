import { Check, MapPin, Phone } from "lucide-react"
import type { AdsIntent } from "@/lib/ads-intents"
import { AdsLeadForm } from "./ads-lead-form"

type Props = {
  intent: AdsIntent
  suburb: string
  isMetroDefault: boolean
}

export function AdsHero({ intent, suburb, isMetroDefault }: Props) {
  const place = isMetroDefault ? "Melbourne" : suburb

  return (
    <section
      id="claim-trial"
      className="relative overflow-hidden bg-[oklch(0.975_0.015_65)] pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 lg:px-16"
    >
      {/* Faint copper ring, the only decoration in the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 w-[560px] h-[560px] rounded-full border-[28px] border-copper/10"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper/10 border border-copper/25 text-copper text-xs uppercase tracking-[0.18em] font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5" />
            {intent.eyebrow(place)}
          </p>

          <h1 className="font-serif text-[2.4rem] leading-[1.05] md:text-5xl lg:text-[3.6rem] text-foreground text-balance mb-5">
            {intent.h1(place)}
            <span className="block text-copper mt-2">{intent.h1Accent}</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl text-pretty mb-7">
            {intent.lead(place)}
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-xl mb-8 text-sm md:text-[15px] text-foreground/85">
            {intent.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="w-4.5 h-4.5 text-copper flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="tel:0411876625"
              className="inline-flex items-center gap-2.5 text-foreground hover:text-copper transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-copper/15 flex items-center justify-center">
                <Phone className="w-4 h-4 text-copper" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                  Speak to Chris, the owner
                </span>
                <span className="block text-lg font-semibold">0411 876 625</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground">Mon to Fri, 7am to 6pm. He answers.</p>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="relative bg-background rounded-2xl shadow-2xl border border-border/60 p-6 md:p-7">
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.18em] text-copper font-semibold mb-1.5">
                {intent.formEyebrow}
              </p>
              <h2 className="font-serif text-2xl md:text-[1.7rem] text-foreground leading-tight">
                {intent.formTitle(place)}
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5">
                Takes about a minute. Most installs happen within 5 to 7 business days.
              </p>
            </div>
            <AdsLeadForm suburb={suburb} intentSlug={intent.slug} ctaLabel={intent.formCta} formId="hero-lead-form" />
          </div>
        </div>
      </div>
    </section>
  )
}
