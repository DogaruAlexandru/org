import { useEffect, useState } from 'react';
import RadioButtonGroup from './radio-button-group';
import { fetchValuesById, writeValues } from '../../supabase';

interface FormProps {
  data: any;
}

const Form: React.FC<FormProps> = ({ data }) => {
  const id = data.id;
  const name = data.name;
  const [isComing, setIsComing] = useState(data.coming ? 'yes' : 'no');
  const [menu, setMenu] = useState(data.accompanied ? 'yes' : 'no');
  const [accompanied, setAccompanied] = useState(data.vegan ? 'yes' : 'no');
  const [extraMenu, setExtraMenu] = useState(data.extra_vegan ? 'yes' : 'no');

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

  const handleExtraMenuChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExtraMenu(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const success = await writeValues(
      id,
      isComing === 'yes',
      menu === 'yes',
      accompanied === 'yes',
      extraMenu === 'yes'
    );
  };

  return (
    <div
      className="my-bg-band1 shadow-lg px-4 py-8 rounded-lg border border-my_dark 
      font-dancing-script text-my_dark text-center font-bold text-3xl"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col place-content-center text-center"
      >
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="name" className="w-full">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={true}
            value={name}
            className="border-my_dark rounded-lg shadow-sm p-1.5 w-1/2 hover:scale-110 duration-100
            focus:outline-none focus:border-accent focus:ring focus:ring-accent
            text-2xl"
          />
        </div>

        <RadioButtonGroup
          idPrefix="coming"
          label="Coming"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
          selectedValue={isComing}
          onChange={handleComingChange}
        />

        {isComing === 'yes' && (
          <>
            <RadioButtonGroup
              idPrefix="menu"
              label="Vegan menu"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              selectedValue={menu}
              onChange={handleMenuChange}
            />

            <RadioButtonGroup
              idPrefix="accompanied"
              label="Accompanied"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              selectedValue={accompanied}
              onChange={handleAccompaniedChange}
            />

            {accompanied === 'yes' && (
              <RadioButtonGroup
                idPrefix="extraMenu"
                label="Vegan menu for your guest"
                options={[
                  { label: 'Yes', value: 'yes' },
                  { label: 'No', value: 'no' },
                ]}
                selectedValue={extraMenu}
                onChange={handleExtraMenuChange}
              />
            )}
          </>
        )}

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="my-bg-band2 px-10 py-1 rounded-xl border border-my_dark shadow-lg
            hover-bg-band2 hover:text-white hover:scale-110 duration-100"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
