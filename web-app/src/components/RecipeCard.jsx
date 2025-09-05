import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded shadow-md p-2 w-60">
      {/* Recipe Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded w-full h-40 object-cover"
      />

      {/* Recipe Title */}
      <h3 className="text-lg font-bold mt-2">{recipe.strMeal}</h3>

      {/* Link to Details Page */}
      <Link
        to={`/recipe/${recipe.idMeal}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

//  Props validation
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
