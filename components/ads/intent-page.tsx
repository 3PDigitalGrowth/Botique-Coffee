import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AdsLander } from "@/components/ads/ads-lander"
import { getIntent } from "@/lib/ads-intents"
import { ALL_SUBURBS, resolveSuburb, suburbFromGeoId } from "@/lib/ads-suburbs"

/**
 * Shared plumbing for the four intent landers. Each app route file is a thin
 * wrapper that names its intent slug and delegates here.
 */

export function suburbStaticParams() {
  return ALL_SUBURBS.map((s) => ({ suburb: s.slug }))
}

export function intentMetadata(intentSlug: string, suburbRaw?: string, loc?: string): Metadata {
  const intent = getIntent(intentSlug)
  if (!intent) return {}
  const s = resolveSuburb(suburbRaw || suburbFromGeoId(loc))
  return {
    title: intent.metaTitle(s.name),
    description: intent.metaDescription(s.name),
    // Paid landing pages stay out of the index; the SEO site carries organic.
    robots: { index: false, follow: false },
    alternates: { canonical: `https://boutiquecoffee.com.au/${intent.slug}/${s.slug}` },
  }
}

export function IntentLander({
  intentSlug,
  suburbRaw,
  loc,
}: {
  intentSlug: string
  suburbRaw?: string
  loc?: string
}) {
  const intent = getIntent(intentSlug)
  if (!intent) notFound()
  return <AdsLander intent={intent} suburb={resolveSuburb(suburbRaw || suburbFromGeoId(loc))} />
}
