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

Now those elements which do not have any text (aka children) inside them are called void elements, eg. img, input, hr etc.

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

## Installing babel via cli 

1. `npm install --save-dev @babel/preset-react`

2. `npm install --save-dev @babel/preset-env`

3. Make a babel.config.json file in the same directory as the package.json and use this code:

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

1. Now to avoid repeatedly writing `npx parcel index.html` to run our code, we can do this:

- Go to package.json file
- Inside the script object, insert this code:

`"start": "parcel index.html"` (separate with commas)

- now do `npm start` (shortcut)

2. Next we donot write any html in index.html, we just write our react code in script.js

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
* {
    box-sizing: border-box;
  }

.card-container {
    border: 2px solid #000;
    border-radius: 12px;
    max-width: 300px;
    overflow: hidden;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
}

.card {
    margin-inline: auto;
}

.card img {
    width: 100%;
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    margin-block: 0;
    text-align: center;
}

p {
    margin: 0;
    padding: 0;
}
```

```js
import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";

/**
 * A single card component that displays the given image, title, brand and price.
 * @param {{key: string, title: string, image: string, brand: string, price: string}} props 
 * @returns {JSX.Element}
 */
function Card({id, title, image, brand, price}) {
  console.log(id);
  // for keys, we will use id as key
  // To use the key value inside your component, pass it as a separate prop, like id.
  return (
    <>
      <div className="card-container">
        <div className="card" >
          <img
            src={image}
            alt="iphone"
          />
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{brand}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => {
  root.render(
    <div className="container">
      {data.products.map((product) => (
         <Card
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.thumbnail}
          brand={product.brand}
          price={product.price}
        />
      ))}
    </div>
  )
})

```