import { recipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';

export default function RecipesPage() {
  return (
    <main className="container">
      <section className="page-header">
        <h1>All Recipes</h1>
        <p>Browse our complete collection of delicious recipes</p>
      </section>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}