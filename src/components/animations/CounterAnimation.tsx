"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterAnimationProps {
  target: number;
  duration?: number; // in seconds
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CounterAnimation({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const countRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
