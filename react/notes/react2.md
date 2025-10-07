# [What is Children Prop in React? | The Complete React Course | Ep.16](https://www.youtube.com/watch?v=mo6EC4Q91ZY&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=17)

To understand children let us first look at App.jsx and Button.jsx

```jsx
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { useState } from "react";

const AppleCounterComponent = () => {
  const totalApples = 20;
  const [leftApples, setLeftApples] = useState(0);
  const [rightApples, setRightApples] = useState(totalApples - leftApples);

  const rightBtnEvt = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      setRightApples(rightApples - 1);
      setLeftApples(leftApples + 1);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

        <ButtonComponent
          imageUrl={LeftArrow}
          buttonName="left arrow btn"
          btnClickEvt={leftEvtBtn}
        />

        <ButtonComponent
          imageUrl={RightArrow}
          buttonName="right arrow btn"
          btnClickEvt={rightBtnEvt}
        />
        <ApplesBaskt appleCount={rightApples} basket="Basket 2" />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

```jsx
const ButtonComponent = ({ imageUrl, buttonName, btnClickEvt }) => {
  return (
    <div>
      <button className="btn" title={buttonName} onClick={btnClickEvt}>
        <img
          src={imageUrl}
          alt={buttonName}
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </div>
  );
};

export default ButtonComponent;
```

You see we have passed an image inside the button, given it buttonName as alt and also passed buttonName as title. Now say we need to pas something inside button component tags which change everytime for each button, how to do so?

For this we will use children props.

see this example now, where we used children prop, instead of button prop.

```jsx
const ButtonComponent = ({ imageUrl, btnClickEvt, children }) => {
  return (
    <div>
      <button className="btn" title={children} onClick={btnClickEvt}>
        <img
          src={imageUrl}
          alt={children}
          style={{ width: "50px", height: "50px" }}
        />
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
```

```jsx
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { useState } from "react";

const AppleCounterComponent = () => {
  const totalApples = 20;
  const [leftApples, setLeftApples] = useState(0);
  const [rightApples, setRightApples] = useState(totalApples - leftApples);

  const rightBtnEvt = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      setRightApples(rightApples - 1);
      setLeftApples(leftApples + 1);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

        <ButtonComponent
          imageUrl={LeftArrow}
          btnClickEvt={leftEvtBtn}
          children="Left Arrow Button"
        />
        {/* way 1, passing children as an attribute */}

        <ButtonComponent imageUrl={RightArrow} btnClickEvt={rightBtnEvt}>
          Right Arrow Button
        </ButtonComponent>
        {/* way 2, passing inside <ButtonComponent>children</ButtonComponent> */}
        <ApplesBaskt appleCount={rightApples} basket="Basket 2" />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

Now you see, we can use children in 2 different ways as seen above.

The benefit of using children is that a children can be a string, a number, an object, a function, a component even and so much more...

If we pass nothing in children, it will be `undefined`.

---

# [Conditional Rendering in React | Explained with Examples | The Complete React Course | Ep.17](https://www.youtube.com/watch?v=taSooNO2S4c&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=18)

Conditional rendering of components generally means, showing one component when some condition is met and showing another component when the condition is not met.

Here we'll take the same example of apple counter and show the conditions, full when the basket has 20 apples and empty when the basket has 0 apples.

I did it in 2 ways

1. Passed it as props and used the conditions in AppleCounter.jsx

```jsx
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { useState } from "react";

const AppleCounterComponent = () => {
  const totalApples = 20;
  const [leftApples, setLeftApples] = useState(0);
  const [rightApples, setRightApples] = useState(totalApples - leftApples);

  const leftStatus =
    leftApples === totalApples ? "full" : leftApples === 0 ? "empty" : "";
  const rightStatus =
    rightApples === totalApples ? "full" : rightApples === 0 ? "empty" : "";

  const rightBtnEvt = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      setRightApples(rightApples - 1);
      setLeftApples(leftApples + 1);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt
          appleCount={leftApples}
          basket="Basket 1"
          full_or_empty_status={leftStatus}
        />

        <ButtonComponent imageUrl={LeftArrow} btnClickEvt={leftEvtBtn} />

        <ButtonComponent
          imageUrl={RightArrow}
          btnClickEvt={rightBtnEvt}
        ></ButtonComponent>
        <ApplesBaskt
          appleCount={rightApples}
          basket="Basket 2"
          full_or_empty_status={rightStatus}
        />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

```jsx
const ApplesBaskt = ({ appleCount, basket, full_or_empty_status }) => {
  return (
    <div>
      <div>
        <span className="apples">{appleCount}</span>
        <span className="apples"> Apples</span>
      </div>
      <p className="basket">{basket}</p>
      <p className="full-empty">{full_or_empty_status}</p>
    </div>
  );
};

export default ApplesBaskt;
```

2. Made the conditional code in ApplesBaskt.jsx

```jsx
const ApplesBaskt = ({ appleCount, basket }) => {
  return (
    <div>
      <div>
        <span className="apples">{appleCount}</span>
        <span className="apples"> Apples</span>
      </div>
      <p className="basket">{basket}</p>
      <p className="full-empty">
        {appleCount === 20 ? "full" : appleCount === 0 ? "empty" : ""}
      </p>
    </div>
  );
};

export default ApplesBaskt;
```

```jsx
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { useState } from "react";

const AppleCounterComponent = () => {
  const totalApples = 20;
  const [leftApples, setLeftApples] = useState(0);
  const [rightApples, setRightApples] = useState(totalApples - leftApples);

  const rightBtnEvt = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      setRightApples(rightApples - 1);
      setLeftApples(leftApples + 1);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

        <ButtonComponent imageUrl={LeftArrow} btnClickEvt={leftEvtBtn} />

        <ButtonComponent
          imageUrl={RightArrow}
          btnClickEvt={rightBtnEvt}
        ></ButtonComponent>
        <ApplesBaskt appleCount={rightApples} basket="Basket 2" />
      </div>
    </>
  );
};

export default AppleCounterComponent;
```

no changes in AppleCounter.jsx

In some cases, you will see `condition1 && condition2` -> It means if condition 1 is true, render the value in condition 2, else do nothing. Works similar to logical AND.

---

# [How to Scope CSS to a Component in React? | CSS Modules in React | The Complete React Course | Ep.18](https://www.youtube.com/watch?v=YjB5LaJTR5c&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=19)

Till now we have been using external css for all our react components but sometimes when we write css for one component, it gets reflected for all the components in that page as when a css file loads for a page, it gets applied to all the components in that page.

Now how can we give selective css for a component without altering the css of other component, we will see it here.

So let us focus on our counter component, say I want to keep the counter button yellow and the counter text green while the remaining buttons are red, as made in App.css. So how to do so??

Simple, we will create a css file called `Counter.module.css`, name can be anything, we just need to use `module.css` after it. Then we can write css for that component as normally.

### Importing the css file

Now if we want to show or reflect these changes in our Counter.jsx file, we will do so like this:

```jsx
import { useState } from "react";
import styles from "../Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1 className={styles["text-ksd"]}>{count}</h1>
      <button
        className={styles.btn}
        onClick={() => {
          {
            setCount((prev) => prev + 1);
          }
        }}
      >
        Count ko badhaao
      </button>
      {/* Never use count++ with React state. Use count + 1 or the callback form. */}
    </div>
  );
};

export default Counter;
```

Notice how we used it like an object, because by following this method, we can use styles like an object inside which we will find all the css classes.

We can then access them using dot operator.

Note: In classes like `.text-ksd`, we will have to use bracket notation as seen above. Or else, we can use camel case for class naming like `textKsd`.

### Now how to give multiple css classes to a component

We can use an array, write multiple css classes and then use `.join(" ")`. We will see the example below, look at button element:

```jsx
import { useState } from "react";
import styles from "../Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1 className={styles["text-ksd"]}>{count}</h1>
      <button
        className={[styles.btn, styles["text-ksd"]].join(" ")}
        onClick={() => {
          {
            setCount((prev) => prev + 1);
          }
        }}
      >
        Count ko badhaao
      </button>
      {/* Never use count++ with React state. Use count + 1 or the callback form. */}
    </div>
  );
};

export default Counter;
```

---

# [Hands-On React Using Real World Projects | Frontend Mentor | The Complete React Course | Ep.19](https://www.youtube.com/watch?v=tlHyG8fAEHs&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=20)

Please go to react_19_rest_countries_api_using_react

There you will see the Css files, all component files. All unique functionality code, I will put here, but for all code go there.

---

# [Implement Search Functionality in React | The Complete React Course | Ep.20](https://www.youtube.com/watch?v=SP9T988eaWM&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=21)

Here we will implement the following functionality: When I click on the search bar and type inputs, I should see those countries who have characters matching to those entering in the input.

Now in JS, we would simply select the input field via query selector and write code. There I used foreach for each country and made only those countries visible whose name matched the input value.

Here we can do the same thing using filter but what is important here is this: How to select the input field and how to make the countries that are not matching go away, both of these events are linked and they use the state change, so we will use useState. But where to call it and where to use that hook is the main concern as it is used in the search component and the AllCountries component.

In such cases, use it where its parent is there and that is the App.jsx component.

```jsx
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import AllCountries from "./components/AllCountries";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter />
        </div>
        <AllCountries query={query} />
      </main>
    </>
  );
};

export default App;
```

By default, query is `''` and setQuery will keep updating the query which is given via the search bar. Via the query we can filter out the countries we want to see by their name using a filter and map function as seen below.

```jsx
import React from "react";
import CountryCard from "./CountryCard";
import countriesData from "../../countries-data";

const AllCountries = ({ query }) => {
  return (
    <div className="countries-container">
      {/* filter for search functionality, map for displaying all countries as per filter */}
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
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
```

Finally let us see how we are using setQuery in the search bar

```jsx
import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
```

Be mindful to use lowercase in the input field and during filter if we want case-insensitive results.

Using this exact same logic, we made the region filter also.

App.jsx

```jsx
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import AllCountries from "./components/AllCountries";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>
        <AllCountries query={query} region={region} />
      </main>
    </>
  );
};

export default App;
```

All countries.jsx

```jsx
import React from "react";
import CountryCard from "./CountryCard";
import countriesData from "../../countries-data";

const AllCountries = ({ query, region }) => {
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
```

region filter.jsx

```jsx
import React from "react";

const RegionFilter = ({ setRegion }) => {
  return (
    <select
      className="filter-by-region"
      onChange={(e) => setRegion(e.target.value.toLowerCase())}
    >
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;
```

---

# [useEffect Hook in React | Hindi | The Complete React Course | Ep.21](https://www.youtube.com/watch?v=6s-YLyidW8U&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=22)

Till now we were getting all the countries data from a file countries-data.js, but what if we want to use fetch api.

Now say we use the normal fetch api in AllCountries component, initially it will not give anything

```jsx
import React from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../../countries-data";

const AllCountries = ({ query, region }) => {
  let countriesData = [];
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
  )
    .then((res) => res.json())
    .then((data) => (countriesData = data), console.log(countriesData));
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
```

Now we know this fetch call is asynchronous, so it is not showing anything when state is updated, so let us use useState now.

```jsx
import React from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../../countries-data";
import { useState } from "react";

const AllCountries = ({ query, region }) => {
  const [countriesData, setCountriesData] = useState([]);
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
  )
    .then((res) => res.json())
    .then((data) => setCountriesData(data), console.log(countriesData));
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
```

Now we will get our output but in the network tab, we will see it calling the api multiple times and it keeps it calling, thing is, when it calls the api once, the state changes, the component is rendered again, and the state changes again and the component is rendered again and so on.....

But we can do it like this also right, where we only call the countries when the setCountries array data is zero.

```jsx
import React from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../../countries-data";
import { useState } from "react";

const AllCountries = ({ query, region }) => {
  const [countriesData, setCountriesData] = useState([]);
  if (countriesData.length === 0) {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
    )
      .then((res) => res.json())
      .then((data) => setCountriesData(data), console.log(countriesData));
  }

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
```

This causes one more edge case, what if we were to make a button which removes all countries, in that case the setCountries data becomes zero, but just when it reaches zero, it will call the fetch again and our button loses its functionality.

To prevent this and call the countries once when the page is loaded, we will use a hook called `useEffect()`. This hook is very useful when we are fetching data from api and want to call it once when page is loaded.

```jsx
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
```

1.

```jsx
useEffect(() => {
  console.log("Hi");
}, []);
```

Here `Hi` will be printed once when the page is loaded. For that we will use an `empty dependency array`.

2.

```jsx
useEffect(() => {
  console.log("Hi");
});
```

Here `Hi` is printed on every state change, no dependency array.

3. To print `Hi` based on certain conditions or state changes, pass those values in the dependency array.

### Hence we can say that useState is used to create a state and useEffect is used to monitor a state.

Okay so in short, we use use Effect when:

1. We want to fetch data from API and want to call it once when the page is loaded.
2. We want to track a variable state change and based on that state change, we call the useEffect hook.
3. When a component is going away from a page (unmounting) and we want to use the use effect, we will use a cleaner function basically here in this case.

---

# [React Router v6 in Hindi | Routing in React | The Complete React Course | Ep.22](https://www.youtube.com/watch?v=eXYnWED_1dI&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=23)

In react when our site is loaded, we see only one of our pages is loaded, we see that it is `main.jsx`, to see it visit the site and do `Ctrl + U`. Now we can clearly see the site code file.

Now what to do if only one page is being served by react and we want to create multiple pages.

To do so we will use `react-router` which is a library which helps us to create multiple pages in our react apps.

This library is not made by react, it is a third party library.

[Docs Link](https://reactrouter.com/home)

To install it, do `npm i react-router-dom`

Then we put in these code snippets in our main.jsx file.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

```jsx
<RouterProvider router={router} />
```

[Docs Link](https://reactrouter.com/6.30.1/start/tutorial)

main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

Now we see when we load our page, we see a text `Hello World!` instead of the usual countries page when we load our page.

This is because of

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

It means when the Route is `/` then it is the Home Route, and when the page loads, we see the Home Route and then shouw the text Hello World instead of our countries page, i.e. the App component.

To see the App Component, we will replace that Hello World Div with our App Component.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
```

Now let us make some pages here, say a `Contact Us` page.

```jsx
import React from "react";

const Contact_Us = () => {
  return (
    <>
      <h1>Contact Us</h1>
    </>
  );
};

export default Contact_Us;
```

Now we set up a route to the contact us page

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact_Us />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

In this way, we can create multiple routes in react and hence, call multiple components via different routes.

In this router provider `<RouterProvider router={router} />`, we did not render any of our component, we rendered a component provided by the react router dom.

Now let us look at the challenge of showing same component on multiple routes. Eg. We want the header component on both main page and `/contact` page.

Let us see some ways in which we can do it, going from least used to most used:

1. Put the header component in both App.jsx and Contact_Us.jsx.

```jsx
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import AllCountries from "./components/AllCountries";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>
        <AllCountries query={query} region={region} />
      </main>
    </>
  );
};

export default App;
```

```jsx
import React from "react";
import Header from "../components/Header";

const Contact_Us = () => {
  console.log("Hello");
  return (
    <>
      <Header />
      <h1>Contact Us</h1>
    </>
  );
};

export default Contact_Us;
```

2. We will do like this:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact_Us />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
```

By doing this we will keep our header component intact and just the content below that will keep changing based on the route. So we removed our header from our App.jsx and Contact_Us.jsx and just put it in our main.jsx file.

But ideally we need that all our components should be in App.jsx

3. Using Outlets and children.

First we will remove the header component from everywhere, then we will do:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contact",
        element: <Contact_Us />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

So here we have added a children array to our main route and there we provided the route for contact us page. 

Now by doing this, we can use a feature called `<Outlet />` which is provided by the react router dom.

In App.jsx, we will do this:

```jsx
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import AllCountries from "./components/AllCountries";
import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
    <Header />
    <Outlet />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>
        <AllCountries query={query} region={region} />
      </main>
    </>
  );
};

export default App;

```

Now by doing this, it will show the header along with the countries on the main route but as we go to `/contact` route, we will only see the contact us page with no header, so for that we need to specify individual routes for each page.

So, just like we did for the contact us page, we will do the same for the flags page, by making it store into a home page component.

```jsx
import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import AllCountries from "../components/AllCountries";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <main>
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

Now above was Home.jsx, now let us see the updated App.jsx

```jsx
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;

```

We removed all the Home Page data and put it into the Home page component, now as for App.jsx, the outlet will show the desired component data and output based on the route provided, but we have put a header above it, which means that, though our content in outlet keeps on changing based on the route, the header will remain constant ie. fixed for all the pages. We can also put a footer below the outlet if we want the footer to also remain the same for all the pages.


Finally, look at main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact_Us />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

Here also, we put the Home page and the Contact page as the children routes inside the main route. By doing this, we can tell the Outlet which component to render on which route.

This is how we can get dynamic pages with constant header and footer.

*******************

Now let us work on showing a 404 not found page component in case we enter an invalid route.

```jsx
import React from 'react'

const Pages = () => {
  return (
    <>
        <img src='/assets/404-error.jpg' alt='404 error' style={{width: '100%', height: '100vh'}} />
    </>
  )
}

export default Pages

```

Made the Error_Page

Now to show this image, I faced an error. Here remember to place the image in the public folder and enter the path (src) correctly (see the code above).

Now let us see main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import Error_Pages from "./pages/Error_Pages.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Pages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact_Us />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

```

We only added one line here, errorElement: <Error_Pages />. This will show the error page component when we enter an invalid route.

****************

Let us now work on making the Country_Details page.

1. Make a new component called Country_Details.jsx

### Shortcut Key = Shift + Ctrl + L (selects multiple lines of same text, best for renaming class to className).

basic code

```jsx
import React from "react";

const Country_Details = () => {
  return (
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src="" alt="" />
          <div className="details-text-container">
            <h1>Iceland</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages"></span>
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
```

Add a route for it too in main.jsx.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import Error_Pages from "./pages/Error_Pages.jsx";
import Country_Details from "./components/Country_Details.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Pages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact_Us />,
      },
      {
        path: "/countryDetails",
        element: <Country_Details />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

```

By keeping it inside as a children, we can add a constant header and constant footer in this page as well.

******************

Ok now we will start working on the country details page, 

1. For the css, make a new file called `CountryDetail.css` and then import it.

2. Also make a new component called `Country_Details.jsx`, also provide a route for the outlet. By doing this the Header will remain constant in this new page too.

see main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import Error_Pages from "./pages/Error_Pages.jsx";
import Country_Details from "./components/Country_Details.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Pages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact_Us />,
      },
      {
        path: "/countryDetails",
        element: <Country_Details />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

Now let us see the country details component

```jsx
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

```

Here we used a URLSearch Params which fetches the country name from the URL. We got this URL when we clicked on a country card, focus on the URL here.

P.S. In JS we used anchor tag to navigate from all countries page to a country details page, there whenever we navigated between pages, the site reloaded always. Here in React, we are focused on making a single page application, where we are using different components. Well if you disregard the Contact_Us and Error Pages, those are just for practice. Ideally, they should also be components, but to learn routing we inserted those 2 unnecessary pages.

Ok back to the topic, so in single pages, we do not want the site to reload when a component mounts and unmounts, for that we can use a `<Link>` tag instead of anchor tag. This is a component, provided by the React Router DOM and it takes care that our site does not reload when a component is mounting-unmounting, so we can use it instead of anchor tag.

```jsx
<Link className="country-card" to={`/countryDetails?name=${name}`}>
```

Look here instead of `href`, we used a `to`. That's it. Just import it at the top and it is all.

****************************
Now coming back to the country details page,

```jsx
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
```

So we used a URL Search Params to extract the country name from the Link tag. Now we will use another fetch api to extract the country details from this country name.

2. But we see we have used it inside a use Effect hook here with a `,[]`. It means, run the useEffect once only when the component is mounted, ie. when a country is clicked in the all countries page. 

3. When the use Effect runs, it fetches the data of a country, now to display these changes, we need to use useState. Why, because when the new data comes, the state changes, and to re-render the page with the new data via react, useState is highly encouraged. If we do not use it, then we will not see any new data unless we manually re-render the data. Such is the law of react.

4. Ok, so useEffect runs, useState makes the state changes, when ever the useEffect runs and we get new Country data. All we need to do is now, update the fields with these new data. We used an object here, because we need to get multiple values here and it is easy to locate them via key value pairs.

5. Rest all `Object.values()` shit is already covered when we made this via JS. Basically, we use it to convert the object with dynamic keys to an array of values.

```jsx
const languages = {
  eng: { name: "English" },
  fra: { name: "French" },
  hin: { name: "Hindi" },
};

```

`Object.values(languages)` =>  

```jsx
[
  { name: "English" },
  { name: "French" },
  { name: "Hindi" }
]

```

we then map and join for stuff like native name, capitals, currencies.

We will cover `Border Countries` later + `Back Button` Later

So with that all fields are filled, and we are done with this country details page.


---

# []()