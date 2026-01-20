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
      </div>
    </div>
  );
}
