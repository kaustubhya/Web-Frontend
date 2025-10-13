import React from "react";
import "../Shimmer.css";

const AllCountriesShimmer = () => {
  //   const arr = new Array(15).fill("value");
  // gives an array with 15 elements called 'value'

  return (
    <div className="countries-container">
      {Array.from({ length: 15 }).map((_, i) => {
        return (
          <div key={i} className="country-card shimmer-country-card">
            <div className="flag-container shimmer"></div>
            <h3 className="card-title-shm shimmer"></h3>
            <div className="card-text">
              <p className="shimmer"></p>
              <p className="shimmer"></p>
              <p className="shimmer"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllCountriesShimmer;
