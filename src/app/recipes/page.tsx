import { getAllRecipes, getRecipesByCategory } from "@/lib/recipes";
import { getSavedRecipeIds } from "@/lib/cookbook";
import RecipeCard from "@/components/recipeCard";

interface Recipe {
  id: string;
  category: string;
  title: string;
  photo: string;
  description?: string;
}

interface RecipesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const params = await searchParams;
  const category = params.category;
  
  const recipes: Recipe[] = category 
    ? (await getRecipesByCategory(category)) ?? []
    : (await getAllRecipes()) ?? [];
  
  const savedIds = await getSavedRecipeIds();

  console.log("RECIPES:", recipes);
  console.log("CATEGORY FILTER:", category);

  const pageTitle = category 
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes`
    : "All Recipes";

  if (recipes.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        <p className="text-gray-600">No recipes found in this category.</p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} isSaved={savedIds.includes(recipe.id)}/>
        ))}
      </div>
    </div>
  );
}