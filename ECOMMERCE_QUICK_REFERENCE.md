# 🚀 CRYSTAL E-COMMERCE - QUICK REFERENCE GUIDE

## 📋 WHAT YOU'RE BUILDING

A premium, production-ready e-commerce store for Dr. Niyati Rana's crystal products, integrated into her existing Jaimini Homeocare & Healing Centre website.

**URL:** `/services/crystal-products`

**Technology:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, PostgreSQL, Prisma

---

## 🎯 CORE DELIVERABLES

### Customer Features
✅ Product catalog (search, filter, sort)
✅ Product detail pages with galleries
✅ Shopping cart (local + sync with database)
✅ Wishlist / Favorites
✅ Secure checkout (Razorpay)
✅ Order tracking
✅ Product reviews (verified purchase)
✅ User accounts & order history

### Admin Features
✅ Complete product management (CRUD)
✅ Category management
✅ Order management
✅ Customer management
✅ Coupon/offer management
✅ Inventory tracking
✅ Analytics dashboard
✅ Settings panel

### NEW Special Features
✅ **Back-in-stock notifications** - Customers get notified when products return to stock
✅ **Gift packaging** - Add premium gift packaging (₹99) with custom messages
✅ **Product bundles** - Pre-made sets like "Self-Love Crystal Set" to increase AOV
✅ **WhatsApp integration** - "Ask on WhatsApp" button for product inquiries
✅ **Zero-code admin** - Dr. Niyati never needs developer help for daily tasks

---

## 🛠️ TECH STACK MAPPING

| Requirement | Technology | Why |
|-----------|-----------|-----|
| Frontend | Next.js 16 App Router + React 19 | Server Components for SEO, Client Components for interactivity |
| Styling | Tailwind CSS v4 | Utility-first CSS with custom wellness color palette |
| Animations | Framer Motion 12 | Smooth, performant animations (cart, wishlist, page transitions) |
| Database | PostgreSQL + Prisma | Type-safe ORM, ACID transactions for orders, easy migrations |
| Auth | JWT + bcrypt | Secure, stateless authentication |
| Payments | Razorpay | Indian payment gateway (UPI, Cards, Wallets, etc.) |
| Images | Cloudinary | CDN, automatic optimization, transformations |
| Email | Nodemailer | Order confirmations, notifications, password reset |
| Audio | Web Audio API | Soothing ambient sounds (no file uploads needed) |
| Icons | Lucide React + React Icons | Modern, crisp UI icons + social icons |

---

## 📁 KEY FOLDERS STRUCTURE

```
app/
├── services/crystal-products/      ← Store homepage & product pages
├── cart/                            ← Shopping cart
├── checkout/                        ← Checkout flow
├── wishlist/                        ← Favorites
├── account/                         ← User dashboard
├── auth/                            ← Login, signup, password reset
├── admin/                           ← Admin dashboard (protected)
└── api/                             ← Backend API routes

components/
├── ecommerce/                       ← All store UI components
├── admin/                           ← Admin UI components
└── animations/                      ← Reusable animation wrappers

lib/
├── hooks/                           ← useCart(), useAuth(), etc.
├── services/                        ← API calls, Cloudinary, etc.
└── validations.ts                   ← Zod schemas for validation

server/
├── services/                        ← Business logic (order, inventory, etc.)
├── middleware/                      ← Auth checks, rate limiting
└── db/                              ← Prisma client & seed

prisma/
└── schema.prisma                    ← Database models
```

---

## 🔐 SECURITY ESSENTIALS

**Never expose in frontend:**
- JWT_SECRET
- RAZORPAY_KEY_SECRET
- DATABASE_URL
- Cloudinary API secret
- Admin credentials

**Always do on backend:**
- Verify JWT tokens
- Check admin role before sensitive operations
- Recalculate totals/prices (never trust frontend)
- Verify Razorpay signatures
- Validate all inputs
- Rate limit API endpoints
- Hash passwords with bcrypt (10+ rounds)

**Use middleware for:**
- Authentication checks
- Admin role verification
- CORS configuration
- Security headers (Helmet)
- Rate limiting

---

## 💾 DATABASE MODELS (Simplified View)

```
User
├── Address (multiple)
├── Cart (one)
│   └── CartItem (multiple)
├── Order (multiple)
│   └── OrderItem (multiple)
├── WishlistItem (multiple)
├── Review (multiple)
├── BackInStockNotification (multiple)
└── Notification (multiple)

Product
├── Category (one)
├── ProductImage (multiple)
├── ProductVariant (multiple, optional)
├── Review (multiple)
├── CartItem (multiple)
├── WishlistItem (multiple)
├── BundleItem (multiple)
├── BackInStockNotification (multiple)
└── InventoryTransaction (multiple)

Order
├── User (one)
├── Address (one)
├── OrderItem (multiple)
├── Payment (one)
└── Coupon (optional)

Bundle
└── BundleItem (multiple) → Product

Coupon
├── Order (multiple)
└── CouponUsage (multiple)
```

---

## 🔄 CRITICAL FLOWS

### Adding to Cart
```
User clicks "Add to Cart"
  ↓
If not authenticated → Show login modal
  ↓
Validate product exists & in stock
  ↓
For guest: Save to localStorage
For logged-in: Save to database
  ↓
Show toast: "Added to cart ✓"
```

### Checkout & Payment
```
User enters checkout
  ↓
Collect customer info + address
  ↓
Select shipping method
  ↓
Review order (can edit cart)
  ↓
Select payment method
  ↓
Create order in database
  ↓
Initiate Razorpay payment
  ↓
User completes payment
  ↓
Razorpay returns signature
  ↓
Backend verifies signature
  ↓
If valid:
  - Update order status
  - Reduce inventory
  - Send confirmation email
  - Create notification
  ↓
Show success page
```

### Back-in-Stock Notification
```
Product is out of stock
  ↓
Customer clicks "Notify Me"
  ↓
If not authenticated → Login first
  ↓
Save notification in database
  ↓
Admin adds stock to product
  ↓
Backend detects stock increase
  ↓
Find all waiting notifications
  ↓
Send email to each customer
  ↓
Mark notification as "sent"
```

---

## 🎁 NEW FEATURES QUICK GUIDE

### 1. Gift Packaging
- Add checkbox in cart: "🎁 Add Gift Packaging (₹99)"
- Show textarea for gift message (max 150 chars)
- Add fee to order total
- Include in order items for packing notes

**Admin Control:** Set price in `GiftPackaging` model

### 2. Back-in-Stock Notifications
- Out of stock products show "Notify Me" button
- Customer enters email
- Backend creates `BackInStockNotification` record
- When inventory increases, send email to all waiting customers
- Mark as notified

**Admin Control:** Just add stock → notifications sent automatically

### 3. Product Bundles
- Pre-made product combinations (e.g., "Self-Love Set" = Rose Quartz + Amethyst + Bracelet)
- Discounted bundle price vs individual items
- Customers can view bundle items
- Add to cart as single unit
- Admin can create/edit bundles in admin panel

**Example Bundles:**
- Self-Love Crystal Set (₹2999)
- Meditation Set (₹1999)
- Chakra Balance Bundle (₹3499)

### 4. WhatsApp Integration
- "Ask on WhatsApp" button on product page
- Pre-fills message: "Hello Dr. Niyati, I'm interested in [Product Name] (₹[Price]). Could you please provide more details?"
- Opens WhatsApp in new tab
- Also available on cart page for order help

**Configuration:** Set `NEXT_PUBLIC_DR_PHONE` in env

### 5. Admin Dashboard (Zero-Code)
Dr. Niyati can:
- Upload 5 products per day without developer
- Change prices in real-time
- Manage inventory
- Create coupons (e.g., "DIWALI20" = 20% off)
- Create bundles
- View orders and change status
- Approve/reject reviews

---

## 📊 IMPORTANT NUMBERS

| Item | Amount |
|------|--------|
| Gift Packaging Fee | ₹99 |
| Low Stock Threshold | 5 units (configurable) |
| Free Shipping Threshold | ₹5,000+ |
| Default Shipping Fee | ₹100 |
| Tax | 5% (configurable) |
| Razorpay Discount | Depends on volume |

---

## 🚨 CRITICAL IMPLEMENTATION DETAILS

### 1. Never Trust Frontend Prices
❌ WRONG:
```javascript
const total = items.reduce((sum, item) => sum + item.price, 0);
```

✅ CORRECT:
```typescript
// Backend recalculates everything
const total = await calculateOrderTotal(items, couponCode);
```

### 2. Inventory Safety
❌ WRONG:
```typescript
// Decrement on checkout start
product.stock -= 1;
```

✅ CORRECT:
```typescript
// Decrement only after payment verification
if (paymentVerified) {
  product.stock -= 1;
  logInventoryTransaction();
}
```

### 3. Admin Security
❌ WRONG:
```typescript
const admin = { email: 'admin@example.com', password: 'admin123' };
```

✅ CORRECT:
```typescript
// Use environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
// Password is hashed on first login
// Force password change on initial setup
```

### 4. Payment Verification
❌ WRONG:
```typescript
// Trust frontend
if (request.body.paymentSuccess) {
  processOrder();
}
```

✅ CORRECT:
```typescript
// Verify signature with Razorpay
const verified = crypto
  .createHmac('sha256', RAZORPAY_KEY_SECRET)
  .update(body)
  .digest('hex') === razorpaySignature;

if (verified) {
  processOrder();
}
```

---

## 📈 PERFORMANCE TARGETS

- **Page Load:** < 3 seconds
- **API Response:** < 500ms
- **Lighthouse Score:** 90+
- **Mobile Performance:** 85+
- **Database Queries:** < 100ms per page
- **Image Size:** < 100KB (Cloudinary optimized)
- **Core Web Vitals:** All green

---

## 🧪 TESTING CHECKLIST

### Functional Testing
- [ ] Add to cart (guest & logged in)
- [ ] Remove from cart
- [ ] Update quantity
- [ ] Checkout flow end-to-end
- [ ] Payment success & failure handling
- [ ] Order confirmation email
- [ ] Product search & filters
- [ ] Wishlist add/remove
- [ ] User authentication (signup, login, password reset)

### Admin Testing
- [ ] Create product
- [ ] Edit product (all fields)
- [ ] Delete product
- [ ] Upload images
- [ ] Create category
- [ ] Create coupon
- [ ] Create bundle
- [ ] View orders
- [ ] Change order status
- [ ] View analytics

### Security Testing
- [ ] Brute force login (rate limited?)
- [ ] SQL injection attempts (Prisma prevents)
- [ ] XSS attacks (React prevents)
- [ ] CSRF (token validation)
- [ ] Unauthorized admin access (redirected to login?)
- [ ] Frontend price manipulation (recalculated on backend?)
- [ ] Invalid payment signatures (rejected?)

### Mobile Testing
- [ ] Responsive design (all screen sizes)
- [ ] Touch targets (min 44px)
- [ ] Checkout on mobile (easy to use?)
- [ ] Images load properly
- [ ] Animations are smooth

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] SSL/HTTPS enforced
- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] Monitoring & alerts setup
- [ ] Email service tested
- [ ] Razorpay webhooks configured
- [ ] Cloudinary CDN working
- [ ] Admin credentials secure
- [ ] Database migrations applied
- [ ] Seed data loaded (optional)
- [ ] 404 & 500 error pages ready
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Google Analytics setup (optional)

---

## 💡 TIPS FOR SUCCESS

1. **Start Small:** Build MVP first (products, cart, checkout), add features later
2. **Database First:** Get schema right, everything else follows
3. **Admin First:** Make admin dashboard intuitive, Dr. Niyati will love it
4. **Mobile First:** Design mobile experience first, desktop adapts
5. **Testing Matters:** Test checkout flow thoroughly before launch
6. **Performance:** Optimize images aggressively
7. **Security:** Never skip security checks
8. **Monitoring:** Set up alerts for payment failures
9. **Communication:** Send timely emails (order confirmed, shipped, delivered)
10. **Analytics:** Track what sells, what doesn't

---

## 📞 COMMON ADMIN QUESTIONS & ANSWERS

**Q: How do I add a new crystal product?**
A: Go to Admin → Products → Add New → Fill form → Upload images → Publish

**Q: How do I create a discount code?**
A: Admin → Coupons → New → Enter code (DIWALI20), discount type, expiry → Save

**Q: How do I mark an order as shipped?**
A: Admin → Orders → Click order → Change status to "SHIPPED" → Enter tracking number → Save

**Q: How do I create a bundle?**
A: Admin → Bundles → New → Select 3-4 products → Set bundle price → Publish

**Q: Can customers edit their address after ordering?**
A: No. They must use the saved address or place a new order with a different address.

**Q: What happens if a customer's payment fails?**
A: They see "Payment Failed" page. Cart is saved. They can retry or contact support.

**Q: How do back-in-stock notifications work?**
A: Customer clicks "Notify Me" → Gets email when you add stock → Can buy immediately

---

## 🎓 LEARNING RESOURCES

**For Frontend:**
- Next.js Docs: https://nextjs.org/docs
- React 19: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

**For Backend:**
- Prisma ORM: https://www.prisma.io/docs
- Node.js: https://nodejs.org/docs
- Express Pattern: (used inside Next.js API routes)

**For Security:**
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- JWT Best Practices: https://tools.ietf.org/html/rfc7519
- Rate Limiting: https://en.wikipedia.org/wiki/Rate_limiting

---

## ✅ GO-LIVE CHECKLIST

- [ ] All 5 new features implemented & tested
- [ ] Admin dashboard fully functional
- [ ] Payment processing working
- [ ] Email notifications working
- [ ] Performance optimized
- [ ] Security audit passed
- [ ] Mobile design verified
- [ ] Backup strategy in place
- [ ] Monitoring alerts configured
- [ ] Dr. Niyati trained on admin dashboard
- [ ] Support documentation ready
- [ ] Post-launch support plan in place

---

**Ready to build? You've got this! 🚀✨**

For the detailed implementation, refer to the main prompt: `CRYSTAL_ECOMMERCE_PRODUCTION_PROMPT.md`
