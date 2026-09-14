import { Product } from "./types";

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    nameSo: "Bariis Basmati 5kg",
    nameEn: "Basmati Rice 5kg",
    descriptionSo: "Bariis basmati tayo sare leh, 5kg",
    descriptionEn: "Premium quality basmati rice, 5kg bag",
    price: 18.5,
    category: "food",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    unit: "5kg",
    inStock: true,
  },
  {
    id: "2",
    nameSo: "Saliid Cunto 2L",
    nameEn: "Cooking Oil 2L",
    descriptionSo: "Saliid cunto oo nadiif ah, 2 litir",
    descriptionEn: "Pure cooking oil, 2 liter bottle",
    price: 6.75,
    category: "food",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    unit: "2L",
    inStock: true,
  },
  {
    id: "3",
    nameSo: "Caano Dheeri 1L",
    nameEn: "Fresh Milk 1L",
    descriptionSo: "Caano cusub oo dheeri ah",
    descriptionEn: "Fresh long-life milk, 1 liter",
    price: 2.5,
    category: "food",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    unit: "1L",
    inStock: true,
  },
  {
    id: "4",
    nameSo: "Sonkor Cad 1kg",
    nameEn: "White Sugar 1kg",
    descriptionSo: "Sonkor cad oo nadiif ah",
    descriptionEn: "Refined white sugar, 1kg",
    price: 1.8,
    category: "food",
    image: "https://images.unsplash.com/photo-1581440493468-4972f3941a8e?w=400&h=400&fit=crop",
    unit: "1kg",
    inStock: true,
  },
  {
    id: "5",
    nameSo: "Shaah Cad 250g",
    nameEn: "Black Tea 250g",
    descriptionSo: "Shaah cad oo macaan",
    descriptionEn: "Premium black tea, 250g",
    price: 3.25,
    category: "food",
    image: "https://images.unsplash.com/photo-1597318181409-2a111eaa3c8c?w=400&h=400&fit=crop",
    unit: "250g",
    inStock: true,
  },
  {
    id: "6",
    nameSo: "Biyo 1.5L x6",
    nameEn: "Water 1.5L x6 Pack",
    descriptionSo: "Biyo nadiif ah, 6 dhalo",
    descriptionEn: "Purified drinking water, 6 bottles",
    price: 4.0,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1548839140-29a7492991ff?w=400&h=400&fit=crop",
    unit: "6-pack",
    inStock: true,
  },
  {
    id: "7",
    nameSo: "Coca Cola 1.5L",
    nameEn: "Coca Cola 1.5L",
    descriptionSo: "Cabitaan qabow, 1.5 litir",
    descriptionEn: "Refreshing cola drink, 1.5L",
    price: 1.5,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop",
    unit: "1.5L",
    inStock: true,
  },
  {
    id: "8",
    nameSo: "Casir Orange 1L",
    nameEn: "Orange Juice 1L",
    descriptionSo: "Casir orange dabiici ah",
    descriptionEn: "Natural orange juice, 1 liter",
    price: 3.0,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
    unit: "1L",
    inStock: true,
  },
  {
    id: "9",
    nameSo: "Saabuun Dhaqasho 1kg",
    nameEn: "Laundry Detergent 1kg",
    descriptionSo: "Saabuun dhaqasho oo xoog leh",
    descriptionEn: "Powerful laundry detergent powder",
    price: 5.5,
    category: "household",
    image: "https://images.unsplash.com/photo-1583947215250-46b659c5439e?w=400&h=400&fit=crop",
    unit: "1kg",
    inStock: true,
  },
  {
    id: "10",
    nameSo: "Tishuu Bog 12-roll",
    nameEn: "Toilet Paper 12-roll",
    descriptionSo: "Tishuu bog jilicsan, 12-roll",
    descriptionEn: "Soft toilet paper, 12 rolls",
    price: 7.0,
    category: "household",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&h=400&fit=crop",
    unit: "12-roll",
    inStock: true,
  },
  {
    id: "11",
    nameSo: "Timaha Shampoo 400ml",
    nameEn: "Hair Shampoo 400ml",
    descriptionSo: "Shampoo timaha nadiifiya",
    descriptionEn: "Gentle cleansing hair shampoo",
    price: 4.25,
    category: "personal",
    image: "https://images.unsplash.com/photo-1527798200503-4bf897146578?w=400&h=400&fit=crop",
    unit: "400ml",
    inStock: true,
  },
  {
    id: "12",
    nameSo: "Macmacaan Ilkaha",
    nameEn: "Toothpaste",
    descriptionSo: "Macmacaan ilkaha ilaaliya",
    descriptionEn: "Fluoride toothpaste for healthy teeth",
    price: 2.75,
    category: "personal",
    image: "https://images.unsplash.com/photo-1622372738946-62e02505fe3f?w=400&h=400&fit=crop",
    unit: "100g",
    inStock: true,
  },
  {
    id: "13",
    nameSo: "Diaper Caruur 32-pack",
    nameEn: "Baby Diapers 32-pack",
    descriptionSo: "Diaper caruur jilicsan",
    descriptionEn: "Soft baby diapers, size 3",
    price: 12.0,
    category: "baby",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e17ddd8?w=400&h=400&fit=crop",
    unit: "32-pack",
    inStock: true,
  },
  {
    id: "14",
    nameSo: "Cunto Caruur 400g",
    nameEn: "Baby Food 400g",
    descriptionSo: "Cunto caruur nafaqo leh",
    descriptionEn: "Nutritious baby food puree",
    price: 3.5,
    category: "baby",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    unit: "400g",
    inStock: true,
  },
  {
    id: "15",
    nameSo: "Telefoon Charger USB-C",
    nameEn: "USB-C Phone Charger",
    descriptionSo: "Charger telefoon degdeg ah",
    descriptionEn: "Fast USB-C phone charger",
    price: 8.0,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1583863788433-a58bf5a3f946?w=400&h=400&fit=crop",
    unit: "1pc",
    inStock: true,
  },
  {
    id: "16",
    nameSo: "Earbuds Bluetooth",
    nameEn: "Bluetooth Earbuds",
    descriptionSo: "Earbuds wireless tayo sare",
    descriptionEn: "Premium wireless bluetooth earbuds",
    price: 15.0,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    unit: "1pc",
    inStock: true,
  },
];

const PRODUCTS_KEY = "sommarket_products";

export function getProducts(): Product[] {
  if (typeof window === "undefined") return DEFAULT_PRODUCTS;
  const stored = localStorage.getItem(PRODUCTS_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as Product[];
    } catch {
      return DEFAULT_PRODUCTS;
    }
  }
  return DEFAULT_PRODUCTS;
}

export function saveProducts(products: Product[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }
}

export function resetProducts(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(PRODUCTS_KEY);
  }
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
