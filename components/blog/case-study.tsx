import type { ReactNode } from "react"

export function CaseStudy({
  industry,
  metric,
  metricLabel,
  quote,
  author,
  children,
}: {
  industry?: string
  metric?: string
  metricLabel?: string
  quote?: string
  author?: string
  children?: ReactNode
}) {
  return (
    <figure className="my-10 rounded-2xl border border-border bg-card overflow-hidden">
      <div className="grid md:grid-cols-[1fr_220px]">
        <div className="p-6 md:p-7">
          {industry ? (
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
              Case study · {industry}
            </p>
          ) : null}
          {children ? (
            <div className="text-foreground/90 leading-relaxed mb-5 [&_p]:m-0 [&_p+p]:mt-3">
              {children}
            </div>
          ) : null}
          {quote ? (
            <blockquote className="font-serif italic text-lg text-foreground/85 border-l-2 border-copper/60 pl-4">
              “{quote}”
              {author ? (
                <footer className="mt-2 text-sm not-italic font-medium text-muted-foreground">
                  — {author}
                </footer>
              ) : null}
            </blockquote>
          ) : null}
        </div>
        {metric ? (
          <div className="flex flex-col items-center justify-center p-6 md:p-7 bg-copper/[0.06] border-t md:border-t-0 md:border-l border-border text-center">
            <div className="font-serif text-4xl md:text-5xl text-copper leading-none mb-2">
              {metric}
            </div>
            {metricLabel ? (
              <div className="text-xs md:text-sm text-muted-foreground leading-snug max-w-[180px]">
                {metricLabel}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </figure>
  )
}
