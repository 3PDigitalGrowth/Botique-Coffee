"use client"

export function PhilosophySection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-background flex items-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
          Quality Over Everything
        </h2>

        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            In a world of mass-produced coffee and impersonal service, we take a different approach. Every bean is
            sourced from sustainable farms. Every roast is crafted with precision. Every delivery is made with care.
          </p>

          <div className="relative py-6 my-8 border-l-4 border-[oklch(0.7_0.15_45)] pl-6">
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "We're not another corporate coffee supplier. We're your local partner."
            </p>
          </div>

          <p>
            We believe that the best coffee experiences come from genuine relationships. That's why we work closely with
            each business to understand their unique needs, preferences, and culture. Your coffee program should reflect
            who you are.
          </p>
        </div>
      </div>
    </section>
  )
}
