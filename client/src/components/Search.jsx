import React, { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query.trim(), filter);
    }, 300); // Debounce search input to avoid too many calls

    return () => clearTimeout(delaySearch);
  }, [query, filter, onSearch]);

  return (
    <div className="flex justify-center mb-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search alumni..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-none w-full max-w-xl p-[12px] text-[1rem] rounded-l-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_4px_4px_8px_#b3b9c5,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 ease-in-out"
      />

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border-none w-auto p-[12px] rounded-r-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] text-[1rem] outline-none focus:shadow-[inset_4px_4px_8px_#b3b9c5,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 ease-in-out appearance-none cursor-pointer"
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
