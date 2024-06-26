import Invitaion from './invitaion';
import Title from './title';
import Slideshow from './images-slideshow';
// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="org" /> */}
      <Title />
      <Slideshow />
      <Invitaion />
    </div>
  );
}

export default App;
