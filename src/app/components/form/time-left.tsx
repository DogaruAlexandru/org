import { useState, useEffect } from 'react';

interface TimeLeftProps {
  setCanModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeLeft: React.FC<TimeLeftProps> = ({ setCanModify }) => {
  const deadline = new Date('2025-01-01T00:00:00+02:00'); // New deadline date in Bucharest timezone
  const deadlineText = `Confirmare până la: ${deadline.toLocaleDateString(
    'ro-RO',
    {
      timeZone: 'Europe/Bucharest',
    }
  )}`;
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [timeLeftText, setTimeLeftText] = useState('');

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
        setTimeLeftText('Nu se mai poate modifica');
      } else {
        setBgColor('my-bg-band3');
        setTextColor('text-my_dark');
        setCanModify(true);
        setTimeLeftText('');

        // const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        // const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        // const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        // const seconds = Math.floor((timeDiff / 1000) % 60);

        // setTimeLeftText(`(${days}z ${hours}h ${minutes}m ${seconds}s rămase)`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="flex justify-center text-center items-center flex-wrap mt-6 font-dancing-script">
      <div
        className={`${bgColor} ${textColor} shadow-lg px-4 py-2 rounded-3xl text-xl border border-my_dark w-auto`}
      >
        {deadlineText}
        <br />
        {timeLeftText}
      </div>
    </div>
  );
};

export default TimeLeft;
