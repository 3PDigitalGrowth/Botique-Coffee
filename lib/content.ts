export type GuideMeta = {
  slug: string
  title: string
  description: string
  tag: string
  readTime: string
  thumbnail: string
  thumbnailAlt: string
  metaTitle: string
  metaDescription: string
  launchMonth: string
}

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  metaTitle: string
  metaDescription: string
}

export const GUIDES: GuideMeta[] = [
  {
    slug: "office-coffee-machine-rental-melbourne",
    title: "How office coffee machine rental works in Melbourne",
    description:
      "The complete guide. How rental agreements work, what's included, what to watch out for, and what it typically costs.",
    tag: "Hub guide",
    readTime: "12 min read",
    thumbnail: "/lifestyle/how-it-works-hero.jpg",
    thumbnailAlt: "Melbourne office kitchen with a commercial coffee machine on the counter",
    metaTitle:
      "Office Coffee Machine Rental in Melbourne: The Complete Guide | Boutique Coffee",
    metaDescription:
      "How office coffee machine rental works in Melbourne. What's included, what to watch for, and what it actually costs. Written by Chris, founder of Boutique Coffee.",
    launchMonth: "May 2026",
  },
  {
    slug: "rent-vs-buy-commercial-coffee-machine",
    title: "Rent vs buy a commercial coffee machine: which makes sense?",
    description:
      "The financial, operational, and practical comparison. With a straight-up decision framework for your business size.",
    tag: "Decision guide",
    readTime: "10 min read",
    thumbnail: "/machines/eversys-legacy.png",
    thumbnailAlt: "Eversys Legacy commercial coffee machine",
    metaTitle:
      "Rent vs Buy a Commercial Coffee Machine: Decision Guide | Boutique Coffee",
    metaDescription:
      "Should your Melbourne business rent or buy a commercial coffee machine? A straight-up cost, risk, and operations comparison with a decision framework.",
    launchMonth: "May 2026",
  },
  {
    slug: "coffee-machine-size-for-office",
    title: "What size coffee machine do I actually need for my office?",
    description:
      "Work out your real daily volume, peak load, and which machine class suits your team. No sales jargon.",
    tag: "Sizing guide",
    readTime: "8 min read",
    thumbnail: "/machines/dr-coffee-f100.png",
    thumbnailAlt: "Dr Coffee F100 automatic espresso machine",
    metaTitle:
      "What Size Coffee Machine Do I Need for My Office? | Boutique Coffee",
    metaDescription:
      "How to work out the right coffee machine size for your Melbourne office. Daily cup volume, peak load, and machine class explained in plain English.",
    launchMonth: "June 2026",
  },
  {
    slug: "real-cost-of-workplace-coffee",
    title: "The real cost of workplace coffee (café trips vs office machine)",
    description:
      "The honest maths on what your team is already spending at cafés, and what a machine actually costs per cup.",
    tag: "Cost analysis",
    readTime: "7 min read",
    thumbnail: "/lifestyle/real-cost-split.jpg",
    thumbnailAlt:
      "Split-screen comparison of a takeaway coffee cup on a Melbourne street and a commercial coffee machine in an office kitchen",
    metaTitle:
      "The Real Cost of Workplace Coffee: Café vs Office Machine | Boutique Coffee",
    metaDescription:
      "Café trips vs office coffee machine: the honest per-cup maths for Melbourne teams. What your team is already spending and what a machine really costs.",
    launchMonth: "June 2026",
  },
  {
    slug: "choosing-workplace-coffee-supplier-melbourne",
    title: "How to choose a workplace coffee supplier in Melbourne",
    description:
      "The questions to ask, the red flags to look for, and what \u201cgood\u201d actually looks like. Written by a supplier, as straight as it gets.",
    tag: "Buyer guide",
    readTime: "9 min read",
    thumbnail: "/images/Chris_Solo_Van.png",
    thumbnailAlt: "Chris Prokopiou in front of the Boutique Coffee at Work service van",
    metaTitle:
      "How to Choose a Workplace Coffee Supplier in Melbourne | Boutique Coffee",
    metaDescription:
      "What to ask, what to avoid, and what a good workplace coffee supplier looks like in Melbourne. Written by Chris, founder of Boutique Coffee.",
    launchMonth: "July 2026",
  },
  {
    slug: "commercial-coffee-machines-explained",
    title:
      "Commercial coffee machines explained: Jura, WMF, Eversys, Dr Coffee, Faemina",
    description:
      "What each brand is known for, which one fits your office, and the honest differences between them.",
    tag: "Machine guide",
    readTime: "11 min read",
    thumbnail: "/machines/coffee-bar-horeca.jpg",
    thumbnailAlt: "Commercial coffee bar setup with multiple machine options",
    metaTitle:
      "Commercial Coffee Machines Explained: Jura, WMF, Eversys, Dr Coffee, Faemina | Boutique Coffee",
    metaDescription:
      "A plain-English guide to the five commercial coffee machine brands used in Melbourne offices. What each is good at and which fits your team.",
    launchMonth: "July 2026",
  },
]

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "cups-per-day-30-person-office",
    title: "How many cups of coffee does a 30-person office drink per day?",
    description:
      "The real daily volume for a 30-person Melbourne office, and what that means for the machine you need.",
    category: "Sizing",
    readTime: "4 min read",
    metaTitle:
      "How Many Cups of Coffee Does a 30-Person Office Drink Per Day? | Boutique Coffee",
    metaDescription:
      "Daily coffee volume for a 30-person Melbourne office, and how to size the right machine for that load.",
  },
  {
    slug: "small-office-coffee-machine-rental-worth-it",
    title: "Is it worth renting a coffee machine for a 10-person office?",
    description:
      "When rental makes sense for a small team and when a pod machine is the honest answer.",
    category: "Rent vs buy",
    readTime: "5 min read",
    metaTitle:
      "Is It Worth Renting a Coffee Machine for a 10-Person Office? | Boutique Coffee",
    metaDescription:
      "When a rental machine pays off for a small Melbourne office, and when it doesn't. Straight maths, no sales pitch.",
  },
  {
    slug: "jura-vs-wmf-mid-size-office",
    title: "Jura vs WMF: which is better for a mid-size Melbourne office?",
    description:
      "Two of the most-asked-about brands, compared on build, service, cup quality, and running costs.",
    category: "Machines",
    readTime: "6 min read",
    metaTitle:
      "Jura vs WMF: Which is Better for a Mid-Size Melbourne Office? | Boutique Coffee",
    metaDescription:
      "Jura and WMF compared for mid-size Melbourne offices. Build, service, cup quality, and running costs, side by side.",
  },
  {
    slug: "hidden-costs-buying-commercial-coffee-machine",
    title: "The hidden costs of buying a commercial coffee machine",
    description:
      "Service, parts, descaling, bean supply, downtime. The line items buyers forget to budget for.",
    category: "Business owner tips",
    readTime: "5 min read",
    metaTitle:
      "Hidden Costs of Buying a Commercial Coffee Machine | Boutique Coffee",
    metaDescription:
      "The service, parts, and downtime costs of owning a commercial coffee machine that most Melbourne buyers never budget for.",
  },
]

export const ARTICLE_CATEGORIES = Array.from(
  new Set(ARTICLES.map((a) => a.category)),
).sort()

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getRelatedGuides(slug: string, limit = 3) {
  return GUIDES.filter((g) => g.slug !== slug)
    .slice(0, limit)
    .map((g) => ({
      title: g.title,
      description: g.description,
      href: `/guides/${g.slug}`,
      tag: g.tag,
      readTime: g.readTime,
    }))
}

export function getRelatedArticles(slug: string, limit = 3) {
  return ARTICLES.filter((a) => a.slug !== slug)
    .slice(0, limit)
    .map((a) => ({
      title: a.title,
      description: a.description,
      href: `/articles/${a.slug}`,
      tag: a.category,
      readTime: a.readTime,
    }))
}
