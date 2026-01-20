import Link from "next/link";
import Image from "next/image";

type Recipe = {
  id: number;
  title: string;
  category: string;
  photo: string | null;
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card bg-base-100 shadow">
      {recipe.photo && (
        <figure>
          <img src={recipe.photo} alt={recipe.title} />
        </figure>
      )}

      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>
        <p className="text-sm opacity-70">{recipe.category}</p>
        <p className="text-sm opacity-70">{recipe.rating}</p>
      </div>
    </div>
  );
}

// export default function RecipeCard({ recipe }: { recipe: any }) {
//   return (
//     <Link href={`/recipes/${recipe.id}`}>
//       <div className="recipe-card">
//         <div className="recipe-card-image">
//           <Image
//             src={recipe.photos}           
//             alt={recipe.title}
//             width={300}
//             height={200}
//             style={{ objectFit: "cover" }}
//           />
//         </div>

//         <div className="recipe-card-content">
//           <h3>{recipe.title}</h3>
//           <div className="recipe-meta">
//             <span>⏱ {recipe.time}</span>
//             <span>👥 {recipe.servings}</span>
//             <span>⭐ 4.5</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );