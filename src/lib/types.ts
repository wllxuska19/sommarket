export type Locale = "so" | "en";

export interface Product {
  id: string;
  nameSo: string;
  nameEn: string;
  descriptionSo: string;
  descriptionEn: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = "evc" | "zaad" | "edahab" | "cash";

export interface DeliveryCity {
  id: string;
  nameSo: string;
  nameEn: string;
  fee: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  deliveryFee: number;
  city: string;
  address: string;
  phone: string;
  paymentMethod: PaymentMethod;
  status: "pending" | "confirmed" | "delivered";
  createdAt: string;
}

export const CATEGORIES = [
  { id: "food", nameSo: "Cunto", nameEn: "Food" },
  { id: "drinks", nameSo: "Cabbir", nameEn: "Drinks" },
  { id: "household", nameSo: "Guriga", nameEn: "Household" },
  { id: "personal", nameSo: "Shakhsi", nameEn: "Personal Care" },
  { id: "baby", nameSo: "Caruur", nameEn: "Baby" },
  { id: "electronics", nameSo: "Elektroonik", nameEn: "Electronics" },
] as const;

export const DELIVERY_CITIES: DeliveryCity[] = [
  { id: "mogadishu", nameSo: "Muqdisho", nameEn: "Mogadishu", fee: 2 },
  { id: "hargeisa", nameSo: "Hargeysa", nameEn: "Hargeisa", fee: 3 },
  { id: "bosaso", nameSo: "Boosaaso", nameEn: "Bosaso", fee: 4 },
  { id: "kismayo", nameSo: "Kismaayo", nameEn: "Kismayo", fee: 4 },
  { id: "baidoa", nameSo: "Baydhabo", nameEn: "Baidoa", fee: 5 },
  { id: "garowe", nameSo: "Garoowe", nameEn: "Garowe", fee: 4 },
];

export const PAYMENT_METHODS = [
  { id: "evc" as const, nameSo: "EVC Plus", nameEn: "EVC Plus", color: "#0066CC" },
  { id: "zaad" as const, nameSo: "Zaad", nameEn: "Zaad", color: "#00A651" },
  { id: "edahab" as const, nameSo: "e-Dahab", nameEn: "e-Dahab", color: "#E31837" },
  { id: "cash" as const, nameSo: "Lacag caddaan", nameEn: "Cash on Delivery", color: "#374151" },
];
