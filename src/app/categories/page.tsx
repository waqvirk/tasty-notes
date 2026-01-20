import CategoryCard from "@/components/categoryCard";
import categories from "@/data/categories";

export default function Categories() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Categories</h1>
      
      <section className="recipe-section">
        <div className="container">
          <h3>Browse by Category</h3>
          <div className="recipe-grid">
            {categories.map((category) => (
              <CategoryCard 
                key={category.name}
                name={category.name}
                image={category.image}
                recipeCount={category.recipeCount}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}