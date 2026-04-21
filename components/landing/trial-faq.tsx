"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is this really free? What's the catch?",
    a: "There's no catch. For 30 days you get the machine, the install, training and a starter supply of beans at zero cost. No credit card, no deposit, no setup fees. We bet on the quality of the coffee and service. If you love it, you stay on a simple monthly plan. If you don't, we pick the machine back up, free.",
  },
  {
    q: "What happens if the machine breaks or jams?",
    a: "One call to Chris on 0411 876 625 and we handle it. During the 30-day trial, every service call, part, and on-site fix is on us. No tickets, no call centres, no waiting three days for a technician.",
  },
  {
    q: "Is training included, or do we work it out ourselves?",
    a: "Training is included and done on-site by our team on install day. We walk your staff through the machine, dial in the grind, and make sure at least two people on your team are confident pulling a proper shot before we leave. If you need a refresher later in the trial, we come back.",
  },
  {
    q: "What if we want to keep the machine after 30 days? What does it cost?",
    a: "Three options. Keep the same machine on a simple month-to-month plan starting from a set monthly fee (Chris will quote based on your team size and usage). Swap to a different model at no cost if a better fit exists. Or return it with zero obligation. No follow-up sales calls either way.",
  },
  {
    q: "Which parts of Victoria do you service?",
    a: "We service Melbourne metro (CBD and all suburbs), Geelong, the Mornington Peninsula, Ballarat, Bendigo and most of regional Victoria. Enter your postcode when you claim your trial, and if we can't get to you directly, we'll let you know within one business day.",
  },
  {
    q: "How long does delivery and install take?",
    a: "Most trials are delivered and installed within 5 to 7 business days of booking. The install itself takes 30 to 45 minutes on-site, including a quick plumbing and power check and a 10-minute team training. We work around your schedule.",
  },
  {
    q: "What happens with beans and milk during the trial?",
    a: "We include a starter supply of freshly roasted beans from our Victorian roasting partners, plus guidance on milk options for your team. After the trial, ongoing beans are delivered fresh on a schedule that suits your volume. Pause, skip or change any time.",
  },
  {
    q: "What if the machine isn't right for us?",
    a: "Tell Chris. If the fit's wrong, we'll swap it to a better-suited machine during the trial, at no cost. If it's simply not for you, we pick it up at a time that works for you. No awkward follow-ups.",
  },
]

export function TrialFaq() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-3xl mx-auto">
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            The questions owners usually ask
          </h2>
          <p className="text-base text-muted-foreground">
            Still unsure? Call Chris on{" "}
            <a href="tel:0411876625" className="text-copper hover:text-copper-dark font-medium">
              0411 876 625
            </a>
            . He's happy to answer anything.
          </p>
        </div>

        <div
          className="transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "200ms",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted/50">
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground hover:text-copper hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
