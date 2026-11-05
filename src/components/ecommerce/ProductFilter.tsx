"use client";

import React from "react";
import { Search, RotateCcw, Filter, Sparkles, ChevronDown } from "lucide-react";
import { FilterState, CrystalCategory, ChakraType, IntentionType } from "@/types/crystal-ecommerce";
import { crystalCategories, allChakras, allIntentions } from "@/lib/data/crystal-products";

interface ProductFilterProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export default function ProductFilter({
  filters,
  onFilterChange,
  onResetFilters,
  totalCount
}: ProductFilterProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-light-gray/40 shadow-premium-soft space-y-6">
      {/* Top Bar: Search + Sorting */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-medium-gray" />
          <input
            type="text"
            placeholder="Search crystals by name, intention, or stone (e.g. Citrine, Amethyst, Wealth)..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-off-white border border-light-gray/50 text-xs focus:outline-none focus:border-forest-green text-deep-charcoal transition-colors"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-medium-gray hover:text-deep-charcoal bg-light-gray/40 rounded-full px-2 py-0.5"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort selector */}
        <div className="flex items-center space-x-3">
          <span className="text-xs text-medium-gray font-medium whitespace-nowrap">Sort by:</span>
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as FilterState["sortBy"] })}
              className="appearance-none bg-off-white border border-light-gray/50 rounded-full px-4 py-2.5 pr-8 text-xs font-semibold text-deep-charcoal focus:outline-none focus:border-forest-green cursor-pointer"
            >
              <option value="featured">Featured / Curated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="space-y-2">
        <span className="text-[11px] font-semibold text-medium-gray uppercase tracking-wider block">
          Crystal Categories
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange({ category: "all" })}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              filters.category === "all"
                ? "bg-forest-green text-cream-white shadow-premium-soft"
                : "bg-off-white text-medium-gray hover:text-deep-charcoal hover:bg-light-gray/40"
            }`}
          >
            All Crystals ({totalCount})
          </button>
          {crystalCategories.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange({ category: cat.id })}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-forest-green text-cream-white shadow-premium-soft"
                    : "bg-off-white text-medium-gray hover:text-deep-charcoal hover:bg-light-gray/40"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Intention Pills & Chakra Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-light-gray/20">
        {/* Intention Selector */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-medium-gray uppercase tracking-wider block">
            Filter by Healing Intention
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onFilterChange({ intention: "all" })}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                filters.intention === "all"
                  ? "bg-forest-green/15 text-forest-green border border-forest-green/30"
                  : "bg-off-white text-medium-gray hover:text-deep-charcoal"
              }`}
            >
              All Intents
            </button>
            {allIntentions.map((intent) => {
              const isActive = filters.intention === intent;
              return (
                <button
                  key={intent}
                  onClick={() => onFilterChange({ intention: intent })}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-forest-green/15 text-forest-green border border-forest-green/40 font-semibold"
                      : "bg-off-white text-medium-gray hover:text-deep-charcoal"
                  }`}
                >
                  {intent}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chakra Selector */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-medium-gray uppercase tracking-wider block">
            Filter by Chakra Focus
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onFilterChange({ chakra: "all" })}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                filters.chakra === "all"
                  ? "bg-warm-gold/20 text-deep-charcoal border border-warm-gold/40"
                  : "bg-off-white text-medium-gray hover:text-deep-charcoal"
              }`}
            >
              All Chakras
            </button>
            {allChakras.map((chk) => {
              const isActive = filters.chakra === chk;
              return (
                <button
                  key={chk}
                  onClick={() => onFilterChange({ chakra: chk })}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-warm-gold/25 text-deep-charcoal border border-warm-gold/60 font-semibold"
                      : "bg-off-white text-medium-gray hover:text-deep-charcoal"
                  }`}
                >
                  {chk}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer bar with Reset & In-Stock filter */}
      <div className="flex items-center justify-between pt-3 border-t border-light-gray/20 text-xs">
        <label className="flex items-center space-x-2 text-deep-charcoal cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
            className="w-4 h-4 rounded text-forest-green focus:ring-forest-green border-light-gray"
          />
          <span className="font-medium text-xs">In-Stock items only</span>
        </label>

        <button
          onClick={onResetFilters}
          className="flex items-center space-x-1 text-medium-gray hover:text-forest-green transition-colors cursor-pointer"
        >
          <RotateCcw size={12} />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );
}
