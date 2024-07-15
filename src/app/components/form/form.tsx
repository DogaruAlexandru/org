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
  const [saveStatus, setSaveStatus] = useState(SaveStatus.None);
  const [canModify, setCanModify] = useState(false);
  let dataFallback = { ...data };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaveStatus(SaveStatus.SaveInProgress);

    try {
      let updatedData = { ...dataFallback };
      switch (data.form_type) {
        case 'single':
          updatedData.coming1 = data.coming1;
          updatedData.menu1 = data.menu1;
          break;
        case 'couple':
          updatedData.coming1 = data.coming1;
          updatedData.menu1 = data.menu1;
          updatedData.coming2 = data.coming2;
          updatedData.menu2 = data.menu2;
          break;
        case 'single-extra':
          updatedData.coming1 = data.coming1;
          updatedData.menu1 = data.menu1;
          updatedData.name2 = data.name2;
          updatedData.coming2 = data.coming2;
          updatedData.menu2 = data.menu2;
          break;
      }
      const success = await writeValues(updatedData);

      if (success) {
        setSaveStatus(SaveStatus.SaveSuccess);
        dataFallback = { ...data };

        setTimeout(() => {
          setSaveStatus(SaveStatus.None);
        }, 2000);
      } else {
        setSaveStatus(SaveStatus.SaveError);
        data = { ...dataFallback };

        setTimeout(() => {
          setSaveStatus(SaveStatus.None);
        }, 3000);
      }
    } catch (error) {
      setSaveStatus(SaveStatus.SaveError);
      data = { ...dataFallback };

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
                {data.form_type === 'single' && (
                  <FormSingle data={data} canModify />
                )}
                {data.form_type === 'couple' && (
                  <FormCouple data={data} canModify />
                )}
                {data.form_type === 'single-extra' && (
                  <FormSingleExtra data={data} canModify />
                )}

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    hidden={!canModify}
                    className="my-bg-band2 px-10 py-1 rounded-xl border border-my_dark shadow-lg
                    hover-bg-band2 hover:text-white hover:scale-110 duration-100"
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
