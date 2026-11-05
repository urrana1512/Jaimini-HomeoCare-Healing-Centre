"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Activity, ShieldAlert, Sparkles, BookOpen, Clock, ChevronDown, Check, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PageHeader from "@/components/layout/PageHeader";

const lamaFeraFeatures = [
  {
    title: "Psychic Shielding & Purging",
    desc: "Specifically targeting negative cords, ancestral blocks, curse matrices, and environmental electromagnetic entities."
  },
  {
    title: "Tibetan Lineage Symbols",
    desc: "Uses 12 ancient Buddhist healing symbols programmed directly into the chakras using a metallic symbol wand."
  },
  {
    title: "Chronic Pathology Healing",
    desc: "Supports speed recovery from deep-seated autoimmune struggles, neural degeneration, and chemical toxicity."
  },
  {
    title: "Space & Land Purification",
    desc: "Clearing historical land trauma, heavy resident energy, and geometric stress fields in clinics or homes."
  }
];

const sessionsOverview = [
  { step: "01", name: "Grounding and Robe Alignment", desc: "The patient relaxes on the healing table. The practitioner wears the traditional maroon robe to isolate and channel pure lineage frequencies." },
  { step: "02", name: "Energetic Symbol Wand Scan", desc: "Using a dedicated crystal/metal symbol wand to scan the energetic bodies and pinpoint heavy local blockage fields." },
  { step: "03", name: "Lineage Symbol Attunement", desc: "Projecting the Buddhist symbols into the Crown, Heart, and Root chakras to initiate rapid negative cord dissolution." },
  { step: "04", name: "The Grid Seal", desc: "Sealing the patient's aura in a golden protective grid, preventing re-attachment of negative cords or local entities." }
];

const pricingPackages = [
  {
    name: "Individual Clearance",
    price: "₹2,500",
    period: "Single Session",
    desc: "Initial scanning and deep negative energy clearing.",
    features: [
      "50 minutes session",
      "Traditional robe setup",
      "Lineage wand clearing",
      "Auric shield activation"
    ]
  },
  {
    name: "Space Clearing (Home/Office)",
    price: "₹6,000",
    period: "Per Visit",
    desc: "Purifying properties of resident stress and historical heavy fields.",
    features: [
      "120 minutes onsite clearing",
      "Land grid activation",
      "Entity dissolution",
      "Protection symbols sealed at doors"
    ]
  },
  {
    name: "Complete Karmic Rebirth",
    price: "₹8,500",
    period: "4 Sessions Plan",
    desc: "For severe chronic ailments and deep ancestral trauma resolution.",
    features: [
      "4 individual 60-mins sessions",
      "Past life scripts dissolution",
      "DNA grid attunement",
      "WhatsApp recovery coaching",
      "Saves ₹1,500 over single sessions"
    ]
  }
];

const lamaFeraFaqs = [
  {
    q: "Why is Lama Fera considered a highly intense therapy compared to Reiki?",
    a: "Reiki channels gentle, universal flow that is passive and calming. Lama Fera is active, martial energy. It uses specific symbols from Buddhist masters to directly attack and dissolve dark grids, cords, and entity attachments in the energetic layers."
  },
  {
    q: "What symptoms indicate that I might need Lama Fera?",
    a: "Indicators include sudden, unexplained dips in energy, feeling constant heavy shadows in your room, waking up exhausted, feeling stuck in chronic life cycles despite medical efforts, or struggling with severe chronic physical pathologies."
  },
  {
    q: "Are there any religious requirements to undergo Lama Fera?",
    a: "No. While it uses Buddhist symbols and lineage parameters, it functions purely as an energetic clearing technology and is open to patients of all beliefs."
  }
];

export default function LamaFeraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-20 space-y-20 text-left">
      <PageHeader 
        title="Lama Fera Healing" 
        subtitle="Unbound healing using the traditional Tibetan system to dissolve heavy energy blockages." 
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Lama Fera" },
        ]}
      />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold tracking-widest text-red-950 uppercase block">Tibetan Grid Therapy</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
                Tibetan Buddhist Energy Grid Healing
              </h2>
              <div className="gold-divider w-24 my-4" />
              <p className="text-xs md:text-sm text-medium-gray leading-relaxed max-w-xl">
                Unbound healing using the traditional Tibetan system. Pure lineage symbols channeled to dissolve heavy psychic stress, purge environmental toxicity, and support severe physical recovery.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="flex gap-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20Lama%20Fera%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <MessageSquare size={14} className="text-sage-green" />
                <span>Book Lama Fera Session</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden border border-light-gray shadow-premium-medium bg-off-white">
              <Image
                src="/images/services/lama_fera.png"
                alt="Golden meditation drawing symbols"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Applications of Lama Fera</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray max-w-md mx-auto mt-2">Highly intense, structured clearing coordinates for space and self.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {lamaFeraFeatures.map((feat, idx) => (
              <ScrollReveal
                key={feat.title}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/40 rounded-2xl p-6 shadow-premium-soft flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-900 flex items-center justify-center shrink-0">
                  <Activity size={20} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold text-deep-charcoal">{feat.title}</h3>
                  <p className="text-[11px] text-medium-gray leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 text-left space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">The Session Walkthrough</h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>

          <div className="space-y-6">
            {sessionsOverview.map((session, idx) => (
              <ScrollReveal
                key={session.step}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/45 rounded-2xl p-6 shadow-premium-soft flex items-start space-x-6 hover:border-red-500/20 transition-all duration-300"
              >
                <span className="font-heading text-2xl font-bold text-red-900 shrink-0">{session.step}</span>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-deep-charcoal">{session.name}</h3>
                  <p className="text-[11px] text-medium-gray leading-relaxed">{session.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Lama Fera Plans</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {pricingPackages.map((pack, idx) => (
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
                      <span className="text-[10px] text-medium-gray">/ {pack.period}</span>
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
                    href={`https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20interested%20in%20the%20Lama%20Fera%20${encodeURIComponent(pack.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-[11px] font-bold py-3 rounded-full shadow-premium-soft bg-white text-forest-green border border-forest-green/30 hover:bg-sage-green/10 transition-all duration-300"
                  >
                    Schedule Clearance
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="text-center space-y-4">
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Lama Fera FAQs</h2>
          <div className="gold-divider w-20 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {lamaFeraFaqs.map((faq, index) => {
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
