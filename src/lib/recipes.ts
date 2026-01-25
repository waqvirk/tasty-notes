import { db } from "./db";
import type { Recipe } from "../types/models";

export async function getAllRecipes() {
  const result = await db.query(
    "SELECT id, title, category, photo, description, ingredients, instructions, created_at, servings, rating, cooking_time_minutes FROM recipes"
  );

  console.log("DB RESULT:", result);

  return result;
}


export async function getCategoryCounts(): Promise<
  { name: string; recipeCount: number }[]
> {
  const rows = await db.query(`
    SELECT
      category AS name,
      COUNT(*)::int AS "recipeCount"
    FROM recipes
    GROUP BY category
    ORDER BY name
  `);

  return rows;
}



export async function getRecipeById(id: number) {
  console.log("🔍 Fetching recipe with ID:", id);
  console.log("🔍 ID type:", typeof id);
  
  const result = await db.query(
    `
    SELECT
      id,
      title,
      category,
      photo,
      description,
      ingredients,
      instructions,
      servings,
      rating,
      cooking_time_minutes
    FROM recipes
    WHERE id = $1
    `,
    [id]
  );

  console.log("📊 Query result length:", result.length);
  console.log("📊 Full result:", JSON.stringify(result, null, 2));
  console.log("📦 First recipe:", result[0]);

  return result[0] ?? null;
}
export async function searchRecipesByTitle(searchTerm: string) {
  if (!searchTerm.trim()) {
    return [];
  }

  const result = await db.query(
    `
    SELECT id, title, category, photo, description
    FROM recipes
    WHERE LOWER(title) LIKE LOWER($1)
    ORDER BY title
    LIMIT 10
    `,
    [`%${searchTerm}%`]
  );

  return result;
}