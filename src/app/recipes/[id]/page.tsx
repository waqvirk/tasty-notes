import Image from "next/image";
import { getRecipeById } from "@/lib/recipes";
import { notFound } from "next/navigation";
import { isRecipeSaved } from "@/lib/cookbook";
import SaveRecipeButton from "@/components/SaveRecipeButton";
import RecipeNotes from "@/components/RecipeNotes";
import { db } from "@/lib/db";

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipeId = parseInt(id);

  if (isNaN(recipeId)) notFound();

  const recipe = await getRecipeById(recipeId);
  if (!recipe) notFound();

  const saved = await isRecipeSaved(recipeId);

  const cookbookEntry = await db`SELECT id FROM cookbook WHERE recipe_id = ${recipeId} LIMIT 1;`;
  const cookbookId = cookbookEntry[0]?.id || null;

  let initialNotes: any[] = [];
  if (cookbookId) {
    const notesResult = await db`
      SELECT * FROM cookbook_notes
      WHERE cookbook_id = ${cookbookId}
      ORDER BY created_at DESC
    `;
    initialNotes = notesResult;
  }

  return (
    <main className="min-h-screen bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {recipe.title}
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Image, Details, and Button */}
          <aside className="space-y-6">
            {/* Image */}
            {recipe.photo && (
              <div className="lg:sticky lg:top-12">
                <div className="relative aspect-4/3 lg:aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={recipe.photo}
                    alt={recipe.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Recipe Details - Centered under image */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                `⏱️ ${recipe.cooking_time_minutes} min`,
                `👥 ${recipe.servings} servings`,
                `⭐ ${recipe.rating}`,
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-50 border border-gray-200 text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Save Button - Centered under details */}
            <div className="flex justify-center">
              <SaveRecipeButton recipeId={recipe.id} isSaved={saved} />
            </div>
          </aside>

          {/* Right Side - Content */}
          <section className="space-y-6">
            
            {/* About */}
            {recipe.description && (
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">About this recipe</h2>
                <p className="text-base leading-relaxed text-gray-700">{recipe.description}</p>
              </div>
            )}

            {/* Ingredients */}
            {recipe.ingredients?.length > 0 && (
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Ingredients</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {recipe.ingredients.map((ingredient: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 items-start p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-orange-500 text-white font-bold flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 text-base leading-snug">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructions */}
            {recipe.instructions && (
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Instructions</h2>
                <div className="space-y-3">
                  {recipe.instructions
                    .split("\n")
                    .filter(Boolean)
                    .map((step: string, i: number) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start p-4 rounded-xl bg-gray-50"
                      >
                        <span className="font-bold text-orange-600 text-base">{i + 1}.</span>
                        <p className="text-base leading-relaxed text-gray-800">{step}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Notes */}
            {cookbookId && (
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
                <RecipeNotes cookbookId={cookbookId} initialNotes={initialNotes} />
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}