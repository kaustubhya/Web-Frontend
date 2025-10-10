# [Handle Multiple Fetch Requests | Promise.all( ) in React | The Complete React Course | Ep.24](https://www.youtube.com/watch?v=qqybka4RSJ0&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=25)

First we will start taking care of the back button.

for that we just add an `onClick` handler to the back button element and call the `history.back()` method.

```jsx
<span className="back-button" onClick={() => history.back()}>
  <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
</span>
```

Now let us start working on the border countries.

We will divide the work into 2 parts,

1. Showing borders and navigating to borders by Hardcoding countries in the border array.

This is because we want to first show how to navigate to other countries by clicking on border buttons. For this, we have hardcoded the countries in the border array.

We will see how we fetch the countries later

```jsx
import React, { useEffect } from "react";
import { useState } from "react";
import "../CountryDetail.css";
import { useParams } from "react-router-dom";
import Error_Page from "../pages/Error_Page";
import { Link } from "react-router-dom";

const Country_Details = () => {
  const params = useParams();
  // console.log(params);
  // we get an object from useParams, to extract the dynamic route
  const countryName = params.countryDetails;
  // see main.jsx or console tab to see the path called `countryDetails`
  // console.log(countryName);

  const [countryData, setCountryData] = useState({});

  // to handle invalid urls
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then(([data]) => {
        // console.log(data[0]); [data] is similar to data[0]
        console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: data.name?.nativeName
            ? Object.values(data.name.nativeName)
                .map((language) => language.common)
                .join(", ")
            : "N/A",
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
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
          flag: data.flags.svg,
          borders: ["Brazil"], // hardcoded value
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
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
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
    </main>
  );
};

export default Country_Details;
```

Initially, in the countryData object, we make a border property and set its property as follows:

`borders: ['Brazil'], // hardcoded value`

next, we put `[countryName]` in the useEffect dependency array, so that when the countryName in the url changes, the useEffect will run again and fetch the new data and update the state. Earlier it was not doing so, as `[]` was only running once on the page load.

Next we will do a conditional rendering where in we will show the border countries div, only when a country has any border countries. For now, we can see this effect by removing any countries from the border array. So we will not see anything if there are no borders.

Finally to display the border countries, we will use a Link tag. Now to get each country, we map the borders array. Also we use an optional chaining here to counter any country which has say no borders array and which might throw an error. Give a unique key too.

```jsx
{
  countryData.borders?.length !== 0 && (
    <div className="border-countries">
      <b>Border Countries: </b>&nbsp;
      {countryData.borders?.map((country) => (
        <Link key={country} to={`/${country}`}>
          {country}
        </Link>
      ))}
    </div>
  );
}
```

2. Now let us get to work on fetching all the countries data and then display it

```jsx
import React, { useEffect } from "react";
import { useState } from "react";
import "../CountryDetail.css";
import { useParams } from "react-router-dom";
import Error_Page from "../pages/Error_Page";
import { Link } from "react-router-dom";

const Country_Details = () => {
  const params = useParams();
  // console.log(params);
  // we get an object from useParams, to extract the dynamic route
  const countryName = params.countryDetails;
  // see main.jsx or console tab to see the path called `countryDetails`
  // console.log(countryName);

  const [countryData, setCountryData] = useState({});

  // to handle invalid urls
  const [notFound, setNotFound] = useState(false);

  console.log(countryData?.borders);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then(([data]) => {
        // console.log(data[0]); [data] is similar to data[0]
        // console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: data.name?.nativeName
            ? Object.values(data.name.nativeName)
                .map((language) => language.common)
                .join(", ")
            : "N/A",
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
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
          flag: data.flags.svg,
          // borders: ['Brazil'], // hardcoded value
          borders: [],
        });

        // console.log(data.borders)
        // here we get an array of country by codes which represent the border countries, so, we will first map through this array and then for each country, fetch the data by a different url.
        data.borders.map((borderCountryCode) => {
          fetch(`https://restcountries.com/v3.1/alpha/${borderCountryCode}`)
            .then((res) => {
              return res.json();
            })
            .then(([data]) => {
              // we get many arrays inside which there is one object, so to get this object directly, we destructure the array
              // console.log(data.name.common);

              // now we already got all previous data from the outer use effect, now we need to update this new data by taking in consideration the previous data. Basically, the inner use effect is dependent on the outer useEffect's prev data. For that we do it via a callback like this:
              setCountryData((prevData) => {
                return {
                  ...prevData,
                  borders: [...prevData.borders, data.name.common],
                };
              });
              // here take the prevData `...prevData`, for each new border country use the prevData and only update its borders property. Take all the prev borders, copy it via `...prevData.borders, ` and assign the present border to it `data.name.common`
            });
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
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
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
    </main>
  );
};

export default Country_Details;
```

Firstly, we will set the borders back to an empty array, no need of hardcoding.

Then to update the border countries based on the previous state, we have to map each country and then update it by considering the previous state. This is done by using a callback inside the setCountryData variable.

3. Now we notice that when we console.log the countryData, it is fetched multiple times. It is because, the useEffect is rendering on every map iteration and it is setting the state of the borderCountries multiple times, this is unnecessary and we need to reduce the number of re-renders by the state change.

For starters, we remove that setCountryData, because it is not needed. Then let us first get an array of promises

```jsx
console.log(
  data.borders.map((borderCountryCode) => {
    return (
      fetch(`https://restcountries.com/v3.1/alpha/${borderCountryCode}`)
        // by returning this fetch, we will get an array of promises
        .then((res) => {
          return res.json();
        })
        .then(([borderCountry]) => borderCountry.name.common)
    );
  })
);
```

Next, now that we have got an array of promises, we can do `Promise.all()`. Look below:

```jsx
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
```

Here we got an array of promises, then using Promise.all, we are reducing the no. of re-renders. Basically, Promise.all waits until all the promises are done executing and then it changes the state If you look closely, we update the state after that only. Keep in mind, in this setCountry data, keep the name `borders` fixed as it is the same info which is used to display the border country buttons in the return section.

And at last an edge case, we handle those countries which do not have a border by making the border array empty [].

full country_details.jsx

```jsx
import React, { useEffect } from "react";
import { useState } from "react";
import "../CountryDetail.css";
import { useParams } from "react-router-dom";
import Error_Page from "../pages/Error_Page";
import { Link } from "react-router-dom";

const Country_Details = () => {
  const params = useParams();
  // console.log(params);
  // we get an object from useParams, to extract the dynamic route
  const countryName = params.countryDetails;
  // see main.jsx or console tab to see the path called `countryDetails`
  // console.log(countryName);

  const [countryData, setCountryData] = useState({});

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
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
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
    </main>
  );
};

export default Country_Details;
```

---

# [Shimmer Effect in React | Skeleton Loading | The Complete React Course | Ep.25](https://www.youtube.com/watch?v=FEtTRjq1P6I&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=26)

It is also called `Skeleton Loading`

Now we will make shimmer components for 2 pages, one for AllCountries.jsx and one for CountryDetails.jsx

First let us make one component called AllCountriesShimmer.jsx

```jsx
import React from "react";
import "../Shimmer.css";

const AllCountriesShimmer = () => {
  // Way 1
  // const arr = new Array(15).fill("value");
  // gives an array with 15 elements called 'value'

  // Way 2
  const mapped = Array.from({ length: 15 }).map((_, i) => {
    return <div key={i} className="country-card shimmer-country-card shimmer"></div>;
  });

  return <div className="countries-container">
    {mapped}
  </div>;
};

export default AllCountriesShimmer;

```

Here we made a main countries container component and inside it we called an array. It is of length 15 and we mapped it. `_` means we do not care about the individual elements in the array. We just mapped it. Also along with it, we used an index i as key to fulfil react's requirements that when using loops, always give a unique key.

Now we could also have pasted 15 elements inside the main countries container but it is not feasible in react, reduce the code lines, and make the same outcome.

As for the AllCountries.jsx, we will incorporate shimmer by using a loader useState.

```jsx
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
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
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
            />
          ))}
      </div>
    </>
  );
};

export default AllCountries;

```

Now keep in mind, to use the appropriate css classes like `country-card`, because if you miss it, then the cards and the effect may not appear.

```css
.shimmer-country-card {
  height: 300px;
}
/* for all countries */

.shimmer {
  background: linear-gradient(90deg, #ccc 25%, #e0e0e0 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: shimmerAnimation 1.5s infinite linear;
}

@keyframes shimmerAnimation {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* for country details */

.country-flag {
  height: 400px;
  width: 600px;
}

.country-name {
  height: 30px;
  width: 200px;
  margin: 20px 0 30px 0;
}

.other-details {
  height: 10px;
  width: 200px;
  margin: 10px auto;

}

/* shimmer is common for all */
```

Shimmer css


Now we work on Country Details Shimmer

```jsx
import React from "react";
import '../Shimmer.css';

const Country_Details_Shimmer = () => {
  return (
    <div className="country-details-container">
      <div className="country-details">
        <div className="country-flag shimmer"></div>
        <div className="details-text-container">
          <div className="country-name shimmer"></div>
          <div className="details-text">
            <div className="other-details shimmer"></div>
            <div className="other-details shimmer"></div>
            <div className="other-details shimmer"></div>
            <div className="other-details shimmer"></div>
            <div className="other-details shimmer"></div>
            <div className="other-details shimmer"></div>
            <div className="other-details shimmer"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Country_Details_Shimmer;
```

Just make some divs instead of the flag and data and give height and weight.

As for shimmer component in country details, see the code, I've used it with a conditional rendering as to only show shimmer when you have countryData.

---

# [Pass Data from One Page to Another in React | The Complete React Course | Ep.26](https://www.youtube.com/watch?v=5m64-0vnLYU&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=27)