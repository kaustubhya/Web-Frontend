# Q1 Print Hello World to the console

```js
console.log("Hello World");
```


# Q2 Print numbers from 1 to 5 to the console using the loop
```js
for(let i = 1; i < 6; i++) {
    console.log(i);
}
```


# Q3 Write a function to add 2 numbers and return the result

```js
function add(a, b) {
    return a + b;
}

let sum = add(5, 7);
console.log(sum);
```


# Q4 Create a function to find the area of a rectangle given is its width and height
```js
function area(width, height) {
    return width * height;
}

let rectArea = area(10, 25);
console.log(`Area of the rectangle is ${rectArea}`);
```


# Q5 Write a function that takes in a string and returns the reversed version of it

IMP -> Strings are immutable in JS, so we cannot reverse them directly here.

For this, convert them into an array, reverse them and then make them turn back into string
 
```js 
 function reverse(str) {
    let s = str.split("").reverse().join("");
    // split turns it into an array of chars
    // reverse will reverse this array of chars
    // join turns array back to string
    return s;
}

let s = reverse("Lake");
console.log(s);
```