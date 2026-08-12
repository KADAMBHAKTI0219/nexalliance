'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Award, Users, Layers, CheckCircle2 } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="whoweare" className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#3b5da6]/10 via-[#25294a]/5 to-[#3b5da6]/10 border-y border-[#3b5da6]/20 text-[#25294a] overflow-hidden select-none">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 100% FULL WIDTH CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3b5da6]/30 text-[#3b5da6] text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>WHO WE ARE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#25294a] tracking-tight font-sans"
          >
            Technology That Solves <br />
            <span className="text-[#3b5da6]">Real Business Problems.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl"
          >
            Nexxalliance is a technology and digital solutions company focused on building meaningful digital experiences, intelligent systems, and scalable enterprise software.
          </motion.p>

          {/* Key Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 w-full max-w-3xl">
            {[
              'Business-Aligned Engineering',
              'Scalable System Architecture',
              'User-Centric Digital Design',
              'End-to-End Execution',
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-2xl bg-white border border-[#3b5da6]/20 text-[#25294a] text-xs font-bold shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3b5da6] shrink-0" />
                <span className="truncate">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 100% EDGE-TO-EDGE BENTO GRID CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          
          {/* --- TOP ROW CARD 1: Projects Across Industries (Wide 8 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white border border-[#3b5da6]/20 rounded-[32px] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-[#3b5da6]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] border border-[#3b5da6]/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#25294a] tracking-tight font-sans">
                  Projects Across Industries
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 mt-6">
              <p className="md:col-span-8 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                Nexxalliance delivers innovative tech solutions across diverse sectors — from ambitious startups to established global enterprises — meeting every unique challenge with precision.
              </p>

              {/* 3D Globe Vector Graphic */}
              <div className="md:col-span-4 flex items-center justify-center relative">
                <div className="w-32 h-32 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#3b5da6]/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
                  
                  <svg viewBox="0 0 160 160" className="w-28 h-28 transform group-hover:rotate-12 transition-transform duration-500">
                    <ellipse cx="80" cy="142" rx="35" ry="8" fill="#CBD5E1" />
                    <path d="M80 142 V118" stroke="#3b5da6" strokeWidth="8" strokeLinecap="round" />
                    <path d="M40 80 C40 120, 120 120, 120 80" fill="none" stroke="#25294a" strokeWidth="8" strokeLinecap="round" />
                    
                    <circle cx="80" cy="70" r="42" fill="url(#logoGlobeGrad)" />
                    
                    <path d="M60 55 C65 48, 80 50, 85 58 C90 65, 82 75, 75 72 C68 70, 55 62, 60 55 Z" fill="#60A5FA" opacity="0.9" />
                    <path d="M85 75 C95 72, 108 78, 105 88 C100 95, 88 92, 85 85 Z" fill="#93C5FD" opacity="0.9" />
                    <path d="M52 82 C55 78, 68 85, 62 95 C58 92, 50 88, 52 82 Z" fill="#60A5FA" opacity="0.8" />
                    
                    <ellipse cx="80" cy="70" rx="55" ry="18" fill="none" stroke="#3b5da6" strokeWidth="3" strokeDasharray="6 6" transform="rotate(-20 80 70)" />

                    <defs>
                      <linearGradient id="logoGlobeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b5da6" />
                        <stop offset="100%" stopColor="#25294a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- TOP ROW CARD 2: Satisfied Clients (4 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-white border border-[#3b5da6]/20 rounded-[32px] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-[#3b5da6]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] border border-[#3b5da6]/20">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-[#25294a] tracking-tight font-sans">
                  Satisfied Clients
                </h3>
              </div>

              <div className="my-4">
                <span className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-[#3b5da6] via-blue-500 to-[#25294a] bg-clip-text text-transparent font-sans">
                  500+
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-4">
              Over 500 businesses trust us to design, develop, and deliver solutions that drive measurable results and long-term success.
            </p>
          </motion.div>

          {/* --- BOTTOM ROW CARD 3: Skilled Tech Experts (4 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-white border border-[#3b5da6]/20 rounded-[32px] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-[#3b5da6]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] border border-[#3b5da6]/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-[#25294a] tracking-tight font-sans">
                  Skilled Tech Experts
                </h3>
              </div>

              <div className="my-4">
                <span className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-[#3b5da6] to-[#25294a] bg-clip-text text-transparent font-sans">
                  80+
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-4">
              Our team of 80+ developers, AI engineers, designers, and cloud architects combine creativity with cutting-edge technology to bring your vision to life.
            </p>
          </motion.div>

          {/* --- BOTTOM ROW CARD 4: Recognized Excellence (Wide 8 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-8 bg-white border border-[#3b5da6]/20 rounded-[32px] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-[#3b5da6]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] border border-[#3b5da6]/20">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#25294a] tracking-tight font-sans">
                  Recognized Excellence
                </h3>
              </div>

              <div className="my-3">
                <span className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-[#3b5da6] via-blue-500 to-[#25294a] bg-clip-text text-transparent font-sans">
                  30+
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 mt-2">
              <p className="md:col-span-8 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                Proudly awarded for innovation, performance, and client satisfaction in multiple industry-leading technology competitions, showcasing our commitment to quality.
              </p>

              {/* 3D Award Ribbon / Badge Graphic */}
              <div className="md:col-span-4 flex items-center justify-center relative">
                <div className="w-32 h-32 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#3b5da6]/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
                  
                  <svg viewBox="0 0 160 160" className="w-28 h-28 transform group-hover:scale-110 transition-transform duration-500">
                    <path d="M60 100 L45 145 L65 135 L80 145 L75 100 Z" fill="#3b5da6" />
                    <path d="M100 100 L85 145 L100 135 L115 145 L100 100 Z" fill="#25294a" />
                    
                    <circle cx="80" cy="70" r="44" fill="url(#logoMedalGrad)" />
                    <circle cx="80" cy="70" r="36" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="6 4" />
                    
                    <path d="M80 50 L85 62 L98 63 L88 72 L91 85 L80 78 L69 85 L72 72 L62 63 L75 62 Z" fill="#FFFFFF" />
                    
                    <defs>
                      <linearGradient id="logoMedalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b5da6" />
                        <stop offset="100%" stopColor="#25294a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
