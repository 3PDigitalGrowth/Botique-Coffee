import type { MDXRemoteProps } from "next-mdx-remote/rsc"
import { Callout } from "./callout"
import { KeyTakeaways } from "./key-takeaways"
import { ComparisonTable } from "./comparison-table"
import { Stats } from "./stats"
import { CaseStudy } from "./case-study"
import { CTA } from "./cta"

/**
 * MDX component registry — every component the agent may inline in body MDX
 * MUST be registered here. The template fails gracefully on unknown components
 * (next-mdx-remote renders them as native elements / no-ops).
 */
export function getMdxComponents(pagePath?: string): MDXRemoteProps["components"] {
  return {
    KeyTakeaways,
    Callout,
    ComparisonTable,
    Stats,
    CaseStudy,
    CTA: (props: { slot: "primary" | "secondary" | "inline-form" }) => (
      <CTA slot={props.slot} pagePath={pagePath} />
    ),
  }
}
