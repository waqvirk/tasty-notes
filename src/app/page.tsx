export default function Home() {
  const testRecipe = {
    id: "1",
    category: "Italian",
    title: "Spaghetti Carbonara",
    photo: "",
    description: "Classic Italian pasta dish",
    ingredients: ["pasta", "eggs", "bacon"],
    steps: ["Cook pasta", "Mix eggs", "Combine"],
    recipeId: "test-1",
    notes: "Delicious!"
  };

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Tasty Notes 📖</h1>
      <p className="text-gray-600">Your digital cookbook for saving recipes and notes.</p>
      
      <button className="btn btn-accent">
        Explore Recipes
      </button>

      <section className="recipe-section">
        <div className="container">
          <h2>Featured Recipes</h2>
          <div className="recipe-grid">
            <div className="recipe-card">
              <div className="recipe-card-image">
                [Image]
              </div>
              <div className="recipe-card-content">
                <h3>{testRecipe.title}</h3>
                <div className="recipe-meta">
                  <span>⏱ 30 Min</span>
                  <span>👤 4 Servings</span>
                  <span>⭐ 4.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}