"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Pencil, Trash2, RotateCcw } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { t, getProductName, getCategoryName } from "@/lib/i18n";
import {
  getProducts,
  saveProducts,
  resetProducts,
  formatPrice,
} from "@/lib/products";
import { CATEGORIES, Product } from "@/lib/types";

const emptyProduct: Omit<Product, "id"> = {
  nameSo: "",
  nameEn: "",
  descriptionSo: "",
  descriptionEn: "",
  price: 0,
  category: "food",
  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop",
  unit: "1pc",
  inStock: true,
};

export default function AdminPage() {
  const { locale } = useLocale();
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProduct);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const refreshProducts = () => {
    setProducts(getProducts());
  };

  const handleSave = () => {
    let updated: Product[];
    if (editingId) {
      updated = products.map((p) =>
        p.id === editingId ? { ...form, id: editingId } : p
      );
    } else {
      const newProduct: Product = {
        ...form,
        id: Date.now().toString(),
      };
      updated = [...products, newProduct];
    }
    saveProducts(updated);
    setProducts(updated);
    setShowForm(false);
    setEditingId(null);
    setForm(emptyProduct);
  };

  const handleEdit = (product: Product) => {
    setForm({
      nameSo: product.nameSo,
      nameEn: product.nameEn,
      descriptionSo: product.descriptionSo,
      descriptionEn: product.descriptionEn,
      price: product.price,
      category: product.category,
      image: product.image,
      unit: product.unit,
      inStock: product.inStock,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm(t(locale, "confirmDelete"))) return;
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
    setProducts(updated);
  };

  const handleReset = () => {
    resetProducts();
    refreshProducts();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t(locale, "adminPanel")}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <RotateCcw size={16} />
            Reset
          </button>
          <button
            onClick={() => {
              setForm(emptyProduct);
              setEditingId(null);
              setShowForm(true);
            }}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Plus size={16} />
            {t(locale, "addProduct")}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">
            {editingId ? t(locale, "editProduct") : t(locale, "addProduct")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "productName")} (Soomaali)
              </label>
              <input
                type="text"
                value={form.nameSo}
                onChange={(e) => setForm({ ...form, nameSo: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "productName")} (English)
              </label>
              <input
                type="text"
                value={form.nameEn}
                onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "description")} (Soomaali)
              </label>
              <input
                type="text"
                value={form.descriptionSo}
                onChange={(e) =>
                  setForm({ ...form, descriptionSo: e.target.value })
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "description")} (English)
              </label>
              <input
                type="text"
                value={form.descriptionEn}
                onChange={(e) =>
                  setForm({ ...form, descriptionEn: e.target.value })
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "price")}
              </label>
              <input
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: parseFloat(e.target.value) || 0 })
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "category")}
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="input-field"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {getCategoryName(locale, cat)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "unit")}
              </label>
              <input
                type="text"
                value={form.unit}
                onChange={(e) => setForm({ ...form, unit: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t(locale, "imageUrl")}
              </label>
              <input
                type="url"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <input
                type="checkbox"
                id="inStock"
                checked={form.inStock}
                onChange={(e) =>
                  setForm({ ...form, inStock: e.target.checked })
                }
                className="w-4 h-4 text-brand-600 rounded"
              />
              <label htmlFor="inStock" className="text-sm font-medium text-gray-700">
                {t(locale, "inStock")}
              </label>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={handleSave} className="btn-primary">
              {t(locale, "save")}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="btn-secondary"
            >
              {t(locale, "cancel")}
            </button>
          </div>
        </div>
      )}

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-500">#</th>
                <th className="text-left p-4 font-medium text-gray-500">
                  {t(locale, "productName")}
                </th>
                <th className="text-left p-4 font-medium text-gray-500">
                  {t(locale, "category")}
                </th>
                <th className="text-left p-4 font-medium text-gray-500">
                  {t(locale, "price")}
                </th>
                <th className="text-left p-4 font-medium text-gray-500">
                  {t(locale, "inStock")}
                </th>
                <th className="text-right p-4 font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const cat = CATEGORIES.find((c) => c.id === product.category);
                return (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={product.image}
                          alt={getProductName(locale, product)}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4 font-medium">
                      {getProductName(locale, product)}
                    </td>
                    <td className="p-4 text-gray-500">
                      {cat ? getCategoryName(locale, cat) : product.category}
                    </td>
                    <td className="p-4 font-medium text-brand-700">
                      {formatPrice(product.price)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.inStock
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.inStock
                          ? locale === "so"
                            ? "Haa"
                            : "Yes"
                          : locale === "so"
                            ? "Maya"
                            : "No"}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
