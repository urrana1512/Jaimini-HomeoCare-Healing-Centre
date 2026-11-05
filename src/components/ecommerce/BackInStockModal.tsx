"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, CheckCircle2, Sparkles, Mail } from "lucide-react";
import { CrystalProduct } from "@/types/crystal-ecommerce";

interface BackInStockModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: CrystalProduct | null;
}

export default function BackInStockModal({ isOpen, onClose, product }: BackInStockModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Save notification locally or send to backend
    try {
      const existing = JSON.parse(localStorage.getItem("jaimini_stock_notifications") || "[]");
      existing.push({
        productId: product.id,
        productName: product.name,
        email,
        phone,
        date: new Date().toISOString()
      });
      localStorage.setItem("jaimini_stock_notifications", JSON.stringify(existing));
    } catch (e) {
      console.warn(e);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setPhone("");
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-light-gray/40 max-w-md w-full overflow-hidden z-10 my-auto text-deep-charcoal p-6 sm:p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-light-gray/30 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center">
                <Bell size={16} />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-deep-charcoal">
                  Back in Stock Alert
                </h3>
                <p className="text-[10px] text-medium-gray">Dr. Niyati Crystal Priority Notification</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-light-gray/40 flex items-center justify-center text-medium-gray hover:text-deep-charcoal transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Product Summary */}
          <div className="flex items-center space-x-3 bg-off-white p-3 rounded-2xl border border-light-gray/30">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-light-gray/30 flex-shrink-0">
              <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
            </div>
            <div>
              <span className="text-[10px] text-forest-green font-semibold uppercase">{product.categoryName}</span>
              <h4 className="font-heading text-xs font-bold text-deep-charcoal line-clamp-1">{product.name}</h4>
              <span className="text-xs font-bold text-forest-green">₹{product.price}</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-2">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="font-heading text-base font-bold text-deep-charcoal">You&apos;re on the Priority List!</h4>
              <p className="text-xs text-medium-gray max-w-xs mx-auto">
                We will email/WhatsApp you the moment Dr. Niyati attunes and restocks this piece.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <p className="text-xs text-medium-gray leading-relaxed">
                  This mineral specimen is currently undergoing attunement or ethically sourcing. Enter your details to get first priority access before public release.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="font-semibold block mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-light-gray/60 bg-off-white focus:outline-none focus:border-forest-green text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-1">WhatsApp Number (Optional for instant ping)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-light-gray/60 bg-off-white focus:outline-none focus:border-forest-green text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-full bg-forest-green text-cream-white font-bold text-xs tracking-wider uppercase hover:bg-forest-green/95 shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer mt-2"
              >
                <Bell size={14} />
                <span>Notify Me When Available</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
