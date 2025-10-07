import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import AllCountries from "../components/AllCountries";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>
        <AllCountries query={query} region={region} />
      </main>
    </>
  );
};

export default Home;
