import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lgycsstqncpuvuvjceao.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWNzc3RxbmNwdXZ1dmpjZWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NjE4OTQsImV4cCI6MjAwOTIzNzg5NH0.U1VSkN5Mhr9bV8-fS1PHDrAwooIjoKO_2cqdsegx7Wg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;