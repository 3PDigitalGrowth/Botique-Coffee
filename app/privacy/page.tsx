import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/content/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy | Boutique Coffee at Work",
  description:
    "How Boutique Coffee at Work collects, uses, and stores the information you share through our contact form and enquiries.",
  alternates: {
    canonical: "https://boutiquecoffee.com.au/privacy",
  },
}

export default function PrivacyPage() {
  const lastUpdated = "April 2026"

  return (
    <main className="bg-background">
      <header className="pt-24 md:pt-28 pb-10 md:pb-14 px-6 md:px-12 lg:px-16 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
            className="mb-6"
          />
          <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-4">
            Privacy Policy
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance leading-tight">
            How we handle your information
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Last updated {lastUpdated}
          </p>
        </div>
      </header>

      <div className="px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <article className="max-w-3xl mx-auto">
          <div className="content-prose">
            <p>
              This is a short, plain-English summary of how Boutique Coffee at Work (ABN 73 058 783 430) handles the information you share with us through our website, contact form, and direct enquiries. We&apos;re a small Melbourne family business, so this policy reflects the reality of how we actually work, not a corporate boilerplate.
            </p>

            <h2>What we collect</h2>
            <p>When you fill in the contact form or email us directly, we collect:</p>
            <ul>
              <li>Your name</li>
              <li>Your business name</li>
              <li>Your work email</li>
              <li>Your phone number</li>
              <li>If you provide them: location, team size, and comments</li>
            </ul>
            <p>
              We also use basic web analytics (page views, device type, referrer) through Vercel Analytics to understand which pages are useful. This data is aggregated and doesn&apos;t personally identify you.
            </p>

            <h2>What we use it for</h2>
            <p>Your information is used for exactly one thing: responding to your enquiry. Specifically:</p>
            <ul>
              <li>Chris will call or email you back to discuss your workplace coffee needs</li>
              <li>If you become a client, we keep your contact details on file for service scheduling, deliveries, and ongoing support</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your information. We do <strong>not</strong> share it with third parties for marketing. We do <strong>not</strong> add you to a newsletter without asking first.
            </p>

            <h2>Who sees it</h2>
            <p>
              Enquiries are emailed directly to Chris at chris@boutiquecoffee.com.au, with a copy sent to our digital agency (3P Digital Growth) for visibility during our current site ramp-up. No one else sees your details.
            </p>
            <p>
              The email itself is delivered through Resend, a transactional email service that processes the message on our behalf. Resend doesn&apos;t use enquiry content for marketing or any other purpose.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Enquiry emails live in Chris&apos;s inbox. If you become a client, your contact details stay on file for the life of the client relationship. If you don&apos;t become a client and haven&apos;t been in touch for 24 months, we delete your enquiry.
            </p>

            <h2>Your rights</h2>
            <p>You can ask us to:</p>
            <ul>
              <li>See what information we hold about you</li>
              <li>Correct anything that&apos;s wrong</li>
              <li>Delete your information entirely</li>
            </ul>
            <p>
              Email{" "}
              <a href="mailto:chris@boutiquecoffee.com.au">chris@boutiquecoffee.com.au</a>{" "}
              with the subject line &ldquo;Privacy request&rdquo; and Chris will handle it personally within one business day.
            </p>

            <h2>Cookies</h2>
            <p>
              Our site uses essential cookies only (for navigation and security). We don&apos;t use tracking cookies or third-party advertising pixels.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we materially change how we handle information, we&apos;ll update this page and bump the &ldquo;last updated&rdquo; date at the top. For substantive changes, we&apos;ll note what changed.
            </p>

            <h2>Questions</h2>
            <p>
              Email{" "}
              <a href="mailto:chris@boutiquecoffee.com.au">chris@boutiquecoffee.com.au</a>{" "}
              or call 0411 876 625. Chris handles privacy questions directly.
            </p>
          </div>

          <div className="mt-14 md:mt-16 pt-8 border-t border-border">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-copper hover:text-copper-dark font-medium transition-colors"
            >
              Back to contact
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
