"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import type { ArticleMeta } from "@/lib/content"

type ArticlesListProps = {
  articles: ArticleMeta[]
  categories: string[]
}

export function ArticlesList({ articles, categories }: ArticlesListProps) {
  const [active, setActive] = useState<string>("All")

  const filtered = useMemo(() => {
    if (active === "All") return articles
    return articles.filter((a) => a.category === active)
  }, [articles, active])

  const allCategories = ["All", ...categories]

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
        {allCategories.map((category) => {
          const isActive = active === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-copper text-white shadow-sm"
                  : "bg-muted text-foreground/70 hover:bg-copper/10 hover:text-copper"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="p-8 md:p-10 rounded-2xl bg-muted/40 border border-border text-center">
          <p className="text-base md:text-lg text-foreground/85">
            No articles in this category yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col h-full p-6 md:p-7 rounded-2xl bg-background border border-border hover:border-copper/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="uppercase tracking-widest text-copper font-semibold">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" aria-hidden />
                  {article.readTime}
                </span>
              </div>
              <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 text-balance leading-snug group-hover:text-copper transition-colors">
                {article.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty mb-5 flex-1">
                {article.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                Read the article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
