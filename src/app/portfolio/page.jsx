'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowLeft, Download, Loader2 } from 'lucide-react';
import ProjectModal from '@/components/home/ProjectModal';
import { projectsData } from '@/components/home/OurProjects';
import { generatePortfolioPDF } from '@/utils/generatePortfolioPDF';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async (e) => {
    if (e) e.stopPropagation();
    setIsDownloading(true);
    try {
      await generatePortfolioPDF(projectsData);
    } catch (err) {
      console.error('PDF Generation Error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#25294a] flex flex-col font-sans select-none overflow-x-hidden pt-28 pb-24">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
        
        {/* Breadcrumb & Hero Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center justify-between w-full flex-wrap gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-bold tracking-wider uppercase transition-colors border border-zinc-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            {/* Download Portfolio PDF Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#25294a] hover:bg-[#3b5da6] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Portfolio PDF</span>
                </>
              )}
            </button>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>EXPLORE ALL WORKS ({projectsData.length} PROJECTS)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#25294a] tracking-tight font-sans mb-4">
            Our Complete <span className="text-[#3b5da6]">Portfolio.</span>
          </h1>
          <p className="text-zinc-700 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
            Discover our full suite of enterprise ERP systems, SaaS platforms, e-commerce ecosystems, and digital workstations built for high performance.
          </p>
        </div>

        {/* 2-Column Grid Container showcasing ALL 7 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start [perspective:1200px]">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  x: isEven ? -140 : 140,
                  rotateY: isEven ? -25 : 25,
                  rotateX: 10,
                  scale: 0.88,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: (idx % 2) * 0.15,
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
                className="group cursor-pointer flex flex-col will-change-transform transform-gpu focus:outline-none focus:ring-2 focus:ring-[#3b5da6] rounded-3xl"
              >
                {/* Large Project Image Container */}
                <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[480px] rounded-3xl sm:rounded-[32px] overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-100 mb-5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title} - ${project.category}`}
                      fill
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#25294a] via-[#1d203b] to-[#3b5da6] p-6 sm:p-10 text-white flex flex-col justify-between relative group-hover:scale-[1.01] transition-transform duration-700 ease-out">
                      <div>
                        <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px] font-extrabold tracking-wider uppercase mb-4 shadow-xs">
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-zinc-200 text-xs sm:text-sm font-medium line-clamp-3 leading-relaxed">
                          {project.problemStatement || project.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                        {project.solution && (
                          <div className="flex flex-wrap gap-1.5">
                            {project.solution.slice(0, 3).map((sol, i) => (
                              <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-bold border border-white/10">
                                ✓ {sol}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Subtle top-right hover arrow badge */}
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-[#25294a]/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 z-20">
                    <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Subtitle / Category dot-separated string */}
                <div className="text-[11px] sm:text-xs font-extrabold text-zinc-600 tracking-widest uppercase mb-1 font-sans">
                  {project.subtitle}
                </div>

                {/* Main Project Display Title */}
                <h2 className="text-2xl sm:text-4xl font-black text-[#25294a] font-sans tracking-tight group-hover:text-[#3b5da6] transition-colors">
                  {project.title}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Page GSAP Horizontal Showcase Modal */}
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

