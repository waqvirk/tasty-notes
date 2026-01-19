import Categories from "@/app/categories/page"

Recipe
{
  id: string
  category: string
  title: string
  photo: string
  description: string
  ingredients: string[]
  steps: string[]
}

SavedRecipe
{
  id: string
  category: string
  title: string
  photo: string
  recipeId: string
  notes: string
}
