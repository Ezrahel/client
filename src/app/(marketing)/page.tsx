import type { Metadata } from "next";
import Link from "next/link";
import {
  AtSign,
  Forward,
  Gauge,
  Globe2,
  Mail,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/marketing/product-mockup";
import { PricingCard } from "@/components/marketing/pricing-card";
import { PLANS } from "@/lib/constants/plans";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Professional business email",
  description: SITE.description,
};

const TRUST = [
  "Custom business email",
  "Domain setup assistance",
  "Secure mailboxes",
  "Simple management",
  "Nigerian-focused support",
];

const STEPS = [
  {
    n: "01",
    title: "Choose your plan",
    body: "Pick the mailbox capacity that fits your team today.",
  },
  {
    n: "02",
    title: "Connect your domain",
    body: "Use a domain you own — or buy one and point it here.",
  },
  {
    n: "03",
    title: "Create your mailboxes",
    body: "Spin up info@, sales@, and more in a few minutes.",
  },
  {
    n: "04",
    title: "Start sending and receiving",
    body: "Connect Outlook, Gmail apps, Apple Mail, or webmail.",
  },
];

const FEATURES = [
  { icon: Globe2, title: "Custom domain email", body: "Email that matches your business name." },
  { icon: Mail, title: "Multiple mailboxes", body: "Create addresses for each role or teammate." },
  { icon: AtSign, title: "Aliases", body: "Route alternate addresses without extra mailboxes." },
  { icon: Forward, title: "Forwarding", body: "Send copies where your team already works." },
  { icon: Shield, title: "Spam protection", body: "Keep junk out of inboxes that matter." },
  { icon: Gauge, title: "Usage monitoring", body: "See storage and mailbox activity at a glance." },
  { icon: Wrench, title: "DNS assistance", body: "Clear records and guided verification." },
  { icon: Sparkles, title: "Account management", body: "Plans, billing, and settings in one place." },
];

const FAQS_PREVIEW = [
  {
    q: "What is business email?",
    a: "Email on your own domain — like you@yourcompany.ng — instead of a free personal address.",
  },
  {
    q: "Can I use my existing domain?",
    a: "Yes. Connect a domain you already own and we will walk you through DNS setup.",
  },
  {
    q: "Can I use Gmail or Outlook with my mailbox?",
    a: "Yes. Use standard IMAP/SMTP settings with Outlook, Apple Mail, Thunderbird, or mobile apps.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-medium text-muted">{SITE.legalName}</p>
            <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Professional email for businesses that mean business.
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted sm:text-lg">
              Get reliable email at your own domain without paying for an entire
              office suite.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register">
                <Button variant="accent" size="lg">
                  Get started
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View plans
                </Button>
              </Link>
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-4 py-5 sm:px-6">
          {TRUST.map((item) => (
            <p
              key={item}
              className="inline-flex items-center gap-2 text-sm text-ink"
            >
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="product" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            How it works
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Complicated infrastructure, made simple enough for any business owner.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="border-t border-border pt-4">
                <p className="font-mono text-xs text-muted">{step.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Everything you need to run business email
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Domains, mailboxes, DNS help, and billing — without the IT degree.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="size-5 text-ink" aria-hidden />
                <h3 className="mt-3 font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Simple yearly plans
              </h2>
              <p className="mt-2 text-muted">
                Priced in Naira. Upgrade when your team grows.
              </p>
            </div>
            <Link href="/pricing" className="text-sm font-medium text-ink underline-offset-4 hover:underline">
              Compare plans
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Your business email should not require an IT degree.
            </h2>
            <p className="mt-4 text-muted">
              We handle the complicated setup — DNS records, mailbox provisioning,
              and connection settings — so you can focus on running your business.
            </p>
          </div>
          <ul className="mt-8 space-y-4 lg:mt-0">
            {[
              "Guided domain connection with copy-ready DNS records",
              "Clear status for every verification step",
              "Customer-friendly IMAP and SMTP instructions",
              "Support that understands Nigerian business domains",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQS_PREVIEW.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-muted transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-2 max-w-2xl text-sm text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <Link
            href="/faq"
            className="mt-6 inline-block text-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            View all questions
          </Link>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Give your business an email address worth trusting.
          </h2>
          <p className="mt-3 max-w-lg text-white/70">
            Create your account, connect a domain, and send from your company name.
          </p>
          <Link href="/register" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-white text-ink hover:bg-white/90 shadow-[inset_0_-2px_0_0_#16FF00]"
            >
              Create your business email
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
