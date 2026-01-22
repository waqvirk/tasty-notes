export interface Recipe {
  id: string;
  title: string;
  category: string;
  photo: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
  servings?: number;
  rating?: number;
  cooking_time_minutes?: number;
}

export interface Category {
  name: string;
  image: string;
  description: string;
  recipeCount: number;
}

export interface SavedRecipe
{
  id: string
  category: string
  title: string
  photo: string
  recipeId: string
  notes: string
}
