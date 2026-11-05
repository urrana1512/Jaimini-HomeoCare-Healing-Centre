"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  RotateCcw, 
  Check, 
  ArrowRight,
  Gem,
  MessageSquare,
  ChevronRight,
  UserCheck,
  CheckCircle2 as CheckCircle
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import ProductCard from "@/components/ecommerce/ProductCard";
import { crystalProducts } from "@/lib/data/crystal-products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = crystalProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const { addToCart, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.beadSize || "8mm");
  const [customIntentNote, setCustomIntentNote] = useState("");
  const [activeTab, setActiveTab] = useState<"benefits" | "specs" | "care" | "reviews">("benefits");
  const [added, setAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  // Related products
  const relatedProducts = crystalProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.chakra.some(c => product.chakra.includes(c))))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, customIntentNote);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, customIntentNote);
    openCart();
  };

  return (
    <div className="pb-24 space-y-16 text-left bg-cream-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <div className="flex items-center space-x-2 text-xs text-medium-gray">
          <Link href="/" className="hover:text-forest-green">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services/crystal-products" className="hover:text-forest-green">Crystal Products</Link>
          <ChevronRight size={12} />
          <span className="text-forest-green font-semibold line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* PRODUCT OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-light-gray/40 shadow-premium-soft">
              <Image
                src={product.images[selectedImageIdx] || product.thumbnail}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                {product.isBestseller && (
                  <span className="px-3 py-1 rounded-full bg-forest-green text-cream-white text-xs font-bold tracking-wider uppercase shadow-premium-soft">
                    Bestseller
                  </span>
                )}
                {product.reikiAttuned && (
                  <span className="px-3 py-1 rounded-full bg-warm-gold text-deep-charcoal text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 shadow-premium-soft">
                    <Sparkles size={12} className="text-white" />
                    <span>Reiki Master Attuned</span>
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-premium-soft cursor-pointer z-10 ${
                  isFavorited 
                    ? "bg-red-50 text-red-500" 
                    : "bg-white/80 text-medium-gray hover:text-deep-charcoal hover:bg-white"
                }`}
                title={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} className={isFavorited ? "fill-current" : ""} />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      selectedImageIdx === idx ? "border-forest-green scale-105" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Purchase Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-forest-green uppercase tracking-wider">
                <span>{product.categoryName}</span>
                <span>•</span>
                <span>Origin: {product.origin}</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-deep-charcoal leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 text-sm pt-1">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className={i < Math.floor(product.rating) ? "fill-amber-400" : "text-light-gray"} />
                  ))}
                </div>
                <span className="font-bold text-deep-charcoal">{product.rating}</span>
                <span className="text-medium-gray text-xs">({product.reviewCount} verified reviews)</span>
                <span className="text-forest-green font-medium text-xs">• In Stock ({product.stockCount} left)</span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline space-x-4 py-2 border-y border-light-gray/30">
              <span className="font-heading text-3xl font-bold text-forest-green">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-medium-gray line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">
                  Save {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Short Desc */}
            <p className="text-xs sm:text-sm text-medium-gray leading-relaxed">
              {product.description}
            </p>

            {/* Chakra & Intention Badges */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-medium-gray uppercase tracking-wider block">
                Primary Energetic Alignments
              </span>
              <div className="flex flex-wrap gap-2">
                {product.chakra.map((chk) => (
                  <span key={chk} className="bg-forest-green/10 text-forest-green text-xs font-semibold px-3 py-1 rounded-full">
                    {chk} Chakra
                  </span>
                ))}
                {product.intention.map((intn) => (
                  <span key={intn} className="bg-warm-gold/20 text-deep-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                    {intn}
                  </span>
                ))}
                {product.zodiac.map((zod) => (
                  <span key={zod} className="bg-off-white border border-light-gray/60 text-medium-gray text-xs font-medium px-3 py-1 rounded-full">
                    {zod}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional Bead Size Selector */}
            {product.beadSize && (
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-medium-gray uppercase tracking-wider block">
                  Bead Diameter Size
                </span>
                <div className="flex space-x-3">
                  {["6mm", "8mm", "10mm"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        selectedSize === size
                          ? "bg-forest-green text-cream-white border-forest-green shadow-premium-soft"
                          : "bg-white text-deep-charcoal border-light-gray/60 hover:border-forest-green/40"
                      }`}
                    >
                      {size} {size === "8mm" && "(Standard)"}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Name / Intention Input Note */}
            <div className="space-y-1.5 bg-white p-4 rounded-2xl border border-light-gray/40">
              <label className="text-xs font-semibold text-deep-charcoal flex items-center justify-between">
                <span>Personalize Energy Attunement (Optional)</span>
                <span className="text-[10px] text-forest-green font-medium">Free Reiki Coding</span>
              </label>
              <input
                type="text"
                placeholder="Enter recipient full name / specific intention..."
                value={customIntentNote}
                onChange={(e) => setCustomIntentNote(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-light-gray/60 focus:outline-none focus:border-forest-green bg-off-white"
              />
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-4">
                {/* Quantity */}
                <div className="flex items-center border border-light-gray/60 rounded-full px-3.5 py-2.5 space-x-3 bg-white shadow-premium-soft">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-medium-gray hover:text-deep-charcoal font-bold text-sm"
                  >
                    −
                  </button>
                  <span className="text-xs font-semibold w-5 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-medium-gray hover:text-deep-charcoal font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-full bg-forest-green text-cream-white font-semibold text-xs tracking-wider uppercase hover:bg-forest-green/95 shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  {added ? (
                    <>
                      <Check size={16} className="text-warm-gold" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>Add to Bag • ₹{product.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Buy Now / Direct Order */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 rounded-full bg-warm-gold text-deep-charcoal font-bold text-xs tracking-wider uppercase hover:bg-warm-gold/90 shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Instant Checkout / Order on WhatsApp</span>
                <ArrowRight size={14} />
              </button>

              {/* Ask on WhatsApp Inquiry */}
              <a
                href={`https://wa.me/919316356317?text=${encodeURIComponent(`Hello Dr. Niyati, I am interested in ${product.name} (₹${product.price}). Could you please guide me on its personalized attunement?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-white border border-[#25D366]/40 hover:bg-[#25D366]/10 text-forest-green font-semibold text-xs tracking-wider uppercase shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <MessageSquare size={15} className="text-[#25D366]" />
                <span>Ask Dr. Niyati on WhatsApp</span>
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-light-gray/30 text-xs text-medium-gray">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={16} className="text-forest-green" />
                <span>100% Authentic Natural Gemstone</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck size={16} className="text-forest-green" />
                <span>Free Shipping on Orders &gt; ₹999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles size={16} className="text-forest-green" />
                <span>Reiki Cleansed & Programmed</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw size={16} className="text-forest-green" />
                <span>Damaged Transit Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED INFORMATION TABS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-light-gray/40 shadow-premium-soft space-y-8">
          {/* Tab Navigation */}
          <div className="flex border-b border-light-gray/30 space-x-8 overflow-x-auto pb-2">
            {[
              { id: "benefits", label: "Healing & Energetic Benefits" },
              { id: "specs", label: "Specifications & Origin" },
              { id: "care", label: "Cleansing & Charging Guide" },
              { id: "reviews", label: `Customer Reviews (${product.reviews?.length || 0})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`text-xs md:text-sm font-semibold whitespace-nowrap pb-3 transition-colors relative cursor-pointer ${
                  activeTab === tab.id
                    ? "text-forest-green"
                    : "text-medium-gray hover:text-deep-charcoal"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="productTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-green"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-2 text-xs md:text-sm text-medium-gray leading-relaxed">
            {activeTab === "benefits" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.healingBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3 bg-off-white p-4 rounded-2xl border border-light-gray/30">
                      <CheckCircle size={16} className="text-forest-green flex-shrink-0 mt-0.5" />
                      <span className="text-deep-charcoal font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Affirmation Card */}
                {product.affirmation && (
                  <div className="bg-gradient-to-r from-sage-green/20 via-cream-white to-warm-gold/15 p-6 rounded-2xl border border-warm-gold/30 space-y-2">
                    <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">
                      Daily Alignment Affirmation
                    </span>
                    <p className="font-heading text-base md:text-lg italic font-bold text-deep-charcoal">
                      &quot;{product.affirmation}&quot;
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "specs" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-off-white p-4 rounded-xl space-y-1 border border-light-gray/30">
                  <span className="text-[11px] text-medium-gray">Mineral Origin</span>
                  <p className="font-semibold text-deep-charcoal">{product.origin}</p>
                </div>
                <div className="bg-off-white p-4 rounded-xl space-y-1 border border-light-gray/30">
                  <span className="text-[11px] text-medium-gray">Approximate Weight</span>
                  <p className="font-semibold text-deep-charcoal">{product.weight || "Standard"}</p>
                </div>
                <div className="bg-off-white p-4 rounded-xl space-y-1 border border-light-gray/30">
                  <span className="text-[11px] text-medium-gray">Dimensions</span>
                  <p className="font-semibold text-deep-charcoal">{product.dimensions || "N/A"}</p>
                </div>
                <div className="bg-off-white p-4 rounded-xl space-y-1 border border-light-gray/30">
                  <span className="text-[11px] text-medium-gray">Zodiac Affinity</span>
                  <p className="font-semibold text-deep-charcoal">{product.zodiac.join(", ")}</p>
                </div>
                <div className="bg-off-white p-4 rounded-xl space-y-1 border border-light-gray/30">
                  <span className="text-[11px] text-medium-gray">Grade & Quality</span>
                  <p className="font-semibold text-deep-charcoal">Grade-A Certified Natural Mineral</p>
                </div>
                <div className="bg-off-white p-4 rounded-xl space-y-1 border border-light-gray/30">
                  <span className="text-[11px] text-medium-gray">Energization</span>
                  <p className="font-semibold text-deep-charcoal">Usui Reiki & Full-Moon Charged</p>
                </div>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-4">
                <p className="text-deep-charcoal font-medium">
                  {product.cleansingMethod}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-off-white border border-light-gray/30 space-y-1.5">
                    <span className="font-bold text-forest-green block">1. Monthly Moon Bath</span>
                    <p className="text-xs text-medium-gray">Place on your windowsill under full moonlight for 4-6 hours to reset charges.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-off-white border border-light-gray/30 space-y-1.5">
                    <span className="font-bold text-forest-green block">2. Selenite Slab</span>
                    <p className="text-xs text-medium-gray">Rest your bracelet on a Selenite plate overnight to dissolve daily workplace static.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-off-white border border-light-gray/30 space-y-1.5">
                    <span className="font-bold text-forest-green block">3. Keep Dry from Chemicals</span>
                    <p className="text-xs text-medium-gray">Avoid perfumes, chlorine pools, and harsh detergents to preserve natural gemstone polish.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {product.reviews.map((rev) => (
                      <div key={rev.id} className="p-5 rounded-2xl bg-off-white border border-light-gray/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-deep-charcoal">{rev.author}</span>
                            {rev.verified && (
                              <span className="text-[10px] bg-forest-green/10 text-forest-green font-semibold px-2 py-0.5 rounded-full flex items-center space-x-1">
                                <UserCheck size={10} />
                                <span>Verified Buyer</span>
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-medium-gray">{rev.date}</span>
                        </div>
                        <div className="flex text-amber-400">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} size={12} className="fill-amber-400" />
                          ))}
                        </div>
                        <h4 className="font-heading text-xs font-bold text-deep-charcoal">{rev.title}</h4>
                        <p className="text-xs text-medium-gray">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-medium-gray">Be the first to review this activated crystal item!</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">
              Complementary Frequencies
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-charcoal">
              Related Holistic Crystals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
