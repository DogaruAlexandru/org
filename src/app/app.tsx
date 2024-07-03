import { useState } from 'react';

import AudioPlayer from './components/audio-player';
import CreditsButton from './components/credits-button';
import Details from './components/details';
import EnvelopeButton from './components/envelope-button';
import Form from './components/form';
import Slideshow from './components/images-slideshow';
import Invitaion from './components/invitation';
import Title from './components/title';
import WithAnimation from './components/with-animation';

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
      className="bg-repeat h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark 
      scrollbar-track-accent-light"
    >
      <AudioPlayer />

      {showButton && <EnvelopeButton setShowButton={setShowButton} />}

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
