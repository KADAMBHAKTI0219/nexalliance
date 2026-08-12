'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Layout, Code2, Rocket } from 'lucide-react';

const storySteps = [
  {
    step: '01',
    title: 'Understanding',
    icon: Compass,
    shortDesc: 'Deep discovery & strategic roadmap alignment.',
    fullDesc: 'We start by dissecting business workflows, analyzing market positioning, and aligning on strategic outcomes before writing a single line of code.',
    highlights: ['Stakeholder Interviews', 'Technical Feasibility', 'Goal Definition'],
  },
  {
    step: '02',
    title: 'Designing',
    icon: Layout,
    shortDesc: 'Human-centric UI/UX & robust system architecture.',
    fullDesc: 'Crafting intuitive digital interfaces paired with high-concurrency database schemas and cloud infrastructure designs built for scale.',
    highlights: ['Interactive Wireframing', 'Design System Creation', 'API Schema Mapping'],
  },
  {
    step: '03',
    title: 'Building',
    icon: Code2,
    shortDesc: 'Agile development with clean, modular code.',
    fullDesc: 'Our engineering teams implement enterprise-grade web, mobile, and AI solutions using modern frameworks, continuous testing, and zero-trust security.',
    highlights: ['Clean Architecture', 'AI & Automation Integration', 'Rigorous QA Testing'],
  },
  {
    step: '04',
    title: 'Scaling',
    icon: Rocket,
    shortDesc: 'Seamless deployment, monitoring & continuous evolution.',
    fullDesc: 'We launch systems on cloud edge networks with 24/7 telemetry monitoring, ensuring seamless scaling as your business expands globally.',
    highlights: ['Multi-Region Cloud', 'Real-time Analytics', 'Ongoing Optimization'],
  },
];

export default function AboutStory() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="our-story" className="relative bg-white text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>OUR STORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#25294a] tracking-tight font-sans">
            From Ideas to <span className="text-[#3b5da6]">Innovation.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-medium">
            Our journey is defined by a structured execution method that turns high-level vision into scalable technology products.
          </p>
        </div>

        {/* Step Navigation Tabs (Desktop & Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {storySteps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? 'bg-[#3b5da6] text-white border-[#3b5da6] shadow-xl shadow-[#3b5da6]/20'
                    : 'bg-zinc-50 hover:bg-zinc-100 text-[#25294a] border-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black tracking-widest ${isActive ? 'text-blue-100' : 'text-[#3b5da6]'}`}>
                    {item.step}
                  </span>
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-white text-zinc-700 shadow-xs'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans">{item.title}</h3>
                <p className={`mt-2 text-xs line-clamp-2 ${isActive ? 'text-blue-100' : 'text-zinc-500'}`}>
                  {item.shortDesc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Showcase Card */}
        <div className="relative bg-gradient-to-br from-[#191d38] via-[#25294a] to-[#1e3a8a] text-white p-8 sm:p-12 rounded-3xl border border-[#3b5da6]/30 shadow-2xl overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b5da6]/20 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 border border-white/20">
                  <span>STAGE {storySteps[activeStep].step} OF 04</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {storySteps[activeStep].title}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                  {storySteps[activeStep].fullDesc}
                </p>

                {/* Key Deliverables */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {storySteps[activeStep].highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold border border-white/15 backdrop-blur-md"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center relative bg-white/10">
                  <span className="text-3xl font-black text-white">{storySteps[activeStep].step}</span>
                  <div className="absolute -inset-1 rounded-full border-2 border-white/40 animate-ping opacity-25" />
                </div>
                <span className="mt-4 text-xs font-bold tracking-widest text-blue-200 uppercase">
                  Execution Phase
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
