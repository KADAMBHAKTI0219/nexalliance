'use client';

import React, { useRef, useState, useEffect } from 'react';
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
} from 'lucide-react';
import gsap from 'gsap';
import { generatePortfolioPDF } from '@/utils/generatePortfolioPDF';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const targetXRef = useRef(0);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const galleryImages = project?.images || (project?.image ? [project.image] : []);

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

  // Keyboard ESC & Arrow Navigation & Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        scrollToIndex(Math.min(galleryImages.length - 1, activeIndexRef.current + 1));
      } else if (e.key === 'ArrowLeft') {
        scrollToIndex(Math.max(0, activeIndexRef.current - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [galleryImages.length, onClose]);

  // Ultra-Smooth GSAP Wheel & Scroll Handler
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const container = containerRef.current;
    const track = trackRef.current;
    targetXRef.current = 0;
    activeIndexRef.current = 0;

    const handleWheelEvent = (e) => {
      e.preventDefault();
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;

      const totalTrackWidth = track.scrollWidth;
      const visibleWidth = container.clientWidth;
      const maxScroll = Math.max(0, totalTrackWidth - visibleWidth + 48);

      targetXRef.current = Math.max(0, Math.min(targetXRef.current + delta * 1.2, maxScroll));

      const progress = maxScroll > 0 ? targetXRef.current / maxScroll : 0;
      const newIdx = Math.min(galleryImages.length - 1, Math.round(progress * (galleryImages.length - 1)));
      if (newIdx !== activeIndexRef.current) {
        activeIndexRef.current = newIdx;
        setActiveIndex(newIdx);
      }

      gsap.to(track, {
        x: -targetXRef.current,
        duration: 0.5,
        ease: 'power3.out',
        force3D: true,
        overwrite: 'auto',
      });
    };

    container.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => container.removeEventListener('wheel', handleWheelEvent);
  }, [galleryImages.length]);

  const scrollToIndex = (idx) => {
    if (!containerRef.current || !trackRef.current) return;
    const container = containerRef.current;
    const track = trackRef.current;
    const totalTrackWidth = track.scrollWidth;
    const visibleWidth = container.clientWidth;
    const maxScroll = Math.max(0, totalTrackWidth - visibleWidth + 48);

    const targetX = galleryImages.length > 1 ? (idx / (galleryImages.length - 1)) * maxScroll : 0;
    targetXRef.current = targetX;
    activeIndexRef.current = idx;
    setActiveIndex(idx);

    gsap.to(track, {
      x: -targetX,
      duration: 0.5,
      ease: 'power3.out',
      force3D: true,
      overwrite: 'auto',
    });
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-[9999] bg-[#f8fafc] text-[#25294a] flex flex-col overflow-hidden select-none"
      >
        {/* Ambient Light Glow Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#8b5cf6]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Top Header Section */}
        <div className="px-6 sm:px-12 py-4 sm:py-5 border-b border-zinc-200/90 bg-white/95 backdrop-blur-2xl shrink-0 z-50 shadow-sm flex flex-col gap-3">
          {/* Top Row: Category, Title, Counter, Action Buttons */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-black tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
                <span>{project.category || 'CASE STUDY'}</span>
              </span>

              <h2 id="modal-title" className="text-2xl sm:text-3xl font-black tracking-tight text-[#25294a] font-sans">
                {project.title}
              </h2>

              <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-mono font-bold shadow-2xs">
                SHOT {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
              </span>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25294a] hover:bg-[#3b5da6] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#3b5da6]"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Exporting PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-white" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                aria-label="Close project showcase modal"
                className="flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#25294a] font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-zinc-200/90 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3b5da6]"
              >
                <span>Close</span>
                <X className="w-4 h-4 text-[#25294a]" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Bottom Row: Detailed Case Study Telemetry Card */}
          <div className="flex flex-col gap-2.5 pt-3 border-t border-zinc-100 max-h-[180px] overflow-y-auto pr-2">
            {/* Subtitle Tagline */}
            {project.subtitle && (
              <div className="text-[11px] font-extrabold text-[#3b5da6] uppercase tracking-widest">
                {project.subtitle}
              </div>
            )}

            {/* Problem Statement */}
            {project.problemStatement ? (
              <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/80">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#25294a]">Problem Statement: </span>
                  {project.problemStatement}
                </div>
              </div>
            ) : project.description ? (
              <p className="text-zinc-700 text-xs sm:text-sm font-medium leading-relaxed">
                {project.description}
              </p>
            ) : null}

            {/* Solution & Outcome Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {project.outcome && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white font-extrabold text-[11px] shadow-xs">
                  <Trophy className="w-3.5 h-3.5 text-white" />
                  <span>{project.outcome}</span>
                </span>
              )}

              {project.features && project.features.length > 0 && project.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#3b5da6]/10 text-[#3b5da6] font-extrabold text-[11px] border border-[#3b5da6]/20 shadow-2xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#3b5da6]" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* GSAP Horizontal Gallery Canvas Stage */}
        <div
          ref={containerRef}
          className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-6 sm:p-12"
        >
          {galleryImages.length > 0 ? (
            <>
              {/* Prev Navigation Arrow Button */}
              {galleryImages.length > 1 && (
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  aria-label="Previous image shot"
                  className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/90 hover:bg-white text-[#25294a] shadow-xl border border-zinc-200/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6 text-[#25294a]" />
                </button>
              )}

              {/* Next Navigation Arrow Button */}
              {galleryImages.length > 1 && (
                <button
                  onClick={() => scrollToIndex(Math.min(galleryImages.length - 1, activeIndex + 1))}
                  disabled={activeIndex === galleryImages.length - 1}
                  aria-label="Next image shot"
                  className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/90 hover:bg-white text-[#25294a] shadow-xl border border-zinc-200/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6 text-[#25294a]" />
                </button>
              )}

              {/* GSAP Horizontal Track */}
              <div
                ref={trackRef}
                className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 flex items-center gap-6 sm:gap-10 will-change-transform pr-12"
              >
                {galleryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`relative h-[64vh] sm:h-[70vh] w-[86vw] sm:w-[75vw] max-w-[1250px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-md flex items-center justify-center transition-all duration-500 group cursor-pointer border border-zinc-200/80 ${
                      i === activeIndex ? 'scale-100 opacity-100 ring-2 ring-[#3b5da6]/30' : 'opacity-80 scale-[0.98]'
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 90vw, 1250px"
                      className="object-contain object-center rounded-2xl sm:rounded-3xl p-2 sm:p-4 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Floating Navigation Dots */}
              {galleryImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-xl">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToIndex(i)}
                      aria-label={`Jump to shot ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIndex ? 'w-8 bg-[#3b5da6]' : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Fallback Case Study Deck Canvas when project has no screenshot images */
            <div className="w-full max-w-5xl bg-white rounded-3xl border border-zinc-200 shadow-2xl p-6 sm:p-10 flex flex-col gap-6 overflow-y-auto max-h-[75vh]">
              {/* Problem & Identification */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200/80 flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-black uppercase tracking-wider w-fit">
                    <AlertCircle className="w-4 h-4 text-white" />
                    <span>Problem & Challenges</span>
                  </div>
                  <p className="text-zinc-800 text-sm font-medium leading-relaxed">
                    {project.problemStatement || project.description}
                  </p>

                  {project.identification && project.identification.length > 0 && (
                    <div className="pt-2">
                      <div className="text-xs font-black text-amber-900 uppercase tracking-wider mb-2">Key Inefficiencies Identified:</div>
                      <ul className="flex flex-col gap-1.5 text-xs text-zinc-700">
                        {project.identification.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Solution Architecture */}
                <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-200/80 flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b5da6] text-white text-xs font-black uppercase tracking-wider w-fit">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Implemented Solution</span>
                  </div>
                  
                  {project.solution && project.solution.length > 0 && (
                    <ul className="flex flex-col gap-2 text-xs sm:text-sm text-zinc-800 font-medium pt-1">
                      {project.solution.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-blue-100 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-[#3b5da6] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Outcome Banner */}
              {project.outcome && (
                <div className="bg-gradient-to-r from-[#25294a] to-[#3b5da6] text-white p-5 rounded-2xl shadow-md flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">Business Impact & Outcome</div>
                      <div className="text-sm sm:text-base font-black text-white">{project.outcome}</div>
                    </div>
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
