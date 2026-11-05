"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Sparkles, Truck } from "lucide-react";
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/context/CartContext";

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    cartTotal, 
    shippingFee,
    giftPackagingFee,
    hasGiftPackaging,
    setHasGiftPackaging,
    giftMessage,
    setGiftMessage,
    getWhatsAppOrderUrl 
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [showAddressInput, setShowAddressInput] = useState(false);

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleCheckoutClick = () => {
    const url = getWhatsAppOrderUrl(customerName, shippingAddress);
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[200] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-cream-white shadow-2xl flex flex-col justify-between text-deep-charcoal border-l border-light-gray/40"
            >
              {/* Header */}
              <div className="p-6 border-b border-light-gray/30 flex items-center justify-between bg-white">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-deep-charcoal">Your Crystal Bag</h2>
                    <p className="text-[11px] text-medium-gray">{cartItems.length} unique item{cartItems.length === 1 ? "" : "s"}</p>
                  </div>
                </div>
                <button
                  onClick={closeCart}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-light-gray/40 text-medium-gray hover:text-deep-charcoal transition-colors cursor-pointer"
                  aria-label="Close Cart"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Free Shipping Milestone */}
              {cartItems.length > 0 && (
                <div className="bg-sage-green/15 px-6 py-3 border-b border-sage-green/30">
                  <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                    <span className="flex items-center space-x-1 text-forest-green font-semibold">
                      <Truck size={14} className="mr-1" />
                      {remainingForFreeShipping === 0 ? (
                        <span className="text-forest-green font-bold">🎉 You unlocked FREE Shipping!</span>
                      ) : (
                        <span>Add ₹{remainingForFreeShipping} more for FREE shipping</span>
                      )}
                    </span>
                    <span className="text-[10px] text-medium-gray">₹{FREE_SHIPPING_THRESHOLD} Target</span>
                  </div>
                  <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-forest-green rounded-full transition-all duration-500"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Items Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <div className="w-20 h-20 rounded-full bg-forest-green/5 border border-forest-green/10 flex items-center justify-center text-forest-green">
                      <Sparkles size={36} className="opacity-60" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading text-lg font-bold text-deep-charcoal">Your bag is empty</h3>
                      <p className="text-xs text-medium-gray max-w-xs">
                        Discover authentic Reiki-attuned bracelets, raw minerals, and crystal towers.
                      </p>
                    </div>
                    <button
                      onClick={closeCart}
                      className="px-6 py-2.5 rounded-full bg-forest-green text-cream-white text-xs font-semibold hover:bg-forest-green/95 shadow-premium-soft transition-all cursor-pointer"
                    >
                      Explore Crystal Catalog
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div 
                      key={item.product.id}
                      className="flex space-x-4 bg-white p-3.5 rounded-2xl border border-light-gray/40 shadow-premium-soft relative group"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-off-white flex-shrink-0 border border-light-gray/30">
                        <Image
                          src={item.product.thumbnail}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-heading text-xs font-bold text-deep-charcoal line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-light-gray hover:text-red-500 transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <span className="text-[10px] text-forest-green font-medium block">
                            {item.product.categoryName}
                          </span>
                          {item.selectedBeadSize && (
                            <span className="text-[10px] text-medium-gray block">
                              Size: {item.selectedBeadSize}
                            </span>
                          )}
                        </div>

                        {/* Price & Quantity Controls */}
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-light-gray/20">
                          <div className="font-heading text-sm font-bold text-forest-green">
                            ₹{item.product.price * item.quantity}
                          </div>

                          <div className="flex items-center border border-light-gray/60 rounded-full px-2 py-0.5 space-x-2 bg-off-white">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-medium-gray hover:text-deep-charcoal transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-medium-gray hover:text-deep-charcoal transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-white border-t border-light-gray/40 space-y-4">
                  {/* Optional Address / Name toggle */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setShowAddressInput(prev => !prev)}
                      className="text-[11px] text-forest-green font-medium underline flex items-center space-x-1 cursor-pointer hover:text-warm-gold"
                    >
                      <span>{showAddressInput ? "− Hide delivery info" : "+ Add name & delivery address"}</span>
                    </button>

                    {showAddressInput && (
                      <div className="space-y-2 pt-1">
                        <input
                          type="text"
                          placeholder="Your Full Name"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white"
                        />
                        <textarea
                          placeholder="Delivery Address & Pincode"
                          value={shippingAddress}
                          onChange={(e) => setShippingAddress(e.target.value)}
                          rows={2}
                          className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white resize-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Gift Packaging Option */}
                  <div className="bg-sage-green/10 p-3 rounded-xl border border-sage-green/30 space-y-2">
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
                        placeholder="Gift message / recipient blessing..."
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        maxLength={150}
                        className="w-full text-[11px] p-2 rounded-lg border border-light-gray/60 bg-white focus:outline-none focus:border-forest-green"
                      />
                    )}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-medium-gray pt-2 border-t border-light-gray/20">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-deep-charcoal">₹{cartSubtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard Shipping</span>
                      <span>{shippingFee === 0 ? <strong className="text-forest-green">FREE</strong> : `₹${shippingFee}`}</span>
                    </div>
                    {hasGiftPackaging && (
                      <div className="flex justify-between text-forest-green">
                        <span>Gift Packaging</span>
                        <span>₹{giftPackagingFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-heading font-bold text-deep-charcoal pt-2 border-t border-light-gray/30">
                      <span>Estimated Total</span>
                      <span className="text-forest-green text-base">₹{cartTotal}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      onClick={handleCheckoutClick}
                      className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs tracking-wider uppercase shadow-premium-medium flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Complete Order on WhatsApp</span>
                      <ArrowRight size={14} />
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-medium-gray pt-1">
                      <Link 
                        href="/cart" 
                        onClick={closeCart}
                        className="hover:text-forest-green underline font-medium"
                      >
                        View Full Bag Details
                      </Link>
                      <span className="text-[10px] text-forest-green flex items-center">
                        <Sparkles size={10} className="mr-1 text-warm-gold" />
                        100% Certified Authentic
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
