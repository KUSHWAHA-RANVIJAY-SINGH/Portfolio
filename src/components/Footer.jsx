import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div>
              <ul className="flex space-x-5">
                                <li>
                                  <a href="https://github.com/KUSHWAHA-RANVIJAY-SINGH
              " target="_blank">
                                    <FaGithub className="text-2xl cursor-pointer" />
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.linkedin.com/in/ranvijay-singh-abc3037/" target="_blank">
                                    <FaLinkedin className="text-2xl cursor-pointer" />
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.instagram.com/ranvijay_singh_kushwaha/" target="_blank">
                                    <FaInstagram className="text-2xl cursor-pointer" />
                                  </a>
                                </li>
                                <li>
                                  <a href="mailto:kuranvijay4@gmail.com" target="_blank">
                                    <CiMail className="text-2xl cursor-pointer" />
                                  </a>
                                </li>
                              </ul>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                {/* &copy; 2024 Your Company. All rights reserved. */}
                Thank you ❤️❤️
              </p>
              <p className="text-sm">Ranvijay Singh❤️❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;