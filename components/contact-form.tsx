"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [visibleFields, setVisibleFields] = useState<number[]>([])
  const fieldRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = fieldRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleFields((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const fields = [
    { name: "businessName", placeholder: "Business name", type: "text", required: true },
    { name: "contactName", placeholder: "Your name", type: "text", required: true },
    { name: "email", placeholder: "Work email", type: "email", required: true },
    { name: "phone", placeholder: "Phone number (optional)", type: "tel", required: false },
    {
      name: "businessType",
      placeholder: "Business type",
      type: "select",
      options: ["Creative Agency", "Tech Startup", "Professional Services", "Growing Business", "Other"],
      required: false,
    },
    {
      name: "staffCount",
      placeholder: "Number of staff",
      type: "select",
      options: ["1-10", "11-25", "26-50", "51-100", "100+"],
      required: false,
    },
    {
      name: "currentSituation",
      placeholder: "Tell us about your current coffee situation (optional)",
      type: "textarea",
      required: false,
    },
    { name: "preferredTime", placeholder: "Preferred consultation time (optional)", type: "text", required: false },
    {
      name: "message",
      placeholder: "Any questions or additional information? (optional)",
      type: "textarea",
      required: false,
    },
  ]

  return (
    <div className="space-y-8 lg:space-y-10">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground">Schedule Your Consultation</h2>

      {fields.map((field, index) => (
        <div
          key={field.name}
          ref={(el) => {
            fieldRefs.current[index] = el
          }}
          className={`transition-all duration-700 delay-${index * 100} ${
            visibleFields.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              rows={4}
              required={field.required}
              className="w-full bg-transparent border-b-2 border-muted-foreground/20 focus:border-accent text-base px-0 py-3 transition-colors duration-300 resize-none focus:outline-none placeholder:text-muted-foreground/40"
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="w-full bg-transparent border-b-2 border-muted-foreground/20 focus:border-accent text-base px-0 py-3 transition-colors duration-300 focus:outline-none text-muted-foreground/60"
            >
              <option value="">{field.placeholder}</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full bg-transparent border-b-2 border-muted-foreground/20 focus:border-accent text-base px-0 py-3 transition-colors duration-300 focus:outline-none placeholder:text-muted-foreground/40"
            />
          )}
        </div>
      ))}

      <div
        ref={(el) => {
          fieldRefs.current[fields.length] = el
        }}
        className={`transition-all duration-700 delay-${fields.length * 100} ${
          visibleFields.includes(fields.length) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Button
          size="lg"
          className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-white font-light tracking-wide"
        >
          Schedule My Consultation
        </Button>
        <p className="text-sm text-muted-foreground/60 mt-4 text-center">
          We&apos;ll reach out within 24 hours to confirm your consultation time.
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2 text-center italic">
          No commitment required. Just a genuine conversation about great coffee.
        </p>
      </div>
    </div>
  )
}
