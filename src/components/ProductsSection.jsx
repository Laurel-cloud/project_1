// ProductsSection.jsx
import React from "react";
import ProductItem from "./ProductItem";
import "./ProductsSection.css";

const productsData = [
  {
    imageSrc: "https://leica-camera.com/sites/default/files/styles/r_media_medium_mobile_4_3_x2/public/pm-18610-20000__M10_black.jpg?itok=K8QIQZ5c",
    title: "Leica M10",
    price: "$6995.00",
  },
  {
    imageSrc: "https://leica-camera.com/sites/default/files/styles/r_media_medium_mobile_4_3_x2/public/pm-96239-10896_SL2_silver_front.png?itok=VMPC4sm9",
    title: "Leica SL2",
    price: "$5995.00",
  },
  {
    imageSrc: "https://leica-camera.com/sites/default/files/styles/r_media_medium_mobile_4_3_x2/public/pm-33544-20002__M10-R_black.jpg?itok=fJ32TyIn",
    title: "Leica M10-R",
    price: "$8495.00",
  },
  {
    imageSrc: "https://leica-camera.com/sites/default/files/styles/r_media_medium_mobile_4_3_x2/public/pm-22175-19050__Q2_0.png?itok=3IbXKReT",
    title: "Leica Q2",
    price: "$4995.00",
  },
  {
    imageSrc: "https://leica-camera.com/sites/default/files/styles/r_media_medium_mobile_4_3_x2/public/pm-101429-19190_Leica_Sofort2_front_black_1920x1440--2-.png?itok=wrRtrgbs",
    title: "Leica SOFORT 2 Black",
    price: "$399.00",
  },
];

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