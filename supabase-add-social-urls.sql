-- Run this in Supabase SQL Editor to add social_urls to teams table
alter table public.teams add column if not exists social_urls text[] not null default '{}';
