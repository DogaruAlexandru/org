import { useEffect, useRef } from 'react';
import music from '../../assets/amazing-day-iros-young-main-version-18425-02-07.mp3';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;

      const playAudio = () => {
        audioRef.current?.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      };

      document.addEventListener('click', playAudio);

      return () => {
        document.removeEventListener('click', playAudio);
      };
    }
  }, []);

  return <audio ref={audioRef} src={music} autoPlay loop />;
};

export default AudioPlayer;
