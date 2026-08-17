-- Run this in Supabase SQL Editor

-- 1. Add photo_url column to teams
alter table public.teams add column if not exists photo_url text;

-- 2. Create storage bucket for team photos
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'team-photos',
  'team-photos',
  true,
  5242880,  -- 5MB limit
  array['image/jpeg','image/jpg','image/png','image/webp']
)
on conflict (id) do nothing;

-- 3. Storage policies — public read, authenticated upload/delete
create policy "team_photos_public_read"
  on storage.objects for select
  using (bucket_id = 'team-photos');

create policy "team_photos_auth_upload"
  on storage.objects for insert
  with check (bucket_id = 'team-photos' and auth.role() = 'authenticated');

create policy "team_photos_auth_delete"
  on storage.objects for delete
  using (bucket_id = 'team-photos' and auth.role() = 'authenticated');

create policy "team_photos_auth_update"
  on storage.objects for update
  using (bucket_id = 'team-photos' and auth.role() = 'authenticated');
