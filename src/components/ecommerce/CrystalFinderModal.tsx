"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Compass, CheckCircle2, ArrowRight, RotateCcw, ShoppingBag } from "lucide-react";
import { CrystalProduct, IntentionType, ZodiacType, CrystalCategory } from "@/types/crystal-ecommerce";
import { crystalProducts, allIntentions, allZodiacs } from "@/lib/data/crystal-products";
import { useCart } from "@/context/CartContext";

interface CrystalFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CrystalFinderModal({ isOpen, onClose }: CrystalFinderModalProps) {
  const { addToCart } = useCart();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedIntention, setSelectedIntention] = useState<IntentionType | "">("");
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacType | "">("");
  const [selectedForm, setSelectedForm] = useState<"wearable" | "space" | "any">("any");
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const handleReset = () => {
    setStep(1);
    setSelectedIntention("");
    setSelectedZodiac("");
    setSelectedForm("any");
    setAddedIds([]);
  };

  const getRecommendedProducts = (): CrystalProduct[] => {
    let results = [...crystalProducts];

    if (selectedIntention) {
      results = results.filter(p => p.intention.includes(selectedIntention as IntentionType));
    }

    if (selectedForm === "wearable") {
      results = results.filter(p => p.category === "bracelets");
    } else if (selectedForm === "space") {
      results = results.filter(p => p.category !== "bracelets");
    }

    if (selectedZodiac && selectedZodiac !== "All Signs") {
      const zodiacMatches = results.filter(p => p.zodiac.includes(selectedZodiac as ZodiacType) || p.zodiac.includes("All Signs"));
      if (zodiacMatches.length > 0) {
        results = zodiacMatches;
      }
    }

    if (results.length === 0) {
      return crystalProducts.slice(0, 2);
    }

    return results.slice(0, 2);
  };

  const handleAddMatchToCart = (product: CrystalProduct) => {
    addToCart(product, 1, product.beadSize, `Matched via Crystal Finder (${selectedIntention || "General"})`);
    setAddedIds(prev => [...prev, product.id]);
  };

  if (!isOpen) return null;

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

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-light-gray/40 max-w-2xl w-full overflow-hidden z-10 my-auto text-deep-charcoal p-6 sm:p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-light-gray/30 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center">
                <Compass size={18} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-deep-charcoal">
                  Personal Crystal Matcher
                </h3>
                <p className="text-[11px] text-medium-gray">Dr. Niyati Rana Energy Recommendation Tool</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-light-gray/40 flex items-center justify-center text-medium-gray hover:text-deep-charcoal transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  step >= s ? "bg-forest-green" : "bg-light-gray/40"
                }`}
              />
            ))}
          </div>

          {/* STEP 1: Intention */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">Step 1 of 3</span>
                <h4 className="font-heading text-xl font-bold text-deep-charcoal">
                  What primary life area do you want to harmonize?
                </h4>
                <p className="text-xs text-medium-gray">Select the emotional or life focus you want to amplify.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allIntentions.map((intent) => (
                  <button
                    key={intent}
                    onClick={() => {
                      setSelectedIntention(intent);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      selectedIntention === intent
                        ? "bg-forest-green text-cream-white border-forest-green shadow-premium-soft"
                        : "bg-off-white text-deep-charcoal border-light-gray/50 hover:border-forest-green/40 hover:bg-white"
                    }`}
                  >
                    <span>{intent}</span>
                    <Sparkles size={14} className={selectedIntention === intent ? "text-warm-gold" : "text-medium-gray"} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Zodiac */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">Step 2 of 3</span>
                <h4 className="font-heading text-xl font-bold text-deep-charcoal">
                  What is your Sun or Moon Zodiac Sign?
                </h4>
                <p className="text-xs text-medium-gray">Crystalline minerals resonate deeply with astrological elemental frequencies.</p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                {allZodiacs.map((zod) => (
                  <button
                    key={zod}
                    onClick={() => {
                      setSelectedZodiac(zod);
                      setStep(3);
                    }}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                      selectedZodiac === zod
                        ? "bg-forest-green text-cream-white border-forest-green shadow-premium-soft"
                        : "bg-off-white text-deep-charcoal border-light-gray/50 hover:border-forest-green/40"
                    }`}
                  >
                    {zod}
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-medium-gray hover:text-forest-green font-medium"
                >
                  ← Back to Step 1
                </button>
                <button
                  onClick={() => {
                    setSelectedZodiac("All Signs");
                    setStep(3);
                  }}
                  className="text-xs text-forest-green underline font-medium"
                >
                  Skip Zodiac
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Form Factor */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest block">Step 3 of 3</span>
                <h4 className="font-heading text-xl font-bold text-deep-charcoal">
                  How do you prefer to experience your crystal?
                </h4>
                <p className="text-xs text-medium-gray">Choose your preferred form of placement and energy contact.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "wearable", title: "Personal Wearable", desc: "Bead bracelets for 24/7 continuous auric contact." },
                  { id: "space", title: "Room & Altars", desc: "Towers and raw geodes to clear and elevate room spaces." },
                  { id: "any", title: "Open to Either", desc: "Show the highest vibrational match regardless of form." },
                ].map((form) => (
                  <button
                    key={form.id}
                    onClick={() => {
                      setSelectedForm(form.id as typeof selectedForm);
                      setStep(4);
                    }}
                    className="p-4 rounded-2xl border bg-off-white border-light-gray/50 hover:border-forest-green/40 hover:bg-white text-left space-y-1.5 transition-all cursor-pointer"
                  >
                    <h5 className="font-heading text-xs font-bold text-deep-charcoal">{form.title}</h5>
                    <p className="text-[11px] text-medium-gray">{form.desc}</p>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-medium-gray hover:text-forest-green font-medium"
                >
                  ← Back to Step 2
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="space-y-1 text-center">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-green/10 text-forest-green text-xs font-bold">
                  <Sparkles size={12} className="text-warm-gold" />
                  <span>Your Harmonized Crystal Matches</span>
                </div>
                <h4 className="font-heading text-2xl font-bold text-deep-charcoal">
                  Prescription for {selectedIntention || "Holistic Balance"}
                </h4>
                <p className="text-xs text-medium-gray">
                  Tuned for {selectedZodiac || "Universal Resonance"} and energized with Usui Reiki Master symbols.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {getRecommendedProducts().map((prod) => {
                  const isAdded = addedIds.includes(prod.id);
                  return (
                    <div key={prod.id} className="bg-off-white rounded-2xl p-4 border border-light-gray/40 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white border border-light-gray/30">
                          <Image src={prod.thumbnail} alt={prod.name} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="text-[10px] text-forest-green font-semibold uppercase">{prod.categoryName}</span>
                          <h5 className="font-heading text-xs font-bold text-deep-charcoal line-clamp-1">{prod.name}</h5>
                          <p className="text-[11px] text-medium-gray line-clamp-2 mt-1">{prod.shortDesc}</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-light-gray/20 flex items-center justify-between">
                        <span className="font-heading text-sm font-bold text-forest-green">₹{prod.price}</span>
                        <button
                          onClick={() => handleAddMatchToCart(prod)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
                            isAdded
                              ? "bg-warm-gold text-deep-charcoal"
                              : "bg-forest-green text-cream-white hover:bg-forest-green/95"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <CheckCircle2 size={12} />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={12} />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-light-gray/20">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-1 text-xs text-medium-gray hover:text-forest-green cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Start over</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs font-semibold text-forest-green hover:underline cursor-pointer"
                >
                  View Full Store Catalog →
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
