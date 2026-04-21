import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Breadcrumb } from "./breadcrumb"
import { RelatedItems, type RelatedItem } from "./related-items"
import { ContentFinalCta } from "./content-final-cta"

type ArticlePageProps = {
  slug: string
  title: string
  description: string
  category: string
  publishedDate?: string
  readTime?: string
  related?: RelatedItem[]
  children: ReactNode
}

const SITE_URL = "https://boutiquecoffee.com.au"
const AUTHOR_NAME = "Chris Prokopiou"

export function ArticlePage({
  slug,
  title,
  description,
  category,
  publishedDate,
  readTime,
  related = [],
  children,
}: ArticlePageProps) {
  const url = `${SITE_URL}/articles/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    inLanguage: "en-AU",
    articleSection: category,
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
    ...(publishedDate ? { datePublished: publishedDate } : {}),
  }

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="pt-24 md:pt-28 pb-10 md:pb-14 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Articles", href: "/articles" },
              { label: title },
            ]}
            className="mb-6"
          />
          <span className="inline-block text-[10px] uppercase tracking-widest text-copper font-semibold bg-copper/10 px-2.5 py-1 rounded-full mb-4">
            {category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-5 text-balance leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">By {AUTHOR_NAME}</span>
            {publishedDate ? (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden />
                {publishedDate}
              </span>
            ) : null}
            {readTime ? (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden />
                {readTime}
              </span>
            ) : null}
          </div>
        </div>
      </header>

      <div className="px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <article className="max-w-3xl mx-auto">
          <div className="content-prose">
            {children}
          </div>

          <div className="mt-14 md:mt-16 pt-8 border-t border-border">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-copper hover:text-copper-dark font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>
          </div>

          {related.length > 0 ? (
            <div className="mt-14 md:mt-16">
              <RelatedItems heading="Related articles" items={related} />
            </div>
          ) : null}
        </article>
      </div>

      <ContentFinalCta />
    </main>
  )
}
