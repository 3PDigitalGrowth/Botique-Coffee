"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const inclusions = [
  {
    title: "A commercial-grade machine",
    desc: "Matched to your team size, space and power. The same machines used by boutique Melbourne cafés.",
  },
  {
    title: "Free delivery &amp; install",
    desc: "Our team handles it all, on-site. We even run a quick plumbing/power check before the day.",
  },
  {
    title: "10-minute team training",
    desc: "Simple, friendly and practical. Your whole team will be pulling great espresso, same afternoon.",
  },
  {
    title: "Fresh, locally roasted beans",
    desc: "A starter supply from Victoria's best roasters, included in your 7-day trial. Milk options sorted too.",
  },
  {
    title: "Maintenance during trial",
    desc: "We check in, clean, and tune the machine during the 7 days so it's performing at its best.",
  },
  {
    title: "Chris on call, personally",
    desc: "Founder-level support. One number, one human. No call centres, no ticket queues.",
  },
]

export function TrialIncluded() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[oklch(0.97_0.02_60)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] lg:sticky lg:top-24 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            <Image
              src="/professional-coffee-machine-installation.jpg"
              alt="Chris installing a coffee machine in a Victorian workplace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <p className="text-white font-serif text-xl md:text-2xl leading-snug">
                "We don't drop off a box. We set you up to win every morning."
              </p>
              <p className="text-white/80 text-sm mt-2">Chris Prokopiou, Founder</p>
            </div>
          </div>

          <div
            className="transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "150ms",
            }}
          >
            <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-3">
              Everything included, zero cost for 7 days
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              A turnkey coffee setup, on the house
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              When we say free trial, we mean it. No setup fees. No hidden delivery charges. No minimum bean orders. Just great coffee your team will actually talk about.
            </p>

            <ul className="space-y-5">
              {inclusions.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-4 items-start transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(15px)",
                    transitionDelay: `${200 + index * 75}ms`,
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-copper" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="font-medium text-foreground text-base mb-1"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 md:p-7 rounded-2xl bg-copper text-white shadow-lg">
              <p className="font-serif text-xl md:text-2xl font-semibold leading-tight mb-1">
                Total retail value: $2,800+
              </p>
              <p className="text-base md:text-lg font-medium leading-snug text-white/95">
                Yours free for 7 days. No card, no bean minimums, no strings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
