import { useEffect, useRef, useState } from 'react';
import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import img3 from '../../../assets/images/3.jpg';
import img4 from '../../../assets/images/4.jpg';
import img5 from '../../../assets/images/5.jpg';
import Indicators from './indicators';
import Slide from './slide';

const images = [img1, img2, img3, img4, img5];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);

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

  const renderSlides = (position: 'left' | 'center' | 'right') => {
    return images.map((img, index) => {
      let isVisible = false;
      switch (position) {
        case 'left':
          isVisible =
            (index + images.length - 1) % images.length === currentIndex;
          break;
        case 'center':
          isVisible = index === currentIndex;
          break;
        case 'right':
          isVisible = (index + 1) % images.length === currentIndex;
          break;
      }
      return (
        <Slide
          key={index}
          img={img}
          isVisible={isVisible}
          alt={`Slide ${index + 1}`}
        />
      );
    });
  };

  return (
    <div
      ref={parentRef}
      id="default-carousel"
      className="relative my-bg-band3 rounded-lg shadow-lg p-2 border border-my_dark"
      data-carousel="slide"
    >
      <div className="flex flex-row">
        {/* Left */}
        <div
          className={`relative h-56 overflow-hidden rounded-lg md:h-96 flex-1 ${
            parentWidth < 600 ? 'hidden' : ''
          }`}
        >
          {renderSlides('left')}
        </div>
        {/* Middle */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex-1">
          {renderSlides('center')}
        </div>
        {/* Right */}
        <div
          className={`relative h-56 overflow-hidden rounded-lg md:h-96 flex-1 ${
            parentWidth < 600 ? 'hidden' : ''
          }`}
        >
          {renderSlides('right')}
        </div>
      </div>
      <Indicators
        images={images}
        currentIndex={currentIndex}
        onClick={setCurrentIndex}
      />
    </div>
  );
};

export default Slideshow;
