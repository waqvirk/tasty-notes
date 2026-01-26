import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  name: string;
  image: string;
  recipeCount: number;
  description: string;
}

export default function CategoryCard({ name, image, recipeCount, description }: CategoryCardProps) {
  return (
    <Link href={`/recipes?category=${name.toLowerCase()}`}>
      <div>
        <div className="recipe-card">
          <div className="recipe-card-image">
            <Image
              src={image}
              alt={name}
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="recipe-card-content">
            <div className="recipe-meta">
              <span>📖 {recipeCount} Recipes</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-3 text-center">{description}</p>
        <h3 className="font-bold text-gray-900 text-xl mt-1 text-center">{name}</h3>
      </div>
    </Link>
  );
}