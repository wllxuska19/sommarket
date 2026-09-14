"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { t, getProductName } from "@/lib/i18n";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { locale } = useLocale();
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="mx-auto text-gray-300 mb-4" size={64} />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t(locale, "emptyCart")}
        </h1>
        <Link href="/products" className="btn-primary inline-block mt-4">
          {t(locale, "continueShopping")}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {t(locale, "yourCart")}
      </h1>
      <p className="text-gray-500 mb-8">
        {totalItems} {t(locale, "itemsInCart")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="card p-4 flex gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={getProductName(locale, item.product)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  {getProductName(locale, item.product)}
                </h3>
                <p className="text-brand-700 font-bold mt-1">
                  {formatPrice(item.product.price)}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-medium w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="ml-auto text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="text-right font-bold text-gray-900">
                {formatPrice(item.product.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        <div className="card p-6 h-fit sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {t(locale, "orderDetails")}
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{t(locale, "subtotal")}</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>{t(locale, "total")}</span>
              <span className="text-brand-700">{formatPrice(subtotal)}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="btn-primary w-full text-center block mt-6"
          >
            {t(locale, "proceedCheckout")}
          </Link>
          <Link
            href="/products"
            className="text-brand-600 text-sm text-center block mt-3 hover:underline"
          >
            {t(locale, "continueShopping")}
          </Link>
        </div>
      </div>
    </div>
  );
}
