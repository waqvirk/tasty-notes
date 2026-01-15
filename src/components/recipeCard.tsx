export default function RecipeCard({ recipe }) {
  return (
    <div className="p-4 border rounded">
      <h2>{recipe.title}</h2>
    </div>
  );
}
