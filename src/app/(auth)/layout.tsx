import Link from "next/link";
import { Logo } from "@/components/marketing/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-surface">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-14 max-w-lg items-center px-4">
          <Logo />
        </div>
      </header>
      <main className="flex flex-1 items-start justify-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-md rounded-md border border-border bg-white p-6 shadow-[0_1px_2px_rgba(51,51,51,0.04)]">
          {children}
        </div>
      </main>
      <p className="pb-6 text-center text-xs text-muted">
        <Link href="/" className="hover:text-ink">
          Back to home
        </Link>
      </p>
    </div>
  );
}
