const receipts = [
  { value: "200+", label: "Melbourne workplaces renting from us" },
  { value: "5+ yrs", label: "Average client relationship" },
  { value: "24 hrs", label: "Typical response on a service call" },
  { value: "1", label: "Phone number. Chris answers it." },
]

export function AdsTrustBar() {
  return (
    <section className="bg-background border-y border-border/60 py-6 md:py-7 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {receipts.map((r) => (
          <div key={r.label} className="flex items-baseline gap-3 md:block">
            <p className="font-serif text-3xl md:text-4xl text-copper leading-none md:mb-2">{r.value}</p>
            <p className="text-xs md:text-sm text-foreground/75 leading-snug">{r.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
