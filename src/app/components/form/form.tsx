import { useEffect, useState } from 'react';

import { writeValues } from '../../supabase';

import RadioButtonGroup from './radio-button-group';
import TimeLeft from './time-left';
import { NotificationSelector, NotificationType } from '../notification';

enum SaveStatus {
  None,
  SaveInProgress,
  SaveSuccess,
  SaveError,
}

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

  const [saveStatus, setSaveStatus] = useState(SaveStatus.None);
  const [canModify, setCanModify] = useState(false);

  const setFormValues = () => {
    setIsComing(data.coming ? 'yes' : 'no');
    setMenu(data.accompanied ? 'yes' : 'no');
    setAccompanied(data.vegan ? 'yes' : 'no');
    setExtraMenu(data.extra_vegan ? 'yes' : 'no');
  };

  useEffect(() => {
    setFormValues();
  }, []);

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
    setSaveStatus(SaveStatus.SaveInProgress);
    try {
      const success = await writeValues(
        id,
        isComing === 'yes',
        menu === 'yes',
        accompanied === 'yes',
        extraMenu === 'yes'
      );
      if (success) {
        setSaveStatus(SaveStatus.SaveSuccess);
        setTimeout(() => {
          setSaveStatus(SaveStatus.None);
        }, 2000);
      } else {
        setSaveStatus(SaveStatus.SaveError);
        setFormValues();
        setTimeout(() => {
          setSaveStatus(SaveStatus.None);
        }, 3000);
      }
    } catch (error) {
      setSaveStatus(SaveStatus.SaveError);
      setFormValues();
      setTimeout(() => {
        setSaveStatus(SaveStatus.None);
      }, 3000);
    }
  };

  return (() => {
    switch (saveStatus) {
      case SaveStatus.None:
        return (
          <div className="my-bg-band1 shadow-lg px-4 py-8 rounded-lg border border-my_dark">
            <div className="font-dancing-script text-my_dark text-center font-bold text-3xl">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col place-content-center text-center"
              >
                <div className="flex flex-col items-center mb-4">
                  <label htmlFor="name" className="w-full">
                    Name
                  </label>
                  <div
                    id="name"
                    className="rounded-lg shadow-sm p-1.5 hover:scale-110 duration-100
                    text-2xl w-full sm:w-3/4 lg:w-1/2 whitespace-pre-wrap word-wrap-break-word
                    border border-my_dark bg-white"
                  >
                    {name}
                  </div>
                </div>

                <RadioButtonGroup
                  idPrefix="coming"
                  label="Coming"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  selectedValue={isComing}
                  canModify={canModify}
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
                      canModify={canModify}
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
                      canModify={canModify}
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
                        canModify={canModify}
                        onChange={handleExtraMenuChange}
                      />
                    )}
                  </>
                )}

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    hidden={!canModify}
                    className="my-bg-band2 px-10 py-1 rounded-xl border border-my_dark shadow-lg
                    hover-bg-band2 hover:text-white hover:scale-110 duration-100"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            <TimeLeft setCanModify={setCanModify} />
          </div>
        );
      case SaveStatus.SaveInProgress:
        return <NotificationSelector type={NotificationType.SaveInProgress} />;
      case SaveStatus.SaveSuccess:
        return <NotificationSelector type={NotificationType.SaveSuccess} />;
      case SaveStatus.SaveError:
        return <NotificationSelector type={NotificationType.SaveError} />;
      default:
        return null;
    }
  })();
};

export default Form;
