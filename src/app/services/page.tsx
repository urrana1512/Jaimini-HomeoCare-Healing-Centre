"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, Activity, Compass, Shield, CheckCircle, ArrowRight, MessageSquare, Laptop, Home, UserCheck } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const servicesOverviewList = [
  {
    name: "Homeopathy Consultation",
    desc: "Classical constitutional medicine to trigger long-term deep healing without chemical load.",
    icon: Shield,
    color: "text-forest-green bg-forest-green/10 border-forest-green/20",
    href: "/services/homeopathy",
    image: "/images/services/homeography_remedy.png",
    benefits: ["Autoimmune regulation", "Metabolic correction", "Safe for all age groups"]
  },
  {
    name: "Reiki Healing",
    desc: "Subtle biofield clearing to release stress, balance body chakras, and soothe nervous tension.",
    icon: Heart,
    color: "text-deep-charcoal bg-soft-lavender border-soft-lavender/30",
    href: "/services/reiki-healing",
    image: "/images/services/reiki_healing.png",
    benefits: ["Dissolves mental fatigue", "Aligns endocrine centers", "Nurtures deep relaxation"]
  },
  {
    name: "Lama Fera Healing",
    desc: "Powerful Tibetan lineage symbols for aura defense, space clearing, and severe energetic blocks.",
    icon: Activity,
    color: "text-rose-gold bg-rose-gold/15 border-rose-gold/30",
    href: "/services/lama-fera",
    image: "/images/services/lama_fera.png",
    benefits: ["Dissolves dark vectors", "Speeds physical convalescence", "Purges astral toxicity"]
  },
  {
    name: "Tarot Card Reading",
    desc: "Psychological archetype guidance mapping upcoming career, relational, and healing cycles.",
    icon: Compass,
    color: "text-purple-950 bg-purple-900/10 border-purple-950/20",
    href: "/services/tarot-reading",
    image: "/images/services/crystal_bracelets.png", // fallback
    benefits: ["Resolves career cross-roads", "Spiritual self-discovery", "Unbiased life advice"]
  },
  {
    name: "Crystal Bracelets",
    desc: "Handcrafted auric shields using natural programmatic gemstones activated with Reiki parameters.",
    icon: Sparkles,
    color: "text-celestial-blue bg-celestial-blue/10 border-celestial-blue/20",
    href: "/services/crystal-bracelets",
    image: "/images/services/crystal_bracelets.png",
    benefits: ["24/7 energetic support", "Amethyst, Jade & Citrine options", "Activated to your birth chart"]
  },
  {
    name: "Online Consultations",
    desc: "Encrypted telehealth consultations with digital records and global remedy logistics.",
    icon: Laptop,
    color: "text-forest-green bg-forest-green/10 border-forest-green/20",
    href: "/services/homeopathy",
    image: "/images/services/homeography_remedy.png",
    benefits: ["Zoom or WhatsApp Video", "Priority scheduler slots", "International door delivery"]
  },
  {
    name: "Home Visit Services",
    desc: "Dedicated clinical consultation in the security and comfort of your private residence.",
    icon: Home,
    color: "text-warm-gold bg-warm-gold/10 border-warm-gold/20",
    href: "/contact",
    image: "/images/doctor/dr_niyati_rana.png",
    benefits: ["Personalized family audits", "Elderly or pediatric support", "Flexible timing arrangements"]
  },
  {
    name: "Wellness Coaching",
    desc: "Long-term partnership correcting nutrition, breathing patterns, and stress triggers.",
    icon: UserCheck,
    color: "text-forest-green bg-forest-green/10 border-forest-green/20",
    href: "/about",
    image: "/images/services/reiki_healing.png",
    benefits: ["Lifestyle adjustments", "Guided meditations", "Preventive medicine setups"]
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20 pt-10 text-left">
      {/* SERVICES HERO */}
      <section className="relative bg-gradient-to-b from-cream-white to-sage-green/10 py-16 border-b border-light-gray/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <ScrollReveal direction="down">
            <span className="text-xs font-semibold tracking-widest text-forest-green uppercase block">Healing Modalities</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
              Complete Integrated Wellness Solutions
            </h1>
            <div className="gold-divider w-24 mx-auto mt-4" />
            <p className="text-xs md:text-sm text-medium-gray leading-relaxed max-w-xl mx-auto mt-4">
              We align physical medicine, biofield frequencies, and intuitive insights to build a strong foundation for your long-term vitality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesOverviewList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal
                key={service.name}
                direction="up"
                delay={index * 0.08}
                className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-light-gray/40 shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image Background Header */}
                <div className="relative h-44 w-full overflow-hidden bg-sage-green/20">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-w-7xl) 100vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon Emblem Overlay */}
                  <div className={`absolute top-4 right-4 p-2.5 rounded-full border ${service.color} backdrop-blur-md shadow-premium-soft`}>
                    <IconComponent size={18} />
                  </div>
                  
                  <h3 className="absolute bottom-4 left-6 font-heading text-base md:text-lg font-bold text-white">
                    {service.name}
                  </h3>
                </div>

                {/* Details Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs text-medium-gray leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2 text-[11px] text-deep-charcoal">
                          <CheckCircle size={12} className="text-forest-green shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-light-gray/45 pt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-forest-green hover:text-warm-gold tracking-wide transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* QUICK INTAKE CALLOUT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up" className="bg-forest-green rounded-[2.5rem] p-10 md:p-14 text-cream-white relative overflow-hidden shadow-premium-medium flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Unsure which modality is right for you?</h2>
            <p className="text-xs text-sage-green leading-relaxed">
              Dr. Niyati Rana will perform an initial constitutional intake and aura check during a brief free call to direct you to the most effective healing path.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20am%20unsure%20which%20service%20is%20suitable%20for%20me.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-warm-gold text-deep-charcoal font-bold px-7 py-3.5 rounded-full hover:bg-yellow-500 shadow-premium-soft transition-all duration-300"
            >
              <MessageSquare size={16} />
              <span>Ask Dr. Niyati</span>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
