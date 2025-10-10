import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
  const capitalText =
    capital && capital.length > 0 ? capital.join(", ") : "N/A";

    
  return (
    <Link className="country-card" to={`/${encodeURIComponent(name)}`}>
    {/* changed this above link "to" portion */}
    
      <div className="img-container">
        <img src={flag} alt="{country.name.common} flag" />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capitalText}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
