'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Copy,
  Check,
  Zap,
} from 'lucide-react';

const projectTypes = [
  'ERP System',
  'CRM Platform',
  'Web App',
  'Mobile App',
  'AI Integration',
  'Cloud Architecture',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'ERP System',
    budget: '$5k - $15k',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@nexalliance.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#25294a] select-none pt-24 sm:pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Ambient Radial Glow matching Logo Palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>LET&apos;S BUILD TOGETHER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-[#25294a] tracking-tight font-sans"
          >
            Get In Touch With <span className="bg-gradient-to-r from-[#3b5da6] via-blue-500 to-[#25294a] bg-clip-text text-transparent">NexAlliance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
          >
            Have a project in mind or need enterprise software architecture? Talk with our engineers and AI specialists today.
          </motion.p>
        </div>


        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: DIRECT TELEMETRY CONTACT CARDS --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Response Guarantee Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#25294a] to-[#1d203b] text-white border border-[#3b5da6]/30 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>EXPRESS RESPONSE GUARANTEE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-sans tracking-tight mb-2">
                Rapid Technical Inquiry Response.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                Our principal software architects review every incoming project request and respond with a preliminary feasibility & estimate breakdown.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-md hover:border-[#3b5da6]/50 transition-colors flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">EMAIL ADDRESS</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#25294a] truncate block">hello@nexalliance.com</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-[#3b5da6] hover:text-white text-zinc-700 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Direct Line / Call Card */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-md hover:border-[#3b5da6]/50 transition-colors flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">DIRECT PHONE / WHATSAPP</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#25294a]">+91 98765 43210</span>
                </div>
              </div>
              <a
                href="tel:+919876543210"
                className="w-full py-2.5 rounded-xl bg-[#25294a] hover:bg-[#3b5da6] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Call / Connect Instantly</span>
              </a>
            </div>

            {/* Headquarters Card */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3b5da6]/10 text-[#3b5da6] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">HEADQUARTERS</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#25294a]">Tech Hub, Bengaluru & Mumbai, India</span>
              </div>
            </div>

          </div>


          {/* --- RIGHT COLUMN: GLASSMOPHIC CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-2xl relative"
            >
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-[#25294a] tracking-tight font-sans mb-2">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Fill out the form below and our engineering leads will respond in under 15 minutes.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#3b5da6]/10 border border-[#3b5da6]/30 text-center flex flex-col items-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#3b5da6] mb-4" />
                  <h4 className="text-2xl font-extrabold text-[#25294a] mb-2">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 max-w-md mb-6">
                    Our technical lead has received your project details. Check your inbox shortly for our preliminary project estimate.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectType: 'ERP System', budget: '$5k - $15k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#25294a] hover:bg-[#3b5da6] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#25294a] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#25294a] focus:outline-none focus:border-[#3b5da6] focus:ring-2 focus:ring-[#3b5da6]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-[#25294a] uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#25294a] focus:outline-none focus:border-[#3b5da6] focus:ring-2 focus:ring-[#3b5da6]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-black text-[#25294a] uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#25294a] focus:outline-none focus:border-[#3b5da6] focus:ring-2 focus:ring-[#3b5da6]/20 transition-all"
                    />
                  </div>

                  {/* Project Type Select Pills */}
                  <div>
                    <label className="block text-xs font-black text-[#25294a] uppercase tracking-wider mb-3">
                      Project Capability Needed *
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#25294a] text-white shadow-md shadow-[#25294a]/20 scale-105'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-black text-[#25294a] uppercase tracking-wider mb-2">
                      Project Overview & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your business goals, target timelines, or specific technical requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#25294a] focus:outline-none focus:border-[#3b5da6] focus:ring-2 focus:ring-[#3b5da6]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3b5da6] to-[#25294a] hover:from-[#2e4b8a] hover:to-[#1d203b] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#3b5da6]/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
