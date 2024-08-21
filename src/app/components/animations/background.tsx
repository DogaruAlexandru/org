import React, { useState, useEffect } from 'react';
import petal1 from '../../../assets/images/petals/petal1.png';
import petal2 from '../../../assets/images/petals/petal2.png';
import petal3 from '../../../assets/images/petals/petal3.png';
import petal4 from '../../../assets/images/petals/petal4.png';
import petal5 from '../../../assets/images/petals/petal5.png';
import petal6 from '../../../assets/images/petals/petal6.png';
import petal7 from '../../../assets/images/petals/petal7.png';

interface Image {
  id: number;
  src: string;
  speed: number;
  size: number;
  opacity: number;
  left: number;
  rotation: number;
}

const imageUrls = [petal1, petal2, petal3, petal4, petal5, petal6, petal7];

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const Background: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [idCounter, setIdCounter] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    preloadImages(imageUrls);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setPageVisible(false);
      } else {
        setPageVisible(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const addImage = () => {
      // Adjust the maximum number of images and size based on screen width
      const maxWidth = window.innerWidth;
      let maxImages = 25; // Default maximum number of images
      let maxSize = 50; // Default maximum size
      let minSize = 25; // Default minimum size

      if (maxWidth <= 768) {
        // For smaller screens
        maxImages = 15; // Fewer images for smaller screens
        maxSize = 20; // Smaller maximum size
        minSize = 10; // Smaller minimum size
      }

      if (images.length < maxImages) {
        const newImage: Image = {
          id: idCounter,
          src: imageUrls[getRandomInt(0, imageUrls.length - 1)],
          speed: getRandomInt(10, 20),
          size: getRandomInt(minSize, maxSize),
          opacity: Math.random() * 0.5 + 0.5,
          left: getRandomInt(-20, 100),
          rotation: getRandomInt(-360, 360),
        };
        setImages((prevImages) => [...prevImages, newImage]);
        setIdCounter((prevId) => prevId + 1);
      }
    };

    let interval: string | number | NodeJS.Timer | undefined;
    if (pageVisible) {
      interval = setInterval(addImage, 1500); // Interval set to 1500 milliseconds (1.5 seconds)
    }

    return () => clearInterval(interval);
  }, [idCounter, pageVisible, images.length]); // Added images.length as a dependency

  return (
    <div className="falling-images-container bg-bg">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt="falling"
          className="falling-image"
          style={{
            width: `${image.size}px`,
            opacity: image.opacity,
            left: `${image.left}%`,
            animationDuration: `${image.speed}s`,
            transform: `rotate(${image.rotation}deg)`, // Apply the rotation here
          }}
        />
      ))}
    </div>
  );
};

export default Background;
