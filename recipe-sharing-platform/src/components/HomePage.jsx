import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dynamically import the JSON file
    import("../data.json")
      .then((module) => {
        setRecipes(module.default);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load recipes.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading recipes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Latest Recipes</h1>

      {recipes.length === 0 ? (
        <p className="text-gray-600">No recipes available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-2xl"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                  {recipe.summary}
                </p>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                >
                  View Recipe →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
