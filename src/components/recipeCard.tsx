import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="recipe-card">
        <div className="recipe-card-image">
          <Image
            src={recipe.photos}            // e.g. "/spaghetti carbonara.jpg"
            alt={recipe.title}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="recipe-card-content">
          <h3>{recipe.title}</h3>
          <div className="recipe-meta">
            <span>⏱ {recipe.time}</span>
            <span>👥 {recipe.servings}</span>
            <span>⭐ 4.5</span>
          </div>
        </div>
      </div>
    </Link>
  );
}