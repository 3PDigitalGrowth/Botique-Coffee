import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArticlePage } from "@/components/content/article-page"
import { ARTICLES, getArticle, getRelatedArticles } from "@/lib/content"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    return {
      title: "Article not found | Boutique Coffee at Work",
    }
  }

  const url = `https://boutiquecoffee.com.au/articles/${article.slug}`

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: "article",
    },
  }
}

export default async function ArticleStubPage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const related = getRelatedArticles(article.slug, 3)

  return (
    <ArticlePage
      slug={article.slug}
      title={article.title}
      description={article.description}
      category={article.category}
      readTime={article.readTime}
      related={related}
    >
      <p>
        <strong>Article coming soon.</strong> This one&apos;s in the pipeline and we&apos;re writing it properly. If you want a heads up when it&apos;s published, the fastest way is to{" "}
        <Link href="/contact">drop Chris a line</Link>{" "}
        and ask him to send it across.
      </p>
      <p>
        In the meantime, if you&apos;ve got a specific question about your team or your setup, ten minutes on the phone with Chris will get you a straight answer without waiting for the article.
      </p>
    </ArticlePage>
  )
}
