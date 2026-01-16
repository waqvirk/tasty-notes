import { recipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to Tasty Notes</h1>
        <p className="hero-subtitle">
          Discover, create, and share amazing recipes from around the world
        </p>
        <button className="cta-button">Explore Recipes</button>
      </section>

      {/* Featured Recipes */}
      <section className="featured-section">
        <h2 className="section-title">Featured Recipes</h2>
        <div className="recipe-grid">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="category-section">
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-grid">
          <div className="category-card">Italian</div>
          <div className="category-card">Indian</div>
          <div className="category-card">Mexican</div>
          <div className="category-card">Desserts</div>
        </div>
      </section>
    </div>
  );
}