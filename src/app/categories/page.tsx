import CategoryCard from "@/components/categoryCard";
import { getCategories } from "@/lib/categories";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Categories</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            description={category.description}
            recipeCount={category.recipeCount}
          />
        ))}
      </div>
    </main>
  );
}
