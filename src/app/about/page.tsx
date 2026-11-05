"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  Clock, 
  Heart, 
  Shield, 
  CheckCircle, 
  HelpCircle, 
  Star, 
  Sparkles, 
  Compass, 
  X, 
  Search, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Activity,
  CheckCircle2,
  Calendar,
  Eye,
  Home
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PageHeader from "@/components/layout/PageHeader";
import ReviewCardsScroll from "@/components/common/ReviewCardsScroll";

// ORIGINAL constants for Qualifications & Milestones
const timelineData = [
  { year: "2008", title: "BHMS Graduation", desc: "Graduated with honors in Bachelor of Homeopathic Medicine and Surgery (BHMS) from a premier university in Gujarat." },
  { year: "2010", title: "First Independent Clinic", desc: "Established Jaimini Homeocare, focusing on constitutional therapy for metabolic and chronic pediatric ailments." },
  { year: "2015", title: "Reiki Master Certification", desc: "Completed Level III Master training, introducing subtle energy clearing alongside homeopathic medicine." },
  { year: "2016", title: "Lama Fera & Spiritual Wisdom", desc: "Trained under Tibetan and Buddhist lineage masters, integrating space clearing and rapid karmic repair." },
  { year: "2020", title: "Global Online Consultations", desc: "Launched remote consultations, expanding health services to patients across USA, UK, and the Gulf." },
  { year: "2024", title: "5000+ Relieved Patients", desc: "Celebrating 15+ years of combined practice and thousands of active healing journeys." }
];

const credentialsList = [
  {
    title: "BHMS Primary Medical Degree",
    institution: "Government Homeopathic Medical College",
    details: "5.5-year intensive clinical medical rotation. Registered Homeopathy Practitioner.",
    image: "/images/doctor/bhms_degree.png",
    regNo: "Reg No: G-14285"
  },
  {
    title: "Usui Reiki Master (Level III)",
    institution: "Traditional Usui Shiki Ryoho Lineage",
    details: "Initiated in distance healing, energetic alignment, and chakra attunement.",
    image: "/images/doctor/reiki_master_certificate.png",
    regNo: "Master Cert: R-8834"
  },
  {
    title: "Lama Fera Master Practitioner",
    institution: "Buddhist Spiritual Order Lineage",
    details: "Trained in the use of spiritual grids, amulets, and deep negative field dissolution.",
    image: "/images/doctor/lama_fera_certificate.png",
    regNo: "Lineage Cert: LF-0924"
  },
  {
    title: "Advanced Clinical Homeopathy",
    institution: "Academy of Classical Homeopathy",
    details: "Specialized post-graduate diploma focusing on chronic autoimmune pathology management.",
    image: "/images/doctor/homeopathy_diploma.png",
    regNo: "Diploma No: ACH-2291"
  }
];

// COPIED constants from about-2
const expertiseList = [
  {
    category: "Homeopathy",
    title: "Constitutional Medicine",
    desc: "Safe, natural, and side-effect-free solutions targeting acute and chronic autoimmune, metabolic, and pediatric conditions at their root.",
    bullets: ["Chronic health support", "Lifestyle wellness mapping", "Personalized constitutional consultation"],
    color: "bg-forest-green/5 border-forest-green/20 text-forest-green",
    icon: Sparkles,
    image: "/images/services/homeography_remedy.png",
    href: "/services/homeopathy"
  },
  {
    category: "Reiki Healing",
    title: "Biofield Energy Balancing",
    desc: "Usui Reiki distance and hands-on energy therapy to clear stress, restore chakra grids, regulate cortisol, and reset the nervous system.",
    bullets: ["Autonomic energy balancing", "Deep relaxation support", "Endocrine chakra attunements"],
    color: "bg-soft-lavender border-soft-lavender/30 text-deep-charcoal",
    icon: Heart,
    image: "/images/services/reiki_healing.png",
    href: "/services/reiki-healing"
  },
  {
    category: "Lama Fera Healing",
    title: "Spiritual Matrix Purification",
    desc: "Ancient Himalayan Buddhist lineage healing utilizing 12 sacred symbols for psychic shielding, negative cord cutting, and space vector clearing.",
    bullets: ["Spiritual wellness protection", "Negative energy clearing", "Rapid emotional & physical repair"],
    color: "bg-rose-gold/10 border-rose-gold/30 text-rose-gold",
    icon: Shield,
    image: "/images/services/lama_fera.png",
    href: "/services/lama-fera"
  },
  {
    category: "Tarot Guidance",
    title: "Intuitive Decision Support",
    desc: "Subconscious card readings structured as psychological mirrors to provide timeline insights, clarity through transitions, and empowered action steps.",
    bullets: ["Personal clarity sessions", "Life transition guidance", "Empowered path planning"],
    color: "bg-purple-900/10 border-purple-950/20 text-purple-950",
    icon: Eye,
    image: "/images/services/tarot_reading.png",
    href: "/services/tarot-reading"
  },
  {
    category: "Crystal Products",
    title: "Programmed Gemstone Therapy",
    desc: "Custom-crafted mineral bracelets cleansed under salt-water cycles and active-attuned with Reiki configurations to serve as continuous, 24/7 personal auric shields.",
    bullets: ["Custom gemstone profiles", "Salt-water purified coordinates", "Reiki programmed resonance"],
    color: "bg-celestial-blue/10 border-celestial-blue/20 text-celestial-blue",
    icon: Sparkles,
    image: "/images/services/crystal_bracelets.png",
    href: "/services/crystal-products"
  }
];

const galleryImages = [
  {
    url: "/images/gallery/homeopathy/WhatsApp%20Image%202026-05-13%20at%2012.15.51%20PM%20(1).jpeg",
    title: "Consultation Session",
    desc: "In-depth consultation mapping patient's constitutional history."
  },
  {
    url: "/images/gallery/homeopathy/WhatsApp%20Image%202026-05-13%20at%2012.25.01%20PM%20(1).jpeg",
    title: "Homeopathic Remedy Preparation",
    desc: "Carefully calibrated constitutional remedies prepared in-house."
  },
  {
    url: "/images/gallery/homeopathy/WhatsApp%20Image%202026-05-13%20at%2012.25.11%20PM.jpeg",
    title: "Healing Space Environment",
    desc: "Comfortable, tranquil home consultation and healing setup."
  },
  {
    url: "/images/gallery/homeopathy/WhatsApp%20Image%202026-05-13%20at%2012.25.21%20PM%20(1).jpeg",
    title: "Activated Crystal Attunements",
    desc: "Natural gemstones cleaned and Reiki-activated for aura shielding."
  },
  {
    url: "/images/gallery/homeopathy/WhatsApp%20Image%202026-05-13%20at%2012.25.25%20PM.jpeg",
    title: "Clinical Reference Books",
    desc: "Traditional homeopathic pharmacopoeias and modern biological references."
  },
  {
    url: "/images/gallery/homeopathy/WhatsApp%20Image%202026-05-13%20at%2012.25.26%20PM.jpeg",
    title: "Healing Diagnostics",
    desc: "Checking diagnostic parameters and matching them with constitutional signatures."
  }
];

const faqsList = [
  {
    q: "Does Dr. Niyati provide home visits?",
    a: "Yes. Dr. Niyati provides physical home consultations and patient home visits for individuals residing in Ahmedabad, specifically covering Maninagar, Khokhra, and nearby surrounding areas. This is highly beneficial for elderly patients, children, or those seeking care from their comfortable home environment."
  },
  {
    q: "Are online consultations available?",
    a: "Absolutely. We conduct secure online consultations via video calls (Google Meet/WhatsApp) for patients across India and globally (USA, UK, Gulf countries). After the session, custom homeopathic remedies are carefully prepared, securely packaged, and couriered directly to your address."
  },
  {
    q: "Which conditions are treated?",
    a: "We provide constitutional support for a wide range of acute and chronic disorders, including Renal (kidney) stones, Thyroid imbalances, Diabetes, Hypertension, Migraines, Irritable Bowel Syndrome (IBS) and digestive issues, Joint pain and Arthritis, Hair fall and skin diseases (Eczema, Psoriasis), Pediatric immunity problems, PCOD/PCOS, and Stress or Anxiety disorders."
  },
  {
    q: "How can I contact for consultation?",
    a: "You can book a consultation instantly by clicking the 'WhatsApp Consultation' button to message us directly, or by calling our active number at +91 93163 56317 to set up a convenient day and time."
  },
  {
    q: "Are Reiki/Tarot sessions available online?",
    a: "Yes. Subtle energy therapies like Usui Reiki distance healing and Tarot guidance sessions do not require physical proximity to be fully effective. We conduct highly interactive, clear sessions online for clients worldwide, delivering remote chakra balances and life path clarity."
  }
];

export default function AboutPage() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeExpertise, setActiveExpertise] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation.";
  const callNumber = "tel:+919316356317";

  return (
    <div className="bg-cream-white text-deep-charcoal overflow-hidden pb-16">
      <PageHeader 
        title="About Us" 
        subtitle="Meet the practitioner combining classical medical principles with subtle energetic frequencies." 
      />
      
      {/* 1. HERO SECTION (copied from about-2) */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-tr from-cream-white via-cream-white to-sage-green/20 pt-8 pb-16">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-forest-green/5 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 w-[30rem] h-[30rem] rounded-full bg-warm-gold/5 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal direction="down">
              <div className="inline-flex items-center space-x-2 bg-forest-green/5 border border-forest-green/10 px-4 py-1.5 rounded-full text-xs font-semibold text-forest-green tracking-wide">
                <Sparkles size={12} className="text-warm-gold animate-pulse" />
                <span>Meet the Practitioner</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-deep-charcoal leading-tight">
                Dr. Niyati Rana
              </h1>
              <p className="font-accent text-lg md:text-xl lg:text-2xl text-forest-green italic tracking-wide font-medium">
                Homeopathic Consultant | Reiki & Lama Fera Healer | Tarot Guidance Practitioner
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-sm md:text-base text-medium-gray leading-relaxed max-w-xl">
                &ldquo;Providing personalized homeopathic care and holistic wellness guidance with compassion, understanding, and a patient-centered approach.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="flex flex-wrap gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-forest-green/95 shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-warm-gold group"
              >
                <MessageSquare size={14} className="text-sage-green group-hover:scale-115 transition-transform" />
                <span>WhatsApp Consultation</span>
              </a>
              <a
                href={callNumber}
                className="inline-flex items-center space-x-2 bg-white text-forest-green border border-forest-green text-xs font-bold px-6 py-3.5 rounded-full hover:bg-sage-green/10 shadow-premium-soft transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Elegant Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delay={0.2} className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-premium-medium bg-off-white">
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 to-transparent z-10" />
              <Image
                src="/images/doctor/dr_niyati_rana.png"
                alt="Dr. Niyati Rana"
                fill
                priority
                sizes="(max-w-768px) 100vw, 380px"
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. ABOUT DR. NIYATI RANA / Personal Story (copied from about-2) */}
      <section className="bg-white py-20 border-y border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Secondary representation / symbolic picture */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <ScrollReveal direction="right" className="relative w-full max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-soft bg-sage-green/10 border border-light-gray/30 p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/homeography_remedy.png"
                  alt="Holistic Healing Tools"
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Text Story */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <ScrollReveal direction="up" className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-forest-green block">Personal Story</span>
              <h2 className="font-heading text-3xl font-bold text-deep-charcoal">The Journey Into Holistic Care</h2>
              <div className="gold-divider w-16" />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} className="space-y-4 text-xs md:text-sm text-medium-gray leading-relaxed">
              <p>
                Dr. Niyati Rana believes that every individual has a unique health journey. Her approach focuses on understanding each person&apos;s lifestyle, concerns, and wellness needs to provide personalized guidance.
              </p>
              <p>
                Initially trained in clinical medical disciplines, she realized that physical manifestations of diseases are deeply tied to emotional residues, environment, and subconscious blockages. To address this, she clinical-certified in Homeopathy and went on to complete lineage master certifications in Usui Reiki healing and Tibetan Lama Fera systems.
              </p>
              <p>
                Today, her practice stands as a bridge between scientific biological diagnostics and energy medicine, providing a safe sanctuary for gentle, permanent recovery.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. MY HEALING PHILOSOPHY (copied from about-2) */}
      <section className="bg-forest-green text-cream-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-bold tracking-widest text-sage-green uppercase block">Healing Philosophy</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1} className="space-y-3">
            <h3 className="font-accent text-3xl md:text-5xl lg:text-6xl italic font-semibold leading-tight text-sage-green">
              &ldquo;Healing is not only about treating symptoms, but understanding the person behind them.&rdquo;
            </h3>
            <div className="w-20 h-[1px] bg-warm-gold mx-auto mt-6" />
            <p className="text-[10px] uppercase font-bold tracking-widest text-warm-gold">Dr. Niyati Rana</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. ORIGINAL QUALIFICATIONS & CERTIFICATIONS (retained without changes) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Medical Credentials & Certifications</h2>
            <div className="gold-divider w-20 mx-auto" />
            <p className="text-xs text-medium-gray max-w-sm mx-auto mt-2">
              Verify the official qualifications, medical registrations, and energy master accreditations of Dr. Niyati Rana.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentialsList.map((cred, index) => (
              <ScrollReveal
                key={cred.title}
                direction="up"
                delay={index * 0.08}
                className="bg-white border border-light-gray/40 rounded-3xl overflow-hidden shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Certificate Frame Thumbnail */}
                <div 
                  onClick={() => setSelectedCertIndex(index)}
                  className="relative aspect-[4/3] w-full bg-sage-green/5 overflow-hidden cursor-pointer border-b border-light-gray/20"
                >
                  <Image
                    src={cred.image}
                    alt={cred.title}
                    fill
                    sizes="(max-w-7xl) 100vw, 250px"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Hover magnifying glass overlay */}
                  <div className="absolute inset-0 bg-deep-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                      <Search size={16} />
                    </div>
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-forest-green tracking-wide uppercase">{cred.institution}</span>
                      <span className="text-medium-gray font-mono">{cred.regNo}</span>
                    </div>
                    <h3 className="font-heading text-xs font-bold text-deep-charcoal group-hover:text-forest-green transition-colors leading-snug">
                      {cred.title}
                    </h3>
                    <p className="text-[10px] text-medium-gray leading-relaxed">
                      {cred.details}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedCertIndex(index)}
                    className="text-[10px] font-bold text-forest-green hover:text-warm-gold tracking-wide transition-colors flex items-center space-x-1 pt-2 border-t border-light-gray/25 cursor-pointer text-left"
                  >
                    <span>Verify Document</span>
                    <ArrowRight size={10} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORIGINAL EXPERIENCE TIMELINE (retained without changes) */}
      <section className="bg-gradient-to-tr from-cream-white to-sage-green/10 py-20 border-y border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 text-left space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Pathways of Milestones</h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>

          <div className="relative border-l border-forest-green/20 pl-8 ml-4 space-y-10">
            {timelineData.map((milestone, index) => (
              <ScrollReveal
                key={milestone.year}
                direction="left"
                delay={index * 0.08}
                className="relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-forest-green border-4 border-cream-white flex items-center justify-center shadow-premium-soft">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </span>
                
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-warm-gold tracking-widest">{milestone.year}</span>
                  <h3 className="font-heading text-sm font-bold text-deep-charcoal">{milestone.title}</h3>
                  <p className="text-xs text-medium-gray leading-relaxed max-w-2xl">{milestone.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AREAS OF EXPERTISE (Premium Interactive Refactored Showcase Dashboard) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center space-y-12">
        <ScrollReveal direction="up" className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-forest-green uppercase block">Multidimensional Healing Matrix</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">Areas Of Expertise</h2>
          <div className="gold-divider w-20 mx-auto" />
          <p className="text-xs text-medium-gray max-w-md mx-auto">
            Discover a unified sanctuary of medical science and subtle energy disciplines designed for holistic wellness.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6 text-left">
          {/* Left Panel: Tabs List Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {expertiseList.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeExpertise === index;
              return (
                <ScrollReveal
                  key={item.category}
                  direction="right"
                  delay={index * 0.05}
                  onClick={() => setActiveExpertise(index)}
                  className={`relative p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-white border-warm-gold shadow-premium-medium shadow-premium-glow-gold scale-102"
                      : "bg-cream-white/50 border-light-gray/40 hover:bg-white hover:border-forest-green/30"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-colors ${
                      isActive 
                        ? "bg-forest-green text-cream-white border-forest-green" 
                        : "bg-white text-forest-green border-light-gray group-hover:border-forest-green/20"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-medium-gray block">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-deep-charcoal mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -5 }}
                          transition={{ duration: 0.2 }}
                          className="w-1.5 h-1.5 rounded-full bg-warm-gold"
                        />
                      )}
                    </AnimatePresence>
                    <ChevronRight size={14} className={`text-medium-gray transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-forest-green" : "group-hover:translate-x-0.5"
                    }`} />
                  </div>

                  {isActive && (
                    <div className="absolute top-0 right-0 w-1.5 h-full rounded-r-3xl bg-warm-gold" />
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Panel: Showcase Detail */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" className="h-full">
              <div className="relative h-full bg-white border border-light-gray/40 rounded-[2rem] p-6 md:p-8 shadow-premium-soft overflow-hidden flex flex-col justify-between space-y-6">
                
                {/* Modality ambient glow color filter */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none transition-colors duration-500 ${
                  activeExpertise === 0 ? "bg-forest-green" :
                  activeExpertise === 1 ? "bg-soft-lavender" :
                  activeExpertise === 2 ? "bg-rose-gold" :
                  activeExpertise === 3 ? "bg-purple-900" : "bg-celestial-blue"
                }`} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExpertise}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-6 items-center justify-between flex-grow"
                  >
                    <div className="space-y-4 flex-1 text-left">
                      <div className="flex items-center space-x-2">
                        <span className="bg-forest-green/10 text-forest-green text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {expertiseList[activeExpertise].category}
                        </span>
                        <span className="text-[10px] text-warm-gold font-bold">Featured Domain</span>
                      </div>

                      <h3 className="font-heading text-lg md:text-xl font-bold text-deep-charcoal leading-tight">
                        {expertiseList[activeExpertise].title}
                      </h3>

                      <p className="text-xs text-medium-gray leading-relaxed">
                        {expertiseList[activeExpertise].desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-[9px] font-bold uppercase tracking-wider text-deep-charcoal">Core Focus Areas</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {expertiseList[activeExpertise].bullets.map((bullet, i) => (
                            <div key={i} className="flex items-center space-x-2.5 text-xs text-medium-gray">
                              <CheckCircle2 size={13} className="text-forest-green shrink-0" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Modality Elegant Image Showcase */}
                    <div className="w-full md:w-2/5 aspect-[4/3] relative rounded-2xl overflow-hidden bg-sage-green/5 border border-light-gray/20 shadow-premium-soft shrink-0">
                      <Image
                        src={expertiseList[activeExpertise].image}
                        alt={expertiseList[activeExpertise].category}
                        fill
                        sizes="(max-w-768px) 100vw, 250px"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-6 border-t border-light-gray/25 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                  <span className="text-[10px] text-medium-gray uppercase tracking-widest font-medium">Calibrated Healing Modality</span>
                  <Link
                    href={expertiseList[activeExpertise].href}
                    className="inline-flex items-center space-x-1.5 bg-forest-green text-cream-white text-[10px] font-bold px-5 py-2.5 rounded-full hover:bg-forest-green/95 shadow-premium-soft hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <span>Explore Modality Details</span>
                    <ArrowRight size={10} />
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. ORIGINAL MISSION, VISION & VALUES (retained without changes) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 text-center space-y-12">
        <ScrollReveal direction="up" className="space-y-2">
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Mission, Vision & Core Values</h2>
          <div className="gold-divider w-20 mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {/* Mission */}
          <ScrollReveal direction="right" className="bg-white border border-light-gray/40 rounded-3xl p-8 shadow-premium-soft flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green">
                <Compass size={24} />
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Our Mission</h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                To empower individuals to achieve optimal health through personalized, compassionate, and integrated healing practices that address the root causes of illness.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="up" className="bg-white border border-light-gray/40 rounded-3xl p-8 shadow-premium-soft flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold">
                <Sparkles size={24} />
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Our Vision</h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                A world where holistic wellness is accessible to all, where healthcare honors the individual&apos;s unique journey, and where healing integrates science with wisdom.
              </p>
            </div>
          </ScrollReveal>

          {/* Core Values */}
          <ScrollReveal direction="left" className="bg-white border border-light-gray/40 rounded-3xl p-8 shadow-premium-soft flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green">
                <Heart size={24} />
              </div>
              <h3 className="font-heading text-sm font-bold text-deep-charcoal">Core Values</h3>
              <ul className="space-y-2 text-xs text-medium-gray">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                  <span>Compassionate Patient Listening</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                  <span>Integrity in Medical Diagnosis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                  <span>Continuous Academic Training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                  <span>Wholism (Physical, Emotional, Spiritual)</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. ORIGINAL PATIENT CENTERED CARE (retained without changes) */}
      <section className="bg-forest-green text-cream-white rounded-[2.5rem] max-w-7xl mx-auto p-10 md:p-16 text-center relative overflow-hidden shadow-premium-medium">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollReveal direction="up" className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-sage-green uppercase block">Our Methodology</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              How We Care For Every Patient
            </h2>
            <p className="text-xs md:text-sm text-sage-green leading-relaxed max-w-xl mx-auto">
              We design structured health programs combining medical analysis with subtle biofield tuning.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <ScrollReveal direction="up" delay={0.1} className="space-y-3 border-l-2 border-warm-gold/40 pl-4">
              <span className="text-lg font-heading text-warm-gold font-bold">01</span>
              <h4 className="text-xs font-bold uppercase tracking-wider">Consultation</h4>
              <p className="text-[11px] text-sage-green leading-relaxed">60-90 mins evaluation of symptoms, emotional patterns, and medical history.</p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="space-y-3 border-l-2 border-warm-gold/40 pl-4">
              <span className="text-lg font-heading text-warm-gold font-bold">02</span>
              <h4 className="text-xs font-bold uppercase tracking-wider">Analysis</h4>
              <p className="text-[11px] text-sage-green leading-relaxed">Pinpointing constitutional patterns and blockages in your energy matrix.</p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="space-y-3 border-l-2 border-warm-gold/40 pl-4">
              <span className="text-lg font-heading text-warm-gold font-bold">03</span>
              <h4 className="text-xs font-bold uppercase tracking-wider">Treatment</h4>
              <p className="text-[11px] text-sage-green leading-relaxed">Dispensing custom remedies, programming energy crystals, and aura alignment.</p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="space-y-3 border-l-2 border-warm-gold/40 pl-4">
              <span className="text-lg font-heading text-warm-gold font-bold">04</span>
              <h4 className="text-xs font-bold uppercase tracking-wider">Support</h4>
              <p className="text-[11px] text-sage-green leading-relaxed">Bi-weekly follow-ups, WhatsApp check-ins, and seasonal dosage tuning.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. HOME CONSULTATION & PATIENT VISIT (copied from about-2) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <ScrollReveal direction="up" className="bg-gradient-to-br from-forest-green to-indigo-950 rounded-[2.5rem] p-10 md:p-14 text-cream-white relative overflow-hidden shadow-premium-medium flex flex-col lg:flex-row items-center gap-10">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <div className="space-y-6 text-left lg:w-3/5 relative z-10">
            <span className="bg-warm-gold/25 text-warm-gold text-[9px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-warm-gold/30 inline-block">
              🏡 Core Service Highlight
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Healthcare support that reaches you.
            </h2>
            <p className="text-xs md:text-sm text-sage-green leading-relaxed max-w-xl">
              To guarantee the highest standard of personalized patient listening, Dr. Niyati Rana provides direct home consultation visits and clinical support within the familiar comfort of your home, as well as comprehensive remote online video sessions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center space-x-2 text-sage-green">
                <CheckCircle2 size={14} className="text-warm-gold" />
                <span>Home consultation available</span>
              </div>
              <div className="flex items-center space-x-2 text-sage-green">
                <CheckCircle2 size={14} className="text-warm-gold" />
                <span>Patient home visits</span>
              </div>
              <div className="flex items-center space-x-2 text-sage-green">
                <CheckCircle2 size={14} className="text-warm-gold" />
                <span>Online consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-sage-green">
                <CheckCircle2 size={14} className="text-warm-gold" />
                <span>Comfortable environment</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 w-full bg-white/5 border border-white/10 rounded-3xl p-6 relative z-10 space-y-4 text-left">
            <div className="flex items-center space-x-2 text-warm-gold">
              <MapPin size={18} />
              <span className="font-heading text-sm font-bold uppercase tracking-wider">Ahmedabad Service Areas</span>
            </div>
            <p className="text-[10px] text-sage-green leading-relaxed">
              Dr. Niyati travels directly to patients residing in the following Ahmedabad zones and neighboring neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Ahmedabad City", "Maninagar", "Khokhra", "Ghodasar", "C.T.M", "Vastral", "Nearby areas"].map((area) => (
                <span key={area} className="bg-white/10 text-cream-white text-[10px] font-medium px-3 py-1 rounded-full border border-white/5">
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <a
                href="https://maps.app.goo.gl/XqBzotc1ssKFNdrEA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-warm-gold hover:text-white transition-colors"
              >
                <span>Clinic Sanctuary Location (Satellite View)</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 10. GOOGLE REVIEWS & TESTIMONIALS (copied from about-2) */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-12">
          <ScrollReveal direction="up" className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest text-forest-green uppercase block">Patient Feedback</span>
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Google Reviews & Testimonials</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          {/* Review Summary Score */}
          <ScrollReveal direction="up" delay={0.1} className="max-w-md mx-auto bg-white border border-light-gray/40 rounded-3xl p-6 shadow-premium-soft flex items-center justify-between">
            <div className="text-left space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-medium-gray">Google Business Profile</span>
              <div className="flex items-center space-x-1.5">
                <span className="text-3xl font-bold text-deep-charcoal">5.0</span>
                <div className="flex text-warm-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-medium-gray block">Verified Patient Rating (120+ reviews)</span>
            </div>
            <a
              href="https://share.google/KuAHjNg9r2FbYYUJN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-forest-green text-cream-white text-[10px] font-bold px-4 py-3 rounded-full hover:bg-forest-green/95 transition-all shadow-premium-soft"
            >
              <span>Write a Review</span>
              <ExternalLink size={10} />
            </a>
          </ScrollReveal>

          {/* Scrollable Review Cards with Stop on Hover */}
          <ScrollReveal direction="up" delay={0.15}>
            <ReviewCardsScroll />
          </ScrollReveal>
        </div>
      </section>

      {/* 11. GALLERY SECTION (copied from about-2) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center space-y-12">
        <ScrollReveal direction="up" className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-forest-green uppercase block">Visual Showcase</span>
          <h2 className="font-heading text-3xl font-bold text-deep-charcoal">Gallery Section</h2>
          <div className="gold-divider w-20 mx-auto" />
          <p className="text-xs text-medium-gray max-w-sm mx-auto">
            Explore authentic images of our home consultation environment, remedies, and healing materials.
          </p>
        </ScrollReveal>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.05}
              onClick={() => setSelectedGalleryIndex(index)}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-soft hover:shadow-premium-medium transition-all group cursor-pointer border border-light-gray/30 bg-sage-green/5"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                sizes="(max-w-768px) 100vw, 350px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-deep-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-[9px] font-bold text-warm-gold uppercase tracking-wider">Expand View</span>
                <h3 className="font-heading text-sm font-bold text-white leading-snug">{img.title}</h3>
                <p className="text-[10px] text-cream-white/70 leading-relaxed mt-1">{img.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 12. ACCORDION FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20 space-y-12">
        <ScrollReveal direction="up" className="text-center space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                className="bg-white border border-light-gray/40 rounded-2xl overflow-hidden shadow-premium-soft"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-6 text-left font-medium text-xs md:text-sm text-deep-charcoal hover:text-forest-green transition-colors duration-200 cursor-pointer"
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
                      <p className="p-6 text-xs text-medium-gray leading-relaxed bg-off-white/40">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 13. FINAL CTA SECTION (copied from about-2) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <ScrollReveal direction="up" className="bg-forest-green text-cream-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-premium-medium space-y-8 max-w-4xl mx-auto">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <div className="space-y-4 max-w-xl mx-auto relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sage-green block">Begin Your Healing Journey</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
              Begin Your Wellness Journey Today
            </h2>
            <p className="text-xs text-sage-green leading-relaxed">
              Experience the combined power of constitutional Homeopathy and biofield energy resets. Reach out today to schedule your personalized home visit or online video consultation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-cream-white text-forest-green text-xs font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-102 transition-all shadow-premium-soft hover:shadow-premium-medium"
            >
              <MessageSquare size={16} className="text-forest-green" />
              <span>WhatsApp Now</span>
            </a>
            <a
              href={callNumber}
              className="inline-flex items-center space-x-2 bg-transparent text-cream-white border border-cream-white/40 text-xs font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ORIGINAL CERTIFICATE LIGHTBOX MODAL (retained without changes) */}
      <AnimatePresence>
        {selectedCertIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close button background overlay click */}
            <div className="absolute inset-0" onClick={() => setSelectedCertIndex(null)} />

            {/* Close button */}
            <button
              onClick={() => setSelectedCertIndex(null)}
              className="absolute top-6 right-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all cursor-pointer z-50"
              aria-label="Close credentials verification"
            >
              <X size={24} />
            </button>

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full h-full max-h-[85vh] relative flex flex-col md:flex-row items-center justify-center bg-deep-charcoal border border-white/10 rounded-3xl overflow-hidden shadow-premium-medium z-10"
            >
              {/* Image Frame */}
              <div className="relative w-full md:w-3/5 h-1/2 md:h-full bg-sage-green/5 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
                <div className="relative w-full h-full aspect-[4/3]">
                  <Image
                    src={credentialsList[selectedCertIndex].image}
                    alt={credentialsList[selectedCertIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-2/5 p-8 text-left text-cream-white flex flex-col justify-between h-1/2 md:h-full space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-warm-gold font-bold uppercase tracking-wider block">
                      {credentialsList[selectedCertIndex].institution}
                    </span>
                    <span className="text-[9px] text-sage-green font-mono block">
                      {credentialsList[selectedCertIndex].regNo}
                    </span>
                    <h3 className="font-heading text-xl font-bold tracking-tight mt-2">
                      {credentialsList[selectedCertIndex].title}
                    </h3>
                  </div>
                  
                  <div className="gold-divider w-12 my-2" />
                  
                  <p className="text-xs text-medium-gray leading-relaxed">
                    {credentialsList[selectedCertIndex].details}
                  </p>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-2 text-[10px]">
                    <span className="font-bold text-sage-green uppercase block">Verification Protocol</span>
                    <p className="text-medium-gray leading-relaxed">
                      This document is a certified copy of the original degree registration issued by the authorized body. Registered under current Indian clinical council boards.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-medium-gray uppercase tracking-widest">Aura Credential ID</span>
                  <span className="text-[10px] text-warm-gold font-mono font-bold">VERIFIED_SECURE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GALLERY LIGHTBOX MODAL (copied from about-2) */}
      <AnimatePresence>
        {selectedGalleryIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close button background overlay click */}
            <div className="absolute inset-0" onClick={() => setSelectedGalleryIndex(null)} />

            {/* Close button */}
            <button
              onClick={() => setSelectedGalleryIndex(null)}
              className="absolute top-6 right-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all cursor-pointer z-50"
              aria-label="Close gallery popup"
            >
              <X size={24} />
            </button>

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full relative flex flex-col items-center justify-center bg-deep-charcoal border border-white/10 rounded-3xl overflow-hidden shadow-premium-medium z-10 p-4"
            >
              <div className="relative w-full aspect-[4/3] max-h-[70vh]">
                <Image
                  src={galleryImages[selectedGalleryIndex].url}
                  alt={galleryImages[selectedGalleryIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full text-left text-cream-white p-4 space-y-1.5 border-t border-white/10 mt-2">
                <h3 className="font-heading text-base font-bold text-warm-gold">
                  {galleryImages[selectedGalleryIndex].title}
                </h3>
                <p className="text-xs text-medium-gray leading-relaxed">
                  {galleryImages[selectedGalleryIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
