import Image from "next/image"
import type { AdsIntent } from "@/lib/ads-intents"

type Props = { intent: AdsIntent; suburb: string }

export function AdsSteps({ intent, suburb }: Props) {
  const steps = [
    {
      day: "Today",
      title: "Send the form or call Chris",
      body: `Tell us your headcount and where in ${suburb} the office is. Chris calls back the same or next business day, matches a machine to your kitchen and confirms a date.`,
      image: "/lifestyle/step-02-phone-call.jpg",
      alt: "Chris on the phone confirming an install",
    },
    {
      day: "Within the week",
      title: "Delivered, plumbed in, team trained",
      body: "Chris turns up with the machine, checks power and water, installs it, dials in the grind and shows two or three of your people how to use it. About 45 minutes.",
      image: "/lifestyle/step-04-install.jpg",
      alt: "Commercial coffee machine being plumbed in at an office kitchen",
    },
    {
      day: "Days 1 to 7",
      title: intent.step3Title,
      body: intent.step3Body,
      image: "/lifestyle/step-05-first-brew.jpg",
      alt: "Team enjoying the first coffees from a new office machine",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[oklch(0.975_0.015_65)]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            How it works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            {intent.stepsTitle}
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <li key={s.title} className="flex flex-col">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-md">
                <Image src={s.image} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute top-3 left-3 bg-foreground/85 text-background text-[11px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full">
                  {s.day}
                </span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
