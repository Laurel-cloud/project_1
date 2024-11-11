// ProductPage.jsx
import React, { useEffect, useRef } from "react";
import Header from "./Header"; // 기존 헤더 컴포넌트 사용
import productsData from "./productsData"; // 제품 데이터 import
import "./ProductPage.css"; // 페이지 전체 스타일링

function ProductPage() {
  const titleRefs = useRef([]); // 각 제품 제목을 참조할 배열

  useEffect(() => {
    titleRefs.current.forEach((title) => {
      let fontSize = 1.2; // 초기 폰트 크기 설정 (rem 단위)
      while (title.scrollHeight > title.clientHeight && fontSize > 0.8) {
        fontSize -= 0.1; // 텍스트가 넘칠 때 폰트 크기를 줄임
        title.style.fontSize = `${fontSize}rem`;
      }
    });
  }, [productsData]);

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
          {productsData.map((product, index) => (
            <div key={product.id} className="product-item">
              <img
                src={product.imageSrc}
                alt={product.title}
                title={product.title}
              />
              <h3 ref={(el) => (titleRefs.current[index] = el)}>
                {product.title}
              </h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;