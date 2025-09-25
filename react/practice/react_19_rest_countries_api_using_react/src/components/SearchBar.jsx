import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchBar;
