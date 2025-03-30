import React, { useState, useEffect } from 'react';
import './Imageslider.css';

const images = [
  { src: 'Images/slider1.jpg', text: 'SAVE PALESTINE' },
  { src: 'Images/slider2.jpg', text: 'SAVE GAZA' },
  { src: 'Images/slider3.jpg', text: 'SAVE RAFAH' },
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Show each image for 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.text} />
            <div className="text">{image.text}</div>
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};