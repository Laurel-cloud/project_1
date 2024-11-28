import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const location = useLocation(); // 현재 경로 정보 가져오기

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
    window.addEventListener("click", closeNav);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeNav);
    };
  }, []);

  // 페이지 경로 변경 감지하여 메뉴 닫기
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]); // location.pathname 변경 시 실행

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="left-header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Leica Logo" className="logo-image" />
        </Link>

        <div className={`navbar ${isNavOpen ? "active" : ""}`} ref={navRef}>
          {showToggle && (
            <button className="navbar-toggle" onClick={toggleNav}>
              <span className="material-icons">
                {isNavOpen ? "close" : "menu"}
              </span>
            </button>
          )}
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-header">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="material-icons">search</span>
        </div>

        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;