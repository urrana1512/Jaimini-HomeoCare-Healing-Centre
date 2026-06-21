"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, ChevronDown, MessageSquare, Info, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const gemsGlossary = [
  {
    name: "Amethyst (Deep Violet)",
    chakra: "Third Eye & Crown Chakras",
    properties: "Deep calming energy, insomnia relief, anxiety reduction, spiritual intuition enhancement.",
    color: "bg-purple-500"
  },
  {
    name: "Rose Quartz (Soft Pink)",
    chakra: "Heart Chakra",
    properties: "Self-love restoration, emotional healing, trauma recovery, encouraging relational empathy.",
    color: "bg-pink-300"
  },
  {
    name: "Jade (Sage Green)",
    chakra: "Heart & Solar Plexus Chakras",
    properties: "Attracting abundance, nervous system stabilization, physical cell regeneration support.",
    color: "bg-emerald-500"
  },
  {
    name: "Citrine (Golden Yellow)",
    chakra: "Solar Plexus Chakra",
    properties: "Stimulating willpower, creative drive, business success, manifesting wealth.",
    color: "bg-yellow-400"
  },
  {
    name: "Black Tourmaline (Deep Charcoal)",
    chakra: "Root Chakra",
    properties: "Ultra-heavy EMF grounding, psychic protection shielding, absorbing negative astral cords.",
    color: "bg-stone-900"
  }
];

const activationSteps = [
  { step: "01", title: "Salt-Water Purification", desc: "Raw beads are immersed in local sea-salt saline under direct full-moon light to discharge historical mining and cargo handling energy fields." },
  { step: "02", title: "Patient Frequency Programming", desc: "Dr. Niyati Rana uses the patient's birth name and birth date coordinates to custom-tune the crystals' core vibrational memory." },
  { step: "03", title: "Reiki Symbol Attunement", desc: "Attuning the custom grid configuration using sacred Usui Reiki symbols, locking the active charges into the quartz matrix." },
  { step: "04", title: "Maintenance & Cleansing Guidelines", desc: "A detailed manual is shipped, advising you on how to cleanse your bracelet over amethyst clusters or under moon cycles monthly." }
];

const pricingBracelets = [
  {
    name: "Standard Auric Shield",
    price: "₹1,800",
    desc: "Single-gemstone configuration (e.g. Pure Black Tourmaline or Amethyst) custom programmed.",
    features: [
      "Grade A natural gemstones",
      "Reiki name activation",
      "Traditional linen storage pouch",
      "Cleansing instructions booklet"
    ]
  },
  {
    name: "Chakra Balance Synergy",
    price: "₹2,500",
    desc: "Multi-stone layout targeting specific chakra blockages (e.g. Amethyst + Citrine configuration).",
    features: [
      "Premium mixed gemstones",
      "Chakra alignment program",
      "Birth date coordinate tuning",
      "1 free energetic recharge after 3 months"
    ]
  },
  {
    name: "Elite Protection Grid",
    price: "₹3,800",
    desc: "High-grade rare crystals with double Reiki Master symbol attunement and spatial space seal.",
    features: [
      "Rare high-vibrational stones",
      "Dual Master symbol seal",
      "Custom programmed focus intent",
      "On-demand priority recharge audits",
      "Includes mini selenite clearing wand"
    ]
  }
];

const crystalFaqs = [
  {
    q: "How do I know which crystal bracelet is suitable for my energy?",
    a: "Dr. Rana will assess your current physical symptoms and aura during a consultation. Alternatively, you can describe your primary life goals or emotional blocks (e.g., career blocks, anxiety, thyroid issues) in your order form, and we will select the ideal gemstones."
  },
  {
    q: "How often do these crystal bracelets require energetic recharging?",
    a: "Crystals absorb heavy local fields over time. We recommend placing your bracelet on a Selenite plate or leaving it under full moon light once a month to reset its core charges."
  },
  {
    q: "Are these authentic, natural gemstones?",
    a: "Yes. All our gemstone supplies are certified Grade A natural minerals. We do not use dyed glass, synthetic resins, or heat-treated quartz duplicates."
  }
];

export default function CrystalsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Custom Order Mock State
  const [orderForm, setOrderForm] = useState({
    name: "",
    birthdate: "",
    intent: "Calming & Stress Relief",
    notes: ""
  });
  const [ordered, setOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
  };

  return (
    <div className="space-y-20 pb-20 pt-10 text-left">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-cream-white via-cream-white to-blue-500/10 py-20 border-b border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold tracking-widest text-blue-950 uppercase block">Gemstone Medicine</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
                Programmed Crystal Bracelets & Healing Stones
              </h1>
              <div className="gold-divider w-24 my-4" />
              <p className="text-xs md:text-sm text-medium-gray leading-relaxed max-w-xl">
                Wear your therapeutic field. Handcrafted, high-vibrational gemstone bracelets cleansed, programmed, and attuned with Usui Reiki Master symbols programmed specifically to your birth matrix.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="flex gap-4">
              <a
                href="#order-form"
                className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <span>Request Custom Bracelet</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden border border-light-gray shadow-premium-medium bg-off-white">
              <Image
                src="/images/services/crystal_bracelets.png"
                alt="Healing crystal bracelets beads"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GEMS GLOSSARY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Gemstone Therapy Guide</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray max-w-md mx-auto mt-2">Each crystal emits specific bio-electric frequencies aligned to primary physical and chakra centers.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {gemsGlossary.map((gem, idx) => (
              <ScrollReveal
                key={gem.name}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/40 rounded-2xl p-6 shadow-premium-soft space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${gem.color} shadow-premium-soft`} />
                  <h3 className="text-xs font-bold text-deep-charcoal">{gem.name}</h3>
                </div>
                <div className="space-y-2 text-[11px] text-medium-gray leading-relaxed">
                  <p><strong>Primary Chakra:</strong> {gem.chakra}</p>
                  <p><strong>Vibrational Properties:</strong> {gem.properties}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMING STEPS */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 text-left space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Core Programming & Activation</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray mt-2">Unlocking crystal energy storage grids through professional attunement.</p>
          </div>

          <div className="space-y-6">
            {activationSteps.map((step, idx) => (
              <ScrollReveal
                key={step.step}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/45 rounded-2xl p-6 shadow-premium-soft flex items-start space-x-6 hover:border-blue-500/20 transition-all duration-300"
              >
                <span className="font-heading text-2xl font-bold text-blue-900 shrink-0">{step.step}</span>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-deep-charcoal">{step.title}</h3>
                  <p className="text-[11px] text-medium-gray leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING BRACELETS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Gemstone Pricing & Options</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {pricingBracelets.map((pack, idx) => (
              <ScrollReveal
                key={pack.name}
                direction="up"
                delay={idx * 0.1}
                className="bg-white border border-light-gray/40 rounded-3xl p-8 shadow-premium-soft flex flex-col justify-between h-full"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-deep-charcoal">{pack.name}</h3>
                    <div className="flex items-baseline space-x-1.5 mt-2">
                      <span className="text-2xl font-bold text-forest-green">{pack.price}</span>
                      <span className="text-[10px] text-medium-gray">/ bracelet</span>
                    </div>
                    <p className="text-[11px] text-medium-gray mt-2 leading-relaxed">{pack.desc}</p>
                  </div>
                  
                  <ul className="space-y-2.5 border-t border-light-gray/30 pt-6 text-[11px] text-medium-gray">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2">
                        <Check size={12} className="text-forest-green mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(pack.name)}%20crystal%20bracelet.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-[11px] font-bold py-3 rounded-full shadow-premium-soft bg-white text-forest-green border border-forest-green/30 hover:bg-sage-green/10 transition-all duration-300"
                  >
                    Order Bracelet
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM BRACELET ORDER FORM */}
      <section id="order-form" className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up" className="bg-white border border-light-gray/40 rounded-3xl p-8 md:p-10 shadow-premium-soft text-left">
          {ordered ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center mx-auto">
                <Check size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-deep-charcoal">Gemstone Profile Configured</h3>
              <p className="text-xs text-medium-gray max-w-sm mx-auto">
                Thank you! Your gemstone configuration request has been saved. We will review your birth chart alignment parameters and coordinate details via WhatsApp.
              </p>
              <button 
                onClick={() => setOrdered(false)} 
                className="bg-forest-green text-cream-white text-xs font-bold px-6 py-2 rounded-full hover:bg-forest-green/95 transition-all"
              >
                Configure Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="space-y-6 text-xs md:text-sm">
              <h3 className="font-heading text-xl font-bold text-deep-charcoal border-b border-light-gray/10 pb-4">Configure Custom activated Bracelet</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="font-semibold text-deep-charcoal">Patient Full Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="For programming name signature"
                    className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                  />
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="birthdate" className="font-semibold text-deep-charcoal">Date of Birth</label>
                  <input
                    required
                    type="date"
                    id="birthdate"
                    value={orderForm.birthdate}
                    onChange={(e) => setOrderForm(p => ({ ...p, birthdate: e.target.value }))}
                    className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="intent" className="font-semibold text-deep-charcoal">Primary Energetic Intent</label>
                  <select
                    id="intent"
                    value={orderForm.intent}
                    onChange={(e) => setOrderForm(p => ({ ...p, intent: e.target.value }))}
                    className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-white focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                  >
                    <option>Calming & Stress Relief (Amethyst Focus)</option>
                    <option>Heart Healing & Self Love (Rose Quartz Focus)</option>
                    <option>Abundance & Wealth Attraction (Citrine Focus)</option>
                    <option>Psychic Grounding & Aura Shield (Tourmaline Focus)</option>
                    <option>Vitality & Cell Recovery (Jade Focus)</option>
                  </select>
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="notes" className="font-semibold text-deep-charcoal">Specific Health/Life Focus Notes (Optional)</label>
                  <input
                    type="text"
                    id="notes"
                    value={orderForm.notes}
                    onChange={(e) => setOrderForm(p => ({ ...p, notes: e.target.value }))}
                    placeholder="e.g. chronic fatigue or career blocks"
                    className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-forest-green text-cream-white font-bold p-3.5 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <span>Save Gemstone Configuration</span>
              </button>
            </form>
          )}
        </ScrollReveal>
      </section>

      {/* FAQS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="text-center space-y-4">
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Crystal Bracelets FAQs</h2>
          <div className="gold-divider w-20 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {crystalFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                className="bg-white border border-light-gray/40 rounded-2xl overflow-hidden shadow-premium-soft"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left font-medium text-xs md:text-sm text-deep-charcoal hover:text-forest-green transition-colors duration-200"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-medium-gray transition-transform duration-300 ${isOpen ? "rotate-180 text-forest-green" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-light-gray/20 overflow-hidden"
                    >
                      <div className="p-6 text-xs text-medium-gray leading-relaxed bg-off-white/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
