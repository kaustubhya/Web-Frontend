import React, { useEffect } from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../../countries-data";
import { useState } from "react";
import AllCountriesShimmer from "./AllCountriesShimmer";

const AllCountries = ({ query, region }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,currencies,languages,borders,tld"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

 if (loading) return <AllCountriesShimmer />;

  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name?.common
              .toLowerCase()
              .includes(query?.toLowerCase() || "")
          )
          .filter((country) =>
            country.region?.toLowerCase().includes(region?.toLowerCase() || "")
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
              data={country}
            />
          ))}
      </div>
    </>
  );
};

export default AllCountries;
