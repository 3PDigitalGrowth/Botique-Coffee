import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContentFinalCta } from "@/components/content/content-final-cta"
import { ArticlesList } from "@/components/content/articles-list"
import { ARTICLES, ARTICLE_CATEGORIES } from "@/lib/content"

export const metadata: Metadata = {
  title: "Articles | Boutique Coffee at Work",
  description:
    "Shorter reads on specific workplace coffee questions. Four new articles per month, written by Chris, founder of Boutique Coffee at Work.",
  alternates: {
    canonical: "https://boutiquecoffee.com.au/articles",
  },
  openGraph: {
    title: "Articles | Boutique Coffee at Work",
    description:
      "Shorter reads on specific workplace coffee questions. Written by Chris, founder of Boutique Coffee at Work.",
    url: "https://boutiquecoffee.com.au/articles",
    type: "website",
  },
}

export default function ArticlesIndexPage() {
  return (
    <main className="bg-background">
      <section className="pt-28 md:pt-32 pb-14 md:pb-16 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-5">
            Boutique Coffee at Work
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 text-balance leading-tight">
            Articles
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Shorter reads on specific workplace coffee questions. Four new articles per month, written by Chris.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <ArticlesList articles={ARTICLES} categories={ARTICLE_CATEGORIES} />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-copper/40 p-6 md:p-8 transition-colors"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-2">
                Also worth reading
              </p>
              <h2 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-1.5">
                The Boutique Coffee blog
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Fresh writing on workplace coffee, trends, and the things we&apos;re hearing from Melbourne offices.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper whitespace-nowrap">
              Visit the blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      <ContentFinalCta />
    </main>
  )
}
