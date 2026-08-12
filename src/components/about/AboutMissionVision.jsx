'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, Sparkles, CheckCircle } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section className="relative bg-white text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>PURPOSE & DIRECTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#25294a] tracking-tight font-sans">
            Guiding Principles for <span className="text-[#3b5da6]">Impact.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Our mission and vision guide every architectural decision, code commit, and partnership we build.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:border-[#3b5da6]/60 hover:shadow-[#3b5da6]/10 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#3b5da6] group-hover:text-white transition-all duration-300">
                <Rocket className="w-7 h-7" />
              </div>

              <div className="inline-block text-xs font-extrabold tracking-[0.2em] text-[#3b5da6] uppercase mb-3">
                OUR MISSION
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#25294a] leading-snug">
                To empower businesses with innovative, reliable and scalable technology solutions that create measurable impact.
              </h3>

              <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                We measure our success not just by lines of code, but by the tangible efficiency gains, revenue growth, and operational stability we deliver to our partners.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-zinc-500">
              <CheckCircle className="w-4 h-4 text-[#3b5da6]" />
              <span>Built for High Reliability & Long-term ROI</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:border-[#25294a]/60 hover:shadow-[#25294a]/10 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25294a]/10 text-[#25294a] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#25294a] group-hover:text-white transition-all duration-300">
                <Eye className="w-7 h-7" />
              </div>

              <div className="inline-block text-xs font-extrabold tracking-[0.2em] text-[#25294a] uppercase mb-3">
                OUR VISION
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#25294a] leading-snug">
                To become a trusted global technology partner for enterprise organizations building the future.
              </h3>

              <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                We aspire to set the global benchmark in enterprise software innovation, artificial intelligence integration, and continuous digital transformation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-zinc-500">
              <Sparkles className="w-4 h-4 text-[#3b5da6]" />
              <span>Transforming Complex Challenges Into Opportunities</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
