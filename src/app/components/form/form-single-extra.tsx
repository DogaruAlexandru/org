import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { FormData } from 'src/app/supabase';
import RadioButtonGroup from './radio-button-group';

interface FormSingleExtraProps {
  data: FormData;
  canModify: boolean;
  updateFormData: (updatedData: Partial<FormData>) => void;
}

const FormSingleExtra: React.FC<FormSingleExtraProps> = ({
  data,
  canModify,
  updateFormData,
}) => {
  const [isComing1, setIsComing1] = useState(
    data.coming1 === true ? 'yes' : data.coming1 === false ? 'no' : ''
  );
  const [menu1, setMenu1] = useState(data.menu1 || '');

  const [isComing2, setIsComing2] = useState(
    data.coming2 === true ? 'yes' : data.coming2 === false ? 'no' : ''
  );
  const [name2, setName2] = useState(data.name2 || '');
  const [menu2, setMenu2] = useState(data.menu2 || '');

  const name2Ref = useRef<HTMLTextAreaElement>(null);

  const handleComing1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing1(event.target.value);
    updateFormData({
      coming1:
        event.target.value === 'yes'
          ? true
          : event.target.value === 'no'
          ? false
          : null,
    });
  };

  const handleMenu1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu1(event.target.value);
    updateFormData({ menu1: event.target.value });
  };

  const handleComing2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing2(event.target.value);
    updateFormData({
      coming2:
        event.target.value === 'yes'
          ? true
          : event.target.value === 'no'
          ? false
          : null,
    });
  };

  const handleName2Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName2(event.target.value);
    updateFormData({ name2: event.target.value });
    if (event.target) {
      adjustTextareaHeight(event.target);
    }
  };

  const handleMenu2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu2(event.target.value);
    updateFormData({ menu2: event.target.value });
  };

  const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const observeTextarea = useCallback(() => {
    if (name2Ref.current) {
      const textarea = name2Ref.current;
      const resizeObserver = new ResizeObserver(() =>
        adjustTextareaHeight(textarea)
      );
      resizeObserver.observe(textarea);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useLayoutEffect(() => {
    if (name2Ref.current) {
      adjustTextareaHeight(name2Ref.current);
      const disconnectObserver = observeTextarea();

      return () => {
        if (disconnectObserver) {
          disconnectObserver();
        }
      };
    }
  }, [name2, observeTextarea]);

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
        label="Confirm prezența"
        options={[
          { label: 'Da', value: 'yes' },
          { label: 'Nu', value: 'no' },
        ]}
        selectedValue={isComing1}
        canModify={canModify}
        onChange={handleComing1Change}
      />

      {isComing1 === 'yes' && (
        <>
          <RadioButtonGroup
            idPrefix="menu1"
            label="Preferință meniu"
            options={[
              { label: 'Standard', value: 'standard' },
              { label: 'Vegan', value: 'vegan' },
            ]}
            selectedValue={menu1}
            canModify={canModify}
            onChange={handleMenu1Change}
          />

          <div className="h-2 my-bg-band2 mb-4 border-my_dark rounded-full" />

          <RadioButtonGroup
            idPrefix="coming2"
            label="Cu însoțitor"
            options={[
              { label: 'Da', value: 'yes' },
              { label: 'Nu', value: 'no' },
            ]}
            selectedValue={isComing2}
            canModify={canModify}
            onChange={handleComing2Change}
          />

          {isComing2 === 'yes' && (
            <>
              <div className="flex flex-col items-center mb-4">
                <textarea
                  id="name2"
                  name="name2"
                  required
                  value={name2}
                  onChange={handleName2Change}
                  onInvalid={(e) =>
                    (e.target as HTMLTextAreaElement).setCustomValidity(
                      'Vă rugăm, introduceți numele însoțitorului.'
                    )
                  }
                  onInput={(e) =>
                    (e.target as HTMLTextAreaElement).setCustomValidity('')
                  }
                  placeholder="Prenume Nume"
                  ref={name2Ref}
                  className="border border-my_dark rounded-lg shadow-sm p-1.5 hover:scale-110 duration-100
                  focus:outline-none focus:border-accent focus:ring focus:ring-accent text-center
                  text-2xl w-full sm:w-3/4 lg:w-1/2 whitespace-pre-wrap word-wrap-break-word
                  resize-none overflow-hidden"
                  rows={1}
                />
              </div>

              <RadioButtonGroup
                idPrefix="menu2"
                label="Preferință meniu"
                options={[
                  { label: 'Standard', value: 'standard' },
                  { label: 'Vegan', value: 'vegan' },
                ]}
                selectedValue={menu2}
                canModify={canModify}
                onChange={handleMenu2Change}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FormSingleExtra;
