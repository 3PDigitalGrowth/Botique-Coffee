import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import DirectContact from "@/components/direct-contact"
import ServiceAreas from "@/components/service-areas"
import ContactSocialProof from "@/components/contact-social-proof"

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          <ContactForm />
          <DirectContact />
        </div>
      </div>
      <ContactSocialProof />
      <ServiceAreas />
    </main>
  )
}
