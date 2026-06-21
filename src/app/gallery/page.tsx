"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Search } from "lucide-react";
import { FaInstagram, FaPlay, FaHeart, FaComment } from "react-icons/fa";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryCategories = ["All", "Homeopathy", "Energy Healing", "Clinic"];

const instagramReelsList = [
  {
    id: "reel-1",
    title: "Constitutional Homeopathy Analysis",
    description: "How constitutional homeopathy heals you from deep within rather than masking symptoms.",
    views: "8.4K",
    likes: "1.2K",
    duration: "0:45",
    thumbnail: "/images/services/homeography_remedy.png",
    link: "https://www.instagram.com/jaimini_healing_centre?igsh=MWhqMjVhZDhmNGRzcQ=="
  },
  {
    id: "reel-2",
    title: "5 Signs Your Chakras Are Blocked",
    description: "Simple guidance to identify energetic blockages in your aura and how Reiki resets them.",
    views: "12.1K",
    likes: "2.8K",
    duration: "1:00",
    thumbnail: "/images/services/reiki_healing.png",
    link: "https://www.instagram.com/jaimini_healing_centre?igsh=MWhqMjVhZDhmNGRzcQ=="
  },
  {
    id: "reel-3",
    title: "Lama Fera Negative Cord Clearing",
    description: "Visualizing the sacred Tibetan wand clearing environmental stress and heavy residence fields.",
    views: "9.2K",
    likes: "1.9K",
    duration: "0:50",
    thumbnail: "/images/services/lama_fera.png",
    link: "https://www.instagram.com/jaimini_healing_centre?igsh=MWhqMjVhZDhmNGRzcQ=="
  },
  {
    id: "reel-4",
    title: "Gemstone Energy Activation",
    description: "Witness the Usui Reiki Master attunement and Moon-charging process for natural Citrine bracelets.",
    views: "15.3K",
    likes: "3.5K",
    duration: "0:30",
    thumbnail: "/images/services/crystal_bracelets.png",
    link: "https://www.instagram.com/jaimini_healing_centre?igsh=MWhqMjVhZDhmNGRzcQ=="
  }
];

const galleryItemsList = [
  {
    id: 1,
    title: "Dr. Niyati Rana Consultation",
    category: "Clinic",
    image: "/images/doctor/dr_niyati_rana.png",
    desc: "Personalized deep intake consultation in Navrangpura clinic."
  },
  {
    id: 2,
    title: "Organic Homeopathic Remedy Setup",
    category: "Homeopathy",
    image: "/images/services/homeography_remedy.png",
    desc: "Sourcing high vibrational botanical substances."
  },
  {
    id: 3,
    title: "Reiki Energy Attunement",
    category: "Energy Healing",
    image: "/images/services/reiki_healing.png",
    desc: "Chakra clearing session under soft healing frequencies."
  },
  {
    id: 4,
    title: "Programmatic Gemstone Crystals",
    category: "Energy Healing",
    image: "/images/services/crystal_bracelets.png",
    desc: "Reiki-activated Amethyst, Jade, and Citrine bracelets."
  },
  {
    id: 5,
    title: "Lama Fera Meditation Grid",
    category: "Energy Healing",
    image: "/images/services/lama_fera.png",
    desc: "Spiritual Buddhist symbols for deep aura defense."
  },
  {
    id: 6,
    title: "Healing Space Environment",
    category: "Clinic",
    image: "/images/services/homeography_remedy.png", // fallback
    desc: "Serene, well-lit spaces designed for patient comfort."
  },
  {
    id: 7,
    title: "Clinic Consultation Space",
    category: "Clinic",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.15.51 PM (1).jpeg",
    desc: "Serene interior layout of the consultation room at Jaimini Healing Centre."
  },
  {
    id: 8,
    title: "Homeopathy Globules Preparation",
    category: "Homeopathy",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.01 PM (1).jpeg",
    desc: "Traditional high-potency sucrose globules prepared for patient prescription."
  },
  {
    id: 9,
    title: "Reiki Charging Grid",
    category: "Energy Healing",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.11 PM.jpeg",
    desc: "Natural quartz crystals aligned in a geometric energy grid."
  },
  {
    id: 10,
    title: "Patient Case Logging",
    category: "Clinic",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.21 PM (1).jpeg",
    desc: "Detailed repertorization documentation matching symptoms to Simillimum."
  },
  {
    id: 11,
    title: "Active Healing Crystals",
    category: "Energy Healing",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.25 PM.jpeg",
    desc: "Hand-selected Amethyst and Tourmaline raw stones for biofield support."
  },
  {
    id: 12,
    title: "Homeopathic Mother Tinctures",
    category: "Homeopathy",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.26 PM.jpeg",
    desc: "Standardized botanical extractions stored in amber glass dropper vials."
  },
  {
    id: 13,
    title: "Energetic Aura Cleansing",
    category: "Energy Healing",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.27 PM (1).jpeg",
    desc: "Sage smudge and crystal coordinates prepared for spatial clearing."
  },
  {
    id: 14,
    title: "Dr. Niyati's Reception Desk",
    category: "Clinic",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.29 PM (1).jpeg",
    desc: "Warm, welcoming reception foyer at our Navrangpura wellness clinic."
  },
  {
    id: 15,
    title: "Clinical Certification",
    category: "Clinic",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.41 PM.jpeg",
    desc: "Professional BHMS registrations and energy healing credentials of Dr. Rana."
  },
  {
    id: 16,
    title: "Activated Crystal Bracelets",
    category: "Energy Healing",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.25.48 PM (1).jpeg",
    desc: "Customized Citrine and Jade bead layouts ready for patient shipping."
  },
  {
    id: 17,
    title: "Holistic Remedy Storage",
    category: "Homeopathy",
    image: "/images/gallery/homeopathy/WhatsApp Image 2026-05-13 at 12.26.03 PM (1).jpeg",
    desc: "Secure, temperature-controlled wooden dispensary drawers preserving remedies."
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = galleryItemsList.filter(
    (item) => activeTab === "All" || item.category === activeTab
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-left relative">
      <div className="text-center space-y-4 mb-12">
        <ScrollReveal direction="down">
          <span className="text-xs font-semibold tracking-widest text-forest-green uppercase block">Visual Showcase</span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal">
            Our Clinic & Healing Gallery
          </h1>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="text-xs md:text-sm text-medium-gray max-w-xl mx-auto mt-4">
            Take a visual tour of our Ahmedabad consultation rooms, our organic homeopathic dispensary, and the serene setups of our energy therapies.
          </p>
        </ScrollReveal>
      </div>

      {/* FILTER TABS */}
      <ScrollReveal direction="up" delay={0.2} className="flex justify-center space-x-2.5 mb-12 flex-wrap gap-y-3">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              closeLightbox();
            }}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeTab === cat
                ? "bg-forest-green text-cream-white shadow-premium-soft"
                : "bg-white text-deep-charcoal hover:bg-sage-green/10 border border-light-gray/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </ScrollReveal>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <ScrollReveal
            key={item.id}
            direction="up"
            delay={index * 0.08}
            className="group relative rounded-3xl overflow-hidden border border-light-gray/45 shadow-premium-soft cursor-pointer bg-white aspect-[4/3]"
            onClick={() => openLightbox(index)}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-w-7xl) 100vw, 350px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

            {/* Hover details */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-cream-white text-left z-10 pointer-events-none">
              <span className="text-[10px] text-sage-green font-accent uppercase tracking-widest block mb-1">
                {item.category}
              </span>
              <h3 className="font-heading text-sm font-bold block mb-1">
                {item.title}
              </h3>
              <p className="text-[10px] text-cream-white/80 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Scale emblem */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/20 p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
              <Search size={14} />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* LIGHTBOX POPUP */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close trigger */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Current image content */}
          <div className="max-w-4xl max-h-[80vh] w-full h-full relative flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-cream-white max-w-lg space-y-1">
              <span className="text-[10px] text-sage-green font-accent uppercase tracking-widest">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-heading text-base font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-medium-gray leading-relaxed">
                {filteredItems[lightboxIndex].desc}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-cream-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* INSTAGRAM REELS SECTION (TASK 2) */}
      <section className="mt-24 border-t border-light-gray/25 pt-16">
        <div className="text-center space-y-4 mb-12">
          <ScrollReveal direction="down">
            <span className="text-xs font-semibold tracking-widest text-forest-green uppercase block">Instagram Insights</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">
              Healing Reels & Holistic Wisdom
            </h2>
            <div className="gold-divider w-20 mx-auto mt-3" />
            <p className="text-xs md:text-sm text-medium-gray max-w-md mx-auto mt-3">
              Explore bite-sized wellness guidance, chakra audits, and healing routines directly from our Instagram feed.
            </p>
          </ScrollReveal>
        </div>

        {/* REELS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instagramReelsList.map((reel, index) => (
            <ScrollReveal
              key={reel.id}
              direction="up"
              delay={index * 0.08}
              className="group relative rounded-3xl overflow-hidden border border-light-gray/40 shadow-premium-soft cursor-pointer bg-white aspect-[9/16] flex flex-col justify-between"
            >
              <a 
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                {/* Thumbnail Image */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                {/* Top Info (Views / Duration) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white text-[10px] font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="flex items-center space-x-1">
                    <FaPlay size={10} className="fill-current" />
                    <span>{reel.views} views</span>
                  </span>
                  <span>{reel.duration}</span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-forest-green group-hover:border-transparent transition-all duration-300 shadow-premium-soft">
                    <FaPlay size={16} className="fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Description */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white space-y-2">
                  <h3 className="font-heading text-xs font-bold leading-snug line-clamp-1">
                    {reel.title}
                  </h3>
                  <p className="text-[10px] text-cream-white/70 leading-relaxed line-clamp-2">
                    {reel.description}
                  </p>
                  
                  {/* Social Counts */}
                  <div className="flex items-center space-x-4 border-t border-white/10 pt-3 text-[10px] text-cream-white/80">
                    <span className="flex items-center space-x-1">
                      <FaHeart size={12} className="text-red-500 fill-current" />
                      <span>{reel.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaComment size={12} className="fill-current" />
                      <span>Comment</span>
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* SOCIAL INTERACTION FOLLOW BOX (TASK 2) */}
        <ScrollReveal direction="up" className="mt-16 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 border border-purple-500/10 rounded-[2.5rem] p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-premium-soft relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#833ab4_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
          
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white flex items-center justify-center mx-auto shadow-premium-soft hover:rotate-12 transition-transform duration-300 relative z-10">
            <FaInstagram size={28} className="fill-current" />
          </div>
          <div className="space-y-2 max-w-md mx-auto relative z-10">
            <h3 className="font-heading text-xl font-bold text-deep-charcoal">Follow @jaimini_healing_centre</h3>
            <p className="text-xs text-medium-gray leading-relaxed">
              Join our growing Instagram sanctuary. Receive everyday healing tips, constitutional medicine updates, spiritual meditations, and live Q&A sessions with Dr. Niyati Rana.
            </p>
          </div>
          <div className="pt-2 relative z-10">
            <a
              href="https://www.instagram.com/jaimini_healing_centre?igsh=MWhqMjVhZDhmNGRzcQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#fd1d1d] text-white font-bold px-8 py-3.5 rounded-full hover:shadow-premium-medium hover:scale-103 transition-all duration-300"
            >
              <span>Follow on Instagram</span>
              <FaInstagram size={14} className="fill-current" />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
