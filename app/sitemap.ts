import type { MetadataRoute } from "next"
import { GUIDES, ARTICLES } from "@/lib/content"
import { getAllPosts } from "@/lib/blog"

const SITE_URL = "https://boutiquecoffee.com.au"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/founder`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/coffee`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/free-trial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // Blog posts — drafts excluded (getAllPosts default).
  const blogPosts = getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...guideRoutes, ...articleRoutes, ...blogRoutes]
}
