'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function BookPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Hide static HTML fallback loader as soon as React component mounts
    if (typeof window !== 'undefined') {
      const el = document.getElementById('initial-loader');
      if (el) {
        el.style.display = 'none';
      }
    }

    // 1. Slow down preloader so logo zoom and smooth fade reveal fully finishes
    const timer1 = setTimeout(() => {
      setIsOpening(true);
    }, 1600);

    const timer2 = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#f8fafc] overflow-hidden select-none pointer-events-none"
        >
          {/* Top Curtain Cover (Ultra Smooth Rise) */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isOpening ? '-100%' : 0 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="absolute top-0 inset-x-0 h-1/2 bg-white border-b border-slate-200/60 shadow-sm z-10"
          />

          {/* Bottom Curtain Cover (Ultra Smooth Fall) */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isOpening ? '100%' : 0 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bottom-0 inset-x-0 h-1/2 bg-white border-t border-slate-200/60 shadow-sm z-10"
          />

          {/* Center Stage Container */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 1.12 : 1,
            }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="relative z-20 flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Soft Cyan/Blue Ambient Glow Behind Logo */}
            <motion.div
              animate={{
                scale: isOpening ? 1.4 : [1, 1.15, 1],
                opacity: isOpening ? 0 : [0.35, 0.6, 0.35],
              }}
              transition={{ duration: isOpening ? 1.0 : 1.4 }}
              className="absolute w-[450px] h-[450px] bg-[#3b5da6]/20 rounded-full blur-3xl"
            />

            {/* NEXALLIANCE LOGO (Smooth & Slow Zoom In Effect) */}
            <motion.div
              initial={{ scale: 0.35, opacity: 0, y: 20 }}
              animate={{
                scale: isOpening ? 1.25 : 1,
                opacity: isOpening ? 0 : 1,
                y: isOpening ? -15 : 0,
              }}
              transition={{
                duration: isOpening ? 1.0 : 1.4,
                ease: isOpening ? [0.65, 0, 0.35, 1] : [0.16, 1, 0.3, 1],
              }}
              className="relative w-80 sm:w-[440px] h-32 sm:h-36 flex items-center justify-center"
            >
              <Image
                src="/assets/images/logo.png"
                alt="NexAlliance Logo"
                fill
                priority
                sizes="500px"
                className="object-contain filter drop-shadow-lg"
              />
            </motion.div>

            {/* Subtitle Loading Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: isOpening ? 0 : 1,
                y: isOpening ? 10 : 0,
              }}
              transition={{ duration: isOpening ? 0.7 : 0.9, delay: 0.3 }}
              className="mt-6 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#3b5da6] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-extrabold text-[#25294a] uppercase tracking-[0.25em]">
                INITIALIZING NEXALLIANCE...
              </span>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
