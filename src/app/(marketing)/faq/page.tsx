import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about business email, domains, DNS, clients, and billing.",
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What is business email?",
    a: "Business email is email on your own domain — for example info@yourcompany.ng — so customers recognize and trust your messages.",
  },
  {
    q: "Can I use my existing domain?",
    a: "Yes. Add your domain in the dashboard and follow the DNS instructions we provide for that domain.",
  },
  {
    q: "Can I buy a domain through the platform?",
    a: "Domain purchase availability depends on configuration. You can always connect a domain registered elsewhere.",
  },
  {
    q: "How many email addresses can I create?",
    a: "It depends on your plan. Starter includes 1 mailbox, Business up to 5, and Pro up to 10. Exact limits are shown on Pricing and confirmed in your account.",
  },
  {
    q: "Can I use Gmail/Outlook/Apple Mail with my mailbox?",
    a: "Yes. Each mailbox includes IMAP and SMTP settings for Outlook, Apple Mail, Thunderbird, Android, iPhone, and similar apps. Webmail is also available.",
  },
  {
    q: "Do you help configure DNS?",
    a: "Yes. We show the exact records you need, explain what each one does, and let you verify when they are live.",
  },
  {
    q: "Can I migrate from another provider?",
    a: "Migration assistance is available on higher plans. Contact support after signup to discuss your current setup.",
  },
  {
    q: "What happens if I cancel?",
    a: "Cancellation and retention policies are configurable. Typically, access continues until the end of the paid period; confirm details in your subscription settings or with support.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">FAQ</h1>
      <p className="mt-3 text-muted">
        Straight answers. Policies marked as configurable will be finalized in your
        account terms.
      </p>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="cursor-pointer list-none font-medium text-ink">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-muted transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
