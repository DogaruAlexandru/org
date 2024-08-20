import { useState } from 'react';
import CreditsSection from './credits-section';

function CreditsButton() {
  const [showCredits, setShowCredits] = useState(false);

  const handleClick = () => {
    setShowCredits(!showCredits);
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleClick}
        className="my-bg-band1 px-6 py-1 rounded-full border border-my_dark shadow-2xl
        text-sm hover-bg-band2 hover:text-white duration-100"
      >
        Afișează Credite
      </button>
      <div
        className={`transition-opacity duration-300 ${
          showCredits ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: showCredits ? 'auto' : 'none' }}
      >
        {showCredits && (
          <CreditsSection show={showCredits} setShow={setShowCredits} />
        )}
      </div>
    </div>
  );
}

export default CreditsButton;
