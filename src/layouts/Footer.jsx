'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Globe, Code, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b5da6]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <img src="/assets/images/logo.png" alt="NexAlliance Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm mb-6 font-normal">
              Enterprise-grade technology consulting. We design, build and scale digital ecosystems — ERP, CRM, web, mobile, cloud and growth engineered as one ecosystem.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/nexalliance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#3b5da6] hover:border-[#3b5da6]/40 hover:bg-[#3b5da6]/10 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#3b5da6] hover:border-[#3b5da6]/40 hover:bg-[#3b5da6]/10 transition-all duration-300"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#3b5da6] hover:border-[#3b5da6]/40 hover:bg-[#3b5da6]/10 transition-all duration-300"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@nexalliance.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#3b5da6] hover:border-[#3b5da6]/40 hover:bg-[#3b5da6]/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b5da6] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-600">
              <li>
                <Link href="/" className="hover:text-[#3b5da6] transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#3b5da6] transition-colors flex items-center gap-1">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#3b5da6] transition-colors flex items-center gap-1">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3b5da6] transition-colors flex items-center gap-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#3b5da6] transition-colors flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b5da6] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-600">
              <li>Enterprise ERP Systems</li>
              <li>Custom CRM Solutions</li>
              <li>Modern Web Applications</li>
              <li>Digital Marketing & Growth</li>
              <li>Cloud & DevOps Architecture</li>
              <li>Cross-Platform App Dev</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b5da6] mb-4">
              Surat Headquarters
            </h4>
            <div className="space-y-3.5 text-sm font-medium text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3b5da6] shrink-0 mt-0.5" />
                <span>Dhwarkesh Society, 35, Lajamni Chowk, Near Raghuveer Shoppers, Mota Varachha, Surat, Gujarat 394101</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3b5da6] shrink-0" />
                <a href="mailto:info@nexalliance.com" className="hover:text-[#3b5da6] transition-colors">
                  info@nexalliance.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3b5da6] shrink-0" />
                <a href="tel:+916351178511" className="hover:text-[#3b5da6] transition-colors">
                  +91 63511 78511
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
          <p>© {new Date().getFullYear()} NEXALLIANCE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#3b5da6] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#3b5da6] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
