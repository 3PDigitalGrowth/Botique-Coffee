import Image from "next/image"
import type { AdsIntent } from "@/lib/ads-intents"

type Props = {
  intent: AdsIntent
  suburb: string
  regionLabel: string | null
}

/**
 * The install docket. A service-ticket styled card over the real van photo:
 * the one element on the page that could only belong to a mobile trade
 * business that turns up in person.
 */
export function AdsDocket({ intent, suburb, regionLabel }: Props) {
  const rows = [
    ["Job", intent.docketJob(suburb)],
    ["Area", regionLabel || "Melbourne metro"],
    ["Install window", "5 to 7 business days from booking"],
    ["On site", "30 to 45 min, plumbing and power checked"],
    ["Trial", intent.docketTrial],
    ["Then", intent.docketThen],
    ["Technician", "Chris Prokopiou, owner"],
  ]

  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] md:min-h-[440px] lg:min-h-[600px]">
          <Image
            src="/images/Chris_Solo_Van.jpg"
            alt="Chris Prokopiou beside the Boutique Coffee at Work van"
            fill
            className="object-cover object-[60%_center]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-foreground" />
        </div>

        <div className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-center">
          <div className="w-full max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
              The Melbourne coffee machine specialists
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-balance mb-6">
              That van, and the bloke standing next to it, will be at your {suburb} office within the
              week.
            </h2>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-8 text-pretty">
              No subcontractors, no call centre. Chris has been installing and servicing workplace
              coffee machines across Melbourne for over a decade, and he still does the installs
              himself.
            </p>

            <div className="rounded-xl border border-dashed border-background/30 bg-background/[0.04] p-5 md:p-6 font-mono text-[13px] md:text-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-background/15">
                <span className="uppercase tracking-[0.2em] text-copper">Install docket</span>
                <span className="text-background/50">boutiquecoffee.com.au</span>
              </div>
              <dl className="space-y-2">
                {rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-3">
                    <dt className="text-background/50 uppercase tracking-wider text-[11px] md:text-xs pt-0.5">
                      {k}
                    </dt>
                    <dd className="text-background/90">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
