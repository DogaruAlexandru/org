import React, { useState } from 'react';
import { FormData } from 'src/app/supabase';
import RadioButtonGroup from './radio-button-group';

interface FormSingleProps {
  data: FormData;
  canModify: boolean;
}

const FormSingle: React.FC<FormSingleProps> = ({ data, canModify }) => {
  const [isComing, setIsComing] = useState(data.coming1 ? 'yes' : 'no');
  const [menu, setMenu] = useState(data.menu1);

  const handleComingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing(event.target.value);
    data.coming1 = event.target.value === 'yes';
  };

  const handleMenuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(event.target.value);
    data.menu1 = event.target.value;
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        {/* <label htmlFor="name" className="w-full">
          Invitat(ă)
        </label> */}
        <div
          id="name"
          className="rounded-lg shadow-sm p-1.5 hover:scale-110 duration-100
          text-2xl w-full sm:w-3/4 lg:w-1/2 whitespace-pre-wrap word-wrap-break-word
          border border-my_dark bg-white"
        >
          {data.name1}
        </div>
      </div>

      <RadioButtonGroup
        idPrefix="coming"
        label=""
        options={[
          { label: 'Vin', value: 'yes' },
          { label: 'Nu vin', value: 'no' },
        ]}
        selectedValue={isComing}
        canModify={canModify}
        onChange={handleComingChange}
      />

      {isComing === 'yes' && (
        <RadioButtonGroup
          idPrefix="menu"
          label="Meniu"
          options={[
            { label: 'Standard', value: 'standard' },
            { label: 'Vegan', value: 'vegan' },
          ]}
          selectedValue={menu}
          canModify={canModify}
          onChange={handleMenuChange}
        />
      )}
    </div>
  );
};

export default FormSingle;
