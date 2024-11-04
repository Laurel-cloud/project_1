import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(window.innerWidth < 768); // 기본값 설정

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowToggle(false); // 768px 이상에서는 메뉴 버튼 숨김
        setIsNavOpen(false);  // 메뉴도 닫힘
      } else {
        setShowToggle(true); // 768px 미만에서 메뉴 버튼 표시
      }
    };

    // 화면 크기 변경을 감지하는 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 사라질 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">Leica</div>
      <div className={`navbar ${isNavOpen ? "active" : ""}`}>
        {/* showToggle이 true일 때만 버튼 표시 */}
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