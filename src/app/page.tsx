"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Truck,
  Shield,
  Star,
  Headphones,
  ArrowRight,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";
import { getProducts } from "@/lib/products";
import { CATEGORIES } from "@/lib/types";
import { getCategoryName } from "@/lib/i18n";
import { Product } from "@/lib/types";

export default function HomePage() {
  const { locale } = useLocale();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const featured = products.slice(0, 8);

  const features = [
    {
      icon: Truck,
      title: t(locale, "fastDelivery"),
      desc: t(locale, "fastDeliveryDesc"),
    },
    {
      icon: Shield,
      title: t(locale, "securePayment"),
      desc: t(locale, "securePaymentDesc"),
    },
    {
      icon: Star,
      title: t(locale, "qualityProducts"),
      desc: t(locale, "qualityProductsDesc"),
    },
    {
      icon: Headphones,
      title: t(locale, "support247"),
      desc: t(locale, "support247Desc"),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t(locale, "siteName")}
            </h1>
            <p className="text-xl text-brand-100 mt-4">{t(locale, "tagline")}</p>
            <p className="text-brand-200 mt-2">{t(locale, "deliveryInfo")}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/products" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 flex items-center gap-2">
                {t(locale, "shopNow")}
                <ArrowRight size={18} />
              </Link>
              <span className="flex items-center text-brand-200 text-sm">
                {t(locale, "freeDelivery")} &bull; {t(locale, "minOrder")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t(locale, "categories")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="card p-4 text-center hover:shadow-md hover:border-brand-200 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-brand-600 font-bold text-lg">
                  {getCategoryName(locale, cat).charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {getCategoryName(locale, cat)}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {t(locale, "featured")}
            </h2>
            <Link
              href="/products"
              className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1"
            >
              {t(locale, "viewAll")}
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          {t(locale, "whyUs")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6 text-center">
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-brand-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
