import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null); // 내비게이션 바의 참조

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsNavOpen(false);
    }
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
    window.addEventListener("click", closeNav); // 바깥 영역 클릭 시 내비게이션 닫기

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeNav);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="left-header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Leica Logo" className="logo-image" />
        </a>

        <div className={`navbar ${isNavOpen ? "active" : ""}`} ref={navRef}>
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