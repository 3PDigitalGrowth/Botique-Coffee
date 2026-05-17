import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/blog"
import { RelatedPosts } from "./related-posts"
import { AuthorBio } from "./author-bio"
import { BottomCtaBand } from "./bottom-cta-band"
import { StickyMobileCTA } from "./sticky-mobile-cta"

type Props = {
  post: BlogPost
  related: BlogPost[]
  children: React.ReactNode
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

export function BlogTemplate({ post, related, children }: Props) {
  const fm = post.frontmatter
  const breadcrumb = fm.breadcrumb?.length ? fm.breadcrumb : ["Blog", fm.title]
  const pagePath = `/blog/${fm.slug}`

  return (
    <main className="bg-background pb-16 md:pb-20">
      {/* 1. Header */}
      <header className="pt-28 md:pt-32 pb-10 md:pb-14 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-muted-foreground mb-6"
          >
            <Link href="/" className="hover:text-copper transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, i) => {
              const isLast = i === breadcrumb.length - 1
              const href =
                i === 0 ? "/blog" : undefined
              return (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden />
                  {href && !isLast ? (
                    <Link href={href} className="hover:text-copper transition-colors">
                      {crumb}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-foreground" : ""}>{crumb}</span>
                  )}
                </span>
              )
            })}
          </nav>

          {fm.primaryKeyword ? (
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
              {fm.primaryKeyword}
            </p>
          ) : null}

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1] text-balance">
            {fm.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">{fm.author}</span>
            {fm.date ? (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden />
                {formatDate(fm.date)}
              </span>
            ) : null}
            {fm.readTime ? (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden />
                {fm.readTime}
              </span>
            ) : null}
          </div>
        </div>
      </header>

      {fm.heroImage ? (
        <div className="px-6 md:px-12 lg:px-16 -mt-2 md:-mt-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted -mt-6 md:-mt-10 shadow-lg">
              <Image
                src={fm.heroImage}
                alt={fm.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}

      {/* 2. Body */}
      <article className="px-6 md:px-12 lg:px-16 pt-12 md:pt-16">
        <div className="max-w-[720px] mx-auto content-prose">{children}</div>

        {/* 3. FAQ */}
        {fm.faqSchema?.length ? (
          <div className="max-w-[720px] mx-auto mt-16 md:mt-20 border-t border-border pt-12 md:pt-14">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {fm.faqSchema.map((qa, i) => (
                <div key={i}>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug">
                    {qa.question}
                  </h3>
                  <p className="text-foreground/85 leading-relaxed text-pretty">
                    {qa.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* 4. References */}
        {fm.references?.length ? (
          <div className="max-w-[720px] mx-auto mt-16 md:mt-20 border-t border-border pt-10 md:pt-12">
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-5 leading-tight">
              References
            </h2>
            <ol className="space-y-3 text-sm md:text-base text-muted-foreground list-decimal pl-5">
              {fm.references.map((ref, i) => (
                <li key={i} className="leading-relaxed">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper hover:underline"
                  >
                    {ref.title}
                  </a>
                  {ref.note ? (
                    <span className="text-muted-foreground"> — {ref.note}</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {/* 5. Author bio */}
        <div className="max-w-[720px] mx-auto">
          <AuthorBio name={fm.author} />
        </div>

        {/* 6. Related posts */}
        <div className="max-w-4xl mx-auto">
          <RelatedPosts posts={related} />
        </div>
      </article>

      {/* 7. Bottom CTA band */}
      <BottomCtaBand pagePath={pagePath} />

      {/* Sticky mobile CTA */}
      <StickyMobileCTA />
    </main>
  )
}
