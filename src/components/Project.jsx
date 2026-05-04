import React from "react";
import Logo from "../assets/Logo.webp";
import Inventory from "../assets/Inventory.png";
import Vehicle_logo from "../assets/Vehicle.png";
import Utsavmate from "../assets/utsavmate-logo.png";

/* ─── Tech-chip definitions ───────────────────────────────────── */
const T = {
  mern:    ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
  chat:    ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "REST API"],
  vehicle: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
  inventory:["React", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
  gym:     ["React", "Node.js", "MongoDB", "REST API", "Tailwind CSS"],
  laptop:  ["React", "Next.js", "Node.js", "MongoDB", "REST API", "Tailwind CSS"],
};

/* ─── Inline SVG logo placeholders for new projects ──────────── */
const GymLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="40" cy="40" r="40" fill="#1a1a2e"/>
    <rect x="10" y="36" width="12" height="8" rx="4" fill="#ff7a18"/>
    <rect x="58" y="36" width="12" height="8" rx="4" fill="#ff7a18"/>
    <rect x="20" y="30" width="8" height="20" rx="3" fill="#ff9944"/>
    <rect x="52" y="30" width="8" height="20" rx="3" fill="#ff9944"/>
    <rect x="28" y="38" width="24" height="4" rx="2" fill="#ffffff"/>
  </svg>
);

const LaptopLogo = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="40" cy="40" r="40" fill="#0f172a"/>
    <rect x="16" y="22" width="48" height="30" rx="4" fill="#1e40af"/>
    <rect x="20" y="26" width="40" height="22" rx="2" fill="#93c5fd"/>
    <rect x="10" y="53" width="60" height="5" rx="2.5" fill="#334155"/>
    <rect x="28" y="51" width="24" height="3" rx="1.5" fill="#64748b"/>
    <circle cx="40" cy="37" r="5" fill="#1e40af"/>
    <path d="M37 37 L40 34 L43 37 L40 40 Z" fill="#93c5fd"/>
  </svg>
);

/* ─── Chip list component ─────────────────────────────────────── */
const ChipList = ({ chips }) => (
  <div className="flex flex-wrap gap-2 justify-center mb-4">
    {chips.map((chip) => (
      <span
        key={chip}
        className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-700"
      >
        {chip}
      </span>
    ))}
  </div>
);

/* ─── Logo renderer ───────────────────────────────────────────── */
const ProjectLogo = ({ logo, SvgComponent, title }) => (
  <div className="w-20 h-20 mb-4 rounded-full border-2 border-orange-300 dark:border-orange-600 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-slate-800 flex-shrink-0">
    {SvgComponent
      ? <SvgComponent />
      : <img src={logo} alt={title} className="w-full h-full object-cover" />
    }
  </div>
);

/* ─── Project data ────────────────────────────────────────────── */
function Project() {
  const cardItem = [
    /* 1 ── UtsavMate */
    {
      id: 0,
      logo: Utsavmate,
      title: "UtsavMate (Wedding Marketplace)",
      chips: T.mern,
      bullets: [
        "Scalable digital wedding marketplace built with MERN stack",
        "Connects users with local vendors: decorators, photographers, event planners",
        "Dynamic vendor dashboards with portfolio management & AWS S3 integration",
        "Real-time lead tracking and role-based admin controls",
        "Responsive design focused on performance and UX",
      ],
      Live_link: "https://utsavmate.in/",
    },

    /* 2 ── Gym Management Website */
    {
      id: 1,
      SvgLogo: GymLogo,
      title: "Gym Management Website",
      chips: T.gym,
      bullets: [
        "Built a premium gym website with lead-generation focused landing pages",
        "Designed sections for memberships, gallery, and trainer showcase",
        "Added WhatsApp-based inquiry flow for direct client leads",
        "Created a clean, responsive UI tailored for gym owners",
      ],
      Live_link: "https://gymdemo.hitechcrest.com/",
    },

    /* 3 ── Laptop E-commerce Platform */
    {
      id: 2,
      SvgLogo: LaptopLogo,
      title: "Laptop E-commerce Platform",
      chips: T.laptop,
      bullets: [
        "Built a modern laptop e-commerce platform with product listing and cart",
        "Implemented filtering, responsive UI, and smooth user experience",
        "Designed for small businesses to sell products online",
        "Created structured layout for scalability and future admin features",
      ],
      Live_link: "https://demo.hitechcrest.com/",
    },

    /* 4 ── Vehicle Rental System */
    {
      id: 3,
      logo: Vehicle_logo,
      title: "Vehicle Rental System",
      chips: T.vehicle,
      bullets: [
        "Full-stack vehicle rental platform with intuitive UI",
        "User registration, vehicle listings & booking management",
        "Admin panel to oversee operations and manage fleet",
        "Integrated payment flow and rental history tracking",
        "Deployed on Vercel with REST API backend",
      ],
      github: "https://github.com/KUSHWAHA-RANVIJAY-SINGH/Vehicle-Rental-System",
      Live_link: "https://vehicle-rental-system-wheat-six.vercel.app/",
    },

    /* 5 ── Inventory Management System */
    {
      id: 4,
      logo: Inventory,
      title: "Inventory Management System",
      chips: T.inventory,
      bullets: [
        "Comprehensive inventory tracking & management platform",
        "Real-time stock updates and product categorization",
        "Supplier management with detailed reporting dashboard",
        "Role-based access control for staff & admins",
        "Deployed frontend on Vercel, backend on Render",
      ],
      github: "https://gitlab.com/ce_major/inventorymanagement",
      Live_link: "https://invsys-frontend.vercel.app/",
    },

    /* 6 ── Real Time Chat Application */
    {
      id: 5,
      logo: Logo,
      title: "Real Time Chat Application",
      chips: T.chat,
      bullets: [
        "Real-time messaging using WebSocket (Socket.io)",
        "Secure user authentication with JWT",
        "Individual and group chat support",
        "Responsive modern UI built with React",
        "Scalable MERN architecture for live updates",
      ],
      github: "https://github.com/KUSHWAHA-RANVIJAY-SINGH/Real_Time_Chat_Application",
    },
  ];

  return (
    <div name="Project" id="Project" className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-12 my-16">
      {/* Section Header */}
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
        Projects
      </h1>
      <p className="text-center text-gray-500 dark:text-slate-400 mb-8 text-sm sm:text-base">
        Real-world applications built end-to-end
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-8">
        {cardItem.map(({ id, logo, SvgLogo, title, bullets, chips, github, Live_link }) => (
          <div
            key={id}
            className="group project-card w-full border-2 border-gray-200 dark:border-slate-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 ease-out bg-white dark:bg-slate-700 h-full cursor-default"
          >
            {/* Logo */}
            <ProjectLogo logo={logo} SvgComponent={SvgLogo} title={title} />

            {/* Title */}
            <h2 className="font-bold text-lg mb-3 text-gray-900 dark:text-white leading-snug">
              {title}
            </h2>

            {/* Tech Chips */}
            <ChipList chips={chips} />

            {/* Bullet Points */}
            <ul className="text-left text-sm text-gray-700 dark:text-slate-300 space-y-1.5 mb-5 w-full px-2 flex-grow">
              {bullets.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-row flex-wrap gap-3 w-full justify-center">
              {Live_link && (
                <a
                  href={Live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-glow text-white font-bold px-5 py-2 rounded-xl text-sm flex items-center gap-1.5"
                >
                  🌐 Live Demo
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-orange text-gray-800 dark:text-white font-bold px-5 py-2 rounded-xl text-sm flex items-center gap-1.5"
                >
                  &lt;/&gt; Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
