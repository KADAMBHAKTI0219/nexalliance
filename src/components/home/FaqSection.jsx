'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEFAULT_ITEMS = [
  {
    question: "What specialized services does NexAlliance offer?",
    answer: "NexAlliance specializes in custom Enterprise ERP platforms, sales CRM systems, high-performance Next.js web applications, digital growth & SEO engineering, multi-region cloud infrastructure, native mobile apps (iOS & Android), and autonomous AI agent automation.",
  },
  {
    question: "How long does a custom software or AI project take from discovery to launch?",
    answer: "Project timelines depend on technical scope. MVP web platforms & custom dashboards typically take 4 to 6 weeks, while enterprise ERP systems, SaaS platforms, and custom AI LLM integrations range between 8 and 12 weeks delivered in agile two-week sprints.",
  },
  {
    question: "Can NexAlliance integrate custom AI LLM models into existing legacy infrastructure?",
    answer: "Yes. We engineer secure API bridges, custom LLM agents, predictive machine learning models, computer vision pipelines, and automated telemetry triggers into existing legacy ERPs and enterprise databases without data disruption.",
  },
  {
    question: "How does NexAlliance guarantee data security, high availability, and 99.99% uptime?",
    answer: "We implement Zero-Trust security mesh protocols, Kubernetes multi-region failover clusters, encrypted database architecture, and automated CI/CD deployment pipelines ensuring end-to-end data privacy and guaranteed 99.99% system uptime.",
  },
  {
    question: "How do we initiate a technical discovery session with the NexAlliance engineering team?",
    answer: "You can click 'CONTACT' in the navigation bar or reach out via our contact page. Our software architects will schedule an initial technical discovery session within 24 hours to analyze your system requirements and provide a detailed implementation roadmap.",
  },
];

export default function FaqSection({
  items = DEFAULT_ITEMS,
  title = "Frequently Asked Questions",
  className,
  ...props
}) {
  const [activeIndex, setActiveIndex] = useState(2); // Set 3rd item open by default matching reference screenshot

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Dynamic AEO (Answer Engine Optimization) JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section 
      id="faq" 
      role="region" 
      aria-labelledby="faq-heading"
      className="relative py-20 sm:py-28 bg-[#f8fafc] text-[#25294a] border-t border-zinc-100 overflow-hidden select-none"
    >
      {/* Inject AEO JSON-LD Schema for Search Engines & LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Ambient Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1000px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 transform-gpu" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (SEO, AEO & GEO Optimized) */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold tracking-[0.2em] uppercase mb-4 shadow-xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#3b5da6]" aria-hidden="true" />
            <span>GOT QUESTIONS?</span>
          </motion.div>

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#25294a] tracking-tight font-sans"
          >
            Frequently Asked <span className="text-[#3b5da6]">Questions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed"
          >
            Everything you need to know about our enterprise software engineering process, project deliverables, and client partnership model.
          </motion.p>
        </header>

        {/* FAQ Accordion List (Matching Exact Reference Divider Line) */}
        <div className={cn("w-full max-w-4xl mx-auto font-sans", className)} {...props}>
          <ul className="w-full mx-auto list-none p-0 flex flex-col gap-5 sm:gap-6">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="w-full relative rounded-2xl sm:rounded-3xl border-2 border-[#3b5da6]/40 bg-white overflow-hidden shadow-md shadow-[#3b5da6]/5 transition-all duration-300"
                >
                  {/* Top Question Header Bar */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${index}`}
                    className={`w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors ${
                      isActive 
                        ? 'bg-[#f0f4fa] border-b-2 border-[#3b5da6]/40' 
                        : 'bg-[#f8fafc] hover:bg-[#f0f4fa]'
                    }`}
                  >
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-[#25294a] tracking-tight leading-snug">
                      {item.question}
                    </span>
                    
                    {/* Blue Circular Toggle Icon */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3b5da6] text-white flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300">
                      {isActive ? (
                        <ChevronUp className="w-5 h-5 text-white" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  {/* Bottom Answer Body */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-6 sm:p-7 text-sm sm:text-base text-zinc-700 font-medium leading-relaxed font-sans">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
