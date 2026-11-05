"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Pause, Play, CheckCircle2 } from "lucide-react";

export interface ReviewItem {
  text: string;
  author: string;
  details: string;
  rating?: number;
  date?: string;
}

export const defaultReviews: ReviewItem[] = [
  {
    text: "Dr. Niyati's personalized homeopathy treatment completely transformed my mobility. I can now walk and stay active without constant joint locking. Her care is truly exceptional.",
    author: "Rajesh Kumar",
    details: "Chronic Joint Discomfort | Ahmedabad",
    rating: 5,
    date: "2 months ago",
  },
  {
    text: "The Reiki healing sessions gave me peace I've never experienced before. Combined with her gentle homeopathic advice, I've regained my baseline energy and confidence.",
    author: "Priya Sharma",
    details: "Severe Stress & Fatigue | Ahmedabad",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Dr. Niyati didn't just treat my thyroid; she addressed my stress, digestion, and daily routine. Her constitutional matching is highly detailed and genuinely compassionate.",
    author: "Amit Patel",
    details: "Thyroid & IBS Recovery | Ahmedabad",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "Her home visit consultation for my elderly mother was a blessing. Dr. Niyati took over an hour to understand every subtle symptom. The improvement in mother's chronic migraine has been remarkable.",
    author: "Neha Trivedi",
    details: "Migraine & Geriatric Care | Maninagar",
    rating: 5,
    date: "4 months ago",
  },
  {
    text: "As an allopathic physician myself, I was amazed by Dr. Niyati's rigorous case-taking and constitutional homeopathic prescribing. My allergic asthma is virtually gone.",
    author: "Dr. Sanjay Mehta",
    details: "Allergic Asthma & Allergy | Ahmedabad",
    rating: 5,
    date: "2 months ago",
  },
  {
    text: "The custom crystal bracelet and energy healing Dr. Niyati curated brought such emotional calm and grounding to my work life. Highly recommended for mind-body balance.",
    author: "Kavita Joshi",
    details: "Aura & Crystal Healing | Ahmedabad",
    rating: 5,
    date: "5 months ago",
  },
  {
    text: "Saved me from invasive surgery! With Dr. Niyati's homeopathic remedy plan, my 6mm kidney stone cleared painlessly within 3 weeks. Truly a gifted and ethical doctor.",
    author: "Bhavik Shah",
    details: "Renal Stone Treatment | Ahmedabad",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "After struggling with hormonal imbalance and PCOS for over three years, her gentle constitutional medicines normalized my cycles within four months. Immensely grateful!",
    author: "Meera Desai",
    details: "PCOS & Hormonal Health | Ahmedabad",
    rating: 5,
    date: "3 months ago",
  },
];

interface ReviewCardsScrollProps {
  reviews?: ReviewItem[];
}

export default function ReviewCardsScroll({ reviews = defaultReviews }: ReviewCardsScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);

  const isPaused = isHovered || isManualPaused;
  const posRef = useRef(0);

  // Duplicate reviews array to create an infinite ribbon
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    posRef.current = el.scrollLeft;

    let animId: number;
    let lastTime = performance.now();
    const speed = 36; // px per second

    const step = (now: number) => {
      const elapsed = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isPaused && el) {
        posRef.current += speed * elapsed;

        const maxScroll = el.scrollWidth / 2;
        if (posRef.current >= maxScroll) {
          posRef.current -= maxScroll;
        }
        el.scrollLeft = posRef.current;
      } else if (el) {
        posRef.current = el.scrollLeft;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth / 2;
    if (el.scrollLeft >= maxScroll) {
      el.scrollLeft -= maxScroll;
      posRef.current = el.scrollLeft;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += maxScroll;
      posRef.current = el.scrollLeft;
    } else {
      posRef.current = el.scrollLeft;
    }
  }, []);

  const scrollByAmount = (amount: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
    posRef.current = el.scrollLeft + amount;
  };

  return (
    <div className="space-y-4">
      {/* Interactive Controls & Status Bar */}
      <div className="flex items-center justify-between px-2 text-xs">
        {/* Status indicator */}
        <div className="flex items-center space-x-2 text-medium-gray select-none">
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isPaused ? "bg-warm-gold animate-pulse" : "bg-forest-green"
            }`}
          />
          <span className="text-[11px] font-medium hidden sm:inline">
            {isPaused ? "Paused on hover (scrollable)" : "Auto-scrolling • Hover to pause"}
          </span>
          <span className="text-[11px] font-medium sm:hidden">
            {isPaused ? "Paused" : "Auto-scrolling"}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-1.5">
          <button
            type="button"
            onClick={() => setIsManualPaused(!isManualPaused)}
            className="p-2 rounded-full border border-light-gray/60 bg-white hover:bg-off-white text-deep-charcoal transition-colors duration-200 shadow-premium-soft cursor-pointer"
            aria-label={isManualPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            title={isManualPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          >
            {isManualPaused ? <Play size={13} /> : <Pause size={13} />}
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(-380)}
            className="p-2 rounded-full border border-light-gray/60 bg-white hover:bg-forest-green hover:text-white text-deep-charcoal transition-colors duration-200 shadow-premium-soft cursor-pointer"
            aria-label="Scroll left"
            title="Scroll left"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(380)}
            className="p-2 rounded-full border border-light-gray/60 bg-white hover:bg-forest-green hover:text-white text-deep-charcoal transition-colors duration-200 shadow-premium-soft cursor-pointer"
            aria-label="Scroll right"
            title="Scroll right"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-off-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-off-white to-transparent" />

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsHovered(false), 1200);
          }}
          className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2 md:px-6 cursor-grab active:cursor-grabbing select-none"
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.author}-${index}`}
              className="bg-white border border-light-gray/40 rounded-3xl p-6 shadow-premium-soft flex flex-col justify-between hover:border-warm-gold/60 hover:shadow-premium-medium hover:-translate-y-1.5 transition-all duration-300 w-[300px] sm:w-[350px] md:w-[380px] shrink-0 text-left group"
            >
              {/* Header: Stars & Google Badge */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-warm-gold">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* Google Review Badge */}
                  <div className="inline-flex items-center space-x-1.5 text-[10px] font-medium text-medium-gray bg-off-white/80 px-2.5 py-0.5 rounded-full border border-light-gray/40">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs text-medium-gray leading-relaxed italic group-hover:text-deep-charcoal transition-colors duration-200">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Footer: Author & Details */}
              <div className="pt-4 mt-4 border-t border-light-gray/25 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-heading text-xs font-bold text-deep-charcoal block">
                      {review.author}
                    </span>
                    <CheckCircle2 size={11} className="text-forest-green" />
                  </div>
                  <span className="text-[10px] text-forest-green font-medium block">
                    {review.details}
                  </span>
                </div>
                {review.date && (
                  <span className="text-[9px] text-medium-gray/80 shrink-0">
                    {review.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

