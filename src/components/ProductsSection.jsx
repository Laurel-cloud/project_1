// ProductsSection.jsx
import React from "react";
import "./ProductsSection.css";

function ProductsSection() {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div className="product-item">
          <img
            loading="lazy"
            src="https://leica-storebando.co.kr/web/product/big/202407/93ac0f4d562c38a899a27aafccdf64ce.jpg"
            alt="Front view of Leica Q3 camera"
            title="Leica Q3 Camera - Front View"
          />
          <h3>Leica M10</h3>
          <p>$6995.00</p>
        </div>
        {/* 다른 제품 아이템들도 필요 시 추가 */}
      </div>
    </section>
  );
}

export default ProductsSection;