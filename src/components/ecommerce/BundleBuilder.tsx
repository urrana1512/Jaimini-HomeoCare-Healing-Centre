"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, ShoppingBag, Plus, Trash2 } from "lucide-react";
import { CrystalProduct } from "@/types/crystal-ecommerce";
import { crystalProducts } from "@/lib/data/crystal-products";
import { useCart } from "@/context/CartContext";

export default function BundleBuilder() {
  const { addToCart } = useCart();
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([
    crystalProducts[0].id,
    crystalProducts[1].id,
    crystalProducts[2].id,
  ]);
  const [added, setAdded] = useState(false);

  const selectedProducts = selectedProductIds
    .map(id => crystalProducts.find(p => p.id === id))
    .filter(Boolean) as CrystalProduct[];

  const rawSubtotal = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscount = Math.round(rawSubtotal * 0.15); // 15% discount for 3-item bundle
  const bundleTotal = rawSubtotal - bundleDiscount;

  const handleToggleSelect = (productId: string) => {
    if (selectedProductIds.includes(productId)) {
      if (selectedProductIds.length > 1) {
        setSelectedProductIds(prev => prev.filter(id => id !== productId));
      }
    } else {
      if (selectedProductIds.length < 3) {
        setSelectedProductIds(prev => [...prev, productId]);
      } else {
        // Replace last item
        setSelectedProductIds(prev => [prev[0], prev[1], productId]);
      }
    }
  };

  const handleAddBundleToCart = () => {
    selectedProducts.forEach(product => {
      addToCart(product, 1, product.beadSize, "Custom 3-Crystal Trinity Bundle (15% Bundle Savings Applied)");
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-light-gray/40 shadow-premium-soft space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-light-gray/30 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-warm-gold/20 text-deep-charcoal text-[10px] font-bold uppercase tracking-wider">
            <Sparkles size={12} className="text-warm-gold" />
            <span>Curate & Save 15%</span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-charcoal">
            Build Your Sacred 3-Crystal Trinity Bundle
          </h3>
        </div>
        <p className="text-xs text-medium-gray max-w-sm">
          Pick any 3 minerals to build your synchronized energetic field (e.g. Wealth + Protection + Calm) and enjoy an automatic 15% bundle blessing.
        </p>
      </div>

      {/* Selected Slots */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[0, 1, 2].map((slotIdx) => {
          const item = selectedProducts[slotIdx];
          return (
            <div
              key={slotIdx}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                item
                  ? "bg-off-white border-forest-green/40 shadow-premium-soft"
                  : "bg-white border-dashed border-light-gray text-center items-center justify-center py-8"
              }`}
            >
              {item ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-forest-green uppercase">Slot {slotIdx + 1}</span>
                    <button
                      onClick={() => handleToggleSelect(item.id)}
                      className="text-light-gray hover:text-red-500 transition-colors"
                      title="Remove"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white">
                    <Image src={item.thumbnail} alt={item.name} fill className="object-cover" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-deep-charcoal line-clamp-1">{item.name}</h4>
                  <span className="text-xs font-bold text-forest-green">₹{item.price}</span>
                </div>
              ) : (
                <div className="space-y-1 text-center py-4">
                  <Plus size={20} className="text-medium-gray mx-auto" />
                  <span className="text-xs font-semibold text-medium-gray block">Select a Crystal Below</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selector Grid */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-semibold text-medium-gray uppercase tracking-wider block">
          Click to swap crystals in your bundle:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {crystalProducts.slice(0, 6).map((prod) => {
            const isSelected = selectedProductIds.includes(prod.id);
            return (
              <button
                key={prod.id}
                onClick={() => handleToggleSelect(prod.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer space-y-1.5 ${
                  isSelected
                    ? "border-forest-green bg-forest-green/10 shadow-premium-soft"
                    : "border-light-gray/40 bg-white hover:border-forest-green/40"
                }`}
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-off-white">
                  <Image src={prod.thumbnail} alt={prod.name} fill className="object-cover" />
                  {isSelected && (
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-forest-green text-cream-white flex items-center justify-center text-[9px]">
                      ✓
                    </div>
                  )}
                </div>
                <h5 className="font-heading text-[11px] font-bold text-deep-charcoal line-clamp-1 leading-snug">
                  {prod.name}
                </h5>
                <span className="text-[10px] font-bold text-forest-green block">₹{prod.price}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Bar & CTA */}
      <div className="bg-off-white p-6 rounded-2xl border border-light-gray/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[11px] text-medium-gray">
            Trinity Bundle Value: <span className="line-through">₹{rawSubtotal}</span>
          </span>
          <div className="flex items-baseline space-x-2">
            <span className="font-heading text-2xl font-bold text-forest-green">₹{bundleTotal}</span>
            <span className="bg-red-50 text-red-600 font-bold text-xs px-2 py-0.5 rounded-full">
              You Save ₹{bundleDiscount} (15% OFF)
            </span>
          </div>
        </div>

        <button
          onClick={handleAddBundleToCart}
          disabled={selectedProducts.length < 3}
          className={`py-3.5 px-8 rounded-full font-bold text-xs tracking-wider uppercase shadow-premium-medium flex items-center space-x-2 transition-all cursor-pointer ${
            selectedProducts.length === 3
              ? "bg-forest-green text-cream-white hover:bg-forest-green/95"
              : "bg-light-gray text-medium-gray cursor-not-allowed"
          }`}
        >
          {added ? (
            <>
              <Check size={16} className="text-warm-gold" />
              <span>3 Crystals Added to Bag!</span>
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              <span>Add Trinity Bundle to Bag</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
