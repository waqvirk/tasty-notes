CREATE TABLE IF NOT EXISTS recipes (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  photo TEXT,
  description TEXT,
  ingredients TEXT[],
  instructions TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  servings INT NOT NULL,
  rating DECIMAL(3,2),
  cooking_time_minutes INT NOT NULL
);
