"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Faq } from "@/lib/ads-intents"

// Client component (Accordion), so it takes plain data rather than the intent object.
type Props = { title: string; faqs: Faq[] }

export function AdsFaq({ title, faqs }: Props) {

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-3">
            Before you book
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-3">
            {title}
          </h2>
          <p className="text-base text-muted-foreground">
            Anything else, call Chris on{" "}
            <a href="tel:0411876625" className="text-copper hover:text-copper-dark font-medium">
              0411 876 625
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`} className="border-b border-border/70">
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
    </section>
  )
}
