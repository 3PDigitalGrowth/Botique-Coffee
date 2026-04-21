"use client"

import { useEffect, useState } from "react"

export type TocSection = {
  id: string
  title: string
}

type TableOfContentsProps = {
  sections: TocSection[]
  className?: string
}

export function TableOfContents({ sections, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          )
          setActiveId(topMost.target.id)
        }
      },
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!sections.length) return null

  return (
    <nav
      aria-label="Table of contents"
      className={`lg:sticky lg:top-28 ${className}`}
    >
      <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
        On this page
      </p>
      <ol className="space-y-2.5 text-sm">
        {sections.map((section, index) => {
          const isActive = activeId === section.id
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block border-l-2 pl-3 py-0.5 leading-snug transition-colors ${
                  isActive
                    ? "border-copper text-copper font-medium"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                <span className="text-xs tabular-nums mr-2 opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
