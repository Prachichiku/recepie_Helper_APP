// Import RecipeCard component (used to display each recipe card)
import RecipeCard from "./RecipeCard";

// Import PropTypes (for checking that props have correct types)
import PropTypes from "prop-types";

// RecipeList component: shows a list of recipe cards
const RecipeList = ({ recipes }) => {
  // If there are no recipes (empty or undefined), show a message
  if (!recipes || recipes.length === 0) {
    return <p className="p-4">No recipes found. Try different ingredients.</p>;
  }

  // Otherwise, display recipes
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* Loop through recipes array and render RecipeCard for each recipe */}
      {recipes.map((r) => (
        // Each card must have a unique key → use recipe id
        <RecipeCard key={r.idMeal} recipe={r} />
      ))}
    </div>
  );
};

// ✅ Props validation to make sure "recipes" has correct structure
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    // Each item inside recipes must be an object with:
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired,      // unique recipe ID
      strMeal: PropTypes.string.isRequired,     // recipe name
      strMealThumb: PropTypes.string.isRequired // recipe image
    })
  ),
};

// Export component so it can be used in other files
export default RecipeList;
