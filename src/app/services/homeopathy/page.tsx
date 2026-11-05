"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  HelpCircle, 
  Clock, 
  FileText, 
  Check, 
  ChevronDown, 
  MessageSquare, 
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PageHeader from "@/components/layout/PageHeader";

const homeopathyPrinciples = [
  { title: "Similia Similibus Curentur", desc: "The foundational law of 'like cures like.' A substance that causes symptoms in a healthy person can cure similar symptoms in a sick person when given in micro-doses." },
  { title: "The Minimum Dose", desc: "Remedies are prepared through serial dilution and succussion (vigorous shaking), rendering them non-toxic while unlocking their subtle healing frequency." },
  { title: "Single Remedy Rule", desc: "Treating the whole person based on their unique constitution. A single remedy is matched to your physical, emotional, and mental state combined." },
  { title: "Individualization", desc: "No two patients with the same illness receive the same remedy. Your treatment is specifically matched to your personal constitution and triggers." }
];

const consultationSteps = [
  { step: "01", name: "Constitutional Intake (60-90 mins)", desc: "A deep conversation analyzing physical symptoms, food cravings, sleep positions, emotional patterns, fears, and complete family medical logs." },
  { step: "02", name: "Repertorization & Analysis", desc: "Dr. Rana matches your symptom profile against thousands of natural remedies in the homeopathic repertory to find your constitutional simillimum." },
  { step: "03", name: "Remedy Dispensing & Potency Setup", desc: "Selecting the precise potency (e.g. 30C, 200C, 1M) and explaining dosage guidelines. Custom liquid drops or lactose globules." },
  { step: "04", name: "The Healing Phase (Weeks 1-4)", desc: "The remedies trigger the immune system. You may notice subtle detoxification shifts, improved energy levels, and changes in sleep cycles." },
  { step: "05", name: "Follow-Up Evaluations (Every 2-4 weeks)", desc: "Monitoring response, adjusting potencies, and changing remedies as the pathological layers dissolve and health parameters stabilize." }
];

const caseStudiesList = [
  {
    condition: "Thyroid Dysfunction (Hypo)",
    symptoms: "Fatigue, hair thinning, weight gain, brain fog",
    remedy: "Thyroidinum paired with Calcarea Carbonica",
    timeline: "3 Months: Energy restored, hair fall stopped. TSH dropped from 8.2 to 3.5. Stabilized at 6 months.",
  },
  {
    condition: "Chronic Renal Calculi (Kidney Stones)",
    symptoms: "Recurrent flank pain, microscopic hematuria",
    remedy: "Berberis Vulgaris & Lycopodium Clavatum",
    timeline: "6 Weeks: Smooth expulsion of a 6.5mm oxalate stone without surgical intervention. Pain free.",
  },
  {
    condition: "Severe Eczema & Skin Spasms",
    symptoms: "Intense itching, bleeding lesions, sleep disruption",
    remedy: "Sulphur followed by Graphites",
    timeline: "4 Months: 90% skin clearing. Sleeping soundly. Complete remission of inflammatory triggers.",
  }
];

const conditionCategories = [
  {
    category: "Metabolic & Endocrine",
    items: ["Hypothyroidism & Hyperthyroidism", "Type-2 Diabetes support", "PCOD / PCOS (Hormonal imbalances)", "Metabolic syndrome", "Weight regulation hurdles"]
  },
  {
    category: "Digestive & Gastrointestinal",
    items: ["IBS (Irritable Bowel Syndrome)", "Chronic Acid Reflux & GERD", "Bloating, Flatulence & Constipation", "Leaky Gut & Dysbiosis", "Biliary sludge & Gallstones"]
  },
  {
    category: "Respiratory & Skin",
    items: ["Allergic Rhinitis & Sinusitis", "Asthmatic bronchospasms", "Eczema, Psoriasis & Atopic Dermatitis", "Alopecia Areata & Hair thinning", "Vitiligo & Urticaria (Hives)"]
  },
  {
    category: "Neurological & Pain",
    items: ["Migraines & Neuralgic headaches", "Osteoarthritis & Rheumatoid joint pain", "Anxiety, Panic attacks & Stress", "Insomnia & Circadian imbalances", "Chronic Fatigue Syndrome (CFS)"]
  }
];

const pricingPackages = [
  {
    name: "Introductory Intake",
    price: "₹1,500",
    period: "Single Session",
    desc: "In-depth constitutional consultation with Dr. Niyati Rana.",
    features: [
      "60-90 minutes assessment",
      "Constitutional profile setup",
      "Custom remedy prescription",
      "1 email follow-up within 15 days"
    ],
    recommended: false,
    cta: "Book Session"
  },
  {
    name: "Standard Healing Plan",
    price: "₹4,500",
    period: "3 Months Program",
    desc: "Complete treatment for chronic metabolic, skin, or joint ailments.",
    features: [
      "1 detailed intake session",
      "3 monthly follow-up audits",
      "Custom remedy adjustment",
      "WhatsApp text support & check-ins",
      "Saves ₹1,000 over single sessions"
    ],
    recommended: true,
    cta: "Select Package"
  },
  {
    name: "Intensive Holistic Support",
    price: "₹8,000",
    period: "6 Months Program",
    desc: "For complex, long-standing autoimmune or multi-system disorders.",
    features: [
      "1 detailed intake session",
      "6 monthly follow-up audits",
      "Integrated energy/aura diagnosis",
      "Priority WhatsApp support",
      "Custom lifestyle & nutrition blueprint",
      "Saves ₹2,500 over single sessions"
    ],
    recommended: false,
    cta: "Select Package"
  }
];

const homeopathyFaqs = [
  {
    q: "Are homeopathic medicines safe for pregnant women and infants?",
    a: "Yes. Homeopathic globules are non-toxic, highly diluted natural substances with zero chemical side effects. They are safe for pregnant women, infants, children, and elderly patients."
  },
  {
    q: "How long does it take to see positive results in chronic conditions?",
    a: "Acute conditions show relief in days. Chronic ailments (like eczema or thyroid issues) usually show improvement in energy, sleep, and primary symptoms within 4-6 weeks, with full systemic stabilization within 3-6 months."
  },
  {
    q: "Do I need to stop my ongoing allopathic medications?",
    a: "No, you do not need to stop your ongoing medications. Homeopathic remedies can safely be taken alongside allopathic drugs. Over time, as your system strengthens and stabilizes, your prescribing physician may gradually adjust allopathic dosages."
  },
  {
    q: "What dietary rules must I follow during homeopathic treatment?",
    a: "We recommend keeping a clean mouth (avoid eating or drinking 15-20 minutes before and after taking the dose). Minimize strong raw onions, raw garlic, coffee, and mint close to dosage times, as they can sometimes interfere with remedy absorption."
  }
];

export default function HomeopathyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-20 space-y-20 text-left">
      <PageHeader 
        title="Homeopathy Consultation" 
        subtitle="Classical, individual-centered medicine designed to trigger the body's innate defense mechanisms." 
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Homeopathy" },
        ]}
      />

      {/* A. HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold tracking-widest text-forest-green uppercase block">Medical Homeopathy</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
                Healing from the Constitutional Root
              </h2>
              <div className="gold-divider w-24 my-4" />
              <p className="text-xs md:text-sm text-medium-gray leading-relaxed max-w-xl">
                Classical, individual-centered medicine designed to trigger the body&apos;s innate defense mechanisms. Realize sustainable recovery from metabolic, skin, digestive, and hormonal disorders.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="flex gap-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20Homeopathy%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <MessageSquare size={14} className="text-sage-green" />
                <span>Book Homeopathy Consultation</span>
              </a>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden border border-light-gray shadow-premium-medium bg-off-white">
              <Image
                src="/images/services/homeography_remedy.png"
                alt="Homeopathy remedies glass jar dropper"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* B. WHAT IS HOMEOPATHY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-4">
            <ScrollReveal direction="right" className="bg-forest-green text-cream-white rounded-3xl p-8 space-y-4">
              <ShieldCheck size={36} className="text-warm-gold" />
              <h3 className="font-heading text-lg font-bold">Science-Backed Natural Healing</h3>
              <p className="text-[11px] text-sage-green leading-relaxed">
                Formulated by Dr. Samuel Hahnemann in 1796, Homeopathy is recognized globally as a gentle, safe, and highly structured medical framework. It treats the patient as an integrated physical, mental, and energetic entity.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal direction="left" className="space-y-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-charcoal">Laws & Core Principles</h2>
              <div className="gold-divider w-20" />
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {homeopathyPrinciples.map((princ, idx) => (
                <ScrollReveal
                  key={princ.title}
                  direction="up"
                  delay={idx * 0.05}
                  className="bg-white border border-light-gray/40 rounded-2xl p-5 shadow-premium-soft"
                >
                  <h4 className="text-xs font-bold text-forest-green mb-1">{princ.title}</h4>
                  <p className="text-[10px] text-medium-gray leading-relaxed">{princ.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. CONSULTATION PROCESS */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 text-left space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">The Homeopathic Journey</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray max-w-sm mx-auto mt-2">Our structured consultation phases ensure highly targeted remedy selections.</p>
          </div>

          <div className="space-y-6">
            {consultationSteps.map((step, idx) => (
              <ScrollReveal
                key={step.step}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/45 rounded-2xl p-6 shadow-premium-soft flex items-start space-x-6 hover:border-forest-green/30 transition-all duration-300"
              >
                <span className="font-heading text-2xl font-bold text-warm-gold shrink-0">{step.step}</span>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-deep-charcoal">{step.name}</h3>
                  <p className="text-[11px] text-medium-gray leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* E. CASE STUDY SAMPLES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Sample Treatment Journeys</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudiesList.map((cs, idx) => (
              <ScrollReveal
                key={cs.condition}
                direction="up"
                delay={idx * 0.1}
                className="bg-white border border-light-gray/40 rounded-2xl p-6 shadow-premium-soft text-left space-y-4"
              >
                <span className="text-[10px] text-forest-green font-accent uppercase tracking-widest font-bold">Case Profile</span>
                <h3 className="font-heading text-sm font-bold text-deep-charcoal">{cs.condition}</h3>
                <div className="space-y-2 text-[11px] text-medium-gray">
                  <p><strong>Primary Symptoms:</strong> {cs.symptoms}</p>
                  <p><strong>Constitutional Remedy:</strong> {cs.remedy}</p>
                </div>
                <div className="border-t border-light-gray/30 pt-3 flex items-start space-x-2 text-[11px] text-forest-green bg-sage-green/5 p-3 rounded-lg">
                  <TrendingUp size={14} className="mt-0.5 shrink-0" />
                  <p>{cs.timeline}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* F. CONDITIONS TREATED ACCORDION */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Comprehensive Pathology Index</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray mt-2">Homeopathic medicine stimulates systemic recovery across multiple departments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {conditionCategories.map((cat, idx) => (
              <ScrollReveal
                key={cat.category}
                direction="up"
                delay={idx * 0.05}
                className="bg-white border border-light-gray/45 rounded-2xl p-6 shadow-premium-soft space-y-4"
              >
                <h3 className="font-heading text-sm font-bold text-forest-green">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-[11px] text-medium-gray">
                      <Check size={12} className="text-warm-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center text-[10px] text-medium-gray flex items-center justify-center space-x-2 bg-white/60 p-3 rounded-xl max-w-sm mx-auto border border-light-gray/30">
            <Info size={12} className="text-forest-green shrink-0" />
            <span>Remedies target constitutional layers. Results vary.</span>
          </div>
        </div>
      </section>

      {/* I. TREATMENT PRICING PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Treatment Packages & Pricing</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {pricingPackages.map((pack, idx) => (
              <ScrollReveal
                key={pack.name}
                direction="up"
                delay={idx * 0.1}
                className={`bg-white border rounded-3xl p-8 shadow-premium-soft flex flex-col justify-between relative ${
                  pack.recommended ? "border-forest-green ring-2 ring-forest-green/20" : "border-light-gray/40"
                }`}
              >
                {pack.recommended && (
                  <span className="absolute -top-3.5 right-6 bg-forest-green text-cream-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-premium-soft border border-warm-gold">
                    Highly Recommended
                  </span>
                )}
                
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
                    href={`https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20interested%20in%20the%20Homeopathy%20${encodeURIComponent(pack.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center text-[11px] font-bold py-3 rounded-full shadow-premium-soft transition-all duration-300 hover:-translate-y-0.5 ${
                      pack.recommended
                        ? "bg-forest-green text-cream-white hover:bg-forest-green/95"
                        : "bg-white text-forest-green border border-forest-green/30 hover:bg-sage-green/10"
                    }`}
                  >
                    {pack.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* J. FAQS */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="text-center space-y-4">
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Homeopathy FAQs</h2>
          <div className="gold-divider w-20 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {homeopathyFaqs && homeopathyFaqs.map((faq, index) => {
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
