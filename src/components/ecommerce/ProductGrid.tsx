"use client";

import React, { useState } from "react";
import { CrystalProduct } from "@/types/crystal-ecommerce";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";
import { Sparkles, RotateCcw } from "lucide-react";

interface ProductGridProps {
  products: CrystalProduct[];
  onResetFilters?: () => void;
}

export default function ProductGrid({ products, onResetFilters }: ProductGridProps) {
  const [quickViewProduct, setQuickViewProduct] = useState<CrystalProduct | null>(null);

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 border border-light-gray/40 shadow-premium-soft text-center space-y-4 my-8">
        <div className="w-16 h-16 rounded-full bg-forest-green/5 border border-forest-green/10 flex items-center justify-center text-forest-green mx-auto">
          <Sparkles size={28} className="opacity-60" />
        </div>
        <div className="space-y-1">
          <h3 className="font-heading text-lg font-bold text-deep-charcoal">
            No crystal items match your selected filters
          </h3>
          <p className="text-xs text-medium-gray max-w-sm mx-auto">
            Try adjusting your intention, chakra, or category filter to discover more authentic minerals.
          </p>
        </div>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-forest-green text-cream-white text-xs font-semibold hover:bg-forest-green/95 shadow-premium-soft transition-all cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        ))}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
