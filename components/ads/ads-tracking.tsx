"use client"

import { useEffect } from "react"
import { GADS_CONVERSIONS, fireConversion } from "@/lib/ads-tracking"

/**
 * Fires the Google Ads "phone click" conversion when a visitor taps any
 * tel: link on a lander. Mounted once per lander page.
 */
export function AdsPhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const link = target?.closest?.("a[href^='tel:']") as HTMLAnchorElement | null
      if (!link) return
      fireConversion(GADS_CONVERSIONS.phoneClick)
      try {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: "phone_click", form_source: "ads-lander", href: link.href })
      } catch {
        // ignore
      }
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])
  return null
}

/**
 * Fires the primary "enquiry" conversion once on the thank-you page.
 * Kept as a page-view style event so it also works if the visitor lands
 * here from the email confirmation link.
 */
export function AdsEnquiryConversion({ suburb, intent }: { suburb?: string; intent?: string }) {
  useEffect(() => {
    fireConversion(GADS_CONVERSIONS.enquiry, { value: 0, currency: "AUD", suburb, intent })
  }, [suburb, intent])
  return null
}
