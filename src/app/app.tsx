import Invitaion from './invitaion';
import Title from './title';
import Slideshow from './images-slideshow';
import Details from './details';
import Form from './form';

export function App() {
  return (
    <div className="py-12 bg-bg px-32 space-y-4">
      {/* <NxWelcome title="org" /> */}
      <Title />
      <Slideshow />
      <Invitaion />
      <Details />
      <Form />
    </div>
  );
}

export default App;
