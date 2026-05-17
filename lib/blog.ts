import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type BlogFAQ = { question: string; answer: string }

export type BlogReference = {
  title: string
  url: string
  note?: string
}

export type BlogInternalLink = {
  url: string
  anchor: string
}

export type BlogFrontmatter = {
  title: string
  slug: string
  date: string
  author: string
  readTime: string

  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  keywords?: string[]

  tags?: string[]
  heroImage?: string
  breadcrumb?: string[]

  faqSchema?: BlogFAQ[]
  internalLinks?: BlogInternalLink[]
  references?: BlogReference[]

  draft?: boolean
}

export type BlogPost = {
  frontmatter: BlogFrontmatter
  content: string
  /** First ~160 chars of body (markdown stripped enough for a list excerpt) */
  excerpt: string
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

function safeReadDir(): string[] {
  try {
    return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))
  } catch {
    return []
  }
}

function stripMd(body: string): string {
  return body
    .replace(/<[^>]+>/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[#>\-*]+\s+/gm, "")
    .replace(/\*\*|__|\*|_/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function buildExcerpt(content: string, length = 160): string {
  const text = stripMd(content)
  if (text.length <= length) return text
  const cut = text.slice(0, length)
  const lastSpace = cut.lastIndexOf(" ")
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…"
}

function normalizeFrontmatter(fm: Record<string, unknown>): BlogFrontmatter {
  const get = <T,>(key: string, fallback: T): T =>
    (fm[key] as T) ?? fallback

  const draft = fm.draft === true

  let date = String(fm.date ?? "")
  if (!date) date = new Date().toISOString().slice(0, 10)

  return {
    title: String(fm.title ?? "Untitled"),
    slug: String(fm.slug ?? ""),
    date,
    author: String(fm.author ?? "Boutique Coffee"),
    readTime: String(fm.readTime ?? ""),

    metaTitle: String(fm.metaTitle ?? fm.title ?? "Untitled"),
    metaDescription: String(fm.metaDescription ?? ""),
    primaryKeyword: String(fm.primaryKeyword ?? ""),
    keywords: get<string[] | undefined>("keywords", undefined),

    tags: get<string[] | undefined>("tags", undefined),
    heroImage: get<string | undefined>("heroImage", undefined),
    breadcrumb: get<string[] | undefined>("breadcrumb", undefined),

    faqSchema: get<BlogFAQ[] | undefined>("faqSchema", undefined),
    internalLinks: get<BlogInternalLink[] | undefined>("internalLinks", undefined),
    references: get<BlogReference[] | undefined>("references", undefined),

    draft,
  }
}

function loadPostFromFile(filename: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, filename)
  let raw: string
  try {
    raw = fs.readFileSync(fullPath, "utf8")
  } catch {
    return null
  }
  const parsed = matter(raw)
  const frontmatter = normalizeFrontmatter(parsed.data)
  const slug = frontmatter.slug || filename.replace(/\.mdx$/, "")
  return {
    frontmatter: { ...frontmatter, slug },
    content: parsed.content,
    excerpt: buildExcerpt(parsed.content),
  }
}

export type GetPostsOptions = {
  /** Default true — drafts excluded from index, sitemap, related queries. */
  includeDrafts?: boolean
}

export function getAllPosts({ includeDrafts = false }: GetPostsOptions = {}): BlogPost[] {
  const files = safeReadDir()
  const posts: BlogPost[] = []
  for (const file of files) {
    const post = loadPostFromFile(file)
    if (!post) continue
    if (!includeDrafts && post.frontmatter.draft) continue
    posts.push(post)
  }
  posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
  return posts
}

export function getAllSlugs({ includeDrafts = true }: GetPostsOptions = {}): string[] {
  return getAllPosts({ includeDrafts }).map((p) => p.frontmatter.slug)
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = safeReadDir()
  for (const file of files) {
    const post = loadPostFromFile(file)
    if (post && post.frontmatter.slug === slug) return post
  }
  return null
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const all = getAllPosts({ includeDrafts: false }).filter(
    (p) => p.frontmatter.slug !== slug,
  )
  const current = getPostBySlug(slug)
  if (!current || !current.frontmatter.tags?.length) return all.slice(0, limit)

  const tagSet = new Set(current.frontmatter.tags)
  const scored = all.map((p) => ({
    post: p,
    score: (p.frontmatter.tags ?? []).filter((t) => tagSet.has(t)).length,
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.post)
}
