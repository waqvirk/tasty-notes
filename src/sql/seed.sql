INSERT INTO recipes (
  title,
  category,
  photo,
  description,
  ingredients,
  instructions,
  servings,
  rating,
  timing,
) VALUES
(
  'Classic Pancakes',
  'Breakfast',
  'https://images.unsplash.com/photo-1587738347113-1d8c36a2db9b',
  'Fluffy homemade pancakes.',
  ARRAY['Flour', 'Milk', 'Eggs', 'Sugar', 'Baking Powder'],
  'Mix ingredients, cook on pan until golden.',
  
),
(
  'Avocado Toast',
  'Breakfast',
  'https://www.allrecipes.com/thmb/mJJPeaKKj61DZ4kc_jHHVI3kmG8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg',
  'Creamy avocado spread on toasted bread.',
  ARRAY['Avocado', 'Bread', 'Salt', 'Pepper', 'Lemon Juice'],
  'Mash avocado, spread on toast, season to taste.',
  1,
  4,
  10
),
(
  'Oatmeal with Fruits',
  'Breakfast',
  'https://www.pcrm.org/sites/default/files/Oatmeal%20and%20Berries.jpg',
  'Warm oatmeal topped with fresh fruits.',
  ARRAY['Oats', 'Water', 'Banana', 'Berries', 'Honey'],
  'Cook oats, top with sliced fruits and honey.',
  2,
  5,
  15
),
(
  'Smoothie Bowl',
  'Breakfast',
  'https://minimalistbaker.com/wp-content/uploads/2016/07/The-PERFECT-5-minute-Smoothie-Bowl-Simple-ingredients-naturally-sweet-SO-healthy-vegan-glutenfree-smoothiebowl-recipe.jpg',
  'A refreshing smoothie topped with fruits and nuts.',
  ARRAY['Banana', 'Spinach', 'Almond Milk', 'Granola'],
  'Blend ingredients, pour into a bowl, and top.',
  1,
  5,
  10
),
(
  'Eggs Benedict',
  'Breakfast',
  'https://www.jocooks.com/wp-content/uploads/2020/08/eggs-benedict-1-13.jpg',
  'Poached eggs on English muffins with hollandaise.',
  ARRAY['Eggs', 'English Muffins', 'Ham', 'Hollandaise Sauce'],
  'Poach eggs, assemble on muffins, drizzle sauce.',
  2,
  5,
  20
),(
  'Caesar Salad',
  'Lunch',
  'https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg',
  'A fresh salad with romaine lettuce and Caesar dressing.',
  ARRAY['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
  'Toss ingredients together and serve chilled.',
  2,
  4,
  15
),
(
  'Turkey Sandwich',
  'Lunch',
  'https://www.seriouseats.com/thmb/97w7oMXdTDMWCCuuDoGqiz5Rmv0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20191010-leftover-turkey-reuben-sandwich-vicky-wasik-hero-a7f18588174f4a789d3430abf814ca38.jpg',
  'A hearty sandwich with turkey and veggies.',
  ARRAY['Turkey', 'Bread', 'Lettuce', 'Tomato', 'Mayonnaise'],
  'Layer ingredients between slices of bread.',
  1,
  4,
  10
),
(
  'Quinoa Bowl',
  'Lunch',
  'https://images.themodernproper.com/production/posts/2020/QuinoaBowl_4.jpg?w=800&q=82&auto=format&fit=crop&dm=1737605526&s=c617498b670834babd96fbdcd128e1b4',
  'Nutritious quinoa bowl with vegetables and dressing.',
  ARRAY['Quinoa', 'Chickpeas', 'Cucumber', 'Feta', 'Olive Oil'],
  'Cook quinoa, mix with other ingredients, drizzle dressing.',
  2,
  5,
  30
),
(
  'Tomato Soup',
  'Lunch',
  'https://www.allrecipes.com/thmb/qAepi_kEfeNzEjm4TtdMDHMeHnE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/277311spicy-fresh-tomato-soupFranceC4x3-56454ad082214f33960f62665fc8c169.jpg',
  'Warm, comforting tomato soup served with bread.',
  ARRAY['Tomatoes', 'Onion', 'Garlic', 'Basil', 'Cream'],
  'Cook tomatoes and veggies, blend until smooth.',
  4,
  4,
  25
),
(
  'Sushi Rolls',
  'Lunch',
  'https://www.allrecipes.com/thmb/P0zUzOzkJGTm9iDvMnzdZ1ua_T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg',
  'Delicious sushi rolls with fresh ingredients.',
  ARRAY['Sushi Rice', 'Nori', 'Fish', 'Vegetables', 'Soy Sauce'],
  'Roll ingredients in nori and slice.',
  6,
  5,
  40
),(
  'Spaghetti Carbonara',
  'Dinner',
  'https://www.allrecipes.com/thmb/CKRPG_da4wLz3j0pYv0e2jDdF6A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4499842-257380-AR-spaghetti-alla-carbonara-tradizionali-buckwheat-queen-4x3-eb4e48956fbd4277adcc3556e3bf6ecc.jpg',
  'A classic Italian pasta dish with a creamy sauce.',
  ARRAY['Spaghetti', 'Eggs', 'Parmesan Cheese', 'Pancetta', 'Black Pepper'],
  'Cook pasta, mix with eggs and cheese, add pancetta.',
  4,
  5,
  30
),
(
  'Grilled Salmon',
  'Dinner',
  'https://www.allrecipes.com/thmb/S9CtWJQki8yNesfmTPt8tCDl6uo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg',
  'Perfectly grilled salmon served with vegetables.',
  ARRAY['Salmon', 'Olive Oil', 'Lemon', 'Herbs', 'Salt'],
  'Marinate salmon, grill until cooked through.',
  2,
  5,
  25
),
(
  'Beef Stir-Fry',
  'Dinner',
  'https://www.allrecipes.com/thmb/InZbAAssBhhPBPPqVhexfaK6sA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/M7014953_JD_11856-4x3-1-0d0cefed5bea4c4ba04bee3ff63c439a.jpg',
  'Quick and flavorful beef stir-fry with vegetables.',
  ARRAY['Beef', 'Bell Peppers', 'Broccoli', 'Soy Sauce', 'Garlic'],
  'Stir-fry beef and veggies in a hot pan.',
  4,
  4,
  20
),
(
  'Vegetable Curry',
  'Dinner',
  'https://www.allrecipes.com/thmb/djEkHAUHBflfrzoCLPeAbn0a0oc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13982-quick-and-easy-vegetable-curry-VAT-001-4x3-6a77fe207b71496da15bee83b5db22f9.jpg',
  'A rich and aromatic vegetable curry.',
  ARRAY['Mixed Vegetables', 'Coconut Milk', 'Curry Paste', 'Rice'],
  'Cook vegetables in coconut milk with curry paste.',
  4,
  5,
  35
),
(
  'Chicken Tacos',
  'Dinner',
  'https://www.allrecipes.com/thmb/nEXud4i-ZmJQmW2B_X4BDay06ZI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/217890-ranch-chicken-tacos-VAT-001-4x3-26519e4dc43242b0b5c4ae09178511c5.jpg',
  'Flavorful chicken tacos topped with fresh ingredients.',
  ARRAY['Chicken', 'Taco Shells', 'Lettuce', 'Tomato', 'Cheese'],
  'Cook chicken, fill taco shells, and top as desired.',
  3,
  5,
  15
)
(
  'Spaghetti Aglio e Olio',
  'Dinner',
  'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8b24',
  'Simple Italian pasta dish.',
  ARRAY['Spaghetti', 'Garlic', 'Olive Oil', 'Chili Flakes'],
  'Cook pasta, sauté garlic, mix together.'
);
