import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value, filter);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onSearch(query, e.target.value);
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search alumni..."
        value={query}
        onChange={handleQueryChange}
        className="border w-full max-w-xl border-gray-300 p-2 rounded-l"
      />
      <select
        value={filter}
        onChange={handleFilterChange}
        className="border border-gray-300 p-2 rounded-r"
      >
        <option value="name">Name</option>
        <option value="city">City</option>
        <option value="skills">Skills</option>
        <option value="passOut">Batch</option>
      </select>
    </div>
  );
};

export default Search;
