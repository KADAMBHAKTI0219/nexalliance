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

        {/* Unique High-End Minimalist Glass Card Grid Layout */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioProjects.slice(0, 9).map((project, idx) => {
              const formattedIndex = (idx + 1).toString().padStart(2, '0');
              return (
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
                  {/* --- UNIQUE HIGH-END GLASS CARD SURFACE --- */}
                  <div className="relative w-full h-[230px] sm:h-[260px] rounded-[32px] overflow-hidden border border-white/15 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#3b5da6]/25 group-hover:border-[#3b5da6]/70 bg-gradient-to-br from-[#191d38] via-[#232746] to-[#14172f] p-6 sm:p-8 text-white flex flex-col justify-between transition-all duration-500 transform-gpu group-hover:-translate-y-1.5">
                    
                    {/* Background Pattern Mesh & Ambient Glow */}
                    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#3b5da6_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
                    <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[#3b5da6]/25 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3b5da6]/45 transition-all duration-500" />

                    {/* Top Row: Initial Emblem + Project Index Badge + Action Arrow */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3b5da6]/40 via-white/10 to-transparent border border-white/20 text-white font-black text-lg flex items-center justify-center font-mono shadow-md group-hover:scale-110 group-hover:border-[#3b5da6] group-hover:bg-[#3b5da6] transition-all duration-300">
                        {project.title.charAt(0)}
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-blue-200 uppercase tracking-widest">
                        PROJ #{formattedIndex}
                      </span>

                      <div className="w-10 h-10 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#25294a] transition-all duration-300 flex items-center justify-center shadow-md border border-white/10">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Bottom Body: Subtitle Pill & Product Name */}
                    <div className="relative z-10">
                      <span className="px-2.5 py-1 rounded-md bg-[#3b5da6]/25 border border-[#3b5da6]/40 text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest font-sans inline-block mb-2.5">
                        {project.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight leading-tight group-hover:text-cyan-200 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      {/* Glowing Cyan Hover Line */}
                      <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#3b5da6] via-cyan-400 to-[#3b5da6] transition-all duration-500 rounded-full mt-4" />
                    </div>

                  </div>
                </motion.article>
              );
            })}
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
