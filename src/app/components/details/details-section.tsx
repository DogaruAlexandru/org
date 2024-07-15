import sign from '../../../assets/images/location-sign-svgrepo-com.svg';

function DetailsSection({
  title,
  date,
  time,
  location,
  mapLink,
}: {
  title: string;
  date: string;
  time: string;
  location: string;
  mapLink: string;
}) {
  return (
    <div className="my-bg-band1 shadow-lg p-6 rounded-lg border border-my_dark m-2">
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
            <td>Dată:</td>
            <td>{date}</td>
          </tr>
          <tr>
            <td>Oră:</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>Locație:</td>
            <td className="flex flex-row items-center">
              {location}
              <button
                className="hover:scale-150 duration-100 ml-2 flex-shrink-0"
                onClick={() => window.open(mapLink, '_blank')}
              >
                <img src={sign} className="w-5 h-5" alt="Location sign" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsSection;
