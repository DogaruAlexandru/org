import Invitaion from './invitaion';
import Title from './title';
import Slideshow from './images-slideshow';

export function App() {
  return (
    <div className="py-12 bg-new_blue px-32">
      {/* <NxWelcome title="org" /> */}
      <Title />
      <Slideshow />
      <Invitaion />
    </div>
  );
}

export default App;
