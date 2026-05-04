import React, { useState, useEffect } from "react";
import pic from "../../assets/ranvijay.jpg";
import ThemeToggle from "../ThemeToggle";
import './Navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 700) setMenu(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: 1, text: "Home",           to: "Home" },
    { id: 2, text: "About",          to: "About" },
    { id: 3, text: "Projects",       to: "Project" },
    { id: 4, text: "Certifications", to: "Certifications" },
    { id: 5, text: "Contact",        to: "Contact" },
  ];

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -70,
    spy: true,
    activeClass: "active-nav",
  };

  return (
    <>
      <div className={`navbar-fullwidth${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-content">

          {/* ── Logo ───────────────────────────────────── */}
          <div className="navbar-logo">
            <img
              src={pic}
              style={{ height: 44, width: 44, borderRadius: "50%", border: "2px solid #ff7a18" }}
              alt="Ranvijay Singh"
            />
            <div>
              <h1 style={{ fontWeight: 700, fontSize: "1.35rem", color: "#fff", margin: 0, lineHeight: 1.2 }}>
                Ranvijay <span style={{ color: "#ff7a18" }}>Singh</span>
              </h1>
              <p style={{ fontSize: "0.78rem", color: "#9ca3af", margin: 0, letterSpacing: "0.03em" }}>
                Full Stack MERN Developer
              </p>
            </div>
          </div>

          {/* ── Desktop Links ──────────────────────────── */}
          <nav className="navbar-links">
            {navItems.map(({ id, text, to }) => (
              <Link key={id} to={to} className="navbar-link" {...linkProps}>
                {text}
              </Link>
            ))}
            <div className="hidden md:block ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* ── Mobile Toggle ──────────────────────────── */}
          <button
            className="navbar-toggle"
            onClick={() => setMenu(prev => !prev)}
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </button>
        </div>

        {/* ── Mobile Drawer ──────────────────────────── */}
        {menu && (
          <div className="mobile-menu">
            <div style={{ display: "flex", justifyContent: "center", padding: "14px 0 10px" }}>
              <ThemeToggle />
            </div>
            <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", paddingBottom: "20px", margin: 0, listStyle: "none", padding: "0 0 20px" }}>
              {navItems.map(({ id, text, to }) => (
                <li key={id} style={{ width: "100%", textAlign: "center" }}>
                  <Link
                    to={to}
                    onClick={() => setMenu(false)}
                    className="navbar-link"
                    style={{ display: "block", padding: "12px 24px", fontSize: "1.1rem" }}
                    {...linkProps}
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
