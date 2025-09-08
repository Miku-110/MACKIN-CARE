import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Biar gampang ngecek kalau env belum kebaca
if (!url || !anon) {
  console.warn('[Supabase] Missing URL or ANON key. Cek file .env kamu.');
}

export const supabase = createClient(url, anon, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
