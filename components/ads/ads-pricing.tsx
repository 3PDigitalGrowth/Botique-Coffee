import { Check } from "lucide-react"
import type { AdsIntent } from "@/lib/ads-intents"

type Props = { intent: AdsIntent; suburb: string }

const tiers = [
  {
    name: "Small office",
    team: "Up to 15 people",
    price: "$35",
    cups: "Up to 40 cups a day",
    machine: "Compact super-automatic",
  },
  {
    name: "Mid-size office",
    team: "15 to 50 people",
    price: "$55",
    cups: "40 to 150 cups a day",
    machine: "Commercial super-automatic",
    popular: true,
  },
  {
    name: "Large office",
    team: "50+ people",
    price: "$85",
    cups: "150+ cups a day",
    machine: "Heavy-duty commercial, single or paired",
  },
]

const included = [
  "Commercial machine matched to your headcount (WMF, Jura, Eversys, Dr Coffee or Faemina)",
  "Delivery, plumbing or tank setup, and install by Chris",
  "Staff training on install day, with a refresher if you need one",
  "Freshly roasted Victorian beans delivered to your door",
  "Cups, sugar, stirrers and napkins topped up on every service call",
  "All servicing, parts and on-site repairs",
  "A loan machine if yours ever goes to the workshop",
]

export function AdsPricing({ intent, suburb }: Props) {
  return (
    <section id="pricing" className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            Straight pricing
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-4">
            {intent.pricingTitle(suburb)}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            {intent.pricingIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-6 md:p-7 flex flex-col ${
                t.popular
                  ? "bg-foreground text-background border-2 border-copper shadow-xl"
                  : "bg-background border border-border"
              }`}
            >
              {t.popular ? (
                <span className="absolute -top-3 left-6 bg-copper text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                  Most common
                </span>
              ) : null}
              <h3 className="font-serif text-2xl mb-1">{t.name}</h3>
              <p className={`text-sm mb-5 ${t.popular ? "text-background/70" : "text-muted-foreground"}`}>
                {t.team}
              </p>
              <p className="flex items-baseline gap-1.5 mb-5">
                <span className="text-xs uppercase tracking-widest text-copper font-semibold">from</span>
                <span className="font-serif text-4xl md:text-5xl font-semibold">{t.price}</span>
                <span className={`text-sm ${t.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  a week
                </span>
              </p>
              <ul className={`text-sm space-y-1.5 ${t.popular ? "text-background/80" : "text-foreground/80"}`}>
                <li>{t.cups}</li>
                <li>{t.machine}</li>
              </ul>
              <a
                href="#claim-trial"
                className={`mt-6 inline-flex items-center justify-center h-11 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors ${
                  t.popular
                    ? "bg-copper hover:bg-copper-dark text-white"
                    : "border border-foreground/20 hover:border-copper hover:text-copper"
                }`}
              >
                Try this tier free
              </a>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[oklch(0.975_0.015_65)] border border-border/60 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-4">
            Every tier includes
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-[15px] text-foreground/85">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="w-4.5 h-4.5 text-copper flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
