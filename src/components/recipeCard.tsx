export default function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-image">
        [Bild]
      </div>
      <div className="recipe-card-content">
        <h2>{recipe.title}</h2>
        <div className="recipe-meta">
          <span>⏱ 30 Min</span>
          <span>👤 4 Portionen</span>
          <span>⭐ 4.5</span>
        </div>
      </div>
    </div>
  );
}