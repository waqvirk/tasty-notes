CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  photo TEXT,
  description TEXT,
  ingredients TEXT[],
  instructions TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
