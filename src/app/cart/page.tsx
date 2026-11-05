"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Tag, 
  Check, 
  RotateCcw 
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/context/CartContext";

export default function CartPage() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartSubtotal, 
    shippingFee, 
    giftPackagingFee,
    hasGiftPackaging,
    setHasGiftPackaging,
    giftMessage,
    setGiftMessage,
    cartTotal, 
    getWhatsAppOrderUrl 
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "HEAL10" || couponCode.trim().toUpperCase() === "NIYATI10") {
      const discount = Math.round(cartSubtotal * 0.1);
      setAppliedDiscount(discount);
      setCouponMessage("Coupon applied! 10% blessing discount activated.");
    } else {
      setCouponMessage("Invalid coupon code. Use 'HEAL10' for 10% off.");
    }
  };

  const finalGrandTotal = Math.max(0, cartTotal - appliedDiscount);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const progressPercent = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleWhatsAppCheckout = () => {
    const fullAddress = `${address}, Pincode: ${pincode}, Phone: ${phone}`;
    const url = getWhatsAppOrderUrl(customerName, fullAddress);
    window.open(url, "_blank");
  };

  return (
    <div className="pb-24 space-y-12 text-left bg-cream-white min-h-screen">
      <PageHeader
        title="Your Crystal Bag"
        subtitle="Review your hand-selected gemstone items before sacred attunement and dispatch."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Crystal Products", href: "/services/crystal-products" },
          { name: "Shopping Bag" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 border border-light-gray/40 shadow-premium-soft text-center space-y-6 max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mx-auto">
              <ShoppingBag size={36} />
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold text-deep-charcoal">Your bag is currently empty</h2>
              <p className="text-xs text-medium-gray leading-relaxed">
                Explore our authentic collection of Reiki-programmed crystals, natural gemstone bracelets, and cleansing towers.
              </p>
            </div>
            <Link
              href="/services/crystal-products"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-forest-green text-cream-white text-xs font-semibold hover:bg-forest-green/95 shadow-premium-soft transition-all"
            >
              <span>Explore Crystal Store</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Items List */}
            <div className="lg:col-span-7 space-y-6">
              {/* Free Shipping Notification */}
              <div className="bg-sage-green/15 p-4 rounded-2xl border border-sage-green/30 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-forest-green flex items-center space-x-1.5">
                    <Truck size={16} />
                    {remainingForFreeShipping === 0 ? (
                      <span>🎉 Congratulations! You have unlocked FREE Express Shipping!</span>
                    ) : (
                      <span>Add ₹{remainingForFreeShipping} more to unlock FREE Express Shipping</span>
                    )}
                  </span>
                  <span className="text-[10px] text-medium-gray font-bold">Target: ₹{FREE_SHIPPING_THRESHOLD}</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-forest-green rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-3xl p-6 border border-light-gray/40 shadow-premium-soft space-y-4">
                <div className="flex items-center justify-between border-b border-light-gray/30 pb-4">
                  <h3 className="font-heading text-base font-bold text-deep-charcoal">
                    Items in Bag ({cartItems.length})
                  </h3>
                  <button
                    onClick={clearCart}
                    className="text-xs text-medium-gray hover:text-red-500 transition-colors flex items-center space-x-1"
                  >
                    <Trash2 size={12} />
                    <span>Clear all</span>
                  </button>
                </div>

                <div className="divide-y divide-light-gray/20 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="pt-4 first:pt-0 flex space-x-4 items-start">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-off-white flex-shrink-0 border border-light-gray/30">
                        <Image
                          src={item.product.thumbnail}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-start justify-between">
                          <Link href={`/services/crystal-products/${item.product.slug}`} className="hover:text-forest-green transition-colors">
                            <h4 className="font-heading text-sm font-bold text-deep-charcoal line-clamp-1">
                              {item.product.name}
                            </h4>
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-light-gray hover:text-red-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <span className="text-xs text-forest-green font-medium block">
                          {item.product.categoryName}
                        </span>

                        {item.selectedBeadSize && (
                          <span className="text-[11px] text-medium-gray block">
                            Size: <strong>{item.selectedBeadSize}</strong>
                          </span>
                        )}

                        {item.customIntentNote && (
                          <span className="text-[11px] text-warm-gold font-medium block">
                            Note: &quot;{item.customIntentNote}&quot;
                          </span>
                        )}

                        <div className="flex items-center justify-between pt-2">
                          <div className="font-heading text-base font-bold text-forest-green">
                            ₹{item.product.price * item.quantity}
                          </div>

                          <div className="flex items-center border border-light-gray/60 rounded-full px-2.5 py-1 space-x-3 bg-off-white">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-medium-gray hover:text-deep-charcoal text-xs font-bold"
                            >
                              −
                            </button>
                            <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-medium-gray hover:text-deep-charcoal text-xs font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & Checkout Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Delivery Details Form */}
              <div className="bg-white rounded-3xl p-6 border border-light-gray/40 shadow-premium-soft space-y-4">
                <h3 className="font-heading text-base font-bold text-deep-charcoal border-b border-light-gray/30 pb-3">
                  Delivery & Contact Information
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-deep-charcoal block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-deep-charcoal block mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-deep-charcoal block mb-1">Complete Delivery Address</label>
                    <textarea
                      placeholder="Flat/House No, Street, Landmark, City..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-deep-charcoal block mb-1">Pincode</label>
                    <input
                      type="text"
                      placeholder="e.g. 380015"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white"
                    />
                  </div>
                </div>
              </div>

              {/* Coupon Code & Price Summary */}
              <div className="bg-white rounded-3xl p-6 border border-light-gray/40 shadow-premium-soft space-y-4">
                <h3 className="font-heading text-base font-bold text-deep-charcoal border-b border-light-gray/30 pb-3">
                  Order Summary
                </h3>

                {/* Gift Packaging Option */}
                <div className="bg-sage-green/10 p-3.5 rounded-2xl border border-sage-green/30 space-y-2">
                  <label className="flex items-center space-x-2 text-xs font-semibold text-deep-charcoal cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={hasGiftPackaging}
                      onChange={(e) => setHasGiftPackaging(e.target.checked)}
                      className="w-4 h-4 rounded text-forest-green focus:ring-forest-green"
                    />
                    <span>🎁 Add Sacred Gift Packaging (+₹{giftPackagingFee})</span>
                  </label>
                  {hasGiftPackaging && (
                    <input
                      type="text"
                      placeholder="Enter personalized blessing / recipient note (max 150 chars)..."
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      maxLength={150}
                      className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 bg-white focus:outline-none focus:border-forest-green"
                    />
                  )}
                </div>

                {/* Coupon input */}
                <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. HEAL10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 text-xs p-2.5 rounded-xl border border-light-gray/60 uppercase focus:outline-none focus:border-forest-green bg-off-white font-mono"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-forest-green text-cream-white text-xs font-semibold hover:bg-forest-green/95"
                    >
                      Apply
                    </button>
                  </div>
                  {couponMessage && (
                    <p className={`text-[10px] ${appliedDiscount > 0 ? "text-forest-green font-semibold" : "text-red-500"}`}>
                      {couponMessage}
                    </p>
                  )}
                </form>

                {/* Breakdown */}
                <div className="space-y-2 text-xs text-medium-gray border-t border-light-gray/20 pt-3">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-semibold text-deep-charcoal">₹{cartSubtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Shipping</span>
                    <span>{shippingFee === 0 ? <strong className="text-forest-green">FREE</strong> : `₹${shippingFee}`}</span>
                  </div>
                  {hasGiftPackaging && (
                    <div className="flex justify-between text-forest-green">
                      <span>Gift Packaging</span>
                      <span>₹{giftPackagingFee}</span>
                    </div>
                  )}
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-forest-green font-medium">
                      <span>Blessing Discount (10%)</span>
                      <span>-₹{appliedDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-heading font-bold text-deep-charcoal border-t border-light-gray/30 pt-3">
                    <span>Total Amount</span>
                    <span className="text-forest-green text-lg">₹{finalGrandTotal}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs tracking-wider uppercase shadow-premium-medium flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Complete Order on WhatsApp</span>
                  <ArrowRight size={14} />
                </button>

                <p className="text-[10px] text-center text-medium-gray">
                  🔒 Encrypted order transmission • 100% Genuine Certified Stones
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
