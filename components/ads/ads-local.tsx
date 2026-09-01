import Link from "next/link"
import { MapPin } from "lucide-react"
import type { AdsIntent } from "@/lib/ads-intents"
import { slugify } from "@/lib/ads-suburbs"

type Props = {
  intent: AdsIntent
  suburb: string
  regionLabel: string | null
  nearby: string[]
  known: boolean
}

export function AdsLocal({ intent, suburb, regionLabel, nearby, known }: Props) {
  const mapQuery = encodeURIComponent(`${suburb}, Victoria, Australia`)

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background border-t border-border/60">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            Local service area
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-5">
            {known ? `Already servicing offices around ${suburb}` : `Servicing ${suburb} and across Melbourne`}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
            {regionLabel
              ? `${suburb} sits in our ${regionLabel.toLowerCase()} run, which means a service call is usually same day or next day, not a technician booked for Thursday week.`
              : "We cover Melbourne metro, Geelong, the Mornington Peninsula and most of regional Victoria. If you are further out, call Chris and he will tell you straight whether he can get to you."}
          </p>

          {nearby.length > 0 ? (
            <>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Also installing in
              </p>
              <ul className="flex flex-wrap gap-2 mb-8">
                {nearby.map((n) => (
                  <li key={n}>
                    <Link
                      href={`/${intent.slug}/${slugify(n)}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border text-sm text-foreground/80 hover:border-copper hover:text-copper transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {n}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <a
            href="#claim-trial"
            className="inline-flex items-center justify-center h-12 px-7 bg-copper hover:bg-copper-dark text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition-colors"
          >
            {intent.localCta(suburb)}
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] lg:aspect-[5/4] bg-muted/30">
          <iframe
            title={`Map of ${suburb}, Victoria`}
            src={`https://www.google.com/maps?q=${mapQuery}&z=13&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
