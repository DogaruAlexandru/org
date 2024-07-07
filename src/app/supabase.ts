import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fetch values by ID
async function fetchValuesById(id: string) {
  const { data, error } = await supabase.rpc('get_form_by_id', {
    row_id: id,
  });

  if (error) {
    console.error('Error fetching values:', error);
    return null;
  }

  return data;
}

// Write values at an ID
async function writeValues(
  id: string,
  name: string,
  coming: boolean,
  vegan: boolean,
  accompanied: boolean,
  extraVegan: boolean
) {
  const { data, error } = await supabase.rpc('update_form_by_id', {
    row_id: id,
    new_name: name,
    new_coming: coming,
    new_vegan: vegan,
    new_accompanied: accompanied,
    new_extra_vegan: extraVegan,
  });

  if (error) {
    console.error('Error writing values:', error);
    return null;
  }

  return data;
}

export { supabase, fetchValuesById, writeValues };
