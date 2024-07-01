import React from 'react';

function CreditsSection() {
  return (
    <div className="my-bg-band3 shadow-lg rounded-lg border border-my_dark text-center text-my_dark">
      {/* Modal content */}
      <div className="relative rounded-lg shadow">
        {/* Modal header */}
        <h3 className="text-xl font-semibold p-4 border-b border-my_dark">
          Credits
        </h3>
        {/* Modal body */}
        <div className="p-4 space-y-4">
          <a
            href="https://uppbeat.io/t/iros-young/amazing-day"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base leading-relaxed hover:underline"
          >
            Music provided by: <strong>Iros Young</strong> -{' '}
            <em>Amazing Day</em>
          </a>
          <p className="text-base leading-relaxed">
            Site created by: <strong>Your Name or Company</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditsSection;
