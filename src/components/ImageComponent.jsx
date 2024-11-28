import React, { useState } from "react";
import galleryData from "./GalleryData";
import "./ImageComponent.css";

// 이미지의 가로가 세로보다 긴 비율을 가진 이미지만 필터링
const filteredGalleryData = galleryData.filter((image) => {
  const img = new Image();
  img.src = image.src;
  return img.width > img.height; // 가로가 세로보다 긴 이미지만 필터링
});

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredGalleryData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredGalleryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <img
          className="carousel-image"
          src={filteredGalleryData[currentIndex].src}
          alt={filteredGalleryData[currentIndex].alt}
        />
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>
        <span className="material-icons">chevron_left</span>{" "}
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        <span className="material-icons">chevron_right</span>{" "}
      </button>
    </div>
  );
}

export default ImageSlider;
