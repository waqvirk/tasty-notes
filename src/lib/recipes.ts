import { db } from "./db";

export async function getAllRecipes() {
  const result = await db.query(
    "SELECT id, title, category, photo FROM recipes"
  );

  console.log("DB RESULT:", result);

  return result;
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
