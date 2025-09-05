// Import React hooks and tools
import { useEffect, useState } from "react";   // useEffect → side effects, useState → state
import { useParams } from "react-router-dom"; // useParams → get route parameters (like :id from URL)
import { fetchRecipeDetails } from "../api/recipeApi"; // custom API function to fetch recipe details


// Component that shows details of a single recipe
const RecipeDetails = () => {
  // Extract the "id" from the URL (example: /recipe/52772 → id = 52772)
  const { id } = useParams();

  // State to store the recipe details (null until fetched)
  const [recipe, setRecipe] = useState(null);


    // useEffect runs whenever 'id' changes (so if user visits a different recipe, it fetches new data)
  useEffect(() => {
    // async function to get recipe data
    const getRecipe = async () => {
      // call API function with recipe id
      const data = await fetchRecipeDetails(id);

      // API returns an object with meals array, so we take the first meal
      setRecipe(data.meals[0]);
    };

    getRecipe(); // call the function
  }, [id]); // dependency array → re-run if id changes

    // If recipe is still null (loading state), show "Loading..."
  if (!recipe) return <p className="p-4">Loading...</p>;


    // Render the recipe details once loaded
  return (
    <div className="p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>

      {/* Recipe image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-80 rounded mt-2"
      />

      {/* Metadata */}
      <p className="mt-4"><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>

      {/* Instructions */}
      <h3 className="mt-4 font-semibold">Instructions:</h3>
      <p className="mt-2">{recipe.strInstructions}</p>
    </div>
  );
};

// Export so it can be used in routing (App.jsx or Router.js)
export default RecipeDetails;

