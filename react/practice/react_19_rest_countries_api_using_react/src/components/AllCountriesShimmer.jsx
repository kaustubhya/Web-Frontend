import React from "react";
import "../Shimmer.css";

const AllCountriesShimmer = () => {
  //   const arr = new Array(15).fill("value");
  // gives an array with 15 elements called 'value'

  
  const mapped = Array.from({ length: 15 }).map((_, i) => {
    return <div key={i} className="country-card shimmer-country-card shimmer"></div>;
  });

  return <div className="countries-container">
    {mapped}
  </div>;
};

export default AllCountriesShimmer;
