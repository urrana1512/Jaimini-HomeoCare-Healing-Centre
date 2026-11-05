"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, Mail, MapPin, Award, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-charcoal text-off-white border-t border-light-gray/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/jaimini_logo.png?v=2"
                  alt="Jaimini Homeocare Logo"
                  fill
                  sizes="48px"
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-cream-white tracking-wide block">
                  Jaimini Homeocare
                </span>
                <span className="text-[9px] font-accent uppercase tracking-[0.2em] text-sage-green block">
                  & Healing Centre
                </span>
              </div>
            </div>
            <p className="text-xs text-medium-gray leading-relaxed max-w-sm">
              Dr. Niyati Rana provides world-class holistic healing for complete mind, body, and spirit transformation. Specializing in constitutional Homeopathy and profound energy therapies.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center hover:bg-forest-green hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center hover:bg-forest-green hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-warm-gold border-b border-light-gray/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-medium-gray">
              <li>
                <Link href="/" className="hover:text-warm-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-warm-gold transition-colors duration-200">
                  About Dr. Niyati Rana
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-warm-gold transition-colors duration-200">
                  Our Healing Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-warm-gold transition-colors duration-200">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-warm-gold transition-colors duration-200">
                  Healing Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-warm-gold transition-colors duration-200">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Support */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-warm-gold border-b border-light-gray/10 pb-2">
              Service Hours
            </h3>
            <ul className="space-y-3 text-xs text-medium-gray">
              <li className="flex items-start space-x-2.5">
                <Clock size={16} className="text-sage-green mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-off-white block">Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock size={16} className="text-sage-green mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-off-white block">Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Award size={16} className="text-warm-gold mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-off-white block">Sunday</span>
                  <span className="text-sage-green">Emergency consultations only</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-warm-gold border-b border-light-gray/10 pb-2">
              Location & Contact
            </h3>
            <ul className="space-y-3.5 text-xs text-medium-gray">
              <li className="flex items-start space-x-2.5">
                <a
                  href="https://www.google.com/maps/place/Jaimini+Homeocare+%26+Healing+Centre/@23.008198,72.617178,200m/data=!3m1!1e3!4m6!3m5!1s0x395e870ba3a6310f:0x1c562d98662c5ec5!8m2!3d23.0082689!4d72.617337!16s%2Fg%2F11njnjh0wj?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-green mt-0.5 shrink-0 hover:text-warm-gold transition-colors"
                  aria-label="View on Google Maps"
                >
                  <MapPin size={16} />
                </a>
                <div className="space-y-1">
                  <a 
                    href="https://www.google.com/maps/place/Jaimini+Homeocare+%26+Healing+Centre/@23.008198,72.617178,200m/data=!3m1!1e3!4m6!3m5!1s0x395e870ba3a6310f:0x1c562d98662c5ec5!8m2!3d23.0082689!4d72.617337!16s%2Fg%2F11njnjh0wj?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-warm-gold transition-colors block leading-relaxed"
                  >
                    C-108 Saujanya Apartment, Nr. Anupam Cinema, Khokhra road, Ahmedabad - 380021
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-sage-green shrink-0" />
                <a href="tel:+919316356317" className="hover:text-warm-gold transition-colors">
                  +91 93163 56317
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <MessageSquare size={16} className="text-sage-green shrink-0" />
                <a
                  href="https://wa.me/919316356317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-gold transition-colors font-medium text-off-white"
                >
                  WhatsApp Consultation
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-sage-green shrink-0" />
                <a href="mailto:nrrana2002@gmail.com" className="hover:text-warm-gold transition-colors">
                  nrrana2002@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Golden line accent */}
        <div className="gold-divider my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-medium-gray space-y-4 sm:space-y-0">
          <p>&copy; {currentYear} Jaimini Homeocare & Healing Centre. All rights reserved.</p>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => {
                sessionStorage.removeItem("jaimini_intro_played");
                window.dispatchEvent(new CustomEvent("replay-jaimini-intro"));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-warm-gold transition-colors cursor-pointer focus:outline-none text-xs"
            >
              Replay Intro
            </button>
            <span className="text-light-gray/20 text-[10px]">|</span>
            <Link href="/contact" className="hover:text-warm-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-light-gray/20 text-[10px]">|</span>
            <Link href="/contact" className="hover:text-warm-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
