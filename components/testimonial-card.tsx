import { Quote } from "lucide-react"

type TestimonialCardProps = {
  quote: string
  name: string
  company?: string
  variant?: "default" | "feature"
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  company,
  variant = "default",
  className = "",
}: TestimonialCardProps) {
  const isFeature = variant === "feature"

  return (
    <figure
      className={`relative max-w-3xl rounded-2xl bg-muted/40 border-l-4 border-copper ${
        isFeature ? "p-7 md:p-9" : "p-6 md:p-8"
      } shadow-sm ${className}`}
    >
      <Quote
        className={`absolute text-copper/25 ${isFeature ? "w-9 h-9 top-5 right-5" : "w-7 h-7 top-4 right-4"}`}
        strokeWidth={1.5}
        aria-hidden
      />
      <blockquote
        className={`font-serif italic text-foreground/90 leading-relaxed text-pretty ${
          isFeature ? "text-xl md:text-2xl" : "text-lg md:text-xl"
        }`}
      >
        <span aria-hidden>&ldquo;</span>
        {quote}
        <span aria-hidden>&rdquo;</span>
      </blockquote>
      <figcaption className="mt-5 text-sm md:text-[15px]">
        <span className="font-semibold text-foreground not-italic">{name}</span>
        {company ? (
          <span className="text-muted-foreground not-italic">, {company}</span>
        ) : null}
      </figcaption>
    </figure>
  )
}
