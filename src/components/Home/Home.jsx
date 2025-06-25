import React from "react";
import { IoMdDownload } from "react-icons/io";
import { ReactTyped } from "react-typed";
import resumePDF from '../../assets/Your_Resume.pdf';
import developer from '../../assets/Side_img.png';

function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-2 sm:px-4 md:px-10 lg:px-20 py-8 gap-8"
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start text-left space-y-4 max-w-full md:max-w-2xl w-full">
        <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Hello, I'm</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight">
          Ranvijay Singh
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 flex items-center">
          <ReactTyped
            className="mr-2"
            strings={["A Full-stack Developer"]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={2000}
            loop
          />
        </div>
        <p className="text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-xl text-justify">
          As a MERN stack developer, I am committed to building high-quality web applications that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Node.js, Express.js, and MongoDB to create scalable and robust web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            download="Ranvijay_Singh_Resume.pdf"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md w-full sm:w-auto"
          >
            MY RESUME <IoMdDownload className="text-xl" />
          </a>
          <a
            href="#About"
            className="border-2 border-orange-500 text-black dark:text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-md w-full sm:w-auto"
          >
            ABOUT ME
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 w-full">
        <img
          src={developer}
          alt="Developer Illustration"
          className="w-60 sm:w-80 md:w-[350px] lg:w-[450px] h-auto object-contain"
          style={{ filter: 'drop-shadow(0 0 20px #ff6600aa)' }}
        />
      </div>
    </section>
  );
}

export default Home;