import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  type BlogPost,
} from "@/lib/blog"
import { BlogTemplate } from "@/components/blog/blog-template"
import { getMdxComponents } from "@/components/blog/mdx-components"

const SITE_URL = "https://boutiquecoffee.com.au"

type Params = { slug: string }
type PageProps = { params: Promise<Params> }

export function generateStaticParams(): Params[] {
  return getAllSlugs({ includeDrafts: true }).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const fm = post.frontmatter
  const url = `${SITE_URL}/blog/${fm.slug}`
  const isDraft = fm.draft === true

  const base: Metadata = {
    title: fm.metaTitle,
    description: fm.metaDescription,
    openGraph: {
      title: fm.metaTitle,
      description: fm.metaDescription,
      type: "article",
      url,
      images: fm.heroImage ? [{ url: fm.heroImage }] : undefined,
      publishedTime: fm.date,
      authors: [fm.author],
    },
    twitter: {
      card: "summary_large_image",
      title: fm.metaTitle,
      description: fm.metaDescription,
      images: fm.heroImage ? [fm.heroImage] : undefined,
    },
  }

  if (isDraft) {
    base.robots = { index: false, follow: false }
  } else {
    base.alternates = { canonical: url }
  }

  return base
}

function buildJsonLd(post: BlogPost) {
  const fm = post.frontmatter
  const url = `${SITE_URL}/blog/${fm.slug}`

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    description: fm.metaDescription,
    author: { "@type": "Person", name: fm.author },
    datePublished: fm.date,
    dateModified: fm.date,
    image: fm.heroImage ? `${SITE_URL}${fm.heroImage}` : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "Boutique Coffee at Work",
      url: SITE_URL,
    },
  }

  const breadcrumbs = fm.breadcrumb?.length ? fm.breadcrumb : ["Blog", fm.title]
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...breadcrumbs.map((name, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name,
        item:
          i === 0
            ? `${SITE_URL}/blog`
            : i === breadcrumbs.length - 1
            ? url
            : undefined,
      })),
    ],
  }

  const faq = fm.faqSchema?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: fm.faqSchema.map((qa) => ({
          "@type": "Question",
          name: qa.question,
          acceptedAnswer: { "@type": "Answer", text: qa.answer },
        })),
      }
    : null

  return { article, breadcrumb, faq }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.frontmatter.slug, 3)
  const { article, breadcrumb, faq } = buildJsonLd(post)
  const pagePath = `/blog/${post.frontmatter.slug}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faq ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      ) : null}

      <BlogTemplate post={post} related={related}>
        <MDXRemote
          source={post.content}
          components={getMdxComponents(pagePath)}
        />
      </BlogTemplate>
    </>
  )
}
