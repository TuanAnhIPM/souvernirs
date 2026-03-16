import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

const navItems = [
  { label: "Products", href: "/" },
  { label: "Story", href: "/story" },
  { label: "Concept", href: "/concept" },
  { label: "Packaging", href: "/packaging" },
  { label: "Retail", href: "/retail" },
  { label: "Checkout", href: "/checkout" },
  { label: "Selling Story", href: "/selling-story" },
  { label: "Become a Partner", href: "/affiliate" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="surface sticky top-2 z-50 rounded-[28px] px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-4">
        <BrandLogo size={48} />
        <div>
          <p className="text-sm font-extrabold text-coffee-900">Kindness Vietnam</p>
          <p className="text-xs uppercase tracking-[0.18em] text-coffee-800/50">
            Vietnam Local Gifts
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-6 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-pill"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/" className="button-secondary hidden sm:inline-flex">
        Shop Products
      </Link>
      </div>

      <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={`mobile-${item.href}`}
            href={item.href}
            className="whitespace-nowrap nav-pill"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}