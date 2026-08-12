'use client';

import React, { useState } from 'react';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowLeft, Terminal, Layout } from 'lucide-react';
import Link from 'next/link';
import { portfolioProjects } from '@/data/portfolioProjects';
import ProjectModal from '@/components/home/ProjectModal';

export default function PortfolioClient() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#070913] text-white flex flex-col font-sans select-none">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Stripe-Style Background Ambient Gradient Glows */}
        <div 
          aria-hidden="true" 
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[600px] bg-gradient-to-tr from-[#3b5da6]/20 via-[#6366f1]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[160px] pointer-events-none -z-10" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
          
          {/* Header & Back Link */}
          <div className="mb-14">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#38bdf8] hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/20 border border-[#3b5da6]/40 text-[#38bdf8] text-xs font-extrabold tracking-[0.25em] uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>COMPLETE ENTERPRISE PORTFOLIO ({portfolioProjects.length} PROJECTS)</span>
              </span>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-sans">
                Our Work & <span className="bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#3b5da6] bg-clip-text text-transparent">Case Studies.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-medium max-w-2xl leading-relaxed mt-1">
                Explore our full portfolio of enterprise software applications — click any project card to view its interactive case study & full system screenshots.
              </p>
            </div>
          </div>

          {/* Stripe-Style Ultra-Modern High-End Portfolio Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioProjects.map((project, idx) => {
              const hasImage = Boolean(project.image);

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 25, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: (idx % 3) * 0.06,
                    ease: [0.215, 0.61, 0.355, 1.0],
                  }}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View project details for ${project.title}`}
                  className="group cursor-pointer flex flex-col will-change-transform transform-gpu focus:outline-none"
                >
                  {/* --- STRIPE-INSPIRED HIGH-END CARD CONTAINER --- */}
                  <div className="relative w-full rounded-[28px] overflow-hidden border border-white/10 bg-[#0c0f1d] hover:border-[#3b5da6]/70 shadow-2xl hover:shadow-[#3b5da6]/20 transition-all duration-500 transform-gpu group-hover:-translate-y-2 flex flex-col justify-between h-[360px] sm:h-[390px]">
                    
                    {/* Top App Preview Window / Telemetry Header Surface */}
                    <div className="relative w-full h-[180px] sm:h-[200px] bg-gradient-to-b from-[#131930] to-[#0c0f1d] border-b border-white/10 overflow-hidden p-3 flex flex-col">
                      
                      {/* Window Controls Bar */}
                      <div className="flex items-center justify-between mb-2.5 px-1 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest truncate max-w-[150px]">
                          {project.id}.app
                        </span>
                      </div>

                      {/* Mockup Preview Area */}
                      <div className="relative flex-1 w-full rounded-xl overflow-hidden border border-white/10 bg-[#070913]">
                        {hasImage ? (
                          <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          /* Stripe-Style Generative Code & Telemetry Mesh for Text Projects */
                          <div className="w-full h-full bg-gradient-to-br from-[#131a36] via-[#1b254b] to-[#070913] p-4 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#38bdf8]/20 rounded-full blur-2xl pointer-events-none" />
                            
                            <div className="flex items-center justify-between z-10">
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-400/30">
                                <Terminal className="w-3 h-3 text-[#38bdf8]" />
                                SYSTEM TELEMETRY
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400">99.99% OK</span>
                            </div>

                            <div className="space-y-1.5 z-10 font-mono text-[10px] text-zinc-400">
                              <div className="flex justify-between border-b border-white/5 pb-1">
                                <span>STATUS:</span>
                                <span className="text-white font-bold">DEPLOYED</span>
                              </div>
                              <div className="flex justify-between border-b border-white/5 pb-1">
                                <span>ARCH:</span>
                                <span className="text-blue-300">{project.subtitle.split('•')[0] || 'ENTERPRISE'}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Glass Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f1d] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>

                    </div>

                    {/* Bottom Content Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between relative z-10">
                      
                      <div>
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#3b5da6]/20 border border-[#3b5da6]/40 text-[#38bdf8] text-[10px] font-mono font-extrabold uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">
                            #{project.title.charAt(0)}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        {/* Short Description / Outcome */}
                        <p className="mt-1.5 text-xs text-zinc-400 font-medium leading-relaxed line-clamp-2">
                          {project.outcome || project.problemStatement}
                        </p>
                      </div>

                      {/* Bottom Footer Row */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                        <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                          View Case Study
                        </span>

                        <div className="w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-[#38bdf8] group-hover:text-[#070913] transition-all duration-300 flex items-center justify-center shadow-md">
                          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
