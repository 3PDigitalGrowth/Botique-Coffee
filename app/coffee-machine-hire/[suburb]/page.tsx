import type { Metadata } from "next"
import { IntentLander, intentMetadata, suburbStaticParams } from "@/components/ads/intent-page"

const INTENT = "coffee-machine-hire"

type Props = {
  params: Promise<{ suburb: string }>
}

// Known suburbs pre-render at build; anything else renders on demand so a new
// suburb in the ads account never needs a deploy.
export const dynamicParams = true

export function generateStaticParams() {
  return suburbStaticParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params
  return intentMetadata(INTENT, suburb)
}

export default async function SuburbLandingPage({ params }: Props) {
  const { suburb } = await params
  return <IntentLander intentSlug={INTENT} suburbRaw={suburb} />
}
