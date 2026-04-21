"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What does it cost to get started?",
    a: "Nothing. The 30-day free trial covers the machine, install, training, starter beans and consumables at zero cost. No credit card, no deposit, no setup fee. If you keep it, weekly rental starts from $35 a week depending on the tier.",
  },
  {
    q: "How long am I locked in?",
    a: "You are not locked in. The trial is 30 days with zero obligation. If you keep the machine, you move to a simple month-to-month rental. Give us a month's notice any time and we pick up at no cost.",
  },
  {
    q: "What if our team grows or shrinks?",
    a: "The rental is flexible. If you go from 12 people to 25, we swap the machine up to a bigger tier. If you downsize, we can move you down or pause the service. Any change, one call to Chris sorts it.",
  },
]

export function HowItWorksFaq() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
            Short FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            The three questions almost every owner asks
          </h2>
          <p className="text-base text-muted-foreground">
            Still unsure? Call Chris on{" "}
            <a href="tel:0411876625" className="text-copper hover:text-copper-dark font-medium">
              0411 876 625
            </a>
            . He is happy to answer anything.
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

        <div
          className="mt-10 flex justify-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "400ms",
          }}
        >
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 text-copper hover:text-copper-dark transition-colors text-sm font-medium uppercase tracking-widest"
          >
            More questions on the free trial page
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
