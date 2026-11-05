"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  // Default breadcrumbs if not provided
  const items = breadcrumbs || [
    { name: "Home", href: "/" },
    { name: title },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#03231a] via-forest-green to-[#0d3f32] text-cream-white py-16 md:py-24 border-b border-light-gray/10 shadow-premium-soft flex flex-col items-center justify-center text-center">
      {/* Premium glowing bio-field overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(196,214,198,0.15),transparent_50%)] pointer-events-none" />
      
      {/* Luxury gold sparkle details */}
      <div className="absolute top-1/4 left-10 md:left-24 opacity-20 animate-pulse">
        <Sparkles size={16} className="text-warm-gold" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-24 opacity-20 animate-pulse [animation-delay:1000ms]">
        <Sparkles size={20} className="text-warm-gold" />
      </div>

      {/* Abstract sacred geometry coordinate dots */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
        {/* Breadcrumbs */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center space-x-1.5 text-[10px] md:text-xs font-semibold tracking-wider text-sage-green uppercase"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                {item.href && !isLast ? (
                  <Link 
                    href={item.href}
                    className="hover:text-warm-gold transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-warm-gold font-bold">{item.name}</span>
                )}
                {!isLast && <ChevronRight size={10} className="text-sage-green/60" />}
              </React.Fragment>
            );
          })}
        </motion.nav>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>
          <div className="gold-divider w-24 mx-auto mt-2" />
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs md:text-sm text-sage-green/90 leading-relaxed max-w-xl mx-auto font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
