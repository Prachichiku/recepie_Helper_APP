// Import useState hook from React
import { useState } from "react";

// Import PropTypes for prop validation
import PropTypes from "prop-types";

// SearchBar component: handles user input and search
const SearchBar = ({ onSearch }) => {
  // State to store whatever user types in the input box
  const [query, setQuery] = useState("");

  // Function that runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();          // prevent page reload
    if (query.trim()) {          // check if input is not empty
      onSearch(query);           // call parent function (Home.jsx) with search text
    }
  };

  // JSX for the SearchBar UI
  return (
    // Form wrapper → runs handleSubmit when user presses Enter or clicks Search
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      {/* Input field for typing ingredients */}
      <input
        type="text"
        placeholder="Enter ingredients (e.g., rice, rajma)" // hint text
        value={query}                                      // bind value to query state
        onChange={(e) => setQuery(e.target.value)}         // update query as user types
        className="border p-2 rounded w-full"
      />

      {/* Search button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

// PropTypes → ensures onSearch is passed and is a function
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

// Export component so other files can use it
export default SearchBar;
