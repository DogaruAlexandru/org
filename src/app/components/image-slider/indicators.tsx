import React from 'react';

interface IndicatorsProps {
  images: string[];
  currentIndex: number;
  onClick: (index: number) => void;
}

const Indicators: React.FC<IndicatorsProps> = ({
  images,
  currentIndex,
  onClick,
}) => {
  return (
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
          onClick={() => onClick(index)}
        ></button>
      ))}
    </div>
  );
};

export default Indicators;
