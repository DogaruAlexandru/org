import { useState } from 'react';

function Form() {
  const [isComing, setIsComing] = useState('no');
  const [accompanied, setAccompanied] = useState('no');
  const [menu, setMenu] = useState('no');

  const handleComingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing(event.target.value);
  };

  const handleAccompaniedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccompanied(event.target.value);
  };

  const handleMenuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(event.target.value);
  };

  return (
    <div
      className="my-bg-band1 shadow-lg px-4 py-8 mx-12 rounded-lg border border-my_dark 
      font-dancing-script text-my_dark text-center font-bold text-3xl"
    >
      <form
        action="#"
        method="POST"
        className="flex flex-col place-content-center"
      >
        <table>
          <tr>
            <th>
              <label htmlFor="name" className="mx-4">
                Full Name
              </label>
            </th>
            <td className="w-1/2 text-left">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="border-my_dark rounded-lg shadow-sm p-1.5 w-full
                focus:outline-none focus:border-accent focus:ring focus:ring-accent
                text-2xl"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="coming" className="mx-4">
                Coming
              </label>
            </th>
            <td className="w-1/2 text-left">
              <div className="flex justify-center">
                <div className="me-4 hover:scale-125 duration-100">
                  <label htmlFor="comingYes" className="mr-2">
                    Yes
                  </label>
                  <input
                    id="comingYes"
                    name="coming"
                    type="radio"
                    value="yes"
                    checked={isComing === 'yes'}
                    onChange={handleComingChange}
                    className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
                    focus:outline-none focus:border-accent focus:ring focus:ring-accent"
                  />
                </div>
                <div className="hover:scale-125 duration-100">
                  <label htmlFor="comingNo" className="mr-2">
                    No
                  </label>
                  <input
                    id="comingNo"
                    name="coming"
                    type="radio"
                    value="no"
                    checked={isComing === 'no'}
                    onChange={handleComingChange}
                    className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
                    focus:outline-none focus:border-accent focus:ring focus:ring-accent"
                  />
                </div>
              </div>
            </td>
          </tr>

          {isComing === 'yes' && (
            <>
              <tr>
                <th>
                  <label htmlFor="accompanied" className="mx-4">
                    Accompanied
                  </label>
                </th>
                <td className="w-1/2 text-left">
                  <div className="flex justify-center">
                    <div className="me-4 hover:scale-125 duration-100">
                      <label htmlFor="accompaniedYes" className="mr-2">
                        Yes
                      </label>
                      <input
                        id="accompaniedYes"
                        name="accompanied"
                        type="radio"
                        value="yes"
                        checked={accompanied === 'yes'}
                        onChange={handleAccompaniedChange}
                        className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
                        focus:outline-none focus:border-accent focus:ring focus:ring-accent"
                      />
                    </div>
                    <div className="hover:scale-125 duration-100">
                      <label htmlFor="accompaniedNo" className="mr-2">
                        No
                      </label>
                      <input
                        id="accompaniedNo"
                        name="accompanied"
                        type="radio"
                        value="no"
                        checked={accompanied === 'no'}
                        onChange={handleAccompaniedChange}
                        className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
                        focus:outline-none focus:border-accent focus:ring focus:ring-accent"
                      />
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <th>
                  <label htmlFor="menu" className="mx-4">
                    Vegan menu
                  </label>
                </th>
                <td className="w-1/2 text-left">
                  <div className="flex justify-center">
                    <div className="me-4 hover:scale-125 duration-100">
                      <label htmlFor="menuYes" className="mr-2">
                        Yes
                      </label>
                      <input
                        id="menuYes"
                        name="menu"
                        type="radio"
                        value="yes"
                        checked={menu === 'yes'}
                        onChange={handleMenuChange}
                        className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
                        focus:outline-none focus:border-accent focus:ring focus:ring-accent"
                      />
                    </div>
                    <div className="hover:scale-125 duration-100">
                      <label htmlFor="menuNo" className="mr-2">
                        No
                      </label>
                      <input
                        id="menuNo"
                        name="menu"
                        type="radio"
                        value="no"
                        checked={menu === 'no'}
                        onChange={handleMenuChange}
                        className="border-my_dark text-accent rounded-md w-6 h-6 shadow-sm 
                        focus:outline-none focus:border-accent focus:ring focus:ring-accent"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </>
          )}
        </table>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="my-bg-band2 px-10 py-1 rounded-xl border border-my_dark shadow-lg
            hover-bg-band2 hover:text-white hover:scale-110 duration-100"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
