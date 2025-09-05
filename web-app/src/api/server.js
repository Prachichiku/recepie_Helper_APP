import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/recipes", async (req, res) => {
  const ingredients = req.query.ingredients; // e.g., "rice,rajma"
  if (!ingredients) return res.status(400).json({ message: "No ingredients provided" });

  try {
    const ingArr = ingredients.split(",").map(i => i.trim());
    const results = await Promise.all(
      ingArr.map(async (i) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`);
        return response.json();
      })
    );

    const combinedMeals = results.flatMap(r => r.meals || []);
    res.json({ meals: combinedMeals });
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
