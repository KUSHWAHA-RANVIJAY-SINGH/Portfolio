import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="https://www.facebook.com/ranvijay.kushwaha.73932/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-blue-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/RanvijayKushwa7" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-blue-400 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/ranvijay_singh_kushwaha/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ranvijay-singh-abc3037/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-blue-700 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright Information */}
          <div className="text-center">
            <p className="text-gray-400 dark:text-slate-300">&copy;2025 Ranvijay Singh. All rights reserved.
</p>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
              Designed and developed with ❤️ by Ranvijay Singh
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-10 pt-8 border-t border-gray-700 dark:border-slate-600 flex flex-col md:flex-row justify-center items-center text-sm">
          <a href="/terms" className="text-gray-400 dark:text-slate-300 hover:text-white mx-4 my-2 md:my-0">
            Terms of Service
          </a>
          <span className="hidden md:inline text-gray-600 dark:text-slate-500">|</span>
          <a href="/privacy" className="text-gray-400 dark:text-slate-300 hover:text-white mx-4 my-2 md:my-0">
            Privacy Policy
          </a>
          <span className="hidden md:inline text-gray-600 dark:text-slate-500">|</span>
          <a href="/contact" className="text-gray-400 dark:text-slate-300 hover:text-white mx-4 my-2 md:my-0">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;