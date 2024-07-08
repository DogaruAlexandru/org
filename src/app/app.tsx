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
import {
  NotificationSelector,
  NotificationType,
} from './components/notification';

import { fetchValuesById } from './supabase';

import bg_image from '../assets/images/bg.png';

export enum View {
  Loading,
  LoadingError,
  Envelope,
  Main,
}

// Wrap your components with the HOC
const AnimatedTitle = WithAnimation(Title);
const AnimatedSlideshow = WithAnimation(Slideshow);
const AnimatedInvitation = WithAnimation(Invitation);
const AnimatedDetails = WithAnimation(Details);
const AnimatedForm = WithAnimation(Form);
const AnimatedCreditsButton = WithAnimation(CreditsButton);

export function App() {
  const id = '21a23ac1-be5d-460e-855c-22f107285ff4';

  const [view, setView] = useState(View.Loading);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchValuesById(id);
        if (data) {
          setData(data);
          console.log('Data fetched:', data);
          setView(View.Envelope);
        } else {
          setView(View.LoadingError);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setView(View.LoadingError);
      }
    };

    fetchData();
  }, [id]);

  const renderContent = () => {
    return (
      <div className="space-y-6 py-6 px-4 sm:py-8 sm:px-16 md:py-10 md:px-20 lg:py-12 lg:px-32">
        {(() => {
          switch (view) {
            case View.Loading:
              return <NotificationSelector type={NotificationType.Loading} />;
            case View.LoadingError:
              return (
                <NotificationSelector type={NotificationType.LoadingError} />
              );
            case View.Main:
              return (
                <>
                  <AnimatedTitle />
                  <AnimatedSlideshow />
                  <AnimatedInvitation />
                  <AnimatedDetails />
                  <AnimatedForm data={data} />
                  <AnimatedCreditsButton />
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="bg-repeat h-svh overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark 
      scrollbar-track-accent-light overflow-x-hidden"
    >
      <AudioPlayer />

      {view === View.Envelope ? (
        <EnvelopeButton setView={setView} />
      ) : (
        renderContent()
      )}
    </div>
  );
}

export default App;
