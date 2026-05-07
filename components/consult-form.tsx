"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Loader2, ArrowRight } from "lucide-react"

type FormState = {
  name: string
  businessName: string
  email: string
  phone: string
  location: string
  teamSize: string
  comments: string
}

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  location: "",
  teamSize: "",
  comments: "",
}

export function ConsultForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
    }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant: "consult",
          pagePath: typeof window !== "undefined" ? window.location.pathname : "/contact",
          ...form,
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setError(
          data?.error ||
            "Something went wrong sending your enquiry. Please call Chris directly on 0411 876 625.",
        )
        setSubmitting(false)
        return
      }

      const params = new URLSearchParams({
        name: form.name,
        phone: form.phone,
      })
      router.push(`/contact/thank-you?${params.toString()}`)
    } catch {
      setError(
        "Couldn't reach the server. Please call Chris directly on 0411 876 625 or try again in a moment.",
      )
      setSubmitting(false)
    }
  }

  return (
    <section
      id="consult-form"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-background scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance leading-tight">
            Book a 10-minute consult with Chris
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Required fields are marked. No card, no commitment. Chris calls you back within one business day to lock in a
            site visit or answer questions.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Contact name <span className="text-destructive">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={update("name")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="businessName" className="block text-sm font-medium text-foreground">
              Business name <span className="text-destructive">*</span>
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              required
              autoComplete="organization"
              placeholder="Your company"
              value={form.businessName}
              onChange={update("businessName")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Work email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com.au"
              value={form.email}
              onChange={update("email")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Phone <span className="text-destructive">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="04XX XXX XXX"
              value={form.phone}
              onChange={update("phone")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-foreground">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Melbourne suburb, regional VIC, or office address"
              value={form.location}
              onChange={update("location")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="teamSize" className="block text-sm font-medium text-foreground">
              Team size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={update("teamSize")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors"
            >
              <option value="">Optional — select if helpful</option>
              <option value="Up to 15 people (small office)">Up to 15 people (small office)</option>
              <option value="15 to 50 people (mid-size office)">15 to 50 people (mid-size office)</option>
              <option value="50+ people (large office)">50+ people (large office)</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="comments" className="block text-sm font-medium text-foreground">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              placeholder="Current coffee setup, timing, questions, or anything else we should know"
              value={form.comments}
              onChange={update("comments")}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-copper focus:ring-2 focus:ring-copper/20 focus:outline-none text-base transition-colors placeholder:text-muted-foreground/50 resize-none"
            />
          </div>

          {error ? (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-foreground">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-copper hover:bg-copper-dark disabled:bg-copper/60 disabled:cursor-not-allowed text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg hover:scale-[1.01] transition-all duration-200"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Book my consult
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Chris responds personally within 1 business day. By submitting, you agree to our{" "}
            <Link href="/privacy" className="text-copper hover:underline font-medium">
              privacy policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
