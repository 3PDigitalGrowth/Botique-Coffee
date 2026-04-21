import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Clock } from "lucide-react"
import { ContentFinalCta } from "@/components/content/content-final-cta"
import { GUIDES, ARTICLES } from "@/lib/content"

export const metadata: Metadata = {
  title: "Guides | Boutique Coffee at Work",
  description:
    "Plain-English guides for Melbourne business owners and office managers thinking about a workplace coffee machine. Written by Chris, updated as things change.",
  alternates: {
    canonical: "https://boutiquecoffee.com.au/guides",
  },
  openGraph: {
    title: "Guides | Boutique Coffee at Work",
    description:
      "Straight answers to the questions we get asked every week about workplace coffee machines. Written by Chris, founder of Boutique Coffee.",
    url: "https://boutiquecoffee.com.au/guides",
    type: "website",
  },
}

export default function GuidesIndexPage() {
  const featuredArticles = ARTICLES.slice(0, 3)

  return (
    <main className="bg-background">
      {/* Section 1 - Hero */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-5">
            For Melbourne business owners and office managers
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
            Plain-English guides for anyone thinking about a workplace coffee machine
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
            Straight answers to the questions we get asked every week. Rent vs buy. How to size a machine. What a rental actually includes. Written by Chris, updated as things change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Book a 10-minute consult with Chris
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0411876625"
              className="inline-flex items-center gap-2 px-2 py-3 text-foreground/80 hover:text-copper transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              Or call direct: 0411 876 625
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 - Guides grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
              The guides
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Start with whichever question you&apos;re trying to answer. Each guide links to the others where it&apos;s useful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col h-full rounded-2xl bg-background border border-border overflow-hidden hover:border-copper/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={guide.thumbnail}
                    alt={guide.thumbnailAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="uppercase tracking-widest text-copper font-semibold">
                      {guide.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" aria-hidden />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 text-balance leading-snug group-hover:text-copper transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty mb-5 flex-1">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                    Read the guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Articles teaser */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-16 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 text-balance leading-tight">
                Fresh articles, every week
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Shorter reads on specific questions. Updated with four new articles every month.
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-copper hover:text-copper-dark transition-colors whitespace-nowrap"
            >
              See all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {featuredArticles.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col h-full p-6 rounded-2xl bg-background border border-border hover:border-copper/40 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-[10px] uppercase tracking-widest text-copper font-semibold mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-3 text-balance leading-snug group-hover:text-copper transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-5 flex-1">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                    Read
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 md:p-10 rounded-2xl bg-background border border-border text-center">
              <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-xl mx-auto">
                New articles coming soon. In the meantime, start with the guides above, or{" "}
                <Link href="/contact" className="text-copper font-medium hover:underline">
                  book a consult with Chris
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 4 - Final CTA */}
      <ContentFinalCta />
    </main>
  )
}
