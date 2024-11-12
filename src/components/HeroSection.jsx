// HeroSection.jsx
import React from "react";
import { Link } from 'react-router-dom';
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <h1>Discover the World Through Leica</h1>
      <p>Explore our premium range of cameras and lenses.</p>
      <Link to="/products" className="btn">Shop Now</Link>
    </section>
  );
}

export default HeroSection;