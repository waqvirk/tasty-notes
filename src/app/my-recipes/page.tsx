
import { getCookbookRecipes } from "@/lib/cookbook";
import RecipeCard from "@/components/recipeCard";
import type { Recipe } from "@/types/models";

export default async function MyRecipes() {
  const recipesFromDb = await getCookbookRecipes();
  const recipes = recipesFromDb.map(r => ({
  id: r.id,
  title: r.title,
  category: r.category,
  photo: r.photo ?? null,
  cooking_time_minutes: r.cooking_time_minutes ?? 0,
  servings: r.servings ?? 1,
  rating: Number(r.rating ?? 0),
}));

return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Cookbook</h1>

      {recipes.length === 0 ? (
        <p className="text-gray-500">
          You haven’t saved any recipes yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </main>
  );
}
