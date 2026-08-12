'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import OurServices from '@/components/home/OurServices';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#25294a] flex flex-col font-sans select-none pt-24 pb-20">
      {/* Top Header Breadcrumb */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-bold tracking-wider uppercase transition-colors border border-zinc-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Services Component featuring 6 Notched Boxes */}
      <OurServices />
    </div>
  );
}
