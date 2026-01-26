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
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-full
        text-sm sm:text-base font-semibold transition
        ${isSaved 
          ? "bg-white text-red-700 hover:bg-red-50" 
          : "bg-white text-gray-700 hover:bg-gray-50"
        }
        border border-gray-200 shadow-sm
        ${isPending ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {isSaved ? "★ Saved to Cookbook" : "☆ Save to Cookbook"}
    </button>
  );
}
