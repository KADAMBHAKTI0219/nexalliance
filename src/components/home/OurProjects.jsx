'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolioProjects';
import ProjectModal from './ProjectModal';

export const projectsData = portfolioProjects;

export default function OurProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section 
      id="projects" 
      role="region"
      aria-labelledby="projects-heading"
      className="relative py-20 sm:py-28 bg-white text-[#25294a] overflow-hidden select-none border-t border-zinc-100"
    >
      {/* Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 transform-gpu" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold tracking-[0.25em] uppercase mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" aria-hidden="true" />
            <span>FEATURED PORTFOLIO PROJECTS</span>
          </motion.div>

          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#25294a] tracking-tight font-sans leading-tight"
          >
            Our Featured <span className="text-[#3b5da6]">Projects.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed"
          >
            Explore our enterprise projects built to solve real business challenges — click any project to view its case study & interactive system screenshots.
          </motion.p>
        </div>

        {/* Minimalist Pure-Name 3-Column Grid Layout */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioProjects.slice(0, 9).map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: (idx % 3) * 0.07,
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
                {/* --- MINIMALIST PURE NAME CARD SURFACE (Zero Images, Zero Tags, Zero Description) --- */}
                <div className="relative w-full h-[210px] sm:h-[240px] rounded-[28px] overflow-hidden border border-[#3b5da6]/25 shadow-lg group-hover:shadow-2xl group-hover:border-[#3b5da6]/60 bg-gradient-to-br from-[#191d38] via-[#25294a] to-[#1e3a8a] p-6 sm:p-7 text-white flex flex-col justify-between transition-all duration-400 transform-gpu group-hover:-translate-y-1">
                  
                  {/* Background Ambient Radial Glow */}
                  <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[#3b5da6]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3b5da6]/35 transition-all duration-500" />

                  {/* Header: Initial Badge & Action Arrow */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 text-white font-black text-base flex items-center justify-center font-mono shadow-xs group-hover:bg-white/20 transition-colors">
                      {project.title.charAt(0)}
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-[#25294a] transition-all duration-300 flex items-center justify-center shadow-xs">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Body: Product Name ONLY */}
                  <div className="relative z-10">
                    <p className="text-[10px] font-extrabold text-blue-300 uppercase tracking-widest font-sans mb-1 opacity-90 truncate">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

          {/* View More Portfolio Link Button */}
          <div className="mt-14 flex justify-center">
            <Link href="/portfolio" aria-label="Explore all portfolio projects in our full portfolio">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl bg-[#25294a] hover:bg-[#3b5da6] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-[#25294a]/30 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>View Full Enterprise Portfolio ({portfolioProjects.length} Projects)</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.div>
            </Link>
          </div>
        </div>

      </div>

      {/* Showcase Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
