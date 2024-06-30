import React from 'react';
import sign from '../assets/images/location-sign.svg';

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
            <td>Date:</td>
            <td>{date}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td className="flex flex-row">
              {location}
              <button
                className="hover:scale-125 duration-100"
                onClick={() => window.open(mapLink, '_blank')}
              >
                <img
                  src={sign}
                  className="w-5 h-5 ms-2 mt-1"
                  alt="Location sign"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailsSection;
