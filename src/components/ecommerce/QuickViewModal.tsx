"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag, Check, Sparkles, Shield, ArrowRight } from "lucide-react";
import { CrystalProduct } from "@/types/crystal-ecommerce";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
  product: CrystalProduct | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.beadSize || "8mm");
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-light-gray/40 max-w-3xl w-full overflow-hidden z-10 my-auto text-deep-charcoal"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-light-gray/40 flex items-center justify-center text-medium-gray hover:text-deep-charcoal transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
            {/* Gallery Column */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-off-white border border-light-gray/30">
                <Image
                  src={product.images[selectedImageIdx] || product.thumbnail}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {product.reikiAttuned && (
                  <div className="absolute top-3 left-3 bg-warm-gold/90 text-deep-charcoal px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 shadow-premium-soft">
                    <Sparkles size={10} className="text-white" />
                    <span>Reiki Attuned</span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        selectedImageIdx === idx ? "border-forest-green" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">
                  {product.categoryName} • Origin: {product.origin}
                </span>

                <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-charcoal leading-snug">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center space-x-2 text-xs">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className={i < Math.floor(product.rating) ? "fill-amber-400" : "text-light-gray"} />
                    ))}
                  </div>
                  <span className="font-semibold text-deep-charcoal">{product.rating}</span>
                  <span className="text-medium-gray text-[11px]">({product.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-3 py-1">
                  <span className="font-heading text-2xl font-bold text-forest-green">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-medium-gray line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  {product.discountPercentage && (
                    <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-full text-xs font-bold">
                      Save {product.discountPercentage}%
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs text-medium-gray leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Chakra & Intention Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.chakra.map((chk) => (
                    <span key={chk} className="bg-forest-green/10 text-forest-green text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {chk} Chakra
                    </span>
                  ))}
                  {product.intention.map((intn) => (
                    <span key={intn} className="bg-warm-gold/15 text-deep-charcoal text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {intn}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity + Add Button */}
              <div className="space-y-3 pt-3 border-t border-light-gray/20">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-light-gray/60 rounded-full px-3 py-1.5 space-x-3 bg-off-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-medium-gray hover:text-deep-charcoal text-xs font-bold"
                    >
                      −
                    </button>
                    <span className="text-xs font-semibold w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-medium-gray hover:text-deep-charcoal text-xs font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-6 rounded-full bg-forest-green text-cream-white font-semibold text-xs tracking-wider uppercase hover:bg-forest-green/95 shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    {added ? (
                      <>
                        <Check size={14} className="text-warm-gold" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={14} />
                        <span>Add to Bag • ₹{product.price * quantity}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-1">
                  <Link
                    href={`/services/crystal-products/${product.slug}`}
                    onClick={onClose}
                    className="text-xs text-forest-green font-semibold hover:underline inline-flex items-center space-x-1"
                  >
                    <span>View complete specifications & reviews</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
