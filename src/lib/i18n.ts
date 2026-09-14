import { Locale } from "./types";

type TranslationKeys = {
  siteName: string;
  tagline: string;
  home: string;
  products: string;
  cart: string;
  checkout: string;
  admin: string;
  search: string;
  searchPlaceholder: string;
  addToCart: string;
  outOfStock: string;
  viewAll: string;
  categories: string;
  featured: string;
  delivery: string;
  deliveryInfo: string;
  payment: string;
  paymentInfo: string;
  yourCart: string;
  emptyCart: string;
  continueShopping: string;
  subtotal: string;
  deliveryFee: string;
  total: string;
  proceedCheckout: string;
  remove: string;
  quantity: string;
  orderDetails: string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  selectCity: string;
  selectPayment: string;
  placeOrder: string;
  orderSuccess: string;
  orderSuccessMsg: string;
  backToHome: string;
  adminPanel: string;
  addProduct: string;
  editProduct: string;
  deleteProduct: string;
  productName: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  unit: string;
  inStock: string;
  save: string;
  cancel: string;
  confirmDelete: string;
  allProducts: string;
  noProducts: string;
  language: string;
  freeDelivery: string;
  minOrder: string;
  whyUs: string;
  fastDelivery: string;
  fastDeliveryDesc: string;
  securePayment: string;
  securePaymentDesc: string;
  qualityProducts: string;
  qualityProductsDesc: string;
  support247: string;
  support247Desc: string;
  shopNow: string;
  filterByCategory: string;
  allCategories: string;
  itemsInCart: string;
};

const translations: Record<Locale, TranslationKeys> = {
  so: {
    siteName: "SomMarket",
    tagline: "Suuqaaga Online ee Soomaaliya",
    home: "Hoyga",
    products: "Alaabta",
    cart: "Gaadhiga",
    checkout: "Dalbashada",
    admin: "Maamulka",
    search: "Raadi",
    searchPlaceholder: "Raadi alaab...",
    addToCart: "Ku dar Gaadhiga",
    outOfStock: "Ma jirto",
    viewAll: "Arag Dhammaan",
    categories: "Qaybaha",
    featured: "Alaabta Caanka ah",
    delivery: "Gaadhista",
    deliveryInfo: "Waxaan gaadhsiinaa dhammaan magaalooyinka Soomaaliya",
    payment: "Lacag Bixinta",
    paymentInfo: "EVC Plus, Zaad, e-Dahab ama lacag caddaan",
    yourCart: "Gaadhigaaga",
    emptyCart: "Gaadhigaagu waa madhan yahay",
    continueShopping: "Sii wad iibsiga",
    subtotal: "Wadarta",
    deliveryFee: "Kharashka Gaadhista",
    total: "Wadarta Guud",
    proceedCheckout: "U gudub Dalbashada",
    remove: "Ka saar",
    quantity: "Tirada",
    orderDetails: "Faahfaahinta Dalbashada",
    fullName: "Magaca Buuxa",
    phone: "Telefoonka",
    city: "Magaalada",
    address: "Cinwaanka",
    selectCity: "Dooro Magaalada",
    selectPayment: "Dooro Habka Lacag Bixinta",
    placeOrder: "Dalbo Hadda",
    orderSuccess: "Dalbashada waa la helay!",
    orderSuccessMsg: "Waad ku mahadsan tahay! Dalbashadaada waa la xaqiijin doonaa dhawaan.",
    backToHome: "Ku noqo Hoyga",
    adminPanel: "Maamulka Alaabta",
    addProduct: "Ku dar Alaab",
    editProduct: "Wax ka beddel",
    deleteProduct: "Tirtir",
    productName: "Magaca Alaabta",
    description: "Sharaxaad",
    price: "Qiimaha ($)",
    category: "Qaybta",
    imageUrl: "Sawirka URL",
    unit: "Unugga",
    inStock: "Waa la heli karaa",
    save: "Kaydi",
    cancel: "Jooji",
    confirmDelete: "Ma hubtaa inaad tirtirto alaabtan?",
    allProducts: "Dhammaan Alaabta",
    noProducts: "Alaab lama helin",
    language: "Luqadda",
    freeDelivery: "Gaadhis bilaash ah dalbashada ka badan $50",
    minOrder: "Dalbashada ugu yar: $5",
    whyUs: "Maxaad noo doorataa?",
    fastDelivery: "Gaadhis Degdeg ah",
    fastDeliveryDesc: "Alaabtaada waxaan ku gaadhsiinaa 24-48 saac gudahood",
    securePayment: "Lacag Bixin Aamin ah",
    securePaymentDesc: "EVC Plus, Zaad, e-Dahab iyo lacag caddaan",
    qualityProducts: "Alaab Tayo Sare",
    qualityProductsDesc: "Alaab nadiif ah oo tayo leh oo keliya",
    support247: "Taageero 24/7",
    support247Desc: "Waxaan ku caawinaynaa maalin iyo habeen",
    shopNow: "Iibso Hadda",
    filterByCategory: "Shaandhee Qaybta",
    allCategories: "Dhammaan Qaybaha",
    itemsInCart: "alaab gaadhiga ku jirta",
  },
  en: {
    siteName: "SomMarket",
    tagline: "Your Online Supermarket in Somalia",
    home: "Home",
    products: "Products",
    cart: "Cart",
    checkout: "Checkout",
    admin: "Admin",
    search: "Search",
    searchPlaceholder: "Search products...",
    addToCart: "Add to Cart",
    outOfStock: "Out of Stock",
    viewAll: "View All",
    categories: "Categories",
    featured: "Featured Products",
    delivery: "Delivery",
    deliveryInfo: "We deliver to all major cities in Somalia",
    payment: "Payment",
    paymentInfo: "EVC Plus, Zaad, e-Dahab or cash on delivery",
    yourCart: "Your Cart",
    emptyCart: "Your cart is empty",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    deliveryFee: "Delivery Fee",
    total: "Total",
    proceedCheckout: "Proceed to Checkout",
    remove: "Remove",
    quantity: "Quantity",
    orderDetails: "Order Details",
    fullName: "Full Name",
    phone: "Phone Number",
    city: "City",
    address: "Address",
    selectCity: "Select City",
    selectPayment: "Select Payment Method",
    placeOrder: "Place Order",
    orderSuccess: "Order Placed Successfully!",
    orderSuccessMsg: "Thank you! Your order will be confirmed shortly.",
    backToHome: "Back to Home",
    adminPanel: "Product Management",
    addProduct: "Add Product",
    editProduct: "Edit",
    deleteProduct: "Delete",
    productName: "Product Name",
    description: "Description",
    price: "Price ($)",
    category: "Category",
    imageUrl: "Image URL",
    unit: "Unit",
    inStock: "In Stock",
    save: "Save",
    cancel: "Cancel",
    confirmDelete: "Are you sure you want to delete this product?",
    allProducts: "All Products",
    noProducts: "No products found",
    language: "Language",
    freeDelivery: "Free delivery on orders over $50",
    minOrder: "Minimum order: $5",
    whyUs: "Why Choose Us?",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Get your groceries delivered in 24-48 hours",
    securePayment: "Secure Payment",
    securePaymentDesc: "EVC Plus, Zaad, e-Dahab and cash on delivery",
    qualityProducts: "Quality Products",
    qualityProductsDesc: "Only fresh and high-quality products",
    support247: "24/7 Support",
    support247Desc: "We're here to help you anytime",
    shopNow: "Shop Now",
    filterByCategory: "Filter by Category",
    allCategories: "All Categories",
    itemsInCart: "items in cart",
  },
};

export function t(locale: Locale, key: keyof TranslationKeys): string {
  return translations[locale][key];
}

export function getProductName(
  locale: Locale,
  product: { nameSo: string; nameEn: string }
): string {
  return locale === "so" ? product.nameSo : product.nameEn;
}

export function getProductDescription(
  locale: Locale,
  product: { descriptionSo: string; descriptionEn: string }
): string {
  return locale === "so" ? product.descriptionSo : product.descriptionEn;
}

export function getCityName(
  locale: Locale,
  city: { nameSo: string; nameEn: string }
): string {
  return locale === "so" ? city.nameSo : city.nameEn;
}

export function getCategoryName(
  locale: Locale,
  category: { nameSo: string; nameEn: string }
): string {
  return locale === "so" ? category.nameSo : category.nameEn;
}
