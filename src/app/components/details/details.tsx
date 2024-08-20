import DetailsSection from './details-section';

import flower from '../../../assets/images/flower-solid-svgrepo-com.svg';

function Details() {
  return (
    <div
      className="my-bg-band1 shadow-lg p-8 rounded-lg border-2 border-my_dark
      font-dancing-script text-center text-my_dark font-bold"
    >
      <h1 className="text-4xl flex justify-center items-center">
        <img
          src={flower}
          alt="flower"
          className="w-6 h-6 mr-2 sm:w-10 sm:h-10 sm:mr-4 lg:w-16 lg:h-16 lg:mr-8"
        />
        Detalii
        <img
          src={flower}
          alt="flower"
          className="w-6 h-6 ml-2 sm:w-10 sm:h-10 sm:ml-4 lg:w-16 lg:h-16 lg:ml-8"
        />
      </h1>
      <br />
      <div className="flex flex-row flex-wrap place-content-center">
        <DetailsSection
          title="Cununia religioasă"
          date="22 Februarie 2025"
          time="12:00"
          location="TBD"
          mapLink=""
        />
        <DetailsSection
          title="Sărbătorirea evenimentului"
          date="22 Februarie 2025"
          time="15:00"
          location="Trei Stejari - Brașov"
          mapLink="https://maps.app.goo.gl/rXaXLJ2k8xM6Durw7"
        />
      </div>
    </div>
  );
}

export default Details;
