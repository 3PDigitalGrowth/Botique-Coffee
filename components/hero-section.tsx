"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Sparkles, ShieldCheck, Truck, Check } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
        setScrollY(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} className="relative flex flex-col min-h-[calc(100svh-4.5rem)] w-full overflow-hidden pt-20 md:pt-24 pb-8 md:pb-10">
      {/* Parallax Image */}
      <div
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          transform: `translateY(${scrollY * 30}%)`,
          transition: "transform 0.1s ease-out",
          backgroundImage: "url('/hero-chris-coffee-shop.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Darker gradient overlay to keep copy legible with the new two-column layout */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35 md:from-black/75 md:via-black/45 md:to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6">
        <div className="w-full grid lg:grid-cols-5 gap-6 lg:gap-10 items-center">
          {/* Left: Copy */}
          <div
            className="lg:col-span-3 text-white"
            style={{
              opacity: 1 - scrollY * 1.5,
              transform: `translateY(${scrollY * 30}px)`,
              transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
            }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper text-white mb-6 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap">
                30-day free trial · Melbourne workplaces
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl text-white mb-4 leading-[1.05] text-balance">
              Premium coffee machines, rented and managed for your Melbourne workplace
            </h1>

            <p className="text-white/90 text-base md:text-lg lg:text-lg xl:text-xl mb-5 max-w-xl leading-relaxed text-pretty">
              From $35 a week. Machine, install, training, beans, and servicing all included. Try it free for 30 days, no card, no lock-in.
            </p>

            {/* Trust row */}
            <div className="grid sm:grid-cols-3 gap-3 mb-5 max-w-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-sm text-white/90">No card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-sm text-white/90">Free delivery &amp; install</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-sm text-white/90">We uplift if it's not for you</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-white/75">
                Founder-led by Chris. No call centres. No corporate runaround.
              </p>
              <a
                href="tel:0411876625"
                className="text-sm text-white/80 hover:text-copper transition-colors whitespace-nowrap"
              >
                Or call Chris on <span className="font-medium">0411 876 625</span>
              </a>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="lg:col-span-2 w-full">
            <div className="bg-background rounded-2xl shadow-2xl p-5 md:p-6 border border-white/10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-copper/15 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-copper" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">You're in.</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Chris will be in touch within 1 business day to confirm your machine, delivery slot and install. Keep an eye on your inbox.
                  </p>
                  <a
                    href="tel:0411876625"
                    className="inline-flex items-center gap-2 mt-5 text-copper hover:text-copper-dark transition-colors text-sm font-medium"
                  >
                    Prefer to talk now? Call Chris on 0411 876 625
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-1">
                      Start your free trial
                    </p>
                    <h2 className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                      Book a 10-minute consult
                    </h2>
                  </div>

                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <div>
                      <Label
                        htmlFor="home-business"
                        className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block"
                      >
                        Business name
                      </Label>
                      <Input
                        id="home-business"
                        type="text"
                        placeholder="Your company"
                        className="h-10 px-4 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="home-email"
                        className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block"
                      >
                        Work email
                      </Label>
                      <Input
                        id="home-email"
                        type="email"
                        placeholder="you@company.com.au"
                        className="h-10 px-4 rounded-lg"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label
                          htmlFor="home-phone"
                          className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block"
                        >
                          Phone
                        </Label>
                      <Input
                        id="home-phone"
                        type="tel"
                        placeholder="0411 000 000"
                        className="h-10 px-4 rounded-lg"
                        required
                      />
                      </div>
                      <div>
                        <Label
                          htmlFor="home-postcode"
                          className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block"
                        >
                          Postcode
                        </Label>
                        <Input
                          id="home-postcode"
                          type="text"
                          inputMode="numeric"
                          pattern="3[0-9]{3}"
                          placeholder="3000"
                        className="h-10 px-4 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="home-team"
                        className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block"
                      >
                        Team size
                      </Label>
                      <Select>
                        <SelectTrigger id="home-team" className="h-10 rounded-lg">
                          <SelectValue placeholder="How many people drink coffee?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-15">1 to 15 people (small office)</SelectItem>
                          <SelectItem value="15-50">15 to 50 people (mid-size office)</SelectItem>
                          <SelectItem value="50+">50+ people (large office)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-copper hover:bg-copper-dark text-white border-none shadow-lg h-12 text-base rounded-lg font-medium"
                    >
                      Start my 30-day free trial
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      Prefer to talk first?{" "}
                      <a
                        href="tel:0411876625"
                        className="text-copper hover:text-copper-dark font-medium transition-colors"
                      >
                        Call Chris on 0411 876 625
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{
          opacity: 1 - scrollY * 3,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
