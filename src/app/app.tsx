import { useEffect, useState } from 'react';

import AudioPlayer from './components/audio-player';
import CreditsButton from './components/credits/credits-button';
import Details from './components/details/details';
import EnvelopeButton from './components/envelope-button';
import Form from './components/form/form';
import Slideshow from './components/image-slider/images-slideshow';
import Invitation from './components/invitation';
import Title from './components/title';
import WithAnimation from './components/animations/with-animation';

import bg_image from '../assets/images/bg.png';

// Wrap your components with the HOC
const AnimatedTitle = WithAnimation(Title);
const AnimatedSlideshow = WithAnimation(Slideshow);
const AnimatedInvitation = WithAnimation(Invitation);
const AnimatedDetails = WithAnimation(Details);
const AnimatedForm = WithAnimation(Form);
const AnimatedCreditsButton = WithAnimation(CreditsButton);

export function App() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="bg-repeat h-svh overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark 
      scrollbar-track-accent-light overflow-x-hidden"
    >
      <AudioPlayer />

      {showButton && <EnvelopeButton setShowButton={setShowButton} />}

      {!showButton && (
        <div className="space-y-6 py-6 px-4 sm:py-8 sm:px-16 md:py-10 md:px-20 lg:py-12 lg:px-32">
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
