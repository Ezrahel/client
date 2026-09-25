"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CreditCard,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Settings,
  X,
  Receipt,
} from "lucide-react";
import { Logo } from "@/components/marketing/logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/auth-context";
import { cn } from "@/lib/formatting";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/domains", label: "Domains", icon: Globe2 },
  { href: "/dashboard/mailboxes", label: "Mailboxes", icon: Mail },
  { href: "/dashboard/subscription", label: "Subscription", icon: CreditCard },
  { href: "/dashboard/billing", label: "Billing", icon: Receipt },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/support", label: "Support", icon: HelpCircle },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { session, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!loading && !session) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [loading, session, router, pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (loading || !session) {
    return (
      <div className="flex min-h-full items-center justify-center bg-surface">
        <div
          className="size-8 animate-spin rounded-full border-2 border-ink border-r-transparent"
          role="status"
          aria-label="Loading"
        />
      </div>
    );
  }

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  const nav = (
    <nav className="flex flex-col gap-0.5" aria-label="Dashboard">
      {NAV.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/dashboard"
            ? pathname === href
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
              active
                ? "bg-ink text-white"
                : "text-muted hover:bg-surface hover:text-ink",
            )}
          >
            <Icon className="size-4 shrink-0" aria-hidden />
            {label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-full bg-surface">
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-border bg-white p-4 lg:flex">
        <Logo className="mb-6" />
        {nav}
        <div className="mt-auto border-t border-border pt-4">
          <p className="truncate text-xs text-muted">{session.organization.name}</p>
          <p className="truncate text-sm text-ink">{session.user.email}</p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 w-full justify-start px-2"
            onClick={() => void handleLogout()}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-white px-4 lg:hidden">
          <Logo />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </header>
        {mobileOpen ? (
          <div className="border-b border-border bg-white p-4 lg:hidden">
            {nav}
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 w-full justify-start"
              onClick={() => void handleLogout()}
            >
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>
        ) : null}
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
