// import './app.css'
// import { useState } from "react";

// const App = () => {
//   const [ingredients, setIngredients] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   const fetchRecipes = async (query) => {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
//       );
//       const data = await res.json();
//       setRecipes(data.meals || []);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       setRecipes([]);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 ">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
//         <h1 className="text-2xl font-bold">Smart Recipe Helper</h1>
//         <div className="items">
//           <a href="SearchBar">Home</a>
//           <a href="RecipeCard">Receipe</a>
//         </div>
//         <div className="item">
// <a href="RecipeDetails">About</a>

//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="flex flex-col items-center justify-center text-center p-12 bg-gray-100">
//         <h2 className="text-5xl font-bold text-gray-800 mb-6">
//           🍳 Cook Smart, Eat Healthy
//         </h2>
//         <p className="text-lg text-gray-600 max-w-xl mb-6">
//           Enter your ingredients, and we’ll suggest delicious recipes you can cook in minutes!
//         </p>
//         <div className="flex gap-4">
//           <input
//             type="text"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//             placeholder="Enter ingredients... (e.g. rice, chicken)"
//             className="px-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={() => fetchRecipes(ingredients)}
//             className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//           >
//             Search
//           </button>
//         </div>
//       </header>

//       {/* Recipe Grid */}
//       <section id="recipes" className="p-10 bg-white flex-grow">
//         <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//           Suggested Recipes
//         </h3>

//         {recipes.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No recipes found. Try searching!
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {recipes.map((recipe) => (
//               <div
//                 key={recipe.idMeal}
//                 className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
//               >
//                 <img
//                   src={recipe.strMealThumb}
//                   alt={recipe.strMeal}
//                   className="w-full h-52 object-cover"
//                 />
//                 <div className="p-4">
//                   <h4 className="text-xl font-bold text-gray-700">
//                     {recipe.strMeal}
//                   </h4>
//                   <button
//                     onClick={() =>
//                       window.open(
//                         `https://www.themealdb.com/meal/${recipe.idMeal}`,
//                         "_blank"
//                       )
//                     }
//                     className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                   >
//                     View Recipe
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";
// import "./app.css";

// const App = () => {
//   const [ingredients, setIngredients] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   // Fetch recipes by ingredient
//   const fetchRecipes = async (query) => {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
//       );
//       const data = await res.json();
//       setRecipes(data.meals || []);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       setRecipes([]);
//     }
//   };

//   // Fetch single recipe details by id
//   const fetchRecipeDetails = async (id) => {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//       );
//       const data = await res.json();
//       setSelectedRecipe(data.meals[0]);
//     } catch (error) {
//       console.error("Error fetching recipe details:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
//         <h1 className="text-2xl font-bold">Smart Recipe Helper</h1>
        
//           <div className="a">
//           <div>
//           <a href="#" className="hover:underline">
//             Home
//           </a>
//           </div>
//           <div>
//           <a href="#recipes" className="hover:underline">
//             Recipes
//           </a>
//           </div>
//           <div>
//           <a href="#about" className="hover:underline">
//             About
//           </a>
//           </div>
//           </div>
        
//       </nav>

//       {/* Hero Section */}
//       <header className="flex flex-col items-center justify-center text-center p-6 sm:p-12 bg-gray-100">
//         <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
//           🍳 Cook Smart, Eat Healthy
//         </h2>
//         <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-6">
//           Enter your ingredients, and we’ll suggest delicious recipes you can
//           cook in minutes!
//         </p>
//         <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//           <input
//             type="text"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//             placeholder="Enter ingredients... (e.g. rice, chicken)"
//             className="px-4 py-2 border rounded-lg w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={() => fetchRecipes(ingredients)}
//             className="px-6 py-2 bg-blue-600 text-black font-medium rounded-lg hover:bg-blue-700 transition"
//           >
//             Search
//           </button>
//         </div>
//       </header>

//       {/* Recipe Grid */}
//       <section id="recipes" className="p-6 sm:p-10 bg-white flex-grow">
//         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
//           Suggested Recipes
//         </h3>

//         {recipes.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No recipes found. Try searching!
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//             {recipes.map((recipe) => (
//               <div
//                 key={recipe.idMeal}
//                 className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
//               >
//                 <img
//                   src={recipe.strMealThumb}
//                   alt={recipe.strMeal}
//                   className="w-full h-48 sm:h-52 object-cover"
//                 />
//                 <div className="p-4">
//                   <h4 className="text-lg sm:text-xl font-bold text-gray-700">
//                     {recipe.strMeal}
//                   </h4>
//                   <button
//                     onClick={() => fetchRecipeDetails(recipe.idMeal)}
//                     className="mt-3 px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Recipe Modal */}
//       {selectedRecipe && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={() => setSelectedRecipe(null)}
//               className="absolute top-3 right-3 bg-red-500 text-black px-3 py-1 rounded-lg hover:bg-red-600"
//             >
//               ✖
//             </button>
//             <h2 className="text-2xl font-bold mb-4">
//               {selectedRecipe.strMeal}
//             </h2>
//             <img
//               src={selectedRecipe.strMealThumb}
//               alt={selectedRecipe.strMeal}
//               className="w-full h-60 object-cover rounded-lg mb-4" style={{width:'200px', height:'200px'}}
//             />
//             <p className="text-gray-700 mb-4">
//               <strong>Category:</strong> {selectedRecipe.strCategory} |{" "}
//               <strong>Area:</strong> {selectedRecipe.strArea}
//             </p>
//             <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
//             <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
//               {selectedRecipe.strInstructions}
//             </p>
//             <a
//               href={selectedRecipe.strYoutube}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//             >
//               Watch on YouTube
//             </a>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer
//         id="about"
//         className="bg-blue-600 text-white text-center py-4 mt-6"
//       >
//         <p>© {new Date().getFullYear()} Smart Recipe Helper. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// Importing React hooks for managing state and lifecycle
import { useState, useEffect } from "react";

// Importing global styles
import "./app.css";

// Main component of the app
const App = () => {
  // State variables
  const [ingredients, setIngredients] = useState([]); // stores list of ingredients (first 20)
  const [searchTerm, setSearchTerm] = useState("");   // stores user input from search bar
  const [recipes, setRecipes] = useState([]);         // stores recipes fetched from API
  const [selectedRecipe, setSelectedRecipe] = useState(null); // stores currently selected recipe details

  // ----------------------------------------
  // Fetch ingredients (runs once when page loads)
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        // API call to get all ingredients
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
        const data = await res.json();

        // Take only first 20 ingredients and update state
        setIngredients(data.meals.slice(0, 20));
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []); // [] means it runs only once when component mounts

  // ----------------------------------------
  // Fetch recipes for a given ingredient
  const fetchRecipes = async (ingredient) => {
    try {
      // API call: filter recipes by ingredient
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      // Update recipes state (if no meals found, set to empty array)
      setRecipes(data.meals || []);

      // Smooth scroll to recipes section
      document.getElementById("recipes")?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]); // reset recipes if API fails
    }
  };

  // ----------------------------------------
  // Fetch single recipe details by recipe ID
  const fetchRecipeDetails = async (id) => {
    try {
      // API call: lookup recipe by id
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();

      // Store detailed recipe in state (first meal returned)
      setSelectedRecipe(data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  // ----------------------------------------
  // JSX UI rendering starts here
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      
      {/* ---------------- Navbar ---------------- */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Smart Recipe Helper</h1>
        <div className="flex gap-4">
          {/* Navigation links (scrolls to sections) */}
          <a href="#" className="hover:underline">Home</a>
          <a href="#ingredients" className="hover:underline">Ingredients</a>
          <a href="#recipes" className="hover:underline">Recipes</a>
          <a href="#about" className="hover:underline">About</a>
        </div>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <header className="flex flex-col items-center justify-center text-center p-6 sm:p-12 bg-gray-100">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
          🍳 Cook Smart, Eat Healthy
        </h2>
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-6">
          Browse ingredients and discover delicious recipes easily!
        </p>
        
        {/* Search bar with button */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            value={searchTerm} // controlled input (linked with state)
            onChange={(e) => setSearchTerm(e.target.value)} // update state on change
            placeholder="Search a single ingredient... (e.g. rice)"
            className="px-4 py-2 border rounded-lg w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => fetchRecipes(searchTerm)} // search recipes for typed ingredient
            className="px-6 py-2 bg-blue-600 text-black font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </header>

      {/* ---------------- Ingredients Section ---------------- */}
      <section id="ingredients" className="p-6 sm:p-10 bg-white">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Available Ingredients (Top 20)
        </h3>

        {/* Render first 20 ingredients as buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ingredients.map((item) => (
            <button
              key={item.idIngredient} // unique key
              onClick={() => fetchRecipes(item.strIngredient)} // fetch recipes on click
              className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-blue-100 transition"
            >
              {item.strIngredient}
            </button>
          ))}
        </div>
      </section>

      {/* ---------------- Recipes Section ---------------- */}
      <section id="recipes" className="py-10 bg-gray-50 flex-grow mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Suggested Recipes
          </h3>

          {/* If no recipes, show message */}
          {recipes.length === 0 ? (
            <p className="text-center text-gray-500">
              No recipes found. Try searching!
            </p>
          ) : (
            // Otherwise, show recipes grid
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
              {recipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="bg-gray-50 shadow-md rounded-lg overflow-hidden transition hover:shadow-lg flex flex-col me-5"
                >
                  {/* Recipe thumbnail */}
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-40 object-cover"
                  />

                  {/* Recipe title and details button */}
                  <div className="p-2 text-center">
                    <h4 className="text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {recipe.strMeal}
                    </h4>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-black text-sm sm:text-base font-medium py-1 px-3 rounded transition"
                      onClick={() => fetchRecipeDetails(recipe.idMeal)} // fetch recipe details
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- Recipe Modal ---------------- */}
      {selectedRecipe && ( // only show modal if recipe is selected
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedRecipe(null)} // close modal
              className="absolute top-3 right-3 bg-red-500 text-black px-3 py-1 rounded-lg hover:bg-red-600"
            >
              ✖
            </button>

            {/* Recipe details */}
            <h2 className="text-2xl font-bold mb-4">{selectedRecipe.strMeal}</h2>
            <img
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              className="w-full h-60 object-cover rounded-lg mb-4"
              style={{ width: '200px', height: '200px' }}
            />
            <p className="text-gray-700 mb-4">
              <strong>Category:</strong> {selectedRecipe.strCategory} |{" "}
              <strong>Area:</strong> {selectedRecipe.strArea}
            </p>

            {/* Instructions */}
            <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {selectedRecipe.strInstructions}
            </p>

            {/* YouTube link */}
            <a
              href={selectedRecipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      )}

      {/* ---------------- Footer ---------------- */}
      <footer id="about" className="bg-blue-600 text-white text-center py-4 mt-6">
        <p>© {new Date().getFullYear()} Smart Recipe Helper. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Exporting App component so it can be used in main.jsx
export default App;
