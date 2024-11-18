import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageComponent from "./components/ImageComponent";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import "./App.css";

import ProductPage from "./components/ProductPage";
import GalleryPage from './components/GalleryPage';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ImageComponent />
                <ProductsSection />
              </>
            }
          />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/gallery" element={<GalleryPage />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;