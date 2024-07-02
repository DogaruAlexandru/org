import React from 'react';

import envelope_image from '../../assets/images/envelope.png';

interface EnvelopeButtonProps {
  buttonOpacity: number;
  buttonScale: number;
  handleButtonClick: () => void;
}

const EnvelopeButton: React.FC<EnvelopeButtonProps> = ({
  buttonOpacity,
  buttonScale,
  handleButtonClick,
}) => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        opacity: buttonOpacity,
        transform: `scale(${buttonScale})`, // Apply scale transformation
        transition: 'opacity 300ms, transform 300ms', // Add transform transition
      }}
    >
      <button
        className="w-2/3 h-2/3 flex justify-center items-center overflow-hidden hover:scale-110 duration-100"
        onClick={handleButtonClick}
      >
        <img
          src={envelope_image}
          alt="Envelope"
          className="w-full h-full object-contain"
        />
      </button>
    </div>
  );
};

export default EnvelopeButton;
