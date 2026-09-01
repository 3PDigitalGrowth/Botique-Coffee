import type { Metadata } from "next"
import { IntentLander, intentMetadata } from "@/components/ads/intent-page"

const INTENT = "free-coffee-machine-trial"

type Props = {
  searchParams: Promise<{ suburb?: string; loc?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { suburb, loc } = await searchParams
  return intentMetadata(INTENT, suburb, loc)
}

/**
 * Root lander for this ad group. Accepts ?suburb=richmond or
 * ?loc={loc_physical_ms} (Google geo ID). Falls back to Melbourne metro copy.
 */
export default async function RootLandingPage({ searchParams }: Props) {
  const { suburb, loc } = await searchParams
  return <IntentLander intentSlug={INTENT} suburbRaw={suburb} loc={loc} />
}
