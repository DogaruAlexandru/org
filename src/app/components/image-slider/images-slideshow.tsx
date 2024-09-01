import { useEffect, useRef, useState } from 'react';
import img1 from '../../../assets/images/slideshow/1.jpg';
import img2 from '../../../assets/images/slideshow/2.jpg';
import img3 from '../../../assets/images/slideshow/3.jpg';
import img4 from '../../../assets/images/slideshow/4.jpg';
import img5 from '../../../assets/images/slideshow/5.jpg';
import img6 from '../../../assets/images/slideshow/6.jpg';
import img7 from '../../../assets/images/slideshow/7.jpg';
import img8 from '../../../assets/images/slideshow/8.jpg';
import Slide from './slide';
import { throttle } from 'lodash';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset interval and start auto slideshow
  const resetAndStartInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      await Promise.all(
        images.map((src) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
          });
        })
      );
    };

    preloadImages().then(() => {
      resetAndStartInterval();
    });

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Throttle resize updates
    const updateDimensions = throttle(() => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.clientWidth);

        // Find max height of visible images
        const slides = parentRef.current.querySelectorAll('.slide img');
        let maxHeight = 0;
        slides.forEach((img) => {
          const height = img instanceof HTMLImageElement ? img.clientHeight : 0;
          maxHeight = Math.max(maxHeight, height);
        });

        // Add 16px to the calculated height
        setParentHeight(maxHeight + 16);
      }
    }, 200);

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    window.addEventListener('resize', updateDimensions);

    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
      window.removeEventListener('resize', updateDimensions);
    };
  }, [currentIndex, images]);

  const renderSlides = (position: 'left' | 'center' | 'right') => {
    if (parentWidth < 700 && position !== 'center') return null;

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
        <div className="slide" key={index}>
          <Slide img={img} isVisible={isVisible} alt={`Slide ${index + 1}`} />
        </div>
      );
    });
  };

  return (
    <div
      ref={parentRef}
      id="default-carousel"
      className="relative w-full my-bg-band1 rounded-lg shadow-lg p-2 border-my_dark"
      style={{ height: parentHeight }} // Set height dynamically with additional 16px
      data-carousel="slide"
    >
      <div className="relative flex flex-row">
        {/* Left */}
        <div className={`relative w-full ${parentWidth < 700 ? 'hidden' : ''}`}>
          {renderSlides('left')}
        </div>
        {/* Middle */}
        <div className="relative w-full mx-2">{renderSlides('center')}</div>
        {/* Right */}
        <div className={`relative w-full ${parentWidth < 700 ? 'hidden' : ''}`}>
          {renderSlides('right')}
        </div>
      </div>
      {/* <Indicators
        images={images}
        currentIndex={currentIndex}
        onClick={handleIndicatorClick}
      /> */}
    </div>
  );
};

export default Slideshow;
