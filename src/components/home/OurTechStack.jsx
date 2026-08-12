'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';

// Import Authentic Official Icons from React-Icons (FontAwesome 6 & Simple Icons)
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaFigma 
} from 'react-icons/fa6';

import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiFlutter, 
  SiTailwindcss, 
  SiExpress, 
  SiAnthropic, 
  SiN8N 
} from 'react-icons/si';

// All 16 Technologies with Official Brand Colors & React Icons
const singleMarqueeList = [
  { name: 'REACT', Icon: FaReact, color: '#61DAFB' },
  { name: 'NEXT . JS', Icon: SiNextdotjs, color: '#25294a' },
  { name: 'TYPESCRIPT', Icon: SiTypescript, color: '#3178C6' },
  { name: 'NODE . JS', Icon: FaNodeJs, color: '#5FA04E' },
  { name: 'PYTHON', Icon: FaPython, color: '#3776AB' },
  { name: 'OPENAI AI', Icon: Cpu, color: '#10A37F' },
  { name: 'CLAUDE AI', Icon: SiAnthropic, color: '#D97757' },
  { name: 'N8N AUTOMATION', Icon: SiN8N, color: '#EA4B71' },
  { name: 'MONGODB', Icon: SiMongodb, color: '#47A248' },
  { name: 'POSTGRESQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'EXPRESS . JS', Icon: SiExpress, color: '#25294a' },
  { name: 'FLUTTER', Icon: SiFlutter, color: '#02569B' },
  { name: 'FIGMA DESIGN', Icon: FaFigma, color: '#F24E1E' },
  { name: 'TAILWIND CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'AWS CLOUD', Icon: FaAws, color: '#FF9900' },
  { name: 'DOCKER', Icon: FaDocker, color: '#2496ED' },
];

export default function OurTechStack() {
  return (
    <section 
      id="techstack" 
      role="region" 
      aria-labelledby="techstack-heading"
      className="relative py-20 sm:py-28 bg-white text-[#25294a] overflow-hidden select-none w-full"
    >
      {/* Background Ambient Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1100px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 transform-gpu" 
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold tracking-[0.25em] uppercase mb-4 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" aria-hidden="true" />
          <span>OUR TECH STACK</span>
        </motion.div>

        <motion.h2
          id="techstack-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#25294a] tracking-tight font-sans leading-tight"
        >
          Our Tech <span className="text-[#3b5da6]">Stack.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed max-w-2xl"
        >
          Deploying enterprise MERN Stack applications, AI LLM integrations (ChatGPT & Claude), n8n workflow automation, Figma UI designs, and resilient multi-region cloud infrastructure.
        </motion.p>
      </div>

      {/* --- 100% FULL-WIDTH SEAMLESS BORDERLESS MARQUEE (NO PILL BORDER & NO PILL BG) --- */}
      <div className="w-full py-6 bg-white relative overflow-hidden">
        
        {/* Subtle Edge Fade Overlay Gradients */}
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* 1 Single Continuous Infinite Scrolling Row */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
            className="flex items-center gap-12 sm:gap-16 whitespace-nowrap shrink-0 px-6 transform-gpu"
          >
            {[...singleMarqueeList, ...singleMarqueeList, ...singleMarqueeList].map((item, idx) => {
              const IconComponent = item.Icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center gap-3.5 text-zinc-600 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-300 group-hover:scale-115" style={{ color: item.color }} aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-black tracking-widest font-mono uppercase text-[#25294a] group-hover:text-[#3b5da6] transition-colors">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
