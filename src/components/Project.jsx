import React from "react";
import java from "../assets/java.png";
import Logo from "../assets/Logo.webp";
import react from "../assets/reactjs.png";
import node from "../assets/node.png";
import mongo from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import blog from "../assets/Blog.png"
import Review from "../assets/Code_Review.png";

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
      logo: blog,
      title: "Blog Application",
      //blog application in mern stack
      description: 'Blog Application using MERN Stack Technology.',
      github: 'https://github.com/yourusername/blog-app'


    },
    {
      id: 3,
      logo: react,
      title: "React-js Project",
      description: "A suite of 20+ React.js projects exploring components, state, hooks, and UI design—built to sharpen frontend skills through real-world practice.",
      github: 'https://github.com/KUSHWAHA-RANVIJAY-SINGH/React-js'
    },
    {
      id: 4,
      logo: Review,
      title: "AI Code Review Tool",
      description: "AI Code Review Tool is a MERN stack application designed to automate and enhance the code review process. It features a user-friendly interface for submitting code, real-time syntax highlighting, and side-by-side comparison of original and improved code. The tool leverages AI to provide instant feedback, suggest best practices, and help developers improve code quality efficiently.",
      github: 'https://github.com/KUSHWAHA-RANVIJAY-SINGH/AI-Code-Reviewer'
    },
    // {
    //   id: 4,
    //   logo: node,
    //   title: "Node",
    //   description: 'Node Application.',
    //   github : 'https://github.com/yourusername/node-app'
    // },
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
          {cardItem.map(({ id, logo, title, description, github }) => (
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
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded inline-block mt-auto"
              >
                Source Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
