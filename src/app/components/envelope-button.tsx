import { useState } from 'react';

import envelope_image from '../../assets/images/envelope.png';

interface EnvelopeButtonProps {
  showButton: boolean;
  setShowButton: (show: boolean) => void;
}

function EnvelopeButton({ showButton, setShowButton }: EnvelopeButtonProps) {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [buttonScale, setButtonScale] = useState(1);

  const handleClick = () => {
    setButtonOpacity(0);
    setButtonScale(0.9);
    setTimeout(() => {
      setShowButton(false);
    }, 300);
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen"
        style={{
          opacity: buttonOpacity,
          transform: `scale(${buttonScale})`,
          transition: 'opacity 300ms, transform 300ms',
        }}
      >
        <button
          className="w-2/3 h-2/3 flex justify-center items-center overflow-hidden hover:scale-110 duration-100"
          onClick={handleClick}
        >
          <img
            src={envelope_image}
            alt="Envelope"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
    </>
  );
}

export default EnvelopeButton;
