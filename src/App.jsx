// App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import "./App.css";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;