import { getCategoryCounts } from "@/lib/recipes";
import { categoryMeta } from "@/data/categories";
import type { Category } from "@/types/models";

export async function getCategories(): Promise<Category[]> {
  const counts = await getCategoryCounts();

  return counts.map((item) => {
    const meta = categoryMeta[item.name.toLowerCase()];

    return {
      name: item.name,
      recipeCount: item.recipeCount,
      image: meta?.image ?? "/images/categories/default.jpg",
      description: meta?.description ?? "Recipes in this category",
    };
  });
}
