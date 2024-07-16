import React, { useState } from 'react';
import { FormData } from 'src/app/supabase';
import RadioButtonGroup from './radio-button-group';

interface FormCoupleProps {
  data: FormData;
  canModify: boolean;
  updateFormData: (updatedData: Partial<FormData>) => void;
}

const FormCouple: React.FC<FormCoupleProps> = ({
  data,
  canModify,
  updateFormData,
}) => {
  const [isComing1, setIsComing1] = useState(data.coming1 ? 'yes' : 'no');
  const [menu1, setMenu1] = useState(data.menu1);

  const [isComing2, setIsComing2] = useState(data.coming2 ? 'yes' : 'no');
  const [menu2, setMenu2] = useState(data.menu2);

  const handleComing1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing1(event.target.value);
    updateFormData({ coming1: event.target.value === 'yes' });
  };

  const handleMenu1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu1(event.target.value);
    updateFormData({ menu1: event.target.value });
  };

  const handleComing2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing2(event.target.value);
    updateFormData({ coming2: event.target.value === 'yes' });
  };

  const handleMenu2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu2(event.target.value);
    updateFormData({ menu2: event.target.value });
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        <div
          id="name1"
          className="rounded-lg shadow-sm p-1.5 hover:scale-110 duration-100
          text-2xl w-full sm:w-3/4 lg:w-1/2 whitespace-pre-wrap word-wrap-break-word
          border border-my_dark bg-white"
        >
          {data.name1}
        </div>
      </div>

      <RadioButtonGroup
        idPrefix="coming1"
        label="Vin"
        options={[
          { label: 'Da', value: 'yes' },
          { label: 'Nu', value: 'no' },
        ]}
        selectedValue={isComing1}
        canModify={canModify}
        onChange={handleComing1Change}
      />

      {isComing1 === 'yes' && (
        <RadioButtonGroup
          idPrefix="menu1"
          label="Meniu"
          options={[
            { label: 'Standard', value: 'standard' },
            { label: 'Vegan', value: 'vegan' },
          ]}
          selectedValue={menu1}
          canModify={canModify}
          onChange={handleMenu1Change}
        />
      )}

      <br />

      <div className="flex flex-col items-center mb-4">
        <div
          id="name2"
          className="rounded-lg shadow-sm p-1.5 hover:scale-110 duration-100
          text-2xl w-full sm:w-3/4 lg:w-1/2 whitespace-pre-wrap word-wrap-break-word
          border border-my_dark bg-white"
        >
          {data.name2}
        </div>
      </div>

      <RadioButtonGroup
        idPrefix="coming2"
        label="Vin"
        options={[
          { label: 'Da', value: 'yes' },
          { label: 'Nu', value: 'no' },
        ]}
        selectedValue={isComing2}
        canModify={canModify}
        onChange={handleComing2Change}
      />

      {isComing2 === 'yes' && (
        <RadioButtonGroup
          idPrefix="menu2"
          label="Meniu"
          options={[
            { label: 'Standard', value: 'standard' },
            { label: 'Vegan', value: 'vegan' },
          ]}
          selectedValue={menu2}
          canModify={canModify}
          onChange={handleMenu2Change}
        />
      )}
    </div>
  );
};

export default FormCouple;
