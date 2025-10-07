import React, { useEffect } from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../../countries-data";
import { useState } from "react";

const AllCountries = ({ query, region }) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
    )
      .then((res) => res.json())
      .then((data) => setCountriesData(data), console.log(countriesData));
  }, []);

  return (
    <div className="countries-container">
      {/* filter for search functionality, map for displaying all countries as per filter */}
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .filter((country) => country.region.toLowerCase().includes(region))
        .map((country) => {
          return (
            <CountryCard
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
              key={country.name.common}
            />
          );
        })}
    </div>
  );
};

export default AllCountries;
