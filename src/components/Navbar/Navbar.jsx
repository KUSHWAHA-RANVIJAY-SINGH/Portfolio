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
    { id: 3, text: "Project" },
    { id: 4, text: "Certificate" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className={`navbar-fullwidth transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <div className="navbar-content">
          {/* Logo Section */}
          <div className="navbar-logo">
            <img src={pic} style={{ height: 48, width: 48, borderRadius: '50%' }} alt="Logo" />
            <div>
              <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff', margin: 0 }}>Ranvijay <span style={{ color: '#aaa', fontSize: '1.2rem' }}>Singh</span></h1>
              <p style={{ fontSize: '0.9rem', color: '#aaa', margin: 0 }}>Web Developer</p>
            </div>
          </div>

          {/* Desktop Navbar Links */}
          <nav className="navbar-links">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="navbar-link"
                activeClass="!text-orange-500 font-bold border-b-2 border-orange-500"
              >
                {text}
              </Link>
            ))}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button className="navbar-toggle" onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div style={{ position: 'absolute', top: '64px', left: 0, width: '100vw', background: '#232323', zIndex: 99 }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
              <ThemeToggle />
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', fontSize: '1.2rem', paddingBottom: '24px', margin: 0 }}>
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="navbar-link"
                    activeClass="!text-orange-500 font-bold"
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
