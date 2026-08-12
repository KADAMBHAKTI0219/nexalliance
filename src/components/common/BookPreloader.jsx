'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Phase 1: Start retracting overlay to bottom-right corner after 2200ms
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 2200);

    // Phase 2: Unmount preloader after 3800ms (3.8 seconds total smooth duration)
    const finishTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="nex-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] overflow-hidden select-none pointer-events-none flex items-center justify-center bg-transparent"
        >
          {/* ================= LIGHT GRADIENT OVERLAY OPENING FROM BOTTOM-RIGHT CORNER ================= */}
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 100%)' }}
            animate={{
              clipPath: isOpening
                ? 'circle(0% at 100% 100%)'
                : 'circle(150% at 100% 100%)',
            }}
            transition={{
              duration: isOpening ? 1.4 : 1.1,
              ease: [0.65, 0, 0.35, 1], // Smooth, luxurious ease-in-out curve
            }}
            className="absolute inset-0 bg-gradient-to-br from-white via-[#f4f7ff] to-[#e4ecff] flex items-center justify-center"
          >
            {/* Ambient Soft Gradient Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#3b5da6]/12 via-[#8b5cf6]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#3b5da6]/18 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* ================= CENTER CONTENT CONTAINER ================= */}
            <div className="relative z-30 flex flex-col items-center justify-center">
              
              {/* Soft Ambient Logo Glow */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{
                  scale: isOpening ? 1.3 : [0.4, 1.15, 1],
                  opacity: isOpening ? 0 : [0, 0.8, 0.6],
                }}
                transition={{ duration: isOpening ? 1.0 : 1.4 }}
                className="absolute w-[450px] h-[450px] bg-[#3b5da6]/20 rounded-full blur-3xl"
              />

              {/* NEXXALLIANCE LOGO (Smooth & Slow Zoom In Effect + Bolder Size) */}
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
                  alt="NexxAlliance Logo"
                  fill
                  priority
                  sizes="500px"
                  className="object-contain filter drop-shadow-lg"
                />
              </motion.div>

              {/* Subtitle Loading Indicator (Ultra Light Theme) */}
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
                  INITIALIZING NEXXALLIANCE...
                </span>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
