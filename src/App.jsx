// App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import "./App.css";
import ProductPage from "./components/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ProductsSection />
          </>
        } />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
