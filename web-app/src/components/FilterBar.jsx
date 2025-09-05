import PropTypes from "prop-types";

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 p-4">
      {/* Cooking Time Filter */}
      <select
        value={filters.time}
        onChange={(e) => setFilters({ ...filters, time: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">Any Time</option>
        <option value="quick">Quick (&lt; 20 min)</option>
        <option value="medium">Medium (20-40 min)</option>
        <option value="long">Long (&gt; 40 min)</option>
      </select>

      {/* Mood Filter */}
      <select
        value={filters.mood}
        onChange={(e) => setFilters({ ...filters, mood: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">Any Mood</option>
        <option value="light">Light</option>
        <option value="spicy">Spicy</option>
        <option value="comfort">Comfort</option>
      </select>
    </div>
  );
};

// ✅ Props validation
FilterBar.propTypes = {
  filters: PropTypes.shape({
    time: PropTypes.string,
    mood: PropTypes.string,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterBar;
