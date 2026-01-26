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
        <div className="recipe-card-image" style={{ height: "300px" }}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div className="recipe-card-content" style={{ textAlign: "center", padding: "1.5rem" }}>
          <h3 className="font-bold text-gray-900 text-xl mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="recipe-meta" style={{ justifyContent: "center" }}>
            <span>📖 {recipeCount} Recipes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}