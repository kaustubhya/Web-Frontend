import React, { useEffect } from "react";
import { useState } from "react";
import "../CountryDetail.css";
import { useParams } from "react-router-dom";
import Error_Page from "../pages/Error_Page";
import { Link } from "react-router-dom";
import Country_Details_Shimmer from "./Country_Details_Shimmer";

const Country_Details = () => {
  const params = useParams();
  // console.log(params);
  // we get an object from useParams, to extract the dynamic route
  const countryName = params.countryDetails;
  // see main.jsx or console tab to see the path called `countryDetails`
  // console.log(countryName);

  const [countryData, setCountryData] = useState(null);

  // to handle invalid urls
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then(([data]) => {
        // console.log(data[0]); [data] is similar to data[0]
        // console.log(data);
        setCountryData({
          name: data.name?.common || "N/A",
          nativeName: data.name?.nativeName
            ? Object.values(data.name.nativeName)
                .map((language) => language.common)
                .join(", ")
            : "N/A",
          population: data.population.toLocaleString("en-IN"),
          region: data?.region || "N/A",
          subregion: data?.subregion ? data.subregion : "N/A",
          capital: data.capital?.join(", ") || "N/A",
          top_level_domain: data.tld?.join(", ") || "N/A",
          currency: data?.currencies
            ? Object.values(data.currencies)
                .map((lang) => lang.name)
                .join(", ")
            : "N/A",
          language: data?.languages
            ? Object.values(data.languages)
                .map((lang) => lang)
                .join(", ")
            : "N/A",
          flag: data?.flags.svg,
          // borders: ['Brazil'], // hardcoded value
          borders: [],
        });

        // console.log(data.borders)
        // here we get an array of country by codes which represent the border countries, so, we will first map through this array and then for each country, fetch the data by a different url.

        // if no borders, make the borders array empty
        if (!data.borders) {
          data.borders = [];
        }

        Promise.all(
          data.borders.map((borderCountryCode) => {
            return (
              fetch(`https://restcountries.com/v3.1/alpha/${borderCountryCode}`)
                // by returning this fetch, we will get an array of promises
                .then((res) => {
                  return res.json();
                })
                .then(([borderCountry]) => {
                  // console.log(borderCountry);
                  return borderCountry.name.common;
                })
            );
          })
        ).then((borders) => {
          setCountryData((prevStateData) => ({
            ...prevStateData,
            borders,
          }));
        });
      })
      .catch((err) => {
        setNotFound(true);
        console.log(err);
      });
  }, [countryName]);
  // now initially we set an empty [], because we wanted the use effect to run only once when the page loaded, but this will not work when we click on a border country link, this is because the link param will change but the [] will prevent it to load the data, so to counter this, we will put country name here in the dependency array. Hence, whenever the country name in the param changes, run the use effect again, fetch the new data and update the state

  if (notFound) {
    return <Error_Page />;
  }

  return (
    <main> {
      countryData ? (
        <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
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
                <span className="top-level-domain">
                  {countryData.top_level_domain}
                </span>
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
            {/* here we are doing this conditional rendering to handle the case when there are no border countries, if there are no border countries, do not show the below div */}
            {countryData.borders?.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders?.map((country) => (
                  <Link key={country} to={`/${country}`}>
                    {country}
                  </Link>
                ))}
                {/* imp -> if sometimes we do not have border countries then react will throw an error. Here to counter it, we have used optional chaining with map */}
              </div>
            )}
          </div>
        </div>
      </div>
      ) : (
        <Country_Details_Shimmer />
      )
    }
    {/* used conditional rendering for shimmer */}
      
    </main>
  );
};

export default Country_Details;
