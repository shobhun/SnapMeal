import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kmisizbukwktqgronokf.supabase.co',
  'sb_publishable_hT0XwKQxR91GZfikpSolFQ_7HlQ7TTq',
);

export default supabase;
