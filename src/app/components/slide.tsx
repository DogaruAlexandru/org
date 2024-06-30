import React from 'react';

interface SlideProps {
  img: string;
  isVisible: boolean;
  alt: string;
}

const Slide: React.FC<SlideProps> = ({ img, isVisible, alt }) => {
  return (
    <div
      className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img src={img} className="block w-full h-full object-contain" alt={alt} />
    </div>
  );
};

export default Slide;
