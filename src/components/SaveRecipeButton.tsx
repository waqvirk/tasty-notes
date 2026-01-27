"use client";

import { useTransition } from "react";
import { saveRecipe, removeRecipe } from "@/app/recipes/actions";

type Props = {
  recipeId: number;
  isSaved: boolean;
};

export default function SaveRecipeButton({ recipeId, isSaved }: Props) {
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    startTransition(() => {
      if (isSaved) {
        removeRecipe(recipeId);
      } else {
        saveRecipe(recipeId);
      }
    });
  };

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      className={`hero-button ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isSaved ? "★ Saved to Cookbook" : "☆ Save to Cookbook"}
    </button>
  );
}