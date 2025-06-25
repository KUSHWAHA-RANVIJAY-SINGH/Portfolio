import React, { useState, useEffect } from "react";
import pic from "../../assets/ranvijay.jpg";
import ThemeToggle from "../ThemeToggle";
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Certificate" }, 
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white dark:bg-slate-700 shadow-md dark:shadow-slate-900/20" 
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex space-x-2 items-center gap-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
            <h1 className="font-semibold text-2xl cursor-pointer text-black dark:text-white">
              Ranvijay<span className="text-slate-500 dark:text-slate-300 text-xl"> Singh</span>
              <p className="text-sm text-gray-800 dark:text-slate-300">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-black dark:text-white"
                    activeClass="!text-blue-500 dark:!text-blue-400 font-bold border-b-2 border-blue-500 dark:border-blue-400 "
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer text-black dark:text-white">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="md:hidden bg-white dark:bg-slate-700 shadow-lg dark:shadow-slate-900/20">
            <div className="flex justify-center py-4">
              <ThemeToggle />
            </div>
            <ul className="flex flex-col items-center justify-center space-y-3 text-xl pb-6">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-black dark:text-white"
                    activeClass="!text-blue-500 dark:!text-blue-400 font-bold"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
