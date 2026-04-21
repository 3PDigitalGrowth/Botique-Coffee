"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, MapPin, ShieldCheck, Truck } from "lucide-react"

export function TrialHero() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="claim-trial"
      className="relative w-full overflow-hidden pt-24 md:pt-28 pb-12 md:pb-20"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/modern-professional-espresso-machine-in-corporate.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-black/30" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Headline + value props */}
          <div className="lg:col-span-3 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper/20 border border-copper/40 mb-6">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span className="text-xs uppercase tracking-widest text-copper font-medium">
                Exclusively for Victorian businesses
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5 text-balance">
              Try a premium coffee machine in your workplace.
              <span className="block text-copper mt-2">Free for 7 days.</span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl mb-6 max-w-xl leading-relaxed text-pretty">
              Delivered, installed, and dialled-in on-site by Chris, so your team and clients get café-quality coffee from day one. No cards. No lock-in.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 max-w-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-sm text-white/90 whitespace-nowrap">No card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-sm text-white/90 whitespace-nowrap">Free delivery &amp; install</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-sm text-white/90 whitespace-nowrap">We pick up if it's not for you</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-sm text-white/70">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-copper/40 border-2 border-white/20" />
                <div className="w-8 h-8 rounded-full bg-copper/60 border-2 border-white/20" />
                <div className="w-8 h-8 rounded-full bg-copper/80 border-2 border-white/20" />
              </div>
              <span>Trusted by 100+ Victorian teams across Melbourne, Geelong, Ballarat and beyond.</span>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="lg:col-span-2 w-full">
            <div className="bg-background rounded-2xl shadow-2xl p-6 md:p-7 border border-white/10">
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
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-1">
                      Five fields. No card.
                    </p>
                    <h2 className="font-serif text-2xl md:text-[1.6rem] text-foreground leading-tight">
                      Chris calls you back within 1 business day.
                    </h2>
                  </div>

                  <form className="space-y-3.5" onSubmit={handleSubmit}>
                    <div>
                      <Label htmlFor="trial-business" className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block">
                        Business name
                      </Label>
                      <Input
                        id="trial-business"
                        type="text"
                        placeholder="Your company"
                        className="h-11 px-4 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="trial-email" className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block">
                        Work email
                      </Label>
                      <Input
                        id="trial-email"
                        type="email"
                        placeholder="you@company.com.au"
                        className="h-11 px-4 rounded-lg"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="trial-phone" className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block">
                          Phone
                        </Label>
                        <Input
                          id="trial-phone"
                          type="tel"
                          placeholder="0411 000 000"
                          className="h-11 px-4 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="trial-postcode" className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block">
                          VIC postcode
                        </Label>
                        <Input
                          id="trial-postcode"
                          type="text"
                          inputMode="numeric"
                          pattern="3[0-9]{3}"
                          placeholder="3000"
                          className="h-11 px-4 rounded-lg"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="trial-team" className="text-xs uppercase tracking-wide text-foreground/70 mb-1 block">
                        Team size
                      </Label>
                      <Select>
                        <SelectTrigger id="trial-team" className="h-11 rounded-lg">
                          <SelectValue placeholder="How many people drink coffee?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1–10 people</SelectItem>
                          <SelectItem value="11-25">11–25 people</SelectItem>
                          <SelectItem value="26-50">26–50 people</SelectItem>
                          <SelectItem value="51-100">51–100 people</SelectItem>
                          <SelectItem value="100+">100+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-copper hover:bg-copper-dark text-white border-none shadow-lg h-12 text-base rounded-lg font-medium"
                    >
                      Start my 7 days, no card, no lock-in
                    </Button>

                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      Chris responds personally within 1 business day. By submitting, you agree to our privacy policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
