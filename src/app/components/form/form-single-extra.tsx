import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { FormData } from 'src/app/supabase';
import RadioButtonGroup from './radio-button-group';

interface FormSingleExtraProps {
  data: FormData;
  canModify: boolean;
}

const FormSingleExtra: React.FC<FormSingleExtraProps> = ({
  data,
  canModify,
}) => {
  const [isComing1, setIsComing1] = useState(data.coming1 ? 'yes' : 'no');
  const [menu1, setMenu1] = useState(data.menu1);

  const [isComing2, setIsComing2] = useState(data.coming2 ? 'yes' : 'no');
  const [name2, setName2] = useState(data.name2);
  const [menu2, setMenu2] = useState(data.menu2);

  const name2Ref = useRef<HTMLTextAreaElement>(null);

  const handleComing1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing1(event.target.value);
    data.coming1 = event.target.value === 'yes';
  };

  const handleMenu1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu1(event.target.value);
    data.menu1 = event.target.value;
  };

  const handleComing2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsComing2(event.target.value);
    data.coming2 = event.target.value === 'yes';
  };

  const handleName2Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName2(event.target.value);
    data.name2 = event.target.value;
    adjustTextareaHeight(event.target);
  };

  const handleMenu2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu2(event.target.value);
    data.menu2 = event.target.value;
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
    adjustTextareaHeight(name2Ref.current!);
    const disconnectObserver = observeTextarea();

    return () => {
      if (disconnectObserver) {
        disconnectObserver();
      }
    };
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
        <>
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

          <br />

          <RadioButtonGroup
            idPrefix="coming2"
            label="Am invitat"
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
                <label htmlFor="name2" className="w-full">
                  Nume invitat
                </label>
                <textarea
                  id="name2"
                  name="name2"
                  required
                  value={name2}
                  onChange={handleName2Change}
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
                label="Meniu invitat"
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
