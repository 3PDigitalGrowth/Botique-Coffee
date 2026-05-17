type Stat = { value: string; label: string }

export function Stats({ items = [] }: { items?: Stat[] }) {
  if (!items.length) return null
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6 md:p-7">
      {items.map((s, i) => (
        <div key={i} className="text-center">
          <div className="font-serif text-3xl md:text-4xl text-copper leading-none mb-2">
            {s.value}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground leading-snug">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
