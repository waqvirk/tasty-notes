import Image from "next/image";

export default function Recipes() {
  const testRecipe = {
    id: "1",
    category: "Italian",
    title: "Spaghetti Carbonara",
    photo: "/Spaghetti carbonara.jpg",
    description: "Classic Italian pasta dish",
    ingredients: ["pasta", "eggs", "bacon"],
    steps: ["Cook pasta", "Mix eggs", "Combine"],
    recipeId: "test-1",
    notes: "Delicious!"
  };

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Recipes</h1>
      
      <section className="recipe-section">
        <div className="container">
          <h1>All Recipes</h1>
          <div className="recipe-grid">
            <div className="recipe-card">
              <div className="recipe-card-image">
                <Image 
                  src={testRecipe.photo}
                  alt={testRecipe.title}
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
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