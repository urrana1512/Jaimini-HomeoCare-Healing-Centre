"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Sparkles, Eye, Check, Bell } from "lucide-react";
import { CrystalProduct } from "@/types/crystal-ecommerce";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import BackInStockModal from "@/components/ecommerce/BackInStockModal";

interface ProductCardProps {
  product: CrystalProduct;
  onQuickView?: (product: CrystalProduct) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [added, setAdded] = useState(false);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) {
      setIsNotifyModalOpen(true);
      return;
    }
    addToCart(product, 1, product.beadSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative bg-white rounded-3xl overflow-hidden border border-light-gray/40 shadow-premium-soft hover:shadow-premium-medium flex flex-col justify-between transition-all"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-off-white">
          <Link href={`/services/crystal-products/${product.slug}`} className="block w-full h-full relative">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10 pointer-events-none">
            {!product.inStock ? (
              <span className="px-2.5 py-1 rounded-full bg-gray-900/90 text-white text-[10px] font-bold tracking-wider uppercase">
                Out of Stock
              </span>
            ) : product.isBestseller ? (
              <span className="px-2.5 py-1 rounded-full bg-forest-green text-cream-white text-[10px] font-bold tracking-wider uppercase shadow-premium-soft">
                Bestseller
              </span>
            ) : null}
            {product.reikiAttuned && (
              <span className="px-2.5 py-1 rounded-full bg-warm-gold/90 text-deep-charcoal text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1 shadow-premium-soft">
                <Sparkles size={10} className="text-white" />
                <span>Reiki Attuned</span>
              </span>
            )}
            {product.discountPercentage && (
              <span className="px-2 py-0.5 rounded-full bg-red-600/90 text-white text-[10px] font-bold tracking-wider">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* Wishlist and Quickview Floating Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
            <button
              onClick={handleToggleWishlist}
              className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-premium-soft cursor-pointer ${
                isFavorited 
                  ? "bg-red-50 text-red-500 hover:bg-red-100" 
                  : "bg-white/80 text-medium-gray hover:text-deep-charcoal hover:bg-white"
              }`}
              title={isFavorited ? "Remove from Wishlist" : "Save to Wishlist"}
            >
              <Heart size={16} className={isFavorited ? "fill-current" : ""} />
            </button>

            {onQuickView && (
              <button
                onClick={handleQuickView}
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-medium-gray hover:text-forest-green hover:bg-white flex items-center justify-center transition-all shadow-premium-soft opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-200 cursor-pointer"
                title="Quick View"
              >
                <Eye size={16} />
              </button>
            )}
          </div>

          {/* Quick Add Overlay on Hover */}
          <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
            {product.inStock ? (
              <button
                onClick={handleAddToCart}
                className="w-full py-2.5 px-4 rounded-full bg-forest-green/95 backdrop-blur-sm text-cream-white font-semibold text-xs tracking-wider uppercase hover:bg-forest-green shadow-premium-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                {added ? (
                  <>
                    <Check size={14} className="text-warm-gold" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={14} />
                    <span>Quick Add to Bag</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => setIsNotifyModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-full bg-gray-800 text-white font-semibold text-xs tracking-wider uppercase hover:bg-gray-900 shadow-premium-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Bell size={14} />
                <span>Notify When Available</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Info */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            {/* Category & Chakra */}
            <div className="flex items-center justify-between text-[11px] text-medium-gray">
              <span className="text-forest-green font-semibold tracking-wide uppercase text-[10px]">
                {product.categoryName}
              </span>
              {product.chakra.length > 0 && (
                <span className="bg-forest-green/5 text-forest-green px-2 py-0.5 rounded-md text-[10px] font-medium">
                  {product.chakra[0]}
                </span>
              )}
            </div>

            {/* Title */}
            <Link href={`/services/crystal-products/${product.slug}`} className="block group-hover:text-forest-green transition-colors">
              <h3 className="font-heading text-sm md:text-base font-bold text-deep-charcoal line-clamp-1 leading-snug">
                {product.name}
              </h3>
            </Link>

            {/* Ratings */}
            <div className="flex items-center space-x-1 text-xs">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={i < Math.floor(product.rating) ? "fill-amber-400" : "text-light-gray"} 
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-deep-charcoal">{product.rating}</span>
              <span className="text-[10px] text-medium-gray">({product.reviewCount})</span>
            </div>
          </div>

          {/* Price & Mobile Add Button */}
          <div className="pt-2 border-t border-light-gray/20 flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <span className="font-heading text-base md:text-lg font-bold text-forest-green">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-medium-gray line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Mobile direct Add button */}
            <button
              onClick={handleAddToCart}
              className="sm:hidden w-8 h-8 rounded-full bg-forest-green text-cream-white flex items-center justify-center shadow-premium-soft cursor-pointer"
              aria-label="Add to cart"
            >
              <ShoppingBag size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Back in stock notification modal */}
      <BackInStockModal
        isOpen={isNotifyModalOpen}
        onClose={() => setIsNotifyModalOpen(false)}
        product={product}
      />
    </>
  );
}
