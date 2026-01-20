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
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="recipe-meta">
            <span>📖 {recipeCount} Recipes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}