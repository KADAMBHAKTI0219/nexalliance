'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Herosection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const cardTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;

      // Master ScrollTrigger Timeline for GSAP Center Card Expansion to 100% Viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Header Text & Badge fade out & float up
      tl.to(
        headerRef.current,
        {
          opacity: 0,
          y: -60,
          duration: 0.3,
          ease: 'power2.out',
        },
        0
      );

      // 2. Center Card Label Text fades out
      tl.to(
        cardTextRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.out',
        },
        0
      );

      // 3. Left Card slides out to the left & fades
      tl.to(
        leftCardRef.current,
        {
          xPercent: isMobile ? -130 : -160,
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        0
      );

      // 4. Right Card slides out to the right & fades
      tl.to(
        rightCardRef.current,
        {
          xPercent: isMobile ? 130 : 160,
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        0
      );

      // 5. Center Card expands smoothly from CENTER to fill 100% viewport
      const targetScaleX = isMobile ? 100 / 64 : 100 / 46;
      const targetScaleY = isMobile ? 100 / 44 : 100 / 56;
      const scaleFactor = Math.max(targetScaleX, targetScaleY) * 1.08;

      tl.to(
        centerCardRef.current,
        {
          scale: scaleFactor,
          borderRadius: '0px',
          duration: 1,
          ease: 'power2.inOut',
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-screen bg-white text-[#25294a] overflow-hidden select-none flex flex-col justify-between"
    >
      {/* Top Header Text & Badge */}
      <div
        ref={headerRef}
        className="z-20 text-center w-full max-w-7xl mx-auto px-4 flex flex-col items-center shrink-0 pt-6 sm:pt-10 lg:pt-12 pointer-events-none"
      >
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black uppercase tracking-wider sm:tracking-widest text-[#3b5da6] font-sans drop-shadow-sm leading-none">
          NEXALLIANCE
        </h1>
        <p className="mt-2.5 sm:mt-3 text-[10px] sm:text-xs md:text-sm 2xl:text-base text-[#3b5da6] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] uppercase bg-[#3b5da6]/10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#3b5da6]/20 shadow-sm max-w-[92vw] whitespace-nowrap overflow-hidden text-ellipsis">
          Intelligent Industrial Automation & Software
        </p>
      </div>

      {/* Gallery Image Row Container - Perfectly Centered & Max-w-7xl Constrained */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-center gap-2 sm:gap-6 lg:gap-8 px-2 sm:px-8 overflow-hidden z-10">

        {/* Left Image Card: INNOVATE */}
        <div
          ref={leftCardRef}
          className="relative z-10 w-[32vw] sm:w-[22vw] lg:w-[20vw] max-w-[280px] h-[38vh] sm:h-[48vh] lg:h-[50vh] max-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/90 group shrink-0"
        >
          <Image
            src="/assets/images/innovate.png"
            alt="Innovate NexAlliance"
            fill
            priority
            sizes="(max-width: 640px) 35vw, (max-width: 1024px) 22vw, 280px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 sm:bottom-6 left-1 sm:left-6 right-1 sm:right-6 text-white font-black text-[11px] xs:text-xs sm:text-2xl xl:text-3xl uppercase tracking-tight xs:tracking-wider leading-none drop-shadow-md pointer-events-none text-center sm:text-left">
            INNOVATE
          </div>
        </div>

        {/* Center Image Card (MAIN FOCUS): BUILD - Expands from dead center outward */}
        <div
          ref={centerCardRef}
          className="relative z-30 w-[64vw] sm:w-[48vw] lg:w-[44vw] max-w-[620px] h-[42vh] sm:h-[52vh] lg:h-[54vh] max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/90 flex items-center justify-center bg-zinc-950 shrink-0 group origin-center will-change-transform"
        >
          <Image
            src="/assets/images/build.png"
            alt="Build Colorful 1920x1080"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 620px"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />

          {/* Dark Gradient Overlay for initial state */}
          <div
            ref={cardTextRef}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none flex items-end justify-center pb-5 sm:pb-8"
          >
            <div className="text-white font-black text-sm xs:text-base sm:text-2xl xl:text-3xl uppercase tracking-wider leading-none drop-shadow-lg">
              BUILD
            </div>
          </div>
        </div>

        {/* Right Image Card: TRANSFORM */}
        <div
          ref={rightCardRef}
          className="relative z-10 w-[32vw] sm:w-[22vw] lg:w-[20vw] max-w-[280px] h-[38vh] sm:h-[48vh] lg:h-[50vh] max-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/90 group shrink-0"
        >
          <Image
            src="/assets/images/transform.jpg"
            alt="Transform NexAlliance"
            fill
            priority
            sizes="(max-width: 640px) 35vw, (max-width: 1024px) 22vw, 280px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 sm:bottom-6 left-1 sm:left-6 right-1 sm:right-6 text-white font-black text-[10px] xs:text-xs sm:text-2xl xl:text-3xl uppercase tracking-tighter xs:tracking-wider leading-none drop-shadow-md pointer-events-none text-center sm:text-left">
            TRANSFORM
          </div>
        </div>

      </div>

      {/* Bottom spacer for flex alignment */}
      <div className="h-4 sm:h-8 shrink-0 pointer-events-none" />
    </section>
  );
}