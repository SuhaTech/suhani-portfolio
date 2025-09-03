import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="logo">
          My <span>Portfolio</span>
        </a>

        {/* Menu Links */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          {["Home", "About", "Services", "Portfolio", "Contact"].map((s) => (
            <li key={s}>
              <a href={`#${s.toLowerCase()}`} onClick={() => setOpen(false)}>
                {s}
              </a>
            </li>
          ))}
          <li>
            <a
              className="resume-btn"
              href="/My_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Burger Button */}
        <div
          className={`burger ${open ? "toggle" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
