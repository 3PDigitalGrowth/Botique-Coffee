import Link from "next/link"
import { ArrowRight } from "lucide-react"

type InlineConsultCtaProps = {
  heading?: string
  body?: string
  label?: string
  href?: string
}

export function InlineConsultCta({
  heading = "Want a straight answer for your specific situation?",
  body = "Ten minutes on the phone with Chris is faster than reading two more guides. No pressure, no follow-up sales cycle.",
  label = "Book a 10-minute consult",
  href = "/contact",
}: InlineConsultCtaProps) {
  return (
    <aside className="my-10 md:my-12 p-6 md:p-8 rounded-2xl bg-copper/5 border border-copper/20">
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 text-balance leading-tight">
        {heading}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 text-pretty">
        {body}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-copper hover:bg-copper-dark text-white text-xs md:text-sm uppercase tracking-wider font-medium rounded-full shadow-md hover:scale-[1.02] transition-all duration-200"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </aside>
  )
}
