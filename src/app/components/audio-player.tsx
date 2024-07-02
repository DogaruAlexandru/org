import { useEffect, useRef, useState } from 'react';
import music from '../../assets/amazing-day-iros-young-main-version-18425-02-07.mp3';

const MAX_VOLUME = 0.3;
const VOLUME_INCREMENT = 0.01;
const FADE_INTERVAL_DURATION = 100;

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fadeInterval, setFadeInterval] = useState<NodeJS.Timeout | null>(null);

  const fadeIn = () => {
    if (audioRef.current) {
      let volume = 0;
      audioRef.current.volume = volume;
      const interval = setInterval(() => {
        if (volume < MAX_VOLUME) {
          volume += VOLUME_INCREMENT;
          audioRef.current!.volume = Math.min(volume, MAX_VOLUME);
        } else {
          clearInterval(interval);
          setFadeInterval(null);
        }
      }, FADE_INTERVAL_DURATION);
      setFadeInterval(interval);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const handlePlay = () => {
        if (!isPlaying) {
          setIsPlaying(true);
          audioRef
            .current!.play()
            .then(() => {
              fadeIn();
            })
            .catch((error) => {
              console.error('Failed to play audio:', error);
            });
        }
      };

      const handleLoop = () => {
        if (audioRef.current!.currentTime < 0.1) {
          fadeIn();
        }
      };

      document.addEventListener('click', handlePlay);
      audioRef.current.addEventListener('timeupdate', handleLoop);

      return () => {
        document.removeEventListener('click', handlePlay);
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleLoop);
        }
        if (fadeInterval !== null) {
          clearInterval(fadeInterval);
        }
      };
    }
  }, [isPlaying, fadeInterval]);

  return <audio ref={audioRef} src={music} loop />;
};

export default AudioPlayer;
