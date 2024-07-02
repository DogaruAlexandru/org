import React, { useState, useEffect } from 'react';

import Invitaion from './components/invitation';
import Title from './components/title';
import Slideshow from './components/images-slideshow';
import Details from './components/details';
import Form from './components/form';
import CreditsButton from './components/credits-button';
import AudioPlayer from './components/audio-player';
import WithAnimation from './components/with-animation';
import EnvelopeButton from './components/envelope-button';

import bg_image from '../assets/images/bg.png';

// Wrap your components with the HOC
const AnimatedTitle = WithAnimation(Title);
const AnimatedSlideshow = WithAnimation(Slideshow);
const AnimatedInvitation = WithAnimation(Invitaion);
const AnimatedDetails = WithAnimation(Details);
const AnimatedForm = WithAnimation(Form);
const AnimatedCreditsButton = WithAnimation(CreditsButton);

export function App() {
  const [showButton, setShowButton] = useState(true);

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="bg-repeat h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark scrollbar-track-accent-light"
    >
      <AudioPlayer />

      {showButton && (
        <EnvelopeButton showButton={showButton} setShowButton={setShowButton} />
      )}

      {!showButton && (
        <div className="py-12 px-32 space-y-6">
          <AnimatedTitle />
          <AnimatedSlideshow />
          <AnimatedInvitation />
          <AnimatedDetails />
          <AnimatedForm />
          <AnimatedCreditsButton />
        </div>
      )}
    </div>
  );
}

export default App;
