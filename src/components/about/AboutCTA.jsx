'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative bg-white text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Contained Dark Brand Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#191d38] via-[#25294a] to-[#1e3a8a] text-white rounded-3xl p-10 sm:p-16 border border-[#3b5da6]/30 shadow-2xl overflow-hidden text-center flex flex-col items-center"
        >
          {/* Subtle Background Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3b5da6]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/20 backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HAVE AN ENTERPRISE IDEA?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-[1.15]">
            Let&apos;s Build What&apos;s <span className="text-blue-300">Next.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-zinc-200 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Tell us what you&apos;re trying to solve, and let&apos;s turn the idea into something real. Our principal software architects are ready to collaborate with you.
          </p>

          {/* Button */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-blue-300 text-[#25294a] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#25294a]" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-[#25294a]" />
            </a>
          </div>

          {/* Micro Guarantee */}
          <p className="mt-8 text-xs text-blue-200 font-medium">
            🔒 Express technical response within 15 minutes · Confidential NDA upon request
          </p>
        </motion.div>

      </div>
    </section>
  );
}
