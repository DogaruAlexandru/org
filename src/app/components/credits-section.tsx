import { useEffect, useState } from 'react';

interface CreditsSectionProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

function CreditsSection({ show, setShow }: CreditsSectionProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (show) {
      setOpacity(1);
    }
  }, [show]);

  const handleClose = () => {
    setOpacity(0);
    setTimeout(() => {
      setShow(false);
    }, 300); // Match this timeout with the CSS transition duration
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 
      z-50 transition-opacity duration-300"
      style={{ opacity: opacity }}
    >
      <div
        className="my-bg-band3 shadow-lg rounded-lg border-2 border-my_dark text-center 
      text-my_dark"
      >
        {/* Modal content */}
        <div className="relative rounded-lg shadow">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold">Credits</h3>
            <button
              type="button"
              className="text-my_dark hover:text-white bg-transparent hover-bg-band2
              rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
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
    </div>
  );
}

export default CreditsSection;
