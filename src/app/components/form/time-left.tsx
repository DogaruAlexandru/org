import { set } from 'date-fns';
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
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Europe/Bucharest',
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date())
      );

      if (currentDateTime > deadline) {
        setBgColor('my-red-grd');
        setTextColor('text-white');
        setCanModify(false);
        setText("Can't modify anymore");
      } else {
        setBgColor('my-bg-band3');
        setTextColor('text-my_dark');
        setCanModify(true);
        setText(`Modifiable until: ${deadline.toLocaleString('ro-RO')}`);
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
