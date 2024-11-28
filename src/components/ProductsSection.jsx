import React, { useRef } from "react";
import ProductItem from "./ProductItem";
import productsData from "./productsData"; // 제품 데이터 import
import "./ProductsSection.css";

function ProductsSection() {
  const sliderRef = useRef(null); // 슬라이더의 DOM을 참조

  const moveSlider = (direction) => {
    if (!sliderRef.current) return;

    // 첫 번째 아이템의 너비를 가져옴 (product-item-main 클래스를 사용)
    const itemWidth = sliderRef.current.querySelector(".product-item-main")?.offsetWidth;
    if (!itemWidth) return; // 아이템 너비를 가져올 수 없다면 함수 종료

    const moveAmount = itemWidth; // 한 번에 한 아이템씩 이동

    // 좌측으로 스크롤
    if (direction === "left") {
      sliderRef.current.scrollBy({
        left: -moveAmount, // 한 아이템 너비만큼 이동
        behavior: "smooth",
      });
    } else {
      // 우측으로 스크롤
      sliderRef.current.scrollBy({
        left: moveAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-slider" ref={sliderRef}>
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      {/* 좌우 버튼 추가 */}
      <div className="products-btn">
        <button
          className="slider-btn slider-btn-left"
          onClick={() => moveSlider("left")}
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <button
          className="slider-btn slider-btn-right"
          onClick={() => moveSlider("right")}
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </section>
  );
}

export default ProductsSection;