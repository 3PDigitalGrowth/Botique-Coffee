/**
 * Google Ads conversion tracking for the ads landers.
 * Account 565-072-3596 (Boutique Coffee at Work). Tag loads via the existing
 * gtag.js in app/layout.tsx; these are the conversion actions created on
 * 2 September 2026 (campaign 24197481309).
 */
export const GADS_CONVERSION_ID = "AW-18421695400"
export const GADS_CONVERSIONS = {
  /** Primary: page view of /coffee-machine-rental/thank-you */
  enquiry: "AW-18421695400/scazCIjBj-wcEKiHk9BE",
  /** Secondary: click on a tel: link anywhere on a lander */
  phoneClick: "AW-18421695400/pvoICP3jj-wcEKiHk9BE",
} as const

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function fireConversion(sendTo: string, params: Record<string, unknown> = {}): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: sendTo, ...params })
    }
  } catch {
    // Tracking never blocks the visitor.
  }
}
