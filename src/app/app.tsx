import Invitaion from './invitaion';
import Title from './title';
import Slideshow from './images-slideshow';
import Details from './details';

export function App() {
  return (
    <div className="py-12 bg-new_blue px-32 space-y-4">
      {/* <NxWelcome title="org" /> */}
      <Title />
      <Slideshow />
      <Invitaion />
      <Details />
    </div>
  );
}

export default App;
