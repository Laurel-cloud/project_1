import React from 'react';
import './ImageComponent.css';  // 스타일을 별도로 작성할 경우 사용
import wave from '../assets/wave.jpeg'

function ImageComponent({ src, alt }) {
  return (
    <div className="image-container">
      <img src={wave} alt={alt} className="image" />
    </div>
  );
}

export default ImageComponent;