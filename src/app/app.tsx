import { useEffect, useRef } from 'react';

import Invitaion from './components/invitaion';
import Title from './components/title';
import Slideshow from './components/images-slideshow';
import Details from './components/details';
import Form from './components/form';
import CreditsButton from './components/credits-button';
import AnimatedComponent from './components/animated-component';
import AudioPlayer from './components/audio-player';

import bg_image from '../assets/images/bg.png';

export function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="py-12 bg-repeat bg-bg px-32 space-y-6 
      scroll-smooth h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-accent-dark scrollbar-track-accent-light"
    >
      <AudioPlayer />
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
