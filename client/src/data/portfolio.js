// ── Portfolio Data ──
// Central data store for the entire portfolio. Edit this file to update content.

export const personalInfo = {
  name: 'Kishan Parvadiya',
  role: 'UI/UX Designer | Aspiring Product Manager',
  tagline: 'Crafting digital experiences that inspire.',
  bio: `Aspiring Product Manager with a strong foundation in user-centered design and a Bachelor's in Computer Science in progress. Certified Scrum Master skilled in Agile practices, product road mapping, and translating user needs into tangible product features. Combines hands-on experience in Figma prototyping and design systems with a passion for managing the entire product lifecycle to deliver impactful digital solutions that align with business objectives.`,
  email: 'kishanpatel486630@gmail.com',
  location: 'Vadodara, Gujarat, India',
  phone: '9328797998',
  profileImage: '/images/profile.jpg',
  social: {
    dribbble: 'https://dribbble.com/kishanparvadiya',
    behance: 'https://behance.net/kishanparvadiya',
    linkedin: 'https://linkedin.com/in/kishan-parvadiya-593120268',
    github: 'https://github.com/kishanparvadiya',
    twitter: 'https://twitter.com/kishanparvadiya',
  },
  resumeUrl: 'https://drive.google.com/file/d/1tZMTIx7ZT7KQOxP3Rg32gUt4YvHQAgFN/view',
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const clientLogos = [
  { name: 'Google', text: 'Google' },
  { name: 'Microsoft', text: 'Microsoft' },
  { name: 'Adobe', text: 'Adobe' },
  { name: 'Figma', text: 'Figma' },
  { name: 'Spotify', text: 'Spotify' },
  { name: 'Slack', text: 'Slack' },
  { name: 'Stripe', text: 'Stripe' },
  { name: 'Notion', text: 'Notion' },
];

export const projects = [
  {
    id: 'nubiabarking',
    title: 'Nubia Parking',
    category: 'Parking Management System',
    description: 'Developed a smart parking management system used by security staff to manage parking slots, track daily collections, and streamline operations.',
    image: '/images/project-cloudvault.png',
    tags: ['Web App', 'Management', 'Operations'],
    year: '2025',
    client: 'Internal',
    hasCaseStudy: true,
  },
  {
    id: 'evmcare',
    title: 'EVM Care',
    category: 'Healthcare CRM & Mobile App',
    description: 'Built a healthcare CRM system enabling seamless interaction between doctors and patients, improving appointment booking and record management.',
    image: '/images/project-medicare.png',
    tags: ['Mobile', 'Healthcare', 'CRM'],
    year: '2024',
    client: 'EVM Care',
    hasCaseStudy: true,
  },
  {
    id: 'leadmgmt',
    title: 'Lead Management',
    category: 'Mobile Application',
    description: 'Developed a mobile application to manage sales leads, track follow-ups, and streamline the creation of quotations and invoices.',
    image: '/images/project-nomad.png',
    tags: ['Mobile App', 'Sales', 'Productivity'],
    year: '2024',
    client: 'Corporate',
    hasCaseStudy: true,
  },
  {
    id: 'rkcredit',
    title: 'RK Credit First',
    category: 'Fintech Application',
    description: 'Created a unified platform that allows users to purchase, manage, and access multiple bank credit cards within a single app.',
    image: '/images/project-finflow.png',
    tags: ['Fintech', 'Mobile App', 'Finance'],
    year: '2024',
    client: 'RK Bank',
    hasCaseStudy: true,
  },
];

export const caseStudy = {
  id: 'rkcredit',
  title: 'RK Credit First — App Design',
  subtitle: 'A unified platform for managing multiple bank credit cards seamlessly',
  overview: `RK Credit First aimed to solve the clutter of having multiple credit card apps. The goal was to create a single unified platform that allows users to purchase, manage, and track multiple bank credit cards conveniently, improving user financial visibility.`,
  role: 'Product Designer',
  timeline: '8 weeks',
  team: '1 Designer, 2 Developers',
  tools: ['Figma', 'User Research', 'Prototyping'],
  sections: [
    {
      title: 'The Problem',
      content: `Users face significant friction navigating different banking apps to manage their credit cards. Key pain points:
                • Scattered financial visibility across multiple apps
                • High cognitive load when activating or blocking cards
                • Difficult to track usage and upcoming dues efficiently`,
    },
    {
      title: 'Research & Discovery',
      content: `I analyzed competitor fintech platforms and mapped out the core user journey to identify bottlenecks:
                • Users wanted a unified dashboard displaying total usage vs credit limits
                • Security was paramount; users needed real-time lock/unlock features
                • 80% of users preferred a mobile-first experience`,
    },
    {
      title: 'Design Process',
      content: `I focused on creating an intuitive, trustworthy interface, starting with wireframes to map user flows.
                • Designed a secure onboarding and card linking flow
                • Implemented dynamic visual representations for card usage
                • Created a robust design system ensuring scalability for future bank integrations`,
    },
    {
      title: 'Results',
      content: `The redesigned application greatly streamlined card management:
                • Card activation speed: Improved by 40%
                • User engagement: Increased daily active tracking
                • Satisfaction: Significantly improved convenience and financial visibility`,
    },
  ],
};

export const skills = [
  {
    category: 'UI/UX Design',
    items: [
      { name: 'Wireframing', level: 95 },
      { name: 'Prototyping', level: 94 },
      { name: 'Visual Design', level: 92 },
      { name: 'Design Systems', level: 90 },
      { name: 'User Research', level: 88 },
    ],
  },
  {
    category: 'Product Management',
    items: [
      { name: 'Agile & Scrum', level: 95 },
      { name: 'Backlog Management', level: 92 },
      { name: 'Product Lifecycle', level: 90 },
      { name: 'Stakeholder Mgmt', level: 88 },
      { name: 'Product Roadmapping', level: 85 },
    ],
  },
  {
    category: 'Tools & Software',
    items: [
      { name: 'Figma', level: 96 },
      { name: 'FigJam & Miro', level: 90 },
      { name: 'Canva', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Sketch', level: 75 },
    ],
  },
  {
    category: 'Technical & Analytical',
    items: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Design Thinking', level: 92 },
      { name: 'UX Research Analysis', level: 88 },
      { name: 'Data Interpretation', level: 80 },
      { name: 'A/B Testing', level: 75 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Attention to Detail', level: 95 },
      { name: 'Communication', level: 94 },
      { name: 'Collaboration', level: 92 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Time Management', level: 88 },
    ],
  },
  {
    category: 'Bonus Skills',
    items: [
      { name: 'Responsive Design', level: 92 },
      { name: 'Mobile-First Design', level: 90 },
      { name: 'Accessibility (WCAG)', level: 85 },
      { name: 'UX Writing', level: 80 },
      { name: 'Basic HTML/CSS', level: 70 },
    ],
  },
];

export const experience = [
  {
    title: 'Product Designer',
    company: 'Novus Ark',
    location: 'Vadodara, Gujarat',
    period: 'Jul 2025 — Present',
    description: 'Partnered with clients and cross-functional teams to gather requirements, translating business objectives into intuitive product designs for web and mobile platforms.',
    highlights: [
      'Managed the product design lifecycle from user research to high-fidelity prototypes',
      'Championed user-centric principles to enhance usability and drive engagement',
      'Ensured final designs were accessible, scalable, and met client goals',
    ],
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Novus Ark',
    location: 'Vadodara, Gujarat',
    period: 'Jan 2025 — Jul 2025',
    description: 'Collaborated with design and development teams to define user flows and create user-friendly interfaces for web and mobile applications.',
    highlights: [
      'Gained hands-on experience in research, wireframing, and Figma prototyping',
      'Applied responsive design principles for seamless product experiences',
      'Contributed to scalable design systems ensuring visual consistency',
    ],
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    field: 'Computer Science',
    institution: 'ITM(SLS) BARODA UNIVERSITY',
    location: 'Vadodara, Gujarat',
    period: '2022 — 2026',
    description: "Currently pursuing Bachelor's degree with a focus on product lifecycle and development.",
    achievements: [
      'CGPA: 8.63 / 10',
    ],
  },
  {
    degree: 'Higher Secondary Science stream',
    field: 'Science',
    institution: 'Sarva Vidhyalaya High School',
    location: 'Kadi, Mahesana',
    period: '2020 — 2022',
    description: 'Pre-university education with core focus on exact sciences.',
    achievements: [
      'Percentage: 64.67%',
    ],
  },
  {
    degree: 'Secondary School',
    field: 'General Education',
    institution: 'Mahatma Gandhi U.B. Vidhyalaya',
    location: 'Morbi, Gujarat',
    period: '2018 — 2020',
    description: 'Completed foundational secondary education.',
    achievements: [
      'Percentage: 73.67%',
    ],
  },
  {
    degree: 'Scrum Master Certification',
    field: 'Agile Enterprise Coach',
    institution: 'Udemy',
    location: 'Online',
    period: 'Certified',
    description: 'Certified in Agile principles and the official Scrum framework, with expertise in sprint planning and backlog management.',
    achievements: [],
  },
  {
    degree: 'Figma Essential for UI/UX',
    field: 'Design',
    institution: 'Udemy',
    location: 'Online',
    period: 'Certified',
    description: 'Proficient in using Figma to design high-fidelity wireframes, user-centered prototypes, and seamless user flows.',
    achievements: [],
  },
];

// Utility to dynamically calculate experience based on start date (Jan 2025)
const calculateTotalExperience = () => {
  const start = new Date(2025, 0, 1); // Jan 2025
  const now = new Date();
  
  // Total months difference
  const totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  
  if (totalMonths < 12) {
    return `${totalMonths}`;
  }
  
  const totalYears = totalMonths / 12;
  return `${totalYears.toFixed(1)}`;
};

export const dynamicExperienceValue = calculateTotalExperience();

export const stats = [
  { value: '4+', label: 'Projects Completed' },
  { value: '2', label: 'Certifications' },
  { value: dynamicExperienceValue, label: 'Years Experience' },
  { value: '100%', label: 'Commitment' },
];
