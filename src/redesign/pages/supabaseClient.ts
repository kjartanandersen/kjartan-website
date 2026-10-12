import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These are inlined at build time by dotenv-webpack. They are absent under Jest
// and in any build whose environment was not configured.
//
// This module must not throw when they are missing. It is pulled into the main
// bundle through Blog.tsx, so a throw at module scope stops the whole app from
// mounting and every route renders blank — not just the blog.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
    console.warn(
        'Supabase is not configured, so the blog will show its empty state. ' +
        'Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in the build environment.'
    );
}

export const supabase: SupabaseClient | null = isSupabaseConfigured
    ? createClient(supabaseUrl as string, supabaseAnonKey as string)
    : null;
