import React from "react";
import { Link } from "react-scroll";
import toast from "react-hot-toast";

function Footer() {
  const handlePlaceholderClick = (e, name) => {
    e.preventDefault();
    toast.success(`${name} page coming soon!`, {
      icon: '🚀',
    });
  };

  return (
    <footer className="py-12 bg-gray-100 dark:bg-[#232323] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Copyright Information */}
          <div className="mb-4 md:mb-6">
            <p className="text-gray-600 dark:text-slate-300 text-lg">
              &copy; {new Date().getFullYear()} <span className="font-semibold">Ranvijay Singh</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
              Designed and developed with <span className="text-red-500 animate-pulse inline-block">❤️</span> by Ranvijay Singh
            </p>
          </div>

          {/* Job Availability Badge */}
          <div className="mb-6">
            <span className="inline-block bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 font-semibold text-sm px-4 py-2 rounded-full border border-orange-300 dark:border-orange-700">
              🚀 Built real-world projects | Open to opportunities
            </span>
          </div>

          {/* Quick Links */}
          <div className="w-full max-w-lg pt-8 border-t border-gray-300 dark:border-slate-600 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium">
            <a
              href="/terms"
              onClick={(e) => handlePlaceholderClick(e, "Terms of Service")}
              className="text-gray-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              onClick={(e) => handlePlaceholderClick(e, "Privacy Policy")}
              className="text-gray-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </a>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;