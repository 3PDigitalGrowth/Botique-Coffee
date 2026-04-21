import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Thanks, we'll be in touch | Boutique Coffee at Work",
  description: "Your consult request has been received. Chris will be in touch within one business day.",
  robots: {
    index: false,
    follow: false,
  },
}

type Props = {
  searchParams: Promise<{ name?: string; phone?: string }>
}

export default async function ContactThankYouPage({ searchParams }: Props) {
  const { name, phone } = await searchParams
  const displayName = (name || "").trim() || "there"
  const displayPhone = (phone || "").trim()

  return (
    <main className="bg-background min-h-[70vh] flex items-center">
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-8">
            <CheckCircle2 className="w-8 h-8 text-copper" strokeWidth={1.75} />
          </div>

          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-5">
            Enquiry received
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
            Thanks, {displayName}.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
            Chris has received your enquiry and will call you{displayPhone ? ` on ${displayPhone}` : ""} within one business day. If it&apos;s urgent, call him directly on{" "}
            <a href="tel:0411876625" className="text-copper hover:text-copper-dark font-semibold">
              0411 876 625
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-foreground/80 hover:text-copper transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <a
              href="tel:0411876625"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Chris now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
