-- ============================================================
-- Run this in Supabase SQL Editor:
-- https://supabase.com → SQL Editor → New Query → Paste → Run
-- ============================================================

-- 1. Teams table
create table if not exists public.teams (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  role          text not null,
  bio           text not null default '',
  initials      text not null,
  accent        text not null default '#5B30E8',
  tags          text[] not null default '{}',
  linkedin      text,
  is_founder    boolean not null default false,
  is_placeholder boolean not null default false,
  sort_order    integer not null default 0,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- 2. Hiring / open roles table
create table if not exists public.hiring (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  department   text not null default 'Engineering',
  location     text not null default 'Remote / Kathmandu, Nepal',
  type         text not null default 'Full-time',
  experience   text not null default '',
  description  text not null default '',
  requirements text[] not null default '{}',
  tags         text[] not null default '{}',
  is_active    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- 3. Auto-update updated_at
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger teams_updated_at before update on public.teams
  for each row execute function update_updated_at();

create trigger hiring_updated_at before update on public.hiring
  for each row execute function update_updated_at();

-- 4. RLS — public can read; only authenticated users (admin) can write
alter table public.teams  enable row level security;
alter table public.hiring enable row level security;

-- Read: everyone
create policy "teams_public_read"  on public.teams  for select using (true);
create policy "hiring_public_read" on public.hiring for select using (true);

-- Write: only authenticated
create policy "teams_auth_insert"  on public.teams  for insert with check (auth.role() = 'authenticated');
create policy "teams_auth_update"  on public.teams  for update using (auth.role() = 'authenticated');
create policy "teams_auth_delete"  on public.teams  for delete using (auth.role() = 'authenticated');
create policy "hiring_auth_insert" on public.hiring for insert with check (auth.role() = 'authenticated');
create policy "hiring_auth_update" on public.hiring for update using (auth.role() = 'authenticated');
create policy "hiring_auth_delete" on public.hiring for delete using (auth.role() = 'authenticated');

-- 5. Seed initial team members
insert into public.teams (name, role, bio, initials, accent, tags, linkedin, is_founder, sort_order) values
('Keshab Gautam',    'CEO & Founder',                        'Visionary engineer and entrepreneur who founded Tejasbyte to deliver world-class software engineering from the ground up.', 'KG', '#5B30E8', array['Product Strategy','AI/ML','Cloud Architecture'], 'https://www.linkedin.com/company/tejasbyte', true, 1),
('Aarogya Adhikari', 'Co-Founder & CTO',                     'Full-stack architect who leads Tejasbyte''s technical direction and engineering culture.',                                  'AA', '#7C5CFC', array['Full-Stack','DevOps','System Design'],            'https://www.linkedin.com/company/tejasbyte', true, 2),
('Puskar Adhikari',  'Co-Founder & Senior QA Engineer',      'Co-founder and quality champion. Leads QA strategy, automated testing pipelines, and release engineering.',               'PA', '#5B30E8', array['QA Engineering','Test Automation','Release Management'], 'https://www.linkedin.com/company/tejasbyte', true, 3),
('Sujan Maharjan',   'CTO & Full-Stack Developer',           'Technical leader and full-stack engineer driving architecture decisions and hands-on development.',                        'SM', '#A78BFA', array['Full-Stack','System Design','Technical Leadership'],  'https://www.linkedin.com/company/tejasbyte', false, 4),
('Sagar Adhikari',   'Full-Stack Developer & Engineering Manager', 'Manages engineering delivery while staying hands-on with code.',                                                    'SA', '#7C5CFC', array['Next.js','Node.js','Engineering Management'],         'https://www.linkedin.com/company/tejasbyte', false, 5),
('Prabin Adhikari',  'Senior Developer',                     'Seasoned engineer with production experience across web platforms, APIs, and backend systems.',                           'PrA','#A78BFA', array['Backend','APIs','PostgreSQL'],                       'https://www.linkedin.com/company/tejasbyte', false, 6),
('Rajesh Pandey',    'Senior Developer',                     'Senior engineer specialising in scalable backend systems and cloud-native architecture.',                                 'RP', '#5B30E8', array['Cloud-Native','Microservices','DevOps'],              'https://www.linkedin.com/company/tejasbyte', false, 7),
('Aayush Pradhan',   'Developer',                            'Full-stack developer with a focus on clean UI implementation, component architecture, and responsive design.',           'AP', '#7C5CFC', array['React','Mobile','UI Engineering'],                    'https://www.linkedin.com/company/tejasbyte', false, 8),
('Aashitosh Adhikari','Developer',                           'Software developer with growing expertise across web technologies and API integrations.',                                 'AsA','#A78BFA', array['Web Development','APIs','TypeScript'],                'https://www.linkedin.com/company/tejasbyte', false, 9),
('Shyam Shrestha',   'Legal Advisor',                        'Provides legal counsel across contracts, IP, compliance, and corporate governance.',                                      'SS', '#5B30E8', array['Corporate Law','IP & Contracts','Compliance'],        'https://www.linkedin.com/company/tejasbyte', false, 10);

-- 6. Seed sample open roles
insert into public.hiring (title, department, location, type, experience, description, requirements, tags) values
('Senior Frontend Engineer', 'Engineering', 'Remote / Kathmandu, Nepal', 'Full-time', '4+ years',
 'We are looking for a senior frontend engineer to lead the UI engineering of complex, performance-critical web applications.',
 array['4+ years React/Next.js experience','Strong TypeScript skills','Experience with performance optimisation and Core Web Vitals','Familiarity with accessible, responsive design'],
 array['React','Next.js','TypeScript','CSS']),

('Senior AI Engineer', 'Engineering', 'Remote / Kathmandu, Nepal', 'Full-time', '3+ years',
 'Join our AI team to build production LLM systems, RAG pipelines, and autonomous agents for enterprise clients.',
 array['3+ years Python for ML/AI','Hands-on experience with OpenAI, Anthropic, or similar APIs','Experience building RAG pipelines in production','Strong understanding of vector databases'],
 array['Python','OpenAI','LangChain','Pinecone']),

('Lead Mobile Engineer', 'Engineering', 'Remote / Kathmandu, Nepal', 'Full-time', '4+ years',
 'Lead mobile engineering across iOS and Android using React Native, owning architecture, offline-first design, and App Store deployment.',
 array['4+ years React Native','Shipped apps to App Store and Play Store','Experience with offline-first architecture','Strong knowledge of Expo and native modules'],
 array['React Native','Expo','iOS','Android']);
