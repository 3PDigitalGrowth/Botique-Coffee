import { CTA_CONFIG } from "@/lib/cta-config"
import { InlineForm } from "./inline-form"

export function BottomCtaBand({ pagePath }: { pagePath?: string }) {
  const b = CTA_CONFIG.bottomBand
  return (
    <section className="mt-20 md:mt-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          {b.eyebrow ? (
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
              {b.eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background mb-5 leading-tight text-balance">
            {b.headline}
          </h2>
          {b.subtext ? (
            <p className="text-base md:text-lg text-background/75 leading-relaxed text-pretty max-w-xl">
              {b.subtext}
            </p>
          ) : null}
        </div>
        <div className="text-foreground">
          <InlineForm
            config={{
              kind: "inline-form",
              eyebrow: "Free 2-week trial",
              headline: "Tell us about your team",
              subtext: "Chris will be in touch within one business day.",
              endpoint: b.endpoint,
              source: b.source,
              buttonText: b.buttonText,
              successMessage: b.successMessage,
            }}
            pagePath={pagePath}
          />
        </div>
      </div>
    </section>
  )
}
