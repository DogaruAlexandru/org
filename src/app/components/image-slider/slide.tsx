import React from 'react';

interface SlideProps {
  img: string;
  isVisible: boolean;
  alt: string;
}

const Slide: React.FC<SlideProps> = ({ img, isVisible, alt }) => {
  return (
    <div
      className={`absolute w-full transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100 relative' : 'opacity-0 absolute'
      }`}
    >
      <img
        src={img}
        className="block w-full h-auto object-contain rounded-lg border border-my_dark"
        alt={alt}
      />
    </div>
  );
};

export default Slide;
