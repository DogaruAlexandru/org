import React from 'react';

interface CreditsToggleButtonProps {
  toggleCredits: () => void;
}

const CreditsToggleButton: React.FC<CreditsToggleButtonProps> = ({
  toggleCredits,
}) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={toggleCredits}
        className="my-bg-band3 px-6 py-1 rounded-full border border-my_dark shadow-2xl
        text-sm hover-bg-band2 hover:text-white duration-100"
      >
        Toggle Credits
      </button>
    </div>
  );
};

export default CreditsToggleButton;
