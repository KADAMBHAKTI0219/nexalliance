'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import gsap from 'gsap';
import { generatePortfolioPDF } from '@/utils/generatePortfolioPDF';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const activeIndexRef = useRef(0);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const isAnimatingRef = useRef(false);

  const galleryImages = project?.images || (project?.image ? [project.image] : []);
  const hasImages = galleryImages.length > 0;
  const GAP = 32; // gap-8 in pixels

  const handleDownloadPDF = async (e) => {
    if (e) e.stopPropagation();
    setIsDownloading(true);
    try {
      await generatePortfolioPDF([], project);
    } catch (err) {
      console.error('Project PDF Generation Error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  // Measure container width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Smooth Snap Scroll Function using GSAP
  const scrollToIndex = useCallback((targetIndex) => {
    if (!hasImages || !trackRef.current || !containerRef.current) return;

    const clampedIndex = Math.max(0, Math.min(galleryImages.length - 1, targetIndex));
    activeIndexRef.current = clampedIndex;
    setActiveIndex(clampedIndex);

    const cWidth = containerRef.current.clientWidth;
    const targetX = clampedIndex * (cWidth + GAP);

    isAnimatingRef.current = true;
    gsap.to(trackRef.current, {
      x: -targetX,
      duration: 0.65,
      ease: 'power3.out',
      force3D: true,
      overwrite: 'auto',
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  }, [galleryImages.length, hasImages]);

  // Keyboard ESC & Arrow Navigation & Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (hasImages && e.key === 'ArrowRight') {
        scrollToIndex(activeIndexRef.current + 1);
      } else if (hasImages && e.key === 'ArrowLeft') {
        scrollToIndex(activeIndexRef.current - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasImages, onClose, scrollToIndex]);

  // Ultra-Smooth GSAP Wheel & Track Scroll Handler
  useEffect(() => {
    if (!hasImages || !modalRef.current) return;

    const modalEl = modalRef.current;
    let wheelTimeout;

    const handleWheelEvent = (e) => {
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 15) return;

      const currentIdx = activeIndexRef.current;
      const totalCount = galleryImages.length;

      // Intercept wheel scroll inside modal to step through screenshots cleanly
      if ((delta > 0 && currentIdx < totalCount - 1) || (delta < 0 && currentIdx > 0)) {
        e.preventDefault();

        if (isAnimatingRef.current) return;

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (delta > 0) {
            scrollToIndex(currentIdx + 1);
          } else {
            scrollToIndex(currentIdx - 1);
          }
        }, 40);
      }
    };

    modalEl.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => {
      modalEl.removeEventListener('wheel', handleWheelEvent);
      clearTimeout(wheelTimeout);
    };
  }, [galleryImages.length, hasImages, scrollToIndex]);

  if (!project) return null;

  const brandStyle = project.brandStyle || {
    bg: 'from-[#0f172a] via-[#1e293b] to-[#1e3a8a]',
    logoBg: 'bg-blue-600',
    logoLetter: project.title ? project.title.charAt(0) : 'P',
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-[9999] bg-[#f8fafc] text-[#25294a] flex flex-col overflow-y-auto select-none"
      >
        {/* Ambient Light Glow Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#8b5cf6]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Top Floating Header */}
        <div className="sticky top-0 px-6 sm:px-12 py-4 border-b border-zinc-200/90 bg-white/95 backdrop-blur-2xl shrink-0 z-50 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl ${brandStyle.logoBg} text-white font-black text-sm flex items-center justify-center font-mono shadow-sm`}>
              {brandStyle.logoLetter}
            </div>
            <div>
              <h2 id="modal-title" className="text-lg sm:text-xl font-black tracking-tight text-[#25294a] font-sans leading-none">
                {project.title}
              </h2>
              <p className="text-[10px] font-extrabold text-[#3b5da6] uppercase tracking-wider font-sans mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25294a] hover:bg-[#3b5da6] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-60"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                  <span>Exporting...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Body */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">
          
          {/* --- TOP 1: HERO BRAND TITLE BANNER --- */}
          <div className={`relative w-full rounded-3xl p-8 sm:p-10 text-white bg-gradient-to-br ${brandStyle.bg} shadow-xl overflow-hidden border border-white/10 flex flex-col justify-between`}>
            <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{project.category}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans leading-tight mt-1">
                {project.title}
              </h1>
            </div>
          </div>

          {/* --- TOP 2: CORE PROBLEM STATEMENT SECTION --- */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/70 border border-rose-200/80 text-rose-950 shadow-xs flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-rose-700">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <h3 className="text-sm font-black uppercase tracking-wider font-sans">
                CORE PROBLEM STATEMENT
              </h3>
            </div>
            <p className="text-base sm:text-lg font-medium text-rose-900 leading-relaxed font-sans">
              {project.problemStatement}
            </p>
          </div>

          {/* --- TOP 3: IDENTIFICATION & SOLUTION GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Identification Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-5 text-[#25294a]">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-wider font-sans">
                    IDENTIFICATION (CHALLENGES)
                  </h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {(project.identification || []).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-zinc-700 leading-snug">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-5 text-[#25294a]">
                  <div className="p-2 rounded-xl bg-[#3b5da6]/10 text-[#3b5da6] border border-[#3b5da6]/20">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-wider font-sans">
                    SOLUTION (SYSTEM FEATURES)
                  </h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {(project.solution || project.features || []).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-zinc-700 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* --- TOP 4: TRANSFORM OUTCOME BANNER --- */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#064e3b] to-emerald-900 text-white shadow-xl border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-emerald-300 uppercase tracking-widest block mb-1">
                  TRANSFORM • DELIVERED BUSINESS OUTCOME
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white hover:bg-emerald-400 text-emerald-950 font-extrabold text-xs uppercase tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Download PDF Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* --- BOTTOM SECTION: JUST ONLY THE IMAGES (NO HEADING TEXT, NO SHOT LABELS) --- */}
          {hasImages && (
            <div className="relative w-full flex flex-col gap-4 pt-6 border-t border-zinc-200">
              
              {/* 100% Centered Horizontal Scroll Track Container (Just Only Images) */}
              <div ref={containerRef} className="w-full overflow-hidden py-2 relative rounded-3xl">
                <div
                  ref={trackRef}
                  className="flex gap-8 w-max items-center cursor-grab active:cursor-grabbing will-change-transform transform-gpu"
                >
                  {galleryImages.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                      className="h-[48vh] sm:h-[58vh] lg:h-[65vh] rounded-3xl overflow-hidden shadow-2xl bg-white border border-zinc-200/90 relative flex items-center justify-center p-2 sm:p-4 shrink-0"
                    >
                      <Image
                        src={imgUrl}
                        alt={`Project Image ${idx + 1} for ${project.title}`}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-contain object-center p-1 sm:p-2 transition-transform duration-500 ease-out select-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Navigation Controls & Indicators */}
              {galleryImages.length > 1 && (
                <div className="flex items-center justify-between px-2 pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => scrollToIndex(activeIndex - 1)}
                      disabled={activeIndex === 0}
                      className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:bg-[#3b5da6] hover:text-white transition-colors disabled:opacity-30 cursor-pointer shadow-md"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scrollToIndex(activeIndex + 1)}
                      disabled={activeIndex === galleryImages.length - 1}
                      className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:bg-[#3b5da6] hover:text-white transition-colors disabled:opacity-30 cursor-pointer shadow-md"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-2">
                    {galleryImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeIndex ? 'w-9 bg-[#3b5da6]' : 'w-3 bg-zinc-300 hover:bg-zinc-400'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </motion.div>
    </AnimatePresence>
  );
}
