'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Code, TrendingUp, RotateCcw } from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const leaders = [
  {
    name: 'Meet Mistry',
    role: 'Co-Founder · Head of Sales',
    badgeText: 'HEAD OF SALES',
    description: 'Driving revenue growth through strategic client relationships, market expansion, and result-oriented sales engineering.',
    image: '/assets/images/meet_founder.jpeg',
    badgeGradient: 'from-[#3b5da6] to-[#25294a]',
    icon: TrendingUp,
    linkedin: 'https://linkedin.com',
    email: 'mailto:contact@nexallianceit.com',
  },
  {
    name: 'Sanket Pithava',
    role: 'Co-Founder · Head Of Technology',
    badgeText: 'HEAD OF TECHNOLOGY',
    description: 'Leading technology innovation and transforming complex business requirements into scalable digital solutions.',
    image: '/assets/images/sanket_founder.jpeg',
    badgeGradient: 'from-[#25294a] to-[#3b5da6]',
    icon: Code,
    linkedin: 'https://linkedin.com',
    email: 'mailto:tech@nexallianceit.com',
  },
];

export default function AboutTeam() {
  return (
    <section className="relative bg-white text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#25294a] tracking-tight font-sans">
            Meet The People Behind <br />
            <span className="text-[#3b5da6]">NexAlliance.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Hover over the founder cards below to reveal detailed leadership profiles and expertise.
          </p>
        </div>

        {/* Founder 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, idx) => {
            const RoleIcon = leader.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="group [perspective:1000px] h-[480px] sm:h-[540px] w-full"
              >
                {/* 3D Flip Card Inner Container */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[32px]">
                  
                  {/* ================= FRONT SIDE (PERFECT PHOTO + ELEGANT TOP BADGE) ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[32px] overflow-hidden border border-zinc-200 shadow-xl bg-[#25294a]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Text Clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25294a]/95 via-[#25294a]/30 to-transparent" />

                    {/* Top Left Floating Elegant Role Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${leader.badgeGradient} text-white text-xs font-black uppercase tracking-wider shadow-xl shadow-[#3b5da6]/30 border border-white/25 backdrop-blur-md`}>
                        <RoleIcon className="w-3.5 h-3.5" />
                        <span>{leader.badgeText}</span>
                      </div>
                    </div>

                    {/* Bottom Floating Info on Photo Front */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight leading-none">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-black text-blue-300 uppercase tracking-widest mt-1.5">
                          CO-FOUNDER & DIRECTOR
                        </p>
                      </div>

                      {/* Flip Hint Pill */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:rotate-180 transition-transform duration-500 shadow-lg">
                        <RotateCcw className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE (DETAILS ON FLIP) ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#191d38] via-[#25294a] to-[#1e3a8a] text-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border border-[#3b5da6]/30 shadow-2xl relative overflow-hidden">
                    
                    {/* Ambient Decorative Back Glow */}
                    <div className="absolute top-0 right-0 w-56 h-56 bg-[#3b5da6]/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex-1 flex flex-col justify-between">
                      
                      {/* Top Header: Role Icon */}
                      <div className="flex items-center justify-between">
                        <div className="p-3.5 rounded-2xl bg-white/10 text-white border border-white/10 backdrop-blur-md">
                          <RoleIcon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Main Typography & Description */}
                      <div className="my-auto py-2">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight leading-none">
                          {leader.name}
                        </h3>
                        <p className="text-sm sm:text-base font-black text-blue-300 uppercase tracking-widest mt-2 mb-4">
                          CO-FOUNDER & DIRECTOR
                        </p>

                        {/* Founder Bio Description */}
                        <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-medium mb-6">
                          {leader.description}
                        </p>

                        {/* Solid Gradient Pill Badge Directly Below Description */}
                        <div>
                          <span className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${leader.badgeGradient} text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#3b5da6]/25`}>
                            {leader.badgeText}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Social Actions Row */}
                      <div className="flex items-center justify-end gap-3 pt-2">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3.5 rounded-2xl bg-white/10 hover:bg-[#3b5da6] text-white transition-all transform hover:scale-110 flex items-center justify-center border border-white/10 shadow-md"
                          title="LinkedIn Profile"
                        >
                          <LinkedInIcon />
                        </a>
                        <a
                          href={leader.email}
                          className="p-3.5 rounded-2xl bg-white/10 hover:bg-[#3b5da6] text-white transition-all transform hover:scale-110 flex items-center justify-center border border-white/10 shadow-md"
                          title="Send Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
