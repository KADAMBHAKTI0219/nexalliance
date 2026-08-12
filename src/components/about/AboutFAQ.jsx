'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

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
    <section className="relative bg-[#f8fafc] text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80">
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

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {aboutFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-zinc-200/90 shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-black text-[#25294a] font-sans">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-[#3b5da6] text-white rotate-180' : 'bg-zinc-100 text-zinc-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-medium text-zinc-600 leading-relaxed border-t border-zinc-100">
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
