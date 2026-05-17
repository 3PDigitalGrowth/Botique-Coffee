import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

const SITE_URL = "https://boutiquecoffee.com.au"
const POSTS_PER_PAGE = 12

export const metadata: Metadata = {
  title: "Blog | Boutique Coffee at Work",
  description:
    "The Boutique Coffee blog. Practical, plain-English writing on workplace coffee for Melbourne business owners and office managers.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | Boutique Coffee at Work",
    description:
      "Practical writing on workplace coffee for Melbourne offices.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
}

type PageProps = {
  searchParams?: Promise<{ page?: string }>
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

export default async function BlogIndexPage({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {}
  const pageNum = Math.max(1, parseInt(params.page ?? "1", 10) || 1)
  const allPosts = getAllPosts()
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  const start = (pageNum - 1) * POSTS_PER_PAGE
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE)

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-14 md:pb-16 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-5">
            Boutique Coffee blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight text-balance">
            Workplace coffee, written plainly
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Practical writing for Melbourne business owners and office managers. New posts as we
            figure out what&apos;s worth saying.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 leading-tight">
                Nothing here just yet
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 text-pretty">
                The first posts are landing soon. In the meantime, the existing
                <Link href="/guides" className="text-copper font-medium hover:underline mx-1">guides</Link>
                and
                <Link href="/articles" className="text-copper font-medium hover:underline mx-1">articles</Link>
                cover most of the common questions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full transition-colors"
              >
                Talk to Chris
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map((p) => {
                  const fm = p.frontmatter
                  return (
                    <Link
                      key={fm.slug}
                      href={`/blog/${fm.slug}`}
                      className="group flex flex-col h-full rounded-2xl bg-background border border-border overflow-hidden hover:border-copper/40 hover:shadow-lg transition-all duration-200"
                    >
                      {fm.heroImage ? (
                        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                          <Image
                            src={fm.heroImage}
                            alt={fm.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-col flex-1 p-6">
                        <div className="flex items-center justify-between mb-3 text-xs">
                          {fm.primaryKeyword ? (
                            <span className="uppercase tracking-widest text-copper font-semibold">
                              {fm.primaryKeyword}
                            </span>
                          ) : <span />}
                          {fm.readTime ? (
                            <span className="inline-flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-3.5 h-3.5" aria-hidden />
                              {fm.readTime}
                            </span>
                          ) : null}
                        </div>
                        <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 text-balance leading-snug group-hover:text-copper transition-colors">
                          {fm.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-5 flex-1">
                          {p.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" aria-hidden />
                            {formatDate(fm.date)}
                          </span>
                          <span className="inline-flex items-center gap-1.5 font-medium text-copper">
                            Read
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {totalPages > 1 ? (
                <nav
                  aria-label="Pagination"
                  className="mt-12 md:mt-14 flex items-center justify-center gap-2"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                    const isActive = n === pageNum
                    const href = n === 1 ? "/blog" : `/blog?page=${n}`
                    return (
                      <Link
                        key={n}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`min-w-9 h-9 px-3 inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-copper text-white"
                            : "text-foreground/80 hover:bg-muted"
                        }`}
                      >
                        {n}
                      </Link>
                    )
                  })}
                </nav>
              ) : null}
            </>
          )}
        </div>
      </section>
    </main>
  )
}
