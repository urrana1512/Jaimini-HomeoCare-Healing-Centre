"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, Sparkles, BookOpen, Clock, ChevronDown, Check, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PageHeader from "@/components/layout/PageHeader";

const spreadsList = [
  {
    name: "Past, Present, Future Spread",
    desc: "A quick, highly effective 3-card spread analyzing recent events, current energetic coordinates, and the immediate logical outcome."
  },
  {
    name: "Celtic Cross Layout",
    desc: "An intensive 10-card spread mapping out your core question, immediate obstacles, hidden sub-conscious factors, future trends, and final outcome."
  },
  {
    name: "Year Ahead Spread (12 Cards)",
    desc: "A card for each month, analyzing primary themes, career windows, relational energy highlights, and spiritual growth focus points."
  }
];

const questionGuide = [
  { do: "Phrase questions open-endedly: 'How can I align with my career path?'", dont: "Ask yes/no questions: 'Will I get the job next week?'" },
  { do: "Focus on personal agency: 'What blocks do I need to clear to heal?'", dont: "Ask about third parties: 'Why is my manager behaving this way?'" },
  { do: "Search for constructive advice: 'How can I navigate this challenge?'", dont: "Expect rigid future predictions: 'When will I become rich?'" }
];

const pricingPackages = [
  {
    name: "General Alignment Read",
    price: "₹1,200",
    period: "30 Minutes Session",
    desc: "Quick clarity session focusing on a single life question/spread.",
    features: [
      "30 minutes live video call",
      "Three-Card spread",
      "Immediate question analysis",
      "Photographs of cards sent via WhatsApp"
    ]
  },
  {
    name: "Celtic Cross Deep Dive",
    price: "₹2,200",
    period: "60 Minutes Session",
    desc: "Detailed audit mapping sub-conscious fields and multiple questions.",
    features: [
      "60 minutes live video call",
      "Celtic Cross layout",
      "Career, relationships & health links",
      "Programmed crystal suggestions based on aura"
    ]
  },
  {
    name: "Year Ahead Manifestation",
    price: "₹4,500",
    period: "90 Minutes Session",
    desc: "A thorough month-by-month energetic blueprint audit for the next 12 months.",
    features: [
      "90 minutes detailed live video call",
      "12-Card Year ahead spread",
      "PDF Summary of monthly focus areas",
      "Includes 1 custom activated crystal product suggestions"
    ]
  }
];

const tarotFaqs = [
  {
    q: "Are the cards showing rigid predictions of my future?",
    a: "No. Tarot maps current energy coordinates and logical outcomes based on your current subconscious mindset. Your free will is always supreme. The cards reveal pathways to help you make empowered, informed decisions."
  },
  {
    q: "What deck does Dr. Rana use during readings?",
    a: "Dr. Rana primarily uses the traditional Rider-Waite-Smith deck, along with specific intuitive oracle cards to access deeper energetic signatures."
  },
  {
    q: "Can I record our Tarot reading session?",
    a: "Yes. You are welcome to take notes or audio-record your session for personal future reference."
  }
];

export default function TarotPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-20 space-y-20 text-left">
      <PageHeader 
        title="Tarot Card Reading" 
        subtitle="Gain clarity on life transitions, relationship dynamics, and career cross-roads." 
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Tarot Reading" },
        ]}
      />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold tracking-widest text-indigo-950 uppercase block">Intuitive Counsel</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
                Tarot Card Reading & Spiritual Guidance
              </h2>
              <div className="gold-divider w-24 my-4" />
              <p className="text-xs md:text-sm text-medium-gray leading-relaxed max-w-xl">
                Gain clarity on life transitions, relationship dynamics, and career cross-roads. Dr. Niyati Rana combines psychological archetype cards with intuitive channel mapping.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="flex gap-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20Tarot%20reading%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <MessageSquare size={14} className="text-sage-green" />
                <span>Book Tarot Session</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden border border-light-gray shadow-premium-medium bg-off-white">
              <Image
                src="/images/services/tarot_reading.png"
                alt="Tarot card reading session"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE SPREADS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Featured Reading Layouts</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {spreadsList.map((spread, idx) => (
              <ScrollReveal
                key={spread.name}
                direction="up"
                delay={idx * 0.08}
                className="bg-white border border-light-gray/40 rounded-2xl p-6 shadow-premium-soft space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-950 flex items-center justify-center shrink-0">
                  <Compass size={20} />
                </div>
                <h3 className="font-heading text-sm font-bold text-deep-charcoal">{spread.name}</h3>
                <p className="text-[11px] text-medium-gray leading-relaxed">{spread.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTION FORMATION GUIDE */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-left">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">How to Structure Your Questions</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray mt-2 max-w-sm mx-auto">Phraisng your inquiries constructively yields significantly deeper reading clarity.</p>
          </div>

          <div className="space-y-6">
            {questionGuide.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                className="bg-white border border-light-gray/45 rounded-2xl p-6 shadow-premium-soft grid grid-cols-1 md:grid-cols-2 gap-4 text-xs"
              >
                <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
                  <span className="font-bold text-emerald-700 block">Empowered Inquiry (Do)</span>
                  <p className="text-medium-gray italic">{item.do}</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 space-y-1">
                  <span className="font-bold text-red-700 block">Rigid Inquiry (Avoid)</span>
                  <p className="text-medium-gray italic">{item.dont}</p>
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
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Tarot Pricing Packages</h2>
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
                    href={`https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20interested%20in%20the%20Tarot%20${encodeURIComponent(pack.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-[11px] font-bold py-3 rounded-full shadow-premium-soft bg-white text-forest-green border border-forest-green/30 hover:bg-sage-green/10 transition-all duration-300"
                  >
                    Schedule Session
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
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Tarot FAQs</h2>
          <div className="gold-divider w-20 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {tarotFaqs.map((faq, index) => {
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
