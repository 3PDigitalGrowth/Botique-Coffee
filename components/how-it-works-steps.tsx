"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Step = {
  number: string
  title: string
  tags: string[]
  body: string
  nextUp: string
  image: string
  alt: string
}

const steps: Step[] = [
  {
    number: "01",
    title: "You enquire",
    tags: ["2 minutes", "You"],
    body: "Fill out the form on this site, email Chris, or call 0411 876 625. Tell us roughly how many people are on your team, what your morning coffee looks like now, and whether you already have a kitchen fit-out. That is all we need to start.",
    nextUp: "Chris reads your enquiry the same day and calls you back within one business day.",
    image: "/lifestyle/step-01-enquiry.jpg",
    alt: "A team member typing an enquiry at a modern office desk",
  },
  {
    number: "02",
    title: "Chris calls you",
    tags: ["15 to 20 minutes", "With Chris"],
    body: "A short phone conversation, not a sales pitch. Chris asks about team size, daily coffee volume, the vibe of the office, and whether staff drink milk-based, black, or a mix. By the end of the call you have a shortlist of two or three machines that make sense, a rough weekly price, and a booking for a site visit if it is the right fit.",
    nextUp: "If you want to keep going, we lock in a 30-minute site visit at a time that suits you.",
    image: "/lifestyle/step-02-phone-call.jpg",
    alt: "Chris on the phone at his desk walking a client through machine options",
  },
  {
    number: "03",
    title: "On-site visit",
    tags: ["30 minutes", "On-site"],
    body: "One of our team visits your office. We check power, plumbing and water pressure, measure the bench space, and photograph the kitchen so the install is planned down to the centimetre. We also meet whoever will own the machine day to day so they can ask real questions in person.",
    nextUp: "Within 24 hours you get a written proposal with the exact machine, the weekly rental, and a proposed install date.",
    image: "/lifestyle/step-03-site-visit.jpg",
    alt: "A technician measuring an office kitchen benchtop during a site visit",
  },
  {
    number: "04",
    title: "Install day",
    tags: ["45 minutes", "Our team"],
    body: "We arrive with the machine, the grinder, a starter bag of freshly roasted Victorian beans, cups, cleaning kit, and everything else you need. Plumbing is connected, water filters are fitted, the grinder is dialled in for your beans, and the machine is tested with real shots before we hand it over.",
    nextUp: "Before we leave, we do a live training session with your team.",
    image: "/lifestyle/step-04-install.jpg",
    alt: "A technician installing a commercial espresso machine on an office kitchen bench",
  },
  {
    number: "05",
    title: "First brew and training",
    tags: ["20 minutes", "Your team"],
    body: "We run at least two of your staff through the machine, start to finish. Pulling a shot, steaming milk, cleaning, emptying the grounds, changing the bean hopper, and handling the most common mini-fixes. Everyone on your team gets a one-page cheat sheet they can keep on the fridge.",
    nextUp: "From here, coffee is part of the workday. Most clients are drinking their first proper shot within an hour of install finishing.",
    image: "/lifestyle/step-05-first-brew.jpg",
    alt: "A staff member pulling their first espresso with two colleagues watching",
  },
  {
    number: "06",
    title: "Ongoing rhythm",
    tags: ["Weekly or fortnightly", "Us, for you"],
    body: "We drop in on a regular service cycle. Beans are topped up, cups and consumables are restocked, the machine is cleaned and calibrated, and any small issue is sorted on the spot. If something bigger happens between visits, one phone call to Chris triggers a same-day or next-day response. That is the rental fee at work.",
    nextUp: "This rhythm runs for as long as you want it to. Most of our clients have been with us for 5+ years.",
    image: "/lifestyle/step-06-ongoing-service.jpg",
    alt: "A technician topping up beans and servicing the machine on a scheduled visit",
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 },
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-28 last:mb-0"
    >
      <div
        className={`${isEven ? "lg:order-2" : "lg:order-1"} transition-all duration-1000`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-serif text-5xl md:text-6xl text-copper/80 leading-none">
            {step.number}
          </span>
          <div className="flex flex-wrap gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-copper/10 text-copper font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-5 text-balance leading-tight">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 text-pretty">
          {step.body}
        </p>
        <div className="flex items-start gap-3 p-4 md:p-5 rounded-xl bg-muted/50 border border-border">
          <ArrowRight className="w-4 h-4 text-copper flex-shrink-0 mt-1" />
          <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
            <span className="font-semibold text-foreground">What happens next: </span>
            {step.nextUp}
          </p>
        </div>
      </div>

      <div
        className={`${isEven ? "lg:order-1" : "lg:order-2"} transition-all duration-1000`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : `translateX(${isEven ? "-30px" : "30px"})`,
          transitionDelay: "150ms",
        }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <Image
            src={step.image}
            alt={step.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function HowItWorksSteps() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}
