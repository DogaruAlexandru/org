import { useState, useEffect } from 'react';

interface TimeLeftProps {
  setCanModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeLeft: React.FC<TimeLeftProps> = ({ setCanModify }) => {
  const deadline = new Date('2024-09-01T00:00:00+03:00'); // New deadline date in Bucharest timezone
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Europe/Bucharest' })
      );

      const timeDiff = deadline.getTime() - currentDateTime.getTime();

      if (timeDiff <= 0) {
        setBgColor('my-red-grd');
        setTextColor('text-white');
        setCanModify(false);
        setText("Can't modify anymore");
      } else {
        setBgColor('my-bg-band3');
        setTextColor('text-my_dark');
        setCanModify(true);

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setText(
          `Modifiable until: ${deadline.toLocaleString(
            'ro-RO'
          )} (${days}d ${hours}h ${minutes}m ${seconds}s left)`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="flex justify-center text-center items-center flex-wrap mt-6">
      <div
        className={`${bgColor} ${textColor} shadow-lg p-2 rounded-full border border-my_dark w-auto`}
      >
        {text}
      </div>
    </div>
  );
};

export default TimeLeft;
