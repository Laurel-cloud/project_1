import React from "react";
import "./GalleryPage.css"; // 스타일 파일
import galleryData from "./galleryData"; // 갤러리 이미지를 담은 데이터

function GalleryPage() {
  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryData.map((image, index) => (
          <div className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-description">
              <h3>{image.title}</h3>
              <p className="gallery-date">{image.date}</p>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
