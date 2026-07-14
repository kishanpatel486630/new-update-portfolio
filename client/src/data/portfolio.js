// ── Portfolio Data ──
// Central data store for the entire portfolio. Edit this file to update content.

export const personalInfo = {
  name: "Kishan Parvadiya",
  role: "UI/UX Designer | Aspiring Product Manager",
  tagline: "Crafting digital experiences that inspire.",
  bio: `Aspiring Product Manager with a strong foundation in user-centered design and a Bachelor's in Computer Science in progress. Certified Scrum Master skilled in Agile practices, product road mapping, and translating user needs into tangible product features. Combines hands-on experience in Figma prototyping and design systems with a passion for managing the entire product lifecycle to deliver impactful digital solutions that align with business objectives.`,
  email: "kishanpatel486630@gmail.com",
  location: "Vadodara, Gujarat, India",
  phone: "9328797998",
  profileImage: "/images/profile.jpg",
  social: {
    // dribbble: "https://dribbble.com/kishanparvadiya",
    behance: "https://behance.net/kishanparvadiya",
    linkedin: "https://linkedin.com/in/kishan-parvadiya-593120268",
    github: "https://github.com/kishanpatel486630",
    twitter: "https://twitter.com/kishanparvadiya",
  },
  resumeUrl:
    "https://drive.google.com/file/d/1o6AZr9irkFMHJ-xepU5FIXD385b22t2w/view?usp=sharing",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const clientLogos = [
  { name: "Google", text: "Google" },
  { name: "Microsoft", text: "Microsoft" },
  { name: "Adobe", text: "Adobe" },
  { name: "Figma", text: "Figma" },
  { name: "Spotify", text: "Spotify" },
  { name: "Slack", text: "Slack" },
  { name: "Stripe", text: "Stripe" },
  { name: "Notion", text: "Notion" },
];

export const projects = [
  {
    id: "sportsground",
    title: "Sports Ground Management App",
    category: "Sports Venue Booking App",
    description:
      "A mobile-first platform for discovering nearby sports grounds, checking live slot availability, and booking venues in just a few taps.",
    image: "/images/sports-ground/Dribbble%20shot%20-%2023.png",
    images: [
      "/images/sports-ground/Dribbble%20shot%20-%2023.png",
      "/images/sports-ground/Day-1%20Sport%20ground%20book%20app.png",
    ],
    tags: ["Sports", "Booking", "Mobile App"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "investmentmultiportfolio",
    title: "Investment Multi Portfolio Management App",
    category: "Smart Investment Management Platform",
    description:
      "A dark premium fintech app for tracking multiple investments, IPOs, asset allocation, and family accounts from one dashboard.",
    image: "/images/investment-multi-portfolio/investment-cover.png",
    images: [
      "/images/investment-multi-portfolio/investment-cover.png",
      "/images/investment-multi-portfolio/investment-dashboard.png",
    ],
    tags: ["FinTech", "Portfolio", "Mobile App"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "healthdocument",
    title: "Health Document Management App",
    category: "Mobile Healthcare Experience",
    description:
      "A secure mobile healthcare app for organizing prescriptions, reports, QR health identity, and family-accessible medical records.",
    image: "/images/health-document-management/health-document-cover.png",
    images: [
      "/images/health-document-management/health-document-cover.png",
      "/images/health-document-management/health-dashboard.png",
    ],
    tags: ["Healthcare", "Records", "Mobile App"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "indianpanoramachelsea",
    title: "Indian Panorama Chelsea",
    category: "Luxury Restaurant Website Design",
    description:
      "A premium restaurant website concept focused on immersive photography, elegant storytelling, and a seamless reservation experience.",
    image: "/images/indian-panorama-chelsea/indian-panorama-chelsea-1.png",
    images: [
      "/images/indian-panorama-chelsea/indian-panorama-chelsea-1.png",
      "/images/indian-panorama-chelsea/indian-panorama-chelsea-2.png",
      "/images/indian-panorama-chelsea/indian-panorama-chelsea-3.png",
      "/images/indian-panorama-chelsea/indian-panorama-chelsea-4.png",
      "/images/indian-panorama-chelsea/indian-panorama-chelsea-5.png",
      "/images/indian-panorama-chelsea/indian-panorama-chelsea-6.png",
    ],
    tags: ["Restaurant", "Luxury", "Responsive Web"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "stayease",
    title: "StayEase",
    category: "Hotel Booking Mobile App",
    description:
      "A premium hotel booking app for discovering, comparing, and reserving stays with a clean mobile-first experience.",
    image: "/images/stayease/stayease-1.png",
    images: [
      "/images/stayease/stayease-1.png",
      "/images/stayease/stayease-2.png",
    ],
    tags: ["Travel", "Booking", "Mobile App"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "moviebooking",
    title: "Movie & Live Shows Booking App",
    category: "Entertainment Booking Platform",
    description:
      "A modern entertainment booking app for discovering movies and live events, comparing show timings, selecting seats, and getting digital tickets instantly.",
    image: "/images/movie-live-shows/movie-booking-1.png",
    images: [
      "/images/movie-live-shows/movie-booking-2.png",
      "/images/movie-live-shows/movie-booking-3.png",
      "/images/movie-live-shows/movie-booking-4.png",
      "/images/movie-live-shows/movie-booking-1.png",
    ],
    tags: ["Entertainment", "Booking", "Mobile App"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "stellarui",
    title: "Stellar UI",
    category: "Modern Design System & UI Component Library Landing Page",
    description:
      "A premium dark landing page concept for a design system and UI component library, focused on storytelling, social proof, and free trial conversion.",
    image: "/images/stellar-ui/stellar-ui-1.png",
    images: [
      "/images/stellar-ui/image.png",
      "/images/stellar-ui/stellar-ui-1.png",
      "/images/stellar-ui/stellar-ui-2.png",
      "/images/stellar-ui/stellar-ui-3.png",
      "/images/stellar-ui/stellar-ui-4.png",
      "/images/stellar-ui/stellar-ui-5.png",
      "/images/stellar-ui/stellar-ui-6.png",
    ],
    tags: ["Design System", "Landing Page", "Responsive Website"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "agencyhub",
    title: "Agency Hub",
    category: "Corporate Recruitment & Internship Platform",
    description:
      "A clean, conversion-focused corporate website concept for recruitment agencies to showcase services, job openings, internships, and placement success stories.",
    image: "/images/agency-hub/Day-2%20Agency%20Website2.png",
    images: [
      "/images/agency-hub/image.png",
      "/images/agency-hub/Day-2%20Agency%20Website2.png",
    ],
    tags: ["Corporate Website", "Recruitment", "UI Design"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "saralvepar",
    title: "Saral Vepar",
    category: "Inventory & Sales Management Mobile App",
    description:
      "A mobile app concept for small businesses to manage inventory, billing, sales, expenses, and reports from one clean dashboard.",
    image: "/images/saral-vepar/day-3%20saral%20vepar.png",
    images: [
      "/images/saral-vepar/day-3%20saral%20vepar.png",
      "/images/saral-vepar/day-3%20saral%20vepar%202.png",
    ],
    tags: ["Inventory", "Billing", "Mobile App"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "leadsystemcrm",
    title: "CRM System",
    category: "Smart CRM & Lead Management Dashboard",
    description:
      "A responsive CRM dashboard concept for managing leads, customers, quotations, invoices, reports, and sales analytics in one centralized platform.",
    image: "/images/leadsystem-crm-challenge/leadsystem-crm-1.png",
    images: [
      "/images/leadsystem-crm-challenge/leadsystem-crm-6.png",
      "/images/leadsystem-crm-challenge/leadsystem-crm-3.png",
      "/images/leadsystem-crm-challenge/leadsystem-crm-4.png",
      "/images/leadsystem-crm-challenge/leadsystem-crm-5.png",
      "/images/leadsystem-crm-challenge/leadsystem-crm-1.png",
      "/images/leadsystem-crm-challenge/leadsystem-crm-2.png",
    ],
    tags: ["CRM", "Dashboard", "Responsive Web"],
    year: "2026",
    client: "UI Design Challenge",
    hasCaseStudy: true,
  },
  {
    id: "nubiabarking",
    title: "Nubia Parking",
    category: "Smart Parking Management System",
    description:
      "Nubia Parking is a smart mobile-based parking management system built to help security personnel manage vehicle entries, track slot availability, and monitor daily cash flow in real time.",
    image: "/images/nubia-parking-screens.png",
    tags: ["Mobile App", "Parking", "Operations"],
    year: "2025",
    client: "Internal",
    hasCaseStudy: true,
  },
  {
    id: "evmcare",
    title: "WorkHub",
    category: "Co-Working Space Booking App",
    description:
      "WorkHub is a mobile-first co-working space booking platform that allows users to discover, explore, and book workspaces such as private cabins, meeting rooms, and shared desks seamlessly.",
    image: "/images/workhub-coworking.png",
    tags: ["Booking", "Co-Working", "Mobile App"],
    year: "2024",
    client: "WorkHub",
    hasCaseStudy: true,
  },
  {
    id: "leadmgmt",
    title: "Lead Management",
    category: "Lead Management System - LeadSystem CRM",
    description:
      "LeadSystem CRM is a mobile and web dashboard based customer relationship and lead management platform designed to help businesses track leads, manage interactions, and streamline sales workflows in one unified system.",
    image: "/images/leadsystem-crm-screens.png",
    images: [
      "/images/leadsystem-crm-screens.png",
      "/images/lead-crm-dashboard.png",
    ],
    tags: ["CRM", "Lead Management", "Mobile App"],
    year: "2024",
    client: "Corporate",
    hasCaseStudy: true,
  },
  {
    id: "adrinoling",
    title: "Adrenalinq",
    category: "Tournament Management Ecosystem",
    description:
      "Adrenalinq is a comprehensive sports tournament management ecosystem for local communities and organizers, streamlining registration, live match tracking, and player auctions across mobile apps and web dashboards.",
    image: "/images/adrinoling-tournament.png",
    tags: ["Sports", "Tournament", "Ecosystem"],
    year: "2025",
    client: "Adrenalinq",
    hasCaseStudy: true,
  },
  {
    id: "rkcredit",
    title: "RK Credit First",
    category: "Credit Card Management App",
    description:
      "RK Credit First is a mobile-first financial platform that simplifies how users explore, apply for, and manage multiple credit cards in one unified ecosystem.",
    image: "/images/rk-credit-first.png",
    tags: ["Fintech", "Credit Cards", "Mobile App"],
    year: "2025",
    client: "Internal",
    hasCaseStudy: true,
  },
];

export const caseStudies = {
  sportsground: {
    id: "sportsground",
    title: "Sports Ground Management App",
    subtitle:
      "A mobile-first platform for discovering and booking sports venues in a few taps",
    overview: `The Sports Ground Management App is a mobile platform designed to simplify the process of discovering, booking, and managing sports venues. The goal was to create a seamless experience that allows users to find nearby grounds, check real-time slot availability, select their preferred sport, and complete bookings with minimal effort.`,
    role: "Product designer & UI/UX designer",
    timeline: "15-day UI design challenge",
    team: "1 Product Designer (Me)",
    tools: [
      "Figma (UI/UX Design & Prototyping)",
      "User Flow Mapping",
      "Visual Design",
    ],
    sections: [
      {
        title: "The Challenge",
        content: `Many sports enthusiasts face common challenges when booking sports venues.
                  • Difficulty finding nearby grounds
                  • Lack of real-time slot availability
                  • Complex booking processes
                  • Poor user experience across booking platforms
                  The challenge was to design a clean and intuitive solution that makes sports venue booking quick and hassle-free.`,
      },
      {
        title: "The Solution",
        content: `I designed a user-friendly Sports Ground Management App that helps users move from discovery to booking quickly.
                  • Discover nearby sports venues
                  • View venue details and facilities
                  • Check real-time slot availability
                  • Select sports and booking preferences
                  • Complete bookings within a few taps
                  The design focuses on simplicity, clarity, and efficient user flow.`,
      },
      {
        title: "Target Users",
        content: `The app was designed for three main user groups.
                  • Sports Players: people looking to book football, cricket, pickleball, badminton, or other sports grounds
                  • Sports Enthusiasts: users who regularly play sports and need quick access to venue availability
                  • Groups & Teams: teams looking for convenient venue booking and scheduling`,
      },
      {
        title: "User Flow",
        content: `Home Screen -> Browse Venues -> Select Venue -> Check Available Slots -> Choose Sport -> Confirm Booking -> Booking Success`,
      },
      {
        title: "Design Process",
        content: `I explored existing sports booking platforms and identified the main friction points in the booking journey.
                  • Research focused on common booking pain points
                  • Wireframing helped keep the flow simple and fast
                  • Visual design emphasized clean layouts and quick decision-making
                  • Mobile-first interactions guided every screen`,
      },
      {
        title: "Key Screens",
        content: `The experience is built around a compact, task-focused booking flow.
                  • Venue Listing: users can browse available sports venues nearby
                  • Venue Details: detailed venue information including pricing, location, and facilities
                  • Slot Selection: real-time slot availability with visual status indicators
                  • Sport Selection: users can choose their preferred sport before proceeding
                  • Booking Flow: a streamlined booking experience with minimal steps`,
      },
      {
        title: "Design Highlights",
        content: `The final design keeps the booking experience clear and efficient.
                  • Clean and modern interface
                  • Real-time slot management
                  • Easy-to-understand booking flow
                  • Multiple sports support
                  • Improved user experience
                  • Mobile-first design approach`,
      },
      {
        title: "What I Learned",
        content: `This challenge reinforced a few key product design lessons.
                  • Simplicity improves user decision-making
                  • Real-time booking interfaces need strong visual hierarchy
                  • Information architecture plays a major role in booking experiences
                  • Every screen should guide users toward their goal with minimal friction`,
      },
    ],
  },
  investmentmultiportfolio: {
    id: "investmentmultiportfolio",
    title: "Investment Multi Portfolio Management App",
    subtitle: "Track every investment. One dashboard. Smarter decisions.",
    overview: `Investors today often use multiple platforms to manage stocks, mutual funds, bonds, gold, and IPO applications. While investing has become easier, tracking everything in one place is still a challenge. This project explores a modern Investment Multi Portfolio Management App that helps users monitor all their investments through a single dashboard. The app provides real-time portfolio tracking, asset allocation, IPO updates, market insights, and family account management while maintaining a clean and intuitive user experience. The focus was to simplify financial information without overwhelming users, making investment tracking effortless for both beginners and experienced investors.`,
    role: "Product Designer",
    timeline: "15th Day UI Challenge",
    team: "1 Product Designer (Me)",
    tools: [
      "Figma",
      "Flutter",
      "Firebase",
      "Node.js",
      "MySQL",
      "Charts Library",
    ],
    sections: [
      {
        title: "The Problem",
        content: `Most investors face common problems such as:
                  • Investments spread across multiple broker accounts
                  • No centralized portfolio overview
                  • Difficulty tracking profit & loss
                  • Missing IPO opportunities
                  • Constant switching between multiple apps
                  • Complex financial dashboards
                  • Lack of visual insights
                  Managing investments should feel simple, not stressful.`,
      },
      {
        title: "Project Goals",
        content: `The application was designed to give users complete control over all their investments from one place.
                  • Track multiple portfolios
                  • Monitor real-time returns
                  • View asset allocation
                  • Track IPO applications
                  • Manage multiple family accounts
                  • Receive market insights
                  • Secure financial information
                  • Make investing easier for everyone`,
      },
      {
        title: "Design Philosophy",
        content: `Finance apps usually display too much information. Instead of adding more numbers, this design focuses on clear hierarchy, minimal distractions, easy navigation, fast decision making, visual understanding, and consistent interactions.
                  Every element was designed to help users understand their investments within seconds.`,
      },
      {
        title: "Visual Design",
        content: `The application follows a premium dark theme inspired by modern investment platforms.
                  • Modern Dark UI
                  • High Contrast
                  • Premium Feel
                  • Rounded Cards
                  • Financial Data Focus
                  • Clean Layouts
                  • Minimal Visual Noise`,
      },
      {
        title: "Home Dashboard",
        content: `The dashboard provides users with everything they need at a glance.
                  • Portfolio value
                  • Today's returns
                  • Total gains
                  • Asset allocation chart
                  • Market overview
                  • Quick navigation
                  • Portfolio summary`,
      },
      {
        title: "Portfolio Details",
        content: `Users can monitor every investment separately.
                  The portfolio screen includes total holdings, invested amount, profit & loss, individual stock performance, real-time values, and easy comparison.
                  The clean card layout improves readability even when handling multiple assets.`,
      },
      {
        title: "IPO Tracking",
        content: `The IPO module helps users stay updated with upcoming investment opportunities.
                  Users can view current IPOs, upcoming IPOs, applied IPOs, subscription status, lot size, premium, and apply quickly.
                  Everything related to IPO investments is organized in one dedicated section.`,
      },
      {
        title: "Account Management",
        content: `Many investors manage investments for family members.
                  The application supports personal accounts, family accounts, multiple PAN profiles, portfolio switching, and secure account management.
                  This makes the experience useful for both individuals and families.`,
      },
      {
        title: "Market News",
        content: `Investment decisions require timely information.
                  The News section delivers market updates, IPO news, company announcements, financial articles, and important alerts so users stay informed without leaving the application.`,
      },
      {
        title: "Design Decisions",
        content: `Several choices helped the experience feel fast and trustworthy.
                  • Dark Theme reduces eye strain and creates a premium experience
                  • Cards instead of tables make financial information easier to scan
                  • Visual charts communicate performance faster than numbers alone
                  • Bottom navigation keeps frequently used actions accessible with one hand
                  • Consistent color indicators help users understand portfolio performance instantly`,
      },
      {
        title: "What I Learned",
        content: `Designing a financial product is about building confidence.
                  • Users trust simplicity more than complexity
                  • Visual hierarchy improves financial understanding
                  • Charts communicate faster than raw numbers
                  • Small UX improvements reduce decision fatigue
                  • Financial products should educate users, not overwhelm them`,
      },
      {
        title: "Future Improvements",
        content: `Next version ideas include AI Portfolio Advisor, Risk Analysis, SIP Planner, Goal-Based Investing, Tax Saving Insights, Smart Notifications, Portfolio Comparison, Investment Recommendations, Expense Tracking, and Wealth Planning.`,
      },
      {
        title: "Final Outcome",
        content: `This Investment Multi Portfolio Management App demonstrates how thoughtful UX can simplify complex financial information into a clean and intuitive experience. By combining portfolio tracking, IPO management, market updates, and family account management into one platform, the application helps users stay informed, organized, and confident in their investment journey. The design emphasizes clarity, trust, and ease of use, making investing more accessible for everyone.`,
      },
    ],
  },
  healthdocument: {
    id: "healthdocument",
    title: "Health Document Management App",
    subtitle:
      "A mobile healthcare experience for storing, organizing, and securely sharing medical records",
    overview: `Managing health records shouldn't feel complicated. Patients often struggle to keep prescriptions, lab reports, medical history, insurance documents, and doctor's notes organized. Important records are frequently misplaced or difficult to access during emergencies. This project focuses on designing a simple, secure, and intuitive mobile application where users can manage all their healthcare documents in one place. The goal was to create an experience that reduces stress, improves accessibility, and empowers users to take control of their health information.`,
    role: "Product Designer",
    timeline: "10th Day UI Challenge",
    team: "1 Product Designer (Me)",
    tools: ["Figma", "Photoshop", "Google Fonts"],
    sections: [
      {
        title: "About the Project",
        content: `Managing health records shouldn't feel complicated.
                  Important records are frequently misplaced or difficult to access during emergencies.
                  The goal was to create an experience that reduces stress, improves accessibility, and empowers users to take control of their health information.`,
      },
      {
        title: "The Problem",
        content: `Healthcare records are often scattered across different hospitals, clinics, and diagnostic centers.
                  • Losing important prescriptions
                  • Difficulty finding old reports
                  • Carrying physical documents everywhere
                  • Sharing records manually with doctors
                  • Missing appointments and medication schedules
                  • Privacy concerns regarding medical data
                  The challenge was to simplify all these pain points into one secure mobile experience.`,
      },
      {
        title: "Project Goal",
        content: `The primary objective of this application is to make healthcare information simple, accessible, and secure.
                  • Store all medical records digitally
                  • Quick search and easy organization
                  • Secure document sharing
                  • Simple upload process
                  • QR-based digital health identity
                  • User-friendly interface for every age group
                  • Reduce dependency on paper documents`,
      },
      {
        title: "Design Philosophy",
        content: `Healthcare apps often become overwhelming because they try to display too much information at once.
                  For this project, the focus was on clean layouts, large touch targets, easy navigation, minimal visual clutter, familiar interaction patterns, and clear information hierarchy.
                  Every screen was designed so users can quickly find what they need without confusion.`,
      },
      {
        title: "Visual Design",
        content: `The interface follows a modern healthcare aesthetic that builds trust and clarity.
                  • Clean Interface
                  • Rounded Components
                  • Consistent Spacing
                  • Friendly Illustrations
                  • Accessible Typography
                  • Calm Visual Experience`,
      },
      {
        title: "Key Screens",
        content: `The app includes a smart health dashboard, medical records section, QR health identity, and user profile with privacy controls.
                  • Home Dashboard: instant access to everything users need
                  • Medical Records: search prescriptions, filter reports, and access history
                  • QR Health Identity: secure digital profile with a unique QR code
                  • User Profile & Privacy: manage personal info, emergency contacts, insurance details, and sharing permissions`,
      },
      {
        title: "Design Decisions",
        content: `Several choices helped keep the experience easy to use.
                  • Minimal interface because healthcare information is complex enough
                  • Large cards improve readability and scanning
                  • Blue color system creates trust, safety, and familiarity
                  • Bottom navigation allows quick one-hand access
                  • Rounded components make the app approachable and less intimidating
                  • Consistent icons improve recognition and reduce learning time`,
      },
      {
        title: "Accessibility",
        content: `Accessibility was an important consideration.
                  • High color contrast
                  • Large touch targets
                  • Simple language
                  • Clear icons
                  • Consistent layouts
                  • Easy navigation
                  These decisions make the application comfortable for users of different age groups.`,
      },
      {
        title: "What I Learned",
        content: `Designing healthcare products taught me that clarity is more valuable than complexity.
                  • Simplicity builds user confidence
                  • Information hierarchy is critical in healthcare
                  • Trust is communicated through consistency
                  • Small UX improvements can reduce user stress significantly
                  • Designing for accessibility benefits every user`,
      },
      {
        title: "Future Improvements",
        content: `Future versions of the app could include AI-powered health insights, medicine reminders, vaccination tracker, lab report analysis, family health dashboard, wearable device integration, emergency SOS, and voice-assisted navigation.`,
      },
      {
        title: "Conclusion",
        content: `Healthcare becomes more effective when information is organized and easily accessible. This project explores how thoughtful UX can reduce paperwork, simplify medical record management, and create a more connected healthcare experience. Every screen was designed with one goal in mind: help users focus on their health, not on finding their documents.`,
      },
    ],
  },
  indianpanoramachelsea: {
    id: "indianpanoramachelsea",
    title: "Indian Panorama Chelsea",
    subtitle:
      "A luxury restaurant website concept crafted to feel elegant, premium, and reservation-focused",
    overview: `Indian Panorama Chelsea is a luxury restaurant website design that combines rich photography, premium typography, spacious layouts, and a refined reservation flow. The goal was to create a digital dining experience that reflects the same elegance and attention to detail as the restaurant itself while making reservations effortless.`,
    role: "Product Designer",
    timeline: "3 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma", "Photoshop", "Unsplash", "Google Fonts"],
    sections: [
      {
        title: "Project Overview",
        content: `Dining begins long before the food reaches the table.
                  Today's luxury restaurants need a digital experience that reflects the same elegance and attention to detail as their physical space.
                  The goal was to design a sophisticated restaurant website that combines visual storytelling, seamless navigation, and an intuitive reservation flow.`,
      },
      {
        title: "Problem Statement",
        content: `Most restaurant websites suffer from common usability issues.
                  • Overcrowded layouts
                  • Difficult reservation process
                  • Poor mobile responsiveness
                  • Weak storytelling
                  • Inconsistent visual hierarchy
                  • Lack of premium branding
                  A luxury restaurant deserves a website that feels as premium as the dining experience itself.`,
      },
      {
        title: "Project Goals",
        content: `The primary objective was to create a website that creates a memorable first impression, highlights signature dishes beautifully, makes reservations simple and fast, showcases private dining experiences, builds trust through premium aesthetics, and performs beautifully across all devices.`,
      },
      {
        title: "Solution",
        content: `The design language focuses on elegance and sophistication.
                  • Minimal layout
                  • Premium typography
                  • Rich photography
                  • Spacious white space
                  • Warm luxury colors
                  • Smooth user journey`,
      },
      {
        title: "User Flow",
        content: `Research -> Information Architecture -> Wireframing -> Visual Design -> Responsive Layout -> Prototype -> Final UI`,
      },
      {
        title: "Key Website Areas",
        content: `The website includes a refined homepage, quick reservation form, signature dishes, private dining, chef storytelling, a signature menu, event gallery, restaurant location, contact information, newsletter, testimonials, and footer navigation.`,
      },
      {
        title: "Reservation Experience",
        content: `The reservation flow was simplified into a minimal booking experience.
                  • Select date
                  • Choose guests
                  • Pick time
                  • Reserve in seconds
                  Additional services like champagne or celebration cakes can also be added to enhance the dining experience.`,
      },
      {
        title: "Private Dining",
        content: `Luxury restaurants often generate significant bookings through private events.
                  To support this, a dedicated section highlights private dining rooms, event spaces, seating capacity, curated experiences, and clear calls-to-action that encourage enquiries.`,
      },
      {
        title: "Design Decisions",
        content: `Several design choices helped keep the experience elegant and easy to scan.
                  • Minimal interface lets photography become the primary storytelling element
                  • Large white space reinforces the premium feel
                  • Warm color palette is inspired by candlelight and luxury interiors
                  • Simple navigation helps users find reservations, menus, and events quickly
                  • Strong CTA placement keeps reservation buttons visible throughout the experience`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced an important lesson: a restaurant's website is not just about showcasing food—it is about creating anticipation, building trust, and delivering an experience before the first reservation is ever made.
                  • Visual hierarchy is more important than adding more content
                  • Large photography builds emotional engagement
                  • Simplicity creates elegance
                  • White space improves usability
                  • Small interaction details significantly elevate the user experience`,
      },
      {
        title: "Outcome",
        content: `Indian Panorama Chelsea demonstrates how a thoughtfully crafted restaurant website can communicate luxury while making reservations feel simple and confident. Every layout, image, and interaction was carefully designed to reflect the elegance of fine dining while keeping usability intuitive.`,
      },
    ],
  },
  stayease: {
    id: "stayease",
    title: "StayEase – Hotel Booking Mobile App UI/UX Case Study",
    subtitle:
      "A premium hotel booking experience designed to make discovery, comparison, and reservations effortless",
    overview: `StayEase is a modern hotel booking mobile application designed to simplify the way users discover, compare, and book accommodations. The goal of this project was to create an elegant, user-friendly experience that reduces booking friction while making hotel exploration enjoyable. The interface focuses on clean layouts, premium visuals, intuitive navigation, and a seamless booking journey from onboarding to reservation confirmation.`,
    role: "Product Designer",
    timeline: "2 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma"],
    sections: [
      {
        title: "Problem Statement",
        content: `Booking hotels through existing travel applications often feels overwhelming.
                  • Too many unnecessary steps
                  • Cluttered interfaces
                  • Complicated filtering
                  • Information overload
                  • Difficult hotel comparisons
                  • Poor mobile experiences
                  These issues increase decision fatigue and reduce booking confidence.`,
      },
      {
        title: "Objective",
        content: `The objective was to design a hotel booking experience that allows users to discover hotels quickly, search destinations effortlessly, filter results easily, compare hotel options, view complete property details, select travel dates, and book rooms with minimal effort. The overall experience should feel premium, trustworthy, and intuitive.`,
      },
      {
        title: "Target Users",
        content: `The app was designed for multiple travel audiences.
                  • Leisure Travelers: people planning vacations with family or friends
                  • Business Travelers: professionals who need fast hotel booking
                  • Solo Travelers: users looking for affordable and convenient stays
                  • Couples: searching for luxury or romantic destinations
                  • Frequent Travelers: users who value speed and convenience`,
      },
      {
        title: "Solution",
        content: `StayEase simplifies the complete booking journey into a clean and intuitive flow.
                  • Large hotel imagery, minimal interfaces, easy navigation, and focused interactions help users reserve accommodations faster
                  • The experience prioritizes clarity and confidence throughout the booking process`,
      },
      {
        title: "Key Features",
        content: `The app combines discovery, comparison, and booking into one seamless experience.
                  • Beautiful Onboarding Experience: immersive travel imagery
                  • Smart Hotel Search: search hotels by city, destination, or property name
                  • Interactive Map View: explore nearby hotels directly on a map
                  • Hotel Details: images, ratings, amenities, reviews, pricing, and location
                  • Date Selection: simple calendar interface for check-in and check-out dates
                  • Advanced Filters: price, hotel type, star rating, room count, and guest count
                  • Reviews & Ratings: help users make confident booking decisions
                  • Quick Booking: minimal booking flow with clear pricing and CTA`,
      },
      {
        title: "Design Goals",
        content: `The experience was designed to feel premium, trustworthy, and easy to use.
                  • Create a premium travel experience
                  • Reduce booking complexity
                  • Improve discoverability
                  • Make hotel comparison effortless
                  • Increase booking confidence
                  • Deliver a clean and modern interface`,
      },
      {
        title: "User Flow",
        content: `Onboarding -> Home -> Search Destination -> Apply Filters -> Browse Hotels -> View Hotel Details -> Select Dates -> Confirm Booking -> Success`,
      },
      {
        title: "UX Decisions",
        content: `Several design choices helped the app feel calm and confidence-building.
                  • Large hotel images support visual travel decisions
                  • Simple search helps users start exploring immediately
                  • Easy filtering narrows results without overwhelming the interface
                  • Ratings, reviews, amenities, and pricing stay visible before booking
                  • Minimal booking flow reduces friction and improves trust`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced several important design principles.
                  • Visual storytelling is essential in travel apps
                  • Simplicity improves decision-making
                  • Large imagery increases engagement
                  • Strong information hierarchy reduces cognitive load
                  • Minimal interactions create a more enjoyable booking experience
                  • Small UI details significantly enhance the overall perception of quality`,
      },
      {
        title: "Future Improvements",
        content: `Future versions could include AI-based hotel recommendations, wishlist and favorites, voice search, price drop alerts, secure payment gateway, booking history, dark mode, multi-language support, AR room previews, and personalized travel recommendations.`,
      },
      {
        title: "Outcome",
        content: `StayEase demonstrates how thoughtful UX and clean UI can transform the hotel booking experience into a fast, enjoyable, and confidence-building journey. The project balances premium aesthetics with practical usability, making travel planning simpler and more engaging.`,
      },
    ],
  },
  moviebooking: {
    id: "moviebooking",
    title: "Movie & Live Shows Booking App",
    subtitle:
      "An entertainment booking platform for movies, concerts, comedy shows, and live performances",
    overview: `The Movie & Live Shows Booking App is a modern entertainment platform designed to simplify the process of discovering, booking, and managing movie tickets and live event experiences. From blockbuster movies and concerts to comedy shows and live performances, the app brings everything together in one seamless booking experience.`,
    role: "Product Designer",
    timeline: "2 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma"],
    sections: [
      {
        title: "Problem Statement",
        content: `Booking entertainment tickets should be exciting, but the experience often feels complicated.
                  • Searching across multiple platforms
                  • Confusing show timings
                  • Difficult seat selection
                  • Long booking flows
                  • Poor ticket management
                  • Inconsistent user experiences
                  The challenge was to design a platform that makes the entire journey simple, fast, and enjoyable.`,
      },
      {
        title: "Objective",
        content: `The goal was to design an intuitive entertainment booking application where users can explore movies and live events, discover trending shows, search nearby theatres, compare show timings, select preferred seats, complete secure payments, and access digital tickets instantly.`,
      },
      {
        title: "Target Users",
        content: `The app was designed for several entertainment user groups.
                  • Movie Enthusiasts: users who regularly watch movies in theatres
                  • Event Lovers: people attending concerts, stand-up comedy, plays, and live performances
                  • Families & Groups: users booking multiple tickets together
                  • Young Professionals: people looking for quick weekend entertainment options`,
      },
      {
        title: "Solution",
        content: `The app combines movie discovery, live events, ticket booking, and digital ticket management into one unified experience.
                  • Browse content, choose theatres, compare show timings, select seats, and receive instant e-tickets
                  • Reduce booking friction while maintaining a visually engaging interface`,
      },
      {
        title: "Key Features",
        content: `The experience is organized around entertainment discovery and booking.
                  • Movie Discovery: browse trending and upcoming movies with rich visual previews
                  • Live Events: explore concerts, comedy shows, theatre performances, and special events
                  • Smart Search: quickly search movies, theatres, artists, or venues
                  • Theatre & Show Listings: view available cinemas along with multiple show timings
                  • Interactive Seat Selection: choose preferred seats through an intuitive seating layout
                  • Secure Booking: simple booking flow with secure payment support
                  • Digital E-Tickets: instant QR-based tickets for hassle-free entry
                  • Booking History: access previous and upcoming bookings anytime`,
      },
      {
        title: "Design Goals",
        content: `The interface was designed to stay clean, modern, and exciting.
                  • Clean and modern interface
                  • Reduce booking time
                  • Improve content discoverability
                  • Simplify seat selection
                  • Enhance ticket accessibility
                  • Create an enjoyable entertainment experience`,
      },
      {
        title: "User Flow",
        content: `Home -> Browse Movies / Live Events -> Select Movie or Event -> Choose Theatre & Show Time -> Seat Selection -> Payment -> Booking Confirmation -> Digital Ticket`,
      },
      {
        title: "UX Decisions",
        content: `Several design choices helped the app feel faster and more enjoyable.
                  • Content-first home screen prioritizes trending movies and events
                  • Smart filters help users find shows based on timing, price, and location
                  • Simplified booking flow reduces the number of steps
                  • Interactive seat layout minimizes booking errors and improves confidence
                  • QR-based tickets make access easier without searching through messages`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced several important design principles.
                  • A smooth booking experience increases user satisfaction
                  • Visual hierarchy plays a major role in content discovery
                  • Fewer steps lead to faster task completion
                  • Interactive feedback builds confidence during booking
                  • Great product design creates excitement before the experience even begins`,
      },
      {
        title: "Future Improvements",
        content: `Future versions of the app could include AI movie recommendations, personalized event suggestions, wallet and reward points, food and beverage pre-ordering, real-time seat availability, social booking with friends, dark mode, multi-language support, voice search, calendar integration, Apple Wallet or Google Wallet tickets, and live event notifications.`,
      },
      {
        title: "Outcome",
        content: `This project demonstrates how thoughtful product design can simplify entertainment booking while creating an engaging and enjoyable user experience. The app combines movie discovery, live events, seat selection, payments, and digital ticket management into one cohesive ecosystem, making the entire journey smooth from discovery to entry.`,
      },
    ],
  },
  stellarui: {
    id: "stellarui",
    title: "Stellar UI",
    subtitle:
      "A premium landing page for a modern design system and UI component library",
    overview: `Stellar UI is a premium landing page concept designed for a modern design system and UI component library. The objective was to create a visually engaging website that showcases design resources while maintaining clarity, scalability, and an immersive browsing experience. Inspired by modern SaaS products, the design combines glassmorphism, soft gradients, dark UI, and minimal layouts to create a premium first impression.`,
    role: "Product Designer",
    timeline: "3 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma"],
    sections: [
      {
        title: "Problem Statement",
        content: `Many UI libraries and design system websites contain valuable resources but often struggle with:
                  • Information overload
                  • Poor visual hierarchy
                  • Generic layouts
                  • Low engagement
                  • Weak storytelling
                  • Lack of premium brand identity
                  The challenge was to create a landing page that communicates value quickly while making the experience visually memorable.`,
      },
      {
        title: "Objective",
        content: `The goal was to design a modern landing page that enables users to explore UI components, learn about the design system, discover tutorials, view feature highlights, build trust through social proof, encourage product adoption, and drive free trial conversions.`,
      },
      {
        title: "Target Audience",
        content: `The landing page was designed for several audience segments.
                  • UI/UX Designers: looking for high-quality UI kits and design systems
                  • Product Designers: building scalable digital products
                  • Frontend Developers: searching for reusable UI components
                  • Design Teams: needing consistent design systems for collaboration
                  • Startups: looking to speed up product development`,
      },
      {
        title: "Solution",
        content: `Stellar UI presents design resources using a clean content hierarchy and visually engaging sections.
                  • Guides users through product benefits, customer trust, features, tutorials, and conversion points
                  • Maintains a premium visual identity without overwhelming the user
                  • Uses progressive disclosure so visitors understand the product step by step`,
      },
      {
        title: "Key Features",
        content: `The landing page highlights the most important product areas.
                  • Modern Hero Section: bold intro with strong value proposition and clear CTA
                  • Component Library Showcase: reusable UI components with clean preview cards
                  • Design System Features: variables, icons, variants, templates, and scalable components
                  • Social Proof: trusted-by section featuring well-known companies
                  • Learning Resources: tutorial and course sections for designers and developers
                  • Premium Dark Theme: minimal visual language with subtle gradients and glassmorphism
                  • Responsive Layout: consistent experience across desktop and tablet devices`,
      },
      {
        title: "Design Goals",
        content: `The experience was designed to feel premium, clear, and conversion-focused.
                  • Create a premium first impression
                  • Improve product discoverability
                  • Reduce visual clutter
                  • Increase user engagement
                  • Encourage free trial sign-ups
                  • Showcase the design system beautifully
                  • Build trust through storytelling`,
      },
      {
        title: "User Flow",
        content: `Landing Page -> Product Introduction -> Feature Highlights -> Component Showcase -> Tutorials & Learning -> Customer Testimonials -> Call-to-Action -> Footer`,
      },
      {
        title: "UX Decisions",
        content: `Several design choices helped the landing page feel premium and easy to scan.
                  • Strong visual hierarchy with large headlines and supporting copy
                  • Progressive storytelling introduces features gradually
                  • Glassmorphism, gradients, and subtle animations create a memorable impression
                  • Clear CTA buttons encourage users to start exploring or begin a free trial
                  • Social proof builds credibility and confidence`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced several key design principles.
                  • Simplicity creates stronger visual impact
                  • White space improves readability
                  • Storytelling is as important as aesthetics
                  • Design systems require consistency at every level
                  • Micro-details contribute significantly to the perception of quality
                  • Premium interfaces rely on thoughtful restraint rather than excessive decoration`,
      },
      {
        title: "Future Improvements",
        content: `Future iterations could include interactive live component previews, theme switching, AI-powered component search, developer documentation, pricing comparison, community showcase, blog articles, animated onboarding, accessibility improvements, multi-language support, and Figma plugin integration.`,
      },
      {
        title: "Outcome",
        content: `Stellar UI demonstrates how a thoughtfully crafted landing page can communicate the value of a design system while delivering a premium user experience. The project combines modern aesthetics, clear information hierarchy, and strategic storytelling to create a website that is both visually engaging and conversion-focused.`,
      },
    ],
  },
  agencyhub: {
    id: "agencyhub",
    title: "Agency Hub",
    subtitle:
      "A corporate recruitment website concept for services, internships, jobs, and placements",
    overview: `Agency Hub is a modern corporate website concept designed for recruitment agencies to streamline the way they showcase services, internship opportunities, job openings, and placement success stories. The objective was to create a professional digital experience that builds trust, improves navigation, and encourages users to explore career opportunities with ease.`,
    role: "Product Designer",
    timeline: "2 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma"],
    sections: [
      {
        title: "Problem Statement",
        content: `Many recruitment agency websites suffer from common usability issues.
                  • Outdated visual design
                  • Poor information hierarchy
                  • Difficult navigation
                  • Overloaded content
                  • Weak call-to-action placement
                  • Low user engagement
                  As a result, users often struggle to find relevant services, internships, or job opportunities quickly.`,
      },
      {
        title: "Objective",
        content: `The goal was to design a clean, modern, and conversion-focused corporate website that enables users to understand the company's services, explore current job openings, discover internship opportunities, view placement success stories, and contact the company easily.`,
      },
      {
        title: "Target Users",
        content: `The platform was designed for multiple user groups.
                  • Students: searching for internships and entry-level opportunities
                  • Job Seekers: looking for full-time career opportunities
                  • Corporate Clients: businesses seeking recruitment and staffing services
                  • HR Professionals: interested in recruitment partnerships and workforce solutions`,
      },
      {
        title: "Design Goals",
        content: `The interface was shaped around clarity, trust, and conversion.
                  • Create a professional first impression
                  • Improve user trust through clean visual design
                  • Reduce cognitive load
                  • Simplify navigation
                  • Increase conversions through clear CTAs
                  • Present information in an organized and accessible manner`,
      },
      {
        title: "Key Features",
        content: `The website structure supports the most important recruitment journeys.
                  • Hero Section: strong value proposition with clear call-to-action buttons
                  • Company Statistics: achievements that build credibility
                  • Services Section: recruitment and staffing services in a card-based layout
                  • About Company: overview of the organization's mission and expertise
                  • Job Requirements: browse active openings with salary, location, and role info
                  • Internship Opportunities: dedicated section for students
                  • Placement Showcase: successful placements to build trust
                  • Call-to-Action: register, contact, or explore available opportunities`,
      },
      {
        title: "UX Decisions",
        content: `Several design choices helped keep the experience clean and scalable.
                  • Clear navigation for quick access to important pages
                  • Card-based layout for easy scanning
                  • Strong CTA placement throughout the site
                  • Visual hierarchy guided by typography, spacing, and contrast
                  • Trust building through statistics, company overview, and placement stories`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced a few core product design principles.
                  • A clean interface builds trust
                  • Strong information hierarchy improves usability
                  • White space enhances readability
                  • Consistent components create a scalable design system
                  • Effective CTAs improve user engagement
                  • Good UX is about solving problems, not adding complexity`,
      },
      {
        title: "Next Steps",
        content: `If this concept were developed further, I would add user authentication, advanced job search and filters, resume upload, company and candidate dashboards, application tracking, interview scheduling, recruiter tools, AI job recommendations, a responsive mobile version, accessibility improvements, and CMS integration.`,
      },
    ],
  },
  saralvepar: {
    id: "saralvepar",
    title: "Saral Vepar",
    subtitle:
      "An inventory and sales management mobile app for small and medium-sized businesses",
    overview: `Saral Vepar is a mobile application concept designed to simplify inventory management, sales tracking, billing, and business reporting for small and medium-sized businesses. The goal was to create an intuitive mobile experience that enables business owners to manage their daily operations from anywhere, without relying on spreadsheets or manual record-keeping.`,
    role: "Product Designer",
    timeline: "2 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma"],
    sections: [
      {
        title: "Problem Statement",
        content: `Small business owners often face challenges in managing their daily operations efficiently.
                  • Manual inventory tracking
                  • Difficulty monitoring daily sales
                  • Time-consuming billing processes
                  • Lack of business insights
                  • Poor visibility of stock levels
                  • Managing multiple records across notebooks or spreadsheets`,
      },
      {
        title: "Objective",
        content: `The objective was to design a mobile application that helps business owners manage inventory efficiently, track daily sales and expenses, generate bills quickly, monitor business performance, receive low-stock alerts, and access important information anytime.`,
      },
      {
        title: "Target Users",
        content: `The app was designed for multiple business user groups.
                  • Small Business Owners: managing daily inventory and sales
                  • Retail Shop Owners: needing fast billing and stock management
                  • Wholesalers: tracking stock movement and business transactions
                  • Local Store Managers: monitoring sales and inventory from a single dashboard`,
      },
      {
        title: "Solution",
        content: `Saral Vepar brings essential business operations into one clean and user-friendly mobile application.
                  • Manage everything from one place instead of switching between notebooks, Excel sheets, and multiple applications
                  • Focus on speed, clarity, and ease of use
                  • Help users spend less time managing records and more time growing their business`,
      },
      {
        title: "Key Features",
        content: `The experience is organized around the most important business workflows.
                  • Inventory Management: track products, quantities, and stock availability
                  • Smart Billing: create invoices quickly with an intuitive billing experience
                  • Sales Tracking: monitor daily income and transaction history
                  • Expense Management: record and organize business expenses
                  • Dashboard Analytics: view business performance through simple statistics and summaries
                  • Low Stock Alerts: receive notifications before inventory runs out
                  • Transaction History: access previous bills and payment records with ease`,
      },
      {
        title: "Design Goals",
        content: `The interface was designed to stay simple and efficient.
                  • Simple and minimal interface
                  • Easy navigation
                  • Fast task completion
                  • Reduce user effort
                  • Improve business visibility
                  • Mobile-first experience
                  • Clean information hierarchy`,
      },
      {
        title: "User Flow",
        content: `Splash Screen -> Onboarding -> Login -> Dashboard -> Inventory -> Billing -> Sales History -> Reports`,
      },
      {
        title: "UX Decisions",
        content: `Several design choices helped keep the experience practical and easy to use.
                  • Clean dashboard keeps important business information visible immediately after login
                  • Card-based layout makes business metrics easy to scan
                  • Minimal navigation helps users switch between key modules effortlessly
                  • Simple billing flow reduces the number of taps required to create an invoice
                  • Visual hierarchy helps users distinguish between income, expenses, and alerts`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced several important design principles.
                  • Simplicity improves usability
                  • Dashboards should prioritize actionable information
                  • Information hierarchy directly impacts decision-making
                  • Color can communicate status effectively
                  • Great product design solves everyday business problems, not just visual ones`,
      },
      {
        title: "Future Improvements",
        content: `If this concept evolves into a real product, I would like to add barcode scanner support, GST billing, multi-store management, offline mode, cloud backup and sync, customer management, supplier management, sales analytics, profit and loss reports, export reports, push notifications, and multi-language support.`,
      },
      {
        title: "Outcome",
        content: `Saral Vepar demonstrates how thoughtful product design can simplify daily business operations through a clean, user-friendly mobile experience. The design emphasizes clarity, efficiency, and accessibility, enabling business owners to manage inventory, sales, billing, and reports with confidence.`,
      },
    ],
  },
  leadsystemcrm: {
    id: "leadsystemcrm",
    title: "LeadSystem CRM",
    subtitle:
      "A smart CRM and lead management dashboard for sales teams and growing businesses",
    overview: `LeadSystem CRM is a modern Customer Relationship Management platform designed to simplify sales operations, customer management, lead tracking, invoicing, and business analytics. The goal of this project was to create a clean, intuitive, and scalable dashboard that enables sales teams and businesses to manage their complete customer journey from one centralized platform.`,
    role: "Product Designer",
    timeline: "2 Days",
    team: "1 Product Designer (Me)",
    tools: ["Figma"],
    sections: [
      {
        title: "Problem Statement",
        content: `Many businesses still struggle with scattered customer data and manual processes.
                  • Managing leads across multiple spreadsheets
                  • Missing follow-ups with potential customers
                  • Tracking invoices manually
                  • Poor visibility into sales performance
                  • Difficult team collaboration
                  • Complex dashboards with overwhelming information
                  These issues reduce productivity and often result in lost business opportunities.`,
      },
      {
        title: "Objective",
        content: `The objective was to design a modern CRM platform that allows businesses to track leads efficiently, manage customer information, create quotations and invoices, monitor team performance, analyze business growth, improve follow-up management, and make better business decisions through analytics.`,
      },
      {
        title: "Target Users",
        content: `The dashboard was designed for multiple business roles.
                  • Sales Teams: manage leads, follow-ups, and customer communication
                  • Business Owners: track revenue, team performance, and business health
                  • Account Managers: maintain customer relationships and manage invoices
                  • Operations Teams: handle quotations, reports, and workflow management`,
      },
      {
        title: "Solution",
        content: `LeadSystem CRM combines lead management, customer records, quotations, invoices, and business reports into one unified platform.
                  • Manage the entire sales pipeline from a single dashboard
                  • Emphasize clarity, speed, and efficiency
                  • Reduce cognitive load for users while keeping the experience scalable`,
      },
      {
        title: "Core Features",
        content: `The dashboard is organized around the most important CRM workflows.
                  • Dashboard Overview: business KPIs, sales metrics, and performance insights
                  • Lead Management: track lead stages from inquiry to conversion with reminders
                  • Customer Management: store customer information, communication history, and company details
                  • Company Management: organize company records linked with customers and sales activities
                  • Quotations: create and manage quotations for potential clients
                  • Invoice Management: generate invoices, monitor payment status, and manage billing workflows
                  • Reports & Analytics: visualize revenue, conversion rates, team performance, and sales growth
                  • Smart Search & Filters: quickly locate leads, customers, invoices, and reports`,
      },
      {
        title: "Design Goals",
        content: `The interface was designed to feel clean, scalable, and easy to navigate.
                  • Clean enterprise dashboard
                  • Reduce information overload
                  • Faster navigation
                  • Better decision making
                  • Consistent design language
                  • High scalability
                  • Responsive dashboard experience`,
      },
      {
        title: "User Flow",
        content: `Login -> Dashboard -> Lead Management -> Customer Details -> Quotation -> Invoice -> Reports & Analytics -> Business Insights`,
      },
      {
        title: "UX Decisions",
        content: `Several design choices helped make the CRM easier to use.
                  • Dashboard-first approach surfaces critical metrics immediately after login
                  • Consistent sidebar navigation helps users switch modules effortlessly
                  • Data tables are optimized for readability with filters, actions, and status indicators
                  • Color-coded status improves recognition for lead stages and invoice status
                  • Charts and graphs simplify complex business data`,
      },
      {
        title: "What I Learned",
        content: `This project reinforced several important product design principles.
                  • Enterprise dashboards require strong information hierarchy
                  • Data should support decision-making, not overwhelm users
                  • Consistency improves usability across complex systems
                  • Dashboards should prioritize clarity over decoration
                  • Good CRM software simplifies business operations instead of adding complexity`,
      },
      {
        title: "Future Improvements",
        content: `Future versions of LeadSystem CRM could include AI lead scoring, sales forecasting, workflow automation, email integration, calendar and meeting scheduling, role-based access control, team collaboration, mobile CRM application, dark mode, multi-language support, customer timelines, and real-time notifications.`,
      },
      {
        title: "Outcome",
        content: `LeadSystem CRM demonstrates how thoughtful product design can transform complex business workflows into a simple, organized, and efficient user experience. The platform enables businesses to manage leads, customers, quotations, invoices, and analytics from one centralized dashboard while maintaining clarity, scalability, and usability.`,
      },
    ],
  },
  evmcare: {
    id: "evmcare",
    title: "WorkHub - Co-Working Space Booking App",
    subtitle:
      "A mobile-first platform for discovering and booking workspaces in minutes",
    overview: `WorkHub is a mobile-first co-working space booking platform that allows users to discover, explore, and book workspaces such as private cabins, meeting rooms, and shared desks seamlessly. The product focused on reducing booking friction and improving decision-making through clear visual information.`,
    role: "Product designer & Product manager",
    timeline: "6-8 weeks",
    team: "1 Product Designer (Me - Project Lead), 1 Flutter Developer, 1 Backend Developer",
    tools: [
      "Figma (UI/UX Design & Prototyping)",
      "User Research",
      "Wireframing",
    ],
    sections: [
      {
        title: "Role & Responsibilities",
        content: `As Product Designer (Lead), I owned the complete design process from discovery to validation.
                  • Led end-to-end product design
                  • Defined user experience strategy and booking flow
                  • Designed UI and interactive prototypes
                  • Collaborated closely with Flutter and backend developers for implementation`,
      },
      {
        title: "The Problem",
        content: `Finding and booking co-working spaces is often fragmented and inconvenient.
                  • No centralized platform to explore nearby workspaces
                  • Difficulty comparing amenities and pricing
                  • Complex booking process
                  • Lack of real-time availability
                  • Poor mobile experience in existing platforms`,
      },
      {
        title: "Research & Discovery",
        content: `I analyzed co-working platforms and user booking behavior.
                  • Users prefer quick search and booking under 1 minute
                  • Location-based discovery is essential
                  • Users want clear space types: Cabin, Meeting Room, Desk
                  • Ratings and reviews strongly influence decisions
                  • Simple UI increases booking conversion`,
      },
      {
        title: "Design Process",
        content: `The booking flow was designed as Home -> Search -> Space Detail -> Select Space -> Book, with a focus on reducing steps.
                  • Final UI Screens: 10
                  • Clean light-theme interface with strong orange CTAs
                  • Smart search with category shortcuts for Space, Meet, and Cabin
                  • Visual listing cards with image, ratings, location, and capacity
                  • Detailed view with amenities, description, and pricing transparency
                  • Seamless booking with space type selection and clear confirmation CTA
                  • Prototyped end-to-end flow from discovery to booking confirmation`,
      },
      {
        title: "Core Features",
        content: `The final product supports fast and informed workspace booking.
                  • Smart Search: find spaces based on location
                  • Workspace Listing: visual cards with ratings and details
                  • Detailed View: amenities, pricing, and description
                  • Space Selection: choose workspace type easily
                  • Booking System: quick and seamless booking flow`,
      },
      {
        title: "Results",
        content: `The redesign improved speed, engagement, and conversion in booking journeys.
                  • Booking Speed: 60% Faster
                  • User Engagement: Increased
                  • Conversion Rate: Improved
                  • Usability: High
                  • Decision-Making: Better with clearer information`,
      },
      {
        title: "Learnings",
        content: `Booking products perform best when users can evaluate and act quickly.
                  • Visual content drives user decisions
                  • Clear CTAs improve conversion
                  • Simplicity in booking flow is critical
                  • Categorization improves discoverability`,
      },
    ],
  },
  leadmgmt: {
    id: "leadmgmt",
    title: "Lead Management System - LeadSystem CRM",
    subtitle:
      "A mobile and web dashboard platform for lead tracking, follow-ups, and sales workflow management",
    overview: `LeadSystem CRM is a mobile and web dashboard based customer relationship and lead management platform designed to help businesses track leads, manage customer interactions, and streamline sales workflows in one unified system.`,
    role: "Product designer & Product manager",
    timeline: "6-8 weeks",
    team: "1 Product Designer (Me - Product Lead), 1 Flutter Developer, 1 Angular Developer, 1 Backend Developer",
    tools: [
      "Figma (UI/UX Design & Prototyping)",
      "User Research",
      "Wireframing",
    ],
    sections: [
      {
        title: "Role & Responsibilities",
        content: `As Product designer & Product manager, I drove direction and execution end-to-end.
                  • Led end-to-end product design from research to handoff
                  • Defined UX strategy and user flows for mobile and web dashboard
                  • Designed UI system and interactive prototypes
                  • Coordinated scope and priorities with Flutter, Angular, and backend teams`,
      },
      {
        title: "The Problem",
        content: `Businesses struggle to manage leads efficiently due to scattered tools and lack of structured tracking.
                  • Leads are stored across spreadsheets and multiple platforms
                  • No centralized system to track lead status
                  • Difficulty managing follow-ups
                  • Poor visibility of the sales pipeline
                  • Time-consuming manual data entry`,
      },
      {
        title: "Research & Discovery",
        content: `I analyzed small-business workflows and existing CRM usage patterns.
                  • Users prefer mobile-first CRM access
                  • Quick lead updates are critical for sales teams
                  • Follow-up reminders are essential
                  • Visual dashboards improve decision-making
                  • Simple UI is preferred over complex enterprise tools`,
      },
      {
        title: "Design Process",
        content: `The core flow was designed as Login -> Dashboard -> Leads -> Lead Details -> Follow-up to reduce friction in daily sales tasks.
                  • Final UI Screens: 7
                  • Dashboard analytics cards for Active Leads, Customer Count, and Orders
                  • Lead list in a clean card layout with quick access to call, email, and details
                  • Smart search and filters for quick lead lookup
                  • Floating action button for fast lead creation
                  • Lead detail view with customer info, services/pricing, and follow-up date
                  • Prototyped flows for add lead, update status, and follow-up tracking`,
      },
      {
        title: "Core Features",
        content: `The final product covered key sales operations across mobile and dashboard experiences.
                  • Lead Tracking: add, edit, and manage leads in an organized list
                  • Quick Actions: call and email directly from app
                  • Follow-Up Management: track next follow-up dates to improve conversion
                  • Dashboard Analytics: performance overview for leads and activity
                  • Add Lead: fast entry with minimal required fields`,
      },
      {
        title: "Results",
        content: `The redesign improved consistency, speed, and visibility for business teams.
                  • Lead Tracking Speed: 40% Faster
                  • Follow-up Efficiency: Improved
                  • Data Organization: Centralized
                  • User Experience: Simplified
                  • Pipeline Visibility: Better
                  • Manual Dependency: Reduced`,
      },
      {
        title: "Learnings",
        content: `Business tools perform best when clarity and speed are prioritized.
                  • Simplicity is key for day-to-day business workflows
                  • Quick actions like call and email improve usability
                  • Visual dashboards help users make faster decisions
                  • Reducing steps increases productivity`,
      },
    ],
  },
  adrinoling: {
    id: "adrinoling",
    title: "Adrenalinq - Sports Tournament Management Ecosystem",
    subtitle:
      "A multi-role ecosystem with mobile apps and web dashboards for end-to-end tournament operations",
    overview: `Adrenalinq is a comprehensive sports tournament management ecosystem designed for local communities and organizers. It streamlines the complete tournament lifecycle, from player registration to live match tracking and player auctions, across multiple platforms and user roles.`,
    role: "Product designer & Product manager (Project Lead)",
    timeline: "8-10 weeks",
    team: "1 Product Designer (Me - Project Lead), 2 Flutter Developers, 3 Backend Developers, 2 Angular Developers, 5 Testers",
    tools: [
      "Figma (UI/UX + Design System)",
      "Prototyping",
      "User Flow Mapping",
    ],
    sections: [
      {
        title: "Platform Breakdown",
        content: `The ecosystem includes 3 mobile apps and web dashboards for complete operational coverage.
                  • Player App: discover tournaments, register, and track matches
                  • Organizer App: create tournaments, manage registrations, and schedule matches
                  • Owner App: bid on players, build teams, and manage budgets
                  • Web Platforms: Admin Panel for full control and Organizer Dashboard for analytics and operations`,
      },
      {
        title: "The Problem",
        content: `Local sports tournaments are often managed manually or through disconnected tools.
                  • No unified system for players, organizers, and owners
                  • Manual registration and scheduling
                  • Lack of transparency in player selection and auctions
                  • Poor communication between stakeholders
                  • No real-time updates for matches`,
      },
      {
        title: "Research & Discovery",
        content: `I studied local tournament workflows and user behaviors.
                  • Players want easy discovery and quick registration
                  • Organizers need centralized control dashboards
                  • Owners require transparent auction systems
                  • Mobile-first approach is critical
                  • Real-time updates increase engagement`,
      },
      {
        title: "Design Process",
        content: `I designed a role-based ecosystem instead of a single app, creating focused experiences per user type.
                  • Final UI Screens: 6
                  • Separated journeys for player, organizer, and auction workflows
                  • Visual-first strategy with card-based tournament listings
                  • Simplified bottom navigation for Discover, Matches, and Profile
                  • Live feedback indicators for registrations and matches
                  • Action-driven CTAs like Register Now and View Details`,
      },
      {
        title: "Core Features",
        content: `The ecosystem supports tournament operations end-to-end.
                  • Player App: tournament discovery, registration, and match tracking
                  • Organizer App: tournament creation, player management, and scheduling
                  • Owner App: player auction system, budget tracking, and team building
                  • Admin and Web Dashboards: system control, analytics, and monitoring`,
      },
      {
        title: "Results",
        content: `The product improved speed, transparency, and multi-role coordination.
                  • Setup Time: 45% Faster
                  • Engagement: Increased
                  • Transparency: High
                  • Efficiency: Improved
                  • Coordination: Better across players, organizers, and owners`,
      },
      {
        title: "Learnings",
        content: `Complex ecosystems succeed when each role has clear and focused workflows.
                  • Multi-role systems need strict flow separation
                  • Simplicity is crucial even in complex products
                  • Real-time updates significantly improve engagement
                  • Different user types require different UX strategies`,
      },
    ],
  },
  rkcredit: {
    id: "rkcredit",
    title: "RK Credit First - Credit Card Management App",
    subtitle:
      "A mobile-first platform to discover, apply for, and manage multiple credit cards in one place",
    overview: `RK Credit First is a mobile-first financial platform that simplifies how users explore, apply for, and manage multiple credit cards in one unified ecosystem. The app improves financial visibility, streamlines application processes, and gives users better control over credit-related activities.`,
    role: "Product Designer (UI/UX Designer)",
    timeline: "6-8 weeks",
    team: "1 Product Designer (Me), 2 Flutter Developers, 1 Backend Developer",
    tools: [
      "Figma (UI/UX Design & Prototyping)",
      "User Flow Mapping",
      "Design System",
    ],
    sections: [
      {
        title: "Role & Responsibilities",
        content: `As Product Designer (UI/UX Designer), I drove the user experience from concept to implementation.
                  • Designed end-to-end user experience
                  • Created UI screens and interactive prototypes
                  • Collaborated with developers during implementation`,
      },
      {
        title: "The Problem",
        content: `Users struggle to manage multiple credit cards due to fragmented banking apps and lack of centralized control.
                  • Managing multiple cards across different apps
                  • Limited visibility of credit usage and limits
                  • Complicated application processes
                  • Lack of quick access to financial tools
                  • Poor user experience in traditional banking apps`,
      },
      {
        title: "Research & Discovery",
        content: `I analyzed fintech apps and user behavior patterns.
                  • Users prefer a single platform for all credit cards
                  • Fast application process improves conversion
                  • Visual dashboards help users understand finances
                  • Users value rewards, offers, and cashback visibility
                  • Trust and simplicity are critical in fintech apps`,
      },
      {
        title: "Design Process",
        content: `The user flow was designed as Home -> Explore Cards -> View Details -> Apply -> Track Status.
                  • Final UI Screens: 7
                  • Clean financial dashboard for apply and status actions
                  • Scrollable card discovery list with clear CTAs
                  • Realistic card UI and bank branding for trust
                  • Quick actions for apply, status, and future loan inquiry
                  • Engagement modules for Refer and Earn and cashback highlights
                  • Prototyped apply, confirmation, status tracking, and offers exploration`,
      },
      {
        title: "Core Features",
        content: `The app focuses on fast credit-card exploration and management.
                  • Credit Card Discovery: explore and compare multiple bank cards
                  • Easy Application Flow: simple and fast application process
                  • Application Tracking: view real-time application status
                  • Rewards and Offers: cashback and referral benefits
                  • Financial Insights (Future Scope): credit score tracking and spending analysis`,
      },
      {
        title: "Results",
        content: `The redesign improved speed, engagement, and financial clarity.
                  • Application Speed: 35% Faster
                  • User Engagement: Increased
                  • Conversion Rate: Improved
                  • Usability: Enhanced
                  • Discovery Experience: Improved
                  • Financial Awareness: Better`,
      },
      {
        title: "Learnings",
        content: `Fintech products need high trust, clarity, and action-focused flows.
                  • Trust-driven design is crucial in fintech
                  • Clear CTAs improve conversion rates
                  • Visual representation simplifies complex data
                  • Minimal UI reduces cognitive load`,
      },
    ],
  },
};

export const skills = [
  {
    category: "UI/UX Design",
    items: [
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 94 },
      { name: "Visual Design", level: 92 },
      { name: "Design Systems", level: 90 },
      { name: "User Research", level: 88 },
    ],
  },
  {
    category: "Product Management",
    items: [
      { name: "Agile & Scrum", level: 95 },
      { name: "Backlog Management", level: 92 },
      { name: "Product Lifecycle", level: 90 },
      { name: "Stakeholder Mgmt", level: 88 },
      { name: "Product Roadmapping", level: 85 },
    ],
  },
  {
    category: "Tools & Software",
    items: [
      { name: "Figma", level: 96 },
      { name: "Figma motion", level: 96 },
      { name: "Canva", level: 90 },
    ],
  },
  {
    category: "Technical & Analytical",
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Design Thinking", level: 92 },
      { name: "UX Research Analysis", level: 88 },
      { name: "Data Interpretation", level: 80 },
      { name: "A/B Testing", level: 75 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Attention to Detail", level: 95 },
      { name: "Communication", level: 94 },
      { name: "Collaboration", level: 92 },
      { name: "Critical Thinking", level: 90 },
      { name: "Time Management", level: 88 },
    ],
  },
  {
    category: "Bonus Skills",
    items: [
      { name: "Responsive Design", level: 92 },
      { name: "Mobile-First Design", level: 90 },
      { name: "Accessibility (WCAG)", level: 85 },
      { name: "UX Writing", level: 80 },
      { name: "Basic HTML/CSS", level: 70 },
    ],
  },
];

export const experience = [
  {
    title: "Product Designer",
    company: "Novus Ark",
    location: "Vadodara, Gujarat",
    period: "Jul 2025 — Present",
    description:
      "Partnered with clients and cross-functional teams to gather requirements, translating business objectives into intuitive product designs for web and mobile platforms.",
    highlights: [
      "Managed the product design lifecycle from user research to high-fidelity prototypes",
      "Championed user-centric principles to enhance usability and drive engagement",
      "Ensured final designs were accessible, scalable, and met client goals",
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "Novus Ark",
    location: "Vadodara, Gujarat",
    period: "Jan 2025 — Jul 2025",
    description:
      "Collaborated with design and development teams to define user flows and create user-friendly interfaces for web and mobile applications.",
    highlights: [
      "Gained hands-on experience in research, wireframing, and Figma prototyping",
      "Applied responsive design principles for seamless product experiences",
      "Contributed to scalable design systems ensuring visual consistency",
    ],
  },
];

export const education = [
  {
    category: "Education",
    degree: "B.Tech in Computer Science and Engineering",
    field: "Computer Science",
    institution: "ITM(SLS) BARODA UNIVERSITY",
    location: "Vadodara, Gujarat",
    period: "2022 — 2026",
    description:
      "Currently pursuing Bachelor's degree with a focus on product lifecycle and development.",
    achievements: ["CGPA: 8.62 / 10"],
  },
  {
    category: "Education",
    degree: "Higher Secondary Science stream",
    field: "Science",
    institution: "Sarva Vidhyalaya High School",
    location: "Kadi, Mahesana",
    period: "2020 — 2022",
    description: "Pre-university education with core focus on exact sciences.",
    achievements: ["Percentage: 64.67%"],
  },
  {
    category: "Education",
    degree: "Secondary School",
    field: "General Education",
    institution: "Mahatma Gandhi U.B. Vidhyalaya",
    location: "Morbi, Gujarat",
    period: "2018 — 2020",
    description: "Completed foundational secondary education.",
    achievements: ["Percentage: 73.67%"],
  },
  {
    category: "Certifications",
    degree: "Scrum Master Certification",
    field: "Agile Enterprise Coach",
    institution: "Udemy",
    location: "Online",
    period: "Certified",
    description:
      "Certified in Agile principles and the official Scrum framework, with expertise in sprint planning and backlog management.",
    achievements: [],
  },
  {
    category: "Certifications",
    degree: "Figma Essential for UI/UX",
    field: "Design",
    institution: "Udemy",
    location: "Online",
    period: "Certified",
    description:
      "Proficient in using Figma to design high-fidelity wireframes, user-centered prototypes, and seamless user flows.",
    achievements: [],
  },
];

const MONTH_LOOKUP = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const parseExperienceMonth = (value) => {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (/present/i.test(normalized)) {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }

  const match = normalized.match(/([A-Za-z]{3})\s+(\d{4})/);
  if (!match) {
    return null;
  }

  const [, monthLabel, yearLabel] = match;
  const monthIndex = MONTH_LOOKUP[monthLabel];
  if (monthIndex === undefined) {
    return null;
  }

  return Number(yearLabel) * 12 + monthIndex;
};

const calculateTotalExperience = (roles) => {
  const monthSet = new Set();

  roles.forEach((role) => {
    if (!role.period.includes("—")) {
      return;
    }

    const [startLabel, endLabel] = role.period
      .split("—")
      .map((part) => part.trim());
    const startMonth = parseExperienceMonth(startLabel);
    const endMonth = parseExperienceMonth(endLabel);

    if (startMonth === null || endMonth === null) {
      return;
    }

    for (let month = startMonth; month <= endMonth; month += 1) {
      monthSet.add(month);
    }
  });

  const totalYears = monthSet.size / 12;
  return totalYears.toFixed(1);
};

export const dynamicExperienceValue = calculateTotalExperience(experience);

export const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "2", label: "Certifications" },
  { value: dynamicExperienceValue, label: "Years Experience" },
  { value: "100%", label: "Commitment" },
];
