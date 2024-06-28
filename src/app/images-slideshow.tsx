import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';

const images = [img1, img2, img3, img4, img5];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setParentWidth(entry.contentRect.width);
      }
    });

    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={parentRef}
      id="default-carousel"
      className="relative bg-my_blue mx-12 rounded-lg shadow-lg py-2 border border-text"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="flex flex-row">
        {/* Left */}
        <div
          className={`relative h-56 overflow-hidden rounded-lg md:h-96 flex-1 ${
            parentWidth < 600 ? 'hidden' : ''
          }`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                (index + images.length - 1) % images.length === currentIndex
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <img
                src={img}
                className="block w-full h-full object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Middle */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex-1">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                className="block w-full h-full object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Right */}
        <div
          className={`relative h-56 overflow-hidden rounded-lg md:h-96 flex-1 ${
            parentWidth < 600 ? 'hidden' : ''
          }`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                (index + 1) % images.length === currentIndex
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <img
                src={img}
                className="block w-full h-full object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
