import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { GuidePage } from "@/components/content/guide-page"
import { InlineConsultCta } from "@/components/content/inline-consult-cta"
import { GUIDES, getGuide, getRelatedGuides } from "@/lib/content"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) {
    return {
      title: "Guide not found | Boutique Coffee at Work",
    }
  }

  const url = `https://boutiquecoffee.com.au/guides/${guide.slug}`

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: "article",
    },
  }
}

export default async function GuideStubPage({ params }: Props) {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) {
    notFound()
  }

  const related = getRelatedGuides(guide.slug, 3)

  return (
    <GuidePage
      slug={guide.slug}
      title={guide.title}
      description={guide.description}
      readTime={guide.readTime}
      related={related}
    >
      <p>
        <strong>Full guide launching {guide.launchMonth}.</strong> We&apos;re in the middle of writing this one properly, and we&apos;d rather ship something useful than something rushed.
      </p>
      <p>
        In the meantime, the fastest path to an answer for your team is a ten-minute phone call with Chris. He&apos;s been doing this in Melbourne since 2008 and can almost always answer your question on the spot.
      </p>

      <InlineConsultCta />

      <h2>Prefer to keep reading?</h2>
      <p>
        Browse the{" "}
        <Link href="/articles">articles</Link>{" "}
        for shorter, question-specific reads, or jump to another guide below. Each one is written to answer a single question well, in plain English, without sales jargon.
      </p>

      <h3>What this guide will cover when it ships</h3>
      <p>
        {guide.description}
      </p>
    </GuidePage>
  )
}
