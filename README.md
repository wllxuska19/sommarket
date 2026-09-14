# SomMarket - Online Supermarket Somalia

Suuqaaga online ee Soomaaliya. Your online supermarket for Somalia.

## Features

- **Product Catalog** - Browse food, drinks, household, personal care, baby, and electronics
- **Shopping Cart** - Add, remove, and update quantities
- **Checkout** - Order with delivery to major Somali cities
- **Payment Methods** - EVC Plus, Zaad, e-Dahab, and Cash on Delivery
- **Bilingual** - Somali (Af Soomaali) and English
- **Admin Panel** - Add, edit, and delete products
- **Delivery Cities** - Mogadishu, Hargeisa, Bosaso, Kismayo, Baidoa, Garowe

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Project Structure

```
src/
  app/           - Pages (home, products, cart, checkout, admin)
  components/    - Reusable UI components
  context/       - Cart and locale state management
  lib/           - Types, products data, i18n translations
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, categories, featured products |
| Products | `/products` | Full catalog with search and filters |
| Cart | `/cart` | Shopping cart management |
| Checkout | `/checkout` | Order form with payment and delivery |
| Admin | `/admin` | Product management panel |

## License

MIT
