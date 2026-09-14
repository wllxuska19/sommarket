"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Home,
  Package,
  Settings,
  Globe,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { t } from "@/lib/i18n";
import { Locale } from "@/lib/types";

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const { totalItems } = useCart();

  const navLinks = [
    { href: "/", label: t(locale, "home"), icon: Home },
    { href: "/products", label: t(locale, "products"), icon: Package },
    { href: "/cart", label: t(locale, "cart"), icon: ShoppingCart },
    { href: "/admin", label: t(locale, "admin"), icon: Settings },
  ];

  const toggleLocale = () => {
    setLocale(locale === "so" ? "en" : "so");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-700">
                {t(locale, "siteName")}
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                {t(locale, "tagline")}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon size={18} />
                  {link.label}
                  {link.href === "/cart" && totalItems > 0 && (
                    <span className="bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label={t(locale, "language")}
            >
              <Globe size={18} />
              <span>{locale === "so" ? "EN" : "SO"}</span>
            </button>

            <Link
              href="/cart"
              className="md:hidden relative p-2 rounded-lg hover:bg-gray-50"
            >
              <ShoppingCart size={22} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        <nav className="md:hidden flex items-center gap-1 pb-3 overflow-x-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
