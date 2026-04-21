"use client"

const stats = [
  { value: "2008", label: "Founded in Melbourne" },
  { value: "17 years", label: "Doing this, just this" },
  { value: "200+", label: "Active workplace clients" },
  { value: "1 phone", label: "Mine. You can call it." },
]

export default function FounderPhilosophy() {
  return (
    <section className="bg-muted/30 border-y border-muted/40 py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-copper leading-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-foreground/80 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm md:text-base text-muted-foreground">
          No call centres. No account managers. No &ldquo;someone will get back to you.&rdquo;
        </p>
      </div>
    </section>
  )
}
