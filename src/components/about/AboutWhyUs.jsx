'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Workflow, Handshake } from 'lucide-react';

const whyReasons = [
  {
    icon: Target,
    title: 'Business First',
    description: 'Technology decisions are strictly aligned with your core commercial and operational objectives.',
  },
  {
    icon: Layers,
    title: 'Scalable Solutions',
    description: 'We build enterprise architecture that seamlessly evolves as your enterprise expands.',
  },
  {
    icon: Workflow,
    title: 'End-to-End Expertise',
    description: 'From initial discovery and UI/UX design to full-stack engineering, cloud, and AI automation.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We act as an integrated extension of your internal engineering team, not just a standard vendor.',
  },
];

export default function AboutWhyUs() {
  return (
    <section className="relative bg-white text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>DIFFERENTIATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#25294a] tracking-tight font-sans">
            Why Nex<span className="text-[#3b5da6]">Alliance.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-medium">
            We don&apos;t just build software. We build enterprise solutions tailored around your business goals.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyReasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-white p-8 rounded-3xl border border-zinc-200/90 shadow-xl shadow-zinc-200/40 hover:border-[#3b5da6]/60 hover:shadow-[#3b5da6]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3b5da6] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#25294a] font-sans group-hover:text-[#3b5da6] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-extrabold text-[#3b5da6] tracking-wider uppercase">
                  Pillar 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
