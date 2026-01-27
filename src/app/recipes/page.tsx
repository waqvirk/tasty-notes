import { getAllRecipes, getRecipesByCategory } from "@/lib/recipes";
import { getSavedRecipeIds } from "@/lib/cookbook";
import RecipeCard from "@/components/recipeCard";

interface RecipesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const params = await searchParams;
  const category = params.category;
  
   const rawRecipes = category
    ? (await getRecipesByCategory(category)) ?? []
    : (await getAllRecipes()) ?? [];

  const recipes = rawRecipes.map((r) => ({
    id: Number(r.id),
    title: r.title,
    category: r.category,
    photo: r.photo ?? null,
    cooking_time_minutes: r.cooking_time_minutes ?? 0,
    servings: r.servings ?? 1,
    rating: Number(r.rating ?? 0),
  }));
  
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
          <RecipeCard key={recipe.id} recipe={recipe}/>
        ))}
      </div>
    </div>
  );
}