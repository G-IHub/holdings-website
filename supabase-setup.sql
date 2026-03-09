-- Create the participants table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  country TEXT,
  stateCity TEXT,
  organization TEXT,
  currentStatus TEXT,
  payment TEXT,
  registeredAt TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_participants_email ON participants(email);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all operations (adjust as needed for security)
CREATE POLICY "Allow all operations for participants" ON participants
  FOR ALL USING (true);