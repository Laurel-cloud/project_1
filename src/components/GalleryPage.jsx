import React from 'react';
import './GalleryPage.css'; // 스타일 파일
import galleryData from './galleryData'; // 갤러리 이미지를 담은 데이터

function GalleryPage() {
  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryData.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;