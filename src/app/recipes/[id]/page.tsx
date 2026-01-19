import Image from "next/image";

const testRecipe = {
  id: "1",
  category: "Italian",
  title: "Spaghetti Carbonara",
  photos: "/spaghetti carbonara.jpg",
  description: "Classic Italian pasta dish",
  time: "30 Min",
  servings: "4 Portiomen",
  steps: ["Cook pasta", "Mix eggs", "Combine!"],
  recipeId: "test-1",
  notes: "Delicious!"
};

export default function RecipeDetail({ params }: { params: { id: string } }) {
  // For now using testRecipe, you can fetch by params.id later
  const recipe = testRecipe;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Recipes</h1>
      
      <section className="recipe-section">
        <div className="container">
          <h3>All Recipes</h3>
          <div className="recipe-grid">
            <div className="recipe-card">
              <div className="recipe-card-image">
                <Image
                  src={recipe.photos}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="recipe-card-content">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                  <span>⏱️ {recipe.time}</span>
                  <span>👥 {recipe.servings}</span>
                  <span>⭐ 4.5</span>
                </div>
                <p>{recipe.description}</p>
                <div>
                  <h4>Steps:</h4>
                  <ul>
                    {recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
                <p><strong>Notes:</strong> {recipe.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}