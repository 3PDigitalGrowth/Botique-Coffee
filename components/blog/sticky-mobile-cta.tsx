import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CTA_CONFIG } from "@/lib/cta-config"

export function StickyMobileCTA() {
  const c = CTA_CONFIG.stickyMobile
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-2px_10px_rgba(0,0,0,0.04)]">
      <span className="text-sm font-medium text-foreground leading-snug">
        {c.label}
      </span>
      <Link
        href={c.href}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-copper hover:bg-copper-dark text-white text-xs uppercase tracking-widest font-medium rounded-full"
      >
        {c.buttonText}
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}
