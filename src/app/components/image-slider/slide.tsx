import React from 'react';

interface SlideProps {
  img: string;
  isVisible: boolean;
  alt: string;
}

const Slide: React.FC<SlideProps> = ({ img, isVisible, alt }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={img}
        className="block w-full h-auto object-cover rounded-lg border-my_dark"
        alt={alt}
      />
    </div>
  );
};

export default Slide;
