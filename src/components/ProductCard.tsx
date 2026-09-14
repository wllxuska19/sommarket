"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { t, getProductName, getProductDescription } from "@/lib/i18n";
import { formatPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { locale } = useLocale();
  const { addItem } = useCart();

  return (
    <div className="card group hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={getProductName(locale, product)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {t(locale, "outOfStock")}
            </span>
          </div>
        )}
        <span className="absolute top-2 right-2 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
          {product.unit}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">
          {getProductName(locale, product)}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {getProductDescription(locale, product)}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-brand-700">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="flex items-center gap-1.5 bg-brand-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={16} />
            {t(locale, "addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
}
