import type { ReactNode } from "react"
import { Clock, CalendarCheck } from "lucide-react"
import { Breadcrumb } from "./breadcrumb"
import { TableOfContents, type TocSection } from "./table-of-contents"
import { RelatedItems, type RelatedItem } from "./related-items"
import { ContentFinalCta } from "./content-final-cta"

type GuidePageProps = {
  slug: string
  title: string
  description: string
  readTime: string
  lastUpdated?: string
  sections?: TocSection[]
  related?: RelatedItem[]
  children: ReactNode
}

const SITE_URL = "https://boutiquecoffee.com.au"
const AUTHOR_NAME = "Chris Prokopiou"

export function GuidePage({
  slug,
  title,
  description,
  readTime,
  lastUpdated,
  sections = [],
  related = [],
  children,
}: GuidePageProps) {
  const url = `${SITE_URL}/guides/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    articleSection: "Guide",
    headline: title,
    description,
    url,
    inLanguage: "en-AU",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: "Boutique Coffee at Work",
      url: SITE_URL,
    },
    ...(lastUpdated ? { dateModified: lastUpdated } : {}),
  }

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="pt-24 md:pt-28 pb-10 md:pb-14 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: title },
            ]}
            className="mb-6"
          />
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
            Guide
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 text-balance leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 text-pretty max-w-3xl">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="font-medium text-foreground">By {AUTHOR_NAME}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden />
              {readTime}
            </span>
            {lastUpdated ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4" aria-hidden />
                Updated {lastUpdated}
              </span>
            ) : null}
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
            <aside className="hidden lg:block">
              <TableOfContents sections={sections} />
            </aside>
            <article className="min-w-0">
              <div className="content-prose">
                {children}
              </div>

              {related.length > 0 ? (
                <div className="mt-16 md:mt-20">
                  <RelatedItems heading="Related guides" items={related} />
                </div>
              ) : null}
            </article>
          </div>
        </div>
      </div>

      <ContentFinalCta />
    </main>
  )
}
