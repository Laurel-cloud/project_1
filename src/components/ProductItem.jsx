// ProductItem.jsx
import React from "react";
import "./ProductItem.css";

function ProductItem({ imageSrc, title, price }) {
  return (
    <a className="product-item-main">
      <img loading="lazy" src={imageSrc} alt={title} title={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </a>
  );
}

export default ProductItem;