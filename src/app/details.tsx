import sign from '../assets/images/location-sign.svg';

function Details() {
  return (
    <div
      className="bg-band shadow-lg p-8 mx-12 rounded-lg border border-text
      font-dancing-script text-center text-text font-bold"
    >
      <h1 className="text-4xl">Details</h1>
      <br />
      <div className="flex flex-row flex-wrap place-content-center">
        <table className="m-2 ">
          <div className="bg-bg shadow-lg p-6 rounded-lg border border-text">
            <thead>
              <tr>
                <th colSpan={2} className="text-3xl">
                  Civil wedding ceremony
                </th>
              </tr>
            </thead>
            <tbody className="text-left text-xl">
              <tr>
                <td>Date:</td>
                <td>25th of June 2022</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>11:00 am</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td className="flex flex-row">
                  <>City Hall</>
                  <button
                    onClick={() =>
                      window.open(
                        'https://maps.app.goo.gl/eCK5ptZrBtKWNs5U7',
                        '_blank'
                      )
                    }
                  >
                    <img src={sign} className="w-5 h-5 ms-2 mt-1" alt="..." />
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
        <table className="m-2">
          <div className="bg-bg shadow-lg p-6 rounded-lg border border-text">
            <thead>
              <tr>
                <th colSpan={2} className="text-3xl">
                  Religious wedding ceremony
                </th>
              </tr>
            </thead>
            <tbody className="text-left text-xl">
              <tr>
                <td>Date:</td>
                <td>25th of June 2022</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>11:00 am</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td className="flex flex-row">
                  <>City Hall</>
                  <button
                    onClick={() =>
                      window.open(
                        'https://maps.app.goo.gl/eCK5ptZrBtKWNs5U7',
                        '_blank'
                      )
                    }
                  >
                    <img src={sign} className="w-5 h-5 ms-2 mt-1" alt="..." />
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
        <table className="m-2">
          <div className="bg-bg shadow-lg p-6 rounded-lg border border-text">
            <thead>
              <tr>
                <th colSpan={2} className="text-3xl">
                  Wedding reception
                </th>
              </tr>
            </thead>
            <tbody className="text-left text-xl">
              <tr>
                <td>Date:</td>
                <td>25th of June 2022</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>11:00 am</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td className="flex flex-row">
                  <>City Hall</>
                  <button
                    onClick={() =>
                      window.open(
                        'https://maps.app.goo.gl/eCK5ptZrBtKWNs5U7',
                        '_blank'
                      )
                    }
                  >
                    <img src={sign} className="w-5 h-5 ms-2 mt-1" alt="..." />
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Details;
