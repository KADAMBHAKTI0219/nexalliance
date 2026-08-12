'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'Bite-sized technical mapping, feasibility analysis, and strategic roadmap definition.',
    image: '/assets/images/data-discovery.png',
    cardGradient: 'from-[#3b5da6] via-[#2e4b8a] to-[#25294a]',
    borderColor: 'border-[#3b5da6]/60',
    shadowGlow: 'shadow-[#3b5da6]/25',
    marginClass: 'lg:mt-24',
  },
  {
    step: '02',
    title: 'System Architecture',
    description: 'Designing high-concurrency database schemas, microservices mesh, and intuitive UI wireframes.',
    image: '/assets/images/urban.png',
    cardGradient: 'from-[#25294a] via-[#3b5da6] to-[#25294a]',
    borderColor: 'border-[#3b5da6]/60',
    shadowGlow: 'shadow-[#25294a]/25',
    marginClass: 'lg:mt-72',
  },
  {
    step: '03',
    title: 'Agile Engineering',
    description: 'Writing clean modular production code with automated testing harnesses, AI, and zero-trust security.',
    image: '/assets/images/reverse-engineering.png',
    cardGradient: 'from-[#3b5da6] via-[#4c72c7] to-[#25294a]',
    borderColor: 'border-[#3b5da6]/60',
    shadowGlow: 'shadow-[#3b5da6]/25',
    marginClass: 'lg:mt-72',
  },
  {
    step: '04',
    title: 'Cloud Scale & Launch',
    description: 'Deploying multi-region cloud edge networks with 24/7 telemetry monitoring and continuous optimization.',
    image: '/assets/images/cloud.png',
    cardGradient: 'from-[#25294a] via-[#3b5da6] to-[#25294a]',
    borderColor: 'border-[#3b5da6]/60',
    shadowGlow: 'shadow-[#25294a]/25',
    marginClass: 'lg:mt-24',
  },
];

export default function OurProcess() {
  return (
    <section id="process" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-[#25294a] overflow-hidden select-none">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Center Header inside the Curve Arc (Single-line Title) */}
        <div className="text-center max-w-4xl mb-12 lg:mb-0 z-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>HOW WE WORK</span>
          </motion.div>

          {/* Single-line Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#25294a] tracking-tight font-sans sm:whitespace-nowrap leading-tight"
          >
            Transforming <span className="bg-gradient-to-r from-[#3b5da6] via-blue-500 to-[#25294a] bg-clip-text text-transparent">Ideas Into Scalable Reality.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-zinc-600 font-medium max-w-md"
          >
            Flexible 4-step engineering options tailored to your digital growth journey.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="/contact-us"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3b5da6] to-[#25294a] hover:from-[#2e4b8a] hover:to-[#1d203b] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#3b5da6]/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* --- DESKTOP VIEW (U-Curve Arc Layout) --- */}
        <div className="hidden lg:block relative w-full min-h-[700px] lg:-mt-16">

          {/* Dashed SVG Curve Arc with 4 Prominent 3D Dots with Numbers (01, 02, 03, 04) passing completely ABOVE all cards */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-[320px]" viewBox="0 0 1200 320" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 40 L 150 40 C 250 40, 330 220, 450 220 C 550 220, 650 220, 750 220 C 870 220, 950 40, 1050 40 L 1200 40"
                stroke="#3b5da6"
                strokeWidth="3.5"
                strokeDasharray="10 10"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Dot 1: Center (150, 40) with step number "01" */}
              <g className="drop-shadow-lg">
                <circle cx="150" cy="40" r="22" fill="#3b5da6" stroke="#25294a" strokeWidth="4" />
                <text x="150" y="46" fill="#ffffff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">01</text>
              </g>

              {/* Dot 2: Center (450, 220) with step number "02" */}
              <g className="drop-shadow-lg">
                <circle cx="450" cy="220" r="22" fill="#25294a" stroke="#3b5da6" strokeWidth="4" />
                <text x="450" y="226" fill="#ffffff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">02</text>
              </g>

              {/* Dot 3: Center (750, 220) with step number "03" */}
              <g className="drop-shadow-lg">
                <circle cx="750" cy="220" r="22" fill="#3b5da6" stroke="#25294a" strokeWidth="4" />
                <text x="750" y="226" fill="#ffffff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">03</text>
              </g>

              {/* Dot 4: Center (1050, 40) with step number "04" */}
              <g className="drop-shadow-lg">
                <circle cx="1050" cy="40" r="22" fill="#25294a" stroke="#3b5da6" strokeWidth="4" />
                <text x="1050" y="46" fill="#ffffff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">04</text>
              </g>
            </svg>
          </div>

          {/* 4 Process Step Cards Grid positioned cleanly BELOW the line & dots */}
          <div className="grid grid-cols-4 gap-6 items-start relative z-20 pt-6">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col items-center text-center group ${item.marginClass}`}
              >
                {/* 3D Square Card Block displaying dedicated PNG image */}
                <div
                  className={`relative w-full aspect-square max-w-[220px] rounded-3xl bg-gradient-to-br ${item.cardGradient} p-4 flex flex-col items-center justify-center text-white border-2 ${item.borderColor} shadow-2xl ${item.shadowGlow} group-hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden`}
                >
                  {/* Inner 3D Edge Bevel Highlights */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 pointer-events-none z-10" />

                  {/* Dedicated PNG Image Container */}
                  <div className="relative w-32 h-32 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="200px"
                      className="object-contain filter drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Title & Description below Card */}
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="text-lg font-black text-[#25294a] font-sans group-hover:text-[#3b5da6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed font-medium max-w-[220px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* --- MOBILE & TABLET RESPONSIVE VIEW --- */}
        <div className="lg:hidden relative w-full mt-8 pl-6 sm:pl-10">

          {/* Vertical Dashed Connecting Line */}
          <div className="absolute left-[39px] sm:left-[55px] top-6 bottom-12 w-0.5 border-l-2 border-dashed border-[#3b5da6]/50 -z-0" />

          <div className="flex flex-col gap-10">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-6 relative z-10"
              >
                {/* Circular Step Badge Node */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#3b5da6] text-white font-black text-base flex items-center justify-center border-4 border-white shadow-lg">
                  {item.step}
                </div>

                {/* Card Block & Content */}
                <div className="flex flex-col">
                  <div className={`relative w-36 h-36 rounded-2xl bg-gradient-to-br ${item.cardGradient} p-4 flex items-center justify-center border-2 ${item.borderColor} shadow-xl mb-3 overflow-hidden group`}>
                    <div className="relative w-28 h-28 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="200px"
                        className="object-contain filter drop-shadow-xl"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#25294a] font-sans">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed font-normal max-w-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}