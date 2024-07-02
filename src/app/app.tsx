import React from 'react';

import Invitaion from './components/invitaion';
import Title from './components/title';
import Slideshow from './components/images-slideshow';
import Details from './components/details';
import Form from './components/form';
import CreditsButton from './components/credits-button';
import AudioPlayer from './components/audio-player';
import withAnimation from './components/with-animation';

import bg_image from '../assets/images/bg.png';

// Wrap your components with the HOC
const AnimatedTitle = withAnimation(Title);
const AnimatedSlideshow = withAnimation(Slideshow);
const AnimatedInvitation = withAnimation(Invitaion);
const AnimatedDetails = withAnimation(Details);
const AnimatedForm = withAnimation(Form);
const AnimatedCreditsButton = withAnimation(CreditsButton);

export function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="py-12 bg-repeat bg-bg px-32 space-y-6 
      scroll-smooth h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-accent-dark scrollbar-track-accent-light"
    >
      <AudioPlayer />
      <AnimatedTitle />
      <AnimatedSlideshow />
      <AnimatedInvitation />
      <AnimatedDetails />
      <AnimatedForm />
      <AnimatedCreditsButton />
    </div>
  );
}

export default App;
