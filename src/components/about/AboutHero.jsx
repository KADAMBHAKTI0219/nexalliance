'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative bg-white text-[#25294a] pt-16 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Display Title: About Us */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl md:text-[110px] lg:text-[140px] font-black tracking-tighter text-[#25294a] leading-none select-none font-sans"
        >
          About <span className="text-[#3b5da6]">Us.</span>
        </motion.h1>

        {/* Full-width Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 sm:mt-6 w-full relative h-[300px] sm:h-[460px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/90 group"
        >
          <Image
            src="/assets/images/about_hero_tech.png"
            alt="NexAlliance Enterprise Technology Studio"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />
        </motion.div>

      </div>
    </section>
  );
}
