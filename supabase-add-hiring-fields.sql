-- Migration: add salary_range and benefits to hiring table
-- Run this in Supabase SQL Editor

ALTER TABLE hiring
  ADD COLUMN IF NOT EXISTS salary_range TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS benefits TEXT[] DEFAULT NULL;

-- Verify
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'hiring'
ORDER BY ordinal_position;
