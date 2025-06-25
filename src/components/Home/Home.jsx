import React from "react";
import { FaSquareGithub, FaLinkedin, FaTelegram, FaReact, FaNodeJs, FaArrowDown } from "react-icons/fa6";
import { IoMdMail, IoMdDownload } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import resumePDF from '../../assets/Your_Resume.pdf';
import { motion } from "framer-motion";
import developer from '../../assets/Side_img.png';
function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20"
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 max-w-2xl">
        <span className="text-xl text-gray-600 dark:text-gray-300">Hello, I'm</span>
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight">
          Ranvijay Singh
        </h1>
        <div className="text-2xl md:text-3xl font-bold text-orange-500 flex items-center">
          <ReactTyped
            className="mr-2"
            strings={["A Full-stack Developer"]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={2000}
            loop
          />
        </div>
        <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-xl text-justify">
          As a MERN stack developer, I am committed to building high-quality web applications that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Node.js, Express.js, and MongoDB to create scalable and robust web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            download="Ranvijay_Singh_Resume.pdf"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md"
          >
            MY RESUME <IoMdDownload className="text-xl" />
          </a>
          <a
            href="#About"
            className="border-2 border-orange-500 text-black dark:text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-md"
          >
            ABOUT ME
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
        {/* Placeholder SVG illustration, replace with your own if needed */}
        <img
          src={developer}
          alt="Developer Illustration"
          className="w-[350px] md:w-[450px] h-auto object-contain"
          style={{ filter: 'drop-shadow(0 0 20px #ff6600aa)' }}
        />
      </div>
    </section>
  );
}

export default Home;