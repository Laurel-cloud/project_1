import React, { useEffect, useRef, useState, useLayoutEffect } from "react"; 
import Header from "./Header"; 
import productsData from "./productsData"; 
import "./ProductPage.css"; 

function ProductPage() {
  const titleRefs = useRef([]); 
  const [selectedCategory, setSelectedCategory] = useState("camera");

  useLayoutEffect(() => { // layoutEffect 사용
    titleRefs.current.forEach((title) => {
      let fontSize = 1.2; 
      while (title.scrollHeight > title.clientHeight && fontSize > 0.8) {
        fontSize -= 0.1;
        title.style.fontSize = `${fontSize}rem`;
      }
    });
  }, [selectedCategory]); // 카테고리 변경 시마다 실행되도록 설정

  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="product-page">
      <section className="product-categories">
        <h2>Categories</h2>
        <div className="category-list">
          {["camera", "lens", "accessory"].map((category) => (
            <div
              key={category}
              className={`category-item ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>
      </section>

      <section className="featured-products">
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="product-item">
              <img src={product.imageSrc} alt={product.title} title={product.title} />
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