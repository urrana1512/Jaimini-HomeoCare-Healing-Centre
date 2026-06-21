"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Sparkles, 
  Activity, 
  Globe, 
  MessageSquare, 
  Phone, 
  ChevronRight, 
  Star, 
  Check, 
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Lock,
  ChevronDown
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CounterAnimation from "@/components/animations/CounterAnimation";

// Services Data
const servicesList = [
  {
    name: "Homeopathy Consultation",
    desc: "Constitutional remedies targeting chronic and acute ailments at their energetic root.",
    icon: Sparkles,
    color: "bg-forest-green/10 text-forest-green border-forest-green/20",
    href: "/services/homeopathy",
    benefits: ["Root cause analysis", "Zero side effects", "Safe for children & elderly"],
    image: "/images/services/homeography_remedy.png"
  },
  {
    name: "Reiki Healing",
    desc: "Universal life force energy channeling to dissolve emotional blockages and rebalance chakras.",
    icon: Heart,
    color: "bg-soft-lavender text-deep-charcoal border-soft-lavender/30",
    href: "/services/reiki-healing",
    benefits: ["Deep stress reduction", "Chakra purification", "Emotional trauma release"],
    image: "/images/services/reiki_healing.png"
  },
  {
    name: "Lama Fera Healing",
    desc: "Ancient Buddhist energy grid therapy for deep psychic shielding and chronic illness recovery.",
    icon: Activity,
    color: "bg-rose-gold/15 text-rose-gold border-rose-gold/30",
    href: "/services/lama-fera",
    benefits: ["Psychic protection", "Negative energy clearing", "Rapid physical repair"],
    image: "/images/services/lama_fera.png"
  },
  {
    name: "Tarot Card Reading",
    desc: "Intuitive divination mapping life transitions, relationships, and hidden pathways.",
    icon: Sparkles,
    color: "bg-purple-900/10 text-purple-950 border-purple-950/20",
    href: "/services/tarot-reading",
    benefits: ["Clarity on life decisions", "Spiritual guidance", "Timeline insights"],
    image: "/images/services/crystal_bracelets.png" // fallback
  },
  {
    name: "Crystal Bracelets",
    desc: "Custom gemstone therapy jewelry activated with Reiki parameters for daily energetic support.",
    icon: Sparkles,
    color: "bg-celestial-blue/10 text-celestial-blue border-celestial-blue/20",
    href: "/services/crystal-bracelets",
    benefits: ["Aura support", "High vibrational crystals", "Reiki activated"],
    image: "/images/services/crystal_bracelets.png"
  }
];

// Conditions Data
const conditionsList = [
  { name: "Renal Stone & Calculi", desc: "Dissolving kidney stones naturally using specific homeopathic formulations." },
  { name: "Gallstone & Biliary Issues", desc: "Non-surgical, constitution-based support for gallbladder health." },
  { name: "Thyroid Disorders", desc: "Balancing hormonal secretions and reducing dependency on daily pills." },
  { name: "Diabetes Management", desc: "Improving pancreatic response and insulin reception holistically." },
  { name: "Hypertension & BP Control", desc: "Reversing cardiac strain and systemic vascular resistance." },
  { name: "Allergies & Sensitivities", desc: "Modifying hyperactive immune responses without antihistamines." },
  { name: "Migraine & Headaches", desc: "Eliminating neuralgic pain triggers and vascular spasms." },
  { name: "Gastric & Digestive Issues", desc: "Resolving IBS, severe acidity, bloating, and leaky gut." },
  { name: "Joint Pain & Arthritis", desc: "Reducing inflammatory markers and improving synovial lubrication." },
  { name: "Hair Fall & Alopecia", desc: "Stimulating follicles through nutritional and stress correction." },
  { name: "Skin Disorders & Eczema", desc: "Treating psoriasis, vitiligo, and dermographism from the inside out." },
  { name: "Child Health & Immunity", desc: "Strengthening pediatric defense mechanisms naturally." },
  { name: "Women's Wellness", desc: "Regulating PCOD/PCOS symptoms and menstrual cycle issues." },
  { name: "Stress & Anxiety", desc: "Calming nervous system hyper-arousal using integrative energy therapies." },
  { name: "Chronic Fatigue", desc: "Restoring physical vitality and mitochondrial ATP conversion." },
  { name: "Sleep Disorders", desc: "Inducing deep, delta-wave sleep through holistic relaxation." }
];

// Testimonials Data
const testimonialsList = [
  {
    quote: "My joint pain disappeared in 6 weeks!",
    text: "Dr. Niyati's personalized homeopathy treatment completely transformed my mobility. I can now play with my grandchildren without pain. Her care is truly exceptional.",
    author: "Rajesh Kumar, 52",
    condition: "Chronic Joint Pain",
    service: "Homeopathy Consultation",
    years: "Patient since 2021",
    rating: 5
  },
  {
    quote: "Reiki sessions changed my life's energy",
    text: "The Reiki healing sessions gave me peace I've never experienced. Combined with her guidance, I've regained my confidence and life purpose.",
    author: "Priya Sharma, 35",
    condition: "Stress & Anxiety",
    service: "Reiki Healing",
    years: "Patient since 2022",
    rating: 5
  },
  {
    quote: "Finally, someone who listens and understands",
    text: "Dr. Niyati didn't just treat my thyroid; she addressed my stress and lifestyle. Her holistic approach is rare, compassionate, and genuine.",
    author: "Amit Patel, 48",
    condition: "Thyroid & Stress",
    service: "Integrated Healing",
    years: "Patient since 2020",
    rating: 5
  }
];

// FAQs Data
const faqsList = [
  {
    q: "How does homeopathy work, and is it scientifically validated?",
    a: "Homeopathy operates on the principle of 'like cures like,' stimulating the body's self-healing mechanisms using highly diluted, energized natural remedies. It has been trusted clinically worldwide for over 200 years to successfully treat chronic conditions."
  },
  {
    q: "Can I combine Reiki and Homeopathy in the same treatment course?",
    a: "Absolutely. Homeopathy acts on the physical and subtle constitutional levels, while Reiki adjusts the energetic chakra grids. They complement each other beautifully to accelerate total healing."
  },
  {
    q: "What is Lama Fera and how does it differ from Reiki?",
    a: "Lama Fera is a direct Buddhist healing energy system that utilizes specific mantras and symbols. While Reiki is soft, nurturing, and flows naturally where needed, Lama Fera is highly targeted, intense, and exceptionally effective for clearing severe negative patterns, astral blockages, and deep physical trauma."
  },
  {
    q: "How do I choose the correct custom crystal bracelet?",
    a: "During a consultation, Dr. Rana assesses your energy fields and life circumstances. We then construct a customized gemstone profile (using crystals like Amethyst for calming, Citrine for abundance, etc.) and program it with Reiki symbols specifically tuned to your aura."
  },
  {
    q: "Do you offer secure online consultations for international patients?",
    a: "Yes. Over 40% of our patient base is global. We conduct secure online sessions via video calls and courier personalized homeopathic remedies worldwide."
  }
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-tr from-cream-white via-cream-white to-sage-green/20 overflow-hidden pt-12">
        {/* Decorative background vectors */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-forest-green/5 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 w-[30rem] h-[30rem] rounded-full bg-warm-gold/5 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-forest-green/5 border border-forest-green/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-forest-green tracking-wide">
                <Sparkles size={12} className="text-warm-gold animate-pulse" />
                <span>15+ Years of Dedicated Healing Experience</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-deep-charcoal leading-[1.15]">
                Heal Holistically with <br />
                <span className="text-forest-green relative">
                  Dr. Niyati Rana
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-warm-gold/40 rounded-full" />
                </span>
              </h1>
              <p className="font-accent text-lg md:text-xl text-forest-green italic tracking-wide">
                Premium Homeopathy, Reiki Healing & Holistic Wellness for Complete Mind-Body-Spirit Transformation
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-sm md:text-base text-medium-gray leading-relaxed max-w-xl">
                Address the root causes of illness, not just the surface symptoms. Experience a customized healing journey integrating classical homeopathic medicine with pure energy therapies, trusted by 5000+ patients.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-forest-green text-cream-white font-medium px-8 py-4 rounded-full shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-warm-gold hover:bg-forest-green/95"
              >
                <MessageSquare size={18} className="text-sage-green" />
                <span>Schedule Free Consultation</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center space-x-2 bg-white text-forest-green font-medium px-8 py-4 rounded-full border border-forest-green/20 hover:bg-sage-green/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ChevronRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[400px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-forest-green/20 to-warm-gold/20 blur-xl transform rotate-6 scale-105" />
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-premium-medium bg-off-white aspect-[4/5]">
                <Image
                  src="/images/doctor/dr_niyati_rana.png"
                  alt="Dr. Niyati Rana Portrait"
                  fill
                  sizes="(max-w-7xl) 100vw, 500px"
                  priority
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Float Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-premium-medium border border-light-gray/40 flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-white">
                  <Check size={20} />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-deep-charcoal">BHMS Certified</div>
                  <div className="text-[10px] text-medium-gray tracking-wider uppercase">Registered Homeopath</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <ScrollReveal direction="fade" duration={0.8}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white shadow-premium-soft border border-light-gray/30 rounded-3xl p-8 md:p-12 divide-y lg:divide-y-0 lg:divide-x divide-light-gray/50">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <Heart size={28} className="text-forest-green mb-3" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-forest-green mb-1">
                <CounterAnimation target={15} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-deep-charcoal uppercase tracking-wider mb-1">Experience</div>
              <p className="text-[11px] text-medium-gray max-w-[150px]">Expert homeopathic & energy clinical practice</p>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center p-4 text-center pt-8 lg:pt-4">
              <CheckCircle2 size={28} className="text-warm-gold mb-3" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-forest-green mb-1">
                <CounterAnimation target={5000} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-deep-charcoal uppercase tracking-wider mb-1">Happy Patients</div>
              <p className="text-[11px] text-medium-gray max-w-[150px]">Recovered and returned to vibrant health</p>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center p-4 text-center pt-8 lg:pt-4">
              <Sparkles size={28} className="text-forest-green mb-3" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-forest-green mb-1">
                <CounterAnimation target={8} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-deep-charcoal uppercase tracking-wider mb-1">Modalities</div>
              <p className="text-[11px] text-medium-gray max-w-[150px]">Complementary holistic healing arts</p>
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center p-4 text-center pt-8 lg:pt-4">
              <Globe size={28} className="text-warm-gold mb-3" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-forest-green mb-1">
                <span className="font-heading">Online</span>
              </div>
              <div className="text-xs font-semibold text-deep-charcoal uppercase tracking-wider mb-1">Global Access</div>
              <p className="text-[11px] text-medium-gray max-w-[150px]">Consultations in clinics & secure remote calls</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. SERVICES SHOWCASE */}
      <section className="bg-off-white py-20 border-y border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-16">
          <ScrollReveal direction="up" className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">
              Core Modalities of Holistic Healing
            </h2>
            <div className="gold-divider w-24 mx-auto" />
            <p className="text-sm md:text-base text-medium-gray max-w-xl mx-auto">
              Our clinic merges traditional science with natural healing frequencies. Explore our customized treatment modalities.
            </p>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              return (
                <ScrollReveal
                  key={service.name}
                  direction="up"
                  delay={index * 0.1}
                  className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-light-gray/40 shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Service Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-sage-green/20">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-w-7xl) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-6 font-heading text-lg font-bold text-white">
                      {service.name}
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6 text-left">
                    <div className="space-y-4">
                      <p className="text-xs text-medium-gray leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-2 text-xs text-deep-charcoal">
                            <Check size={12} className="text-forest-green shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-forest-green hover:text-warm-gold tracking-wide transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Explore Therapy</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS TREATED SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 text-center space-y-12">
        <ScrollReveal direction="up" className="space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">
            Areas of Expertise & Conditions Treated
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-sm md:text-base text-medium-gray max-w-xl mx-auto">
            Experienced care tailored to resolve long-standing chronic conditions and support system balance.
          </p>
        </ScrollReveal>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {conditionsList.map((cond, index) => (
            <ScrollReveal
              key={cond.name}
              direction="up"
              delay={(index % 4) * 0.05}
              className="bg-white hover:bg-sage-green/10 border border-light-gray/40 rounded-2xl p-5 shadow-premium-soft transition-all duration-300 hover:scale-102 hover:shadow-premium-glow-green"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={16} className="text-forest-green mt-1 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-deep-charcoal">{cond.name}</h3>
                  <p className="text-[10px] text-medium-gray leading-relaxed">{cond.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. STORY AND PHILOSOPHY */}
      <section className="bg-gradient-to-br from-cream-white to-sage-green/10 py-20 border-y border-light-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" className="relative w-full max-w-[480px] mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-medium border border-white">
              <Image
                src="/images/services/homeography_remedy.png"
                alt="Clinic ambiance"
                fill
                sizes="(max-w-7xl) 100vw, 480px"
                className="object-cover"
              />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 space-y-6 text-left">
            <ScrollReveal direction="left" className="space-y-2">
              <span className="text-xs font-accent tracking-widest text-forest-green uppercase block">Our Core Philosophy</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">
                Dr. Niyati Rana: Beyond Treating Illness
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.1}>
              <p className="text-xs md:text-sm text-medium-gray leading-relaxed">
                True healing transcends the temporary alleviation of symptom layers. It calls for a thorough understanding of the person – their emotional core, lifestyle dynamics, inherited configurations, and subtle energetic fields. 
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className="border-l-4 border-warm-gold pl-6 py-2 italic font-accent text-lg md:text-xl text-forest-green">
              &ldquo;Healing is not just the absence of disease, but the presence of wholeness and vitality in every aspect of life.&rdquo;
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3} className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <p className="text-xs text-deep-charcoal">
                  <strong>Integrated Protocols:</strong> Merging the physical focus of Homeopathy with energetic purification.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <p className="text-xs text-deep-charcoal">
                  <strong>Patient Autonomy:</strong> Educating and empowering you to maintain your wellness parameters at home.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 text-center space-y-12">
        <ScrollReveal direction="up" className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-forest-green">Healing Journeys</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">
            Words From Our Relieved Patients
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </ScrollReveal>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative overflow-hidden bg-white shadow-premium-medium border border-light-gray/30 rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-left"
            >
              <div className="flex space-x-1">
                {[...Array(testimonialsList[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>

              <h3 className="font-heading text-lg md:text-xl font-bold text-forest-green italic">
                &ldquo;{testimonialsList[activeTestimonial].quote}&rdquo;
              </h3>

              <p className="text-xs md:text-sm text-medium-gray leading-relaxed">
                {testimonialsList[activeTestimonial].text}
              </p>

              <div className="flex items-center justify-between border-t border-light-gray/40 pt-4 text-xs">
                <div>
                  <span className="font-bold text-deep-charcoal block">
                    {testimonialsList[activeTestimonial].author}
                  </span>
                  <span className="text-medium-gray">
                    Treated for: {testimonialsList[activeTestimonial].condition}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-forest-green font-medium block">
                    {testimonialsList[activeTestimonial].service}
                  </span>
                  <span className="text-[10px] text-medium-gray">
                    {testimonialsList[activeTestimonial].years}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2.5 mt-8">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? "bg-forest-green w-6" : "bg-light-gray"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACCORDION FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-10 space-y-12">
        <ScrollReveal direction="up" className="text-center space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </ScrollReveal>

        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
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

      {/* 8. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up" className="bg-forest-green rounded-[2.5rem] p-10 md:p-16 text-center text-cream-white relative overflow-hidden shadow-premium-medium border border-forest-green/20">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-warm-gold/5 rounded-full blur-2xl transform -translate-x-20 translate-y-20 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold tracking-widest text-sage-green uppercase block">Begin Your Healing Journey</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Restore Wholeness & <br />Vibrant Energy
            </h2>
            <p className="text-xs md:text-sm text-sage-green leading-relaxed">
              Ready to break free from symptomatic dependency? Join 5,000+ patients who have stepped onto a personalized path to total health. Schedule your introductory consultation with Dr. Niyati Rana today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-warm-gold text-deep-charcoal font-bold px-8 py-4 rounded-full shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 hover:scale-102 hover:bg-yellow-500"
              >
                <MessageSquare size={16} />
                <span>Book Free WhatsApp Consultation</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-transparent text-cream-white font-medium px-8 py-4 rounded-full border border-cream-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <span>Find Our Clinic</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="pt-6 text-[10px] text-sage-green uppercase tracking-widest">
              WhatsApp Consultation &bull; Clinic Visits &bull; Secure Email Support
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
