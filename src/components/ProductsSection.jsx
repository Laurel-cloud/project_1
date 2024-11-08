// src/components/ProductsSection.jsx
import React from "react";
import ProductItem from "./ProductItem";
import productsData from "./productsData"; // 제품 데이터 import
import "./ProductsSection.css";

function ProductsSection() {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-slider">
        {productsData.map((product, index) => (
          <ProductItem
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;