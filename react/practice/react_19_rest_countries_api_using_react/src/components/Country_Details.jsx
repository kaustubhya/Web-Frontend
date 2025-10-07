import React, { useEffect } from "react";
import { useState } from "react";
import '../CountryDetail.css';

const Country_Details = () => {
  const countryName = new URLSearchParams(location.search).get("name");
  // console.log(countryName);

  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(([data]) => {
        // console.log(data[0]); [data] is similar to data[0]
        console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: data.name?.nativeName ? Object.values(data.name.nativeName).map((language) => language.common).join(", ") : "N/A",
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data?.subregion ? data.subregion : "N/A",
          capital: data.capital?.join(", ") || "N/A",
          top_level_domain: data.tld?.join(", ") || "N/A",
          currency: data?.currencies ? Object.values(data.currencies).map((lang) => lang.name).join(", ") : "N/A",
          language: data?.languages ? Object.values(data.languages).map((lang) => lang).join(", ") : "N/A",
          flag: data.flags.svg,
        });
      });
  },[]);
  return (
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          {/* imp see alt */}
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.top_level_domain}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currency}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.language}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Country_Details;
