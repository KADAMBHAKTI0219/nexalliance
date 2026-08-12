'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Award, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'We continuously explore better ways to solve complex problems.',
    tag: 'Forward Thinking',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We build relationships through transparency, accountability and trust.',
    tag: 'Uncompromising Ethics',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We focus on quality, performance and meaningful outcomes.',
    tag: 'Precision Quality',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients and teams to turn ideas into reality.',
    tag: 'Unified Teamwork',
    color: 'from-blue-600 to-sky-500',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We build solutions that help businesses evolve and scale.',
    tag: 'Sustainable Scale',
    color: 'from-cyan-600 to-blue-500',
  },
];

export default function AboutValues() {
  return (
    <section className="relative bg-white text-zinc-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span>WHAT DRIVES US</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight font-sans">
            Our Core <span className="text-blue-600">Values.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            The fundamental beliefs that shape our culture, decisions, and commitment to technological excellence.
          </p>
        </div>

        {/* Values Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl border border-zinc-200/90 shadow-xl shadow-zinc-200/40 hover:border-blue-300 hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase bg-zinc-100 px-3 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 font-sans group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400 group-hover:text-blue-600 transition-colors">
                    {item.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Summary Callout */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-extrabold tracking-widest uppercase text-blue-100 mb-2">
                NEX ALLIANCE PROMISE
              </div>
              <h3 className="text-2xl font-extrabold leading-snug">
                Built Around Your Business Goals.
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-blue-50 leading-relaxed">
                We merge deep domain technical knowledge with agile execution to ensure your solutions outperform expectations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <a
                href="/contact-us"
                className="text-xs font-bold uppercase tracking-wider text-white hover:underline flex items-center gap-1"
              >
                <span>Partner With Us</span> →
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
