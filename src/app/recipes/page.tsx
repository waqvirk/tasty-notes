import { getAllRecipes } from "@/lib/recipes";
import RecipeCard from "@/components/recipeCard";

interface Recipe {
  id: string;
  category: string;
  title: string;
  photo: string;
  description?: string;
}

export default async function RecipesPage() {
  const recipes: Recipe[] = (await getAllRecipes()) ?? [];

  console.log("RECIPES:", recipes);

  if (recipes.length === 0) {
    return <p className="p-4">No recipes found</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )}

// export default function Recipes() {
//   return (
//     <main className="p-8 space-y-4">
//       <h1 className="text-3xl font-bold">Recipes</h1>
      
//       <section className="recipe-section">
//         <div className="container">
//           <h3>All Recipes</h3>
//           <div className="recipe-grid">
//             {recipes.map((recipe) => (
//               <RecipeCard key={recipe.id} recipe={recipe} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }