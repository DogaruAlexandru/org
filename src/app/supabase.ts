import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define an interface for the form data structure
interface FormData {
  id: string;
  form_type: string;
  name1: string;
  coming1: boolean | null;
  menu1: string;
  coming2: boolean | null;
  name2: string;
  menu2: string;
  limit_date: Date | null;
}

// Fetch values by ID
async function fetchValuesById(id: string): Promise<FormData | null> {
  const { data, error } = await supabase.rpc('get_form_by_id', { row_id: id });

  if (error) {
    console.error('Error fetching values:', error);
    return null;
  }

  if (data && data[0]) {
    if (data[0].limit_date) {
      data[0].limit_date = new Date(data[0].limit_date);
    }

    return {
      id: data[0].id,
      form_type: data[0].form_type,
      name1: data[0].name1,
      coming1: data[0].coming1,
      menu1: data[0].menu1,
      coming2: data[0].coming2,
      name2: data[0].name2,
      menu2: data[0].menu2,
      limit_date: data[0].limit_date,
    };
  }

  return null;
}

// Write values using the FormData structure
async function writeValues(formData: FormData): Promise<boolean> {
  const {
    id,
    coming1: coming1,
    menu1: menu1,
    coming2: coming2,
    name2: name2,
    menu2: menu2,
  } = formData;
  const response = await supabase.rpc('update_form_by_id', {
    row_id: id,
    new_coming1: coming1,
    new_menu1: menu1,
    new_coming2: coming2,
    new_name2: name2,
    new_menu2: menu2,
  });

  if (response.error) {
    console.error('Error writing values:', response.error);
    return false;
  }

  if (response.data === 'time_restriction_failed') {
    console.warn('Update failed due to time restriction.');
    alert(
      'Actualizarea nu a putut fi finalizată deoarece limita de timp a fost depășită.'
    );
    return false;
  }

  if (response.data === 'update_success') {
    console.log('Update successful.');
    return true;
  }

  console.error('Unexpected response:', response.data);
  return false;
}

export { supabase, fetchValuesById, writeValues, FormData };
