"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Shield, 
  Moon, 
  Truck, 
  Star, 
  ChevronRight, 
  HelpCircle, 
  Compass, 
  CheckCircle,
  Gem,
  PackageCheck
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProductFilter from "@/components/ecommerce/ProductFilter";
import ProductGrid from "@/components/ecommerce/ProductGrid";
import CrystalFinderModal from "@/components/ecommerce/CrystalFinderModal";
import BundleBuilder from "@/components/ecommerce/BundleBuilder";
import MoonPhaseRitual from "@/components/ecommerce/MoonPhaseRitual";
import { crystalProducts, crystalCategories } from "@/lib/data/crystal-products";
import { FilterState } from "@/types/crystal-ecommerce";

const initialFilters: FilterState = {
  searchQuery: "",
  category: "all",
  chakra: "all",
  intention: "all",
  zodiac: "all",
  priceRange: [0, 5000],
  sortBy: "featured",
  inStockOnly: false
};

const storeFaqs = [
  {
    q: "How are Dr. Niyati Rana's crystals energized and cleansed?",
    a: "Every single piece undergoes a strict 3-stage cleansing process: first, salt-water and sound frequency clearing to release mining residues; second, overnight full-moon absorption; and third, hands-on Usui Reiki Master attunement by Dr. Niyati Rana programmed to your aura and intention."
  },
  {
    q: "Are these 100% natural certified minerals?",
    a: "Yes. We source exclusively certified Grade-A natural gemstones from ethically operated mines in Brazil, Madagascar, Uruguay, and the Himalayas. We never use dyed glass, synthetic resin composites, or heated imitators."
  },
  {
    q: "How do I care for and recharge my crystal items at home?",
    a: "We recommend resting your crystal jewelry on a natural Selenite charging slab or placing it under the full moon once a month. You will receive a detailed cleansing guide with every parcel."
  },
  {
    q: "How does the ordering and shipping process work?",
    a: "Orders are safely packed in protective velvet pouches and shipped with express couriers across India. Orders above ₹999 qualify for FREE doorstep shipping. You can complete your order instantly via WhatsApp or online checkout."
  }
];

export default function CrystalProductsPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return crystalProducts.filter((product) => {
      // Search query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDesc.toLowerCase().includes(q) || product.description.toLowerCase().includes(q);
        const matchesIntention = product.intention.some(i => i.toLowerCase().includes(q));
        const matchesChakra = product.chakra.some(c => c.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesIntention && !matchesChakra) {
          return false;
        }
      }

      // Category
      if (filters.category !== "all" && product.category !== filters.category) {
        return false;
      }

      // Chakra
      if (filters.chakra !== "all") {
        const hasChakra = product.chakra.includes(filters.chakra) || product.chakra.includes("All Chakras");
        if (!hasChakra) return false;
      }

      // Intention
      if (filters.intention !== "all" && !product.intention.includes(filters.intention)) {
        return false;
      }

      // In stock
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-low") return a.price - b.price;
      if (filters.sortBy === "price-high") return b.price - a.price;
      if (filters.sortBy === "rating") return b.rating - a.rating;
      if (filters.sortBy === "newest") return b.id.localeCompare(a.id);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0); // Featured default
    });
  }, [filters]);

  return (
    <div className="pb-24 space-y-20 text-left bg-cream-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Crystal Products"
        subtitle="Handcrafted natural gemstone jewelry, raw earth specimens, and sacred towers attuned with Usui Reiki Master frequencies."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Crystal Products" },
        ]}
      />

      {/* STORE HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-forest-green via-[#0e523e] to-forest-green text-cream-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative background blurs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-warm-gold">
                <Sparkles size={13} />
                <span>Reiki & Full-Moon Activated Minerals</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Authentic Crystals for Mind, Body & Auric Balance
              </h1>

              <p className="text-xs md:text-sm text-cream-white/80 leading-relaxed max-w-xl">
                Every crystal is ethically hand-selected, cleansed with sacred sound & salt water, and programmed by <strong>Dr. Niyati Rana</strong> with Usui Reiki Master energy to serve as your continuous daily shield.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => setIsFinderOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-warm-gold text-deep-charcoal text-xs font-bold tracking-wider uppercase hover:bg-warm-gold/90 shadow-premium-soft flex items-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Compass size={15} />
                  <span>Find My Crystal Match (Quiz)</span>
                </button>

                <a
                  href="#catalog"
                  className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-cream-white text-xs font-semibold tracking-wider uppercase border border-white/20 transition-all cursor-pointer"
                >
                  Browse Store Catalog
                </a>
              </div>

              {/* USP Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-white/15">
                <div className="flex items-center space-x-2 text-xs">
                  <Gem size={16} className="text-warm-gold flex-shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">100% Certified Grade-A</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Moon size={16} className="text-warm-gold flex-shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">Moonlight Cleansed</span>
                </div>
                <div className="flex items-center space-x-2 text-xs col-span-2 sm:col-span-1">
                  <Truck size={16} className="text-warm-gold flex-shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">Free Shipping &gt; ₹999</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
                <Image
                  src="/images/services/crystal_bracelets.png"
                  alt="Dr. Niyati Rana Natural Crystal Products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY PILLS BAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {crystalCategories.map((cat) => {
            const isSelected = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterChange({ category: isSelected ? "all" : cat.id })}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-forest-green text-cream-white border-forest-green shadow-premium-medium scale-[1.02]"
                    : "bg-white text-deep-charcoal border-light-gray/40 shadow-premium-soft hover:border-forest-green/40 hover:-translate-y-0.5"
                }`}
              >
                <div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 ${
                    isSelected ? "bg-white/20 text-white" : "bg-forest-green/10 text-forest-green"
                  }`}>
                    <Sparkles size={16} />
                  </div>
                  <h3 className="font-heading text-xs font-bold leading-snug">{cat.name}</h3>
                </div>
                <span className={`text-[10px] font-medium mt-3 block ${isSelected ? "text-warm-gold" : "text-medium-gray"}`}>
                  {cat.count} items available
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* MAIN CATALOG SECTION: FILTER + PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8" id="catalog">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-light-gray/30 pb-4">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-forest-green uppercase block">
              Curated Energy Collection
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-charcoal mt-1">
              Shop Holistic Minerals & Bracelets
            </h2>
          </div>
          <p className="text-xs text-medium-gray">
            Showing <strong className="text-deep-charcoal">{filteredProducts.length}</strong> authentic items
          </p>
        </div>

        {/* Filter Controls */}
        <ProductFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalCount={crystalProducts.length}
        />

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          onResetFilters={handleResetFilters}
        />
      </section>

      {/* 3-CRYSTAL TRINITY BUNDLE BUILDER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <BundleBuilder />
      </section>

      {/* MOON PHASE & LUNAR CLEANSING RITUAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <MoonPhaseRitual />
      </section>

      {/* ENERGIZATION & PURIFICATION RITUAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-light-gray/40 shadow-premium-soft space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">
              Sacred Energy Integrity
            </span>
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">
              The 4-Step Attunement Process
            </h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray">
              Every mineral in our centre undergoes complete vibrational calibration before arriving at your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-off-white rounded-2xl p-6 border border-light-gray/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Salt-Water Purification</h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                Raw crystals and beads are cleansed to discharge environmental and transit grid static.
              </p>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border border-light-gray/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Full Moon Recharging</h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                Exposed to natural overnight lunar rays on Selenite beds to restore primary crystalline frequency.
              </p>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border border-light-gray/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Reiki & Lama Fera Activation</h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                Dr. Niyati Rana programs the stone matrix with sacred master symbols aligned to specific life intentions.
              </p>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border border-light-gray/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Sacred Velvet Packaging</h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                Carefully sealed in protective pouches alongside your personalized care and affirmation guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">
            Crystal Store Frequently Asked Questions
          </h2>
          <div className="gold-divider w-20 mx-auto" />
        </div>

        <div className="space-y-4">
          {storeFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-light-gray/40 rounded-2xl overflow-hidden shadow-premium-soft transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full p-6 text-left font-medium text-xs md:text-sm text-deep-charcoal hover:text-forest-green transition-colors cursor-pointer"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className="text-forest-green font-bold text-lg flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-medium-gray leading-relaxed border-t border-light-gray/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Crystal Finder Quiz Modal */}
      <CrystalFinderModal
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
      />
    </div>
  );
}
