import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CTA_CONFIG, type CtaSlot } from "@/lib/cta-config"
import { InlineForm } from "./inline-form"

type Props = {
  slot: CtaSlot
  /** Optional page path forwarded to inline-form submissions. */
  pagePath?: string
}

export function CTA({ slot, pagePath }: Props) {
  if (slot === "primary") {
    const c = CTA_CONFIG.primary
    return (
      <aside className="my-10 md:my-12 rounded-2xl border border-border bg-gradient-to-br from-copper/[0.04] to-transparent p-6 md:p-8">
        {c.eyebrow ? (
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            {c.eyebrow}
          </p>
        ) : null}
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 leading-tight text-balance">
          {c.headline}
        </h3>
        {c.subtext ? (
          <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-2xl text-pretty">
            {c.subtext}
          </p>
        ) : null}
        <Link
          href={c.href}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-md hover:scale-[1.02] transition-all duration-200"
        >
          {c.buttonText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </aside>
    )
  }

  if (slot === "secondary") {
    const c = CTA_CONFIG.secondary
    return (
      <aside className="my-10 md:my-12 border-l-4 border-copper/60 pl-5 md:pl-6 py-2">
        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 leading-snug">
          {c.headline}
        </h3>
        {c.subtext ? (
          <p className="text-base text-muted-foreground leading-relaxed mb-3 text-pretty">
            {c.subtext}
          </p>
        ) : null}
        <Link
          href={c.href}
          className="inline-flex items-center gap-1.5 text-base font-medium text-copper hover:text-copper-dark transition-colors"
        >
          {c.linkText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </aside>
    )
  }

  // inline-form
  const c = CTA_CONFIG["inline-form"]
  return (
    <aside className="my-10 md:my-12 -mx-2 md:mx-0">
      <InlineForm config={c} pagePath={pagePath} />
    </aside>
  )
}
