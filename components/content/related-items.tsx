import Link from "next/link"
import { ArrowRight } from "lucide-react"

export type RelatedItem = {
  title: string
  description: string
  href: string
  tag?: string
  readTime?: string
}

type RelatedItemsProps = {
  heading: string
  items: RelatedItem[]
  className?: string
}

export function RelatedItems({ heading, items, className = "" }: RelatedItemsProps) {
  if (!items.length) return null

  return (
    <section className={`border-t border-border pt-12 md:pt-16 ${className}`}>
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-balance leading-tight">
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col h-full p-6 rounded-2xl bg-muted/40 border border-border hover:border-copper/40 hover:shadow-md transition-all duration-200"
          >
            {item.tag ? (
              <span className="text-[10px] uppercase tracking-widest text-copper font-semibold mb-3">
                {item.tag}
              </span>
            ) : null}
            <h3 className="font-serif text-lg md:text-xl text-foreground mb-3 text-balance leading-snug group-hover:text-copper transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-pretty flex-1">
              {item.description}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              {item.readTime ? <span>{item.readTime}</span> : <span />}
              <span className="inline-flex items-center gap-1 text-copper font-medium">
                Read
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
