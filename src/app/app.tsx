import Invitaion from './components/invitaion';
import Title from './components/title';
import Slideshow from './components/images-slideshow';
import Details from './components/details';
import Form from './components/form';

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
