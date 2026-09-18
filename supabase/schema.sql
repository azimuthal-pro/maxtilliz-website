-- ============================================================
-- Daily Health Tips — subscribers table
-- Run this once in your Supabase project:
--   Supabase Dashboard > SQL Editor > New query > paste > Run
-- ============================================================

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  channel text not null default 'email',
  status text not null default 'active',
  unsubscribe_token uuid not null default gen_random_uuid(),
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

create index if not exists subscribers_status_idx
  on public.subscribers (status);

-- Enable Row Level Security and add NO policies.
-- This means the public/anon key can't read or write anything;
-- only the server (service role key) can. Subscriber data stays private.
alter table public.subscribers enable row level security;
