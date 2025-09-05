// src/api/recipeApi.js
const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export const fetchByIngredient = async (ingredient) => {
  const res = await fetch(`${API_BASE}/filter.php?i=${ingredient}`);
  return await res.json();
};

export const fetchRecipeDetails = async (id) => {
  const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
  return await res.json();
};
