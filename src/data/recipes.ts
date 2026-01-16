export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
    image: '/images/carbonara.jpg',
    category: 'italian',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale',
      '4 large eggs',
      '100g Pecorino Romano cheese, grated',
      'Black pepper to taste',
      'Salt for pasta water'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
      'While pasta cooks, cut pancetta into small cubes and fry in a large pan until crispy.',
      'In a bowl, whisk together eggs and grated cheese.',
      'Drain pasta, reserving 1 cup of pasta water.',
      'Add hot pasta to the pan with pancetta, remove from heat.',
      'Quickly stir in egg mixture, adding pasta water as needed to create a creamy sauce.',
      'Season with black pepper and serve immediately.'
    ],
    tags: ['Italian', 'Pasta', 'Quick', 'Comfort Food']
  },
  {
    id: '2',
    title: 'Chicken Tikka Masala',
    description: 'Creamy and flavorful Indian curry with tender chicken',
    image: '/images/tikka-masala.jpg',
    category: 'indian',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '800g chicken breast, cubed',
      '1 cup yogurt',
      '2 tbsp tikka masala spice',
      '400ml coconut cream',
      '400g canned tomatoes',
      '1 onion, diced',
      '4 cloves garlic, minced',
      '2 tbsp ginger, grated',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Marinate chicken in yogurt and half the tikka masala spice for at least 30 minutes.',
      'Heat oil in a large pan and cook marinated chicken until browned. Set aside.',
      'In the same pan, sauté onion until soft, then add garlic and ginger.',
      'Add remaining spices and cook for 1 minute until fragrant.',
      'Add canned tomatoes and simmer for 10 minutes.',
      'Stir in coconut cream and return chicken to the pan.',
      'Simmer for 15-20 minutes until chicken is cooked through.',
      'Garnish with fresh cilantro and serve with rice or naan.'
    ],
    tags: ['Indian', 'Curry', 'Spicy', 'Main Course']
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies with gooey chocolate chips',
    image: '/images/cookies.jpg',
    category: 'desserts',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix flour, baking soda, and salt in a bowl.',
      'In another bowl, beat butter and both sugars until creamy.',
      'Add eggs and vanilla to butter mixture and beat well.',
      'Gradually stir in flour mixture.',
      'Fold in chocolate chips.',
      'Drop rounded tablespoons of dough onto ungreased baking sheets.',
      'Bake for 9-11 minutes or until golden brown.',
      'Cool on baking sheet for 2 minutes before transferring to wire rack.'
    ],
    tags: ['Dessert', 'Baking', 'Sweet', 'Kids Favorite']
  },
  {
    id: '4',
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta and olives',
    image: '/images/greek-salad.jpg',
    category: 'salads',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '4 large tomatoes, cut into wedges',
      '1 cucumber, sliced',
      '1 red onion, thinly sliced',
      '1 green bell pepper, chopped',
      '200g feta cheese, cubed',
      '1 cup Kalamata olives',
      '1/4 cup olive oil',
      '2 tbsp red wine vinegar',
      '1 tsp dried oregano',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Combine tomatoes, cucumber, onion, and bell pepper in a large bowl.',
      'Add feta cheese and olives.',
      'In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.',
      'Pour dressing over salad and toss gently.',
      'Let sit for 10 minutes before serving to allow flavors to meld.',
      'Serve at room temperature or chilled.'
    ],
    tags: ['Salad', 'Healthy', 'Vegetarian', 'Mediterranean', 'No Cook']
  },
  {
    id: '5',
    title: 'Beef Tacos',
    description: 'Delicious Mexican tacos with seasoned ground beef',
    image: '/images/tacos.jpg',
    category: 'mexican',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '500g ground beef',
      '1 packet taco seasoning',
      '8 taco shells',
      '1 cup shredded lettuce',
      '1 cup diced tomatoes',
      '1 cup shredded cheese',
      '1/2 cup sour cream',
      'Salsa for serving'
    ],
    instructions: [
      'Brown ground beef in a large skillet over medium-high heat.',
      'Drain excess fat and add taco seasoning with water according to package directions.',
      'Simmer for 5 minutes until thickened.',
      'Warm taco shells according to package directions.',
      'Fill each shell with seasoned beef.',
      'Top with lettuce, tomatoes, cheese, and sour cream.',
      'Serve with salsa on the side.'
    ],
    tags: ['Mexican', 'Quick', 'Family Friendly', 'Beef']
  },
  {
    id: '6',
    title: 'Caesar Salad',
    description: 'Classic Caesar salad with homemade dressing and croutons',
    image: '/images/caesar-salad.jpg',
    category: 'salads',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 large romaine lettuce head, chopped',
      '1/2 cup Caesar dressing',
      '1/2 cup parmesan cheese, shaved',
      '2 cups croutons',
      '2 anchovy fillets (optional)',
      '2 cloves garlic',
      '1 egg yolk',
      '2 tbsp lemon juice',
      '1/2 cup olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'For homemade dressing: blend garlic, anchovies, egg yolk, and lemon juice.',
      'Slowly drizzle in olive oil while blending until emulsified.',
      'Season with salt and pepper.',
      'Toss chopped romaine with dressing.',
      'Top with parmesan shavings and croutons.',
      'Serve immediately.'
    ],
    tags: ['Salad', 'Classic', 'Vegetarian Option']
  }
];