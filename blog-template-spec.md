# Blog Template Spec — `github_template` Delivery Method

This is the engineering contract every client website must meet before the SEO agent can publish blogs to it via the `github_template` delivery method.

Hand this doc to whoever builds the client site. Once the site is live and meets every requirement here, the client can be onboarded with `delivery.method: github_template` and the agent will publish to their repo automatically.

---

## Purpose

The SEO agent commits MDX files into the client's GitHub repo. Vercel auto-deploys on push, so blogs go live ~60 seconds after the agent commits. The template inside the client's repo handles all rendering, branding, and conversion blocks.

Each client gets the **same template structure** — only the brand tokens (colours, fonts, logo) change.

---

## 1. Required File Structure

The client repo MUST have these paths exactly:

```
content/
  blog/
    .gitkeep                       ← agent commits {slug}.mdx files here
app/
  blog/
    page.tsx                       ← /blog index, lists all posts
    [slug]/
      page.tsx                     ← /blog/{slug}, renders MDX
components/
  blog/
    BlogTemplate.tsx               ← layout wrapper (hero, body, CTAs, FAQ, references, footer band)
    mdx-components.tsx             ← registers <Callout>, <CTA>, <Stats>, etc.
    RelatedPosts.tsx               ← bottom 3-card section
    AuthorBio.tsx                  ← below body
lib/
  blog.ts                          ← reads /content/blog/, returns post list + frontmatter
app/
  sitemap.ts                       ← MUST include all blog posts dynamically
```

**Non-negotiable:** the agent commits to `content/blog/{slug}.mdx`. Don't change that path.

---

## 2. Frontmatter Contract

Every MDX file the agent writes will have this frontmatter shape. Your template MUST read all of these fields.

```yaml
---
title: "How much does emergency plumbing cost in Sydney?"
slug: "emergency-plumbing-cost-sydney"
date: "2026-05-06"
author: "3P Digital"
readTime: "8 min read"

# SEO
metaTitle: "Emergency Plumber Sydney Cost: 2026 Pricing Guide"
metaDescription: "What you'll actually pay for after-hours plumbing in Sydney..."
primaryKeyword: "emergency plumbing cost sydney"
keywords:
  - after hours plumber sydney
  - weekend plumbing rates
  - emergency callout fee

# Content
tags: ["pricing", "emergency"]
heroImage: "/images/blog/emergency-plumbing.jpg"   # optional — template falls back to no image
breadcrumb: ["Blog", "Plumbing", "Pricing"]

# Structured data
faqSchema:
  - question: "How much does an emergency plumber cost in Sydney?"
    answer: "Expect $150-$300 for the callout..."
  - question: "..."
    answer: "..."

# Internal linking (rendered as inline mentions + sidebar related links)
internalLinks:
  - url: "/services/emergency-plumbing"
    anchor: "emergency plumbing service"
  - url: "/contact"
    anchor: "get a quote"

# References (rendered as numbered list at bottom)
references:
  - title: "ABS Household Expenditure Survey 2024"
    url: "https://abs.gov.au/..."
    note: "Cost benchmarks"

# Drafts (optional)
draft: false                          # If true, the post is rendered at /blog/{slug}
                                      # with <meta name="robots" content="noindex">,
                                      # and excluded from /blog index, /sitemap.xml,
                                      # and related-posts queries. Lets editors review
                                      # without indexing.
---
```

**Optional fields the template MAY use:**
- `heroImage` — falls back to no image if absent
- `breadcrumb` — falls back to `["Blog", title]` if absent
- `references` — falls back to no references section if empty
- `draft` — defaults to `false`. When `true`, see draft handling rules above.

**Forbidden:** Don't require fields the agent doesn't write. If the template needs something not in this list, add it to the agent's frontmatter writer first.

---

## 3. MDX Components Contract

The agent will use these components inline in the body. Register every one in `components/blog/mdx-components.tsx`:

| Component | Usage | Template MUST render as |
|---|---|---|
| `<KeyTakeaways>` | `<KeyTakeaways items={["a", "b", "c"]} />` | Light-bg callout box near top of article, bulleted list |
| `<Callout type="info\|warning\|tip">` | `<Callout type="tip">Pro tip: ...</Callout>` | Coloured callout box matching type |
| `<CTA slot="primary\|secondary\|inline-form">` | `<CTA slot="inline-form" />` | Brand-approved CTA block. **Template owns 100% of the copy, button text, form fields, and destination URL** — agent only picks the slot. See §3a below. |
| `<ComparisonTable>` | `<ComparisonTable headers={[...]} rows={[...]} />` | Striped table, full content width |
| `<Stats>` | `<Stats items={[{value:"312%", label:"traffic increase"}]} />` | Inline stats bar (3-4 columns) |
| `<CaseStudy>` | `<CaseStudy industry="..." metric="..." quote="..." author="...">description</CaseStudy>` | Numbered case study block with metric + italic quote |
| `<FAQ>` | Auto-rendered from `faqSchema` frontmatter — agent doesn't write this inline | Expanded list (not accordion), Q in H3, A in body, with FAQ JSON-LD `<script>` |

**The template should fail gracefully** if it encounters an unknown component (render as-is or skip). Don't crash the build.

### 3a. CTA Slots — why slot-based, not free-form

Letting the agent write CTA headlines, button text, and destinations means brand voice and conversion policy (e.g. "every CTA must resolve to /health-check or /book-call") have to be enforced via prompt engineering — fragile and easy to drift.

**Slot-based puts the template in control.** The agent picks *where* a CTA goes; the template owns *what* it says and *where* it points. Result: CTA policy is structural, not editorial.

The template MUST define exactly three slots (more can be added per client, but these three are the standard contract):

| Slot | Renders as | Used by agent for |
|---|---|---|
| `primary` | Button-style CTA → links to the client's primary conversion destination | Mid-article callout when context warrants direct action |
| `secondary` | Soft CTA (text link or low-emphasis button) → secondary destination | Mid-article when a softer push is more natural |
| `inline-form` | Inline lead-capture form (name, email, optional fields) | When the agent wants a high-friction conversion block in-context |

Per-client examples:
- **Ordron:** all three slots resolve to `/health-check` or `/scorecard`. No exceptions.
- **Boutique Coffee:** `primary` → `/wholesale-quote`, `secondary` → `/subscribe`, `inline-form` → wholesale enquiry form.

**Implementation note:** the slot copy and destination must be configurable per-client without changing the template code — typically via a `cta-config.ts` file the template imports.

---

## 4. Required Routes

### `/blog` (index)
- Lists all posts from `content/blog/`
- Newest first
- Card per post: title, primary keyword as category tag, date, read time, excerpt (first 160 chars of body)
- Pagination if >12 posts
- **Drafts (`draft: true`) are excluded**

### `/blog/[slug]` (detail)
Renders `BlogTemplate.tsx` with the MDX as children. Must include in this order:

1. **Header section**
   - Breadcrumb (from frontmatter or default)
   - H1 (title)
   - Byline row: author name, publish date, read time
   - Hero image if present
   - If `draft: true`: emit `<meta name="robots" content="noindex">` and skip canonical

2. **Body** — the MDX content, rendered through registered components

3. **FAQ section** — auto-generated from `faqSchema` frontmatter, including FAQ JSON-LD schema in `<script type="application/ld+json">`

4. **References** — numbered list from `references` frontmatter

5. **Author bio** — small avatar, name, one-line title

6. **Related posts** — 3 cards, picked by shared tags or fallback to most recent

7. **Bottom CTA band** — full-width branded background, headline + sub + lead form. Reusable across all blogs (not in MDX).

### `/sitemap.xml`
Must dynamically include every blog post in `content/blog/`. Not optional — Google needs it for fast indexing. **Drafts (`draft: true`) are excluded.**

---

## 5. Brand Tokens (the only things that change per client)

Expose these as CSS variables in `app/globals.css`:

```css
:root {
  /* Colours */
  --brand-primary: #6F4E37;        /* main brand colour */
  --brand-accent: #E8A87C;         /* secondary / highlights */
  --brand-text: #2A1810;           /* body text */
  --brand-heading: #1A0F08;        /* heading text */
  --brand-muted: #8B7E76;          /* secondary text, captions */
  --brand-bg: #FAF6F1;             /* page background */
  --brand-surface: #FFFFFF;        /* card / callout background */
  --brand-border: #E8E0D8;         /* subtle borders */
  --brand-cta-bg: var(--brand-primary);
  --brand-cta-text: #FFFFFF;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
}
```

These are the **only** things that should differ between clients. Layout, components, and structure stay identical.

---

## 6. Typography Spec (matches 3P Digital blog)

| Element | Size | Weight | Line height |
|---|---|---|---|
| H1 (article title) | 48-56px | 700-900 | 1.1 |
| H2 | 32-36px | 700 | 1.2 |
| H3 | 24-28px | 600 | 1.3 |
| Body | 17-18px | 400 | 1.7 |
| Table text | 14-16px | 400 | 1.5 |
| Quote text | 18px italic | 400 | 1.6 |
| Caption / meta | 13-14px | 500 | 1.4 |

Body content column: **max-width 720px** with generous left/right margins. Tables and CTAs may break out wider where it improves scannability.

---

## 7. Conversion Blocks (template-owned)

There are two flavours of CTA on every blog. Both are template-owned — only placement differs.

### 7a. Auto-placed (always present)

The template renders these on every blog regardless of MDX content:

1. **Bottom CTA band** — full-width branded background above footer. Headline + sub + form.
2. **Sticky mobile CTA** — small bar pinned to bottom on mobile only.

Copy and destination for these come from the per-client `cta-config.ts` (see §3a). Agent has no control over them.

### 7b. Agent-placed (contextual)

The agent writes `<CTA slot="..." />` mid-content where conversion intent feels natural. The template renders the slot's pre-defined block (see §3a slot table) — the agent doesn't supply copy or URLs.

Where the form sends data (Resend, HubSpot, custom endpoint) is the client site's concern — agent doesn't touch this.

---

## 8. Vercel Deployment

- The repo MUST auto-deploy on push to the configured branch (default `main`)
- No deploy hook needed — git push triggers the build
- Build output must include the new blog at `/blog/{slug}` within ~60s of commit
- 404 handling for non-existent slugs (Next.js handles this by default with `generateStaticParams`)

---

## 9. SEO Requirements (non-negotiable)

The template MUST output:

- `<title>` from `metaTitle`
- `<meta name="description">` from `metaDescription`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type=article`)
- Twitter Card tags
- `<link rel="canonical">` pointing to the live URL
- FAQ JSON-LD `<script type="application/ld+json">` from `faqSchema`
- Article JSON-LD `<script type="application/ld+json">` with title, author, publish date, image
- Breadcrumb JSON-LD from `breadcrumb` frontmatter

**Page must score ≥95 on Lighthouse SEO and ≥90 on Performance** before the client is onboarded to the agent.

---

## 10. GitHub Access for the Agent

Before the client can be onboarded:

1. Repo exists on GitHub (public or private — agent uses a PAT, either works)
2. Create a fine-grained Personal Access Token scoped to **only this repo**, with **Contents: write** permission
3. Add the PAT to the SEO agent dashboard during onboarding (or to `clients.json` directly: `delivery.githubToken`)
4. Confirm commits will appear with author: `SEO Agent <seo@3pdigital.com.au>` (or override per client)

---

## 11. Pre-Flight Checklist

Before adding the client to the SEO agent dashboard, every box must be ticked:

- [ ] `content/blog/` exists in the repo
- [ ] `/blog` index route renders empty state cleanly
- [ ] `/blog/[slug]` route renders a sample MDX file end-to-end
- [ ] All MDX components from §3 registered and tested
- [ ] All frontmatter fields from §2 read correctly
- [ ] Brand CSS variables set in `globals.css`
- [ ] Typography matches §6 spec
- [ ] FAQ JSON-LD outputs correctly (test with [Schema validator](https://validator.schema.org/))
- [ ] Article + Breadcrumb JSON-LD output correctly
- [ ] `/sitemap.xml` includes blog posts
- [ ] Vercel auto-deploy works (push a test commit, confirm live URL updates)
- [ ] Lighthouse score: SEO ≥95, Performance ≥90
- [ ] PAT created and stored securely
- [ ] All three CTA slots (`primary`, `secondary`, `inline-form`) defined in `cta-config.ts` with brand-approved copy + destinations
- [ ] `<CTA slot="..." />` renders correctly for each slot
- [ ] Bottom CTA band renders
- [ ] Sticky mobile CTA renders
- [ ] Draft handling tested: `draft: true` post renders with `noindex` meta tag and is excluded from `/blog` index AND `/sitemap.xml`
- [ ] Author bio + related posts render below body
- [ ] References render as numbered list
- [ ] Mobile + desktop both reviewed manually

---

## 12. Sample MDX File (for testing)

Drop this into `content/blog/test-post.mdx` to verify everything renders:

```mdx
---
title: "Test post — every block in one file"
slug: "test-post"
date: "2026-05-06"
author: "3P Digital"
readTime: "5 min read"
metaTitle: "Test post — every block in one file"
metaDescription: "A sandbox post for verifying the blog template renders all components correctly."
primaryKeyword: "test post"
keywords: ["test", "sandbox"]
tags: ["test"]
breadcrumb: ["Blog", "Test"]
faqSchema:
  - question: "Does the FAQ block render?"
    answer: "Yes — with JSON-LD schema."
internalLinks:
  - url: "/contact"
    anchor: "get in touch"
references:
  - title: "Sample reference"
    url: "https://example.com"
    note: "Demonstrates references rendering"
draft: true   # noindex + excluded from index + sitemap; remove for real launch
---

This is the intro paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<KeyTakeaways items={[
  "First key takeaway",
  "Second key takeaway",
  "Third key takeaway",
]} />

## A section heading

Body copy goes here. Body copy goes here. Body copy goes here.

<Callout type="tip">
  This is a tip callout. Use it for inline asides.
</Callout>

<ComparisonTable
  headers={["Factor", "Option A", "Option B"]}
  rows={[
    ["Cost", "$100", "$200"],
    ["Speed", "Fast", "Slow"],
  ]}
/>

<CaseStudy
  industry="Hospitality"
  metric="312%"
  metricLabel="organic traffic increase"
  quote="Best decision we made this year."
  author="Jane Doe, GM"
>
  Brief 2-sentence description of what was achieved.
</CaseStudy>

<CTA slot="primary" />

## Closing thoughts

Final body paragraph. Visit our [contact page](/contact) to learn more.

<CTA slot="inline-form" />
```

If this file renders correctly with every block visible and styled, the template is ready.

---

## 13. Onboarding the Client to the SEO Agent

Once §11 is fully ticked:

1. Open the SEO agent dashboard → Add Client wizard
2. Step 3 (Agent Settings) → Delivery method: **GitHub Template**
3. Fill in:
   - `githubRepo` — e.g. `3PDigitalGrowth/Botique-Coffee`
   - `githubBranch` — usually `main`
   - `liveUrl` — e.g. `https://www.boutiquecoffee.com.au`
   - PAT (or use the org-wide token if configured)
4. Save. Trigger a manual run from the Run Agent tab to confirm end-to-end.

---

**Owner:** Alex Frew
**Last updated:** 2026-05-06 (v2 — slot-based CTAs, draft handling)
