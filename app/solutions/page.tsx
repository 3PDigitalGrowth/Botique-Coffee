import type { Metadata } from "next"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsTierComparison } from "@/components/solutions-tier-comparison"
import { SolutionsMachineRange } from "@/components/solutions-machine-range"
import { SolutionsSmallOffice } from "@/components/solutions-small-office"
import { SolutionsMidOffice } from "@/components/solutions-mid-office"
import { SolutionsLargeOffice } from "@/components/solutions-large-office"
import { SolutionsFinalCta } from "@/components/solutions-final-cta"

export const metadata: Metadata = {
  title:
    "Coffee Machine Rental Packages for Melbourne Workplaces, Small, Mid-Size & Large Office Tiers, Boutique Coffee at Work",
  description:
    "Three tiers of Melbourne workplace coffee machine rental, sized to your team. Small office from $35/week, mid-size from $55/week, large office from $85/week. 7-day free trial, no lock-in. Call Chris on 0411 876 625.",
  openGraph: {
    title:
      "Coffee Machine Rental Packages for Melbourne Workplaces, Boutique Coffee at Work",
    description:
      "Small, mid-size, and large office coffee machine rental tiers. From $35 a week, 7-day free trial, no lock-in. Melbourne metro only.",
    type: "website",
  },
}

export default function SolutionsPage() {
  return (
    <main className="bg-background">
      <SolutionsHero />
      <SolutionsTierComparison />
      <SolutionsMachineRange />
      <SolutionsSmallOffice />
      <SolutionsMidOffice />
      <SolutionsLargeOffice />
      <SolutionsFinalCta />
    </main>
  )
}
