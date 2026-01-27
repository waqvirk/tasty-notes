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
        <header className="text-center mb-14 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
            {recipe.title}
          </h1>
          <div className="flex flex-col items-center gap-6">
            <SaveRecipeButton recipeId={recipe.id} isSaved={saved} />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                `⏱️ ${recipe.cooking_time_minutes} min`,
                `👥 ${recipe.servings} servings`,
                `⭐ ${recipe.rating}`,
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-xl text-sm sm:text-base font-medium bg-gray-50 border border-gray-200 text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          {recipe.photo && (
            <aside className="lg:sticky lg:top-12">
              <div className="relative aspect-4/3 lg:aspect-square rounded-4xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src={recipe.photo}
                  alt={recipe.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </aside>
          )}

          {/* Content */}
            <section className="space-y-16">
              
              {/* About */}
              {recipe.description && (
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-md border border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">About this recipe</h2>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700">{recipe.description}</p>
                </div>
              )}

              {/* Ingredients */}
              {recipe.ingredients?.length > 0 && (
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-md border border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ingredients</h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                      <li
                        key={index}
                        className="flex gap-4 items-start p-4 rounded-2xl bg-white hover:shadow-sm transition"
                      >
                        <span className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-red-500 text-white font-bold flex items-center justify-center shadow group-hover:scale-110 transition">
                          {index + 1}
                        </span>
                        <span className="text-gray-800 text-lg leading-snug">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructions */}
              {recipe.instructions && (
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-md border border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Instructions</h2>
                  <div className="space-y-4">
                    {recipe.instructions
                      .split("\n")
                      .filter(Boolean)
                      .map((step: string, i: number) => (
                        <div
                          key={i}
                          className="flex gap-4 items-start p-5 rounded-2xl bg-white shadow-sm"
                        >
                          <span className="font-bold text-orange-600 text-lg">{i + 1}.</span>
                          <p className="text-lg leading-relaxed text-gray-800">{step}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {cookbookId && (
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-md border border-gray-200">
                  <RecipeNotes cookbookId={cookbookId} initialNotes={initialNotes} />
                </div>
              )}
            </section>
        </div>
      </div>
    </main>
  );
}
