"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function FeaturedArticle() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <article
      ref={ref}
      className={`relative min-h-[85vh] flex items-end transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src="/featured-coffee-culture-article.jpg"
          alt="The Art of Coffee Rituals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/90 via-warm-brown/40 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 pb-16 md:pb-20">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-white/80 font-sans">Featured · Coffee Culture</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight text-balance">
            How to Choose a Coffee Partner That Understands Your Company Culture
          </h1>
          <p className="text-sm uppercase tracking-wider text-white/80 font-sans">
            By Chris Prokopiou · March 15, 2024
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl text-pretty">
            Choosing the right coffee partner is about more than just beans and machines - it's about finding someone who
            truly understands your company culture and values. At Chris Coffee, we believe that great workplace coffee
            experiences begin with understanding your team's unique needs, preferences, and daily rhythms. From the
            initial consultation to ongoing support, we take time to learn what makes your business tick. Whether you're
            a fast-paced startup that needs quick service or a creative agency seeking artisan blends, the right partner
            should align with your vision and enhance your workplace culture, not just supply coffee.
          </p>
          <Link
            href="/blog/coffee-rituals"
            className="inline-block text-copper hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-sans mt-4"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}
