import React from "react";
import Logo from "../assets/Logo.webp";
import react from "../assets/reactjs.png";

import Review from "../assets/Code_Review.png";
import Inventory from "../assets/Inventory.png";
import Vehicle_logo from "../assets/Vehicle.png";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: Logo,
      title: "Real Time Chat Application",
      description: 'Real Time Chat Application is a MERN stack project that enables users to communicate instantly through a modern web interface. It features real-time messaging, user authentication, and responsive design, providing a seamless chat experience. The application leverages WebSocket technology for live updates and supports secure, scalable conversations for individuals or groups.',
      github: "https://github.com/KUSHWAHA-RANVIJAY-SINGH/Real_Time_Chat_Application"

    },
    {
      id: 2,
      logo: Vehicle_logo,
      title: "Vehicle Rental System",
      description: 'Vehicle Rental System is a MERN stack application designed to facilitate the rental of vehicles through an intuitive web platform. It features user registration, vehicle listings, booking management, and payment processing. The system allows users to easily browse available vehicles, make reservations, and manage their rentals, while providing administrators with tools to oversee operations and maintain the fleet efficiently.',
      github: 'https://github.com/KUSHWAHA-RANVIJAY-SINGH/Vehicle-Rental-System'
    },
    {
      id: 3,
      logo: Inventory,
      title: "Inventory Management System",
      description: 'Inventory Management System is a comprehensive MERN stack application designed to streamline and optimize inventory tracking and management for businesses. It features real-time stock updates, product categorization, supplier management, and detailed reporting. The system provides an intuitive user interface for easy navigation and efficient handling of inventory tasks, enhancing overall operational efficiency.',
      github: 'https://gitlab.com/ce_major/inventorymanagement',
      Live_link: 'https://invsys-frontend.vercel.app/'
    },
    {
      id: 4,
      logo: Review,
      title: "AI Code Review Tool",
      description: "AI Code Review Tool is a MERN stack application designed to automate and enhance the code review process. It features a user-friendly interface for submitting code, real-time syntax highlighting, and side-by-side comparison of original and improved code. The tool leverages AI to provide instant feedback, suggest best practices, and help developers improve code quality efficiently.",
      github: 'https://github.com/KUSHWAHA-RANVIJAY-SINGH/AI-Code-Reviewer',
      Live_link: 'https://ai-code-reviewer-r37.vercel.app/'
    },
    {
      id: 5,
      logo: react,
      title: "React-js Project",
      description: "A suite of 20+ React.js projects exploring components, state, hooks, and UI design—built to sharpen frontend skills through real-world practice.",
      github: 'https://github.com/KUSHWAHA-RANVIJAY-SINGH/React-js'
    },
    // {
    //   id: 5,
    //   logo: mongo,
    //   title: "MongoDB",
    //   description: 'MongoDB Application.',
    //   github : 'https://github.com/yourusername/mongodb-app'
    // },
    // {
    //   id: 6,
    //   logo: express,
    //   title: "Express",
    //   description: 'Express Application.',
    //   github : 'https://github.com/yourusername/express-app'
    // },  
  ];

  return (
    <div name='Project' className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-12 my-16">
      <div>
        <h1 className="text-3xl font-bold text-center mb-5 text-gray-900 dark:text-white">Project</h1>
        <span className="block text-center underline font-semibold text-lg text-gray-800 dark:text-slate-300">
          {/* Featured Projects */}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
          {cardItem.map(({ id, logo, title, description, github, Live_link, live, live_link }) => {
            const liveLink = Live_link || live || live_link;
            return (
              <div
                className="project-card w-full border-2 border-gray-200 dark:border-slate-600 rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white dark:bg-slate-700 h-full"
                key={id}
              >
                <img
                  src={logo}
                  className="w-24 h-24 mb-4 rounded-full border-2 border-gray-200 dark:border-slate-500"
                  alt={title}
                />
                <div className="project-details flex-grow">
                  <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h2>
                  <p className="project-desc text-gray-700 dark:text-slate-300 mb-4 text-left" style={{ fontSize: '1.05rem', lineHeight: '1.8', padding: '0 10px', letterSpacing: '0.01em', wordSpacing: '0.05em' }}>
                    {description}
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-2 w-full items-center">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded inline-block"
                  >
                    Source Code
                  </a>
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded inline-block"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
