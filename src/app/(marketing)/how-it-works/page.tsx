import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Choose a plan, connect your domain, create mailboxes, and start sending business email.",
};

const STEPS = [
  {
    title: "Choose your plan",
    body: "Select Starter, Business, or Pro based on how many mailboxes you need. You can upgrade later.",
  },
  {
    title: "Connect your domain",
    body: "Add a domain you already own. We show exactly which DNS records to create — with copy buttons and plain-language explanations.",
  },
  {
    title: "Create your mailboxes",
    body: "Pick an address prefix, set a password, choose storage, and provision. Connect any standard email client.",
  },
  {
    title: "Start sending and receiving",
    body: "Once DNS verifies, your business email is live. Monitor usage and manage addresses from the dashboard.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">
        How it works
      </h1>
      <p className="mt-3 text-muted">
        Four steps from signup to a working company inbox.
      </p>
      <ol className="mt-12 space-y-8">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border font-mono text-sm text-ink">
              {i + 1}
            </span>
            <div>
              <h2 className="font-semibold text-ink">{step.title}</h2>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <Link href="/register">
          <Button variant="accent">Get started</Button>
        </Link>
      </div>
    </div>
  );
}
