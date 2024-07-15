import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define an interface for the form data structure
interface FormData {
  id: string;
  type: string;
  f_p_name: string;
  f_p_coming: boolean;
  f_p_menu: string;
  s_p_name: string;
  s_p_coming: boolean;
  s_p_menu: string;
}

// Fetch values by ID
async function fetchValuesById(id: string): Promise<FormData | null> {
  const { data, error } = await supabase.rpc('get_form_by_id', { row_id: id });

  if (error) {
    console.error('Error fetching values:', error);
    return null;
  }

  if (data && data[0]) {
    return {
      id: data[0].id,
      type: data[0].type,
      f_p_name: data[0].f_p_name,
      f_p_coming: data[0].f_p_coming,
      f_p_menu: data[0].f_p_menu,
      s_p_name: data[0].s_p_name,
      s_p_coming: data[0].s_p_coming,
      s_p_menu: data[0].s_p_menu,
    };
  }

  return null;
}

// Write values using the FormData structure
async function writeValues(formData: FormData): Promise<boolean> {
  const {
    id,
    type,
    f_p_name,
    f_p_coming,
    f_p_menu,
    s_p_name,
    s_p_coming,
    s_p_menu,
  } = formData;
  const response = await supabase.rpc('update_form_by_id', {
    row_id: id,
    new_type: type,
    new_f_p_name: f_p_name,
    new_f_p_coming: f_p_coming,
    new_f_p_menu: f_p_menu,
    new_s_p_name: s_p_name,
    new_s_p_coming: s_p_coming,
    new_s_p_menu: s_p_menu,
  });

  if (response.error) {
    console.error('Error writing values:', response.error);
    return false;
  }

  return true;
}

export { supabase, fetchValuesById, writeValues, FormData };
