"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const articles = [
  {
    id: 1,
    title: "Why Your Startup Needs More Than Just a Coffee Machine",
    excerpt:
      "In the fast-paced world of startups, coffee is more than fuel - it's a cultural touchstone. Discover why investing in quality coffee experiences can boost team morale, attract top talent, and create moments of connection that spark innovation. We explore how the right coffee setup becomes an extension of your company values and a catalyst for building the collaborative culture that drives startup success.",
    category: "Workplace Culture",
    author: "Chris Prokopiou",
    date: "March 12, 2024",
    image: "/blog-premium-beans.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Featuring Melbourne's Best Artisan Roasters",
    excerpt:
      "Meet the passionate roasters behind every cup we serve. From small-batch specialists to sustainability pioneers.",
    category: "Partners",
    author: "Sarah Mitchell",
    date: "March 10, 2024",
    image: "/blog-espresso-science.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "The Hidden Benefits of Workplace Coffee Culture",
    excerpt: "Beyond caffeine: how intentional coffee moments drive collaboration, creativity, and employee wellbeing.",
    category: "Culture",
    author: "Emma Rodriguez",
    date: "March 8, 2024",
    image: "/blog-community-coffee.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Coffee Machine ROI: How Quality Coffee Impacts Employee Retention",
    excerpt:
      "The numbers might surprise you. Quality workplace coffee isn't just a perk - it's an investment in your team's satisfaction and loyalty. We break down the real ROI of premium coffee programs, from reduced turnover costs to improved productivity. Learn how companies are using coffee as a strategic tool for talent retention and discover why employees consistently rank quality coffee among their top workplace amenities.",
    category: "Business Impact",
    author: "James Park",
    date: "March 5, 2024",
    image: "/blog-sustainability.jpg",
    size: "medium",
  },
  {
    id: 5,
    title: "Supporting Local: Why We Partner with Artisan Roasters",
    excerpt: "Our commitment to Melbourne's coffee community and the stories behind our roaster partnerships.",
    category: "Partnerships",
    author: "Chris Prokopiou",
    date: "March 3, 2024",
    image: "/blog-craftsmanship.jpg",
    size: "small",
  },
  {
    id: 6,
    title: "Building Better Workplaces: The Role of Coffee and Community",
    excerpt:
      "How shared coffee experiences create the informal connections that make great company cultures thrive. From morning rituals to afternoon breaks, coffee moments are where relationships deepen, ideas flow, and teams bond beyond formal meetings. Explore the psychology of workplace coffee culture and learn practical strategies for designing spaces and experiences that bring your team together organically.",
    category: "Culture",
    author: "David Chen",
    date: "March 1, 2024",
    image: "/blog-coffee-spaces.jpg",
    size: "medium",
  },
  {
    id: 7,
    title: "The Art of Coffee Selection: How We Curate for Your Business",
    excerpt: "Behind the scenes of our coffee curation process and matching the right beans to your team's taste.",
    category: "Selection",
    author: "Olivia Thompson",
    date: "February 28, 2024",
    image: "/blog-premium-beans.jpg",
    size: "small",
  },
]

function ArticleCard({ article, index }: { article: (typeof articles)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const sizeClasses = {
    large: "md:col-span-8 lg:col-span-9",
    medium: "md:col-span-6 lg:col-span-6",
    small: "md:col-span-4 lg:col-span-3",
  }

  return (
    <article
      ref={ref}
      className={`${sizeClasses[article.size as keyof typeof sizeClasses]} transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${article.id}`} className="block group">
        <div className="relative aspect-[4/3] overflow-hidden mb-4">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-copper font-sans">{article.category}</p>
          <h2
            className={`font-serif text-2xl lg:text-3xl text-warm-brown leading-tight transition-colors duration-300 text-balance ${
              isHovered ? "text-copper" : ""
            }`}
          >
            {article.title}
          </h2>
          <p className="text-warm-brown/70 leading-relaxed text-pretty">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-warm-brown/60 font-sans pt-2">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
          <div className="pt-2">
            <span className="text-copper text-sm uppercase tracking-wider font-sans">Read More →</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export function BlogArticles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4">Recent Articles</h2>
        <p className="text-warm-brown/70 text-lg max-w-2xl text-pretty">
          Insights on workplace culture, coffee quality, and building better businesses through intentional coffee
          experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  )
}
