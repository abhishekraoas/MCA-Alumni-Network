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
    <div className="flex justify-center mb-6 rounded-r-[30px]">
      <input
        type="text"
        placeholder="Search alumni..."
        value={query}
        onChange={handleQueryChange}
        className="border-none w-full max-w-xl p-[12px] text-[1rem] rounded-l-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)] transition-all duration-300 ease-in-out"
        required
      />
      <select
        value={filter}
        onChange={handleFilterChange}
        className="border-none w-auto p-[12px] rounded-r-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] text-[1rem] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)] transition-all duration-300 ease-in-out appearance-none"
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
