'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

const stats = [
  { number: '50+', label: 'Digital Products Delivered' },
  { number: '99.8%', label: 'Client Satisfaction Rate' },
  { number: '10+', label: 'Global Market Footprints' },
  { number: '24/7', label: 'Continuous Reliability' },
];

export default function AboutIntroduction() {
  return (
    <section className="relative bg-white text-zinc-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15] font-sans">
              Technology that solves <br />
              <span className="text-blue-600">real business problems.</span>
            </h2>

            <div className="mt-8 space-y-6 text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                <strong className="text-zinc-900 font-semibold">Nex Alliance</strong> is a technology and digital solutions company focused on building meaningful digital experiences, intelligent systems and scalable software solutions.
              </p>
              <p>
                We work with ambitious businesses to understand their deepest operational challenges, identify transformative growth opportunities, and convert visionary ideas into robust, high-performance technology products.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-zinc-800">Business-Aligned Engineering</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-zinc-800">Scalable System Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-zinc-800">User-Centric Digital Design</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-zinc-800">End-to-End Execution</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xl shadow-zinc-200/40 hover:border-blue-300 hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Target className="w-5 h-5" />}
                  {idx === 1 && <CheckCircle2 className="w-5 h-5" />}
                  {idx === 2 && <Lightbulb className="w-5 h-5" />}
                  {idx === 3 && <TrendingUp className="w-5 h-5" />}
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.number}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-zinc-500">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
