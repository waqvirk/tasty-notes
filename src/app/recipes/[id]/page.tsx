import Image from "next/image";
import { getRecipeById } from "@/lib/recipes";
import { notFound } from "next/navigation";

export default async function RecipeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipeId = parseInt(id);
  
  if (isNaN(recipeId)) {
    notFound();
  }

  const recipe = await getRecipeById(recipeId);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Recipes</h1>
      
      <section className="recipe-section">
        <div className="container">
          <h3>All Recipes</h3>
          <div className="recipe-grid">
            <div className="recipe-card">
              <div className="recipe-card-image">
                {recipe.photo && (
                  <Image
                    src={recipe.photo}
                    alt={recipe.title}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className="recipe-card-content">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                  <span>⏱️ {recipe.cooking_time_minutes} Min</span>
                  <span>👥 {recipe.servings} Portions</span>
                  <span>⭐ {recipe.rating}</span>
                </div>
                <p>{recipe.description}</p>
                {recipe.instructions && (
                  <div>
                    <h4>Steps:</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{recipe.instructions}</p>
                  </div>
                )}
                {recipe.ingredients && recipe.ingredients.length > 0 && (
                  <div>
                    <h4>Ingredients:</h4>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}