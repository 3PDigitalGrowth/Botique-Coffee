import { Check } from "lucide-react"

export function KeyTakeaways({ items = [] }: { items?: string[] }) {
  if (!items.length) return null
  return (
    <aside className="my-8 rounded-2xl border border-copper/25 bg-copper/[0.04] p-6 md:p-7">
      <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
        Key takeaways
      </p>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-foreground/90 leading-relaxed">
            <Check className="w-4 h-4 text-copper mt-1.5 flex-shrink-0" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
