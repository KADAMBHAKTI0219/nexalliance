const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [297, 170], // Widescreen 16:9 ratio
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();

const drawHeader = (activeTab = 'Innovate') => {
  // Brand title
  doc.setTextColor(20, 25, 45);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('NexAlliance', 15, 15);

  // Top Nav items
  doc.setFontSize(10);
  doc.setFont('helvetica', activeTab === 'Innovate' ? 'bold' : 'normal');
  doc.setTextColor(activeTab === 'Innovate' ? 0 : 80, activeTab === 'Innovate' ? 102 : 80, activeTab === 'Innovate' ? 255 : 80);
  doc.text('Innovate', 90, 15);

  doc.setFont('helvetica', activeTab === 'Build' ? 'bold' : 'normal');
  doc.setTextColor(activeTab === 'Build' ? 0 : 80, activeTab === 'Build' ? 102 : 80, activeTab === 'Build' ? 80 : 80);
  doc.text('Build', 140, 15);

  doc.setFont('helvetica', activeTab === 'Transform' ? 'bold' : 'normal');
  doc.setTextColor(activeTab === 'Transform' ? 0 : 80, activeTab === 'Transform' ? 102 : 80, activeTab === 'Transform' ? 80 : 80);
  doc.text('Transform', 185, 15);

  // Logo Icon
  doc.setFillColor(30, 50, 100);
  doc.circle(270, 14, 6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.text('NA', 267.5, 16);
};

const drawFooterBanner = (text = 'Every solution is built based on real business workflow and challenges.') => {
  doc.setFillColor(245, 175, 0); // Yellow gold banner
  doc.roundedRect(135, pageHeight - 20, 145, 10, 5, 5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(text, 142, pageHeight - 13.5);
};

// ---------------- SLIDE 1: Cover ----------------
drawHeader('Innovate');
doc.setFillColor(252, 248, 235); // Light cream card
doc.roundedRect(15, 25, 267, 115, 6, 6, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(13);
doc.setTextColor(60, 65, 80);
doc.text('Your Trusted IT Partner For Smart Growth', 110, 48);

doc.setFontSize(36);
doc.setTextColor(20, 25, 45);
doc.text('NexAlliance', 110, 65);

doc.setFillColor(0, 122, 255);
doc.roundedRect(110, 75, 110, 13, 6.5, 6.5, 'F');
doc.setTextColor(255, 255, 255);
doc.setFontSize(10);
doc.text('Innovate - Build - Transform', 118, 83);

doc.setFillColor(255, 255, 255);
doc.roundedRect(175, 76.5, 43, 10, 5, 5, 'F');
doc.setTextColor(20, 25, 45);
doc.setFontSize(8.5);
doc.setFont('helvetica', 'bold');
doc.text('Build Your System', 178, 83);

doc.setFont('helvetica', 'normal');
doc.setFontSize(11);
doc.setTextColor(60, 65, 85);
doc.text('We design systems that automate operations, reduce manual\nwork, and improve efficiency.', 110, 103);
drawFooterBanner();

// ---------------- SLIDE 2: Welcome ----------------
doc.addPage();
drawHeader('Innovate');

doc.setFont('helvetica', 'bold');
doc.setFontSize(30);
doc.setTextColor(20, 25, 45);
doc.text('Welcome to NexAlliance', 125, 45);

doc.setFillColor(235, 242, 250);
doc.roundedRect(118, 55, 160, 85, 5, 5, 'F');

doc.setFontSize(11);
doc.setTextColor(40, 45, 60);
doc.text('At NexAlliance, we help businesses build their legacy\nthrough technology.', 128, 68);

doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(70, 75, 95);
const welcomeText = "We don't just develop software—we partner with businesses to streamline operations, automate workflows, and build scalable digital ecosystems that enable organizations to grow efficiently. By combining innovation, transparency, uncompromising quality, and long-term support, we empower businesses to embrace digital transformation, improve productivity, generate employment, and create lasting business value.";
const splitWelcome = doc.splitTextToSize(welcomeText, 140);
doc.text(splitWelcome, 128, 85);

// ---------------- SLIDE 3: Introduction ----------------
doc.addPage();
drawHeader('Innovate');

doc.setFont('helvetica', 'bold');
doc.setFontSize(28);
doc.setTextColor(20, 25, 45);
doc.text('Introduction', 20, 45);

doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
doc.setTextColor(60, 65, 85);
const intro1 = "Our expertise includes ERP systems, CRM solutions, web and mobile applications, workflow automation, AI-integrated solutions, management platforms, and industry-specific software tailored to each organization's unique requirements.";
doc.text(doc.splitTextToSize(intro1, 130), 20, 56);

doc.setFillColor(235, 242, 250);
doc.roundedRect(20, 75, 135, 55, 5, 5, 'F');
doc.setTextColor(40, 45, 65);
const intro2 = "We are NexAlliance, specializing in custom software solutions built on Lean Management principles. We first understand your complete business workflow, identify inefficiencies, eliminate unnecessary processes, and then develop technology that simplifies operations, improves productivity, and supports long-term business growth.";
doc.text(doc.splitTextToSize(intro2, 122), 26, 85);
drawFooterBanner();

// ---------------- SLIDE 4: Why NexAlliance? ----------------
doc.addPage();
drawHeader('Innovate');

doc.setFont('helvetica', 'bold');
doc.setFontSize(28);
doc.setTextColor(20, 25, 45);
doc.text('Why NexAlliance?', 15, 45);

doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
doc.setTextColor(60, 65, 85);
doc.text('NexAlliance exists to help businesses build their\nlegacy through technology.', 15, 56);

doc.setFillColor(235, 242, 250);
doc.roundedRect(130, 32, 150, 75, 5, 5, 'F');
doc.setTextColor(40, 45, 65);
const whyText = "Every business operates differently, which is why we never believe in one-size-fits-all software. We take the time to understand your processes, challenges, and goals before designing solutions that align with your operations. Our focus is on creating secure, scalable, and future-ready software that improves efficiency, supports informed decision-making, and delivers measurable business outcomes.";
doc.text(doc.splitTextToSize(whyText, 135), 138, 45);

// ---------------- SLIDE 5: Our Vision ----------------
doc.addPage();
drawHeader('Build');

doc.setFont('helvetica', 'bold');
doc.setFontSize(28);
doc.setTextColor(20, 25, 45);
doc.text('Our Vision', 25, 45);

doc.setFillColor(235, 242, 250);
doc.roundedRect(25, 55, 135, 65, 5, 5, 'F');

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(50, 55, 75);
const visionText = "To become the world's most trusted technology and business transformation partner, empowering organizations with smarter, innovative, and connected digital solutions that shape the future of industries.\n\nWe envision a future where businesses of every size leverage next-generation technology to build sustainable growth, expand globally, and leave a lasting legacy.";
doc.text(doc.splitTextToSize(visionText, 122), 32, 67);

// ---------------- SLIDE 6: Our Mission ----------------
doc.addPage();
drawHeader('Build');

doc.setFont('helvetica', 'bold');
doc.setFontSize(26);
doc.setTextColor(20, 25, 45);
doc.text('Our Mission', 125, 40);

doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(60, 65, 85);
const missionText = "Our mission is to design, develop, and deliver innovative software solutions that solve real business challenges through deep research, customization, and advanced technology.";
doc.text(doc.splitTextToSize(missionText, 150), 125, 49);

doc.setFillColor(235, 242, 250);
doc.roundedRect(125, 65, 150, 55, 5, 5, 'F');

doc.setFillColor(0, 122, 255);
doc.roundedRect(130, 70, 52, 9, 4.5, 4.5, 'F');
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.text('We are committed to:', 134, 76);

doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(50, 55, 75);
const points = [
  "Delivering scalable and future-ready digital solutions.",
  "Building software with complete transparency and uncompromising quality.",
  "Understanding every client's unique business workflow before development.",
  "Driving innovation through continuous research and next-generation technologies.",
  "Creating long-term partnerships that help businesses grow with confidence.",
  "Developing reliable systems that improve productivity, efficiency, and business performance."
];
let py = 84;
points.forEach(p => {
  doc.text('•  ' + p, 134, py);
  py += 5.2;
});

drawFooterBanner('We are committed to building reliable, scalable, and user-friendly systems.');

// ---------------- SLIDE 7: Our Best Service ----------------
doc.addPage();
drawHeader('Transform');

doc.setFont('helvetica', 'bold');
doc.setFontSize(28);
doc.setTextColor(20, 25, 45);
doc.text('Our Best\nService', 20, 55);

doc.setFillColor(0, 122, 255);
doc.roundedRect(20, 80, 36, 11, 5.5, 5.5, 'F');
doc.setTextColor(255, 255, 255);
doc.setFontSize(9);
doc.text('Learn More', 26, 87);

const services = [
  'AI Business Automation',
  'Custom Web Application Development',
  'Web & Mobile App Development',
  'Business Process Automation',
  'ERP & CRM Solutions'
];

let sy = 32;
services.forEach(s => {
  doc.setFillColor(252, 248, 235);
  doc.roundedRect(150, sy, 130, 12, 6, 6, 'F');
  doc.setFillColor(0, 122, 255);
  doc.circle(145, sy + 6, 4.5, 'F');
  doc.setTextColor(20, 25, 45);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text(s, 160, sy + 8);
  sy += 16;
});

drawFooterBanner('Transforming ideas into scalable digital solutions.');

// ---------------- SLIDE 8 TO 22: PROJECTS DECK ----------------
const projectSlidesData = [
  {
    title: 'Hotel Hilton TMS',
    problem: 'Hotel staff managed tasks through WhatsApp, making it difficult to track assignments, monitor completion status, and identify department-wise workload.',
    idPoints: ['No centralized task tracking.', 'Difficult to monitor task completion.', 'No department-wise workload visibility.', 'Poor communication and accountability.'],
    solPoints: ['Analytics Dashboard', 'Task Assignment System', 'Role-Based Access Control', 'Task Notifications'],
    outcome: 'Improved task visibility, accountability, and operational efficiency across all hotel departments.'
  },
  {
    title: 'Mad Over Grills MS',
    problem: 'The restaurant relied on third-party billing software, creating concerns over data security and limited operational control.',
    idPoints: ['Risk of customer and business data leakage.', 'Dependency on third-party software.', 'Limited customization.', 'Lack of centralized billing management.'],
    solPoints: ['Smart & Secure Billing Management', 'Automated GST Calculation', 'Multiple Payment Methods', 'Sales & Analytics Reports'],
    outcome: 'Delivered a secure offline billing solution with complete control over restaurant operations and business data.'
  },
  {
    title: 'Custom Restaurant System',
    problem: 'Restaurants struggle to manage billing, table operations, and customer orders efficiently using disconnected or manual processes. This leads to billing errors, slower service, and limited operational insights.',
    idPoints: ['Manual billing and order processing', 'Poor table management', 'Limited business reporting', 'Lack of brand customization'],
    solPoints: ['POS Billing System', 'Order & Table Management', 'Reports & Analytics', 'Custom Branding Support'],
    outcome: 'Simplified restaurant operations with faster billing, streamlined order management, and improved operational efficiency.'
  },
  {
    title: 'Nirman Architects MS',
    problem: 'Architectural firms often rely on multiple tools to manage projects, drawings, employees, and client communication, resulting in fragmented workflows and reduced team productivity.',
    idPoints: ['Disconnected project management', 'Difficult drawing version control', 'Limited team productivity tracking', 'Inefficient client collaboration'],
    solPoints: ['Project & Task Management', 'Drawing Management & Version Control', 'Employee Attendance & Productivity Tracking', 'Customer Portal & Analytics Dashboard'],
    outcome: 'Centralized project execution, improved collaboration, and enhanced visibility across architectural operations.'
  },
  {
    title: 'Modulite Interior',
    problem: 'Managing multiple interior projects, site activities, and team coordination manually makes it difficult to track progress, meet timelines, and maintain project documentation.',
    idPoints: ['Lack of centralized project tracking', 'Difficult site and task coordination', 'Poor progress visibility', 'Inconsistent project documentation'],
    solPoints: ['Project & Site Management', 'Task Assignment & Progress Monitoring', 'Timeline Management', 'Reports & Project Documentation'],
    outcome: 'Improved project visibility, streamlined execution, and better coordination across interior projects.'
  },
  {
    title: 'Har Bole – News Platform',
    problem: 'Managing news content, reporters, and breaking updates manually delayed publishing and made it difficult to deliver timely, organized news across digital channels.',
    idPoints: ['Slow content publishing process', 'Difficult reporter and author management', 'Unorganized news categorization', 'Limited audience reach and engagement'],
    solPoints: ['News Article & Category Management', 'Breaking News Publishing', 'Reporter & Author Management', 'Advertisement & Social Media Integration'],
    outcome: 'Enabled faster news publishing, streamlined content management, and increased audience engagement.'
  },
  {
    title: 'BDSRN',
    problem: 'Emergency teams lacked a centralized system to report incidents, coordinate resources, and monitor disaster response, resulting in delayed decision-making during critical situations.',
    idPoints: ['Manual incident reporting', 'Poor emergency coordination', 'Limited resource visibility', 'Lack of real-time monitoring'],
    solPoints: ['Disaster Incident Reporting', 'Emergency Response Tracking', 'Resource Allocation & Role-Based Access', 'Real-Time Monitoring & Analytics Dashboard'],
    outcome: 'Improved disaster response through centralized coordination, real-time monitoring, and faster emergency management.'
  },
  {
    title: 'Novva Salon',
    problem: 'Managing appointments, staff attendance, salaries, and daily salon operations manually led to scheduling conflicts, administrative overhead, and limited business insights.',
    idPoints: ['Manual appointment management', 'Difficult staff and attendance tracking', 'Time-consuming salary management', 'Limited operational analytics'],
    solPoints: ['Customer Booking System', 'Barber & Staff Management', 'Attendance & Salary Management', 'Analytics Dashboard'],
    outcome: 'Automated salon operations, improved staff management, and enhanced customer service with streamlined workflows.'
  },
  {
    title: 'Gas Agency',
    problem: 'Managing gas inventory, purchases, and sales manually made it difficult to maintain stock accuracy, track transactions, and generate business insights.',
    idPoints: ['Manual inventory tracking', 'Difficult purchase and sales management', 'Limited customer record management', 'Lack of operational analytics'],
    solPoints: ['Inventory Management', 'Purchase & Sales Tracking', 'Customer Records', 'Analytics Dashboard'],
    outcome: 'Improved inventory accuracy, streamlined operations, and enhanced business reporting.'
  },
  {
    title: 'V Square Neuro Spine Centre',
    problem: 'Patients faced difficulty accessing hospital information, doctor details, and consultation services through traditional communication channels.',
    idPoints: ['Limited online patient communication', 'Manual appointment inquiries', 'Difficult content management', 'Low digital accessibility'],
    solPoints: ['Doctor Profile Management', 'Appointment Inquiry System', 'Service & Hospital Information Pages', 'Admin Content Management'],
    outcome: "Improved patient accessibility, communication, and the hospital's digital presence."
  },
  {
    title: 'Dotteds',
    problem: 'Fashion businesses needed a centralized platform to manage products, inventory, and customer orders while providing a seamless online shopping experience.',
    idPoints: ['Difficult product management', 'Manual inventory tracking', 'Inefficient order processing', 'Limited customer shopping features'],
    solPoints: ['Product & Category Management', 'Shopping Cart & Wishlist', 'Order Management', 'Inventory Management'],
    outcome: 'Streamlined online retail operations and improved the customer shopping experience.'
  },
  {
    title: 'BrandBox',
    problem: 'Managing employee attendance, leave, and workforce records manually increased administrative workload and reduced HR efficiency.',
    idPoints: ['Manual attendance tracking', 'Difficult leave management', 'Time-consuming payroll support', 'Limited workforce insights'],
    solPoints: ['Employee Management', 'Attendance & Leave Management', 'Payroll Support', 'Analytics Dashboard'],
    outcome: 'Simplified HR operations and improved workforce management through automation.'
  },
  {
    title: 'ArkA Stone Realty',
    problem: 'Managing property listings and customer inquiries manually reduced property visibility and slowed lead conversion.',
    idPoints: ['Unorganized property listings', 'Limited property search options', 'Manual lead management', 'Poor customer engagement'],
    solPoints: ['Property Listing Management', 'Search & Filtering', 'Lead Inquiry Forms', 'Contact Management System'],
    outcome: 'Improved property discovery, lead generation, and customer engagement.'
  },
  {
    title: 'Luxbury Properties',
    problem: 'Luxury property businesses required a digital platform to showcase premium projects and efficiently manage investor inquiries.',
    idPoints: ['Limited online property showcase', 'Manual inquiry management', 'Poor lead tracking', 'Lack of centralized property management'],
    solPoints: ['Property Portfolio Management', 'Luxury Property Showcase', 'Investment Inquiry System', 'Admin Dashboard'],
    outcome: 'Enhanced property visibility and generated quality leads from buyers and investors.'
  },
  {
    title: 'Vrani Chemicals',
    problem: 'The company lacked an effective digital platform to showcase products, manage content, and engage with potential customers online.',
    idPoints: ['Limited online presence', 'Difficult product updates', 'Manual testimonial management', 'Inefficient customer inquiries'],
    solPoints: ['Product Management Panel', 'Testimonials Management', 'Responsive Website', 'Contact Management System'],
    outcome: 'Strengthened brand visibility and simplified product and customer communication.'
  }
];

projectSlidesData.forEach(p => {
  doc.addPage();
  drawHeader('Build');

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(20, 25, 45);
  doc.text(p.title, 130, 32);

  // Problem statement
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('Problem Statement: ', 130, 42);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 65, 80);
  const probLines = doc.splitTextToSize(p.problem, 140);
  doc.text(probLines, 160, 42);

  let curY = 42 + probLines.length * 4 + 4;

  // Outer blue card background
  doc.setFillColor(235, 242, 250);
  doc.roundedRect(125, curY, 155, 62, 5, 5, 'F');

  // Identification Pill
  doc.setFillColor(0, 122, 255);
  doc.roundedRect(130, curY + 4, 40, 7, 3.5, 3.5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('Identification', 137, curY + 8.5);

  let idY = curY + 15;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(50, 55, 70);
  p.idPoints.forEach(pt => {
    doc.text('•  ' + pt, 134, idY);
    idY += 4.2;
  });

  // Solution Pill
  let solPillY = idY + 2;
  doc.setFillColor(0, 122, 255);
  doc.roundedRect(130, solPillY, 38, 7, 3.5, 3.5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('Solution', 138, solPillY + 4.5);

  let solY = solPillY + 10;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(50, 55, 70);
  p.solPoints.forEach(pt => {
    doc.text('•  ' + pt, 134, solY);
    solY += 4.2;
  });

  drawFooterBanner(p.outcome);
});

// ---------------- SLIDE 23: Contact ----------------
doc.addPage();
drawHeader('Transform');

doc.setFont('helvetica', 'bold');
doc.setFontSize(30);
doc.setTextColor(20, 25, 45);
doc.text('Get in Touch', 20, 45);

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(70, 75, 95);
doc.text("Let's discuss your business needs and build a solution that works for\nyou.", 20, 56);

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Website:', 20, 75);
doc.setFont('helvetica', 'normal');
doc.text('https://nexallianceit.com', 20, 81);

doc.setFont('helvetica', 'bold');
doc.text('Email:', 20, 93);
doc.setFont('helvetica', 'normal');
doc.text('info@nexallianceit.com', 20, 99);

doc.setFont('helvetica', 'bold');
doc.text('Phone Number:', 20, 111);
doc.setFont('helvetica', 'normal');
doc.text('+91 63511 78511', 20, 117);

// ---------------- SLIDE 24: Thank You ----------------
doc.addPage();
drawHeader('Transform');

doc.setFillColor(235, 242, 250);
doc.roundedRect(40, 30, 217, 95, 6, 6, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(34);
doc.setTextColor(20, 25, 45);
doc.text('Thank You', 110, 52);

doc.setFillColor(245, 175, 0);
doc.roundedRect(90, 60, 115, 10, 5, 5, 'F');
doc.setTextColor(255, 255, 255);
doc.setFontSize(8.5);
doc.text('Thank you for taking the time to explore our portfolio.', 96, 66.5);

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(60, 65, 80);
doc.text('We are passionate about building software that solves real\nbusiness challenges and creates measurable results.', 85, 80);

drawFooterBanner('We look forward to working with you and building something exceptional together.');

const outputDir = path.join(__dirname, '../public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const pdfPath = path.join(outputDir, 'NexAlliance_Portfolio.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(pdfPath, pdfBuffer);

console.log('Successfully generated public/NexAlliance_Portfolio.pdf! Size:', pdfBuffer.length);
