'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from "gsap";
import { Home, User, Briefcase, FolderKanban, Mail, Send } from 'lucide-react';

// Register MorphSVGPlugin if available in client environment
if (typeof window !== "undefined") {
  try {
    // @ts-ignore
    import("gsap/MorphSVGPlugin").then((plugin) => {
      if (plugin && plugin.MorphSVGPlugin) {
        gsap.registerPlugin(plugin.MorphSVGPlugin);
      }
    }).catch(e => {
      console.warn("GSAP MorphSVGPlugin not found.", e);
    });
  } catch (e) {
    console.warn("GSAP MorphSVGPlugin error:", e);
  }
}

// Helper component for Morphing Icons
const MorphingIcon = ({ type, isActive, onClick, onMouseEnter }) => {
  const buttonRef = useRef(null);
  const pathRef = useRef(null);

  const animateHome = () => {
    if (!buttonRef.current || !pathRef.current) return;
    const button = buttonRef.current;
    const path = pathRef.current;

    gsap.to(button, {
      "--tab-bar-home-scale": 0.25,
      "--tab-bar-home-opacity": 0,
      duration: 0.1,
      onComplete: () => {
        gsap.to(path, {
          keyframes: [
            { morphSVG: "M12.6387 3.53796L15.1949 7.69178C15.7004 8.51322 15.7802 9.5276 15.4092 10.4179L11.3846 20.0769C11.2016 20.516 11.5243 21 12 21V21C12.4757 21 12.7984 20.516 12.6154 20.0769L8.5908 10.4179C8.21983 9.5276 8.29956 8.51322 8.80506 7.69178L11.3613 3.53796C11.6541 3.06206 12.3459 3.06206 12.6387 3.53796Z", duration: 0.1 },
            { morphSVG: "M12.1483 3.46366L12.8548 8.05624C12.9493 8.67024 12.8508 9.29842 12.573 9.85405L8.08541 18.8292C7.58673 19.8265 8.31198 21 9.42705 21H14.5729C15.688 21 16.4133 19.8265 15.9146 18.8292L11.427 9.85405C11.1492 9.29842 11.0507 8.67024 11.1452 8.05624L11.8517 3.46366C11.8778 3.29407 12.1222 3.29407 12.1483 3.46366Z", duration: 0.09 },
            {
              morphSVG: "M21 18V10.5339C21 9.57062 20.5374 8.66591 19.7565 8.1019L13.7565 3.76856C12.7079 3.01128 11.2921 3.01128 10.2435 3.76856L4.24353 8.1019C3.46259 8.66591 3 9.57062 3 10.5339V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18Z",
              duration: 0.71, ease: "elastic.out(1, .9)",
              onStart: () => {
                gsap.to(button, { "--tab-bar-home-scale": 0.7, duration: 0.71, ease: "elastic.out(1, .9)" });
                gsap.to(button, { "--tab-bar-home-opacity": 1, duration: 0.2 });
              },
            },
          ],
        });
      },
    });
  };

  const animateBlog = () => {
    if (!buttonRef.current || !pathRef.current) return;
    const button = buttonRef.current;
    const path = pathRef.current;

    gsap.to(button, {
      "--tab-bar-blog-scale": 0.25,
      "--tab-bar-blog-opacity": 0,
      duration: 0.1,
      onComplete: () => {
        gsap.to(path, {
          keyframes: [
            { morphSVG: "M12 21C12 21 15.3954 18.8605 13.3637 16C12.0647 14.1711 9.51275 11.9823 9 10C8 6.134 10.134 3 12 3C13.866 3 16 6.134 15 10C14.4873 11.9823 11.9353 14.1711 10.6363 16C8.60464 18.8605 12 21 12 21Z", duration: 0.1 },
            { morphSVG: "M12 21C12 21 14.0216 19.0215 14.3637 16C14.6026 13.8898 13.5128 11.9823 13 10C12 6.134 13.134 3 12 3C10.866 3 12 6.134 11 10C10.4873 11.9823 9.39736 13.8898 9.6363 16C9.97843 19.0215 12 21 12 21Z", duration: 0.05 },
            {
              morphSVG: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
              duration: 0.7,
              ease: "elastic.out(1, .9)",
              onStart: () => {
                gsap.to(button, { "--tab-bar-blog-scale": 0.7, duration: 0.7, ease: "elastic.out(1, .9)" });
                gsap.to(button, { "--tab-bar-blog-opacity": 1, duration: 0.2 });
              }
            }
          ]
        });
      }
    });
  };

  const animateMarker = () => {
    if (!buttonRef.current || !pathRef.current) return;
    const button = buttonRef.current;
    const path = pathRef.current;
    gsap.to(button, {
      "--tab-bar-marker-scale": 0.25, "--tab-bar-marker-opacity": 0, duration: 0.1, onComplete: () => {
        gsap.to(path, {
          keyframes: [
            { morphSVG: "M12 21C12 21 15.3954 18.8605 13.3637 16C12.0647 14.1711 9.51275 11.9823 9 10C8 6.134 10.134 3 12 3C13.866 3 16 6.134 15 10C14.4873 11.9823 11.9353 14.1711 16.6363 16C14.6046 18.8605 12 21 12 21Z", duration: 0.1 },
            { morphSVG: "M12 21C12 21 14.0216 19.0215 14.3637 16C14.6026 13.8898 13.5128 11.9823 13 10C12 6.134 13.134 3 12 3C10.866 3 12 6.134 11 10C10.4873 11.9823 9.39736 13.8898 9.6363 16C9.97843 19.0215 12 21 12 21Z", duration: 0.05 },
            {
              morphSVG: "M12 21C12 21 14.6062 18.8589 16.64 16C17.941 14.1711 19 12.0475 19 10C19 6.134 15.87 3 12 3C8.13 3 5 6.134 5 10C5 12.0475 6.05896 14.1711 7.36 16C9.39381 18.8589 12 21 12 21Z",
              duration: 0.75, ease: "elastic.out(1, .9)",
              onStart: () => {
                gsap.to(button, { "--tab-bar-marker-scale": 0.7, duration: 0.75, ease: "elastic.out(1, .9)" });
                gsap.to(button, { "--tab-bar-marker-opacity": 1, duration: 0.2 });
              }
            }
          ]
        });
      }
    });
  };

  const animateEmail = () => {
    if (!buttonRef.current || !pathRef.current) return;
    const button = buttonRef.current;
    const path = pathRef.current;
    gsap.to(button, {
      "--tab-bar-email-scale": 0.25, "--tab-bar-email-opacity": 0, duration: 0.1, onComplete: () => {
        gsap.to(path, {
          keyframes: [
            { morphSVG: "M12 21C12 21 15.3954 18.8605 13.3637 16C12.0647 14.1711 9.51275 11.9823 9 10C8 6.134 10.134 3 12 3C13.866 3 16 6.134 15 10C14.4873 11.9823 11.9353 14.1711 16.6363 16C8.60464 18.8605 12 21 12 21Z", duration: 0.1 },
            { morphSVG: "M12 21C12 21 14.0216 19.0215 14.3637 16C14.6026 13.8898 13.5128 11.9823 13 10C12 6.134 13.134 3 12 3C10.866 3 12 6.134 11 10C10.4873 11.9823 9.39736 13.8898 9.6363 16C9.97843 19.0215 12 21 12 21Z", duration: 0.05 },
            {
              morphSVG: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
              duration: 0.7, ease: "elastic.out(1, .9)",
              onStart: () => {
                gsap.to(button, { "--tab-bar-email-scale": 0.7, duration: 0.7, ease: "elastic.out(1, .9)" });
                gsap.to(button, { "--tab-bar-email-opacity": 1, duration: 0.2 });
              }
            }
          ]
        });
      }
    });
  };

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter();
    if (type === 'home') animateHome();
    else if (type === 'blog' || type === 'services') animateBlog();
    else if (type === 'marker' || type === 'portfolio' || type === 'projects') animateMarker();
    else if (type === 'email' || type === 'contact') animateEmail();
  };

  const btnClass = "w-full h-full flex items-center justify-center p-0 bg-transparent border-0 outline-none cursor-pointer transition-colors";
  const svgClass = "w-4 h-4 sm:w-5 sm:h-5 fill-current stroke-none transition-colors duration-200";

  if (type === 'home') {
    return (
      <button ref={buttonRef} onClick={onClick} onMouseEnter={handleMouseEnter} className={cn(btnClass, "home", isActive ? "active text-[#3b5da6]" : "text-[#25294a] hover:text-[#3b5da6]")}>
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path ref={pathRef} d="M3 18V10.5339C3 9.57062 3.46259 8.66591 4.24353 8.1019L10.2435 3.76856C11.2921 3.01128 12.7079 3.01128 13.7565 3.76856L19.7565 8.1019C20.5374 8.66591 21 10.5339V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18Z" />
        </svg>
      </button>
    );
  }
  if (type === 'blog' || type === 'services') {
    return (
      <button ref={buttonRef} onClick={onClick} onMouseEnter={handleMouseEnter} className={cn(btnClass, "blog", isActive ? "active text-[#3b5da6]" : "text-[#25294a] hover:text-[#3b5da6]")}>
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path ref={pathRef} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      </button>
    );
  }
  if (type === 'marker' || type === 'portfolio' || type === 'projects') {
    return (
      <button ref={buttonRef} onClick={onClick} onMouseEnter={handleMouseEnter} className={cn(btnClass, "marker", isActive ? "active text-[#3b5da6]" : "text-[#25294a] hover:text-[#3b5da6]")}>
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path ref={pathRef} d="M12 21C12 21 14.6062 18.8589 16.64 16C17.941 14.1711 19 12.0475 19 10C19 6.134 15.87 3 12 3C8.13 3 5 6.134 5 10C5 12.0475 6.05896 14.1711 7.36 16C9.39381 18.8589 12 21 12 21Z" />
        </svg>
      </button>
    );
  }
  if (type === 'email' || type === 'contact') {
    return (
      <button ref={buttonRef} onClick={onClick} onMouseEnter={handleMouseEnter} className={cn(btnClass, "email", isActive ? "active text-[#3b5da6]" : "text-[#25294a] hover:text-[#3b5da6]")}>
        <svg viewBox="0 0 24 24" className={svgClass}>
          <path ref={pathRef} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </button>
    );
  }

  return null;
};

// Adaptive GlassDock Component: Pure Icons on Mobile, Icon + Name Underneath on Desktop (md+)
const GlassDock = React.forwardRef(
  ({ className, items = [], dockClassName, ...props }, ref) => {
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleNavClick = (e, item) => {
      const targetHref = item.href || '#';

      if (targetHref.includes('#')) {
        const [path, hash] = targetHref.split('#');
        const isCurrentPage = pathname === path || (pathname === '/' && path === '');

        if (isCurrentPage && hash) {
          e.preventDefault();
          const elem = document.getElementById(hash);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      }
    };

    return (
      <div
        ref={ref}
        className={cn('relative overflow-visible shrink-0', className)}
        {...props}
      >
        <div
          className={cn(
            "glass-dock relative flex gap-1 sm:gap-2.5 md:gap-3.5 items-center px-1 sm:px-2 py-1 rounded-2xl overflow-visible justify-center shrink-0",
            dockClassName
          )}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Navigation Buttons: Pure Icon on Mobile, Icon + Name Underneath on md+ */}
          {items.map((el, index) => {
            const Icon = el.icon;
            const isHovered = hoveredIndex === index;
            const isRouteActive = pathname === el.href || (pathname === '/' && el.href === '/') || (pathname === '/about' && el.href === '/about') || (pathname === '/portfolio' && el.href === '/portfolio') || (pathname === '/contact-us' && el.href === '/contact-us');
            const isActive = isHovered || isRouteActive;

            const type = el.title ? el.title.toLowerCase() : '';
            const isAnimated = ['home', 'blog', 'services', 'marker', 'portfolio', 'projects', 'email', 'contact'].includes(type);

            return (
              <Link
                key={el.title || index}
                href={el.href || '#'}
                onClick={(e) => handleNavClick(e, el)}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-1.5 xs:px-2 md:px-3 py-1 rounded-xl transition-all duration-300 cursor-pointer select-none group shrink-0"
              >
                <motion.div
                  whileTap={{ scale: 0.94 }}
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                    y: isHovered ? -2 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="flex flex-col items-center justify-center gap-0.5"
                >
                  {/* Icon Container */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                    {isAnimated ? (
                      <MorphingIcon
                        type={type}
                        isActive={isActive}
                        onClick={() => { }}
                        onMouseEnter={() => { }}
                      />
                    ) : Icon ? (
                      <Icon
                        className={cn(
                          'h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200',
                          isRouteActive
                            ? 'text-[#3b5da6]'
                            : isHovered
                              ? 'text-[#3b5da6]'
                              : 'text-[#25294a]'
                        )}
                      />
                    ) : null}
                  </div>

                  {/* Text Label Directly Underneath Icon (Visible ONLY on Desktop md: and above) */}
                  <span
                    className={cn(
                      'hidden md:block text-[10px] font-black font-sans uppercase tracking-wider transition-colors duration-200 leading-none mt-0.5',
                      isActive
                        ? 'text-[#3b5da6]'
                        : 'text-[#25294a]/85 group-hover:text-[#3b5da6]'
                    )}
                  >
                    {el.title}
                  </span>

                  {/* Active Route Glow Dot */}
                  {isRouteActive && (
                    <motion.span
                      layoutId="activeDockDot"
                      className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#3b5da6] shadow-sm shadow-[#3b5da6]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
);

GlassDock.displayName = 'GlassDock';

export default function Navbar({ items }) {
  const defaultItems = [
    { title: "Home", icon: Home, href: "/#hero" },
    { title: "Services", icon: Briefcase, href: "/#services" },
    { title: "Portfolio", icon: FolderKanban, href: "/portfolio" },
    { title: "About", icon: User, href: "/about" },
    { title: "Contact", icon: Mail, href: "/contact-us" },
  ];

  const dockItems = items || defaultItems;

  return (
    <header className="fixed bottom-3 sm:bottom-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-3 pointer-events-none">
      {/* Adaptive Floating Glass Dock: Mobile = Compact Icons, Desktop = Icon + Label Underneath */}
      <div className="pointer-events-auto max-w-[calc(100vw-16px)] flex items-center justify-between sm:justify-center gap-2 xs:gap-3 sm:gap-5 px-3 xs:px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/95 border border-zinc-200/90 shadow-2xl shadow-[#25294a]/20 backdrop-blur-2xl shrink-0 mx-auto">

        {/* NexAlliance Brand Logo */}
        <Link href="/" className="flex items-center pl-1 pr-1 shrink-0 group">
          <img
            src="/assets/images/logo.png"
            alt="NexAlliance Logo"
            className="h-7 xs:h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Vertical Divider */}
        <div className="h-6 sm:h-9 w-[1px] bg-zinc-200 shrink-0 mx-0.5 sm:mx-1" />

        {/* Glass Dock */}
        <GlassDock items={dockItems} className="shrink-0" />

        {/* Vertical Divider */}
        <div className="h-6 sm:h-9 w-[1px] bg-zinc-200 shrink-0 mx-0.5 sm:mx-1" />

        {/* Responsive Contact CTA Button */}
        <Link
          href="/contact-us"
          className="shrink-0 p-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#3b5da6] to-[#25294a] hover:from-[#2e4b8a] hover:to-[#1d203b] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#3b5da6]/30 hover:shadow-[#3b5da6]/45 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
          <span className="hidden sm:inline">Contact</span>
        </Link>

      </div>
    </header>
  );
}
