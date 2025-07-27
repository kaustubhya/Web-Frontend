Installing React with Parcel 

Make a new folder

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

(Got an error here: removed the below line from package.json file)

`"main": "index.js",`

11. Now to avoid repeatedly writing `npx parcel index.html` to run our code, we can do this:

- Go to package.json file
- Inside the script object, insert this code:

`"start": "parcel index.html"` (separate with commas)

- now do `npm start` (shortcut)

12. Next we do not write any html in index.html, we just write our react code in script.js

we just write this in html body

`<div id="root"></div>`
