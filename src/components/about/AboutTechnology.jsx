'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Wifi, Globe, Smartphone, Cloud, Zap, RefreshCw, Code, CheckCircle2 } from 'lucide-react';

const techCapabilites = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Cpu,
    tagline: 'Intelligent automation & predictive modeling.',
    details: 'Custom neural networks, LLM integrations, computer vision inspection, and predictive algorithms designed for enterprise efficiency.',
    tags: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Computer Vision'],
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    icon: Wifi,
    tagline: 'Connected hardware & real-time telemetry.',
    details: 'Industrial IoT gateways, smart sensor telemetry, MQTT data streaming, and remote hardware monitoring dashboards.',
    tags: ['MQTT', 'Embedded Systems', 'Real-time Telemetry', 'Edge Compute'],
  },
  {
    id: 'web',
    title: 'Web Applications',
    icon: Globe,
    tagline: 'Ultra-fast, responsive web platforms.',
    details: 'Next.js App Router, React SSR, micro-frontend architecture, and edge API integration engineered for ultra-low latency.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    icon: Smartphone,
    tagline: 'Native performance on iOS & Android.',
    details: 'Cross-platform React Native and native mobile applications with offline-first synchronization and push notification systems.',
    tags: ['React Native', 'iOS / Android', 'Offline Sync', 'Biometrics'],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    icon: Cloud,
    tagline: 'Scalable multi-cloud & serverless mesh.',
    details: 'Kubernetes container orchestration, AWS/GCP cloud native deployments, Zero-Trust security mesh, and automated CI/CD pipelines.',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: Zap,
    tagline: 'Workflow optimization & automated pipelines.',
    details: 'Robotic Process Automation (RPA), automated testing harnesses, ETL data pipelines, and intelligent workflow orchestrations.',
    tags: ['RPA', 'ETL Pipelines', 'Workflow Engine', 'CI/CD'],
  },
  {
    id: 'digital-transform',
    title: 'Digital Transformation',
    icon: RefreshCw,
    tagline: 'Modernizing legacy enterprise systems.',
    details: 'Legacy system migration, API wrapper layer development, cloud refactoring, and digital ecosystem integration.',
    tags: ['Legacy Migration', 'API Integration', 'Cloud Refactoring'],
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    icon: Code,
    tagline: 'Tailored enterprise ERP, CRM & microservices.',
    details: 'Purpose-built ERP modules, CRM platforms, inventory automation, and bespoke software tailored to unique business logic.',
    tags: ['Enterprise ERP', 'Bespoke CRM', 'Microservices', 'REST APIs'],
  },
];

export default function AboutTechnology() {
  const [selectedTech, setSelectedTech] = useState(techCapabilites[0]);

  return (
    <section className="relative bg-white text-[#25294a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>ENGINEERING ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#25294a] tracking-tight font-sans">
            Built For The <span className="text-[#3b5da6]">Digital Future.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Technology isn&apos;t just about code. It&apos;s about creating possibilities. Here is how we engineer modern capabilities for scalable impact.
          </p>
        </div>

        {/* Interactive Capability Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Matrix (8 Capabilities) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {techCapabilites.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedTech.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTech(item)}
                  className={`w-full min-w-0 p-3.5 sm:p-4 rounded-2xl border text-left flex items-center gap-3 sm:gap-3.5 transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'bg-[#3b5da6] text-white border-[#3b5da6] shadow-lg shadow-[#3b5da6]/25 scale-[1.01]'
                      : 'bg-zinc-50 hover:bg-zinc-100 text-[#25294a] border-zinc-200/90'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#3b5da6] shadow-xs'}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h4 className="text-sm font-black font-sans leading-snug truncate">{item.title}</h4>
                    <p className={`text-[11px] sm:text-xs leading-tight line-clamp-2 mt-0.5 ${isSelected ? 'text-blue-100' : 'text-zinc-500'}`}>
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Capability Deep-Dive Card */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#191d38] via-[#25294a] to-[#1e3a8a] text-white border border-[#3b5da6]/30 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b5da6]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mb-6 shadow-xs">
                <selectedTech.icon className="w-7 h-7 text-blue-300" />
              </div>

              <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">
                CAPABILITY HIGHLIGHT
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedTech.title}
              </h3>

              <p className="mt-4 text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
                {selectedTech.details}
              </p>

              {/* Framework & Stack Tags */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-3">
                  Core Technologies & Standards
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-mono font-bold border border-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-300">
                <CheckCircle2 className="w-4 h-4 text-blue-300" />
                <span>Enterprise Ready & Production Verified</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
