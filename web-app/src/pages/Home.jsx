// Import React's useState hook
import { useState } from "react";

// Import the SearchBar component (for typing ingredients)
import SearchBar from "../components/SearchBar";

// Import the RecipeList component (to show results)
import RecipeList from "../components/RecipeList";

// Import API function that fetches recipes by ingredient(s)
import { fetchRecipes } from "../api/recipeApi";

const Home = () => {
  // Create state to hold the list of recipes
  const [recipes, setRecipes] = useState([]);

  // Function to handle search from the SearchBar
  // It calls the API, then updates "recipes" state
  const handleSearch = async (ingredients) => {
    const data = await fetchRecipes(ingredients); // fetch data from API
    setRecipes(data.meals || []); // if meals exist, set them; otherwise set empty array
  };

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-center mt-4">🍴 Recipe Ideas</h1>

      {/* Search bar section - passes handleSearch as a prop */}
      <SearchBar onSearch={handleSearch} />

      {/* Recipe list section - shows all fetched recipes */}
      <RecipeList recipes={recipes} />
    </div>
  );
};

// Export Home so it can be used in App.js (or routes)
export default Home;
