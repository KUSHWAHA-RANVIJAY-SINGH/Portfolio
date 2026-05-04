import React from "react";
import { IoMdDownload } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { FaProjectDiagram, FaLayerGroup, FaCode } from "react-icons/fa";
import resumePDF from '../../assets/Your_Resume.pdf';
import developer from '../../assets/Side_img.png';

const highlights = [
  { icon: <FaProjectDiagram className="text-orange-400 text-2xl flex-shrink-0" />, text: "3+ Production-ready Projects" },
  { icon: <FaLayerGroup        className="text-orange-400 text-2xl flex-shrink-0" />, text: "Marketplace, Booking & Admin Systems" },
  { icon: <FaCode              className="text-orange-400 text-2xl flex-shrink-0" />, text: "React · Node.js · MongoDB · Express" },
];

function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-8 gap-10"
    >
      {/* ── Left ───────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center items-start text-left space-y-5 max-w-full md:max-w-2xl w-full">

        <span className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium tracking-wide">
          👋 Hello, I'm
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Ranvijay<br />
          <span className="text-orange-500">Singh</span>
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 flex items-center min-h-[2.5rem]">
          <ReactTyped
            strings={["Full Stack MERN Developer", "React + Node.js Engineer", "Building Scalable Apps"]}
            typeSpeed={55}
            backSpeed={35}
            backDelay={1800}
            loop
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          Building real-world scalable applications — from elegant UIs to robust APIs.
        </p>

        {/* ── Highlight chips ─────────────────────────── */}
        <div className="flex flex-col gap-2.5 w-full pt-1">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white dark:bg-slate-800/80 border border-orange-100 dark:border-slate-700 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-200"
            >
              {item.icon}
              <span className="text-sm sm:text-base text-gray-700 dark:text-slate-200 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* ── CTA Buttons ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
          {/* Orange glow resume button */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            download="Ranvijay_Singh_Resume.pdf"
            className="btn-orange-glow text-white font-bold py-3 px-7 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            MY RESUME <IoMdDownload className="text-xl" />
          </a>

          {/* Outline button */}
          <a
            href="#About"
            className="btn-outline-orange font-bold py-3 px-7 rounded-xl flex items-center justify-center gap-2 text-gray-900 dark:text-white w-full sm:w-auto"
          >
            ABOUT ME
          </a>
        </div>
      </div>

      {/* ── Right (Illustration) ───────────────────────── */}
      <div className="flex-1 flex justify-center items-center mt-4 md:mt-0 w-full">
        <img
          src={developer}
          alt="Full Stack Developer Illustration"
          className="w-64 sm:w-80 md:w-[360px] lg:w-[460px] h-auto object-contain select-none"
          style={{ filter: 'drop-shadow(0 0 28px #ff7a18aa)' }}
          draggable={false}
        />
      </div>
    </section>
  );
}

export default Home;