import { useState, useEffect } from 'react';
import envelope_image from '../../assets/images/envelope.png';
import { View } from './invitation-page';

interface EnvelopeButtonProps {
  setView: (view: View) => void;
}

function EnvelopeButton({ setView }: EnvelopeButtonProps) {
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [buttonScale, setButtonScale] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonOpacity(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setButtonOpacity(0);
    setButtonScale(0.9);
    setTimeout(() => {
      setView(View.Main);
    }, 300);
  };

  return (
    <div
      className="flex justify-center items-center h-svh"
      style={{
        opacity: buttonOpacity,
        transform: `scale(${buttonScale})`,
        transition: 'opacity 300ms, transform 300ms',
      }}
    >
      <div className="envelope-animation flex justify-center items-center">
        <button
          className="w-2/3 h-2/3 flex justify-center items-center overflow-hidden hover:scale-110 duration-300"
          onClick={handleClick}
        >
          <img
            src={envelope_image}
            alt="Envelope"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
    </div>
  );
}

export default EnvelopeButton;
