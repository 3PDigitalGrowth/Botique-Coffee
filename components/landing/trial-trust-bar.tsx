"use client"

import { Award, MapPin, Star, Users } from "lucide-react"

const stats = [
  { icon: MapPin, label: "Proudly Victorian" },
  { icon: Users, label: "100+ local teams served" },
  { icon: Award, label: "Founder-led by Chris" },
  { icon: Star, label: "4.9★ avg. client rating" },
]

export function TrialTrustBar() {
  return (
    <section className="bg-muted/30 border-y border-muted/40 py-5 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="flex items-center justify-center gap-2 text-center">
                <Icon className="w-4 h-4 text-copper flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-foreground/80 whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
