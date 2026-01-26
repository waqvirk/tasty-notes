import { db } from "./db";

export async function getCookbookRecipes() {
  const result = await db`
    SELECT r.*
    FROM recipes r
    INNER JOIN cookbook c
      ON c.recipe_id = r.id
    ORDER BY c.created_at DESC;
  `;

  return result;
}

export async function getSavedRecipeIds() {
  const result = await db`
    SELECT recipe_id FROM cookbook
  `;

  return result.map(r => r.recipe_id);
}

export async function isRecipeSaved(recipeId: number) {
  const result = await db`
    SELECT 1
    FROM cookbook
    WHERE recipe_id = ${recipeId}
    LIMIT 1
  `;

  return result.length > 0;
}

export async function getNotes(cookbookId: number) {
  const result = await db`
    SELECT * FROM cookbook_notes
    WHERE cookbook_id = ${cookbookId}
    ORDER BY created_at DESC
  `;
  return result;
}

export async function addNote(cookbookId: number, content: string) {
  const result = await db`
    INSERT INTO cookbook_notes (cookbook_id, content)
    VALUES (${cookbookId}, ${content})
    RETURNING *;
  `;
  return result[0];
}

export async function updateNote(id: number, content: string) {
  const result = await db`
    UPDATE cookbook_notes
    SET content = ${content}, updated_at = NOW()
    WHERE id = ${id}
    RETURNING *;
  `;
  return result[0];
}

export async function deleteNote(id: number) {
  await db`
    DELETE FROM cookbook_notes WHERE id = ${id};
  `;
}
