"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Phone } from "lucide-react"

export function TrialStickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-muted/50 shadow-2xl px-4 py-3">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            href="tel:0411876625"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-muted text-foreground/80 hover:text-copper hover:border-copper transition-colors flex-shrink-0"
            aria-label="Call Chris"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="#claim-trial"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-dark text-white h-11 rounded-full text-sm uppercase tracking-wider font-medium shadow-md transition-all"
          >
            Claim 7-day free trial
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
