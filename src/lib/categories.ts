import { getCategoryCounts } from "@/lib/recipes";
import { categoryMeta } from "@/data/categories";
import type { Category } from "@/types/models";

export async function getCategories(): Promise<Category[]> {
  const counts = await getCategoryCounts();

  
  const categoryOrder = ['breakfast', 'lunch', 'dinner'];

  const categories = counts.map((item) => {
    const meta = categoryMeta[item.name.toLowerCase()];

    return {
      name: item.name,
      recipeCount: item.recipeCount,
      image: meta?.image ?? "/images/categories/default.jpg",
      description: meta?.description ?? "Recipes in this category",
    };
  });

  
  return categories.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.name.toLowerCase());
    const bIndex = categoryOrder.indexOf(b.name.toLowerCase());
    
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    
    if (aIndex !== -1) return -1;
    
    
    if (bIndex !== -1) return 1;
    
    
    return a.name.localeCompare(b.name);
  });
}