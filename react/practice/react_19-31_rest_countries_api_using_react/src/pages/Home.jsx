import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import AllCountries from "../components/AllCountries";
import { useTheme } from "../hooks/useTheme";
// import { useWindowSize } from "../hooks/useWindowSize";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  // using context api
  const [isDark] = useTheme();

  // custom-hook topic | showing height and width of the window
  // const windowSize = useWindowSize();
  return (
    <>
      <main className={isDark && "dark"}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>
        {/* <h1 style={{ textAlign: "center" }}> */}
          {/* {windowSize.width} X {windowSize.height} */}
        {/* </h1> */}
        <AllCountries query={query} region={region} />
      </main>
    </>
  );
};

export default Home;
