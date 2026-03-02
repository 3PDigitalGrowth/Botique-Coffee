import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/images/boutique-coffee-logo-transparent-clean.png"
              alt="Boutique Coffee @work"
              width={200}
              height={67}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-background/70 mt-4 max-w-md">
            Curated coffee experiences. Founder-led service. Local roaster partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/founder" className="text-sm text-background/80 hover:text-copper transition-colors">
                  About Chris
                </Link>
              </li>
              <li>
                <Link href="/journey" className="text-sm text-background/80 hover:text-copper transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-serif text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions#creative"
                  className="text-sm text-background/80 hover:text-copper transition-colors"
                >
                  Creative Agencies
                </Link>
              </li>
              <li>
                <Link href="/solutions#tech" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Tech Startups
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#professional"
                  className="text-sm text-background/80 hover:text-copper transition-colors"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#growing"
                  className="text-sm text-background/80 hover:text-copper transition-colors"
                >
                  Growing Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-serif text-lg mb-6">Service Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact#areas" className="text-sm text-background/80 hover:text-copper transition-colors">
                  View All Service Areas
                </Link>
              </li>
              <li className="text-sm text-background/60">Melbourne CBD</li>
              <li className="text-sm text-background/60">Inner Suburbs</li>
              <li className="text-sm text-background/60">Greater Melbourne</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/80">
                <Phone size={16} />
                <a href="tel:0411876625" className="hover:text-copper transition-colors">
                  0411 876 625
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/80">
                <Mail size={16} />
                <a href="mailto:chris@boutiquecoffee.com.au" className="hover:text-copper transition-colors">
                  chris@boutiquecoffee.com.au
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/80 hover:text-copper transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-copper transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-copper transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h3 className="font-serif text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-background/80 hover:text-copper transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="text-sm text-background/60">ABN: 73058783430</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Boutique Coffee at Work. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
