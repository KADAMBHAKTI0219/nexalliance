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
    tagline: 'Connected hardware, sensors & real-time telemetry.',
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
    <section className="relative bg-white text-zinc-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ENGINEERING ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight font-sans">
            Built For The <span className="text-blue-600">Digital Future.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Technology isn&apos;t just about code. It&apos;s about creating possibilities. Here is how we engineer modern capabilities for scalable impact.
          </p>
        </div>

        {/* Interactive Capability Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Matrix (8 Capabilities) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {techCapabilites.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedTech.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTech(item)}
                  className={`p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25 scale-102'
                      : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border-zinc-200/90'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-blue-600 shadow-sm'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-sans leading-snug">{item.title}</h4>
                    <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-blue-100' : 'text-zinc-500'}`}>
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Capability Deep-Dive Card */}
          <div className="lg:col-span-6">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-900 text-white border border-zinc-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mb-6">
                <selectedTech.icon className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                CAPABILITY HIGHLIGHT
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedTech.title}
              </h3>

              <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {selectedTech.details}
              </p>

              {/* Framework & Stack Tags */}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
                  Core Technologies & Standards
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-800 text-cyan-300 text-xs font-mono font-medium border border-zinc-700/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Ready & Production Verified</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
