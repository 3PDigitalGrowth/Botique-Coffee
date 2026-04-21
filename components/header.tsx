"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isLanding = pathname?.startsWith("/free-trial")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLanding) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/free-trial" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/boutique-coffee-logo-transparent-clean.png"
                alt="Boutique Coffee @work"
                width={200}
                height={64}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="tel:0411876625"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-copper transition-colors"
              >
                <Phone size={16} />
                <span className="hidden md:inline">Call Chris</span>
                <span className="font-medium">0411 876 625</span>
              </a>
              <a
                href="#claim-trial"
                className="inline-flex items-center px-4 md:px-6 py-2 bg-copper text-background text-xs uppercase tracking-wider font-medium rounded-full shadow-md hover:bg-copper-dark hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                Claim Free Trial
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  type NavItem = {
    label: string
    href: string
    highlight?: boolean
    submenu?: { label: string; href: string }[]
  }

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Chris", href: "/founder" },
    { label: "The Coffee", href: "/coffee" },
    {
      label: "Solutions",
      href: "/solutions",
      submenu: [
        { label: "Small office (up to 15)", href: "/solutions#small-office" },
        { label: "Mid-size office (15 to 50)", href: "/solutions#mid-office" },
        { label: "Large office (50+)", href: "/solutions#large-office" },
      ],
    },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Free Trial", href: "/free-trial", highlight: true },
    { label: "Guides", href: "/guides" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/boutique-coffee-logo-transparent-clean.png"
                alt="Boutique Coffee @work"
                width={240}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 ml-auto">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={
                      item.highlight
                        ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-copper/10 border border-copper/40 text-xs uppercase tracking-tight font-semibold text-copper hover:bg-copper hover:text-white transition-all duration-200 whitespace-nowrap leading-tight"
                        : "text-xs uppercase tracking-tight font-medium text-foreground/80 hover:text-copper transition-colors py-2 whitespace-nowrap leading-tight"
                    }
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-lg">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-xs text-foreground/80 hover:text-copper hover:bg-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="hidden lg:flex flex-col items-end gap-1 ml-6 flex-shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2 bg-copper text-background text-xs uppercase tracking-wider font-medium rounded-full shadow-md hover:bg-copper-dark hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                Schedule Consult
              </Link>
              <div className="text-xs text-foreground/60 flex items-center gap-1">
                <span>Prefer to call?</span>
                <a
                  href="tel:0411876625"
                  className="text-copper hover:text-copper-dark transition-colors font-medium"
                >
                  0411 876 625
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-copper transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={
                item.highlight
                  ? "border-b border-foreground/10 bg-copper/5"
                  : "border-b border-foreground/10"
              }
            >
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  item.highlight
                    ? "block py-4 px-2 text-lg font-semibold text-copper hover:text-copper-dark transition-colors"
                    : "block py-4 text-lg text-foreground hover:text-copper transition-colors"
                }
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="pl-4 pb-2">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-foreground/70 hover:text-copper transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-6 py-3 bg-copper text-background text-center text-sm uppercase tracking-wider rounded-full shadow-md hover:bg-copper-dark hover:shadow-lg transition-all"
          >
            Schedule a Coffee Consult
          </Link>
          <a
            href="tel:0411876625"
            className="mt-3 text-center text-xs text-foreground/60 hover:text-copper transition-colors"
          >
            Prefer to talk first? 0411 876 625
          </a>
        </div>
      </div>
    </>
  )
}
