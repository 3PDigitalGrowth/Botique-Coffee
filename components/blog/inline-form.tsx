"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import type { InlineFormCta } from "@/lib/cta-config"

type Props = {
  config: InlineFormCta
  /** Page path attached to the submission (for admin-email source panel). */
  pagePath?: string
}

type Status = "idle" | "submitting" | "success" | "error"

export function InlineForm({ config, pagePath }: Props) {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      variant: "quick" as const,
      source: config.source,
      pagePath,
      name: String(data.get("name") ?? "").trim(),
      businessName: String(data.get("businessName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      teamSize: String(data.get("teamSize") ?? "").trim(),
      comments: String(data.get("comments") ?? "").trim(),
    }

    setStatus("submitting")
    setError(null)

    try {
      const res = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
      }
      if (!res.ok || !json.ok) {
        setStatus("error")
        setError(json.error || "Something went wrong. Please try again.")
        return
      }
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setError("Network error. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-copper/30 bg-copper/5 p-6 md:p-8 flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-serif text-xl text-foreground mb-1">Got it.</p>
          <p className="text-muted-foreground leading-relaxed">
            {config.successMessage}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm"
    >
      {config.eyebrow ? (
        <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
          {config.eyebrow}
        </p>
      ) : null}
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 leading-tight">
        {config.headline}
      </h3>
      {config.subtext ? (
        <p className="text-base text-muted-foreground leading-relaxed mb-6 text-pretty">
          {config.subtext}
        </p>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Your name" required autoComplete="name" />
        <Field
          name="businessName"
          label="Business name"
          required
          autoComplete="organization"
        />
        <Field
          name="email"
          label="Work email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          name="phone"
          label="Phone"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field name="teamSize" label="Team size (optional)" />
        <Field name="comments" label="Anything else? (optional)" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-copper hover:bg-copper-dark text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-md transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            config.buttonText
          )}
        </button>
        {error ? (
          <span className="text-sm text-destructive">{error}</span>
        ) : null}
      </div>
    </form>
  )
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-foreground/80 font-medium">
        {label}
        {required ? <span className="text-copper"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-border bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-copper/40 focus:border-copper/60 transition"
      />
    </label>
  )
}
