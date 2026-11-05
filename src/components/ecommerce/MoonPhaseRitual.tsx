"use client";

import React from "react";
import { Moon, Sparkles, Sun, Droplets, Wind, ShieldCheck } from "lucide-react";

export default function MoonPhaseRitual() {
  return (
    <div className="bg-gradient-to-br from-[#122820] to-forest-green text-cream-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden space-y-8">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-warm-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-warm-gold text-[10px] font-bold uppercase tracking-wider">
            <Moon size={12} />
            <span>Lunar Energization Guide</span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream-white">
            Upcoming Moon Cleansing Cycles
          </h3>
        </div>
        <p className="text-xs text-cream-white/70 max-w-sm">
          Crystalline minerals absorb environmental static over 30 days. Aligning with lunar rhythms resets their piezoelectric frequency.
        </p>
      </div>

      {/* Moon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Full Moon Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-warm-gold/20 flex items-center justify-center text-warm-gold">
                <Moon size={20} className="fill-warm-gold" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-warm-gold tracking-widest block">Full Moon Ritual</span>
                <h4 className="font-heading text-base font-bold text-cream-white">Supercharged Amplification</h4>
              </div>
            </div>
            <span className="text-[11px] bg-white/15 px-2.5 py-1 rounded-full font-semibold text-white">Monthly</span>
          </div>

          <p className="text-xs text-cream-white/80 leading-relaxed">
            Place your bracelets and crystals on a clean windowsill or balcony under direct moonlight from 9:00 PM to 4:00 AM to infuse peak vitality.
          </p>

          <div className="flex items-center space-x-2 text-[11px] text-warm-gold font-medium pt-2 border-t border-white/10">
            <Sparkles size={12} />
            <span>Best for: Citrine, Amethyst, Clear Quartz, Rose Quartz</span>
          </div>
        </div>

        {/* New Moon Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-sage-green/20 flex items-center justify-center text-sage-green">
                <Sun size={20} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-sage-green tracking-widest block">New Moon Ritual</span>
                <h4 className="font-heading text-base font-bold text-cream-white">Intention Setting & Reset</h4>
              </div>
            </div>
            <span className="text-[11px] bg-white/15 px-2.5 py-1 rounded-full font-semibold text-white">Monthly</span>
          </div>

          <p className="text-xs text-cream-white/80 leading-relaxed">
            Cleanse stones over a Selenite charging slab or Palo Santo smoke, then hold them in your palms while reciting your 30-day focus affirmation.
          </p>

          <div className="flex items-center space-x-2 text-[11px] text-sage-green font-medium pt-2 border-t border-white/10">
            <Sparkles size={12} />
            <span>Best for: Black Tourmaline, Pyrite, Obsidian, Labradorite</span>
          </div>
        </div>
      </div>
    </div>
  );
}
