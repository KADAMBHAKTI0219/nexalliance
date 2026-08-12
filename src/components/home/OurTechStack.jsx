'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// --- AUTHENTIC BRAND VECTOR LOGOS ---
const TechLogos = {
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#47A248]">
      <path d="M12 1.5c-4.4 0-8 3.6-8 8 0 4.1 3.1 7.5 7.1 7.9v5.1c0 .3.2.5.5.5s.5-.2.5-.5v-5.1c4-.4 7.1-3.8 7.1-7.9 0-4.4-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
      <path d="M12 4.5c-2.5 0-4.5 2-4.5 4.5 0 2.2 1.6 4.1 3.7 4.4v-8.9z" />
    </svg>
  ),
  Express: () => (
    <span className="font-extrabold text-xs tracking-tighter text-[#25294a] font-mono uppercase">EXP</span>
  ),
  React: () => (
    <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-[#61DAFB] stroke-[6]">
      <ellipse cx="50" cy="50" rx="42" ry="16" />
      <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="7" className="fill-[#61DAFB] stroke-none" />
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#5FA04E]">
      <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm-1 15.6l-6-3.5v-7l6 3.5v7zm2 0v-7l6-3.5v7l-6 3.5z"/>
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 128 128" className="w-6 h-6 fill-[#25294a]">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm27.4 92.5L54.7 45.4v47.1H44.1V35.5h11.7l34.2 44.8V35.5h10.6v57h-9.2z"/>
    </svg>
  ),
  OpenAI: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#10A37F]">
      <path d="M22.28 9.82a6.002 6.002 0 00-.52-4.91 6.046 6.046 0 00-6.49-2.9 6.003 6.003 0 00-4.52-2.01 6.05 6.05 0 00-5.75 4.14 6.003 6.003 0 00-4 2.9 6.046 6.046 0 00.74 7.07 6.002 6.002 0 00.52 4.91 6.046 6.046 0 006.49 2.9 6.005 6.005 0 004.52 2.01 6.05 6.05 0 005.76-4.14 6.003 6.003 0 004-2.9 6.044 6.044 0 00-.74-7.07zm-9.78 11.68a4.5 4.5 0 01-2.61-.84l.15-.09 4.34-2.51a.75.75 0 00.38-.65v-6.13l1.83 1.06v5.04a4.526 4.526 0 01-4.09 4.12zm-7.7-3.92a4.49 4.49 0 01-.52-2.7l.15.09 4.34 2.51a.75.75 0 00.75 0l5.31-3.07v2.12l-4.36 2.52a4.52 4.52 0 01-5.67-1.47zm-1.12-8.58a4.49 4.49 0 012.09-1.87v5.2a.75.75 0 00.38.65l5.31 3.07-1.83 1.06-4.36-2.52a4.526 4.526 0 01-1.59-5.59zm12.56-5.48a4.49 4.49 0 012.61.84l-.15.09-4.34 2.51a.75.75 0 00-.38.65v6.13l-1.83-1.06V6.73a4.526 4.526 0 014.09-4.13zm7.7 3.92a4.49 4.49 0 01.52 2.7l-.15-.09-4.34-2.51a.75.75 0 00-.75 0l-5.31 3.07V7.32l4.36-2.52a4.52 4.52 0 015.67 1.47zm1.12 8.58a4.49 4.49 0 01-2.09 1.87v-5.2a.75.75 0 00-.38-.65l-5.31-3.07 1.83-1.06 4.36 2.52a4.526 4.526 0 011.59 5.59z"/>
    </svg>
  ),
  Claude: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#D97757]">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  ),
  n8n: () => (
    <span className="font-black text-xs text-rose-500 font-mono tracking-tighter">n8n</span>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#3776AB" d="M11.87 2c-4.4 0-4.15 1.9-4.15 1.9l.01 1.97h4.22v.6H6.01S2 6.01 2 10.45c0 4.44 3.5 4.27 3.5 4.27h2.09v-2.95s-.11-3.5 3.5-3.5h3.48s3.37.06 3.37-3.32C17.94 1.57 11.87 2 11.87 2zM9.36 3.63a.85.85 0 110 1.7.85.85 0 010-1.7z"/>
      <path fill="#FFD43B" d="M12.13 22c4.4 0 4.15-1.9 4.15-1.9l-.01-1.97h-4.22v-.6h5.94s4.01.46 4.01-3.98c0-4.44-3.5-4.27-3.5-4.27h-2.09v2.95s.11 3.5-3.5 3.5H9.43s-3.37-.06-3.37 3.32C6.06 22.43 12.13 22 12.13 22zm2.51-1.63a.85.85 0 110-1.7.85.85 0 010 1.7z"/>
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#02569B]">
      <path d="M14.314 0L2.3 12 6 15.7 18 3.7z" fill="#47C5FB" />
      <path d="M14.314 11.4L8.3 17.4l6.014 6.014h7.4l-6.014-6.014L21.714 11.4z" fill="#02569B" />
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="w-5 h-6">
      <path fill="#F24E1E" d="M19 19A9.5 9.5 0 1 1 19 0h9.5v19H19z"/>
      <path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
      <path fill="#1ABCFE" d="M0 47.5A9.5 9.5 0 0 0 9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5z"/>
      <path fill="#0ACF83" d="M19 28.5a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#38BDF8]">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FF9900]">
      <path d="M18.75 11.25c-.24 0-.47.04-.69.11-1.12-1.8-3.14-3.01-5.46-3.01-2.91 0-5.32 1.91-6.11 4.54A4.35 4.35 0 002.25 17c0 2.35 1.9 4.25 4.25 4.25h12.25A3.75 3.75 0 0022.5 17.5a3.75 3.75 0 00-3.75-3.75z"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#2496ED]">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 5.43h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.074a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 2.715h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185H5.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 2.715h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.165a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H2.165a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186z"/>
    </svg>
  ),
  Postgres: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#336791]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#3178C6]">
      <path d="M1.125 0C.507 0 0 .507 0 1.125v21.75C0 23.493.507 24 1.125 24h21.75c.618 0 1.125-.507 1.125-1.125V1.125C24 .507 23.493 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.242-.486 6.07 6.07 0 0 0-1.31-.141c-.601 0-1.048.117-1.342.35-.294.234-.441.56-.441.979 0 .324.095.584.285.78.19.196.467.36.83.492.364.132.817.262 1.36.39.79.186 1.432.392 1.927.618.495.226.879.528 1.152.906.273.378.41.868.41 1.47 0 .873-.314 1.58-.942 2.12-.628.54-1.53.81-2.707.81a8.9 8.9 0 0 1-1.785-.175 7.37 7.37 0 0 1-1.624-.522v-2.584c.582.35 1.19.61 1.824.78.634.17 1.237.255 1.81.255.673 0 1.168-.12 1.485-.36.317-.24.476-.576.476-1.008 0-.34-.094-.61-.283-.81-.19-.2-.469-.367-.837-.502-.368-.135-.82-.266-1.356-.393-.797-.19-1.442-.4-1.935-.63-.493-.23-.875-.537-1.146-.922-.27-.385-.406-.88-.406-1.485 0-.84.31-1.527.93-2.06.62-.533 1.5-.8 2.64-.8zm-7.688.169h3.366v11.756h-3.366V9.919z"/>
    </svg>
  ),
};

// All 16 Technologies Combined in 1 Single Marquee Line
const singleMarqueeList = [
  { name: 'NODE . JS', Logo: TechLogos.NodeJS },
  { name: 'PYTHON', Logo: TechLogos.Python },
  { name: 'OPENAI', Logo: TechLogos.OpenAI },
  { name: 'MONGODB', Logo: TechLogos.MongoDB },
  { name: 'REACT', Logo: TechLogos.React },
  { name: 'NEXT . JS', Logo: TechLogos.NextJS },
  { name: 'EXPRESS . JS', Logo: TechLogos.Express },
  { name: 'TYPESCRIPT', Logo: TechLogos.TypeScript },
  { name: 'FLUTTER', Logo: TechLogos.Flutter },
  { name: 'CLAUDE AI', Logo: TechLogos.Claude },
  { name: 'N8N AUTOMATION', Logo: TechLogos.n8n },
  { name: 'FIGMA DESIGN', Logo: TechLogos.Figma },
  { name: 'TAILWIND CSS', Logo: TechLogos.Tailwind },
  { name: 'AWS CLOUD', Logo: TechLogos.AWS },
  { name: 'DOCKER', Logo: TechLogos.Docker },
  { name: 'POSTGRESQL', Logo: TechLogos.Postgres },
];

export default function OurTechStack() {
  return (
    <section id="techstack" className="relative py-20 sm:py-28 bg-white text-[#25294a] overflow-hidden select-none w-full">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
          <span>OUR TECH STACK</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#25294a] tracking-tight font-sans"
        >
          Our Tech <span className="text-[#3b5da6]">Stack.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl"
        >
          Deploying enterprise MERN Stack applications, AI models (ChatGPT & Claude), n8n automation, Figma UI designs, and cloud infrastructure.
        </motion.p>
      </div>

      {/* --- 100% FULL-WIDTH SEAMLESS BORDERLESS MARQUEE --- */}
      <div className="w-full py-6 bg-white relative overflow-hidden">
        
        {/* Subtle Edge Fade Overlay Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* 1 Single Continuous Infinite Scrolling Row */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
            className="flex items-center gap-12 sm:gap-16 whitespace-nowrap shrink-0 px-6"
          >
            {[...singleMarqueeList, ...singleMarqueeList, ...singleMarqueeList].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3.5 text-zinc-600 opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <item.Logo />
                <span className="text-sm sm:text-base font-black tracking-widest font-mono uppercase text-[#25294a] group-hover:text-[#3b5da6] transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
