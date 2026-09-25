import Link from "next/link";
import type { Plan } from "@/types";
import { Button } from "@/components/ui/button";
import { formatNaira } from "@/lib/formatting";
import { Check } from "lucide-react";
import { cn } from "@/lib/formatting";

export function PricingCard({
  plan,
  ctaHref = "/register",
  showCta = true,
}: {
  plan: Plan;
  ctaHref?: string;
  showCta?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-md border border-border bg-white p-6",
        plan.highlighted && "accent-ring relative",
      )}
    >
      {plan.highlighted ? (
        <span className="absolute -top-2.5 left-4 rounded border border-border bg-white px-2 py-0.5 text-xs font-medium text-ink">
          Most popular
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
      <p className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-ink">
          {formatNaira(plan.priceYearlyNgn)}
        </span>
        <span className="text-sm text-muted">/year</span>
      </p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink">
            <Check
              className="mt-0.5 size-4 shrink-0 text-ink"
              strokeWidth={2.5}
              aria-hidden
            />
            <span>
              <span className="sr-only">Included: </span>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      {showCta ? (
        <Link href={`${ctaHref}?plan=${plan.slug}`} className="mt-8 block">
          <Button
            variant={plan.highlighted ? "accent" : "secondary"}
            className="w-full"
          >
            Choose {plan.name}
          </Button>
        </Link>
      ) : null}
    </article>
  );
}
