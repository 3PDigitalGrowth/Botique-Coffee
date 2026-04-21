import type { Metadata } from "next"
import { ContactHero } from "@/components/contact-hero"
import { ContactOptions } from "@/components/contact-options"
import { ConsultForm } from "@/components/consult-form"
import { ContactServiceArea } from "@/components/contact-service-area"
import { ContactReassurance } from "@/components/contact-reassurance"

export const metadata: Metadata = {
  title:
    "Contact Chris at Boutique Coffee at Work, Melbourne Workplace Coffee Machine Rentals",
  description:
    "Talk direct to Chris Prokopiou, founder of Boutique Coffee at Work. Phone 0411 876 625 or book a 10-minute consult. Servicing Melbourne metro workplaces with commercial coffee machine rentals from $35/week.",
  alternates: {
    canonical: "https://boutiquecoffee.com.au/contact",
  },
  openGraph: {
    title:
      "Contact Chris at Boutique Coffee at Work | Melbourne Workplace Coffee Rentals",
    description:
      "Talk direct to Chris Prokopiou. Phone 0411 876 625 or book a 10-minute consult. Melbourne metro workplace coffee machine rentals from $35/week.",
    url: "https://boutiquecoffee.com.au/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      <ContactOptions />
      <ConsultForm />
      <ContactServiceArea />
      <ContactReassurance />
    </main>
  )
}
