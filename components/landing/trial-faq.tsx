"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is this really free? What's the catch?",
    a: "There's no catch. For 30 days you get the machine, the install, training and a starter supply of beans at zero cost. No credit card, no deposit, no setup fees. We bet on the quality of the coffee and service. If you love it, you stay on a simple monthly plan. If you don't, we pick the machine back up, free.",
  },
  {
    q: "Which parts of Victoria do you service?",
    a: "We service Melbourne metro (CBD and all suburbs), Geelong, the Mornington Peninsula, Ballarat, Bendigo and most of regional Victoria. Enter your postcode when you claim your trial, and if we can't get to you directly, we'll let you know within one business day.",
  },
  {
    q: "How long does delivery and install take?",
    a: "Most trials are delivered and installed within 5–7 business days of booking. The install itself takes 30–45 minutes on-site, including a quick plumbing and power check and a 10-minute team training. We work around your schedule.",
  },
  {
    q: "Do I need to sign anything?",
    a: "You'll sign a simple 1-page trial agreement so we know the machine is in good hands. It confirms the 30-day trial terms, pick-up responsibilities, and our commitment to you. No payment details, no auto-renewal traps.",
  },
  {
    q: "What kind of coffee machine will I get?",
    a: "A commercial-grade machine matched to your team size and space. These are the same machines we supply to boutique Victorian cafés. For smaller teams, that might be a premium bean-to-cup; for larger offices, a traditional 2-group espresso setup. Chris personally recommends the right fit.",
  },
  {
    q: "What happens with beans and milk during the trial?",
    a: "We include a starter supply of freshly roasted beans from our Victorian roasting partners, plus guidance on milk options for your team. After the trial, ongoing beans are delivered fresh on a schedule that suits your volume. Pause, skip or change any time.",
  },
  {
    q: "What if the machine isn't right for us?",
    a: "Tell Chris. If the fit's wrong, we'll swap it to a better-suited machine during the trial, at no cost. If it's simply not for you, we uplift it at a time that works for you. No awkward follow-ups.",
  },
  {
    q: "Is there a limit on cups during the trial?",
    a: "Nope. Drink as much as your team can handle. The trial is designed to show you what daily life with a real coffee machine actually feels like.",
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
