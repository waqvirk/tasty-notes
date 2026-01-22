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
  const result = await db.query(
    `
    SELECT
      id,
      title,
      category,
      photo
    FROM recipes
    WHERE id = $1
  `,
    [id]
  );

  return result?? null;
}