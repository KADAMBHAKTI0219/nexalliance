'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Database, Server, Smartphone, Globe, TrendingUp, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesList = [
  {
    number: '01',
    category: 'ENTERPRISE ERP',
    title: 'ERP Systems',
    headline: 'Intelligent Enterprise Resource Planning',
    description: 'Custom ERP platforms built to centralize telemetry, automate supply chain logistics, manage inventory, and optimize financial workflows.',
    badge: 'Enterprise Grade',
    buttonText: 'View ERP Projects',
    link: '/portfolio',
    icon: Database,
    align: 'left',
  },
  {
    number: '02',
    category: 'SALES & TELEMETRY',
    title: 'CRM Platforms',
    headline: 'High-Concurrency Customer Management',
    description: 'Data-driven CRM ecosystems engineered for sales automation, omnichannel client communication, and predictive revenue analytics.',
    badge: 'Sales Telemetry',
    buttonText: 'View CRM Projects',
    link: '/portfolio',
    icon: Layers,
    align: 'right',
  },
  {
    number: '03',
    category: 'FULL-STACK WEB',
    title: 'Web Development',
    headline: 'High-Performance Modern Web Apps',
    description: 'Next.js & React powered web applications with micro-interactions, ultra-fast page speed scores, and robust API architecture.',
    badge: 'Next.js & React',
    buttonText: 'View Web Projects',
    link: '/portfolio',
    icon: Globe,
    align: 'left',
  },
  {
    number: '04',
    category: 'GROWTH ENGINE',
    title: 'Digital Marketing',
    headline: 'Data-Driven Brand Growth & Scaling',
    description: 'Performance-led digital marketing strategies, SEO engineering, growth funnel optimization, and automated conversion campaigns.',
    badge: 'SEO & Growth',
    buttonText: 'View SEO Projects',
    link: '/portfolio',
    icon: TrendingUp,
    align: 'right',
  },
  {
    number: '05',
    category: 'DEVOPS & CLOUD',
    title: 'Cloud Computing',
    headline: 'Scalable Infrastructure & DevOps',
    description: 'Multi-region cloud infrastructure, Kubernetes orchestration, CI/CD automation, and zero-trust security engineered for 99.99% uptime.',
    badge: '99.99% Uptime',
    buttonText: 'View Cloud Projects',
    link: '/portfolio',
    icon: Server,
    align: 'left',
  },
  {
    number: '06',
    category: 'MOBILE NATIVE',
    title: 'App Development',
    headline: 'Cross-Platform Native Mobile Apps',
    description: 'iOS & Android mobile applications engineered for high performance, intuitive UX, offline-first data sync, and frictionless deployments.',
    badge: 'iOS & Android',
    buttonText: 'View App Projects',
    link: '/portfolio',
    icon: Smartphone,
    align: 'right',
  },
  {
    number: '07',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'AI Automation',
    headline: 'Autonomous Neural Agents & LLMs',
    description: 'Custom LLM integrations, autonomous AI agents, computer vision pipelines, and predictive machine learning models built to automate business processes.',
    badge: 'LLM & AI Agents',
    buttonText: 'View AI Projects',
    link: '/portfolio',
    icon: Cpu,
    align: 'left',
  },
];

export default function OurServices() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // 1. Animate active glowing SVG path stroke as user scrolls down
      if (pathRef.current) {
        const path = pathRef.current;
        try {
          const pathLength = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              end: 'bottom 80%',
              scrub: 0.6,
              fastScrollEnd: true,
            },
          });
        } catch (e) {
          console.warn('SVG path total length error:', e);
        }
      }

      // 2. Synchronized Card Entrance Reveal
      cardRefs.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      role="region"
      aria-labelledby="services-heading"
      className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#f8fafc] text-[#25294a] select-none overflow-hidden transform-gpu"
    >
      {/* Light Clean Ambient Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#3b5da6]/10 via-[#25294a]/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10 transform-gpu" 
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 flex flex-col items-center z-20 shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-extrabold uppercase tracking-[0.2em] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" aria-hidden="true" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 id="services-heading" className="text-4xl sm:text-6xl font-black tracking-tight text-[#25294a] font-sans leading-tight">
            Our <span className="text-[#3b5da6]">Services.</span>
          </h2>
          <p className="mt-3 text-[#25294a]/80 max-w-2xl text-sm sm:text-base font-medium leading-relaxed">
            Comprehensive digital solutions, scalable cloud systems, and intelligent AI automation tailored to accelerate your business growth.
          </p>
        </div>

        {/* 100% Ultra-Smooth Continuous Curved SVG Trail Line */}
        <div aria-hidden="true" className="hidden lg:block absolute top-[210px] bottom-[80px] inset-x-0 pointer-events-none z-0">
          <svg
            className="w-full h-full transform-gpu"
            viewBox="0 0 1000 2100"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="blueGlowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b5da6" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3b5da6" stopOpacity="1" />
                <stop offset="100%" stopColor="#25294a" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Background Trail Guide */}
            <path
              d="M 280,80 C 750,80 880,240 720,380 C 560,520 120,520 280,680 C 440,840 880,840 720,980 C 560,1120 120,1120 280,1280 C 440,1440 880,1440 720,1580 C 560,1720 120,1720 280,1880"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Active Scroll-Animated Glowing Continuous Wave */}
            <path
              ref={pathRef}
              d="M 280,80 C 750,80 880,240 720,380 C 560,520 120,520 280,680 C 440,840 880,840 720,980 C 560,1120 120,1120 280,1280 C 440,1440 880,1440 720,1580 C 560,1720 120,1720 280,1880"
              stroke="url(#blueGlowGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 7 Alternating Services Cards Layout */}
        <div className="w-full flex flex-col gap-12 sm:gap-18 lg:gap-22 relative z-10">
          {servicesList.map((service, index) => {
            const isLeft = service.align === 'left';
            const IconComp = service.icon;

            return (
              <article
                key={service.number}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                className={`w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 ${
                  isLeft ? 'lg:justify-items-start' : 'lg:justify-items-end'
                }`}
              >
                {/* Card Container */}
                <div
                  className={`w-full lg:col-span-6 ${
                    isLeft ? 'lg:col-start-1' : 'lg:col-start-7'
                  }`}
                >
                  <div className="relative group rounded-[28px] bg-white border border-zinc-200/90 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 overflow-hidden transform-gpu z-10">
                    
                    {/* Background Decorative Icon Watermark */}
                    <div aria-hidden="true" className="absolute top-4 right-16 text-zinc-100 group-hover:text-[#3b5da6]/10 transition-colors duration-300 pointer-events-none">
                      <IconComp className="w-24 h-24 stroke-[1.2]" />
                    </div>

                    {/* Top Row: Category Tag & Number */}
                    <div className="z-10 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b5da6]/10 text-[#3b5da6] text-[11px] font-black uppercase tracking-wider border border-[#3b5da6]/20">
                          <IconComp className="w-3.5 h-3.5 text-[#3b5da6]" aria-hidden="true" />
                          <span>{service.category}</span>
                        </div>
                        <span className="text-sm sm:text-base font-mono font-black text-[#3b5da6] bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200/80">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-[#25294a] font-sans tracking-tight mb-2.5 leading-snug group-hover:text-[#3b5da6] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed pr-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Left Badge */}
                    <div className="flex items-center mt-6 z-10 pb-0.5 max-w-[50%]">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 text-[#25294a] text-[11px] font-extrabold border border-zinc-200/90 shadow-2xs whitespace-nowrap overflow-hidden text-ellipsis">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#3b5da6] shrink-0" aria-hidden="true" />
                        <span className="truncate">{service.badge}</span>
                      </div>
                    </div>

                    {/* Bottom Right Notch Cutout Container & Button */}
                    <div className="absolute bottom-0 right-0 z-20">
                      <div className="relative bg-[#f8fafc] rounded-tl-2xl rounded-br-[28px] p-1.5 sm:p-2 pt-2 pl-2">
                        {/* Concave Inverted Corner Fillets */}
                        <div aria-hidden="true" className="notch-fillet-top" />
                        <div aria-hidden="true" className="notch-fillet-left" />

                        {/* Category Project Action Button */}
                        <Link
                          href={service.link}
                          aria-label={`View ${service.title} Projects`}
                          className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-[#25294a] text-[#25294a] hover:text-white font-black text-xs tracking-wider border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer group/subbox hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3b5da6]"
                        >
                          <span className="whitespace-nowrap font-black">{service.buttonText}</span>
                          <ArrowRight className="w-4 h-4 text-[#3b5da6] group-hover/subbox:text-white transition-colors group-hover/subbox:translate-x-1 shrink-0" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}