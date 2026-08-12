'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Quote, ChevronUp, ChevronDown } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'CTO, Oryzo Technologies',
    avatar: '/avatars/avatar1.png',
    rating: 5,
    date: 'OCT 24, 2025',
    services: ['AI Integration', 'Cloud Architecture'],
    quote:
      'NexAlliance transformed our legacy systems into a high-concurrency cloud powerhouse. Their attention to system architecture and UI motion physics is unmatched in the engineering industry.',
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'VP of Product, Hilton Global',
    avatar: '/avatars/avatar2.png',
    rating: 5,
    date: 'NOV 12, 2025',
    services: ['ERP Systems', 'Task Automation'],
    quote:
      'The custom ERP solution delivered by NexAlliance streamlined our hotel operations across 14 locations. Real-time telemetry and staff scheduling automation increased efficiency by 40%.',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Founder, Of The Oak Studios',
    avatar: '/avatars/avatar3.png',
    rating: 5,
    date: 'DEC 05, 2025',
    services: ['3D WebGL', 'Web Development'],
    quote:
      'Our 3D interactive web ecosystem achieved viral traction within 48 hours of launch. NexAlliance engineered 60FPS WebGL animations without compromising page load speeds.',
  },
  {
    id: 4,
    name: 'David Reynolds',
    role: 'Managing Director, Vrani Chem',
    avatar: '/avatars/avatar4.png',
    rating: 5,
    date: 'JAN 18, 2026',
    services: ['B2B Portal', 'Catalog Admin'],
    quote:
      'Working with NexAlliance was a game changer for our chemical manufacturing brand. Their B2B inquiry system and custom admin panel solved our order pipeline bottleneck.',
  },
];

export default function OurTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Compute top (previous), active (current), and bottom (next) cards for 3D vertical carousel
  const total = testimonialsData.length;
  const activeCard = testimonialsData[activeIndex];
  const topIndex = (activeIndex - 1 + total) % total;
  const bottomIndex = (activeIndex + 1) % total;

  const topCard = { ...testimonialsData[topIndex], targetIndex: topIndex };
  const bottomCard = { ...testimonialsData[bottomIndex], targetIndex: bottomIndex };

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-[#25294a] overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* --- LEFT COLUMN: HEADING & TRUST METRICS --- */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
              <span>TESTIMONIALS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25294a] tracking-tight font-sans leading-[1.15]"
            >
              What Our <span className="text-[#3b5da6]">Clients Say.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-sm"
            >
              Discover how enterprise leaders scale digital products, optimize operations, and achieve rapid ROI with NexAlliance engineering.
            </motion.p>

            {/* Overall Rating Pill */}
            <div className="mt-8 p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-sm flex items-center gap-4 w-full max-w-sm">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-black text-[#25294a]">4.9 / 5.0 Rating</span>
              </div>

              <div className="h-8 w-px bg-zinc-200" />

              <div>
                <p className="text-xs font-bold text-[#3b5da6] uppercase tracking-wider">
                  Trusted Worldwide
                </p>
              </div>

            </div>
          </div>


          {/* --- MIDDLE COLUMN: VERTICAL TESTIMONIAL CAROUSEL --- */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center min-h-[500px]">
            
            {/* Navigation Up / Down Buttons */}
            <div className="absolute right-2 top-2 z-30 flex flex-col gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-white border border-zinc-200 text-[#25294a] shadow-md hover:bg-[#3b5da6]/10 hover:text-[#3b5da6] transition-all cursor-pointer"
                title="Previous Review"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-white border border-zinc-200 text-[#25294a] shadow-md hover:bg-[#3b5da6]/10 hover:text-[#3b5da6] transition-all cursor-pointer"
                title="Next Review"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Vertical Stack Wrapper */}
            <div className="w-full flex flex-col items-center justify-center gap-4 py-4">

              {/* 1. TOP CARD (Blurry, Low Opacity) */}
              <motion.div
                key={`top-${topCard.id}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.35, y: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveIndex(topCard.targetIndex)}
                className="w-full max-w-2xl bg-zinc-50 border border-zinc-200 rounded-3xl p-5 shadow-sm blur-[3px] pointer-events-auto cursor-pointer hover:opacity-50 transition-opacity hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-[#3b5da6]/10">
                    <Image src={topCard.avatar} alt={topCard.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 truncate">
                    <h4 className="text-sm font-bold text-[#25294a]">{topCard.name}</h4>
                    <p className="text-xs text-zinc-500 truncate">{topCard.quote}</p>
                  </div>
                </div>
              </motion.div>


              {/* 2. CENTER ACTIVE CARD (Fully Visible, Highlighted) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`active-${activeCard.id}`}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full max-w-2xl bg-white border-2 border-[#3b5da6]/30 rounded-[32px] p-6 sm:p-8 shadow-2xl ring-4 ring-[#3b5da6]/10 relative z-20"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    
                    {/* Client Headshot Portrait */}
                    <div className="relative w-28 h-32 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md bg-[#3b5da6]/10 border border-[#3b5da6]/20">
                      <Image
                        src={activeCard.avatar}
                        alt={activeCard.name}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover"
                      />
                    </div>

                    {/* Review Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      
                      {/* Name, Role & Star Rating Row */}
                      <div>
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <h3 className="text-lg sm:text-xl font-black text-[#25294a] font-sans tracking-tight">
                              {activeCard.name}{' '}
                              <span className="text-xs sm:text-sm font-semibold text-zinc-500">
                                - ({activeCard.role})
                              </span>
                            </h3>
                          </div>

                          {/* Rating & Date */}
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 text-amber-500">
                              {[...Array(activeCard.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                              ))}
                            </div>
                            <span className="text-[11px] font-semibold text-zinc-400 mt-1">
                              {activeCard.date}
                            </span>
                          </div>
                        </div>

                        {/* Service Badges */}
                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                          {activeCard.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-wide"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quote Text */}
                      <div className="mt-4 pt-4 border-t border-zinc-100 relative">
                        <Quote className="w-6 h-6 text-[#3b5da6]/20 absolute -top-1 left-0 -z-10" />
                        <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed italic">
                          &ldquo;{activeCard.quote}&rdquo;
                        </p>
                      </div>

                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>


              {/* 3. BOTTOM CARD (Blurry, Low Opacity) */}
              <motion.div
                key={`bottom-${bottomCard.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.35, y: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveIndex(bottomCard.targetIndex)}
                className="w-full max-w-2xl bg-zinc-50 border border-zinc-200 rounded-3xl p-5 shadow-sm blur-[3px] pointer-events-auto cursor-pointer hover:opacity-50 transition-opacity hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-[#3b5da6]/10">
                    <Image src={bottomCard.avatar} alt={bottomCard.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 truncate">
                    <h4 className="text-sm font-bold text-[#25294a]">{bottomCard.name}</h4>
                    <p className="text-xs text-zinc-500 truncate">{bottomCard.quote}</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>


          {/* --- RIGHT COLUMN: VERTICAL AVATAR THUMBNAIL SELECTOR --- */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-4 py-2">
            {testimonialsData.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-14 h-14 sm:w-16 sm:h-16 ring-4 ring-[#3b5da6] scale-110 shadow-xl border-2 border-white'
                      : 'w-10 h-10 sm:w-12 sm:h-12 opacity-50 hover:opacity-100 hover:scale-105 border border-zinc-200 grayscale hover:grayscale-0'
                  }`}
                  title={item.name}
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
