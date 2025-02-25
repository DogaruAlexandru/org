import DetailsSection from './details-section';

import clock1 from '../../../assets/images/clock-one-svgrepo-com.svg';
import clock3 from '../../../assets/images/clock-three-svgrepo-com.svg';

function Details() {
  return (
    <div className="font-dancing-script text-center text-my_dark font-bold">
      <div className="flex flex-row flex-wrap place-content-center">
        <DetailsSection
          title="Cununia religioasă"
          date="22 Februarie 2025"
          time="13:00"
          clock={clock1}
          location="Biserica Punctul Zero"
          mapLink="https://maps.app.goo.gl/oQJpzQLhgYQjoT346"
        />
        <DetailsSection
          title="Sărbătorirea nunții"
          date="22 Februarie 2025"
          time="15:00"
          clock={clock3}
          location="Trei Stejari - Brașov"
          mapLink="https://maps.app.goo.gl/rXaXLJ2k8xM6Durw7"
        />
      </div>
    </div>
  );
}

export default Details;
