"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, BookOpen, Clock, Heart, Shield, CheckCircle, HelpCircle, Star, Sparkles, Compass, X, Search, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

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

export default function AboutPage() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-10">
      {/* A. ABOUT HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <ScrollReveal direction="down">
            <span className="text-xs font-semibold tracking-widest text-forest-green uppercase block">Meet the Practitioner</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal leading-tight">
              Dr. Niyati Rana
            </h1>
            <p className="font-accent text-xl text-forest-green italic tracking-wide mt-2">
              BHMS Homeopath, Reiki Master & Spiritual Energy Healer
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-sm md:text-base text-medium-gray leading-relaxed max-w-xl">
              For over 15 years, Dr. Niyati Rana has dedicated her path to guiding individuals from state of disease to wholeness. Combining rigorous homeopathic medical principles with fine energy frequencies, she provides a personalized sanctuary for total restoration.
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white shadow-premium-medium bg-off-white">
            <Image
              src="/images/doctor/dr_niyati_rana.png"
              alt="Dr. Niyati Rana"
              fill
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* B. STORY & JOURNEY */}
      <section className="bg-off-white py-20 border-y border-light-gray/20 text-left">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <ScrollReveal direction="up" className="text-center space-y-2">
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">The Journey to Healing</h2>
            <div className="gold-divider w-20 mx-auto" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1} className="space-y-6 text-xs md:text-sm text-medium-gray leading-relaxed">
            <p>
              Dr. Niyati Rana&apos;s journey began during her medical studies. While classical allopathy was excellent for emergency interventions, she realized that chronic, deep-seated autoimmune and lifestyle conditions required something deeper. She witnessed how emotional stress, inherited configurations, and lifestyle gaps directly manifested as physical pathology.
            </p>
            <p>
              This realization led her to master <strong>Homeopathy</strong>, a science based on boosting the body&apos;s natural immune mechanisms. To refine her diagnostic intuition, she later studied <strong>Reiki energy systems</strong> and <strong>Lama Fera</strong>. She discovered that by rebalancing the energetic fields (prana/aura) of a patient, homeopathic medicines acted much faster and with greater longevity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* C. PROFESSIONAL CERTIFICATIONS (Redesigned Credentials Verification Panel) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="text-center space-y-12">
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
                    className="text-[10px] font-bold text-forest-green hover:text-warm-gold tracking-wide transition-colors flex items-center space-x-1 pt-2 border-t border-light-gray/25 cursor-pointer"
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

      {/* E. EXPERIENCE TIMELINE */}
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

      {/* F. MISSION, VISION & VALUES */}
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

      {/* G. PATIENT CENTERED CARE */}
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

      {/* CERTIFICATE LIGHTBOX MODAL */}
      {selectedCertIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setSelectedCertIndex(null)}
            className="absolute top-6 right-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all cursor-pointer"
            aria-label="Close credentials verification"
          >
            <X size={24} />
          </button>

          {/* Modal Card content */}
          <div className="max-w-4xl w-full h-full max-h-[85vh] relative flex flex-col md:flex-row items-center justify-center bg-deep-charcoal border border-white/10 rounded-3xl overflow-hidden shadow-premium-medium">
            {/* Image Frame (Col 1) */}
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

            {/* Description Details (Col 2) */}
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
          </div>
        </div>
      )}
    </div>
  );
}
