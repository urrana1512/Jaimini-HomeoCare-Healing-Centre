"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquare, ChevronDown, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const serviceDropdownItems = [
  { name: "Homeopathy Consultation", href: "/services/homeopathy" },
  { name: "Reiki Healing", href: "/services/reiki-healing" },
  { name: "Lama Fera Healing", href: "/services/lama-fera" },
  { name: "Tarot Card Reading", href: "/services/tarot-reading" },
  { name: "Crystal Products", href: "/services/crystal-products" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true, dropdownItems: serviceDropdownItems },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openCart, cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for border/background
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-white/95 backdrop-blur-md shadow-premium-soft border-b border-light-gray/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="group flex items-center space-x-2.5 md:space-x-3">
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0">
              <Image
                src="/images/jaimini_logo.png?v=2"
                alt="Jaimini Homeocare Logo"
                fill
                sizes="44px"
                unoptimized
                className="object-contain filter group-hover:rotate-12 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-base md:text-lg lg:text-xl font-bold text-forest-green tracking-wide leading-tight transition-colors group-hover:text-warm-gold duration-300">
                Jaimini Homeocare
              </span>
              <span className="text-[9px] md:text-[10px] font-accent tracking-[0.2em] uppercase text-medium-gray group-hover:text-forest-green transition-colors duration-300">
                & Healing Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium text-sm transition-colors duration-300 ${
                        isActive ? "text-forest-green" : "text-deep-charcoal hover:text-forest-green"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 rounded-xl bg-cream-white shadow-premium-medium border border-light-gray/30 p-2 z-50"
                        >
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`block px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-sage-green/10 hover:text-forest-green ${
                                pathname === item.href ? "text-forest-green bg-sage-green/10" : "text-deep-charcoal"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group py-1 text-sm font-medium transition-colors duration-300"
                >
                  <span className={isActive ? "text-forest-green" : "text-deep-charcoal hover:text-forest-green"}>
                    {link.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-warm-gold transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Wishlist Link */}
            <Link
              href="/wishlist"
              className="relative p-2 rounded-full hover:bg-sage-green/15 text-deep-charcoal hover:text-forest-green transition-all"
              title="Wishlist"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-sage-green/15 text-deep-charcoal hover:text-forest-green transition-all cursor-pointer"
              title="View Cart"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-forest-green text-cream-white text-[9px] font-bold flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop WhatsApp CTA */}
            <a
              href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-forest-green text-cream-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-forest-green/95 shadow-premium-soft hover:shadow-premium-medium transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-warm-gold group ml-1"
            >
              <MessageSquare size={14} className="text-sage-green group-hover:scale-110 transition-transform" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={openCart}
              className="relative p-2 text-deep-charcoal hover:text-forest-green"
              aria-label="Open Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-forest-green text-cream-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-charcoal hover:text-forest-green p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-cream-white border-l border-light-gray"
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-light-gray/50">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2.5">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/images/jaimini_logo.png?v=2"
                    alt="Jaimini Homeocare Logo"
                    fill
                    sizes="32px"
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-heading text-sm font-bold text-forest-green">Jaimini Homeocare</span>
                  <span className="text-[8px] font-accent uppercase tracking-wider text-medium-gray">& Healing Centre</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-deep-charcoal hover:text-forest-green p-1"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-medium-gray block">
                        {link.name}
                      </span>
                      <div className="pl-4 border-l border-sage-green space-y-4">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block font-medium text-base transition-colors ${
                              pathname === item.href ? "text-forest-green" : "text-deep-charcoal hover:text-forest-green"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-heading text-2xl font-semibold transition-colors ${
                      isActive ? "text-forest-green" : "text-deep-charcoal hover:text-forest-green"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="p-6 border-t border-light-gray/50 bg-off-white/50 space-y-4">
              <a
                href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-forest-green text-cream-white font-medium py-3.5 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300"
              >
                <MessageSquare size={16} className="text-sage-green" />
                <span>Book via WhatsApp</span>
              </a>
              <a
                href="tel:+919316356317"
                className="flex items-center justify-center space-x-2 w-full bg-white text-forest-green border border-forest-green font-medium py-3.5 rounded-full hover:bg-sage-green/10 transition-all duration-300"
              >
                <span>Call +91 93163 56317</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
