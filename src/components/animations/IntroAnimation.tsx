"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Web Audio API Synthesizer Class for Dynamic Sound Design
class WebAudioSynth {
  private ctx: AudioContext | null = null;
  private mainGain: GainNode | null = null;
  private padOscs: OscillatorNode[] = [];
  private padGain: GainNode | null = null;
  private isMuted: boolean = true;

  constructor(isMuted: boolean) {
    this.isMuted = isMuted;
  }

  private init() {
    if (typeof window === "undefined") return;
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    try {
      this.ctx = new AudioContextClass();
      this.mainGain = this.ctx.createGain();
      this.mainGain.gain.setValueAtTime(this.isMuted ? 0 : 0.6, this.ctx.currentTime);
      this.mainGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Failed to initialize Web Audio context:", e);
    }
  }

  setMute(muted: boolean) {
    this.isMuted = muted;
    this.init();
    if (this.mainGain && this.ctx) {
      const targetGain = muted ? 0 : 0.6;
      this.mainGain.gain.linearRampToValueAtTime(targetGain, this.ctx.currentTime + 0.15);
    }
  }

  playPad() {
    this.init();
    if (!this.ctx || !this.mainGain) return;

    // Soothing ambient pad: multi-oscillator chord (C major / G major feel)
    // Frequencies: C3 (130.81 Hz), G3 (196.00 Hz), C4 (261.63 Hz), E4 (329.63 Hz)
    const freqs = [130.81, 196.00, 261.63, 329.63];
    
    try {
      this.padGain = this.ctx.createGain();
      this.padGain.gain.setValueAtTime(0, this.ctx.currentTime);
      // Slow warm attack
      this.padGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 2.5);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(350, this.ctx.currentTime); // Warm cutoff

      this.padGain.connect(filter);
      filter.connect(this.mainGain);

      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.padGain) return;
        const osc = this.ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        // Detuning for lush chorusing
        osc.detune.setValueAtTime(idx % 2 === 0 ? 8 : -8, this.ctx.currentTime);
        
        osc.connect(this.padGain);
        osc.start();
        this.padOscs.push(osc);
      });
    } catch (e) {
      console.warn("Error playing pad synthesizer:", e);
    }
  }

  stopPad() {
    if (this.padGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.padGain.gain.linearRampToValueAtTime(0, now + 1.2); // Smooth release
        
        const oscsToStop = [...this.padOscs];
        this.padOscs = [];
        
        setTimeout(() => {
          oscsToStop.forEach(o => {
            try { o.stop(); } catch(e){}
          });
        }, 1300);
      } catch (e) {
        this.padOscs = [];
      }
    }
  }

  playChime(freq: number, duration: number = 1.5, type: OscillatorType = "sine", gainVal: number = 0.25) {
    this.init();
    if (!this.ctx || !this.mainGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator(); // 5th harmonic overtone
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(freq * 1.5, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gainVal, now + 0.05); // Rapid attack
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Long bell decay

      // Delay/Echo effect
      const delay = this.ctx.createDelay();
      delay.delayTime.setValueAtTime(0.22, now);
      const delayGain = this.ctx.createGain();
      delayGain.gain.setValueAtTime(0.12, now);

      osc.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(this.mainGain);

      gainNode.connect(delay);
      delay.connect(delayGain);
      delayGain.connect(this.mainGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + duration + 0.5);
      osc2.stop(now + duration + 0.5);
    } catch (e) {
      console.warn("Chime synth failed:", e);
    }
  }

  playKeyboardClick() {
    this.init();
    if (!this.ctx || !this.mainGain || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.015; // 15ms click
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(10, now);

      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.mainGain);

      noise.start(now);
    } catch(e){}
  }
}

// Custom Specialty Icons represented as SVGs
const MortarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.242c0 .289.139.56.378.718l2.25 1.5a.9.9 0 001.244-.212l.718-.957a.9.9 0 011.244-.212l2.25 1.5c.24.159.378.43.378.719v1.242" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0 4.142-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12h15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v1.5m0-13.5v1.5m0 3v1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12v3.75m9-3.75v3.75" />
  </svg>
);

const EnergyHandsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m-7.071-14.071l2.121 2.121m9.9 9.9l2.121 2.121m-14.142 0l2.121-2.121m9.9-9.9l2.121-2.121" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14c-1.5 1-2 2.5-2 4h16c0-1.5-.5-3-2-4" />
  </svg>
);

const LotusIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2-3-4-5-4-8.5s2-5.5 4-8.5c2 3 4 5 4 8.5s-2 5.5-4 8.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-2-6-5-6-8s2.5-4.5 5.5-6.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.5-2 6-5 6-8s-2.5-4.5-5.5-6.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2-1-4-2-6-2s-3 .5-3 1.5h18c0-1-1-1.5-3-1.5s-4 1-6 2z" />
  </svg>
);

const TarotCardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
    <rect x="5" y="3" width="14" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v1m0 6v1m-4-4h1m6 0h1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8M8 18h8" />
  </svg>
);

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [activeSpecialtyIndex, setActiveSpecialtyIndex] = useState<number | null>(null);
  const synthRef = useRef<WebAudioSynth | null>(null);

  // Setup dynamic sound engine
  useEffect(() => {
    const synth = new WebAudioSynth(isMuted);
    synthRef.current = synth;
    
    if (!isMuted) {
      synth.playPad();
      
      // Schedule SFX chimes aligned with visual states
      const tChime1 = setTimeout(() => synth.playChime(523.25, 2.0, "sine", 0.22), 500); // C5 - Logo reveal start
      
      const tChime2 = setTimeout(() => {
        synth.playChime(587.33, 1.2, "sine", 0.12); // D5
        synth.playChime(659.25, 1.2, "sine", 0.12); // E5
        synth.playChime(783.99, 1.8, "sine", 0.15); // G5 - Wings open shimmer
      }, 1200);

      const tChime3 = setTimeout(() => synth.playChime(392.00, 2.2, "sine", 0.25), 1500); // G4 - Caduceus highlights

      // Typewriter clicks for "DR. NIYATI RANA"
      const nameLength = 15;
      const clickTimers: NodeJS.Timeout[] = [];
      for (let i = 0; i < nameLength; i++) {
        // Skip spaces to sound more realistic
        if (i === 2 || i === 3 || i === 10) continue;
        const timer = setTimeout(() => {
          synth.playKeyboardClick();
        }, 3000 + i * 65);
        clickTimers.push(timer);
      }

      const tChime4 = setTimeout(() => synth.playChime(880.00, 2.5, "sine", 0.2), 4000); // A5 - Name typed chime

      // Specialties ascending bell tones
      const tSpec1 = setTimeout(() => synth.playChime(261.63, 1.8, "sine", 0.25), 4500); // C4
      const tSpec2 = setTimeout(() => synth.playChime(329.63, 1.8, "sine", 0.25), 5200); // E4
      const tSpec3 = setTimeout(() => synth.playChime(392.00, 1.8, "sine", 0.25), 5900); // G4
      const tSpec4 = setTimeout(() => synth.playChime(523.25, 2.2, "sine", 0.3), 6600); // C5

      const tCta = setTimeout(() => {
        synth.playChime(659.25, 1.5, "sine", 0.2); // E5
        setTimeout(() => synth.playChime(987.77, 2.0, "sine", 0.15), 120); // B5 - CTA sound
      }, 6500);

      return () => {
        synth.stopPad();
        clearTimeout(tChime1);
        clearTimeout(tChime2);
        clearTimeout(tChime3);
        clearTimeout(tChime4);
        clearTimeout(tSpec1);
        clearTimeout(tSpec2);
        clearTimeout(tSpec3);
        clearTimeout(tSpec4);
        clearTimeout(tCta);
        clickTimers.forEach(clearTimeout);
      };
    } else {
      synth.stopPad();
    }
  }, [isMuted]);

  // Handle specialty switching timings
  useEffect(() => {
    const t0 = setTimeout(() => setActiveSpecialtyIndex(0), 4500);
    const t1 = setTimeout(() => setActiveSpecialtyIndex(1), 5200);
    const t2 = setTimeout(() => setActiveSpecialtyIndex(2), 5900);
    const t3 = setTimeout(() => setActiveSpecialtyIndex(3), 6600);
    
    // Auto transition to main page at 8.5s
    const tComplete = setTimeout(() => {
      handleComplete();
    }, 8500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tComplete);
    };
  }, []);

  // Monitor user scrolling to auto dismiss overlay
  useEffect(() => {
    const handleScrollDismiss = () => {
      handleComplete();
    };
    window.addEventListener("scroll", handleScrollDismiss);
    return () => window.removeEventListener("scroll", handleScrollDismiss);
  }, []);

  const handleComplete = () => {
    if (isExiting) return;
    setIsExiting(true);
    if (synthRef.current) {
      synthRef.current.stopPad();
    }
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(prev => !prev);
  };

  // Background floating particles configuration
  const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; duration: number; delay: number; }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -10,
    }));
    setParticles(generated);
  }, []);

  // Specialties data
  const specialties = [
    { name: "Homeopathy Doctor", color: "#0B6B4F", icon: <MortarIcon /> },
    { name: "Reiki Healing", color: "#6A5AE0", icon: <EnergyHandsIcon /> },
    { name: "Lama Fera Healing", color: "#B76E79", icon: <LotusIcon /> },
    { name: "Tarot Card Reader", color: "#4A7C8F", icon: <TarotCardIcon /> }
  ];

  // Letter by letter animation setup for name reveal
  const nameText = "DR. NIYATI RANA";
  const nameChars = Array.from(nameText);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="intro-animation-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-tr from-[#C4D6C6] via-[#FAFAF8] to-[#FAFAF8] text-[#1A1A1A] overflow-hidden select-none"
        >
          {/* Gentle particle background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {particles.map(p => (
              <motion.div
                key={p.id}
                initial={{ x: `${p.x}vw`, y: "110vh", opacity: 0 }}
                animate={{
                  y: "-10vh",
                  opacity: [0, 0.4, 0.4, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute rounded-full bg-[#D4AF37] blur-[1px]"
                style={{ width: p.size, height: p.size }}
              />
            ))}
          </div>

          {/* Top Controls Bar */}
          <div className="absolute top-6 right-6 z-50">
            {/* Skip Button */}
            <motion.button
              onClick={handleComplete}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-black/5 shadow-premium-soft hover:shadow-premium-medium transition-all text-xs font-semibold text-[#0B6B4F] cursor-pointer"
            >
              <span>Skip</span>
              <ArrowRight size={12} />
            </motion.button>
          </div>

          {/* Content Wrapper */}
          <div className="flex flex-col items-center justify-center max-w-2xl px-6 text-center space-y-6 md:space-y-8">
            
            {/* Official Logo Container */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.85,
                clipPath: "circle(0% at 50% 50%)"
              }}
              animate={{
                opacity: 1,
                scale: [1, 1.015, 0.985, 1],
                clipPath: "circle(100% at 50% 50%)",
                filter: [
                  "drop-shadow(0 4px 6px rgba(11, 107, 79, 0.03))",
                  "drop-shadow(0 10px 16px rgba(212, 175, 55, 0.12))",
                  "drop-shadow(0 4px 6px rgba(11, 107, 79, 0.03))",
                ],
              }}
              transition={{
                opacity: { delay: 0.5, duration: 1.0, ease: "easeOut" },
                clipPath: { delay: 0.5, duration: 1.2, ease: "easeInOut" },
                scale: {
                  delay: 1.8,
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                filter: {
                  delay: 1.8,
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center"
            >
              <img
                src="/images/jaimini_logo.png"
                alt="Jaimini Homeocare & Healing Centre Logo"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>

            {/* Name, Tagline & Specialties wrapper */}
            <div className="space-y-3 md:space-y-4 flex flex-col items-center">
              
              {/* Centre Brand Name (fades in right before Dr. Niyati Rana) */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
                className="font-heading text-xs md:text-sm tracking-[0.25em] text-[#0B6B4F] uppercase font-bold opacity-85"
              >
                Jaimini Homeocare & Healing Centre
              </motion.div>

              {/* Name Reveal: "DR. NIYATI RANA" Letter by Letter (3.0s - 4.0s) */}
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.08em] text-[#0B6B4F] flex items-center justify-center">
                {nameChars.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 3.0 + index * 0.06,
                      duration: 0.1,
                      ease: "linear",
                    }}
                    style={{ display: char === " " ? "inline-block" : "inline" }}
                    className="select-none"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>

              {/* Tagline Reveal: "HEALING • CARE • EXCELLENCE" (4.0s - 4.5s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.0, duration: 0.5, ease: "easeOut" }}
                className="font-accent text-xs md:text-sm font-semibold tracking-[0.35em] text-[#D4AF37] uppercase"
              >
                Healing <span className="mx-1.5 opacity-60">•</span> Care <span className="mx-1.5 opacity-60">•</span> Excellence
              </motion.div>

              {/* Specialties Sequential Reveal Container (4.5s - 7.3s) */}
              <div className="h-[60px] flex items-center justify-center relative w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeSpecialtyIndex !== null && (
                    <motion.div
                      key={activeSpecialtyIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="flex items-center space-x-3"
                    >
                      <span style={{ color: specialties[activeSpecialtyIndex].color }} className="opacity-90">
                        {specialties[activeSpecialtyIndex].icon}
                      </span>
                      <span
                        className="font-heading text-xl md:text-2xl font-medium tracking-wide"
                        style={{ color: "#0B6B4F" }}
                      >
                        {specialties[activeSpecialtyIndex].name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button Reveal (6.5s - 7.0s) & Pulse from 7.0s */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 6.5,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="pt-4"
            >
              <motion.button
                onClick={handleComplete}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(212, 175, 55, 0)",
                    "0 0 0 10px rgba(212, 175, 55, 0.2)",
                    "0 0 0 0 rgba(212, 175, 55, 0)",
                  ],
                }}
                transition={{
                  delay: 7.0,
                  duration: 2.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0B6B4F] to-[#08533d] text-[#FAFAF8] border border-[#D4AF37] font-semibold text-sm tracking-widest uppercase shadow-premium-medium hover:shadow-premium-soft transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                <span>Begin Your Healing Journey</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Skip Instruction in Footer */}
          <div className="absolute bottom-6 font-accent text-[10px] tracking-wider text-black/40">
            Scroll or click anywhere to begin
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
