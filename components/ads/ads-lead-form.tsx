"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react"
import { ADS_THANK_YOU_PATH } from "@/lib/ads-intents"

type Props = {
  suburb: string
  intentSlug: string
  ctaLabel: string
  compact?: boolean
  formId?: string
}

const ATTRIBUTION_KEYS = [
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "kw",
  "mt",
  "loc",
  "campaignid",
  "adgroupid",
] as const

const TEAM_SIZES = [
  { value: "1-15", label: "1 to 15 people" },
  { value: "15-50", label: "15 to 50 people" },
  { value: "50+", label: "50+ people" },
  { value: "unsure", label: "Not sure yet" },
]

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function AdsLeadForm({
  suburb,
  intentSlug,
  ctaLabel,
  compact = false,
  formId = "ads-lead-form",
}: Props) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState(suburb)
  const [teamSize, setTeamSize] = useState("")
  const [website, setWebsite] = useState("") // honeypot
  const [attribution, setAttribution] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLocation(suburb)
  }, [suburb])

  // Capture click attribution once, on mount. Persisted so a visitor who
  // browses and comes back to the form still carries the gclid.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const fresh: Record<string, string> = {}
      for (const key of ATTRIBUTION_KEYS) {
        const v = params.get(key)
        if (v) fresh[key] = v.slice(0, 200)
      }
      const stored = JSON.parse(sessionStorage.getItem("bc_ads_attr") || "{}") as Record<string, string>
      const merged = { ...stored, ...fresh }
      if (document.referrer && !merged.referrer) merged.referrer = document.referrer.slice(0, 200)
      merged.landing = window.location.pathname
      merged.intent = intentSlug
      sessionStorage.setItem("bc_ads_attr", JSON.stringify(merged))
      setAttribution(merged)
    } catch {
      // Storage blocked: submit without attribution.
    }
  }, [intentSlug])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant: "quick",
          source: "ads-lander",
          pagePath: window.location.pathname,
          name,
          businessName,
          email,
          phone,
          location: location.trim(),
          teamSize,
          comments: "",
          website,
          attribution,
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setError(
          data?.error ||
            "Something went wrong sending your details. Please call Chris on 0411 876 625.",
        )
        setSubmitting(false)
        return
      }

      try {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "generate_lead",
          form_source: "ads-lander",
          suburb: location.trim(),
          team_size: teamSize,
          intent: intentSlug,
        })
      } catch {
        // Tracking must never block the visitor.
      }

      const qs = new URLSearchParams({ name, suburb: location.trim(), intent: intentSlug })
      router.push(`${ADS_THANK_YOU_PATH}?${qs.toString()}`)
    } catch {
      setError("Could not reach the server. Please call Chris on 0411 876 625 or try again.")
      setSubmitting(false)
    }
  }

  const inputClass =
    "w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground text-base placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper transition-colors"
  const labelClass = "block text-xs uppercase tracking-wide text-foreground/70 mb-1.5"

  return (
    <form id={formId} className="space-y-3.5" onSubmit={onSubmit} noValidate>
      {/* Honeypot: hidden from humans, bots fill it and get silently dropped */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <div className={compact ? "grid sm:grid-cols-2 gap-3.5" : "space-y-3.5"}>
        <div>
          <label htmlFor={`${formId}-name`} className={labelClass}>
            Your name <span className="text-copper">*</span>
          </label>
          <input
            id={`${formId}-name`}
            className={inputClass}
            type="text"
            placeholder="Jane Smith"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-business`} className={labelClass}>
            Business name <span className="text-copper">*</span>
          </label>
          <input
            id={`${formId}-business`}
            className={inputClass}
            type="text"
            placeholder="Your company"
            required
            autoComplete="organization"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className={labelClass}>
            Mobile <span className="text-copper">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            className={inputClass}
            type="tel"
            inputMode="tel"
            placeholder="0411 000 000"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className={labelClass}>
            Work email <span className="text-copper">*</span>
          </label>
          <input
            id={`${formId}-email`}
            className={inputClass}
            type="email"
            inputMode="email"
            placeholder="you@company.com.au"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-suburb`} className={labelClass}>
            Office suburb
          </label>
          <input
            id={`${formId}-suburb`}
            className={inputClass}
            type="text"
            autoComplete="address-level2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-team`} className={labelClass}>
            Team size
          </label>
          <select
            id={`${formId}-team`}
            className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%23777%22 stroke-width=%221.5%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10`}
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          >
            <option value="">Select</option>
            {TEAM_SIZES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-destructive leading-snug">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 h-13 py-3.5 px-6 bg-copper hover:bg-copper-dark disabled:opacity-70 text-white text-sm md:text-base uppercase tracking-widest font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
        <ShieldCheck className="w-4 h-4 text-copper flex-shrink-0 mt-px" />
        <span>
          No card, no deposit, no lock-in. Chris calls you back within one business day. Your details
          go to Chris only.
        </span>
      </p>
    </form>
  )
}
