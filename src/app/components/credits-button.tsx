import React, { useState } from 'react';
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
        className="my-bg-band3 px-6 py-1 rounded-full border border-my_dark shadow-2xl
        text-sm hover-bg-band2 hover:text-white duration-100"
      >
        Show Credits
      </button>
      {showCredits && (
        <CreditsSection show={showCredits} setShow={setShowCredits} />
      )}
    </div>
  );
}

export default CreditsButton;
