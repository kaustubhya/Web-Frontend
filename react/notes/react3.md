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
    return (
      <div key={i} className="country-card shimmer-country-card shimmer"></div>
    );
  });

  return <div className="countries-container">{mapped}</div>;
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
import "../Shimmer.css";

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

In this section, we will learn about a way to optimize our code. Basically if we load the AllCountries.jsx page, then the api will fetch the country data once. Now then if we again click on any country and go to CountryDetails.jsx, then again api fetches the country data once. Now we see that some redundant info is fetched twice. Instead of this, we can pass the data from AllCountries to CountryDetails.jsx.

Ok, let us start our task with passing some basic info from all countries to country details. Now in all countries, we can pass flag, name, population, region and capital of a country.

Now data gets passed via link tab, so go to Country_Card.jsx and then do this:

```jsx
<Link
  className="country-card"
  to={`/${encodeURIComponent(name)}`}
  state={{ name, flag, population, region, capital }}
></Link>
```

Here we used a state attribute to pass in all the data, outer `{}` is for telling react jsx that we will use javascript, and inner `{}` is an object inside which we have kept all of our data.

Now go to CountryDetails.jsx and then do this:

```jsx
const { passedState } = useLocation();
console.log(passedState);
```

Here to access the state attribute data, react router provides us with a hook called `useLocation`, which returns the location object. Now we can access the data by using `state` attribute.

Now we see that there is a lot more data in Country Details than we brought in from All countries, can't we bring it all??

ANS -> Yes. If we remember, we fetched all countries data from api, we can pass that data directly instead of these small parameters.

For that, we will add a data prop to All Countries where data={country}

```jsx
<div className="countries-container">
  {countriesData
    .filter((country) =>
      country.name?.common.toLowerCase().includes(query?.toLowerCase() || "")
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
        data={country} // this one
      />
    ))}
</div>
```

Next call it in Country card and update the Link State with this.

```jsx
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital, data }) => {
  console.log(data);
  const capitalText =
    capital && capital.length > 0 ? capital.join(", ") : "N/A";

  return (
    <Link
      className="country-card"
      to={`/${encodeURIComponent(name)}`}
      state={{ data }}
    >
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
```

Note, earlier the fetch api i used in AllCountries did not have all fields needed in CountryDetails.jsx, so I updated this API to include the rest of those fields.

Now, one more thing, we need this inter page data transfer only when we are going from AllCountries to CountryDetails. But say we directly go to a country by typing its name in the URL, then we need to fetch the api in the countryDetails because we are not going from one page to another, in such a scenario, we will use a conditional.

```jsx
import React, { useEffect } from "react";
import { useState } from "react";
import "../CountryDetail.css";
import { useLocation, useParams } from "react-router-dom";
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
  // console.log(countryData);

  // to handle invalid urls
  const [notFound, setNotFound] = useState(false);

  // to pass data from All Countries to Country Details
  const { passedState } = useLocation();

  function updateCountryDetails(data) {
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
  }

  useEffect(() => {
    if (passedState) {
      updateCountryDetails(passedState);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then(([data]) => {
        // console.log(data[0]); [data] is similar to data[0]
        // console.log(data);

        updateCountryDetails(data);

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
          setTimeout(() =>
            setCountryData((prevStateData) => ({
              ...prevStateData,
              borders,
            }))
          );
        });
        // we put this setCountryData in setTimeout to avoid the borders from getting fetched before the countries data inside Promise.all. If borders are fetched before countryData, then sometimes we might face an error
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
      {" "}
      {countryData ? (
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
      )}
      {/* used conditional rendering for shimmer */}
    </main>
  );
};

export default Country_Details;
```

Here we did the following,

1. Imported the state via useLocation `passedState`
2. Used a conditional where if the passedState is present then update the state from this passedState data and return
3. If this passed State is not there then call the fetch api, and update the state via the api data
4. Also used a set timeout after Promise.all because sometimes when a country has no borders, it takes some time to fetch all the country details via either method and by that time, this borders thing runs and sometimes gives errors, so we ideally want to first fetch the country details and then fetch and update the border api.

Now to end, this react router is behaving or its behavior is originated from this `history.pushState`. So this is how react router works and we can get state from this.

---

# [Dark Mode in React | The Complete React Course | Ep.27](https://www.youtube.com/watch?v=nffHTpPeSoY&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=28)

Now to make dark mode, notice, we already have the usual css for the dark mode in App.css. We just need to work on logic here.

1. Go to Header.jsx, this is where you have the dark button
2. Now for dark mode, we just have to toggle the class dark, and the button icon will change along with text. For this, we will use an onChange function.
3. And to render these state changes, we use a useState hook.

```jsx
import React, { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp; {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
};

export default Header;
```

Now we need to save it to localStorage

```jsx
import React, { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", JSON.stringify(!isDark));
            // in localstorage, only the value is stringified and not the key.Key is already a string
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp; {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
};

export default Header;
```

1. If you look then as soon as we click on the button, we change the state and in addition, we are also setting the localstorage mode.
2. Now to get values from the localstorage, we will get it from the useState so that by default, use State value is the value from the localstorage.
3. Next to actually see the changes of dark mode, we need to bring the toggle dark class out of the onClick and keep it out, also instead of now toggling, we will add and remove the class.

But this way of adding and removing classes is not feasible in react, so let us learn the react way.

1. We will apply dark to main and header instead of body, so we will do changes in App.css

```css
* {
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}

body {
  --background-color: white;
  --text-color: black;
  --elements-color: white;
  margin: 0;
  font-family: Nunito, sans-serif;
}

main,
header {
  background-color: var(--background-color);
  color: var(--text-color);
}

main.dark,
header.dark {
  --background-color: hsl(207, 26%, 17%);
  --text-color: white;
  --elements-color: hsl(209, 23%, 22%);
}

main {
  padding: 24px;
}

a {
  text-decoration-line: none;
  color: inherit;
}
```

Next we will sort the dark mode for header

```jsx
import React, { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <header className={`header-container ${isDark && "dark"}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", JSON.stringify(!isDark));
            // in localstorage, only the value is stringified and not the key.Key is already a string
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp; {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
};

export default Header;
```

We removed that add and remove class and added that conditional to header instead of body.

Now as for the main, it is in different pages, so how.

One way of doing this is `lifting the state`, basically we go to the parent of header and main ie. App and call the useState there and pass it to the children.

App.jsx

```jsx
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  );
};

export default App;
```

Since App.jsx is the parent prop, we can now use the use State here and pass it to the children.

For the Header, we can use a normal theme prop. See Header.jsx below:

```jsx
import React from "react";

const Header = ({ theme }) => {
  const [isDark, setIsDark] = theme;

  return (
    <header className={`header-container ${isDark && "dark"}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", JSON.stringify(!isDark));
            // in localstorage, only the value is stringified and not the key.Key is already a string
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp; {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
};

export default Header;
```

Here we have passed the prop and then used it in the Header component.

Now the Outlet is tricky as there is no such thing as theme here, so we can use a new attribute context here instead of theme and use a new hook `useOutletContext()` in Country_Details.jsx and Home.jsx.

```jsx
const [isDark] = useOutletContext();
return (
  <>
    <main className={isDark && "dark"}>....</main>
  </>
);
```

Both Home.jsx and Country_Details.jsx will have the same code changes.

Finally, make some css adjustments to make the dark mode fill up the whole page. Also we made the header sticky

```css
* {
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}

body {
  --background-color: white;
  --text-color: black;
  --elements-color: white;
  margin: 0;
  font-family: Nunito, sans-serif;
}

main,
header {
  background-color: var(--background-color);
  color: var(--text-color);
}

main.dark,
header.dark {
  --background-color: hsl(207, 26%, 17%);
  --text-color: white;
  --elements-color: hsl(209, 23%, 22%);
}

main {
  padding: 24px;
  min-height: calc(100vh - 73px);
  /* to get proper fit dark mode. Do not give height, as dark mode will disappear when we scroll, give min-height  */
}

a {
  text-decoration-line: none;
  color: inherit;
}

.header-container {
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);
  padding-inline: 24px;
  background-color: var(--elements-color);

  /* making the header sticky */
  position: sticky;
  top: 0;
  z-index: 2;
}
```

---

# [How to Work with the React Context API? | The Complete React Course | Ep.28](https://www.youtube.com/watch?v=oANamKAxvmw&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=29)

## Prop Drilling

First let us understand by what is `Prop Drilling`: Prop Drilling is when a prop is being passed through multiple components to get its access. An example we saw before with the dark state theme, it was inside the Header but we took it out of it, declared it at App.jsx and then passed it to Header, and to Home and Country Details via Outlet and useOutletContext.

#### Definition: Prop drilling in React refers to the process of passing data (props) from a parent component down through multiple layers of intermediate components that do not directly need the data themselves, solely to reach a deeply nested child component that actually requires it. This can lead to less maintainable and harder-to-understand code as the application grows in complexity.

#### Example: Consider an application where a top-level App component holds a user's username and needs to display it in a WelcomeMessage component, which is nested several levels deep.

```jsx
// App.js
import React from "react";
import ParentComponent from "./ParentComponent";

function App() {
  const username = "Alice";
  return (
    <div>
      <h1>My Application</h1>
      <ParentComponent username={username} />
    </div>
  );
}

export default App;
```

```jsx
// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(props) {
  // ParentComponent doesn't use 'username' but passes it down
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent username={props.username} />
    </div>
  );
}

export default ParentComponent;
```

```jsx
// ChildComponent.js
import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function ChildComponent(props) {
  // ChildComponent doesn't use 'username' but passes it down
  return (
    <div>
      <h3>Child Component</h3>
      <WelcomeMessage username={props.username} />
    </div>
  );
}

export default ChildComponent;
```

```jsx
// WelcomeMessage.js
import React from "react";

function WelcomeMessage(props) {
  // WelcomeMessage finally uses the 'username' prop
  return <p>Welcome, {props.username}!</p>;
}

export default WelcomeMessage;
```

In this example, the username prop is "drilled" through ParentComponent and ChildComponent which do not utilize username themselves, before finally reaching WelcomeMessage where it is rendered. This illustrates prop drilling, as the intermediate components are merely conduits for the prop.

IMP -> Now look here we used the syntax `username={props.username}` for all levels, we can change the name like `ksd={props.username}` in one intermediate and say `abc={props.username}` in another intermediate, then also it will work fine but it is not recommended as maintaining it and tracking it then becomes a chore.

To to tackle this prop drilling issue, we use context api.

1. Firstly, make a folder in react named context, this can be used to store multiple contexts, like one for theme, another for user logged in etc.
2. Then for theme, we make a file called `ThemeContext.jsx`

Now we will do the following:

```jsx
import React, { createContext } from "react";

export const ThemeContext = createContext();
```

Now here we used a createContext function which we will use in Home.jsx and App.jsx.

Now this create context by itself, does not do much. To use it, we will use a useContext hook in Home.jsx.

```jsx
// using context api
const ksd = useContext(ThemeContext);
console.log(ksd);
```

But to finally activate it, we will use a code in App.jsx, and use it as a wrapper. Now to actually use it, we will use a Provider component which is found inside ThemeContext.

```jsx
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </ThemeContext.Provider>
  );
};

export default App;
```

Now finally, we can remove `useOutletContext` from Home and replace ksd with isDark (destructured btw).

```jsx
import React, { useContext } from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import AllCountries from "../components/AllCountries";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  // using context api
  const [isDark] = useContext(ThemeContext);
  return (
    <>
      <main className={isDark && "dark"}>
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
```

Doing the same in Country_Details.jsx. It works fine now for all.

```jsx
// for dark theme
const [isDark] = useContext(ThemeContext);
```

Now we work on Header, we will do the same but this time, we also need setIsDark. As here there is the dark mode button. Use the useContext and remove the theme prop you passed here and in App.jx. Also remove the context prop you passed in App.jsx because we will not be needing it anymore.

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);

  return (
    <header className={`header-container ${isDark && "dark"}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", JSON.stringify(!isDark));
            // in localstorage, only the value is stringified and not the key.Key is already a string
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp; {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
};

export default Header;
```

App.jsx

```jsx
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default App;
```

All done ✅

So to summarize:

1. Used a ThemeContext to create a context
2. In app.jsx, used it as a wrapper and used ThemeContext.Provider to provide the values of isDark and setIsDark.
3. Finally used it via useContext(ThemeProvider) in Home.jsx and Country_Details.jsx
4. In Header.jsx, we also used it but with setIsDark there
5. Finally removed all the props from App.jsx of theme from header and context from Outlet.

### Advanced Stuff

Up till now it works well, but we can still do some reorganizing. Now we have set our useState in App.jsx of isDark and setIsDark. What if I want to move it to ThemeContext.jsx

Now if we copy this line

```jsx
const [isDark, setIsDark] = useState(
  JSON.parse(localStorage.getItem("isDark"))
);
```

and try to use it in ThemeContext.jsx, we will an error because these states can only be used either in a component or in a hook. We can tackle it by making our own custom hook but that is for later.

For now, we can make a function and return a jsx (as components are also a function)

One more thing, what if we return the entire ThemeContext.Provider component here as jsx and then put the Header and Outlet inside this themeprovider component and finally inside this ThemeContext.Provider return jsx, pass those as children props.

Wallahi it works!!

```jsx
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
// we we pass a value here inside create context and also pass a value inside ThemeContext.Provider and console log it, then we will see the value inside ThemeContext.Provider as it is more precedent. If there is no value there, then we see this value as output.

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
```

App.jsx

```jsx
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
```

Header and Outlet are now children of this theme provider.

By doing this, we made our code more clean and did not use useState inside App, App is again now only for outlet.

---

# [How to Create Custom Hooks in React ? | The Complete React Course | Ep.29](https://www.youtube.com/watch?v=WYNB0GTdB3U&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=30)

Now if we do inspect -> resize window, we can see a small box which shows the width and height change to us.

Now we want to show that here, first via normal react.

Home.jsx

```jsx
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import AllCountries from "../components/AllCountries";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  // using context api
  const [isDark] = useContext(ThemeContext);

  // custom-hook topic | showing height and width of the window
  const [windowSize, setWindowSize] = useState({
    width: window.innerHeight,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);
  return (
    <>
      <main className={isDark && "dark"}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>
        <h1 style={{ textAlign: "center" }}>
          {windowSize.width} X {windowSize.height}
        </h1>
        <AllCountries query={query} region={region} />
      </main>
    </>
  );
};

export default Home;
```

Here we want only one event listener to get attached when the page loads and re-renders, hence we put the event listener inside the use effect. Now if we put it outside of useEffect, then on each new render, we would have multiple useEffects which would collide with each other.

Also the event listener is working independently of the use Effect so, even if the useEffect is running only once, the event listener handled by the browser and not react is triggering each time the window is resizing and due to that it updates the state.

If we used the useState without any event listener directly inside the useEffect, then it would also run only once just like the useEffect.

With that we have made this feature in the Home component, now what if we also want this feature in the CountryDetails component.

For that we can copy paste this code there, but an optimal way would be to use a custom hook here. A custom hook is a function here.

1. Make a file utils.js for this purpose and move the above code there.

```jsx
import { useState, useEffect } from "react";

export function getWindowSize() {
  // custom-hook topic | showing height and width of the window
  const [windowSize, setWindowSize] = useState({
    width: window.innerHeight,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return windowSize;
}
```

and in Home.jsx and CountryDetails.jsx (also add the h1 code in CountryDetails.jsx)

```jsx
// custom-hook topic | showing height and width of the window
const windowSize = getWindowSize();
```

It works ok

Now to finally mold it as a custom hook, we change the name of the function and store it like this:

1. Make a folder `hooks` inside src. This will be storing your custom hooks
2. Inside that folder, we will create a file called useWindowSize.jsx. Then we will copy all the code from getWindowSize to useWindowSize and also change the name of the function to `useWindowSize` (react convention of naming hooks is to start with `use`).
3. Finally, update the function imports in Home.jsx and Country_Details.jsx

With this it works same but now it is a custom hook

## Custom hooks are generally functions only which are written in a separate file as it is re-used in multiple components.

Home.jsx and CountryDetails.jsx

```jsx
import { useWindowSize } from "../hooks/useWindowSize";
...
  // custom hooks
  const windowSize = useWindowSize();
```

Ok, now it works very well.

So let us remove this feature from the main code as it was made only for testing purposes and not an actual usage.

For actual usage, we will see this issue:

If you see this code bit

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// using context api
const [isDark] = useContext(ThemeContext);
```

Then we are importing both useContext and ThemeContext, just to make a dark mode, so let us make a custom hook which will make us import it only once for us. Hook will be, useTheme()

useTheme.jsx

```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);

  return [isDark, setIsDark];
};
```

used in Home.jsx, CountryDetails.jsx and Header.jsx

```jsx
import { useTheme } from "../hooks/useTheme";
...
const [isDark, setIsDark] = useTheme();
```

remove the useContext and ThemeContext from Home.jsx, CountryDetails.jsx and Header.jsx

---

# [REST Countries API Project Completed | Frontend Mentor | The Complete React Course | Ep.30](https://www.youtube.com/watch?v=8N-FOwUAxEE&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=31)

Made some updates to the shimmer effect on main page country cards + used grid layout to make some css adjustments in the cards.

Look at the code to know better.

---

# [How to Deploy a React JS App? | Hindi | The Complete React Course | Ep.31](https://app.netlify.com/projects/rest-countries-react-ksd/overview)

I have not followed this video. I have used chatgpt as I use Vite and not parcel.

Now to deploy any react project make sure you have each project as a separate repo in github, I tried doing it via `C/Web Revision/react/practice/react_19_rest_countries_api_using_react`

Now this is good for pushing code to github but will cause issues in Netlify during deploy as I have many other projects deployed to netlify from Web Frontend.

So first, copy the `react_19_rest_countries_api_using_react`. Bring it out of Web Frontend and rename it to a new folder say `rest-countries-ksd`.

## 1. Prepare your Project

Make sure your project has:

```bash
react-projects/
  └── rest-countries-ksd/
       ├── src/
       ├── public/
       ├── package.json
       ├── vite.config.js
       └── index.html

```       

### Note:
1. Avoid keeping it inside large repos like “Web Frontend”. 
2. Each React app should ideally have its own repo to prevent submodule issues.

## 2. Initialize Git and Create a Repo

In your project folder:

```bash
cd C:/react-projects/rest-countries-ksd
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/kaustubhya/rest-countries-react-ksd
git push -u origin main
```

Now your project is on GitHub.

## 3. Create a Netlify Site

1. Go to `https://app.netlify.com`

2. Click “Add new site → Import an existing project”

3. Choose GitHub, and select your repo

4. Set build settings:

|Setting |	Value |
|---|---|
| Build Command	| npm run build|
|Publish Directory	| dist|

Then click Deploy Site ✅

## 4. Fix “Page Not Found” Error on Direct URLs

React (or any SPA) routes like /country/India don’t exist as actual files —
Netlify must redirect all unknown routes to index.html.

Basically if we try to go to a country page via URL, we cannot do so here.

To fix this, add a redirects rule.

Create this file:

`public/_redirects` (_redirects file inside the public folder)


with content:

`/* /index.html 200` (content inside this file)


Now rebuild and push:

```bash
npm run build
git add public/_redirects
git commit -m "Add Netlify SPA redirect"
git push origin main
```

Netlify will automatically redeploy and fix routing.

If any issues come, check logs, use gpt to debug.