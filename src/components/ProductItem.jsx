// ProductItem.jsx
import React from "react";
import "./ProductItem.css";

function ProductItem({ imageSrc, title, price }) {
  return (
    <div className="product-item">
      <img loading="lazy" src={imageSrc} alt={title} title={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ProductItem;