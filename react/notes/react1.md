# [The Complete React Course | Trailer | Zero to Advanced](https://www.youtube.com/watch?v=_rTCzxg6VmM&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F)

React.js is a javascript library which is used to make fast and interactive web applications.

React -> Learn once, write anywhere

---

# [Why do we need React? | The Complete React Course | Ep.01](https://www.youtube.com/watch?v=EsdfHKhiK-g&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=2)

In JS when we wanted to change the properties of an element, be it via display or functionality, we always used `document.querySelector() i.e. DOM` for each element every time. This could become very tiresome and hence we switched to react because here it does not happen like that.

Here we think of things as components. We think of re-using the components. Template is same, but the info in it changes every time.

When we make apps via react, we make it as a single page apps. In html css, when we make apps of multiple pages, each page has a different html file i.e. when we go form page a to page b, the site reloads every time a switch happens. 

But in react multi pages apps, the site will not reload when we switch the pages.

## Question: We are given 2 baskets (basket 1 has 10 apples and basket 2 has 0 apples) and we have 2 buttons, left and right. 

## Task -> Using JS, make sure when you click on left button, 1 apple from basket 2 comes to basket 1 and when you click on right button, 1 apple from basket 1 comes to basket 2. But overall no basket should have more than 10 or less than 0 apples.

```html
<!DOCTYPE html>
<html lang="en" class="box-border m-0 p-0">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Basics</title>
    <link href="./output.css" rel="stylesheet">
    <script src="./script.js" defer></script>
</head>
<body class="size-full">
    <section class="max-w-[800px] flex justify-between mx-auto mt-16">
        <div>
            <h1 class="text-3xl font-bold"><span class="basket-1-text">10</span></h1>
            <p class="text-3xl font-medium">Basket 1</p>
        </div>

        <button class="bg-gray-500 px-2 my-3 btn1" title="Left Arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>

        <button class="bg-gray-500 px-2 my-3 btn2" title="Right Arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>

    
        <div>
            <h1 class="text-3xl font-bold"><span class="basket-2-text">0</span></h1>
            <p class="text-3xl font-medium">Basket 2</p>
        </div>
    </section>

</body>
</html>
```

```js
const basket1Text = document.querySelector(".basket-1-text");
const basket2Text = document.querySelector(".basket-2-text");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

button1.addEventListener("click", (e) => {
//   console.log("btn1 clicked");

  let countBasket1 = parseInt(basket1Text.innerText);
  let countBasket2 = parseInt(basket2Text.innerText);

  if (countBasket1 < 100 && countBasket2 > 0) {
    countBasket1++;
    basket1Text.innerText = countBasket1;
    countBasket2--;
    basket2Text.innerText = countBasket2;
  }
});

button2.addEventListener("click", (e) => {
//   console.log("btn2 clicked");
  let countBasket1 = parseInt(basket1Text.innerText);
  let countBasket2 = parseInt(basket2Text.innerText);

  if (countBasket2 < 100 && countBasket1 > 0) {
    countBasket1--;
    basket1Text.innerText = countBasket1;
    countBasket2++;
    basket2Text.innerText = countBasket2;
  }
});

```

### Imperative Programming

This programming technique is called, `imperative programming`. It means whenever we want to update a variable, we locally update it, then we go to dom, call that element and then update it there also. This happens every single time.

### Declarative Programming

React uses `declarative programming`. It means, when we update a variable locally, it is reflected in dom also.

### Main reasons to use React:

1. Declarative Programming

2. Component Based Architecture

3. Single Page Application - Site will not reload when changing pages

---

# [What is React Element? | The Complete React Course | Ep.03](https://www.youtube.com/watch?v=k-jHi0USEQM&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=4)

React is the library for building components and managing state.

ReactDOM is the library that connects React to the real DOM (i.e., the actual HTML on the page).

## Creating Elements via React.createElement()

```js
React.createElement(
  type,      // e.g., 'div', 'h1', YourComponent
  props,     // object with attributes like { className: 'title' }
  children   // can be string, number, element, or other children
)
```

children means the text inside the element

eg

```js
const element = React.createElement('h1', { className: 'greeting' }, 'Hello, Kaust!');
```

nowadays we do it like this:
```jsx
const element = <h1 className="greeting">Hello, Kaust!</h1>;

```

This creates

```html
<h1 class="greeting">Hello, Kaust!</h1>
```

Now in react we cannot directly display this h1 on our screen, we need to render it i.e. display it on the screen via ReactDOM. We do it by writing some code.

To render it, we do:

```js
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
```

final code eg.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Element</title>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
      defer
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    defer></script>
    <script src="./script.js" defer></script>
  </head>

  <body style="font-family: cursive">
    <h1>React Element</h1>
    <div id="root"></div>
  </body>
</html>
```

```js
const h2 = React.createElement('h2', {className: 'hello'}, 'Kaust here');

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);
```

By doing `React.createElement`, we are creating complete objects of an element.

Now we can also pass arrays as children, but for that, we need to give keys in props. Arrays are used when we have multiple children elements.

Parent and children can have the same key no. but siblings cannot have the same key no.

```js
const h2 = React.createElement("h2", { className: "subheading" }, [
  React.createElement("span", { className: "highlight", key: "highlight" }, [
    React.createElement("i", { key: "icon" }, "Hello There")
  ]),
  React.createElement("span", { className: "normal", key: "normal" }, " — Welcome to React!")
]);
```

### inserting images in react

```js
const h2 = React.createElement("h2", { className: "subheading" }, [
  React.createElement("section", { className: "highlight", key: "1" },
    React.createElement('img', {key: '2', style: {width: "100px"}, src: 'https://imgs.search.brave.com/RDShoxFugeFQ0mWGyXifY7dMyTPTl13j36AOd8G4tHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTI0/OTM1NTEvcGhvdG8v/cGVyZnVtZS1zYW1w/bGVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1NTG5IaFNz/SUZaNlk1QUo3NjZK/Vm16ZEg2NEdVb2p5/eVlNbVo1bXFIS2tZ/PQ'})
   ),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);

console.dir(h2)

```

Look how we wrote style inside an object in a key-value pair. 

`Also follow camel case while giving property name unlike css`

eg. backgroundColor instead of background-color

Now those elements which do not have any text (aka children) inside them are called `void elements`, eg. img, input, hr etc.

If we try to give a children to them here, React will throw an error.


### Making a form using react

```js
const h2 = React.createElement(
  "section",
  { className: "highlight", key: "1" },
  [
    React.createElement("form", { key: "2" }, [
      React.createElement("div", {}, [
        React.createElement("label", { htmlFor: "username", key: '2' }, "Username"),
        React.createElement("input", {
          type: "text",
          id: "username",
          name: "username",
          key: "1",
        }),
      ]),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);

console.dir(h2);
```

Parent and children can have the same key name but siblings cannot have same key names.

Now this way of writing html in javascript is way old, newer methods like JSX make it easy for us to write html in javascript.

Our browser does not understand JSX, to make it understand JSX, we use a compiler called `Babel` which acts like a middleman.

---

# [What is JSX? | Transform JSX with Babel | The Complete React Course | Ep.04](https://www.youtube.com/watch?v=_ze46JgZpd4&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=5)

Babel converts our JSX (JavaScript XML) into normal JavaScript.

While using cdn link of babel in html, insert `type="text/babel"` in the script tag. This will prevent errors.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Element</title>
    <script src="https://unpkg.com/@babel/standalone@7.27.0/babel.js"></script>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
      defer
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      defer
    ></script>
    <script src="./script.js" type="text/babel" defer></script>
  </head>
  <body style="font-family: cursive">
    <h1>React Element</h1>
    <div id="root">
      <!-- <h2>Hello JS</h2> -->
    </div>
  </body>
</html>

```

```js
const h2 = <h2>Hello JSX</h2>
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);

console.dir(h2);
```

What babel does here is, it takes script.js, converts the code file into a format which is readable by our browser and then includes it in a script tag inside our head tag, (check the last script tag in the head tag while inspecting the html). We will see the same old format code which is written automatically by babel.

# 🛑 Installing babel via cli 

1. `npm install --save-dev @babel/preset-react`

2. `npm install --save-dev @babel/preset-env`

3. Make a `babel.config.json` file in the same directory as the package.json and use this code:

```json
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
```

4. Also make sure of the following in the devDependencies in the package.json file.

```json
"devDependencies": {
    "@babel/cli": "^7.27.0",
    "@babel/core": "^7.26.10",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3"
}
```

5. Finally: `npm run build` in terminal.

Now we will see a lib folder is created where all the code from our src folder is taken, and converted to a format which is readable by our browser.

6. Finally in our index.html, we will change the src in script tag to run our code. Make the src to lib/script.js

` <script src="../lib/script.js" type="text/babel" defer></script>`

---

# [How Source Maps Can Save You Time in React Development | The Complete React Course | Ep.05](https://www.youtube.com/watch?v=DOu5CJzo8rY&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=7)

Telling babel how to generate source maps:
1. update build in package.json > scripts

```json
// old
"build": "babel ./script.js -d lib"
```

```json
// new
"build": "babel ./script.js -d lib --source-maps"
```

now do: `npm run build`

We see a `script.js.map` file created in the `lib` folder.

This helps us a lot in debugging in the browser.

Source Maps in React are used to map your minified/transpiled code (like from Babel/Webpack) back to your original source code, which helps a lot during debugging.

Sending source maps in production is optional

2. in babel.config.json, add this code:

```json
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    // add the below line after giving comma
    "sourceMaps": true
  }
```

```json
"build": "babel ./script.js -d lib --watch"
```

This command helps in live compiling

---

# [Why Should You Learn React With Parcel? | The Complete React Course | Ep.07](https://www.youtube.com/watch?v=3Yah9eBZwM0&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=9)

## What are Bundlers  
A bundler is a tool used in web development to bundle JavaScript files (and often other assets like CSS, images, etc.) into a single file or a few optimized files that can be efficiently loaded by a web browser.

### 🔧 Why Use a Bundler?
When developing a modern web application, your code is usually split across many files and modules. Browsers aren't optimized to handle a large number of small files efficiently. 

A bundler:

- Combines your code and its dependencies into fewer files.

- Optimizes the code (minification, tree shaking).

- Converts modern JavaScript (like ES6+) to older versions for compatibility.

- Can handle non-JS assets (CSS, images, fonts, etc.).

Some bundler tools:

- Webpack

- Parcel

- Vite

Vite is the fastest, but parcel is more easy to learn and adapt.

We have made a react_06 folder for everything we'll do in this video

1. go to that folder via terminal

2. `npm init -y`

A package.json file is now created.

then 

3. Add index.html and script.js to the folder

In bigger projects, we use import and export for react and not CDN links.

4. Installing React and React DOM

`npm install react react-dom`


we can see them in dependencies inside package.json

5. Add a script tag in index.html

```html
<script type="module" src="./script.js"></script>
```

6. Run it via live server

7. We can now play with some other files and use import and export

Now our node modules is a server side folder i.e. not understandable by the browser. But inside it is the react folder (a client side folder). So how to run it?

8. For this we use a tool called parcel.

`Go here: https://parceljs.org/getting-started/webapp/`

9. Now we run this:

`npm install --save-dev parcel`

This will get us all parcel dependencies including babel in our node modules.

10. Next do:

`npx parcel index.html`

npx -> Execute npm package

index.html -> Starting point of our app

Now it starts its own server and makes a localhost link.

(Got an error here: removed a line from package.json file)

#### Parcel also does Hot Reloading aka HMR (Hot Module Replacement). This allows us to make and see changes in the browser without the page getting reloaded, unlike live server.

Also it generates and connects source map.

We see in dist folder, it servers a completely different index.html, a different script.js and a script.js.map (source map) file.

---

# [Render Multiple Elements in React | The Complete React Course | Ep.08](https://www.youtube.com/watch?v=Ps_6LcVhERs)

#### 1. Now to avoid repeatedly writing `npx parcel index.html` to run our code, we can do this:

- Go to package.json file
- Inside the script object, insert this code:

`"start": "parcel index.html"` (separate with commas)

- now do `npm start` (shortcut)

2. Next we do not write any html in index.html, we just write our react code in script.js

we just write this in html body

`<div id="root"></div>`


### A simple card component in React

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" type="module"></script>
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

```js
import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";

const card = (
  <>
    <div className="card-container">
      <div className="card">
        <img
          src="https://imgs.search.brave.com/78HGXVLNZjpPa5BKJh_Vi91W97oRiGwlNdgTcSop9ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTExLmpwZw"
          alt="iphone"
        />
      </div>
      <div className="card-content">
        <h2>Hey There</h2>
        <p>I am a great i-phone</p>
        <p>Price: $999</p>
      </div>
    </div>
  </>
);

const root = createRoot(document.getElementById("root"));

root.render(card);

```

### Making multiple cards by fetching data from API and displaying its data in our card component, basically we reuse this card component

We can use a function instead of a variable here, for multiple cards, we will call this function multiple times. Also we will give each function a unique key and fetch data from an API.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" type="module"></script>
    <title>Render Multiple Elements</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

```css
.card {
    width: 250px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
}

.card img {
    width: 100%;
    max-height: 150px;
}

.card h3, .card p {
    margin: 6px 0;
}

.card-content {
    padding: 0 8px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    /* justify-content: space-between; */
    /* align-items: flex-start; */
}
```

```js
import { createRoot } from 'react-dom/client'
import './style.css'

function Card(key, title, image, brand, price) {
  console.log(key)
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.title,
            product.thumbnail,
            product.brand,
            product.price
          )
        })}
      </div>
    )
  })
```

---

# [Introduction to React Component | The Complete React Course | Ep.09](https://www.youtube.com/watch?v=TUsVCNr7HnY&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=10)

Now in last lecture when we rendered multiple objects using a re-usable function, we rendered `id, title, image, brand, price` in this order and displayed. But if we do not use this exact order to display things, then we may see different things getting output every time.

To fix this order issue, we will put all these inside an object and make them key-value pairs.

## This is where we will use it as `PROPS`

```js
import { createRoot } from "react-dom/client";
import "./style.css";

function Card(props) {
  const { key, title, image, brand, price } = props;
  // console.log(key)
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

console.log("Hello world!!!");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          retun Card({
            title: product.title,
            image: product.thumbnail,
            key: product.id,
            price: product.price,
            brand: product.brand,
          });
          {
            /* no issues when we reorder */
          }
        })}
      </div>
    );
  });
```

### We will now create a react element inside root.render

We know that root.render accepts a react element. React element is a simple object which has some properties.

Let us create one below with those properties.

```js
import { createRoot } from "react-dom/client";
import "./style.css";

root.render({
  $$typeof: Symbol.for('react.element'),
  type: 'h1',
  ref: null,
  props: {
    children: 'This is a prop children i.e. text inside h1 element',
  },
})
```

#### But we will get an error. The error you're seeing is because you are manually creating a React element object instead of using React's createElement or JSX, which is not supported directly like you're doing above.

Instead, use 2 ways

1. via jsx

```js
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<h1>This is a prop children i.e. text inside h1 element</h1>);

```

2. via React.createElement

```js
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const element = React.createElement('h1', null, 'This is a prop children i.e. text inside h1 element');

root.render(element);
```

Now we can also give type as a function instead of an html element and keep that html element inside our type function

```js
import React from "react";
import { createRoot } from "react-dom/client";

function MyHeading() {
  return React.createElement("h1", null, "Hello from MyHeading function");
}

const root = createRoot(document.getElementById("root"));

// This works because type is a function returning a React element
const element = {
  $$typeof: Symbol.for("react.element"),
  type: MyHeading,  // <== This is the function
  ref: null,
  props: {},
};

root.render(element);

```

But the above is old version so it won't work. This one will work.

```js
import React from "react";
import { createRoot } from "react-dom/client";

function MyHeading() {
  return <h1>This is rendered from a function component</h1>;
}

const root = createRoot(document.getElementById("root"));

// Using JSX (Recommended)
root.render(<MyHeading />);

```

Now in the case where we used props, we can also do it like this, it will not work though as it's an older version

```js
import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  const { key, title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

// Using JSX (Recommended)
root.render({
  $$typeof: Symbol.for("react.element"),
  type: Card,
  ref: null,
  props: {
    title: "iPhone 13",
    image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    brand: "Apple",
    price: 899,
    key: 12,
  },
});

```

This one will work

```js
import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  const { id, title, image, brand, price } = props;
   console.log("ID (acts as key):", id); // ✅
  return (
    <div className="card" key={id}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

// Using JSX (Recommended)
root.render(
  React.createElement(Card, {
    id: 12,
    title: "Essence Mascara Lash Princess",
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    brand: "Essence",
    price: 9.99,
  })
);

```

More shortcut

instead of

```js
function Card(props) {
  const { id, title, image, brand, price } = props;
}
```

de-structure props directly

```js
function Card({id, title, image, brand, price}) {
}
```

## Q. Now what is a React Component?

### A. React component is a react element of type `function`. It will return a JSX i.e. a simple element

eg. 
```js
React.createElement(Card, {
    id: 12,
    title: "Essence Mascara Lash Princess",
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    brand: "Essence",
    price: 9.99,
  })
```

Card is a function here.

More shorter way:

```js
root.render(
<Card 
    id= {12}
    title= "Essence Mascara Lash Princess"
    image="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    brand= "Essence"
    price= {9.99}
/>
);
```

Numbers in `{}`, string in `'' or ""` and no comma separating properties


Final full code (for multiple cards):

```js
import { createRoot } from "react-dom/client";
import "./style.css";

// 📦 Reusable Card component that displays product info
// Receives props: id (used in content), price, brand, image, title
function Card({ id, price, brand, image, title }) {
  return (
    <div className="card">
      {/* 🖼️ Product image */}
      <img src={image} alt={`Image of ${title}`} />

      <div className="card-content">
        {/* 🏷️ Title, Brand and Price */}
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>

        {/* 🆔 Just to show that 'id' is accessible inside the component */}
        <small>Product ID: {id}</small>
      </div>
    </div>
  );
}

// 🔗 Get a reference to the root DOM element and attach React to it
const root = createRoot(document.getElementById("root"));

// 🛠️ Fetch product data from the API and render it
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // ✅ Render a list of <Card /> components inside a container
    root.render(
      <div className="container">
        {data.products.map((product) => (
          <Card
            key={product.id}         // ✅ 'key' is for React’s internal use (must be unique in list)
            id={product.id}          // ✅ 'id' is passed as a prop (can be used inside the component)
            title={product.title}
            image={product.thumbnail}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </div>
    );
  });

```

### So now actual definition of a React component is: It is a function that returns some JSX. (Technical Definition). (Visually) it is a piece of UI that can be reused.

---

# [How to Use Images in React? | The Complete React Course | Ep.10](https://www.youtube.com/watch?v=P98-YCZ7h2k&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=11)

## Fuck Parcel, it does not load images, I will use VITE now

Flow:

1. index.jsx

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

2. App.jsx

```js
import React from "react";
import AppleCounterComponent from "./components/AppleCounter";
import "./App.css";

function AppComponent() {
  return (
    <>
      <h1>Apple Counter</h1>
      <div className="App">
        <AppleCounterComponent />
      </div>
    </>
  );
}

export default AppComponent;

```

3. Applecounter.jsx 

```js
import React from "react";
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";

const AppleCounterComponent = () => {

  return (
    <div className="container">
      <ApplesBaskt appleCount={0} basket="Basket 1" />
      <ButtonComponent imageUrl={LeftArrow} buttonName="left arrow btn" />
      <ButtonComponent imageUrl={RightArrow} buttonName="right arrow btn" />
      <ApplesBaskt appleCount={0} basket="Basket 2" />
    </div>
  );
};

export default AppleCounterComponent;

```

4. AppleBasket.jsx

```js
import React from "react";

const ApplesBaskt = ({appleCount, basket}) => {
  return (
    <div>
      <div>
        <span className= "apples">{appleCount}</span>
        <span className="apples">Apples</span>
      </div>
      <p className="basket">{basket}</p>
    </div>
  );
};

export default ApplesBaskt;

```

5. Button.jsx

```js
const ButtonComponent = ({ imageUrl, buttonName }) => {
  return (
    <div>
      <button className="btn" title={buttonName}>
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

6. App.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
}

h1{
  text-align: center;
}

.App {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  column-gap: 40px;
}

.apples {
  font-size: 30px;  
  font-weight: bold;
}

.btn {
  padding: 10px 20px;

}

.basket {
  margin-top: 15px;
}
```

do `npm run dev`

Now we will work with events to make this app work

---

# [Event Handling in ReactJS | The Complete React Course | Ep.11](https://www.youtube.com/watch?v=Yj2UB6NcMiw&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=12)

If you pass methods like onClick on elements, it works fine, but if you pass that same method inside a component, it will be treated as a prop.

So we have to pass the method as a prop and then call it inside the component

Let us continue with the previous example in AppleCounter.jsx

```jsx
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";

const AppleCounterComponent = () => {
  const totalApples = 20;
  let leftApples = 10;
  let rightApples = totalApples - leftApples;

  const rightBtnEvt = () => {
    if (leftApples > 0) {
      rightApples += 1;
      leftApples = leftApples--;
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      leftApples++;
      rightApples--;
    }
  };

  return (
    <>
      <div className="container">
      <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

      {/* way 1 */}
      {/* <ButtonComponent imageUrl={LeftArrow} buttonName="left arrow btn" btnClickEvt={() => console.log("Left Btn Clicked")} /> */}

      {/* way 2 */}
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

Ok now here code will not show any change because as soon as we click the left or right arrow button, the function runs and only the left and right apple VARIABLES change, we do not see any change in the text as react does not track it in this way. For it we need to use a Use state hook.

But we can still make it run without a use state, although the following code is considered as bad practice

```js
import ButtonComponent from "./Button";
import LeftArrow from "../assets/left_arrow.jpg";
import RightArrow from "../assets/right_arrow.jpg";
import ApplesBaskt from "./AppleBasket";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const totalApples = 20;
let leftApples = 10;
let rightApples = totalApples - leftApples;

const AppleCounterComponent = () => {
  const rightBtnEvt = () => {
    if (leftApples > 0) {
      rightApples++;
      leftApples--;
      root.render(<AppleCounterComponent />);
    }
  };

  const leftEvtBtn = () => {
    if (rightApples > 0) {
      leftApples++;
      rightApples--;
      root.render(<AppleCounterComponent />);
    }
  };

  return (
    <>
      <div className="container">
        <ApplesBaskt appleCount={leftApples} basket="Basket 1" />

        {/* way 1 */}
        {/* <ButtonComponent imageUrl={LeftArrow} buttonName="left arrow btn" btnClickEvt={() => console.log("Left Btn Clicked")} /> */}

        {/* way 2 */}
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
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        <button onClick={() => {
          root.render(<AppleCounterComponent />);
        }}>Re - Render </button>
      </p>
    </>
  );
};

export default AppleCounterComponent;

```

#### Choice, either pass root.render inside the button Re-render, then everytime you click the left or right arrow button, click see render to see the change.

Or

#### Pass root.render in both left and right arrow button and see the changes getting rendered directly without the need to click the re-render button every time you click left or right arrow.

---

# [How State Works in React – Explained in Depth | The Complete React Course | Ep.12](https://www.youtube.com/watch?v=iKWeMeeZdio&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=13)

state -> State is a variable that automatically re-renders when we change its value.

basically it checks and compares, which value is new and which value is old, and if the new value is different from the old value, then it will re-render the component.

In any function, if it starts with a `use` it is a hook.

### useState(undefined, function()) Hook

It returns an array and is used to set the initial state of a component.

First value is undefined, we can replace it with anything and it takes place of that undefined value. It then becomes the first value of a use State function.

Second value is an updater function, its job is to update the first value.

Take a look at this function below (see Counter.jsx in react_12)

```jsx
import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{marginBlock: "40px"}}>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Count ko badhaao</button>
      {/* Never use count++ with React state. Use count + 1 or the callback form. */}
    </div>
  )
}

export default Counter

```

Now we used array destructuring here to get the 2 values of useState(), count is set as 0, see that line, and we call the setCount function below. 

Then we put the count variable in h1, and call the setCount inside the button onClick, it is calling the function everytime the button is clicked, it is not calling the count variable, it is calling the setCount function. Set count checks what is the count variable value each time and since we do `count + 1` inside setCount, we get incrementation by 1 on each re-render.

Try doing count + 2, count + 3....

Basically, useState is a very mast and clever function. When we call it for the first time, it picks up the value of 0 from useState(0). But when when we re-render the page i.e. call it again it remembers that it has been called and it the picks up the value from setCount(count + 1).

For this, closures and memoization are used. See JS for recap.

So re-rendering happens only when the setCount value is updated.

Now what if we do this:

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          {
            setCount(count + 1);
          }
          {
            setCount(count + 1);
          }
          {
            setCount(count + 1);
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

How many times will the count feature increment on each re-render. 

#### Ans -> Just 1. It is because the setCount function is called only once.

So let us now see changes in apples via useState

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

See this is declarative programming where react uses its own virtual dom to update the real dom. In JS and JQuery which was imperative programming, we needed to ourselves update the real dom. Here in react, we just focus on the logic.

---

# [How useState Works Behind the Scenes in React | The Complete React Course | Ep.13](https://www.youtube.com/watch?v=FhBQsUZOc8c&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=14)

Let us come back to this question now, what if we use multiple useStates at once, say 3 at once, each incrementing the count by 1, so will the overall count increment by 3 upon rendering.

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          {
            setCount(count + 1);
          }
          {
            setCount(count + 1);
          }
          {
            setCount(count + 1);
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

Well no, because use state, say we use 4 different use states, three for doing count + 1, and other for printing hello.

Now useState will store the values in an array like this: [0, "hello"]. Since all 3 are same, only one value went to the array. Now every time, the component is re-rendered, the value in the array is updated and useState checks this value, not the one in component. Also setCount is inside onClick which is an asynchronous function, so every time it is called. It will only see the count as 0 and just go for it by 1. Not like 1, 2, 3. For all the 3 setCounts, in one call, the count value still remains 0. Once it is updated to 1 in the array, it will not be updated anymore unless it is re-rendered again.

### But then how to make it update by 3?

Simple, we use a callback to store its previous states, and we use the previous state to update the current state.


```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // prev => previousState
          {
            setCount((prev) => prev + 1);
          }
          {
            setCount((prev) => prev + 1);
          }
          {
            setCount((prev) => prev + 1);
          }
        }}
      >
        Count ko badhaao
      </button>
    </div>
  );
};

export default Counter;

```

Here prev gets the latest updated count value instead of the usual count when we were not using callbacks. Using callbacks makes it remember the latest updated value.

We know the latest state value comes in setState. 

### So whenever our state value depends on the previous state value, we use callbacks.

---

# [State Vs Props in React | When to use what? | The Complete React Course | Ep.14](https://www.youtube.com/watch?v=R5KmPOYxpss&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=15)

State => State is mutable, ie. changeable and is inside a component. When we change a state, the component, re-renders.

Props => Props is immutable, ie. cannot be changed. Props are passed to components. We can modify props but it is a bad practice. It is like a function's arguments.

Props jo hai wo parent component ka state hota hai, most of the time.

# [What are React Fragments? | Hindi | The Complete React Course | Ep.15](https://www.youtube.com/watch?v=6IU7VCVyy-M&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=16)

We can only return one element from a react component. But say we want to return multiple elements, then we will use a react fragment. This is no element, i.e. when we will use this, it will not create any element.

Ways to do it:

1. import {Fragment}

```jsx
import { Fragment } from 'react'

return (
  <Fragment>
    <section></section>
    <p></p>
  </Fragment>
)
```

Datatype of fragment => `Symbol(react.fragment)`

So when we do `<Fragment></Fragment>`, it will do a `React.createElement` internally.

Basically it creates a wrapper object, usually ignored by the react dom.

2. `<></>`

It works the same, ditto.

```jsx
return (
  <>
    <section></section>
    <p></p>
  </>
)
```