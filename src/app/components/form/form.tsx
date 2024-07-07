import { useEffect, useState } from 'react';
import RadioButtonGroup from './radio-button-group';
import { fetchValuesById, writeValues } from '../../supabase';

interface FormProps {
  id: string;
}

const Form: React.FC<FormProps> = ({ id }) => {
  const [name, setName] = useState('');
  const [isComing, setIsComing] = useState('no');
  const [menu, setMenu] = useState('no');
  const [accompanied, setAccompanied] = useState('no');
  const [extraMenu, setExtraMenu] = useState('no');
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetchValuesById(id);
        if (result) {
          setName(result.name || '');
          setIsComing(result.coming ? 'yes' : 'no');
          setAccompanied(result.accompanied ? 'yes' : 'no');
          setMenu(result.vegan ? 'yes' : 'no');
          setExtraMenu(result.extra_vegan ? 'yes' : 'no');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const success = await writeValues(
      id,
      name,
      isComing === 'yes',
      menu === 'yes',
      accompanied === 'yes',
      extraMenu === 'yes'
    );
    if (success === false) {
      setNotification({ message: 'Data not saved.', type: 'error' });
    } else {
      setNotification({ message: 'Data saved.', type: 'success' });
    }
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 3000);
  };

  return (
    <div
      className="my-bg-band1 shadow-lg px-4 py-8 rounded-lg border border-my_dark 
      font-dancing-script text-my_dark text-center font-bold text-3xl"
    >
      {notification.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg ${
            notification.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {notification.message}
        </div>
      )}
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
            onChange={handleNameChange}
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
