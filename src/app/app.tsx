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
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [buttonScale, setButtonScale] = useState(1);

  const handleButtonClick = () => {
    setButtonOpacity(0);
    setButtonScale(0.9);
  };

  useEffect(() => {
    if (buttonOpacity === 0) {
      const timeoutId = setTimeout(() => {
        setShowButton(false);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [buttonOpacity]);

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="bg-repeat h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark scrollbar-track-accent-light"
    >
      <AudioPlayer />

      {showButton && (
        <EnvelopeButton
          buttonOpacity={buttonOpacity}
          buttonScale={buttonScale}
          handleButtonClick={handleButtonClick}
        />
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
