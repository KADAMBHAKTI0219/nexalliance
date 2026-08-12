'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative bg-white text-zinc-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Contained Dark Brand Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white rounded-3xl p-10 sm:p-16 border border-zinc-800 shadow-2xl overflow-hidden text-center flex flex-col items-center"
        >
          {/* Subtle Background Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HAVE AN IDEA?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-[1.15]">
            Let's Build What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Next.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-zinc-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Tell us what you're trying to solve, and let's turn the idea into something real. Our engineering team is ready to collaborate with you.
          </p>

          {/* Button */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Micro Guarantee */}
          <p className="mt-8 text-xs text-zinc-500 font-medium">
            🔒 Fast response within 24 hours · Confidential NDA signed upon request
          </p>
        </motion.div>

      </div>
    </section>
  );
}
