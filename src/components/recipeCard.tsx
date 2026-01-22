import Link from "next/link";
import Image from "next/image";

type Recipe = {
  id: number;
  title: string;
  category: string;
  photo: string | null;
  cooking_time_minutes: number;
  servings: number;
  rating: number;
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="card bg-base-100 shadow hover:shadow-xl transition-shadow cursor-pointer">
        {recipe.photo && (
          <figure className="h-48 overflow-hidden">
            <img 
              src={recipe.photo} 
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </figure>
        )}

        <div className="card-body">
          <h3 className="card-title text-lg">{recipe.title}</h3>
          
          <div className="flex gap-3 text-sm opacity-70 mt-2">
            <span>⏱ {recipe.cooking_time_minutes} min</span>
            <span>👥 {recipe.servings}</span>
            <span>⭐ {recipe.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}