"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  onClick?: () => void;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  onClick,
}: ScrollRevealProps) {
  const getVariants = () => {
    const hiddenState = {
      up: { y: 40, opacity: 0 },
      down: { y: -40, opacity: 0 },
      left: { x: 40, opacity: 0 },
      right: { x: -40, opacity: 0 },
      fade: { opacity: 0 },
    };

    return {
      hidden: hiddenState[direction],
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1] as const, // easeOutQuart
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={getVariants()}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
