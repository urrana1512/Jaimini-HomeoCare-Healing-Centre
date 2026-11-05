"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles, MessageSquare, ArrowRight, Package, Truck, HeartHandshake } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

export default function OrderConfirmationPage() {
  return (
    <div className="pb-24 space-y-12 text-left bg-cream-white min-h-screen">
      <PageHeader
        title="Order Received with Blessings"
        subtitle="Thank you for choosing Jaimini Homeocare & Healing Centre."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Crystal Products", href: "/services/crystal-products" },
          { name: "Order Confirmation" },
        ]}
      />

      <section className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-light-gray/40 shadow-premium-soft text-center space-y-8">
          {/* Badge */}
          <div className="w-20 h-20 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={42} />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-warm-gold/20 text-deep-charcoal text-[11px] font-bold uppercase tracking-wider">
              <Sparkles size={12} className="text-warm-gold" />
              <span>Sacred Order Registered</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-deep-charcoal">
              Your Crystal Order is in Motion
            </h2>
            <p className="text-xs md:text-sm text-medium-gray max-w-md mx-auto leading-relaxed">
              Dr. Niyati Rana and our healing team have received your request. We are preparing your minerals with personalized Usui Reiki attunements.
            </p>
          </div>

          {/* 3 Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
            <div className="bg-off-white p-4 rounded-2xl border border-light-gray/30 space-y-1.5">
              <div className="flex items-center space-x-2 text-forest-green">
                <HeartHandshake size={16} />
                <span className="font-bold text-xs">Step 1: Attunement</span>
              </div>
              <p className="text-[11px] text-medium-gray">Stones are cleansed and coded with your specific intention.</p>
            </div>

            <div className="bg-off-white p-4 rounded-2xl border border-light-gray/30 space-y-1.5">
              <div className="flex items-center space-x-2 text-forest-green">
                <Package size={16} />
                <span className="font-bold text-xs">Step 2: Sacred Packing</span>
              </div>
              <p className="text-[11px] text-medium-gray">Sealed in velvet pouch with care manual & moon calendar.</p>
            </div>

            <div className="bg-off-white p-4 rounded-2xl border border-light-gray/30 space-y-1.5">
              <div className="flex items-center space-x-2 text-forest-green">
                <Truck size={16} />
                <span className="font-bold text-xs">Step 3: Dispatch</span>
              </div>
              <p className="text-[11px] text-medium-gray">Shipped via express courier with tracking on WhatsApp.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-light-gray/30">
            <a
              href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20check%20my%20recent%20crystal%20order%20status."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs tracking-wider uppercase shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </a>

            <Link
              href="/services/crystal-products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-forest-green text-cream-white font-bold text-xs tracking-wider uppercase hover:bg-forest-green/95 shadow-premium-soft flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Back to Crystal Store</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
