import Image from "next/image";
import RecipeCard from "@/components/recipeCard";
import recipes from "@/data/recipes";

export default function Recipes() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Recipes</h1>
      
      <section className="recipe-section">
        <div className="container">
          <h3>All Recipes</h3>
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}