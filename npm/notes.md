When we use some external libraries in our project, we can include it in our code in the following ways:

1. Using script tags to link that library source code

eg. We have imported an API using Axios library

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NPM Project</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>NPM Project</h1>
</body>
</html>
```

```js
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

```

Now this can cause some problems if the website from which we are importing the API goes down.

Also it pollutes the global space which we do not want.

2. Another way is to download the API code and put it in our project locally. This is a better option than 1.

But it also pollutes the global space too, which we do not want.

3. Using NPM (Node Package Manager)

This is a package manager that helps us to download and install external libraries in our project.

For this to work we need to install Node.js in our computer.

Node.js is a JavaScript runtime environment that allows us to run JavaScript code on the server.

This Node.js does not support DOM as it is not a browser. It is an Application connected to our computer, not the browser, which helps us in running JavaScript code on the server.

Now that we have installed Node.js in our computer, we can do the following:

`node -v` - To check the version of Node.js installed in our computer.

`npm -v` - To check the version of NPM installed in our computer.

Now we do the following:

`npm init` - Initialize an NPM project in the current directory. We see a package.json file has been created after we answered some of the questions.

`npm i axios` - Install the axios library in the current directory.

i -> install

Now, following things happen:

- A node_modules folder is created
- A package.lock.json file is created
- A dependencies object is created in package.json with axios inside of it.

Node modules folder is very heavy so we usually keep it in .git-ignore file and do not push it into github.

- `node` -> node.js runtime environment is created in our vs code terminal

do ctrl + c twice to exit out of this node environment

`node script.js` - To run the script.js file in the node environment

Now let us import axios in our script.js file: 

`import axios from 'axios';` it is so simple here, just mention what you want to import from 'library name', here library is axios and we are importing axios only from it.

Now we have imported axios in our script.js file.

Next we go to our package.json and set `type='module'`, this will allow us to use import statements in javascript.

Now do `node script.js` and we will see our output

```js
import axios from 'axios';

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

```

```json
{
  "name": "npm",
  "type": "module", // notice this line
  "version": "1.0.0",
  "description": "Just for learning purposes",
  "main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "KSD",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.7.9"
  }
}

```

Now this has worked for backend node but it will not work in frontend as its way of import is different, to resolve this issue we use bundlers (eg. webpack, parcel, vite etc.) which help us to bundle our code into a single file and then import it in our frontend.

Let us use [parcel](https://parceljs.org/) here.

- `npm i parcel -D` -> This will install parcel for us and keep it inside Dev-Dependencies instead of dependencies object (hence the -D flag).

Now parcel also helps us in running a server in our computer. We do not need a live server extension anymore now.

`npx parcel index.html` -> This will run the script.js file in the browser via the index.html file as script.js is linked to index.html.

`npx` means -> NPM Execute

A very new live server is created in our browser now.

What did this bundler do here: It took everything that we imported from axios, and put it in a script.js file which it made itself, then it linked that script.js file to our index.html file and then it ran the index.html file in a localhost:1234 which it created itself here. 

