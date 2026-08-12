'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Database, Layers, Globe, TrendingUp, Server, Smartphone, Cpu } from 'lucide-react';

const servicesData = [
  {
    id: 'erp',
    title: 'ERP Systems',
    description: 'Custom ERP platforms built to centralize telemetry, supply chain, inventory & financials.',
    tags: ['Supply Chain', 'Inventory', 'Telemetry', 'Financials'],
    bgColor: 'bg-[#e0f2fe]',
    borderColor: 'border-blue-200/80',
    pillColor: 'bg-[#bae6fd]/80 text-blue-950',
    icon: Database,
    link: '/portfolio',
  },
  {
    id: 'crm',
    title: 'CRM Platforms',
    description: 'Data-driven CRM ecosystems engineered for sales automation & predictive analytics.',
    tags: ['Sales Auto', 'Omnichannel', 'Analytics', 'Workflows'],
    bgColor: 'bg-[#ffedd5]',
    borderColor: 'border-amber-200/80',
    pillColor: 'bg-[#fed7aa]/80 text-amber-950',
    icon: Layers,
    link: '/portfolio',
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Next.js & React powered web applications with ultra-fast page speed & micro-interactions.',
    tags: ['Next.js', 'React SSR', 'Tailwind', 'REST APIs'],
    bgColor: 'bg-[#f3e8ff]',
    borderColor: 'border-purple-200/80',
    pillColor: 'bg-[#e9d5ff]/80 text-purple-950',
    icon: Globe,
    link: '/portfolio',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Performance-led digital marketing strategies, SEO engineering & conversion funnel scaling.',
    tags: ['SEO Funnels', 'Brand Scale', 'Campaigns', 'Growth'],
    bgColor: 'bg-[#dcfce7]',
    borderColor: 'border-emerald-200/80',
    pillColor: 'bg-[#bbf7d0]/80 text-emerald-950',
    icon: TrendingUp,
    link: '/portfolio',
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Multi-region cloud infrastructure, Kubernetes orchestration & zero-trust DevOps pipelines.',
    tags: ['AWS / GCP', 'Kubernetes', 'CI/CD Auto', 'Zero-Trust'],
    bgColor: 'bg-[#ffe4e6]',
    borderColor: 'border-rose-200/80',
    pillColor: 'bg-[#fecdd3]/80 text-rose-950',
    icon: Server,
    link: '/portfolio',
  },
  {
    id: 'mobile',
    title: 'App Development',
    description: 'iOS & Android native mobile applications engineered for high performance & offline sync.',
    tags: ['React Native', 'iOS & Android', 'Offline Sync', 'Push Alerts'],
    bgColor: 'bg-[#e0e7ff]',
    borderColor: 'border-indigo-200/80',
    pillColor: 'bg-[#c7d2fe]/80 text-indigo-950',
    icon: Smartphone,
    link: '/portfolio',
  },
  {
    id: 'ai',
    title: 'AI Automation',
    description: 'Custom LLM integrations, autonomous neural agents & computer vision pipeline automation.',
    tags: ['LLM Agents', 'Neural Nets', 'Vision AI', 'Predictive'],
    bgColor: 'bg-[#ccfbf1]',
    borderColor: 'border-teal-200/80',
    pillColor: 'bg-[#99f6e4]/80 text-teal-950',
    icon: Cpu,
    link: '/portfolio',
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-heading"
      className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#f8fafc] text-[#25294a] select-none border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold uppercase tracking-[0.2em] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" aria-hidden="true" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#25294a] font-sans leading-tight">
            Our <span className="text-[#3b5da6]">Services.</span>
          </h2>
          <p className="mt-3 text-zinc-600 max-w-2xl text-sm sm:text-base font-medium leading-relaxed">
            Comprehensive digital solutions, scalable cloud systems, and intelligent AI automation tailored to accelerate your business growth.
          </p>
        </div>

        {/* Reference Pastel Card Grid Layout (Matching User Image) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                className="group relative rounded-[32px] bg-white border border-zinc-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                <Link href={service.link} className="flex flex-col justify-between h-full p-2.5">
                  
                  {/* Top Tinted Pastel Content Area */}
                  <div className={`p-6 sm:p-7 rounded-[26px] ${service.bgColor} ${service.borderColor} border flex flex-col justify-between min-h-[260px]`}>
                    
                    {/* Header: Title & Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-black text-zinc-900 font-sans tracking-tight leading-snug group-hover:text-[#3b5da6] transition-colors">
                          {service.title}
                        </h3>
                        <div className="p-2 rounded-xl bg-white/60 text-zinc-800 shadow-xs shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-medium text-zinc-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Flexible Pill Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-tight shadow-2xs ${service.pillColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Footer Row: Explore Label + Action Arrow Button */}
                  <div className="px-5 py-3.5 flex items-center justify-between bg-white rounded-b-[26px]">
                    <span className="text-sm font-black text-zinc-900 font-sans tracking-tight group-hover:text-[#3b5da6] transition-colors">
                      Explore
                    </span>

                    <div className="w-9 h-9 rounded-full bg-zinc-900 text-white group-hover:bg-[#3b5da6] transition-colors flex items-center justify-center shadow-xs">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}