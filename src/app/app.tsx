import { useEffect, useRef } from 'react';

import Invitaion from './components/invitaion';
import Title from './components/title';
import Slideshow from './components/images-slideshow';
import Details from './components/details';
import Form from './components/form';
import CreditsButton from './components/credits-button';
import AnimatedComponent from './components/animated-component';

import bg_image from '../assets/images/bg.png';
import music from '../assets/amazing-day-iros-young-main-version-18425-02-07.mp3';

export function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;

      // Function to play audio
      const playAudio = () => {
        audioRef.current?.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      };

      // Add event listener for user interaction
      document.addEventListener('click', playAudio);

      // Clean up the event listener
      return () => {
        document.removeEventListener('click', playAudio);
      };
    }
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="py-12 bg-repeat bg-bg px-32 space-y-6 
      scroll-smooth h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-accent-dark scrollbar-track-accent-light"
    >
      <audio ref={audioRef} src={music} autoPlay loop />
      <AnimatedComponent>
        <Title />
      </AnimatedComponent>
      <AnimatedComponent>
        <Slideshow />
      </AnimatedComponent>
      <AnimatedComponent>
        <Invitaion />
      </AnimatedComponent>
      <AnimatedComponent>
        <Details />
      </AnimatedComponent>
      <AnimatedComponent>
        <Form />
      </AnimatedComponent>
      <AnimatedComponent>
        <CreditsButton />
      </AnimatedComponent>
    </div>
  );
}

export default App;
