import type { Metadata } from "next"
import { CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Booked. Chris will call you | Boutique Coffee",
  description: "Your free trial request is in. Chris will call within one business day.",
  robots: { index: false, follow: false },
}

type Props = {
  searchParams: Promise<{ name?: string; suburb?: string }>
}

/**
 * Conversion page for the Google Ads lander. Keep this URL stable: the
 * Google Ads conversion action fires on a page view of /coffee-machine-rental/thank-you.
 */
export default async function AdsThankYouPage({ searchParams }: Props) {
  const { name, suburb } = await searchParams
  const first = (name || "").trim().split(/\s+/)[0] || "there"
  const place = (suburb || "").trim().slice(0, 40)

  return (
    <main className="bg-[oklch(0.975_0.015_65)] min-h-[80vh] flex items-center pt-20">
      <section className="w-full py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-8">
            <CheckCircle2 className="w-8 h-8 text-copper" strokeWidth={1.75} />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-5">
            Trial request received
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance mb-6">
            Thanks, {first}. Chris will call you.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty mb-4">
            Expect a call within one business day to confirm the machine and an install date
            {place ? ` for your ${place} office` : ""}. A confirmation email is on its way too.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            Want it sorted sooner? Ring him now.
          </p>
          <a
            href="tel:0411876625"
            className="inline-flex items-center gap-2 px-8 h-13 py-3.5 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-semibold rounded-full shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Chris on 0411 876 625
          </a>
        </div>
      </section>
    </main>
  )
}
