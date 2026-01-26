import Image from "next/image";
import { getRecipeById } from "@/lib/recipes";
import { notFound } from "next/navigation";

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50/30 to-yellow-50 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-14 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
            {recipe.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              `⏱️ ${recipe.cooking_time_minutes} min`,
              `👥 ${recipe.servings} servings`,
              `⭐ ${recipe.rating}/5`,
            ].map((item, i) => (
              <span
                key={i}
                className="px-5 py-3 rounded-2xl text-base sm:text-lg font-semibold
                  bg-white/70 backdrop-blur shadow-lg
                  border border-orange-200/60
                  hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          {recipe.photo && (
            <aside className="lg:sticky lg:top-12">
              <div className="relative aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src={recipe.photo}
                  alt={recipe.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </aside>
          )}

          {/* Content */}
          <section className="space-y-12 lg:space-y-16">
            {/* Description */}
            {recipe.description && (
              <div className="rounded-3xl bg-white/75 backdrop-blur p-8 sm:p-10 shadow-xl border border-white/60">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  About this recipe
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                  {recipe.description}
                </p>
              </div>
            )}

            {/* Ingredients */}
            {recipe.ingredients?.length > 0 && (
              <div className="rounded-3xl bg-white/75 backdrop-blur p-8 sm:p-10 shadow-xl border border-white/60">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Ingredients
                </h2>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="group flex gap-4 items-start p-4 rounded-2xl
                        bg-gradient-to-r from-orange-50 to-yellow-50
                        border border-orange-100
                        hover:from-orange-100 hover:border-orange-200 hover:shadow-lg
                        transition"
                    >
                      <span
                        className="flex-shrink-0 w-10 h-10 rounded-xl
                          bg-gradient-to-br from-orange-500 to-red-500
                          text-white font-bold flex items-center justify-center
                          shadow group-hover:scale-110 transition"
                      >
                        {index + 1}
                      </span>
                      <span className="text-gray-800 text-lg leading-snug">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructions */}
            {recipe.instructions && (
              <div className="rounded-3xl bg-white/75 backdrop-blur p-8 sm:p-10 shadow-xl border border-white/60">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Instructions
                </h2>

                <div className="space-y-4">
                  {recipe.instructions
                    .split("\n")
                    .filter(Boolean)
                    .map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start p-5 rounded-2xl
                          bg-gradient-to-r from-orange-50/70 to-yellow-50/70
                          border border-orange-100"
                      >
                        <span className="font-bold text-orange-600 text-lg">
                          {i + 1}.
                        </span>
                        <p className="text-lg leading-relaxed text-gray-800">
                          {step}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
