import Link from "next/link";
import RecipeCard from "@/components/recipeCard";
import { getAllRecipes } from "@/lib/recipes";
import Image from "next/image";

interface Recipe {
  id: string;
  category: string;
  title: string;
  photo: string;
  description?: string;
}

export default async function Home() {
  const recipes: Recipe[] = (await getAllRecipes()) ?? [];
  
  
  const featuredRecipes = recipes.slice(0, 6);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side - Image */}
          <div className="hero-image-side">
            <Image
              src="/hero-recipe.jpg"
              alt="Featured Recipe"
              width={700}
              height={500}
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="hero-content-side">
            <h1 className="hero-title">Tasty Notes 📖</h1>
            <p className="hero-description">
              Your digital cookbook for saving recipes and notes.
            </p>
            <Link href="/recipes">
              <button className="hero-button">
                Explore Recipes →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="recipe-section">
        <div className="container">
          <h2>Featured Recipes</h2>
          <div className="recipe-grid">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}