'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const aboutFaqs = [
  {
    question: "What is NexAlliance and what enterprise technology services do you offer?",
    answer: "NexAlliance is an end-to-end technology engineering and software studio. We specialize in custom enterprise ERP systems, industrial automation software, Task Management Systems (TMS), cloud SaaS platforms, AI workflow telemetry, mobile application development, and B2B digital portals."
  },
  {
    question: "Which industries does NexAlliance specialize in?",
    answer: "NexAlliance delivers tailored software solutions across 7 major enterprise industries: Hospitality & Hotel Operations, Architectural & Engineering Project Management, Healthcare & Telemedicine, Real Estate & Property Investments, Retail & Fashion E-Commerce, Digital Media & Publishing, and Industrial B2B Manufacturing."
  },
  {
    question: "How does NexAlliance approach custom software development and system architecture?",
    answer: "We follow a business-aligned engineering methodology. Every engagement starts with operational bottleneck identification, system architecture blueprinting, role-based access control design, real-time database schema modeling, scalable Next.js/React frontend development, and secure deployment with offline telemetry capabilities."
  },
  {
    question: "Does NexAlliance provide ongoing maintenance and security support after deployment?",
    answer: "Yes, NexAlliance provides 24/7 technical monitoring, database encryption updates, API scaling, system telemetry maintenance, and continuous performance optimization for all deployed applications."
  },
  {
    question: "How can businesses initiate a project with NexAlliance?",
    answer: "You can reach out directly via our contact portal or email hello@nexalliance.com. Our solution architects conduct an initial technical discovery session to analyze your operational requirements and deliver a customized technical proposal."
  }
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-[#f8fafc] text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>EXECUTIVE QUESTIONS & ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#25294a] tracking-tight font-sans">
            Frequently Asked <span className="text-[#3b5da6]">Questions.</span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-600 font-medium max-w-xl">
            Clear answers about our engineering capabilities, software development lifecycle, and enterprise engagement models.
          </p>
        </div>

        {/* FAQ Accordion List (Matching Exact Reference Divider Line) */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {aboutFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border-2 border-[#3b5da6]/40 bg-white overflow-hidden shadow-md shadow-[#3b5da6]/5 transition-all duration-300"
              >
                {/* Top Question Header Bar */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors ${
                    isOpen 
                      ? 'bg-[#f0f4fa] border-b-2 border-[#3b5da6]/40' 
                      : 'bg-[#f8fafc] hover:bg-[#f0f4fa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg lg:text-xl font-extrabold text-[#25294a] tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Blue Circular Toggle Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3b5da6] text-white flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Bottom Answer Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 sm:p-7 text-sm sm:text-base text-zinc-700 font-medium leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
