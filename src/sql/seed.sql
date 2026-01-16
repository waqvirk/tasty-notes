INSERT INTO recipes (
  title,
  category,
  photo,
  description,
  ingredients,
  instructions
) VALUES
(
  'Classic Pancakes',
  'Breakfast',
  'https://images.unsplash.com/photo-1587738347113-1d8c36a2db9b',
  'Fluffy homemade pancakes.',
  ARRAY['Flour', 'Milk', 'Eggs', 'Sugar', 'Baking Powder'],
  'Mix ingredients, cook on pan until golden.'
),
(
  'Spaghetti Aglio e Olio',
  'Dinner',
  'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8b24',
  'Simple Italian pasta dish.',
  ARRAY['Spaghetti', 'Garlic', 'Olive Oil', 'Chili Flakes'],
  'Cook pasta, sauté garlic, mix together.'
);
