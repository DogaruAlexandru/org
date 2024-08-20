import { useEffect, useRef, useState } from 'react';
import img1 from '../../../assets/images/slideshow/1.jpg';
import img2 from '../../../assets/images/slideshow/2.jpg';
import img3 from '../../../assets/images/slideshow/3.jpg';
import img4 from '../../../assets/images/slideshow/4.jpg';
import img5 from '../../../assets/images/slideshow/5.jpg';
import img6 from '../../../assets/images/slideshow/6.jpg';
import img7 from '../../../assets/images/slideshow/7.jpg';
import img8 from '../../../assets/images/slideshow/8.jpg';
import Indicators from './indicators';
import Slide from './slide';
import { throttle } from 'lodash'; // Throttle from lodash

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetAndStartInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetAndStartInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateWidth = throttle(() => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.clientWidth);
      }
    }, 200); // Adjust the delay as needed

    // Initial update
    updateWidth();

    // Set up ResizeObserver
    const resizeObserver = new ResizeObserver(updateWidth);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    // Fallback for window resize event
    window.addEventListener('resize', updateWidth);

    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    resetAndStartInterval();
  };

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
      className="relative my-bg-band3 rounded-lg shadow-lg p-2 border-2 border-my_dark overflow-hidden"
      data-carousel="slide"
    >
      <div className="flex flex-row">
        {/* Left */}
        <div
          className={`relative rounded-lg flex-1 ${
            parentWidth < 700 ? 'hidden' : ''
          }`}
        >
          {renderSlides('left')}
        </div>
        {/* Middle */}
        <div className="relative rounded-lg flex-1 mx-2">
          {renderSlides('center')}
        </div>
        {/* Right */}
        <div
          className={`relative rounded-lg flex-1 ${
            parentWidth < 700 ? 'hidden' : ''
          }`}
        >
          {renderSlides('right')}
        </div>
      </div>
      <Indicators
        images={images}
        currentIndex={currentIndex}
        onClick={handleIndicatorClick}
      />
    </div>
  );
};

export default Slideshow;
