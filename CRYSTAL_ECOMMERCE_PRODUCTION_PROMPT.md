# 🎯 CRYSTAL STORE E-COMMERCE - PRODUCTION-READY PROMPT
## Dr. Niyati Rana | Jaimini Homeocare & Healing Centre

---

# 📋 TABLE OF CONTENTS

1. Project Overview
2. Tech Stack Mapping
3. Architecture Overview
4. Project Structure
5. Core Features Breakdown
6. Database Schema (Prisma)
7. Authentication & Authorization
8. Frontend Implementation
9. Backend API Routes
10. Admin Dashboard Specifications
11. E-Commerce Features
12. NEW Features (5 additions)
13. Security & Performance
14. Deployment & DevOps
15. Implementation Timeline

---

# 🎯 PROJECT OVERVIEW

## Business Context

**Client:** Dr. Niyati Rana  
**Business:** Jaimini Homeocare & Healing Centre  
**Objective:** Transform `/services/crystal-products` into a premium, production-ready e-commerce store  
**Target:** India-first (Razorpay integration, INR pricing, shipping zones)  
**Key Principle:** Never claim medical benefits of crystals—focus on spiritual wellness and mindfulness  

## Scope

- **Products:** Crystal bracelets, raw crystals, towers, clusters, hearts, tumbles, pendants, healing sets, meditation crystals, gift sets
- **Users:** Customers (browse, search, filter, purchase, review), Admin (full store management)
- **Payment:** Razorpay (UPI, Card, Net Banking, Wallets, etc.)
- **Shipping:** Configurable zones, delivery methods, tracking
- **Support:** WhatsApp integration, FAQ, policies, contact options

---

# 🛠️ TECH STACK MAPPING

## 1. Core Framework & Runtime

| Requirement | Tech Stack | Why |
|------------|-----------|-----|
| Frontend Framework | **Next.js 16 (App Router)** | Server Components (RSC) for SEO, Client Components for interactivity, built-in image optimization, API routes |
| UI Library | **React 19** | Modern hooks, concurrent rendering for smooth animations |
| Type Safety | **TypeScript 5** | Catch errors at build time, strong interfaces for API contracts |
| Runtime | **Node.js 20+** | Backend processing, API handling, database operations |

### Key Next.js Features Used:
- **App Router** for file-based routing (`/app` directory)
- **Server Components** for product lists, category pages (fetch data server-side)
- **Client Components** for interactive elements (cart, filters, animations)
- **API Routes** (`/app/api/*`) for backend endpoints
- **Middleware** for auth checks, redirects
- **Image Optimization** via `next/image` for Cloudinary integration

---

## 2. Styling & Design System

| Requirement | Tech | Implementation |
|------------|------|-----------------|
| Utility CSS | **Tailwind CSS v4** | Custom wellness palette tokens in `tailwind.config.ts` |
| Design Tokens | Custom Config | Forest Green (#0B6B4F), Gold (#D4AF37), Cream (#FAFAF8), Sage (#C4D6C6) |
| Advanced Effects | **PostCSS + CSS** | Glassmorphism, gradients, smooth shadows |
| Component Library | **Shadcn/ui or Custom** | Reusable form components, buttons, modals |

### Tailwind Configuration:
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#0B6B4F',
          gold: '#D4AF37',
          cream: '#FAFAF8',
          sage: '#C4D6C6',
          charcoal: '#1A1A1A',
        },
        accent: {
          lavender: '#E8DFF5',
          roseGold: '#B76E79',
          celestialBlue: '#4A7C8F',
          coral: '#E8A89B',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

---

## 3. Motion & Animation Engine

| Feature | Tech | Implementation |
|---------|------|-----------------|
| Scroll Reveals | **Framer Motion 12** | Viewport-triggered `AnimatePresence`, `useInView` |
| Entry Animations | **Framer Motion** | Staggered children, `clipPath` reveals, typewriter effect |
| Micro-animations | **Framer Motion** | Hover scales, cart pulse, wishlist heart beat |
| Interactive UI | **Framer Motion** | Modal transitions, dropdown slides, page transitions |

### Animation Patterns:
```typescript
// Reusable animation components
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
```

---

## 4. Audio Engine (Entry Experience)

| Feature | Tech | Details |
|---------|------|---------|
| Ambient Audio | **Web Audio API** | Native browser API (zero external files) |
| Synthesis | Custom JS | Oscillator chains for soothing pads, bell harmonics |
| No Asset Loading | Performance | Eliminates audio file downloads, improves page speed |

### Audio Synthesis Pattern:
```typescript
// server/audio/synthesizer.ts
export class AudioSynthesizer {
  private audioContext: AudioContext;
  
  generateAmbientPad(duration: number) {
    // Multi-oscillator pad generation
    // Smooth attack/release envelope
    // No external files needed
  }
  
  generateBellChime(note: number) {
    // Resonant bell tone using multiple harmonics
  }
}
```

---

## 5. Iconography

| Source | Icons | Use Case |
|--------|-------|----------|
| **Lucide React** | 100+ UI icons | Navigation, actions, status indicators |
| **React Icons** | Social icons | WhatsApp, Instagram, Facebook links |
| **Custom SVG** | Wellness icons | Mortar & pestle (Homeopathy), hands (Reiki), lotus, tarot |

### Icon Organization:
```typescript
// lib/icons.ts
export const WellnessIcons = {
  homeopathy: HomeopathyIcon,
  reiki: ReikiIcon,
  lamaFera: LamaFeraIcon,
  tarot: TarotIcon,
  crystal: CrystalIcon,
  heart: Heart,
  star: Star,
  // ... more icons
};
```

---

## 6. Database & ORM

| Component | Tech | Details |
|-----------|------|---------|
| Database | **PostgreSQL** | Relational, ACID transactions for orders/inventory |
| ORM | **Prisma 6** | Type-safe, auto-generated queries, migrations |
| Hosting | **Supabase / Railway** | Managed PostgreSQL, easy deployment |

### Prisma Advantages:
- **Type-safe** database queries in TypeScript
- **Auto-generated** client from schema
- **Migrations** tracked and reversible
- **Seed scripts** for demo data
- **Relations** handling (one-to-many, many-to-many)

---

## 7. Authentication & Session Management

| Feature | Tech | Implementation |
|---------|------|-----------------|
| JWT Auth | **JWT (jsonwebtoken)** | Stateless, scalable authentication |
| Secure Cookies | **HTTP-only, Secure flags** | XSS-resistant session storage |
| Password Hashing | **bcrypt** | Slow hashing (10+ rounds) for security |
| Session Management | **Next.js Middleware** | Check auth on every request |

---

## 8. External Services Integration

| Service | Purpose | Integration |
|---------|---------|-------------|
| **Cloudinary** | Image storage, optimization | REST API for uploads, transformations |
| **Razorpay** | Payment processing | Webhook verification, order confirmation |
| **Nodemailer** | Email notifications | SMTP for transactional emails |
| **WhatsApp API** (Optional) | Customer support | Prefilled message links, future API integration |

---

# 🏗️ ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────┐
│                    NEXT.JS 16 APPLICATION               │
│  ┌──────────────────────────────────────────────────┐  │
│  │      FRONTEND (React 19 + TypeScript)            │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Pages                                     │  │  │
│  │  │  • /services/crystal-products (homepage)   │  │  │
│  │  │  • /services/crystal-products/:slug        │  │  │
│  │  │  • /cart                                   │  │  │
│  │  │  • /checkout                               │  │  │
│  │  │  • /account                                │  │  │
│  │  │  • /admin/*                                │  │  │
│  │  │  • /auth/*                                 │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Components (RSC + Client)                │  │  │
│  │  │  • ProductCard                             │  │  │
│  │  │  • CartSidebar                             │  │  │
│  │  │  • CheckoutForm                            │  │  │
│  │  │  • AdminDashboard                          │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Animations (Framer Motion 12)            │  │  │
│  │  │  • PageTransitions                         │  │  │
│  │  │  • ScrollReveals                           │  │  │
│  │  │  • HoverEffects                            │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │   BACKEND (Next.js API Routes + Middleware)      │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  API Routes (/app/api)                    │  │  │
│  │  │  • /api/products/*                         │  │  │
│  │  │  • /api/categories/*                       │  │  │
│  │  │  • /api/orders/*                           │  │  │
│  │  │  • /api/auth/*                             │  │  │
│  │  │  • /api/cart/*                             │  │  │
│  │  │  • /api/checkout/*                         │  │  │
│  │  │  • /api/admin/*                            │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Services                                  │  │  │
│  │  │  • ProductService                          │  │  │
│  │  │  • OrderService                            │  │  │
│  │  │  • PaymentService                          │  │  │
│  │  │  • EmailService                            │  │  │
│  │  │  • CloudinaryService                       │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Middleware                                │  │  │
│  │  │  • Auth validation                         │  │  │
│  │  │  • Admin role check                        │  │  │
│  │  │  • Rate limiting                           │  │  │
│  │  │  • CORS & security headers                 │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │   DATABASE & ORM (Prisma 6 + PostgreSQL)         │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  Models                                    │  │  │
│  │  │  • User, Address, Role                     │  │  │
│  │  │  • Product, Category, ProductImage         │  │  │
│  │  │  • Cart, CartItem, Wishlist                │  │  │
│  │  │  • Order, OrderItem, Payment               │  │  │
│  │  │  • Coupon, Review, Inventory               │  │  │
│  │  │  • Bundle, BackInStockNotification         │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            EXTERNAL INTEGRATIONS                        │
├─────────────────────────────────────────────────────────┤
│  Cloudinary → Image storage, CDN, transformations      │
│  Razorpay → Payment processing, webhooks               │
│  Nodemailer → SMTP, transactional emails               │
│  Web Audio API → Ambient audio synthesis               │
└─────────────────────────────────────────────────────────┘
```

---

# 📁 PROJECT STRUCTURE

## Directory Layout

```
crystal-ecommerce/
│
├── app/                                    # Next.js App Router
│   ├── layout.tsx                         # Root layout
│   ├── page.tsx                           # Home redirect
│   │
│   ├── services/
│   │   ├── crystal-products/
│   │   │   ├── page.tsx                   # Store homepage
│   │   │   ├── layout.tsx
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx               # Product detail
│   │   │   └── category/
│   │   │       └── [categorySlug]/page.tsx
│   │   └── layout.tsx
│   │
│   ├── cart/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── checkout/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── wishlist/
│   │   └── page.tsx
│   │
│   ├── account/
│   │   ├── page.tsx                       # Dashboard
│   │   ├── orders/
│   │   │   ├── page.tsx
│   │   │   └── [orderId]/page.tsx
│   │   ├── addresses/page.tsx
│   │   └── settings/page.tsx
│   │
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/page.tsx
│   │
│   ├── admin/
│   │   ├── page.tsx                       # Dashboard
│   │   ├── layout.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── categories/page.tsx
│   │   ├── orders/page.tsx
│   │   ├── customers/page.tsx
│   │   ├── reviews/page.tsx
│   │   ├── coupons/page.tsx
│   │   ├── bundles/page.tsx
│   │   ├── analytics/page.tsx
│   │   └── settings/page.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   ├── refresh/route.ts
│   │   │   ├── forgot-password/route.ts
│   │   │   └── reset-password/route.ts
│   │   │
│   │   ├── products/
│   │   │   ├── route.ts                   # GET/POST
│   │   │   └── [id]/route.ts              # GET/PUT/DELETE
│   │   │
│   │   ├── categories/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   │
│   │   ├── cart/
│   │   │   ├── route.ts                   # GET/POST
│   │   │   └── [itemId]/route.ts          # PUT/DELETE
│   │   │
│   │   ├── wishlist/
│   │   │   ├── route.ts                   # GET/POST
│   │   │   └── [productId]/route.ts       # DELETE
│   │   │
│   │   ├── orders/
│   │   │   ├── route.ts                   # GET/POST
│   │   │   └── [id]/route.ts              # GET/PUT
│   │   │
│   │   ├── checkout/
│   │   │   └── route.ts
│   │   │
│   │   ├── payments/
│   │   │   ├── create/route.ts            # Initialize payment
│   │   │   ├── verify/route.ts            # Verify & confirm
│   │   │   └── webhook/razorpay/route.ts  # Razorpay webhook
│   │   │
│   │   ├── admin/
│   │   │   ├── products/route.ts
│   │   │   ├── categories/route.ts
│   │   │   ├── orders/route.ts
│   │   │   ├── customers/route.ts
│   │   │   ├── coupons/route.ts
│   │   │   ├── bundles/route.ts
│   │   │   ├── analytics/route.ts
│   │   │   └── dashboard/route.ts
│   │   │
│   │   ├── reviews/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   │
│   │   ├── back-in-stock/
│   │   │   ├── notify/route.ts
│   │   │   └── check/route.ts
│   │   │
│   │   ├── upload/
│   │   │   └── route.ts                   # Cloudinary upload
│   │   │
│   │   └── notifications/
│   │       └── route.ts
│   │
│   ├── (public)/
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── shipping-policy/page.tsx
│   │   ├── return-policy/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   └── middleware.ts
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx (Admin)
│   │   ├── Navigation.tsx
│   │   └── MobileNav.tsx
│   │
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   ├── Skeleton.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Loading.tsx
│   │   └── ErrorBoundary.tsx
│   │
│   ├── ecommerce/
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ProductImageGallery.tsx
│   │   │   ├── ProductReviews.tsx
│   │   │   ├── ReviewForm.tsx
│   │   │   ├── RelatedProducts.tsx
│   │   │   └── ProductTabs.tsx
│   │   │
│   │   ├── cart/
│   │   │   ├── CartSidebar.tsx
│   │   │   ├── CartPage.tsx
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── QuantitySelector.tsx
│   │   │
│   │   ├── checkout/
│   │   │   ├── CheckoutSteps.tsx
│   │   │   ├── CustomerInfo.tsx
│   │   │   ├── AddressForm.tsx
│   │   │   ├── ShippingMethod.tsx
│   │   │   ├── OrderReview.tsx
│   │   │   ├── PaymentGateway.tsx
│   │   │   ├── OrderConfirmation.tsx
│   │   │   └── PaymentFailed.tsx
│   │   │
│   │   ├── wishlist/
│   │   │   ├── WishlistPage.tsx
│   │   │   ├── WishlistItem.tsx
│   │   │   └── WishlistButton.tsx
│   │   │
│   │   ├── filters/
│   │   │   ├── FilterSidebar.tsx (Desktop)
│   │   │   ├── FilterDrawer.tsx (Mobile)
│   │   │   ├── PriceRangeFilter.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   ├── RatingFilter.tsx
│   │   │   └── AvailabilityFilter.tsx
│   │   │
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SearchSuggestions.tsx
│   │   │   └── SearchResults.tsx
│   │   │
│   │   ├── category/
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   └── CategoryBanner.tsx
│   │   │
│   │   └── bundles/
│   │       ├── BundleCard.tsx
│   │       ├── BundleDetail.tsx
│   │       └── BundleBuilder.tsx
│   │
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── SignupForm.tsx
│   │   ├── ForgotPasswordForm.tsx
│   │   ├── ResetPasswordForm.tsx
│   │   ├── AuthModal.tsx
│   │   └── ProtectedRoute.tsx
│   │
│   ├── admin/
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardHome.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   ├── RevenueChart.tsx
│   │   │   ├── OrdersChart.tsx
│   │   │   ├── RecentOrders.tsx
│   │   │   └── TopProducts.tsx
│   │   │
│   │   ├── products/
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductForm.tsx
│   │   │   ├── ProductImageUpload.tsx
│   │   │   ├── ProductSEO.tsx
│   │   │   └── BulkActions.tsx
│   │   │
│   │   ├── categories/
│   │   │   ├── CategoryList.tsx
│   │   │   ├── CategoryForm.tsx
│   │   │   └── CategoryReorder.tsx
│   │   │
│   │   ├── orders/
│   │   │   ├── OrderList.tsx
│   │   │   ├── OrderDetail.tsx
│   │   │   ├── OrderStatusTimeline.tsx
│   │   │   └── InvoiceGenerator.tsx
│   │   │
│   │   ├── customers/
│   │   │   ├── CustomerList.tsx
│   │   │   └── CustomerDetail.tsx
│   │   │
│   │   ├── reviews/
│   │   │   ├── ReviewList.tsx
│   │   │   └── ReviewModeration.tsx
│   │   │
│   │   ├── coupons/
│   │   │   ├── CouponList.tsx
│   │   │   └── CouponForm.tsx
│   │   │
│   │   ├── bundles/
│   │   │   ├── BundleList.tsx
│   │   │   └── BundleForm.tsx
│   │   │
│   │   ├── analytics/
│   │   │   ├── SalesChart.tsx
│   │   │   ├── RevenueTrend.tsx
│   │   │   └── TopCategories.tsx
│   │   │
│   │   └── settings/
│   │       ├── ShippingSettings.tsx
│   │       ├── GeneralSettings.tsx
│   │       └── NotificationSettings.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CategoryShowcase.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Newsletter.tsx
│   │
│   └── animations/
│       ├── PageTransition.tsx
│       ├── ScrollReveal.tsx
│       ├── StaggerContainer.tsx
│       └── AnimatedCard.tsx
│
├── lib/
│   ├── api.ts                              # Axios instance
│   ├── auth.ts                             # Auth utilities
│   ├── validations.ts                      # Zod schemas
│   ├── constants.ts                        # App constants
│   ├── utils.ts                            # Helper functions
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   ├── useWishlist.ts
│   │   ├── useProduct.ts
│   │   ├── usePagination.ts
│   │   └── useLocalStorage.ts
│   ├── services/
│   │   ├── productService.ts
│   │   ├── orderService.ts
│   │   ├── cartService.ts
│   │   ├── authService.ts
│   │   ├── paymentService.ts
│   │   ├── emailService.ts
│   │   └── cloudinaryService.ts
│   └── icons.ts                            # Icon exports
│
├── server/
│   │
│   ├── actions/                            # Server actions (optional)
│   │   ├── productActions.ts
│   │   └── orderActions.ts
│   │
│   ├── services/
│   │   ├── ProductService.ts
│   │   ├── OrderService.ts
│   │   ├── PaymentService.ts
│   │   ├── EmailService.ts
│   │   ├── CloudinaryService.ts
│   │   ├── InventoryService.ts
│   │   ├── CouponService.ts
│   │   └── NotificationService.ts
│   │
│   ├── db/
│   │   ├── client.ts                       # Prisma client singleton
│   │   └── seed.ts                         # Database seeding
│   │
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── admin.ts
│   │   ├── rateLimit.ts
│   │   └── validation.ts
│   │
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── bcrypt.ts
│   │   ├── validators.ts
│   │   └── errorHandler.ts
│   │
│   └── audio/
│       └── synthesizer.ts                  # Web Audio API synthesis
│
├── prisma/
│   ├── schema.prisma                       # Database schema
│   └── migrations/                         # DB migrations
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── utilities.css
│
├── types/
│   ├── index.ts                            # Global types
│   ├── api.ts                              # API response types
│   ├── entities.ts                         # Database entity types
│   └── forms.ts                            # Form input types
│
├── config/
│   ├── site.ts                             # Site metadata
│   ├── navigation.ts                       # Menu structure
│   └── constants.ts                        # Business logic constants
│
├── env/
│   ├── .env.example                        # Example env variables
│   ├── .env.local                          # Local development
│   ├── .env.production                     # Production
│   └── .env.test                           # Testing
│
├── .gitignore
├── .eslintrc.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── package.json
├── README.md
└── docker-compose.yml                      # PostgreSQL dev setup
```

---

# 🗄️ PRISMA DATABASE SCHEMA

## Complete Schema Design

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================================================
// USERS & AUTHENTICATION
// ============================================================================

enum UserRole {
  CUSTOMER
  ADMIN
  SUPER_ADMIN
}

model User {
  id                    String                    @id @default(cuid())
  email                 String                    @unique
  phone                 String?
  password              String
  firstName             String?
  lastName              String?
  role                  UserRole                  @default(CUSTOMER)
  emailVerified         Boolean                   @default(false)
  phoneVerified         Boolean                   @default(false)
  profileImage          String?
  
  // Relations
  addresses             Address[]
  orders                Order[]
  cart                  Cart?
  wishlist              WishlistItem[]
  reviews               Review[]
  backInStockNotifs     BackInStockNotification[]
  notifications         Notification[]
  
  // Metadata
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  lastLogin             DateTime?
  
  @@index([email])
  @@index([role])
}

model Address {
  id                    String                    @id @default(cuid())
  userId                String
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  fullName              String
  phone                 String
  email                 String
  addressLine1          String
  addressLine2          String?
  city                  String
  state                 String
  pincode               String
  country               String                    @default("India")
  
  isDefault             Boolean                   @default(false)
  
  // Relations
  orders                Order[]
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([userId])
}

// ============================================================================
// PRODUCTS & CATALOG
// ============================================================================

enum ProductStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
  DISCONTINUED
}

enum CrystalType {
  RAW
  POLISHED
  TUMBLED
  TOWER
  CLUSTER
  BRACELET
  PENDANT
  HEART
  SET
}

model Category {
  id                    String                    @id @default(cuid())
  name                  String                    @unique
  slug                  String                    @unique
  description           String?
  image                 String?
  order                 Int                       @default(0)
  isVisible             Boolean                   @default(true)
  
  seoTitle              String?
  seoDescription        String?
  seoKeywords           String?
  
  // Relations
  products              Product[]
  coupons               Coupon[]
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([slug])
}

model Product {
  id                    String                    @id @default(cuid())
  name                  String
  slug                  String                    @unique
  sku                   String                    @unique
  
  categoryId            String
  category              Category                  @relation(fields: [categoryId], references: [id], onDelete: Restrict)
  
  description           String?                   // Long HTML description
  shortDescription      String?                   // Max 160 chars for display
  
  // Pricing
  price                 Float                     // INR
  salePrice             Float?                    // Discounted price
  costPrice             Float?                    // For admin tracking
  
  // Stock & Inventory
  stock                 Int                       @default(0)
  lowStockThreshold     Int                       @default(5)
  
  // Physical Properties
  weight                Float?                    // in grams
  width                 Float?                    // in cm
  height                Float?                    // in cm
  depth                 Float?                    // in cm
  
  // Crystal Details
  crystalType           CrystalType?
  material              String?                   // Material composition
  color                 String?
  origin                String?                   // Origin of crystal (if verified)
  
  // Product Status & Features
  status                ProductStatus             @default(DRAFT)
  isFeatured            Boolean                   @default(false)
  isBestSeller          Boolean                   @default(false)
  isNewArrival          Boolean                   @default(false)
  
  // Care & Usage
  careInstructions      String?
  usage                 String?                   // How to use
  symbolicMeaning       String?                   // Traditional associations
  
  // SEO
  seoTitle              String?
  seoDescription        String?
  seoKeywords           String?
  
  // Relations
  images                ProductImage[]
  tags                  ProductTag[]
  variants              ProductVariant[]
  reviews               Review[]
  cartItems             CartItem[]
  wishlistItems         WishlistItem[]
  bundleItems           BundleItem[]
  backInStockNotifs     BackInStockNotification[]
  inventoryTransactions InventoryTransaction[]
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([categoryId])
  @@index([slug])
  @@index([isFeatured])
  @@index([isBestSeller])
  @@fulltext([name, shortDescription])         // For full-text search
}

model ProductImage {
  id                    String                    @id @default(cuid())
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  url                   String                    // Cloudinary URL
  publicId              String                    // Cloudinary public ID
  altText               String?
  caption               String?
  order                 Int                       @default(0)
  isPrimary             Boolean                   @default(false)
  
  createdAt             DateTime                  @default(now())
  
  @@index([productId])
}

model ProductTag {
  id                    String                    @id @default(cuid())
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  tag                   String                    // e.g., "meditation", "love", "protection"
  
  @@unique([productId, tag])
  @@index([productId])
}

model ProductVariant {
  id                    String                    @id @default(cuid())
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  name                  String                    // e.g., "Small", "Large"
  sku                   String                    @unique
  price                 Float
  stock                 Int
  
  weight                Float?
  dimensions            String?                   // JSON stringified
  
  cartItems             CartItem[]
  orderItems            OrderItem[]
  
  createdAt             DateTime                  @default(now())
  
  @@index([productId])
}

// ============================================================================
// CART & WISHLIST
// ============================================================================

model Cart {
  id                    String                    @id @default(cuid())
  userId                String                    @unique
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  items                 CartItem[]
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([userId])
}

model CartItem {
  id                    String                    @id @default(cuid())
  cartId                String
  cart                  Cart                      @relation(fields: [cartId], references: [id], onDelete: Cascade)
  
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  variantId             String?
  variant               ProductVariant?           @relation(fields: [variantId], references: [id])
  
  quantity              Int
  
  // Gift options
  hasGiftPackaging      Boolean                   @default(false)
  giftMessage           String?
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@unique([cartId, productId, variantId])
  @@index([cartId])
  @@index([productId])
}

model WishlistItem {
  id                    String                    @id @default(cuid())
  userId                String
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  createdAt             DateTime                  @default(now())
  
  @@unique([userId, productId])
  @@index([userId])
  @@index([productId])
}

// ============================================================================
// ORDERS & PAYMENTS
// ============================================================================

enum OrderStatus {
  PENDING
  PAYMENT_CONFIRMED
  PROCESSING
  PACKED
  SHIPPED
  OUT_FOR_DELIVERY
  DELIVERED
  CANCELLED
  REFUNDED
}

enum PaymentMethod {
  UPI
  CARD
  NETBANKING
  WALLET
  RAZORPAY
}

enum PaymentStatus {
  PENDING
  INITIATED
  SUCCESS
  FAILED
  CANCELLED
  REFUNDED
}

model Order {
  id                    String                    @id @default(cuid())
  orderNumber           String                    @unique          // JHC-20260808-001
  
  userId                String
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Restrict)
  
  addressId             String
  address               Address                   @relation(fields: [addressId], references: [id])
  
  // Order Details
  items                 OrderItem[]
  status                OrderStatus               @default(PENDING)
  
  // Pricing
  subtotal              Float                     // Sum of items
  discountAmount        Float                     @default(0)
  shippingFee           Float                     @default(0)
  tax                   Float                     @default(0)
  total                 Float                     // Final amount
  
  // Coupon Applied
  couponId              String?
  coupon                Coupon?                   @relation(fields: [couponId], references: [id])
  
  // Payment
  payment               Payment?
  paymentMethod         PaymentMethod?
  paymentStatus         PaymentStatus             @default(PENDING)
  
  // Shipping
  shippingMethod        String?
  trackingNumber        String?
  estimatedDelivery     DateTime?
  
  // Notes
  internalNotes         String?
  customerNotes         String?
  
  // Metadata
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  completedAt           DateTime?
  
  @@index([userId])
  @@index([orderNumber])
  @@index([status])
  @@index([paymentStatus])
}

model OrderItem {
  id                    String                    @id @default(cuid())
  orderId               String
  order                 Order                     @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  productId             String
  productName           String                    // Snapshot of name
  productImage          String?
  
  variantId             String?
  variant               ProductVariant?           @relation(fields: [variantId], references: [id])
  
  quantity              Int
  unitPrice             Float
  totalPrice            Float                     // quantity * unitPrice
  
  // Gift options
  hasGiftPackaging      Boolean                   @default(false)
  giftMessage           String?
  giftPackagingFee      Float                     @default(0)
  
  createdAt             DateTime                  @default(now())
  
  @@index([orderId])
  @@index([productId])
}

model Payment {
  id                    String                    @id @default(cuid())
  orderId               String                    @unique
  order                 Order                     @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  razorpayOrderId       String?                   // Razorpay order ID
  razorpayPaymentId     String?                   // Razorpay payment ID
  razorpaySignature     String?                   // Signature for verification
  
  amount                Float
  currency              String                    @default("INR")
  method                PaymentMethod
  status                PaymentStatus
  
  metadata              String?                   // JSON stringified additional data
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([orderId])
  @@index([razorpayOrderId])
}

// ============================================================================
// COUPONS & OFFERS
// ============================================================================

enum DiscountType {
  PERCENTAGE
  FIXED_AMOUNT
}

model Coupon {
  id                    String                    @id @default(cuid())
  code                  String                    @unique @upper
  
  discountType          DiscountType
  discountValue         Float                     // Percentage or fixed amount
  
  minOrderAmount        Float?                    // Minimum cart value
  maxDiscount           Float?                    // Max discount cap
  
  applicableCategories  String[]                  // Category IDs (JSON)
  applicableProducts    String[]                  // Product IDs (JSON)
  
  usageLimit            Int?                      // Total usage limit
  perUserLimit          Int?                      // Per user usage limit
  
  startDate             DateTime
  expiryDate            DateTime
  
  isActive              Boolean                   @default(true)
  
  // Relations
  orders                Order[]
  usageHistory          CouponUsage[]
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([code])
  @@index([isActive])
}

model CouponUsage {
  id                    String                    @id @default(cuid())
  couponId              String
  coupon                Coupon                    @relation(fields: [couponId], references: [id], onDelete: Cascade)
  
  userId                String
  orderId               String
  
  usedAt                DateTime                  @default(now())
  
  @@unique([couponId, orderId])
  @@index([couponId])
  @@index([userId])
}

// ============================================================================
// PRODUCT BUNDLES & GIFT PACKAGING
// ============================================================================

model Bundle {
  id                    String                    @id @default(cuid())
  name                  String
  slug                  String                    @unique
  description           String?
  
  price                 Float
  salePrice             Float?
  
  image                 String?                   // Bundle image
  
  items                 BundleItem[]
  isFeatured            Boolean                   @default(false)
  isActive              Boolean                   @default(true)
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@index([slug])
}

model BundleItem {
  id                    String                    @id @default(cuid())
  bundleId              String
  bundle                Bundle                    @relation(fields: [bundleId], references: [id], onDelete: Cascade)
  
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  quantity              Int                       @default(1)
  
  @@unique([bundleId, productId])
  @@index([bundleId])
}

model GiftPackaging {
  id                    String                    @id @default(cuid())
  name                  String
  description           String?
  price                 Float
  image                 String?
  
  isActive              Boolean                   @default(true)
  
  createdAt             DateTime                  @default(now())
}

// ============================================================================
// REVIEWS & RATINGS
// ============================================================================

model Review {
  id                    String                    @id @default(cuid())
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  userId                String
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  orderId               String?                   // Link to order for "Verified Purchase"
  
  rating                Int                       // 1-5
  title                 String
  content               String?
  images                String[]                  // Cloudinary URLs
  
  isApproved            Boolean                   @default(false)
  isVerifiedPurchase    Boolean                   @default(false)
  
  helpfulCount          Int                       @default(0)
  flaggedCount          Int                       @default(0)
  isFlagged             Boolean                   @default(false)
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
  
  @@unique([productId, userId])
  @@index([productId])
  @@index([userId])
  @@index([isApproved])
}

// ============================================================================
// INVENTORY & NOTIFICATIONS
// ============================================================================

enum InventoryAction {
  ADD
  REMOVE
  ADJUSTMENT
  RETURN
  DAMAGED
}

model InventoryTransaction {
  id                    String                    @id @default(cuid())
  productId             String
  product               Product                   @relation(fields: [productId], references: [id])
  
  action                InventoryAction
  quantity              Int
  reason                String?
  
  orderId               String?                   // If related to order
  
  createdAt             DateTime                  @default(now())
  
  @@index([productId])
  @@index([orderId])
}

model BackInStockNotification {
  id                    String                    @id @default(cuid())
  productId             String
  product               Product                   @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  userId                String
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  email                 String
  isNotified            Boolean                   @default(false)
  notifiedAt            DateTime?
  
  createdAt             DateTime                  @default(now())
  
  @@unique([productId, userId])
  @@index([productId])
  @@index([userId])
}

model Notification {
  id                    String                    @id @default(cuid())
  userId                String
  user                  User                      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  type                  String                    // "order_status", "back_in_stock", "promotion"
  title                 String
  message               String
  
  relatedOrderId        String?
  relatedProductId      String?
  
  isRead                Boolean                   @default(false)
  
  createdAt             DateTime                  @default(now())
  
  @@index([userId])
  @@index([isRead])
}

// ============================================================================
// SHIPPING & ADMIN SETTINGS
// ============================================================================

model ShippingMethod {
  id                    String                    @id @default(cuid())
  name                  String
  description           String?
  
  baseFee               Float
  freeShippingThreshold Float?
  
  minDeliveryDays       Int
  maxDeliveryDays       Int
  
  applicablePincodes    String[]                  // JSON array
  
  isActive              Boolean                   @default(true)
  
  createdAt             DateTime                  @default(now())
  updatedAt             DateTime                  @updatedAt
}

model AdminSetting {
  id                    String                    @id @default(cuid())
  key                   String                    @unique
  value                 String
  
  description           String?
  
  updatedAt             DateTime                  @updatedAt
}

// ============================================================================
// ADMIN ACTIVITY LOG
// ============================================================================

model AdminActivityLog {
  id                    String                    @id @default(cuid())
  userId                String
  
  action                String                    // "product_created", "order_updated", etc.
  entityType            String                    // "product", "order", "coupon"
  entityId              String
  
  changes               String?                   // JSON stringified before/after
  ipAddress             String?
  userAgent             String?
  
  createdAt             DateTime                  @default(now())
  
  @@index([userId])
  @@index([action])
  @@index([createdAt])
}
```

---

# 🔐 AUTHENTICATION & AUTHORIZATION

## Authentication Flow

### User Registration (Signup)

```typescript
// /app/api/auth/register/route.ts

import { hash } from 'bcryptjs';
import { z } from 'zod';
import prisma from '@/server/db/client';

const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  firstName: z.string().min(2),
  lastName: z.string().min(1),
  phone: z.string().regex(/^\+?1?\d{9,15}$/),
  password: z.string()
    .min(8, 'Min 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase')
    .regex(/[a-z]/, 'Must contain lowercase')
    .regex(/[0-9]/, 'Must contain number')
    .regex(/[!@#$%^&*]/, 'Must contain special char'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validated = signupSchema.parse(body);
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validated.email },
    });
    
    if (existingUser) {
      return Response.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }
    
    // Hash password
    const hashedPassword = await hash(validated.password, 12);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        email: validated.email,
        firstName: validated.firstName,
        lastName: validated.lastName,
        phone: validated.phone,
        password: hashedPassword,
        role: 'CUSTOMER',
        cart: { create: {} }, // Auto-create cart
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        role: true,
      },
    });
    
    // Generate JWT tokens
    const accessToken = generateJWT(user, 'access'); // 15 min
    const refreshToken = generateJWT(user, 'refresh'); // 7 days
    
    // Set secure HTTP-only cookie
    const response = Response.json({
      success: true,
      user,
      accessToken,
    });
    
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });
    
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return Response.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

### User Login

```typescript
// /app/api/auth/login/route.ts

import { compare } from 'bcryptjs';
import { z } from 'zod';
import prisma from '@/server/db/client';
import { generateJWT } from '@/server/utils/jwt';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = loginSchema.parse(body);
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: validated.email },
    });
    
    if (!user) {
      return Response.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Verify password
    const isValidPassword = await compare(
      validated.password,
      user.password
    );
    
    if (!isValidPassword) {
      return Response.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });
    
    // Generate tokens
    const accessToken = generateJWT(user, 'access');
    const refreshToken = generateJWT(user, 'refresh');
    
    const response = Response.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        role: user.role,
      },
      accessToken,
    });
    
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });
    
    return response;
  } catch (error) {
    return Response.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
```

---

# 📦 CORE E-COMMERCE FEATURES IMPLEMENTATION

## 1. Product Catalog with Search & Filters

### Frontend: Store Homepage

```typescript
// /app/services/crystal-products/page.tsx

import { Suspense } from 'react';
import { ProductGrid } from '@/components/ecommerce/product/ProductGrid';
import { FilterSidebar } from '@/components/ecommerce/filters/FilterSidebar';
import { SearchBar } from '@/components/ecommerce/search/SearchBar';
import { CategoriesShowcase } from '@/components/ecommerce/category/CategoryShowcase';
import { StoreHero } from '@/components/sections/StoreHero';

export const metadata = {
  title: 'Crystal Products | Jaimini Homeocare & Healing Centre',
  description: 'Explore our collection of premium crystals and crystal bracelets for wellness and spiritual practices.',
  openGraph: {
    title: 'Crystal Products | Jaimini',
    description: 'Premium crystal collection',
    url: 'https://jaimini-healing.com/services/crystal-products',
  },
};

interface StorePageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    priceMin?: string;
    priceMax?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function StorePage({ searchParams }: StorePageProps) {
  const params = await searchParams;
  
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <StoreHero />
      
      {/* Categories Showcase */}
      <CategoriesShowcase />
      
      {/* Store Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block">
            <Suspense fallback={<FilterSkeleton />}>
              <FilterSidebar initialFilters={params} />
            </Suspense>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search & Mobile Filter */}
            <div className="space-y-4 mb-8">
              <SearchBar />
              {/* Mobile filter drawer button */}
            </div>
            
            {/* Product Grid */}
            <Suspense fallback={<ProductGridSkeleton />}>
              <ProductGrid
                search={params.search}
                category={params.category}
                priceMin={params.priceMin ? parseFloat(params.priceMin) : undefined}
                priceMax={params.priceMax ? parseFloat(params.priceMax) : undefined}
                rating={params.rating ? parseInt(params.rating) : undefined}
                sort={params.sort || 'featured'}
                page={params.page ? parseInt(params.page) : 1}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Backend: Product API with Advanced Filtering

```typescript
// /app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/server/db/client';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Query parameters
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const priceMin = searchParams.get('priceMin') ? parseFloat(searchParams.get('priceMin')!) : undefined;
    const priceMax = searchParams.get('priceMax') ? parseFloat(searchParams.get('priceMax')!) : undefined;
    const rating = searchParams.get('rating') ? parseInt(searchParams.get('rating')!) : undefined;
    const sort = searchParams.get('sort') || 'featured';
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const limit = 12;
    const skip = (page - 1) * limit;
    
    // Build where clause
    const where: Prisma.ProductWhereInput = {
      status: 'PUBLISHED',
      AND: [
        search ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { shortDescription: { contains: search, mode: 'insensitive' } },
            { tags: { some: { tag: { contains: search, mode: 'insensitive' } } } },
          ],
        } : {},
        category ? { category: { slug: category } } : {},
        priceMin !== undefined ? { salePrice: { gte: priceMin } } : {},
        priceMax !== undefined ? { salePrice: { lte: priceMax } } : {},
        rating ? {
          reviews: {
            some: { rating: { gte: rating }, isApproved: true },
          },
        } : {},
      ],
    };
    
    // Sort logic
    let orderBy: Prisma.ProductOrderByWithRelationInput = { createdAt: 'desc' };
    
    switch (sort) {
      case 'newest':
        orderBy = { createdAt: 'desc' };
        break;
      case 'priceLow':
        orderBy = { salePrice: 'asc' };
        break;
      case 'priceHigh':
        orderBy = { salePrice: 'desc' };
        break;
      case 'popular':
        orderBy = { reviews: { _count: 'desc' } };
        break;
      case 'bestSeller':
        orderBy = { isBestSeller: 'desc' };
        break;
      case 'rating':
        // This requires custom aggregation
        break;
      case 'featured':
      default:
        orderBy = { isFeatured: 'desc' };
    }
    
    // Fetch products
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          category: true,
          images: { where: { isPrimary: true }, take: 1 },
          reviews: { where: { isApproved: true } },
          tags: true,
          _count: { select: { reviews: true } },
        },
      }),
      prisma.product.count({ where }),
    ]);
    
    // Enrich products with averageRating
    const enrichedProducts = products.map(product => {
      const avgRating = product.reviews.length > 0
        ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
        : 0;
      
      return {
        ...product,
        averageRating: Math.round(avgRating * 10) / 10,
      };
    });
    
    return NextResponse.json({
      success: true,
      data: enrichedProducts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Product fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
```

---

## 2. Product Detail Page with Gallery & Reviews

```typescript
// /app/services/crystal-products/[slug]/page.tsx

import { notFound } from 'next/navigation';
import prisma from '@/server/db/client';
import { ProductDetail } from '@/components/ecommerce/product/ProductDetail';
import { ProductImageGallery } from '@/components/ecommerce/product/ProductImageGallery';
import { ProductReviews } from '@/components/ecommerce/product/ProductReviews';
import { RelatedProducts } from '@/components/ecommerce/product/RelatedProducts';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  
  const product = await prisma.product.findUnique({
    where: { slug },
    select: {
      name: true,
      shortDescription: true,
      seoTitle: true,
      seoDescription: true,
      images: { take: 1 },
      price: true,
      salePrice: true,
    },
  });
  
  if (!product) return { title: 'Product not found' };
  
  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.shortDescription,
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.shortDescription,
      images: product.images[0]?.url ? [{ url: product.images[0].url }] : [],
      type: 'product',
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
      images: true,
      reviews: { 
        where: { isApproved: true },
        include: { user: { select: { firstName: true, profileImage: true } } },
      },
      tags: true,
      _count: { select: { reviews: true } },
    },
  });
  
  if (!product) notFound();
  
  const avgRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0;
  
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <ProductImageGallery images={product.images} productName={product.name} />
          
          {/* Product Info */}
          <ProductDetail
            product={{...product, averageRating: avgRating}}
          />
        </div>
        
        {/* Tabs Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About, Care, Usage Tabs */}
          </div>
          
          {/* Right Sidebar: Related Products */}
          <div>
            <RelatedProducts
              currentProductId={product.id}
              categoryId={product.categoryId}
            />
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-16">
          <ProductReviews
            product={product}
            averageRating={avgRating}
            reviewCount={product._count.reviews}
          />
        </div>
      </div>
    </div>
  );
}
```

---

## 3. Cart Management with Local & Database Sync

```typescript
// lib/hooks/useCart.ts

'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import axios from '@/lib/api';

interface CartItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
  hasGiftPackaging: boolean;
  giftMessage?: string;
}

export function useCart() {
  const { user, isAuthenticated } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load cart on mount
  useEffect(() => {
    loadCart();
  }, [isAuthenticated]);
  
  const loadCart = useCallback(async () => {
    setIsLoading(true);
    try {
      if (isAuthenticated && user) {
        // Fetch from database
        const response = await axios.get('/api/cart');
        setItems(response.data.items || []);
      } else {
        // Load from localStorage
        const stored = localStorage.getItem('cart');
        setItems(stored ? JSON.parse(stored) : []);
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated, user]);
  
  const addToCart = useCallback(async (
    productId: string,
    quantity: number = 1,
    options?: { hasGiftPackaging?: boolean; giftMessage?: string }
  ) => {
    try {
      if (isAuthenticated && user) {
        // Add to database cart
        const response = await axios.post('/api/cart', {
          productId,
          quantity,
          ...options,
        });
        setItems(response.data.items);
      } else {
        // Add to localStorage
        const product = await fetchProduct(productId);
        const newItem = {
          id: `${productId}-${Date.now()}`,
          productId,
          productName: product.name,
          quantity,
          price: product.salePrice || product.price,
          image: product.images[0]?.url || '',
          hasGiftPackaging: options?.hasGiftPackaging || false,
          giftMessage: options?.giftMessage,
        };
        
        const updated = [...items, newItem];
        setItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
      }
      
      return true;
    } catch (error) {
      console.error('Failed to add to cart:', error);
      return false;
    }
  }, [isAuthenticated, user, items]);
  
  const updateQuantity = useCallback(async (itemId: string, quantity: number) => {
    try {
      if (isAuthenticated && user) {
        const response = await axios.put(`/api/cart/${itemId}`, { quantity });
        setItems(response.data.items);
      } else {
        const updated = items.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        );
        setItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  }, [isAuthenticated, user, items]);
  
  const removeItem = useCallback(async (itemId: string) => {
    try {
      if (isAuthenticated && user) {
        const response = await axios.delete(`/api/cart/${itemId}`);
        setItems(response.data.items);
      } else {
        const updated = items.filter(item => item.id !== itemId);
        setItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
      }
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  }, [isAuthenticated, user, items]);
  
  const getTotal = useCallback(() => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [items]);
  
  const getItemCount = useCallback(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);
  
  return {
    items,
    isLoading,
    addToCart,
    updateQuantity,
    removeItem,
    getTotal,
    getItemCount,
    loadCart,
  };
}
```

---

## 4. Checkout Flow with Razorpay Integration

```typescript
// /app/api/checkout/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import prisma from '@/server/db/client';
import { verifyAuth } from '@/server/middleware/auth';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    // Verify auth
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { items, addressId, couponCode } = await request.json();
    
    // Validate cart items on backend
    const cartProducts = await prisma.product.findMany({
      where: {
        id: { in: items.map(i => i.productId) },
        stock: { gte: 1 },
      },
    });
    
    // Recalculate totals on backend (CRITICAL)
    let subtotal = 0;
    items.forEach(item => {
      const product = cartProducts.find(p => p.id === item.productId);
      if (product) {
        subtotal += (product.salePrice || product.price) * item.quantity;
      }
    });
    
    // Apply coupon if provided
    let discountAmount = 0;
    if (couponCode) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode.toUpperCase() },
      });
      
      if (coupon && coupon.isActive && new Date() <= coupon.expiryDate) {
        if (coupon.discountType === 'PERCENTAGE') {
          discountAmount = Math.min(
            (subtotal * coupon.discountValue) / 100,
            coupon.maxDiscount || Infinity
          );
        } else {
          discountAmount = Math.min(coupon.discountValue, coupon.maxDiscount || Infinity);
        }
      }
    }
    
    // Calculate total
    const shippingFee = subtotal > 5000 ? 0 : 100;
    const tax = Math.round((subtotal * 0.05) * 100) / 100; // 5% tax
    const total = Math.round((subtotal - discountAmount + shippingFee + tax) * 100); // in paise
    
    // Create order
    const order = await prisma.order.create({
      data: {
        orderNumber: `JHC-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        userId: user.id,
        addressId,
        items: {
          create: items.map(item => ({
            productId: item.productId,
            productName: item.productName,
            quantity: item.quantity,
            unitPrice: item.price,
            totalPrice: item.price * item.quantity,
            hasGiftPackaging: item.hasGiftPackaging || false,
            giftMessage: item.giftMessage,
          })),
        },
        subtotal,
        discountAmount,
        shippingFee,
        tax,
        total: total / 100,
        couponId: couponCode ? (await prisma.coupon.findUnique({
          where: { code: couponCode.toUpperCase() },
        }))?.id : undefined,
        status: 'PENDING',
        paymentStatus: 'PENDING',
      },
      include: { items: true },
    });
    
    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: total, // in paise
      currency: 'INR',
      receipt: order.orderNumber,
      notes: {
        orderId: order.id,
        userId: user.id,
      },
    });
    
    // Save Razorpay order ID
    await prisma.payment.create({
      data: {
        orderId: order.id,
        amount: total / 100,
        currency: 'INR',
        method: 'RAZORPAY',
        status: 'INITIATED',
        razorpayOrderId: razorpayOrder.id,
      },
    });
    
    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: order.orderNumber,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Checkout failed' },
      { status: 500 }
    );
  }
}
```

### Razorpay Payment Verification

```typescript
// /app/api/payments/verify/route.ts

import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/server/db/client';
import { sendOrderConfirmationEmail } from '@/server/services/EmailService';

export async function POST(request: NextRequest) {
  try {
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      orderId,
    } = await request.json();
    
    // Verify signature
    const body = razorpayOrderId + '|' + razorpayPaymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex');
    
    if (expectedSignature !== razorpaySignature) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }
    
    // Update payment status
    const payment = await prisma.payment.update({
      where: { orderId },
      data: {
        razorpayPaymentId,
        razorpaySignature,
        status: 'SUCCESS',
      },
    });
    
    // Update order status
    const order = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'PAYMENT_CONFIRMED',
        paymentStatus: 'SUCCESS',
      },
      include: {
        user: true,
        items: { include: { product: true } },
      },
    });
    
    // Reduce inventory
    for (const item of order.items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } },
      });
      
      // Log inventory transaction
      await prisma.inventoryTransaction.create({
        data: {
          productId: item.productId,
          action: 'REMOVE',
          quantity: item.quantity,
          reason: `Order ${order.orderNumber}`,
          orderId: order.id,
        },
      });
    }
    
    // Send confirmation email
    await sendOrderConfirmationEmail(order);
    
    // Create notification
    await prisma.notification.create({
      data: {
        userId: order.userId,
        type: 'order_confirmed',
        title: 'Order Confirmed',
        message: `Your order ${order.orderNumber} has been confirmed. Expected delivery: 3-5 days.`,
        relatedOrderId: order.id,
      },
    });
    
    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    );
  }
}
```

---

# ⭐ NEW FEATURES IMPLEMENTATION

## 1. Back-in-Stock Notifications

### Model: Already in Prisma Schema

```prisma
model BackInStockNotification {
  id          String   @id @default(cuid())
  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  email       String
  isNotified  Boolean  @default(false)
  notifiedAt  DateTime?
  
  createdAt   DateTime @default(now())
  
  @@unique([productId, userId])
}
```

### Frontend: Notify Button Component

```typescript
// components/ecommerce/product/NotifyButton.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import axios from '@/lib/api';
import { useAuth } from '@/lib/hooks/useAuth';
import { AuthModal } from '@/components/auth/AuthModal';
import { Toast } from '@/components/common/Toast';

interface NotifyButtonProps {
  productId: string;
  productName: string;
  isOutOfStock: boolean;
}

export function NotifyButton({ productId, productName, isOutOfStock }: NotifyButtonProps) {
  const { user, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isNotified, setIsNotified] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  
  if (!isOutOfStock) return null;
  
  const handleNotify = async () => {
    if (!isAuthenticated || !user) {
      setShowAuthModal(true);
      return;
    }
    
    setIsLoading(true);
    try {
      await axios.post('/api/back-in-stock/notify', {
        productId,
        email: user.email,
      });
      
      setIsNotified(true);
      setToast({
        message: `We'll notify you when ${productName} is back in stock!`,
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: 'Failed to set notification',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <motion.button
        onClick={handleNotify}
        disabled={isLoading || isNotified}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          isNotified
            ? 'bg-green-100 text-green-700'
            : 'bg-primary-green text-cream hover:bg-opacity-90'
        }`}
      >
        <Bell size={20} />
        {isNotified ? 'Notification Set' : 'Notify Me When Available'}
      </motion.button>
    </>
  );
}
```

### Backend: Inventory Change Handler

```typescript
// server/services/InventoryService.ts

import prisma from '@/server/db/client';
import { sendEmail } from './EmailService';

export class InventoryService {
  static async handleStockUpdate(productId: string, newStock: number) {
    // Check if product just came back in stock
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    
    if (!product || newStock <= 0) return;
    
    // Find all back-in-stock notifications for this product
    const notifications = await prisma.backInStockNotification.findMany({
      where: {
        productId,
        isNotified: false,
      },
      include: { user: true },
    });
    
    // Send email to each user
    for (const notif of notifications) {
      try {
        await sendEmail({
          to: notif.email,
          subject: `${product.name} is back in stock!`,
          template: 'backInStock',
          variables: {
            productName: product.name,
            productUrl: `/services/crystal-products/${product.slug}`,
            firstName: notif.user.firstName,
          },
        });
        
        // Mark as notified
        await prisma.backInStockNotification.update({
          where: { id: notif.id },
          data: {
            isNotified: true,
            notifiedAt: new Date(),
          },
        });
      } catch (error) {
        console.error(`Failed to notify ${notif.email}:`, error);
      }
    }
  }
}
```

---

## 2. Gift Packaging Option

### Frontend: Cart Item with Gift Options

```typescript
// components/ecommerce/cart/CartItem.tsx

'use client';

import { useState } from 'react';
import { Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartItemProps {
  item: any;
  onUpdateGiftOptions: (itemId: string, hasGiftPackaging: boolean, message?: string) => void;
}

export function CartItem({ item, onUpdateGiftOptions }: CartItemProps) {
  const [showGiftOptions, setShowGiftOptions] = useState(false);
  const [giftMessage, setGiftMessage] = useState(item.giftMessage || '');
  
  const GIFT_PACKAGING_FEE = 99; // INR
  
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
      {/* ... existing cart item content ... */}
      
      {/* Gift Options Section */}
      <div className="mt-4 border-t pt-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={item.hasGiftPackaging}
            onChange={(e) => {
              onUpdateGiftOptions(item.id, e.target.checked, giftMessage);
              if (!e.target.checked) {
                setShowGiftOptions(false);
              }
            }}
            className="rounded"
          />
          <Gift size={18} className="text-primary-gold" />
          <span className="text-sm font-medium">
            🎁 Gift Packaging (₹{GIFT_PACKAGING_FEE})
          </span>
        </label>
        
        <AnimatePresence>
          {item.hasGiftPackaging && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pl-6"
            >
              <label className="block text-sm text-gray-700 mb-2">
                Gift Message (Optional, max 150 chars)
              </label>
              <textarea
                value={giftMessage}
                onChange={(e) => {
                  setGiftMessage(e.target.value.slice(0, 150));
                  onUpdateGiftOptions(item.id, true, e.target.value);
                }}
                placeholder="Write a personal message..."
                maxLength={150}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent text-sm"
              />
              <span className="text-xs text-gray-500 mt-1">
                {giftMessage.length}/150
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

### Backend: Gift Packaging Fee Calculation

```typescript
// In checkout calculation:

const giftPackagingFee = items.reduce((sum, item) => {
  return sum + (item.hasGiftPackaging ? 99 : 0);
}, 0);

const total = subtotal - discountAmount + shippingFee + tax + giftPackagingFee;
```

---

## 3. Product Bundles

### Frontend: Bundle Display & Builder

```typescript
// components/ecommerce/bundles/BundleCard.tsx

'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BundleCardProps {
  bundle: {
    id: string;
    name: string;
    slug: string;
    price: number;
    salePrice?: number;
    image?: string;
    items: { product: { name: string; image: string } }[];
  };
  onAddToCart: (bundleId: string) => void;
}

export function BundleCard({ bundle, onAddToCart }: BundleCardProps) {
  const discount = bundle.salePrice
    ? Math.round(((bundle.price - bundle.salePrice) / bundle.price) * 100)
    : 0;
  
  const currentPrice = bundle.salePrice || bundle.price;
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gradient-to-br from-cream to-sage-green rounded-xl overflow-hidden border border-primary-green/10 shadow-lg"
    >
      {/* Bundle Header */}
      <div className="relative">
        {bundle.image ? (
          <Image
            src={bundle.image}
            alt={bundle.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-sage-green flex items-center justify-center">
            <Zap size={48} className="text-primary-green opacity-20" />
          </div>
        )}
        
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-primary-gold text-charcoal px-3 py-1 rounded-full font-bold text-sm">
            {discount}% OFF
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-playfair text-lg font-bold text-charcoal mb-2">
          {bundle.name}
        </h3>
        
        {/* Bundle Items */}
        <div className="mb-4 space-y-1">
          <p className="text-xs text-gray-600 font-semibold mb-2">INCLUDES:</p>
          {bundle.items.map((item, idx) => (
            <p key={idx} className="text-sm text-gray-700">
              • {item.product.name}
            </p>
          ))}
        </div>
        
        {/* Pricing */}
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary-green">₹{currentPrice}</span>
          {bundle.salePrice && (
            <span className="text-sm text-gray-500 line-through">₹{bundle.price}</span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(bundle.id)}
            className="flex-1 bg-primary-green text-cream py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Add Bundle
          </button>
          <Link
            href={`/services/crystal-products/bundles/${bundle.slug}`}
            className="flex-1 border border-primary-green text-primary-green py-2 rounded-lg font-semibold hover:bg-primary-green/5 transition-all text-center"
          >
            Customize
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
```

### Backend: Bundle Management API

```typescript
// /app/api/bundles/route.ts

import prisma from '@/server/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const bundles = await prisma.bundle.findMany({
      where: { isActive: true },
      include: {
        items: {
          include: { product: { select: { id: true, name: true, price: true } } },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    
    return NextResponse.json({ success: true, data: bundles });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bundles' }, { status: 500 });
  }
}

// POST: Create bundle (admin only)
export async function POST(request: NextRequest) {
  // Admin middleware check
  const { name, description, price, salePrice, productIds } = await request.json();
  
  const bundle = await prisma.bundle.create({
    data: {
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      description,
      price,
      salePrice,
      items: {
        create: productIds.map(productId => ({ productId })),
      },
    },
    include: { items: { include: { product: true } } },
  });
  
  return NextResponse.json({ success: true, data: bundle });
}
```

---

## 4. WhatsApp Hybrid Integration

### Frontend: WhatsApp Inquiry Component

```typescript
// components/ecommerce/product/WhatsAppInquiry.tsx

'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhatsAppInquiryProps {
  productName: string;
  productPrice: number;
  drPhoneNumber: string; // +91XXXXXXXXXX
}

export function WhatsAppInquiry({
  productName,
  productPrice,
  drPhoneNumber,
}: WhatsAppInquiryProps) {
  const handleWhatsAppClick = () => {
    const message = `Hello Dr. Niyati, I'm interested in purchasing *${productName}* (₹${productPrice}). Could you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${drPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <motion.button
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
    >
      <MessageCircle size={20} />
      Ask on WhatsApp
    </motion.button>
  );
}
```

### Product Page Integration

```typescript
// In ProductDetail component:

<div className="flex flex-col gap-4 sm:flex-row">
  <button onClick={handleBuyNow} className="flex-1 bg-primary-green text-cream py-3 rounded-lg font-semibold">
    Buy Now
  </button>
  <WhatsAppInquiry
    productName={product.name}
    productPrice={product.salePrice || product.price}
    drPhoneNumber="+919876543210" // Set from env
  />
</div>
```

### Cart Page: Support Option

```typescript
// In CartPage component footer:

<div className="bg-sage-green/20 rounded-lg p-4 text-center">
  <p className="text-sm text-gray-700 mb-3">
    Have questions about your order?
  </p>
  <a
    href={`https://wa.me/${process.env.NEXT_PUBLIC_DR_PHONE}?text=I have a question about my cart`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
  >
    <MessageCircle size={18} />
    Contact on WhatsApp
  </a>
</div>
```

---

## 5. Admin Dashboard Control

The admin dashboard needs to be completely self-service. Dr. Niyati should never need developer help.

### Admin Product Management

```typescript
// /app/admin/products/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { ProductList } from '@/components/admin/products/ProductList';
import { ProductForm } from '@/components/admin/products/ProductForm';
import { Button } from '@/components/common/Button';
import { Plus } from 'lucide-react';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    const response = await fetch('/api/admin/products');
    const data = await response.json();
    setProducts(data.data);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">Products</h1>
        <Button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Add New Product
        </Button>
      </div>
      
      {showForm ? (
        <ProductForm
          product={editingProduct}
          onSave={(product) => {
            setShowForm(false);
            fetchProducts();
          }}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <ProductList
          products={products}
          onEdit={(product) => {
            setEditingProduct(product);
            setShowForm(true);
          }}
          onDelete={(productId) => {
            setProducts(products.filter(p => p.id !== productId));
          }}
        />
      )}
    </div>
  );
}
```

### Product Form with Rich Editor

```typescript
// components/admin/products/ProductForm.tsx

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ProductImageUpload } from './ProductImageUpload';
import { SeoOptimization } from '@/components/admin/products/ProductSEO';

const productSchema = z.object({
  name: z.string().min(1, 'Product name required'),
  slug: z.string().min(1),
  categoryId: z.string(),
  description: z.string(),
  shortDescription: z.string().max(160),
  price: z.number().min(0),
  salePrice: z.number().min(0).optional(),
  stock: z.number().min(0),
  lowStockThreshold: z.number().min(0),
  // ... more fields
});

type ProductFormData = z.infer<typeof productSchema>;

export function ProductForm({ product, onSave, onCancel }) {
  const [images, setImages] = useState(product?.images || []);
  const [seoOpen, setSeoOpen] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: product || {},
  });
  
  const onSubmit = async (data: ProductFormData) => {
    // Submit form
    const response = await fetch(
      product ? `/api/admin/products/${product.id}` : '/api/admin/products',
      {
        method: product ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, images }),
      }
    );
    
    if (response.ok) {
      onSave(await response.json());
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg">
      {/* Basic Information */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Basic Information</legend>
        
        <div>
          <label className="block text-sm font-medium mb-2">Product Name *</label>
          <input
            {...register('name')}
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-green"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <select {...register('categoryId')} className="w-full px-4 py-2 border rounded-lg">
            <option>Select Category</option>
            {/* Categories loaded from API */}
          </select>
        </div>
      </fieldset>
      
      {/* Pricing */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Pricing</legend>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Price (₹) *</label>
            <input {...register('price', { valueAsNumber: true })} type="number" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Sale Price (₹)</label>
            <input {...register('salePrice', { valueAsNumber: true })} type="number" className="w-full px-4 py-2 border rounded-lg" />
          </div>
        </div>
      </fieldset>
      
      {/* Images */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Product Images</legend>
        <ProductImageUpload images={images} onImagesChange={setImages} />
      </fieldset>
      
      {/* SEO */}
      <fieldset className="space-y-4">
        <div className="flex justify-between items-center">
          <legend className="text-lg font-semibold">SEO Optimization</legend>
          <button
            type="button"
            onClick={() => setSeoOpen(!seoOpen)}
            className="text-primary-green hover:underline"
          >
            {seoOpen ? 'Hide' : 'Show'}
          </button>
        </div>
        {seoOpen && <SeoOptimization product={product} />}
      </fieldset>
      
      {/* Actions */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-6 py-2 bg-primary-green text-cream rounded-lg font-semibold hover:bg-opacity-90"
        >
          {product ? 'Update Product' : 'Create Product'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
```

### Admin Dashboard Home

```typescript
// /app/admin/page.tsx

import { DashboardHome } from '@/components/admin/dashboard/DashboardHome';
import { fetchDashboardStats } from '@/server/services/AdminService';

export default async function AdminPage() {
  const stats = await fetchDashboardStats();
  
  return <DashboardHome stats={stats} />;
}
```

### Dashboard Stats Cards

```typescript
// components/admin/dashboard/StatsCard.tsx

'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  trend?: 'up' | 'down';
}

export function StatsCard({ title, value, change, icon: Icon, trend }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-charcoal mt-2">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? '↑' : '↓'} {Math.abs(change)}% from last month
            </p>
          )}
        </div>
        <div className="bg-primary-green/10 p-3 rounded-lg">
          <Icon className="text-primary-green" size={24} />
        </div>
      </div>
    </motion.div>
  );
}
```

---

# 🔒 SECURITY BEST PRACTICES

## Authentication Security

```typescript
// /app/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('accessToken')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    try {
      const verified = await jwtVerify(token, JWT_SECRET);
      if (verified.payload.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/account/:path*', '/checkout/:path*'],
};
```

## API Route Protection

```typescript
// /app/api/admin/products/route.ts

import { verifyAuth } from '@/server/middleware/auth';
import { hasAdminRole } from '@/server/middleware/admin';

export async function POST(request: Request) {
  // 1. Verify user is authenticated
  const user = await verifyAuth(request);
  if (!user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // 2. Check admin role
  if (!hasAdminRole(user)) {
    return Response.json({ error: 'Forbidden' }, { status: 403 });
  }
  
  // 3. Validate input
  const body = await request.json();
  const validated = productSchema.parse(body);
  
  // 4. Process request...
}
```

## Rate Limiting

```typescript
// /app/api/auth/login/route.ts

import { RateLimiter } from '@/server/middleware/rateLimit';

const loginLimiter = new RateLimiter({
  window: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
  keyPrefix: 'login',
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  if (!await loginLimiter.allow(ip)) {
    return Response.json(
      { error: 'Too many login attempts. Try again later.' },
      { status: 429 }
    );
  }
  
  // ... rest of login logic
}
```

---

# 📊 ADMIN CONTROLS CHECKLIST

Dr. Niyati should be able to:

- [ ] **Products Management**
  - [ ] Create, edit, delete products
  - [ ] Upload/reorder images
  - [ ] Set pricing & discounts
  - [ ] Manage stock & low stock alerts
  - [ ] Mark as featured/bestseller
  - [ ] Manage SEO metadata
  - [ ] Set product status (draft/published/archived)

- [ ] **Categories**
  - [ ] Create/edit/delete categories
  - [ ] Reorder categories
  - [ ] Upload category images
  - [ ] Hide/show categories

- [ ] **Orders**
  - [ ] View all orders with filters
  - [ ] Change order status
  - [ ] View order details
  - [ ] Print/download invoice
  - [ ] Add tracking number
  - [ ] Add internal notes
  - [ ] Process refunds

- [ ] **Inventory**
  - [ ] View current stock
  - [ ] Adjust stock manually
  - [ ] Set low stock threshold
  - [ ] View inventory history

- [ ] **Coupons & Offers**
  - [ ] Create discount coupons
  - [ ] Set percentage/fixed discounts
  - [ ] Set expiry dates
  - [ ] Set usage limits
  - [ ] Create seasonal offers

- [ ] **Bundles**
  - [ ] Create/edit/delete bundles
  - [ ] Add products to bundles
  - [ ] Set bundle pricing

- [ ] **Customers**
  - [ ] View customer list
  - [ ] View customer details
  - [ ] Track purchase history
  - [ ] View customer addresses

- [ ] **Reviews**
  - [ ] Approve/reject reviews
  - [ ] Hide/delete reviews
  - [ ] Flag inappropriate content

- [ ] **Analytics**
  - [ ] View total revenue
  - [ ] View order trends
  - [ ] View top products
  - [ ] View top categories
  - [ ] View customer analytics

- [ ] **Settings**
  - [ ] Configure shipping methods
  - [ ] Set free shipping threshold
  - [ ] Update company information
  - [ ] Set notification preferences

- [ ] **Media**
  - [ ] Upload images
  - [ ] Manage image library
  - [ ] Delete unused images

---

# 🚀 DEPLOYMENT & ENVIRONMENT VARIABLES

## .env.example

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/crystal_store"

# JWT
JWT_SECRET="your-super-secret-jwt-key-min-32-chars"
JWT_REFRESH_SECRET="your-super-secret-refresh-key-min-32-chars"

# Razorpay
RAZORPAY_KEY_ID="rzp_live_xxxxxxxxxx"
RAZORPAY_KEY_SECRET="xxxxxxxxxxxxxxxx"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="xxxxxxxxxx"
CLOUDINARY_API_SECRET="xxxxxxxxxxxxxxxx"

# Email (Nodemailer/SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
FROM_EMAIL="noreply@jaimini-healing.com"

# Admin
ADMIN_EMAIL="nrrana2002@gmail.com"
ADMIN_INITIAL_PASSWORD="TemporaryPassword123!" # Change on first login

# URLs
NEXT_PUBLIC_API_URL="https://api.jaimini-healing.com"
NEXT_PUBLIC_SITE_URL="https://jaimini-healing.com"

# WhatsApp
NEXT_PUBLIC_DR_PHONE="+91XXXXXXXXXX"

# Feature Flags
NEXT_PUBLIC_ENABLE_GIFT_PACKAGING="true"
NEXT_PUBLIC_ENABLE_BUNDLES="true"
NEXT_PUBLIC_ENABLE_BACK_IN_STOCK="true"

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"

# Environment
NODE_ENV="production"
```

---

# 📋 IMPLEMENTATION CHECKLIST

## Phase 1: Setup & Foundation
- [ ] Create Next.js 16 project with TypeScript
- [ ] Configure Tailwind CSS with custom wellness palette
- [ ] Setup Prisma & PostgreSQL
- [ ] Create database schema
- [ ] Setup authentication (JWT + bcrypt)
- [ ] Configure environment variables
- [ ] Setup Cloudinary integration
- [ ] Setup Razorpay integration
- [ ] Setup Nodemailer for emails

## Phase 2: Core Features
- [ ] Product catalog with search
- [ ] Advanced filtering & sorting
- [ ] Product detail page with gallery
- [ ] Cart management (local + database sync)
- [ ] Wishlist functionality
- [ ] Product reviews system
- [ ] Search with autocomplete

## Phase 3: E-Commerce
- [ ] Multi-step checkout
- [ ] Address management
- [ ] Razorpay payment integration
- [ ] Order confirmation & tracking
- [ ] Inventory management
- [ ] Order status updates

## Phase 4: NEW Features
- [ ] Back-in-stock notifications
- [ ] Gift packaging options
- [ ] Product bundles
- [ ] WhatsApp integration
- [ ] Gift message support

## Phase 5: Admin Dashboard
- [ ] Admin authentication
- [ ] Product management
- [ ] Category management
- [ ] Order management
- [ ] Customer management
- [ ] Coupon/offer management
- [ ] Bundle management
- [ ] Analytics dashboard
- [ ] Settings page

## Phase 6: Polish & Security
- [ ] SSL/HTTPS
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Input validation
- [ ] Error handling
- [ ] Loading states
- [ ] Empty states
- [ ] Mobile responsiveness
- [ ] SEO optimization
- [ ] Performance optimization

## Phase 7: Testing & Deployment
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Performance testing
- [ ] Security audit
- [ ] Deploy to production
- [ ] Setup monitoring
- [ ] Setup backups

---

# 🎯 SUCCESS METRICS

Your crystal store is successful when:

✅ Users can browse, search, filter products easily
✅ Cart works smoothly on desktop & mobile
✅ Checkout is quick and secure
✅ Payment processing works flawlessly
✅ Customers receive order confirmations
✅ Dr. Niyati can manage everything from admin
✅ No developer intervention needed for common tasks
✅ Orders ship smoothly with tracking
✅ Customers can review products
✅ Back-in-stock notifications work
✅ Gift packaging adds to AOV
✅ Bundles increase average order value
✅ WhatsApp provides alternative support
✅ Page loads in <3 seconds
✅ Zero payment failures
✅ Admin dashboard is intuitive

---

# 📞 CONTACT & SUPPORT

**Dr. Niyati Rana**
- Email: nrrana2002@gmail.com
- Phone: [Set in env]
- WhatsApp: [Set in env]

---

**This is a production-ready blueprint. Build with confidence! 🚀✨**
