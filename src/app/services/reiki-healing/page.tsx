"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, Award, Clock, ChevronDown, Check, Shield, MessageSquare, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const chakraList = [
  { 
    name: "Crown Chakra (Sahasrara)", 
    color: "bg-purple-600", 
    location: "Top of the head (Cerebral Cortex)",
    element: "Thought / Cosmic Energy",
    functions: "Higher consciousness, spiritual connection, mental clarity, and direct interface with universal energy fields.", 
    blockage: "Migraines, feelings of isolation or alienation, chronic indecisiveness, spiritual skepticism, and lack of life direction.",
    deepDescription: "The Crown Chakra is your primary energetic portal to the universe, coordinating the pineal gland, brainstem, and central nervous system functions. In Usui Reiki, we focus on clearing intellectual and cognitive fatigue, aligning this center to help you move beyond self-limiting thoughts. Restoring Sahasrara opens a natural conduit for spiritual inspiration, higher wisdom, and a profound sense of universal peace and oneness."
  },
  { 
    name: "Third Eye Chakra (Ajna)", 
    color: "bg-indigo-600", 
    location: "Forehead, between the eyebrows (Pituitary Gland)",
    element: "Light / Intuition",
    functions: "Intuition, visual perception, inner guidance, imagination, cognitive processing, and mental focus.", 
    blockage: "Brain fog, recurring nightmares, lack of concentration, sinus pressure, visual strain, and feelings of intellectual disconnect.",
    deepDescription: "Ajna operates as the seat of your intuition and spiritual vision, managing endocrine rhythms through the pituitary gland. When blocked, it leads to cognitive fatigue and anxiety about the future. Reiki sessions work on Ajna to clear subtle energetic grids, restoring visual logic, deep intuitive processing, and sleep-cycle balance while dissolving deep-seated subconscious fears."
  },
  { 
    name: "Throat Chakra (Vishuddha)", 
    color: "bg-blue-400", 
    location: "Base of the throat (Thyroid Gland)",
    element: "Sound / Ether",
    functions: "Verbal communication, self-expression, honesty, listening, and artistic creativity.", 
    blockage: "Sore throats, thyroid dysfunction (hypo/hyper), fear of public speaking, neck stiffness, and difficulty expressing authentic emotions.",
    deepDescription: "Vishuddha manages how you express your truth and voice your inner needs. Physically, it directly corresponds with the thyroid gland, regulating systemic metabolism. Reiki application on the throat center eases local vascular and muscular tension, clearing energetic blocks that prevent open expression and restoring thyroid energy alignment."
  },
  { 
    name: "Heart Chakra (Anahata)", 
    color: "bg-emerald-600", 
    location: "Center of the chest (Thymus Gland)",
    element: "Air",
    functions: "Compassion, emotional connection, self-love, forgiveness, acceptance, and respiratory-circulatory vitality.", 
    blockage: "Heart strain, asthma, breathing difficulties, loneliness, chronic resentment, and inability to build emotional trust.",
    deepDescription: "Anahata acts as the bridge between your physical and spiritual chakras. It is associated with the thymus gland, which coordinates your body's cellular immunity. Reiki healing cleanses stored emotional armor and ancestral heartbreak from Anahata, allowing you to experience emotional vulnerability, self-forgiveness, and balanced relationships."
  },
  { 
    name: "Solar Plexus Chakra (Manipura)", 
    color: "bg-yellow-500", 
    location: "Upper abdomen, below the breastbone (Pancreas)",
    element: "Fire",
    functions: "Personal power, self-esteem, willpower, digestive fire, metabolic control, and personal identity.", 
    blockage: "Acid reflux, stomach ulcers, low self-worth, fear of rejection, control issues, and liver/gallbladder stagnation.",
    deepDescription: "Manipura controls your internal fire, willpower, and physical digestion. It interfaces directly with the pancreas and celiac plexus nerve hub. Blockages here manifest as digestive issues and low confidence. During Reiki, applying energy to this region clears nervous tension, improving nutrient absorption, digestive health, and restoring your inner drive and confidence."
  },
  { 
    name: "Sacral Chakra (Svadhisthana)", 
    color: "bg-orange-500", 
    location: "Lower abdomen, two inches below the navel (Adrenals/Gonads)",
    element: "Water",
    functions: "Creativity, emotional boundaries, sensual flow, passion, reproductive balance, and fluid circulation.", 
    blockage: "Fertility struggles, pelvic pain, emotional instability, creative blocks, addiction issues, and urinary imbalances.",
    deepDescription: "Svadhisthana governs your creative power, sensory joy, and reproductive cycles. Connected to the water element, it regulates biological fluids and hormonal balance. Reiki therapy helps release emotional grids locked in the pelvic basin, restoring creative inspiration, healthy boundaries, and hormonal equilibrium."
  },
  { 
    name: "Root Chakra (Muladhara)", 
    color: "bg-red-600", 
    location: "Base of the spine, coccyx area (Adrenal Medulla)",
    element: "Earth",
    functions: "Survival instinct, grounding, security, boundary safety, and structure of bones, legs, and immune responses.", 
    blockage: "Lower back pain, anxiety, financial survival stress, leg/foot issues, chronic fatigue, and flight-or-fight hyperarousal.",
    deepDescription: "Muladhara is your physical anchor, keeping you connected to the grounding frequencies of the Earth. It governs your fight-or-flight adrenal response and skeletal foundation. Reiki channels grounding energy to the root center to calm a hyper-vigilant nervous system, reducing chronic anxiety and restoring physical stability and safety."
  }
];

const reikiLevels = [
  { level: "Level I", title: "Shoden (Self-Healing)", desc: "Focuses on opening the student's energy channels to practice self-healing and provide basic physical touch therapy for close family members." },
  { level: "Level II", title: "Okuden (Distance Healing)", desc: "Introduction of the three sacred Reiki symbols. Empowers distant healing sessions across spatial boundaries and deep mental/emotional correction." },
  { level: "Level III", title: "Shinpiden (Reiki Master)", desc: "Attunement to the Master symbol. Unlocks highest vibrational healing fields and the authority to teach and attune other students." }
];

const pricingPackages = [
  {
    name: "Aura Audit & Cleanse",
    price: "₹1,200",
    period: "Single Session",
    desc: "Introductory session to identify blockages and purify the aura.",
    features: [
      "45 minutes session",
      "Full chakra audit analysis",
      "Subtle energy cleansing",
      "Post-session grounding guidelines"
    ]
  },
  {
    name: "Deep System Alignment",
    price: "₹3,200",
    period: "3 Sessions Package",
    desc: "For dissolving long-standing physical or emotional blocks.",
    features: [
      "3 individual 60-mins sessions",
      "Targeted chakra healing",
      "Direct emotional trauma support",
      "Saves ₹400 over single sessions"
    ]
  },
  {
    name: "Master Chakra Integration",
    price: "₹6,000",
    period: "6 Sessions Package",
    desc: "Complete energetic transformation and biofield shielding.",
    features: [
      "6 individual 60-mins sessions",
      "Complete chakra realignment",
      "Reiki symbol attunement",
      "Custom programmed crystal suggestion",
      "Saves ₹1,200 over single sessions"
    ]
  }
];

const reikiFaqs = [
  {
    q: "What does it feel like to receive a Reiki energy session?",
    a: "Most patients experience a state of deep relaxation. You may feel gentle warmth, tingling sensations, or waves of peace flowing through your body. Some fall into a deep, restorative sleep during the session."
  },
  {
    q: "Is Reiki healing backed by clinical validation?",
    a: "Reiki is used in over 800 hospitals across the USA and Europe to reduce post-surgery pain, alleviate stress, and lower cardiac heart rates. It is scientifically proven to activate the parasympathetic nervous system."
  },
  {
    q: "Can Reiki be performed effectively at a distance?",
    a: "Yes. In Level II Reiki, practitioners are attuned to distance symbols that bypass spatial limits, allowing us to connect with your energetic fields regardless of where you are in the world."
  }
];

export default function ReikiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedChakraIndex, setSelectedChakraIndex] = useState<number | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-10 text-left">
      {/* A. HERO */}
      <section className="relative bg-gradient-to-r from-cream-white via-cream-white to-purple-500/10 py-20 border-b border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold tracking-widest text-purple-950 uppercase block">Energy Medicine</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
                Reiki Healing: Balance Energy, Restore Wellness
              </h1>
              <div className="gold-divider w-24 my-4" />
              <p className="text-xs md:text-sm text-medium-gray leading-relaxed max-w-xl">
                Experience profound relaxation and systemic realignment through Usui Shiki Ryoho Reiki. Dissolve deep emotional stress, reset your central nervous system, and clear auric layers.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="flex gap-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20Reiki%20healing%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <MessageSquare size={14} className="text-sage-green" />
                <span>Book Reiki Session</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden border border-light-gray shadow-premium-medium bg-off-white">
              <Image
                src="/images/services/reiki_healing.png"
                alt="Reiki practitioner hands hovering over patient"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* B. CHAKRA GUIDE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">The Chakra Healing System</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray max-w-md mx-auto mt-2">Reiki clears blockages across the seven primary endocrine and energetic centers. Click any chakra card to view deep descriptions and biological connections.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {chakraList.map((chakra, idx) => (
              <ScrollReveal
                key={chakra.name}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/40 rounded-2xl p-6 shadow-premium-soft flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:border-forest-green hover:shadow-premium-glow-green transition-all duration-300 group"
                onClick={() => setSelectedChakraIndex(idx)}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${chakra.color} shadow-premium-soft`} />
                    <h3 className="text-xs font-bold text-deep-charcoal">{chakra.name}</h3>
                  </div>
                  <p className="text-[11px] text-medium-gray leading-relaxed line-clamp-3">
                    <strong>Function:</strong> {chakra.functions}
                  </p>
                </div>
                <div className="border-t border-light-gray/25 pt-3 mt-4 flex justify-between items-center text-[10px]">
                  <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded font-medium">
                    Blockage signs inside
                  </span>
                  <span className="text-forest-green group-hover:text-warm-gold font-bold transition-colors flex items-center space-x-0.5">
                    <span>Learn More</span>
                    <ChevronRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* C. REIKI LEVELS */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 text-left space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Attunement & Training Levels</h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reikiLevels.map((lvl, idx) => (
              <ScrollReveal
                key={lvl.level}
                direction="up"
                delay={idx * 0.08}
                className="bg-white border border-light-gray/45 rounded-2xl p-6 shadow-premium-soft space-y-4"
              >
                <span className="text-xs font-bold text-warm-gold uppercase tracking-wider">{lvl.level}</span>
                <h3 className="font-heading text-sm font-bold text-deep-charcoal">{lvl.title}</h3>
                <p className="text-[11px] text-medium-gray leading-relaxed">{lvl.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* D. PRICING */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Session Packages & Pricing</h2>
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
                    href={`https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20interested%20in%20the%20Reiki%20${encodeURIComponent(pack.name)}.`}
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

      {/* E. FAQS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="text-center space-y-4">
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Reiki FAQs</h2>
          <div className="gold-divider w-20 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {reikiFaqs.map((faq, index) => {
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

      {/* ================= MODAL: CHAKRA DEEP DETAILS ================= */}
      <AnimatePresence>
        {selectedChakraIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
            
            {/* Close Button on Viewport overlay */}
            <button
              onClick={() => setSelectedChakraIndex(null)}
              className="absolute top-6 right-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all cursor-pointer z-10 animate-fade-in"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl md:max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-premium-medium max-h-[85vh] md:h-[75vh] flex flex-col md:flex-row justify-between text-left"
            >
              {/* Left Column: Image */}
              <div className="relative aspect-[21/9] md:aspect-auto w-full md:w-[40%] bg-sage-green/15 shrink-0 border-b md:border-b-0 md:border-r border-light-gray/25 md:h-full">
                <Image
                  src="/images/services/chakra_healing_system.png"
                  alt="Chakra Healing System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />
                <div className="absolute bottom-4 left-6 right-6 text-left text-white space-y-1 md:hidden">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${chakraList[selectedChakraIndex].color}`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {chakraList[selectedChakraIndex].name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 flex flex-col justify-between overflow-hidden md:h-full">
                
                {/* Desktop-only Header */}
                <div className="hidden md:block p-6 md:p-8 pb-0 shrink-0">
                  <div className="flex items-center space-x-2.5">
                    <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${chakraList[selectedChakraIndex].color} shadow-premium-soft`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-medium-gray">Chakra Resonance Center</span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-charcoal mt-3">
                    {chakraList[selectedChakraIndex].name}
                  </h2>
                </div>

                {/* Main Scrollable Content */}
                <div className="p-6 md:p-8 md:pt-4 overflow-y-auto flex-1 space-y-6">
                  {/* Quick stats grid */}
                  <div className="grid grid-cols-2 gap-4 border-b border-light-gray/25 pb-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-medium-gray block">Location</span>
                      <span className="font-semibold text-deep-charcoal">{chakraList[selectedChakraIndex].location}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-medium-gray block">Element Coordination</span>
                      <span className="font-semibold text-deep-charcoal">{chakraList[selectedChakraIndex].element}</span>
                    </div>
                  </div>

                  {/* Deep Description */}
                  <div className="space-y-3">
                    <h4 className="font-heading text-xs font-bold text-deep-charcoal tracking-wide uppercase">Resonance & Core Functions</h4>
                    <p className="text-xs md:text-sm text-medium-gray leading-relaxed">
                      {chakraList[selectedChakraIndex].functions}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-heading text-xs font-bold text-deep-charcoal tracking-wide uppercase">Blockage & Pathological Indicators</h4>
                    <div className="bg-red-50/70 border border-red-200/50 rounded-2xl p-4 text-xs text-red-950 leading-relaxed">
                      ⚠️ <strong>Signs of stagnation:</strong> {chakraList[selectedChakraIndex].blockage}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-heading text-xs font-bold text-deep-charcoal tracking-wide uppercase">Usui Reiki Therapeutic Approach</h4>
                    <p className="text-xs md:text-sm text-medium-gray leading-relaxed">
                      {chakraList[selectedChakraIndex].deepDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-5 bg-off-white border-t border-light-gray/25 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <span className="text-[10px] text-medium-gray text-left leading-normal max-w-xs sm:max-w-sm">
                    Struggling with these symptoms? Contact Dr. Niyati for customized Reiki chakra diagnostics and cleansing.
                  </span>
                  <a
                    href={`https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20interested%20in%20a%20Reiki%20Chakra%20balancing%20session%20for%20my%20${encodeURIComponent(chakraList[selectedChakraIndex].name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-colors duration-200 cursor-pointer"
                  >
                    <MessageSquare size={13} className="text-sage-green" />
                    <span>Balance This Chakra</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
