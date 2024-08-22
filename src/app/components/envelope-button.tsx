import { useState, useEffect, useRef } from 'react';
import envelope_image from '../../assets/images/envelope.png';
import { View } from './invitation-page';

interface EnvelopeButtonProps {
  setView: (view: View) => void;
}

const allowedDomains = ['yourdomain.com', 'another-allowed-domain.com'];

function EnvelopeButton({ setView }: EnvelopeButtonProps) {
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [buttonScale, setButtonScale] = useState(1);
  const [buttonText, setButtonText] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textScale, setTextScale] = useState(1);

  useEffect(() => {
    const img = new Image();
    img.src = envelope_image;
  }, []);

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

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setButtonText('Apasăsați');
    }, 5000);

    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    if (buttonText) {
      updateScale();
    }
  }, [buttonText]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateScale);
    if (imgRef.current) {
      resizeObserver.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        resizeObserver.unobserve(imgRef.current);
      }
    };
  }, [imgRef.current]);

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
      <div className="envelope-animation flex justify-center items-center w-2/3 h-2/3">
        <button
          className="w-full h-full overflow-hidden flex justify-center items-center hover:scale-110 active:scale-110 duration-300"
          onClick={handleClick}
        >
          <img
            ref={imgRef}
            src={envelope_image}
            alt="Envelope"
            className="w-full h-full object-contain"
          />
          {buttonText && (
            <span
              ref={textRef}
              className="animate-pulse my-bg-band4 font-dancing-script font-bold p-2 rounded-full border
               border-my_dark text-my_dark absolute text-3xl"
              style={{
                transform: `scale(${textScale}) translateY(160%)`,
              }}
            >
              {buttonText}
            </span>
          )}
        </button>
      </div>
    </div>
  );

  function updateScale() {
    if (imgRef.current && textRef.current) {
      const imgHeight = imgRef.current.clientHeight;
      const imgWidth = imgRef.current.clientWidth;
      const textHeight = textRef.current.clientHeight;
      const textWidth = textRef.current.clientWidth;

      const desiredTextHeight = imgHeight / 5;
      const desiredTextWidth = imgWidth / 5;

      const heightScale = desiredTextHeight / textHeight;
      const widthScale = desiredTextWidth / textWidth;

      const scale = Math.min(heightScale, widthScale);
      setTextScale(scale);
    }
  }
}

export default EnvelopeButton;
