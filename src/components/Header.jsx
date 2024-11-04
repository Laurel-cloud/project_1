import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태 추가

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
      setIsScrolled(window.scrollY > 0); // 스크롤 상태 업데이트
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 추가

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">Leica</div>
      <div className={`navbar ${isNavOpen ? "active" : ""}`}>
        {showToggle && (
          <button className="navbar-toggle" onClick={toggleNav}>
            {isNavOpen ? "✖" : "☰"}
          </button>
        )}
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;