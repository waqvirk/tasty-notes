"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function saveRecipe(recipeId: number) {
  await db`
    INSERT INTO cookbook (recipe_id)
    VALUES (${recipeId})
    ON CONFLICT DO NOTHING;
  `;

  revalidatePath("/recipes");
  revalidatePath(`/recipes/${recipeId}`);

}

export async function removeRecipe(recipeId: number) {
  await db`
    DELETE FROM cookbook
    WHERE recipe_id = ${recipeId}
  `;

  revalidatePath("/recipes");
  revalidatePath(`/recipes/${recipeId}`);
}


export async function addNote(cookbookId: number, content: string) {
  const result = await db`
    INSERT INTO cookbook_notes (cookbook_id, content)
    VALUES (${cookbookId}, ${content})
    RETURNING id, content
  `;

  return result[0];
}

export async function updateNote(id: number, content: string) {
  await db`
    UPDATE cookbook_notes
    SET content = ${content}, updated_at = NOW()
    WHERE id = ${id};
  `;
  revalidatePath(`/recipes/${id}`);
}

export async function deleteNote(id: number) {
  await db`
    DELETE FROM cookbook_notes WHERE id = ${id};
  `;
  revalidatePath(`/recipes/${id}`);
}
