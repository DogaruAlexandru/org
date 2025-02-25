import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import music from '../../assets/sounds/amazing-day-iros-young-main-version-18425-02-07.mp3';

const MAX_VOLUME = 0.3;
const VOLUME_INCREMENT = 0.01;
const FADE_INTERVAL_DURATION = 100;

const AudioPlayer = forwardRef((props, ref) => {
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

  const playAudio = () => {
    if (audioRef.current && !isPlaying) {
      setIsPlaying(true);
      audioRef.current.volume = 0;
      audioRef.current
        .play()
        .then(() => fadeIn())
        .catch((error) => {
          console.error('Failed to play audio:', error);
        });
    }
  };

  useImperativeHandle(ref, () => ({
    playAudio,
  }));

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      } else {
        if (audioRef.current && isPlaying) {
          audioRef.current.play().catch((error) => {
            console.error('Failed to resume audio:', error);
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    audioRef.current?.addEventListener('timeupdate', () => {
      if (audioRef.current!.currentTime < 0.1) {
        fadeIn();
      }
    });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', () => {});
      }
      if (fadeInterval !== null) {
        clearInterval(fadeInterval);
      }
    };
  }, [isPlaying, fadeInterval]);

  return <audio ref={audioRef} src={music} preload="auto" loop />;
});

export default AudioPlayer;
