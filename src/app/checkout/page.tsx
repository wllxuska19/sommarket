"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { useCart } from "@/context/CartContext";
import { t, getProductName, getCityName } from "@/lib/i18n";
import { formatPrice } from "@/lib/products";
import { DELIVERY_CITIES, PAYMENT_METHODS, PaymentMethod } from "@/lib/types";

export default function CheckoutPage() {
  const { locale } = useLocale();
  const { items, subtotal, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("evc");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const selectedCity = DELIVERY_CITIES.find((c) => c.id === city);
  const deliveryFee = selectedCity?.fee ?? 0;
  const total = subtotal + deliveryFee;
  const freeDelivery = subtotal >= 50;
  const finalTotal = freeDelivery ? subtotal : total;

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg mb-4">{t(locale, "emptyCart")}</p>
        <Link href="/products" className="btn-primary inline-block">
          {t(locale, "continueShopping")}
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <CheckCircle className="mx-auto text-brand-600 mb-4" size={64} />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t(locale, "orderSuccess")}
        </h1>
        <p className="text-gray-500 mb-8">{t(locale, "orderSuccessMsg")}</p>
        <Link href="/" className="btn-primary inline-block">
          {t(locale, "backToHome")}
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !city || !address) return;

    const order = {
      id: Date.now().toString(),
      items,
      total: finalTotal,
      deliveryFee: freeDelivery ? 0 : deliveryFee,
      city,
      address,
      phone,
      paymentMethod: payment,
      status: "pending" as const,
      createdAt: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem("sommarket_orders") || "[]");
    orders.push(order);
    localStorage.setItem("sommarket_orders", JSON.stringify(orders));

    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {t(locale, "checkout")}
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Info */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t(locale, "orderDetails")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t(locale, "fullName")}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t(locale, "phone")}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+252 61 XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t(locale, "city")}
                </label>
                <select
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-field"
                >
                  <option value="">{t(locale, "selectCity")}</option>
                  {DELIVERY_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {getCityName(locale, c)} (+${c.fee})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t(locale, "address")}
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t(locale, "selectPayment")}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPayment(method.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    payment === method.id
                      ? "border-brand-600 bg-brand-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full mb-2"
                    style={{ backgroundColor: method.color }}
                  />
                  <span className="font-medium text-sm">
                    {locale === "so" ? method.nameSo : method.nameEn}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="card p-6 h-fit sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {t(locale, "yourCart")}
          </h2>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={getProductName(locale, item.product)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {getProductName(locale, item.product)}
                  </p>
                  <p className="text-xs text-gray-500">
                    x{item.quantity} &bull; {formatPrice(item.product.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{t(locale, "subtotal")}</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t(locale, "deliveryFee")}</span>
              <span>
                {freeDelivery ? (
                  <span className="text-brand-600 font-medium">
                    {locale === "so" ? "Bilaash" : "Free"}
                  </span>
                ) : (
                  formatPrice(deliveryFee)
                )}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>{t(locale, "total")}</span>
              <span className="text-brand-700">{formatPrice(finalTotal)}</span>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full mt-6">
            {t(locale, "placeOrder")}
          </button>
        </div>
      </form>
    </div>
  );
}
