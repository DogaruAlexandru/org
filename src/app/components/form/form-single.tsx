import React, { useState } from 'react';
import { FormData } from 'src/app/supabase';
import RadioButtonGroup from './radio-button-group';

interface FormSingleProps {
  data: FormData;
  canModify: boolean;
  updateFormData: (updatedData: Partial<FormData>) => void;
}

const FormSingle: React.FC<FormSingleProps> = ({
  data,
  canModify,
  updateFormData,
}) => {
  const [isComing, setIsComing] = useState<string | null>(
    data.coming1 === null ? null : data.coming1 ? 'yes' : 'no'
  );
  const [menu, setMenu] = useState(data.menu1);

  const handleComingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsComing(value);
    updateFormData({
      coming1: value === 'yes' ? true : value === 'no' ? false : null,
    });
  };

  const handleMenuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(event.target.value);
    updateFormData({ menu1: event.target.value });
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-4">
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
        label="Confirm prezența"
        options={[
          { label: 'Da', value: 'yes' },
          { label: 'Nu', value: 'no' },
        ]}
        selectedValue={isComing || ''}
        canModify={canModify}
        onChange={handleComingChange}
        required={true}
        validationMessage="Vă rugăm, alegeți o opțiune."
      />

      {isComing === 'yes' && (
        <RadioButtonGroup
          idPrefix="menu"
          label="Preferință meniu"
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
