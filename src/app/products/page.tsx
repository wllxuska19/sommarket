"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useLocale } from "@/context/LocaleContext";
import { t, getCategoryName, getProductName } from "@/lib/i18n";
import { getProducts } from "@/lib/products";
import { CATEGORIES, Product } from "@/lib/types";

function ProductsContent() {
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = products.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const name = getProductName(locale, p).toLowerCase();
    const matchesSearch = name.includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {t(locale, "allProducts")}
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder={t(locale, "searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field sm:w-48"
        >
          <option value="all">{t(locale, "allCategories")}</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {getCategoryName(locale, cat)}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">{t(locale, "noProducts")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
          Loading...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
