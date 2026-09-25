import type { Metadata } from "next";
import { PricingCard } from "@/components/marketing/pricing-card";
import { PLANS } from "@/lib/constants/plans";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Business email plans for Nigerian SMEs. Starter, Business, and Pro — priced yearly in Naira.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Pricing</h1>
      <p className="mt-3 max-w-xl text-muted">
        Transparent yearly plans. No surprise add-ons for the basics — mailboxes,
        DNS guidance, and IMAP/SMTP access are included.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
      <p className="mt-10 text-sm text-muted">
        Plan limits and pricing are configurable and may change. Final entitlements
        are confirmed at checkout.
      </p>
    </div>
  );
}
