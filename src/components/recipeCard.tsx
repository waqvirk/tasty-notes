import Link from 'next/link';
import type { Recipe } from '@/data/recipes';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="recipe-card">
      <div className="recipe-image">[Image: {recipe.image}]</div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span>⏱️ {recipe.prepTime}</span>
          <span>🍽️ {recipe.servings} servings</span>
        </div>
      </div>
    </Link>
  );
}