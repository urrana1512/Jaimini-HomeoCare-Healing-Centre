"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight, Trash2, ShoppingBag } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import ProductCard from "@/components/ecommerce/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import { crystalProducts } from "@/lib/data/crystal-products";

export default function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlist();

  const savedProducts = crystalProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="pb-24 space-y-12 text-left bg-cream-white min-h-screen">
      <PageHeader
        title="Your Saved Crystals"
        subtitle="Keep track of high-vibrational gemstone pieces you resonate with."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Crystal Products", href: "/services/crystal-products" },
          { name: "Wishlist" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {savedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 border border-light-gray/40 shadow-premium-soft text-center space-y-6 max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-red-500 mx-auto">
              <Heart size={36} />
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold text-deep-charcoal">Your wishlist is empty</h2>
              <p className="text-xs text-medium-gray leading-relaxed">
                Click the heart icon on any crystal product in our catalog to save it here for later.
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
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-light-gray/30 pb-4">
              <h3 className="font-heading text-xl font-bold text-deep-charcoal">
                Saved Items ({savedProducts.length})
              </h3>
              <button
                onClick={clearWishlist}
                className="text-xs text-medium-gray hover:text-red-500 transition-colors flex items-center space-x-1 cursor-pointer"
              >
                <Trash2 size={12} />
                <span>Clear Wishlist</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {savedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
