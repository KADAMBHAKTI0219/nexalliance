'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowRight, CheckCircle2, AlertCircle, Trophy } from 'lucide-react';
import ProjectModal from './ProjectModal';

export const projectsData = [
  // --- FIRST 4 ORIGINAL PROJECTS ---
  {
    id: 'hotel-hilton',
    subtitle: 'ERP • HOSPITALITY • TASK OPERATIONS',
    title: 'Hotel Hilton TMS',
    category: 'Hospitality & Operations ERP',
    problemStatement: 'Hotel staff managed tasks through WhatsApp, making it difficult to track assignments, monitor completion status, and identify department-wise workload.',
    description: 'Streamlining task operations, guest experience lifecycle, staff shifts, and room maintenance telemetry for enterprise hotel chains.',
    image: '/assets/projects/hotel-hilton-1.png',
    images: [
      '/assets/projects/hotel-hilton-1.png',
      '/assets/projects/hotel-hilton-2.png',
      '/assets/projects/hotel-hilton-3.png',
      '/assets/projects/hotel-hilton-4.png',
    ],
    identification: [
      'No centralized task tracking.',
      'Difficult to monitor task completion.',
      'No department-wise workload visibility.',
      'Poor communication and accountability.',
    ],
    solution: [
      'Analytics Dashboard',
      'Task Assignment System',
      'Role-Based Access Control',
      'Task Notifications',
    ],
    outcome: 'Improved task visibility, accountability, and operational efficiency across all hotel departments.',
    features: ['Analytics Dashboard', 'Task Assignment System', 'Role-Based Access Control', 'Task Notifications'],
  },
  {
    id: 'sociolet',
    subtitle: 'WEB • SOCIAL MEDIA • CAMPAIGNS • GROWTH',
    title: 'Sociolet Ecosystem',
    category: 'Social Intelligence & Marketing',
    problemStatement: 'Managing multi-platform social campaigns manually created fragmented metrics and delayed audience growth.',
    description: 'Performance-led social growth engine facilitating automated marketing campaigns, influencer metrics, and audience telemetry.',
    image: '/assets/projects/sociolet-1.png',
    images: [
      '/assets/projects/sociolet-1.png',
      '/assets/projects/sociolet-2.png',
      '/assets/projects/sociolet-3.png',
      '/assets/projects/sociolet-4.png',
    ],
    identification: [
      'Fragmented campaign analytics.',
      'Manual influencer tracking.',
      'Delayed audience growth metrics.',
    ],
    solution: [
      'Campaign Funnel Telemetry',
      'Influencer Analytics Hub',
      'Audience Growth Metrics',
      'Automated Content Engine',
    ],
    outcome: 'Accelerated brand reach and streamlined social intelligence telemetry.',
    features: ['Campaign Funnel Telemetry', 'Influencer Analytics Hub', 'Audience Growth Metrics', 'Automated Content Engine'],
  },
  {
    id: 'nirman-architects',
    subtitle: 'WEB • ARCHITECTURE • REAL ESTATE • DESIGN',
    title: 'Nirman Architects',
    category: 'Architecture & Real Estate Web',
    problemStatement: 'Architectural firms often rely on multiple tools to manage projects, drawings, employees, and client communication.',
    description: 'A modern architectural firm portfolio and project booking ecosystem showcasing luxury structural designs, 3D blueprints, and client consultation workflows.',
    image: '/assets/projects/nirman-architects-1.png',
    images: [
      '/assets/projects/nirman-architects-1.png',
      '/assets/projects/nirman-architects-2.png',
      '/assets/projects/nirman-architects-3.png',
      '/assets/projects/nirman-architects-4.png',
    ],
    identification: [
      'Disconnected project management',
      'Difficult drawing version control',
      'Limited team productivity tracking',
    ],
    solution: [
      'Architectural Blueprint Showcase',
      'Project Consultation Portal',
      'Interactive 3D Portfolio',
      'Client Inquiry Engine',
    ],
    outcome: 'Centralized project execution and enhanced client collaboration.',
    features: ['Architectural Blueprint Showcase', 'Project Consultation Portal', 'Interactive 3D Portfolio', 'Client Inquiry Engine'],
  },
  {
    id: 'connecto',
    subtitle: 'WEB APP • SAAS • WORKFLOW ANALYTICS',
    title: 'Connecto Ecosystem',
    category: 'SaaS & Collaboration Workstation',
    problemStatement: 'Enterprise teams struggled to maintain high-concurrency client communications across fragmented channels.',
    description: 'Next-gen collaborative messaging & workflow analytics workstation empowering enterprise teams to streamline client communications.',
    image: '/assets/projects/connecto-1.png',
    images: [
      '/assets/projects/connecto-1.png',
      '/assets/projects/connecto-2.png',
      '/assets/projects/connecto-3.png',
    ],
    identification: [
      'Siloed messaging tools',
      'Unpredictable channel latency',
      'Lack of real-time telemetry',
    ],
    solution: [
      'Omnichannel Messaging Hub',
      'Predictive Telemetry Engine',
      'Custom Workflow Builder',
      'High-Concurrency Socket Sync',
    ],
    outcome: 'Unified communications and improved team productivity.',
    features: ['Omnichannel Messaging Hub', 'Predictive Telemetry Engine', 'Custom Workflow Builder', 'High-Concurrency Socket Sync'],
  },

  // --- PROJECTS WITH IMAGES ---
  {
    id: 'novva-salon',
    subtitle: 'ERP • BEAUTY & WELLNESS • BOOKING',
    title: 'Novva Salon',
    category: 'Retail & Wellness Management',
    problemStatement: 'Managing appointments, staff attendance, salaries, and daily salon operations manually led to scheduling conflicts and administrative overhead.',
    description: 'A complete salon management system designed to automate bookings, staff management, stylist commission tracking, and business analytics.',
    image: '/assets/projects/nova-salon-1.png',
    images: [
      '/assets/projects/nova-salon-1.png',
      '/assets/projects/nova-salon-2.png',
      '/assets/projects/nova-salon-3.png',
      '/assets/projects/nova-salon-4.png',
    ],
    identification: [
      'Manual appointment management',
      'Difficult staff and attendance tracking',
      'Time-consuming salary management',
    ],
    solution: [
      'Customer Booking System',
      'Barber & Staff Management',
      'Attendance & Salary Management',
      'Analytics Dashboard',
    ],
    outcome: 'Automated salon operations and enhanced customer booking experience.',
    features: ['Customer Booking System', 'Barber & Staff Management', 'Attendance & Salary Management', 'Analytics Dashboard'],
  },
  {
    id: 'harbole-news',
    subtitle: 'WEB • MEDIA & NEWS • ENTERPRISE CMS',
    title: 'Har Bole – News Platform',
    category: 'Digital Media & Publishing System',
    problemStatement: 'Managing news content, reporters, and breaking updates manually delayed publishing and made it difficult to deliver timely news.',
    description: 'A fully dynamic news publishing platform with role-based access control, real-time content delivery, and news logistics management.',
    image: '/assets/projects/harbole-1.png',
    images: [
      '/assets/projects/harbole-1.png',
      '/assets/projects/harbole-2.png',
      '/assets/projects/harbole-3.png',
      '/assets/projects/harbole-4.png',
      '/assets/projects/harbole-5.png',
    ],
    identification: [
      'Slow content publishing process',
      'Difficult reporter management',
      'Unorganized news categorization',
    ],
    solution: [
      'News Article & Category Management',
      'Breaking News Publishing',
      'Reporter & Author Management',
      'Advertisement & Social Media Integration',
    ],
    outcome: 'Enabled faster news publishing and increased audience engagement.',
    features: ['Article & Category Management', 'Breaking News Publishing', 'Reporter Management', 'Social Media Integration'],
  },
  {
    id: 'modulite-interior',
    subtitle: 'WEB • MODULAR ARCHITECTURE • SAAS WORKSTATION',
    title: 'Modulite Interior',
    category: 'Interior Site & Project Operations',
    problemStatement: 'Managing multiple interior projects, site activities, and team coordination manually makes it difficult to track progress.',
    description: 'A high-performance modular web ecosystem built with customizable widget components, product admin panel, and real-time API pipelines.',
    image: '/assets/projects/modulite-1.png',
    images: [
      '/assets/projects/modulite-1.png',
      '/assets/projects/modulite-2.png',
      '/assets/projects/modulite-3.png',
      '/assets/projects/modulite-4.png',
    ],
    identification: [
      'Lack of centralized project tracking',
      'Difficult site coordination',
      'Inconsistent documentation',
    ],
    solution: [
      'Project & Site Management',
      'Task Assignment & Progress Monitoring',
      'Timeline Management',
      'Reports & Project Documentation',
    ],
    outcome: 'Improved project visibility and streamlined execution across interior projects.',
    features: ['Project & Site Management', 'Task Assignment & Progress', 'Timeline Management', 'Reports & Project Documentation'],
  },

  // --- TEXT CASE STUDIES (PDF DECK PROJECTS WITHOUT SCREENSHOT ASSETS) ---
  {
    id: 'mad-over-grills',
    subtitle: 'ERP • RESTAURANT • BILLING MANAGEMENT',
    title: 'Mad Over Grills MS',
    category: 'Restaurant Management System',
    problemStatement: 'The restaurant relied on third-party billing software, creating concerns over data security and limited operational control.',
    description: 'Secure offline & cloud billing solution providing complete control over restaurant operations and business data.',
    image: null,
    images: [],
    identification: [
      'Risk of customer and business data leakage.',
      'Dependency on third-party software.',
      'Limited customization.',
      'Lack of centralized billing management.',
    ],
    solution: [
      'Smart & Secure Billing Management',
      'Automated GST Calculation',
      'Multiple Payment Methods',
      'Sales & Analytics Reports',
    ],
    outcome: 'Delivered a secure offline billing solution with complete control over restaurant operations and business data.',
    features: ['Smart & Secure Billing', 'Automated GST Calculation', 'Multiple Payment Methods', 'Sales & Analytics Reports'],
  },
  {
    id: 'custom-restaurant',
    subtitle: 'POS • RESTAURANT • ORDER MANAGEMENT',
    title: 'Custom Restaurant System',
    category: 'Restaurant POS & Table Operations',
    problemStatement: 'Restaurants struggle to manage billing, table operations, and customer orders efficiently using disconnected processes leading to billing errors.',
    description: 'Simplified restaurant operations with faster billing, streamlined order management, and improved operational efficiency.',
    image: null,
    images: [],
    identification: [
      'Manual billing and order processing',
      'Poor table management',
      'Limited business reporting',
      'Lack of brand customization',
    ],
    solution: [
      'POS Billing System',
      'Order & Table Management',
      'Reports & Analytics',
      'Custom Branding Support',
    ],
    outcome: 'Simplified restaurant operations with faster billing and streamlined table order management.',
    features: ['POS Billing System', 'Order & Table Management', 'Reports & Analytics', 'Custom Branding Support'],
  },
  {
    id: 'bdsrn-disaster',
    subtitle: 'GOVT • EMERGENCY • DISASTER MANAGEMENT',
    title: 'BDSRN (State Disaster Network)',
    category: 'Disaster Response & Resource Management',
    problemStatement: 'Emergency teams lacked a centralized system to report incidents, coordinate resources, and monitor disaster response during critical situations.',
    description: 'Improved disaster response through centralized coordination, real-time monitoring, and emergency management.',
    image: null,
    images: [],
    identification: [
      'Manual incident reporting',
      'Poor emergency coordination',
      'Limited resource visibility',
      'Lack of real-time monitoring',
    ],
    solution: [
      'Disaster Incident Reporting',
      'Emergency Response Tracking',
      'Resource Allocation & Role-Based Access',
      'Real-Time Monitoring & Analytics Dashboard',
    ],
    outcome: 'Improved disaster response through centralized coordination and real-time monitoring.',
    features: ['Disaster Incident Reporting', 'Emergency Response Tracking', 'Resource Allocation', 'Analytics Dashboard'],
  },
  {
    id: 'gas-agency',
    subtitle: 'ERP • INVENTORY • SALES TRACKING',
    title: 'Gas Agency ERP',
    category: 'Inventory & Operations ERP',
    problemStatement: 'Managing gas inventory, purchases, and sales manually made it difficult to maintain stock accuracy and track transactions.',
    description: 'Improved inventory accuracy, streamlined operations, and enhanced business reporting.',
    image: null,
    images: [],
    identification: [
      'Manual inventory tracking',
      'Difficult purchase and sales management',
      'Limited customer record management',
      'Lack of operational analytics',
    ],
    solution: [
      'Inventory Management',
      'Purchase & Sales Tracking',
      'Customer Records',
      'Analytics Dashboard',
    ],
    outcome: 'Improved inventory accuracy, streamlined operations, and enhanced reporting.',
    features: ['Inventory Management', 'Purchase & Sales Tracking', 'Customer Records', 'Analytics Dashboard'],
  },
  {
    id: 'v-square-neuro',
    subtitle: 'WEB • HEALTHCARE • HOSPITAL PORTAL',
    title: 'V Square Neuro Spine Centre',
    category: 'Healthcare & Medical Platform',
    problemStatement: 'Patients faced difficulty accessing hospital information, doctor details, and consultation services through traditional channels.',
    description: 'Improved patient accessibility, communication, and the hospital digital presence.',
    image: null,
    images: [],
    identification: [
      'Limited online patient communication',
      'Manual appointment inquiries',
      'Difficult content management',
      'Low digital accessibility',
    ],
    solution: [
      'Doctor Profile Management',
      'Appointment Inquiry System',
      'Service & Hospital Information Pages',
      'Admin Content Management',
    ],
    outcome: "Improved patient accessibility, communication, and digital presence.",
    features: ['Doctor Profile Management', 'Appointment Inquiry System', 'Hospital Information Pages', 'Admin Content Management'],
  },
  {
    id: 'dotteds-fashion',
    subtitle: 'E-COMMERCE • FASHION • RETAIL',
    title: 'Dotteds Ecosystem',
    category: 'Fashion E-Commerce & Retail',
    problemStatement: 'Fashion businesses needed a centralized platform to manage products, inventory, and customer orders.',
    description: 'Streamlined online retail operations and improved customer shopping experience.',
    image: null,
    images: [],
    identification: [
      'Difficult product management',
      'Manual inventory tracking',
      'Inefficient order processing',
      'Limited customer shopping features',
    ],
    solution: [
      'Product & Category Management',
      'Shopping Cart & Wishlist',
      'Order Management',
      'Inventory Management',
    ],
    outcome: 'Streamlined online retail operations and improved customer shopping experience.',
    features: ['Product & Category Management', 'Shopping Cart & Wishlist', 'Order Management', 'Inventory Management'],
  },
  {
    id: 'brandbox-hr',
    subtitle: 'HRM • WORKFORCE • PAYROLL AUTOMATION',
    title: 'BrandBox HR System',
    category: 'Workforce & HR Automation',
    problemStatement: 'Managing employee attendance, leave, and workforce records manually increased administrative workload.',
    description: 'Simplified HR operations and improved workforce management through automation.',
    image: null,
    images: [],
    identification: [
      'Manual attendance tracking',
      'Difficult leave management',
      'Time-consuming payroll support',
      'Limited workforce insights',
    ],
    solution: [
      'Employee Management',
      'Attendance & Leave Management',
      'Payroll Support',
      'Analytics Dashboard',
    ],
    outcome: 'Simplified HR operations and improved workforce management through automation.',
    features: ['Employee Management', 'Attendance & Leave Management', 'Payroll Support', 'Analytics Dashboard'],
  },
  {
    id: 'arka-stone-realty',
    subtitle: 'WEB • REAL ESTATE • LEAD CONVERSION',
    title: 'ArkA Stone Realty',
    category: 'Real Estate & Property Platform',
    problemStatement: 'Managing property listings and customer inquiries manually reduced property visibility and slowed lead conversion.',
    description: 'Improved property discovery, lead generation, and customer engagement.',
    image: null,
    images: [],
    identification: [
      'Unorganized property listings',
      'Limited property search options',
      'Manual lead management',
      'Poor customer engagement',
    ],
    solution: [
      'Property Listing Management',
      'Search & Filtering',
      'Lead Inquiry Forms',
      'Contact Management System',
    ],
    outcome: 'Improved property discovery, lead generation, and customer engagement.',
    features: ['Property Listing Management', 'Search & Filtering', 'Lead Inquiry Forms', 'Contact Management System'],
  },
  {
    id: 'luxbury-properties',
    subtitle: 'WEB • LUXURY REAL ESTATE • INVESTMENTS',
    title: 'Luxbury Properties',
    category: 'Luxury Real Estate Showcase',
    problemStatement: 'Luxury property businesses required a digital platform to showcase premium projects and manage investor inquiries.',
    description: 'Enhanced property visibility and generated quality leads from buyers and investors.',
    image: null,
    images: [],
    identification: [
      'Limited online property showcase',
      'Manual inquiry management',
      'Poor lead tracking',
      'Lack of centralized property management',
    ],
    solution: [
      'Property Portfolio Management',
      'Luxury Property Showcase',
      'Investment Inquiry System',
      'Admin Dashboard',
    ],
    outcome: 'Enhanced property visibility and generated quality leads from investors.',
    features: ['Property Portfolio Management', 'Luxury Property Showcase', 'Investment Inquiry System', 'Admin Dashboard'],
  },
  {
    id: 'vrani-chemicals',
    subtitle: 'WEB • INDUSTRIAL • CHEMICAL PORTFOLIO',
    title: 'Vrani Chemicals',
    category: 'Industrial B2B Portal',
    problemStatement: 'The company lacked an effective digital platform to showcase products, manage content, and engage with potential customers online.',
    description: 'Strengthened brand visibility and simplified product and customer communication.',
    image: null,
    images: [],
    identification: [
      'Limited online presence',
      'Difficult product updates',
      'Manual testimonial management',
      'Inefficient customer inquiries',
    ],
    solution: [
      'Product Management Panel',
      'Testimonials Management',
      'Responsive Website',
      'Contact Management System',
    ],
    outcome: 'Strengthened brand visibility and simplified product communication.',
    features: ['Product Management Panel', 'Testimonials Management', 'Responsive Website', 'Contact Management System'],
  },
];

export default function OurProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Home section displays top 4 projects only
  const homeProjects = projectsData.slice(0, 4);

  return (
    <section id="portfolio" className="relative py-24 bg-white text-[#25294a] overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#3b5da6]/15 via-[#25294a]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b5da6]/10 border border-[#3b5da6]/20 text-[#3b5da6] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3b5da6]" />
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#25294a] tracking-tight font-sans">
            Our Featured <span className="text-[#3b5da6]">Projects.</span>
          </h2>
        </div>

        {/* 2-Column Grid Container with 3D Perspective */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start [perspective:1200px]">
            {homeProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    x: isEven ? -140 : 140,
                    rotateY: isEven ? -25 : 25,
                    rotateX: 10,
                    scale: 0.88,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: (idx % 2) * 0.15,
                    ease: [0.215, 0.61, 0.355, 1.0],
                  }}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View project details for ${project.title}`}
                  className="group cursor-pointer flex flex-col will-change-transform transform-gpu focus:outline-none focus:ring-2 focus:ring-[#3b5da6] rounded-3xl"
                >
                  {/* Large Project Card Container */}
                  <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[480px] rounded-3xl sm:rounded-[32px] overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-100 mb-5">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title} - ${project.category}`}
                        fill
                        loading={idx < 2 ? 'eager' : 'lazy'}
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#25294a] via-[#1d203b] to-[#3b5da6] p-6 sm:p-10 text-white flex flex-col justify-between relative group-hover:scale-[1.01] transition-transform duration-700 ease-out">
                        <div>
                          <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px] font-extrabold tracking-wider uppercase mb-4 shadow-xs">
                            {project.category}
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
                            {project.title}
                          </h3>
                          <p className="text-zinc-200 text-xs sm:text-sm font-medium line-clamp-3 leading-relaxed">
                            {project.problemStatement || project.description}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                          {project.solution && (
                            <div className="flex flex-wrap gap-1.5">
                              {project.solution.slice(0, 3).map((sol, i) => (
                                <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-bold border border-white/10">
                                  ✓ {sol}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Subtle top-right hover arrow badge */}
                    <div className="absolute top-4 right-4 p-3 rounded-full bg-[#25294a]/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 z-20">
                      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Subtitle / Category string */}
                  <div className="text-[11px] sm:text-xs font-extrabold text-zinc-600 tracking-widest uppercase mb-1 font-sans">
                    {project.subtitle}
                  </div>

                  {/* Main Project Display Title */}
                  <h3 className="text-2xl sm:text-4xl font-black text-[#25294a] font-sans tracking-tight group-hover:text-[#3b5da6] transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* View More Link Button */}
          <div className="mt-16 flex justify-center">
            <Link href="/portfolio" aria-label="Explore all projects in our full portfolio">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-[#25294a] hover:bg-[#3b5da6] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-[#25294a]/30 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>View More Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.div>
            </Link>
          </div>
        </div>

      </div>

      {/* Full-Page GSAP Horizontal Showcase Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
