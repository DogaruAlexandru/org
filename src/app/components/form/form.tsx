import { useEffect, useState } from 'react';

import { FormData, writeValues } from '../../supabase';

import TimeLeft from './time-left';
import {
  NotificationSelector,
  NotificationType,
  SaveStatus,
} from '../notification';
import FormSingle from './form-single';
import FormSingleExtra from './form-single-extra';
import FormCouple from './form-couple';

interface FormProps {
  data: FormData;
}

const Form: React.FC<FormProps> = ({ data }) => {
  const [formData, setFormData] = useState(data);
  const [saveStatus, setSaveStatus] = useState(SaveStatus.None);
  const [canModify, setCanModify] = useState(false);
  const [dataFallback, setDataFallback] = useState({ ...data });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaveStatus(SaveStatus.SaveInProgress);

    try {
      const success = await writeValues(formData);

      if (success) {
        setSaveStatus(SaveStatus.SaveSuccess);
        setDataFallback({ ...formData });

        setTimeout(() => {
          setSaveStatus(SaveStatus.None);
        }, 2000);
      } else {
        setSaveStatus(SaveStatus.SaveError);
        setFormData({ ...dataFallback });

        setTimeout(() => {
          setSaveStatus(SaveStatus.None);
        }, 3000);
      }
    } catch (error) {
      setSaveStatus(SaveStatus.SaveError);
      setFormData({ ...dataFallback });

      setTimeout(() => {
        setSaveStatus(SaveStatus.None);
      }, 3000);
    }
  };

  const updateFormData = (updatedData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  return (() => {
    switch (saveStatus) {
      case SaveStatus.None:
        return (
          <div className="my-bg-band1 shadow-lg px-4 py-8 rounded-lg border-my_dark">
            <div className="font-dancing-script text-my_dark text-center font-bold text-3xl">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col place-content-center text-center"
              >
                {formData.form_type === 'single' && (
                  <FormSingle
                    data={formData}
                    canModify={canModify}
                    updateFormData={updateFormData}
                  />
                )}
                {formData.form_type === 'couple' && (
                  <FormCouple
                    data={formData}
                    canModify={canModify}
                    updateFormData={updateFormData}
                  />
                )}
                {formData.form_type === 'single-extra' && (
                  <FormSingleExtra
                    data={formData}
                    canModify={canModify}
                    updateFormData={updateFormData}
                  />
                )}

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    hidden={!canModify}
                    className="my-bg-band2 px-10 py-1 rounded-xl border border-my_dark shadow-lg
                    hover-bg-band2 active-bg-band2 active:text-white hover:text-white hover:scale-110 duration-100"
                  >
                    Salvează
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
