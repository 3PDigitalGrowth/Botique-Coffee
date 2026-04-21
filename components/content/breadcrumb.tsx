import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs md:text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-copper transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground/80 font-medium" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground/60" aria-hidden />
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
