import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null
  return (
    <section className="mt-16 md:mt-20 border-t border-border pt-12 md:pt-16">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-tight">
        Keep reading
      </h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {posts.map((p) => {
          const fm = p.frontmatter
          return (
            <Link
              key={fm.slug}
              href={`/blog/${fm.slug}`}
              className="group flex flex-col h-full p-6 rounded-2xl bg-background border border-border hover:border-copper/40 hover:shadow-md transition-all duration-200"
            >
              {fm.primaryKeyword ? (
                <span className="text-[10px] uppercase tracking-widest text-copper font-semibold mb-3">
                  {fm.primaryKeyword}
                </span>
              ) : null}
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-3 text-balance leading-snug group-hover:text-copper transition-colors">
                {fm.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-5 flex-1">
                {p.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" aria-hidden />
                  {fm.readTime}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-copper">
                  Read
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
