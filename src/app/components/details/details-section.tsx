import sign from '../../../assets/images/location-sign-svgrepo-com.svg';
import calendar from '../../../assets/images/calendar-alt-svgrepo-com.svg';

function DetailsSection({
  title,
  date,
  time,
  clock,
  location,
  mapLink,
}: {
  title: string;
  date: string;
  time: string;
  clock: string;
  location: string;
  mapLink: string;
}) {
  return (
    <div className="my-bg-band1 shadow-lg p-6 rounded-lg border-my_dark m-2">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-3xl">
              {title}
            </th>
          </tr>
        </thead>
        <tbody className="text-left text-xl">
          <tr>
            <td>
              <img src={calendar} className="w-5 h-5 mr-2" alt="Date" />
            </td>
            <td>{date}</td>
          </tr>
          <tr>
            <td>
              <img src={clock} className="w-5 h-5" alt="Time" />
            </td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>
              <img src={sign} className="w-5 h-5" alt="Location sign" />
            </td>
            <td className="flex flex-row items-center">
              <button
                onClick={() => window.open(mapLink, '_blank')}
                className="text-accent-light underline hover:text-accent-dark"
              >
                {location}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsSection;
