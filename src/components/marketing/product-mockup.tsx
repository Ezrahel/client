import { Check } from "lucide-react";

export function ProductMockup() {
  return (
    <div className="rounded-md border border-border bg-white p-5 shadow-[0_1px_2px_rgba(51,51,51,0.04)]">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <p className="font-mono text-sm font-medium text-ink">yourcompany.ng</p>
        <span className="inline-flex items-center gap-1.5 rounded border border-[color-mix(in_srgb,#16FF00_45%,#e5e7eb)] bg-[color-mix(in_srgb,#16FF00_14%,white)] px-2 py-0.5 text-xs font-medium text-ink">
          <Check className="size-3" aria-hidden />
          Domain connected
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {["info", "sales", "admin"].map((local) => (
          <li
            key={local}
            className="flex items-center justify-between rounded-md border border-border px-3 py-2.5"
          >
            <span className="font-mono text-sm text-ink">
              {local}@yourcompany.ng
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              Active
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
