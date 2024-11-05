import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowToggle(false);
        setIsNavOpen(false);
      } else {
        setShowToggle(true);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="left-header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Leica Logo" className="logo-image" />
        </a>

        <div className={`navbar ${isNavOpen ? "active" : ""}`}>
          {showToggle && (
            <button className="navbar-toggle" onClick={toggleNav}>
              {isNavOpen ? "✖" : "☰"}
            </button>
          )}
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-header">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="material-icons">search</span>
        </div>

        <a href="/login" className="login-button">
          Login
        </a>
      </div>
    </header>
  );
}

export default Header;