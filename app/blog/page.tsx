import { BlogHero } from "@/components/blog-hero"
import { FeaturedArticle } from "@/components/featured-article"
import { BlogArticles } from "@/components/blog-articles"
import { BlogNewsletter } from "@/components/blog-newsletter"
import { BlogFinalCta } from "@/components/blog-final-cta"

export default function BlogPage() {
  return (
    <main className="bg-cream">
      <BlogHero />
      {/* </CHANGE> */}
      <FeaturedArticle />
      <BlogArticles />
      <BlogNewsletter />
      <BlogFinalCta />
    </main>
  )
}
