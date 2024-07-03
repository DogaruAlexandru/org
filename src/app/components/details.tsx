import DetailsSection from './details-section';

import flower from '../../assets/images/flower-solid-svgrepo-com.svg';

function Details() {
  return (
    <div
      className="my-bg-band2 shadow-lg p-8 rounded-lg border border-my_dark
      font-dancing-script text-center text-my_dark font-bold"
    >
      <h1 className="text-4xl flex justify-center items-center">
        <img
          src={flower}
          alt="flower"
          className="w-6 h-6 mr-2 sm:w-10 sm:h-10 sm:mr-4 lg:w-16 lg:h-16 lg:mr-8"
        />
        Details
        <img
          src={flower}
          alt="flower"
          className="w-6 h-6 ml-2 sm:w-10 sm:h-10 sm:ml-4 lg:w-16 lg:h-16 lg:ml-8"
        />
      </h1>
      <br />
      <div className="flex flex-row flex-wrap place-content-center">
        <DetailsSection
          title="Civil wedding ceremony"
          date="25th of June 2022"
          time="11:00 am"
          location="City Hall"
          mapLink="https://maps.app.goo.gl/eCK5ptZrBtKWNs5U7"
        />
        <DetailsSection
          title="Religious wedding ceremony"
          date="25th of June 2022"
          time="1:00 pm"
          location="St. Patrick's Church"
          mapLink="https://maps.app.goo.gl/eCK5ptZrBtKWNs5U7"
        />
        <DetailsSection
          title="Wedding reception"
          date="25th of June 2022"
          time="6:00 pm"
          location="Grand Ballroom"
          mapLink="https://maps.app.goo.gl/eCK5ptZrBtKWNs5U7"
        />
      </div>
    </div>
  );
}

export default Details;
