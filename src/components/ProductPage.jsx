// ProductPage.jsx
import React from "react";
import Header from "./Header"; // 기존 헤더 컴포넌트 사용
import productsData from "./productsData"; // 제품 데이터 import
import "./ProductPage.css"; // 페이지 전체 스타일링

function ProductPage() {
  return (
    <div className="product-page">
      {/* Product Categories Section */}
      <section className="product-categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category-item">Cameras</div>
          <div className="category-item">Lenses</div>
          <div className="category-item">Accessories</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="product-list">
          {productsData.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.imageSrc} alt={product.title} title={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;