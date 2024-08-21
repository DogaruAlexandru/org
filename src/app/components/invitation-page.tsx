import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AudioPlayer from './audio-player';
import CreditsButton from './credits/credits-button';
import Details from './details/details';
import EnvelopeButton from './envelope-button';
import Form from './form/form';
import Slideshow from './image-slider/images-slideshow';
import Invitation from './invitation';
import Names from './names';
import Verse from './verse';
// import Title from './title';
import WithAnimation from './animations/with-animation';
import { NotificationSelector, NotificationType } from './notification';

import { fetchValuesById, FormData } from '../supabase';

export enum View {
  Loading,
  LoadingError,
  Envelope,
  Main,
}

// Wrap your components with the HOC
// const AnimatedTitle = WithAnimation(Title);
const AnimatedSlideshow = WithAnimation(Slideshow);
const AnimatedInvitation = WithAnimation(Invitation);
// const AnimatedNames = WithAnimation(Names);
const AnimatedVerse = WithAnimation(Verse);
const AnimatedDetails = WithAnimation(Details);
const AnimatedForm = WithAnimation(Form);
const AnimatedCreditsButton = WithAnimation(CreditsButton);

export function InvitationPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const audioPlayerRef = useRef<{ playAudio: () => void }>(null);

  const [view, setView] = useState(View.Loading);
  const [data, setData] = useState<FormData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }, []);

  useEffect(() => {
    const fetchData = async (invitationId: string) => {
      try {
        const dbData = await fetchValuesById(invitationId);
        if (dbData) {
          setData(dbData);
          setView(View.Envelope);
        } else {
          setView(View.LoadingError);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setView(View.LoadingError);
      }
    };

    if (id) {
      fetchData(id);
    } else {
      navigate('/org/defaultId');
    }
  }, [id, navigate]);

  const handleEnvelopeClick = () => {
    audioPlayerRef.current?.playAudio();
    setView(View.Main);
  };

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
                  <AnimatedInvitation />
                  {/* <AnimatedTitle /> */}
                  {/* <AnimatedNames /> */}
                  <AnimatedSlideshow />
                  <AnimatedVerse />
                  <AnimatedDetails />
                  {data && <AnimatedForm data={data} />}
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
      className="h-svh overflow-y-auto scrollbar-thin scrollbar-thumb-band1-dark 
      scrollbar-track-band1-light overflow-x-hidden"
    >
      <AudioPlayer ref={audioPlayerRef} />

      {view === View.Envelope ? (
        <EnvelopeButton setView={handleEnvelopeClick} />
      ) : (
        renderContent()
      )}
    </div>
  );
}

export default InvitationPage;
