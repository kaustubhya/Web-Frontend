# [What is BOM in JavaScript?](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=66337348e26226a2de0743fa)

## BOM - Browser Object Model

Browser gives us a Window Object by default.

This window object has some properties which allows us to interact with windows.

Let us see them one by one:

Use these in developer console in Browser

### 1. location - This has some methods like host, hostname, path, href, and reload()

    1.1. location.reload() - While doing reload(), our site gets reloaded

`location.reload()`

1.2 location.href() - While doing this, we can alter our website's address

eg. `location.href = 'index.html'`

This will shift our website to index.html file (note to do this, make sure that the file that we are shifting our website to, should already occur in our codebase, here since every website has a default file of index.html, we are able to do it successfully).

Using this attribute, we can also go from one website to another.

eg. `location.href = 'website url'`

eg. `location.href = 'https://chatgpt.com/c/66e1d2f7-4ff8-8005-82d8-ab1ba8974a0c'`

---

### 2. history - This has some methods like:

a. backward() and forward() - This allows us to go back and forth when we open multiple web pages at once (like -> and <- arrow in our browser).

In console, do `history.back()` or `history.forward()`.

When we cannot go back or forward anymore, we get `undefined` as the return value.

b. go() - This allows us to go back and forth multiple pages.

eg.
`history.go(7) -> Go forward 7 pages`

`history.go(-4) -> Go back 4 pages`

These are found in prototypes in history.

---

### 3. innerHeight and innerWidth - This gives us height and width of the display browser screen.

It may change as screen size changes.

### 4. outerHeight & outerWidth - This will give us the widths of display browser + console + all the widths of task bar, menu bar, tab ball all.

To find all the extra height and width, do `outerHeight - innerHeight` and `outerWidth - innerWidth`

`Outer Height is fixed while inner height is variable`

---

### 5. open() - Opens a new tab

Returns the window object of a new tab.

`Different tabs have different window objects`

`open()`

This can be used to navigate to different file pages or even go to a new website in a new tab.

`open('https://www.youtube.com/')`

Syntax -> `open(url, name)`

we can check this name in the opened site's name variable.

By default, `name = ''`

---

### 6. close() - Closes that window which was opened via open()

eg

```js
open("https://www.youtube.com/");

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Youtube is open now in a new tab

close("https://www.youtube.com/");
// Youtube is close now and the tab is also closed now.
```

### 7. resizeBy() and resizeTo()

Pre-requisite:

We need to have a resizable tab opened by doing the following:

```js
open("https://www.youtube.com/", "ksd", "resizable");

// Window {window: Window, self: Window, document: document, name: 'ksd', location: Location, …}
```

Then we can do either `resizeBy(400, 800)` or `resizeTo(400, 800)`

Syntax => `resizeTo(width, height)`

#### Key Differences:

- resizeBy() changes the size relative to the current window size.
- resizeTo() sets the window size to specific, absolute dimensions.

## 8. moveBy() and moveTo()

Syntax => moveBy(x length, y length);

`moveTo(0,0) => Top left corner of screen`

### Key Differences

- moveBy() shifts the window by a relative number of pixels from its current position.
- moveTo() moves the window to specific, absolute screen coordinates.

## 9. scrollBy() and scrollTo()

In JavaScript, scrollBy(), scrollTo(), and scroll() are used to programmatically scroll elements (like the window or any scrollable element) in a web page. They differ slightly in their usage and scope.

1. scrollBy()
   Purpose: Scrolls an element (or the window) by a specific number of pixels relative to its current scroll position.

Syntax:

```javascript
element.scrollBy(xDelta, yDelta);
```

- xDelta: The number of pixels to scroll horizontally (positive values scroll to the right, negative values scroll to the left).
- yDelta: The number of pixels to scroll vertically (positive values scroll down, negative values scroll up).

Example:

```javascript
window.scrollBy(100, 200); // Scrolls the window 100px to the right and 200px down.
```

This method moves the scroll position relative to the current position of the element or the window.

2. scrollTo()
   Purpose: Scrolls an element (or the window) to a specific set of coordinates. It sets the scroll position to the exact values provided.

Syntax:

```javascript
element.scrollTo(x, y);
```

- x: The horizontal position to scroll to (in pixels).
- y: The vertical position to scroll to (in pixels).

Example:

```javascript
window.scrollTo(0, 500); // Scrolls to the vertical position 500px down and keeps the horizontal position unchanged.
```

In this case, the window or element will be scrolled to the absolute coordinates provided.

3. scroll()
   Purpose: This method works similarly to scrollTo(), and in modern browsers, it's essentially the same. It scrolls an element (or window) to the specified coordinates. scroll() also allows for additional options like smooth scrolling.

Syntax:

```javascript
element.scroll(x, y); // Basic syntax like scrollTo()

// Or with additional options
element.scroll({
  top: y,
  left: x,
  behavior: "smooth", // Optional for smooth scrolling
});
```

Example:

```javascript
window.scroll(0, 300); // Equivalent to window.scrollTo(0, 300)

window.scroll({
  top: 300,
  left: 0,
  behavior: "smooth", // Scrolls smoothly to 300px down
});
```

### scroll() offers a flexible option with smooth scrolling, which scrollTo() doesn’t natively provide unless invoked with additional arguments in modern browsers.

### Key Differences:

- scrollBy(): Scrolls relative to the current position (adds or subtracts from the current scroll position).
- scrollTo(): Scrolls to a specific, absolute position.
- scroll(): Essentially an alias for scrollTo(), but supports smooth scrolling and additional options.

#### Smooth Scrolling:

The scroll() method can include a behavior option (e.g., 'smooth') to animate the scrolling, while scrollTo() is limited unless combined with options in modern implementations.

## 10. Print()

Used to print a web page via a printer.

eg. `print()` and the printer window pops up.

# 11. Document (IMP) - This is DOM (Document Object Model). DOM is a small part of BOM but it is very important.

DOM is a part of `Web APIs`. These APIs help us in running code from the code from the JS engine to the Web Browser. Also these help us in interacting with the Web Browser via JavaScript.

# What is BOM?

Different Browser vendors like Chrome, FireFox, Safari has given us an Object Model called `BOM (Browser Object Model)` to interact with the Browser, we can move it, resize it, scroll it, see its history, locate it etc.. So BOM helps us do all of this and all these functionalities is present in a main object called `WINDOW OBJECT`.

---

# [Number System and Number Object](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=6690e467b3f85c2c29d906ed)

## Number Systems in JS

- Binary
- Octal
- Decimal
- Hexadecimal

Decimal System: 123, 1.58, 1 etc..

Octal System: 0124, 0o124, 01, 0o1 etc..

Use the `0o123` instead of `0123` in VS Code console.

### Octal

Uses numbers from 0 to 7 (8 characters)

```js
const numOct = 0o15;
console.log(numOct + 15);
// numOct = 13, hence 13 + 15(decimal) = 28
```

Here in `0o15` -> `0o` represents the Number System (octal here) and `15` represents the number `15` in octal. Upon conversion, it will be changed to decimal (13)

- `We cannot write 8 and 9 in octal (only 0 to 7)`

## Binary

`We can only put 0s and 1s here` (2 characters)

```js
const numB = 0b1100;
console.log(numB);

// 12 in decimal
```

`0b` Number System `1100` = binary number -> 12 in decimal

## HexaDecimal

Uses 16 characters (0 to 9) and (A to F) (10 digits and 6 alphabets => 16 characters).

eg

```js
const numH = 0x00aa7c9d;
console.log(numH);

// 11173021
```

Here also `0x` => Number System & `00AA7C9D` -> Number (Hexa Decimal)

Upon conversion, we get 11173021 in decimal.

Also here we cannot use any other character apart from `0 to F` else we get error.

## Scientific (Exponential) Notation

```js
const numSPos = 1.4578e7;
console.log(numSPos);
// 1.4578 * (10 ^ 7) = 14578000

const numSNeg = 1.4578e-3;
console.log(numSNeg);
// 1.4578 * (10 ^ -3) = 0.0014578
```

### Some Conventional Practices

- The number before e should be from 0.0 to 9.9 i.e. always less than 10, if it is greater than 10, raise the value of the number after e by 1.

```
1234e4 // this is valid but not the right practice
```

## Let us now look at some properties in Number

### 1. Number.MIN_SAFE_INTEGER & Number.MAX_SAFE_INTEGER

These give us the maximum and minimum possible value of numbers that are safe to work with in JS.

eg.

```js
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991 (2^53 - 1)

console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991 (2 ^ -53)
```

Any number greater than this will make our lives difficult while performing operations,

eg.
`9007199254740991 + 4 = 9007199254740996 and not 9007199254740995`

So performing simple operations here becomes difficult

Solution -> Use BigInt for numbers greater than this

`9007199254740991n + 4n = 9007199254740995n`

Big int + big int ✅  
Big int + int ❌

Hence we did `+ 4n` and not `+ 4`

```js
const num = Number.MAX_SAFE_INTEGER;
const ans = BigInt(num) + 4n;
console.log(ans);

// 9007199254740995n
```

### 2. Number.MAX_VALUE & Number.MIN_VALUE

These give us the Maximum and Minimum value of number we can store in JS under the Number datatype (big int is separate from this).

```js
console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308

console.log(Number.MIN_VALUE);
// 5e-324
```

If we try to add or subtract values from these, there will be no change seen in output as this number is too large to show value changes in the console.

### 3. Number.EPSILON

```js
console.log(Number.EPSILON);
// 2.220446049250313e-16
```

This is a number which is very small and is very close to 0.

It is the difference between 1 and the nearest decimal value greater than 1. Any value smaller than this nearest decimal value will be treated as equal to 1.

#### Where do we use this:

- IN JS when we tend to add small decimal numbers, they are not always giving us the accurate result, so we can use epsilon to add a conditional check and the print the number.

see this eg.

```js
const result = Math.abs(0.2 - 0.3 + 0.1);
// result can be a negative number, so we try to make it positive via Math.abs()

console.log(result);
// Expected output: 2.7755575615628914e-17

// We now check if this value is equal to 0 or not by comparing if it is smaller than Epsilon.

// If it is true, then the result is 0
// If it is false, then the result is not 0
console.log(result < Number.EPSILON);
// Expected output: true

// Output:
// 2.7755575615628914e-17 // result
// true // yes this is equal to 0
```

some more egs

```js
1 + Number.EPSILON;
// 1.0000000000000002

// 1 + 1.0000000000000002
2;

1.0000000000000002;
// 1.0000000000000002

1.0000000000000001;
// 1

// This last line means that any number smaller than 1 + Number.Epsilon will be treated as one and not a unique number, this application is shown in the above example where we compare if the result is equal to 0 or not
```

### 4. Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY

These give us values `Infinity` and `-Infinity`

### 5. Number.NaN

This gives us the value `NaN`

Always remember `NaN === NaN` is always false

## Some Number methods

### 1. Number.isNaN()

Gives a true or false value and checks if a Number is NaN or not

```js
console.log(Number.isNaN(145));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("l"));
console.log(Number.isNaN(""));

// false
// true
// false
// false
```

#### There is a `isNaN()` method also which first converts the value into a number and then checks if it is equal to NaN or not, it will give true if it is not able to convert the value into a number and false if it successfully converts the value into a number.

#### But `Number.isNaN()` checks directly if the value is === NaN or not without converting it into a number.

### 2. Number.isFinite()

Tells us true or false if a number is finite or not

```js
console.log(Number.isFinite("5jklmf5"));
console.log(Number.isFinite("50"));
console.log(Number.isFinite(50));
console.log(Number.isFinite(5000000000000e17));
console.log(Number.isFinite(Infinity));

// false
// false
// true
// true
// false
```

It will give true till `Number.MAX_VALUE` after that it will give false.

Same case for -ve numbers.

### 3. Number.isInteger()

Tells us true or false if a number is an integer or not

```js
console.log(Number.isInteger(-5.4));
console.log(Number.isInteger("-5.40"));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-80));
console.log(Number.isInteger(0));
console.log(Number.isInteger(05));
console.log(Number.isInteger(5.0));

// false
// false
// false
// true
// true
// true
// true
```

### 4. Number.isSafeInteger()

Checks if a number is a `safe integer or not`.

It ranges from MIN_SAFE_INTEGER to MAX_SAFE_INTEGER (i.e. returns `true` for all these values). For other values, including non integers and values greater or lesser than MIN_SAFE_INTEGER & MAX_SAFE_INTEGER, it gives `false`

```js
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
console.log(Number.isSafeInteger(3.59856));
// checks for integer, not float

// true
// false
// true
// false
// false
```

### 5. Number.parseInt()

The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.

eg

```js
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500 as F = 15 and 15 * 100 = 1500

console.log(roughScale("321", 2));
// Expected output: 0 as 321 is not properly converted to binary, it returns NaN hence we get 0

// Outputs:

// > 1500
// > 0
```

#### Explanation for case 2

`console.log(roughScale('321', 2));`

- The input '321' is interpreted in base 2 (binary).
- Since 321 is not a valid binary number (binary digits can only be 0 or 1), the parsing fails, resulting in NaN.
- The Number.isNaN(parsed) condition is true, so the function returns 0.

#### Radix or Base

An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.

If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed.

### 6. Number.parseFloat()

The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

```js
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: 0

// Outputs:
// > 28.695307297889173
// > 0
```

---

# [Introduction to DOM | Document Object Model](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=66337697e26226a2de07a9d1)

Now this `document` inside Window Object is an object, so to see all its properties clearly, do
`console.dir(document)`

This document has many properties: One of them is children. This children has HTML inside it.

Inside this html children, we get another children property, this children has head and body as properties.

Inside head children, we have, meta, title, etc...

So this parent and its children keeps going on like a tree, this is called `DOM TREE`.

`Every HTML element (tags + content) is an object behind the scenes.`

So there is a thing in HTML called `HTML Parser`, this HTML parser reads all the HTML lines one by one and then converts each element into an object and then establishes a parent-child relation between different elements and thus makes a DOM Tree.

![](./images/dom-tree-example.png)

Also every attribute that we give to an element (which is an object), becomes that object's property where attribute name becomes the key and the attribute value becomes the value of that key.

```js
document.children;

// HTMLCollection [html]
```

This HTML Collection is an object, not an array as we can not use array methods with it, but to access its values i.e. children inside it, we will need to use (.) or ([]) notation.

```js
document.children[0];

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Front-End-Roadmap</title>
  </head>
  <body style="font-family: sans-serif">
    <h1>Frontend Development for KSD</h1>
    <hr />
    <p>
      <strong> Frontend development </strong> is the development of the
      <a href="https://en.wikipedia.org/wiki/Graphical_user_interface">
        graphical user interface
      </a>
      of a website, through the use of
      <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"> HTML,</a>

      <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS,</a>
      and
      <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript,</a>
      so that users can view and interact with that website.
    </p>
    <img
      src="./assets/assets/images/html-css-javascript.png"
      alt="html-css-javascript image"
      style="width: 100%; max-width: 600px"
    />

    <ul>
      <li>
        <b><big>HTML</big>: </b>
        HTML: The <big>HyperText Markup Language</big> or <em>HTML</em> is the
        <small>standard</small>
        markup language for documents designed to be displayed in a web browser.
      </li>
      <br />
      <br />
      <li>
        <b>CSS: </b>
        CSS: Cascading
        <pre>            Style Sheets       </pre>
        <i>(CSS)</i> is a style sheet language used for describing the
        presentation of a document written in a markup language such as HTML or
        XML
      </li>

      <br />
      <img
        src="./assets/assets/images/css.png"
        alt="css-image"
        style="width: 100%; max-width: 600px"
        title="CSS Image"
      />

      <!-- <ol type="1" start="6"> -->
      <ol>
        <li>Pure CSS</li>
        <br />

        <li>Bootstrap <i>(Framework)</i></li>
        <p></p>
        <!-- 🛑 Also used for spaces -->
        <li>Tailwind <i>(Framework)</i></li>
        <br />

        <li>SASS <i>(Preprocessor)</i></li>
        <br />
      </ol>

      <br />
      <br />

      <li>
        <b>JavaScript: </b>
        JavaScript often abbreviated JS, is a programming language that is one
        of the core technologies of the World Wide Web, alongside HTML and CSS.
        It is use to add functionality in the website.
      </li>
      <br />
      <img
        src="./assets/assets/images/javascript.png"
        alt="javascript-image"
        style="width: 100%; max-width: 600px"
      />
      <br />
      <br />
      <ol type="a">
        <li>Vanilla JS</li>
        <br />

        <li>jQuery <i>(Library)</i></li>
        <br />

        <li>React <i>(Framework)</i></li>
        <br />

        <li>Angular <em>(Framework)</em></li>
        <br />

        <li>Vue <i>(Framework)</i></li>
        <br />

        <li>Typescript <i>(Preprocessor)</i></li>
        <br />
      </ol>
    </ul>
    <p style="text-align: center">All copyrights &copy; reserved</p>
  </body>
</html>

<!-- Html Entities: &copy; (copyright) -->

<!-- &times; => X -->

*/
```

But this is a long method, so we can directly access the body via `document.body`

```js
document.body;
// HTMLCollection(7) [h1, hr, p, img, ul, p, script]

document.body.children[4];
// <ul>...</ul> (full code inside <ul></ul>)
```

Now if we do:

```js
console.dir(document.body.children[4]);
```

We will get ul in an object form, with many properties, some of them are:

innerHTML and innerText

let us see some examples:

```js
document.body.children;
// HTMLCollection(7) [h1, hr, p, img, ul, p, script]

document.body.children[0].innerHTML;
// 'Frontend Development for KSD'

document.body.children[0].innerHTML = "I am a new heading";
// 'I am a new heading'
```

So we can temporarily change this innerHTML in DOM and we will be able to see these changes too in the screen, but when we reload the page, the changes go away as this is only temporary and the old values come back.

## innerHTML vs innerText vs textContent

The properties innerHTML, innerText, and textContent are used in JavaScript to interact with the content of HTML elements, but they have important differences. Here's an explanation with examples for each:

### 1. innerHTML

Purpose: Used to get or set the HTML content inside an element.

Behavior: It returns the element’s HTML, including tags. If you set it, any HTML code inside the string will be parsed and rendered as part of the document.

Use Case: When you need to include HTML tags in your manipulation.

Example:

```html
<div id="myDiv">
  <p>This is a <strong>paragraph</strong>.</p>
</div>

<script>
  const div = document.getElementById("myDiv");
  console.log(div.innerHTML); // Output: <p>This is a <strong>paragraph</strong>.</p>

  // Changing innerHTML
  div.innerHTML = "<h2>New Heading</h2>";
  // The content becomes: <div id="myDiv"><h2>New Heading</h2></div>
</script>
```

#### Advantages: Can be used to dynamically insert HTML.

#### Disadvantages: It's not safe when dealing with user input, as it can introduce XSS vulnerabilities if the input is not properly sanitized.

### 2. innerText

Purpose: Used to get or set the visible text content of an element, as seen by the user.

Behavior: It strips out any HTML tags and returns only the text visible on the page. It respects styles such as display: none and visibility: hidden, so hidden elements are ignored.

Use Case: When you want the user-visible text and ignore the underlying HTML structure.

Example:

```html
<div id="myDiv">
  <p>This is a <strong>paragraph</strong>.</p>
</div>

<script>
  const div = document.getElementById("myDiv");
  console.log(div.innerText); // Output: This is a paragraph.

  // Changing innerText
  div.innerText = "New text content";
  // The content becomes: <div id="myDiv">New text content</div>
</script>
```

#### Advantages: Only deals with visible text, ignoring HTML tags and hidden content.

#### Disadvantages: Modifies only the text and can't be used to insert HTML.

### 3. textContent

Purpose: Used to get or set the text content of an element, including all child elements, but without parsing or recognizing HTML tags.

Behavior: It returns all the text within the element, including text inside hidden elements, but it treats HTML tags as plain text.

Use Case: When you want all text (including from hidden elements) but without any concern for HTML.

Example:

```html
<div id="myDiv">
  <p>This is a <strong>paragraph</strong>.</p>
</div>

<script>
  const div = document.getElementById("myDiv");
  console.log(div.textContent); // Output: This is a paragraph.

  // Changing textContent
  div.textContent = "Plain text content";
  // The content becomes: <div id="myDiv">Plain text content</div>
</script>
```

#### Advantages: Useful when you want to handle plain text and don’t care about formatting or hidden elements.

#### Disadvantages: Doesn’t recognize HTML, treats everything as text.

### Summary of Differences:

| Property    | Returns HTML | Includes Hidden Elements | Recognizes HTML Tags |
| ----------- | ------------ | ------------------------ | -------------------- |
| innerHTML   | Yes          | Yes                      | Yes                  |
| innerText   | No           | No                       | No                   |
| textContent | No           | Yes                      | No                   |

Each property serves different purposes depending on whether you need to manipulate HTML structure, get user-visible text, or retrieve the full plain-text content.

### So `textContent` returns hidden text also but `innerText` does not return hidden text. Text can be hidden via display: none or visibility: hidden etc.

---

Some more tasks

1. Changing the content of h2 from Heading 2 to Hello World

```js
document.body.children;
// HTMLCollection(8) [h1, h2, hr, p, img, ul, p, script]

document.body.children[1].innerText = "Hello World";
// 'Hello World'
```

2. Changing the image src

```js
document.body.children[4].src =
  "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png";
```

Similarly we can select the paragraph element

```js
document.body.children[6];
```

but doing this again and again is too long, so we store it in a variable.

How is this possible? This is because all elements are objects, and all objects can be stored in a variable.

```js
const myPara = document.body.children[6];
```

now we can make modifications by calling myPara

eg.

```js
myPara.innerText = "Hello";
```

---

# [Selecting Elements in JavaScript](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=66348b4ce49275a63bb5d757)

## There are the following ways to select elements in DOM:

### 1. Type it from starting, eg.

`document.body.children[3].children[1]`
like this but it is too long method

### 2. Store the code in step 1 in a variable and then move forward.

eg

```js
const myVar = document.body.children[3].children[1];

myVar.innerText = "gbnvdmjcxki";
```

### 3.`document.getElementsByTagName('tagName')`

This will return an HTML Collection of all tags that we want to get, then we can use the array indexing method to search for that specific tag that we want to search.

eg

`document.getElementsByTagName('tagName')[1]`

This will give us access to the p tag at index 1 of the HTML Collection.

#### Special Case -> For images, we can directly do `document.images[2]` This will give us the access to image at index 2 of the HTML Collection.

### 4.`document.getElementsByClassName('class name')`

We need to have a className for this i.e. say we are selecting the 2nd image, then we have to give that img tag a class Name.

```html
<img
  src="./assets/assets/images/html-css-javascript.png"
  alt="html-css-javascript image"
  style="width: 100%; max-width: 600px"
  class="myImg"
/>
```

```js
document.getElementsByClassName("myImg");
// HTMLCollection [img.myImg]
```

With this, we can select multiple images having the same class name.

When there are multiple elements with same class name, just use array indexing to navigate to your desired element.

```js
const images = document.getElementsByClassName("myImg");

images[2];
// gets the image at index 2 of the HTML Collection
```

### 5.`document.getElementById('id name')`

We know IDs are unique so by using this method, we can select a unique element having a unique id even if its class is not unique and is shared with other elements

eg

```html
<img
  src="./assets/assets/images/javascript.png"
  alt="javascript-image"
  style="width: 100%; max-width: 600px"
  class="myImg"
  id="img3"
/>
```

```js
document.getElementById("img3");
// <img src=​"./​assets/​assets/​images/​javascript.png" alt=​"javascript-image" style=​"width:​ 100%;​ max-width:​ 600px" class=​"myImg" id=​"img3">​
```

See: id is unique but class is shared

### 6.`document.querySelector()`

This is the most widely used as we can give ids, classes and tags inside (). Just use it like a CSS selector

egs

```js
document.querySelector(".myImg");
// As a class selector

document.querySelector("#img3");
// As an id selector

document.querySelector("img");
// As a tag selector

document.querySelector('[alt="javascript-image"]');
// As an attribute selector
```

If there are multiple elements which are same, querySelector will select the first element out of many.

### 7.`document.querySelectorAll()`

For selecting multiple elements.

eg.

```js
document.querySelectorAll(".myImg");
// NodeList(3) [img.myImg, img.myImg, img#img3.myImg]
```

This gives us a `NODE LIST` of all elements which matches the criteria of the condition given inside the ()

`Node List is better than HTML Collection as we can use array methods like forEach inside of it.`

```js
const images = document.querySelectorAll(".myImg");
// undefined

images.forEach((img) => {
  console.log(img);
});

// We get all the img tag code in each iteration of this method
```

### Even if we use this method and give same id to multiple elements, it will not throw any error. But it is not a good practice.

### Some Practical Applications

```js
const allImages = document.querySelectorAll(".myImg");

const myImages = [
  "https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg",
  "https://thumbs.dreamstime.com/b/man-feeling-suspicious-face-expression-emotion-hesitating-facial-studio-shot-white-isolated-background-copy-space-90927117.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCVnMftmnJZ8Nis5HnBeuahDMftylU9guag&s",
];

// for each
allImages.forEach((img, index2) => {
  img.src = myImages[index2];
  // using 2 indices
});
```

`document.querySelector()` -> Search in whole document

<br>

```js
const ulVar = document.querySelector("ul");
ulVar.querySelector();
```

Search in just this ulVar i.e. inside the ul

#### Shortcut to copy total path of an element in js:

In console -> go to html code > go to the element > right click > copy > copy js path

---

# [Inner Text vs Text Content in JS](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=66348dc7e49275a63bb61978)

When we write code and give content in our HTML file, we do some things like give spaces, add new lines etc...

So when we display it in a browser, it ignores some things like extra spaces so, when we do innerText, we see whatever we have seen in the browser but with textContent, we get whatever we have entered in the Html file, like new lines, spaces etc..

Also some things like invisible texts are also not visible in innerText, but are visible in text content.

eg

```js
const para = document.querySelector("p");
// undefined

para.innerHTML;
// '\n      <strong> Frontend development </strong> is the development of the\n      <a href="https://en.wikipedia.org/wiki/Graphical_user_interface">\n        graphical user interface\n      </a>\n      of a website, through the use of\n      <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"> HTML,</a>\n\n      <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS,</a>\n      and\n      <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript,</a>\n      so that users can view and interact with that website.\n    '

para.innerText;
// 'Frontend development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.'

para.textContent;
// '\n       Frontend development  is the development of the\n      \n        graphical user interface\n      \n      of a website, through the use of\n       HTML,\n\n      CSS,\n      and\n      JavaScript,\n      so that users can view and interact with that website.\n
```

```sh
visibility : hidden
display: none
```

When used these with text, we cannot see anything while using innerText, but we can see things via textContent.

---

# [getAttribute and setAttribute in JavaScript](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=6634a6d4cee8fe308d185dcb)

We can either give an element a valid attribute with a value or a custom attribute with a value.

```html
<h2 kaustubhya="Shukla">Heading 2</h2>
```

```js
document.querySelector('[kaustubhya="Shukla"]').attributes[0];
// kaustubhya=​"Shukla"

document.querySelector('[kaustubhya="Shukla"]').attributes[0].value;
// 'Shukla'
```

### How to get that attribute in JS DOM

```js
document.querySelector("[kaustubhya]").getAttribute("kaustubhya");

// 'Shukla'
```

If the attribute mentioned inside () is not there, then we get `null`.

We can also get class attribute values in a string or id attribute values in a string, if we follow this method.

```html
<a
  class="src src2"
  id="mySrc"
  href="https://en.wikipedia.org/wiki/CSS"
  target="_blank"
  >CSS,</a
>
```

```js
document.querySelector(".src").getAttribute("class");
// 'src src2'

document.querySelector(".src").getAttribute("id");
// 'mySrc'
```

## Set Attribute

Before:

```html
<a
  class="src src2"
  id="mySrc"
  href="https://en.wikipedia.org/wiki/CSS"
  target="_blank"
  >CSS,</a
>
```

Write Code and give title

```js
document.querySelector("a").setAttribute("title", "I am CSS");
```

After

```html
<a
  class="src src2"
  id="mySrc"
  href="https://en.wikipedia.org/wiki/CSS"
  target="_blank"
  title="I am CSS"
  >CSS,</a
>
```

Hover over CSS hyperlink text to get a tooltip that says 'I am CSS'.

There are some attributes like `href`, `title`, `class` and `id` that we can update directly without using setAttribute:

eg.

`document.querySelector('a').id = 'myHeading'`
`document.querySelector('a').className = 'myHeading2'`

Use className here and not class

```html
<a
  href="https://en.wikipedia.org/wiki/Graphical_user_interface"
  id="myHeading"
  class="myHeading2"
>
  graphical user interface
</a>
```

---

# [How to apply styles in JavaScript](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=6634ab1d522628360a430d1c)

Changing color of text of all anchor elements to teal

```js
const anchor = document.querySelectorAll("a");
// undefined

// node list to array
const anchorArr = [...anchor];
// undefined

anchorArr.map((col) => {
  col.style.color = "teal";
  col.style.textDecoration = "none";
  col.style.fontWeight = "700";
});
// (4) [undefined, undefined, undefined, undefined]
```

Shortcut way inside loop

```js
anchorArr.map((col) => {
  col.style.cssText = `
  color: red;
  font-size: 18px;
  font-family: cursive;
  `;
});
```

Do like this to avoid repetition. `Also use backticks to write code in multiple lines`.


### Selecting Classes using classList

eg

```js
document.querySelector('#mySrc')
// <a class=​"src src2" id=​"mySrc" href=​"https:​/​/​en.wikipedia.org/​wiki/​CSS" target=​"_blank">​CSS,​</a>​

document.querySelector('#mySrc').classList
// DOMTokenList(2) ['src', 'src2', value: 'src src2']

document.querySelector('#mySrc').classList.add('src3')
// undefined

document.querySelector('#mySrc').classList
// DOMTokenList(3) ['src', 'src2', 'src3', value: 'src src2 src3']

document.querySelector('#mySrc').classList
// DOMTokenList(3) ['src', 'src2', 'src3', value: 'src src2 src3']

document.querySelector('#mySrc').classList.remove('src3')
// undefined

document.querySelector('#mySrc').classList
// DOMTokenList(2) ['src', 'src2', value: 'src src2']

document.querySelector('#mySrc').classList.toggle('src5')
// true

document.querySelector('#mySrc').classList
// DOMTokenList(3) ['src', 'src2', 'src5', value: 'src src2 src5']
```

add() -> adds a class

remove() -> removes a class

toggle() -> If there is a class of the same name that matches the class inside (), then remove it, else add that class.

### With this, we can write the css in styles.css and use the above code to add or remove the class which will apply the css or remove the css from our element in the document.

---

# [DOM Traversal | Access Parent Sibling & Children Elements](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=6634b651d68373dc5ece104b)

### Accessing Parents


To access parent element of any element use `.parentElement`

Keep using .parentElement in chain to access parent of parent, parent of that parent and so on.

```js
const myP = document.querySelector('#mySrc')

myP
// anchor tag with id='mySrc'

myP.parentElement
// p tag

myP.parentElement.parentElement
// body tag

myP.parentElement.parentElement.parentElement
// html tag
```
<br>


### Accessing Children

To access the children of any element, use `children`.

```js
const myP = document.querySelector('body')
// undefined

myP
// <body style=​"font-family:​ sans-serif" class=​"vsc-initialized">​…​</body>​

myP.children
// HTMLCollection(8) [h1, h2, hr, p, img.myImg, ul, p, script]

// chaining
myP.children[3].children
// HTMLCollection(5) [strong, a.hi.hi2.hi3, a.h1.h2, a#mySrc.src.src2, a, mySrc: a#mySrc.src.src2]
```

### Accessing Siblings

Siblings types:
- next sibling
- previous sibling

Also chaining is allowed here too!!


```js
const myP = document.querySelector('#mySrc')

myP
// Css anchor tag

myP.nextElementSibling
// JS anchor tag

myP.nextElementSibling.nextElementSibling
// null

myP.previousElementSibling
// JS anchor tag

myP.previousElementSibling.previousElementSibling
// CSS anchor tag
```

Siblings can come inside a parent only

here all `a tags` and a `strong tag` are inside the `p tag` (parent) hence these `a and strong tag are siblings`

```html
<p>
      <strong> Frontend development </strong> is the development of the
      <a class='hi hi2 hi3' href="https://en.wikipedia.org/wiki/Graphical_user_interface">
        graphical user interface
      </a>
      of a website, through the use of
      <a class='h1 h2' href="https://en.wikipedia.org/wiki/HTML" target="_blank"> HTML,</a>

      <a class="src src2" id="mySrc" href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS,</a>
      and
      <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript,</a>
      so that users can view and interact with that website.
    </p>
```

`nextSibling, parentNode, childNodes, previousSibling -> All these give nodes not elements.`

---

# [What is the Difference Between Element and Node?](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=6634b7ef34364c5bc1b814ad)

Nodes contain, tags, tag's text content, spaces, comments, new lines and many more things. So they are different from elements.

Use these methods to access parentNode, childNode, and sibling nodes:

```sh
`nextSibling, parentNode, childNodes, previousSibling` -> All these give nodes not elements.
```

`Nodes are objects`

### Node name and Node type list

| Name	| Type Value |
| ---- | ----| 
| ELEMENT_NODE	| 1 |
| ATTRIBUTE_NODE |	2 |
| TEXT_NODE |	3 |
| CDATA_SECTION_NODE |	4 |
| PROCESSING_INSTRUCTION_NODE |	7 |
| COMMENT_NODE |	8 |
| DOCUMENT_NODE	| 9 |
| DOCUMENT_TYPE_NODE |	10 |
| DOCUMENT_FRAGMENT_NODE	| 11 |

### All elements are nodes but all nodes are not elements


#### Eg -> Changing the text content of this text node
```html
    <h1>Frontend Development for KSD</h1>
    "Hello There" // a text node
```

Code

```js
document.body.childNodes
// NodeList(19) [text, h1, text, h2, text, hr, text, p, text, img.myImg, text, ul, text, p, text, comment, text, script, text]0: textassignedSlot: nullbaseURI: "http://127.0.0.1:5502/html/projects/front-end-roadmap/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: h1nextSibling: h1nodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: body.vsc-initializedparentNode: body.vsc-initializedpreviousElementSibling: nullpreviousSibling: nulltextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text1: h12: text3: h24: text5: hr6: text7: paccessKey: ""align: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColIndexText: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowIndexText: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5502/html/projects/front-end-roadmap/index.html"childElementCount: 5childNodes: NodeList(11) [text, strong, text, a.hi.hi2.hi3, text, a.h1.h2, text, a#mySrc.src.src2, text, a, text]children: HTMLCollection(5) [strong, a.hi.hi2.hi3, a.h1.h2, a#mySrc.src.src2, a, mySrc: a#mySrc.src.src2]classList: DOMTokenList [value: '']className: ""clientHeight: 37clientLeft: 0clientTop: 0clientWidth: 913contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}dir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: stronghidden: falseid: ""inert: falseinnerHTML: "\n      <strong> Frontend development </strong> is the development of the\n      <a class=\"hi hi2 hi3\" href=\"https://en.wikipedia.org/wiki/Graphical_user_interface\">\n        graphical user interface\n      </a>\n      of a website, through the use of\n      <a class=\"h1 h2\" href=\"https://en.wikipedia.org/wiki/HTML\" target=\"_blank\"> HTML,</a>\n\n      <a class=\"src src2\" id=\"mySrc\" href=\"https://en.wikipedia.org/wiki/CSS\" target=\"_blank\">CSS,</a>\n      and\n      <a href=\"https://en.wikipedia.org/wiki/JavaScript\">JavaScript,</a>\n      so that users can view and interact with that website.\n    "innerText: "Frontend development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website."inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: alocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: img.myImgnextSibling: textnodeName: "P"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 37offsetLeft: 8offsetParent: body.vsc-initializedoffsetTop: 182offsetWidth: 913onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<p>\n      <strong> Frontend development </strong> is the development of the\n      <a class=\"hi hi2 hi3\" href=\"https://en.wikipedia.org/wiki/Graphical_user_interface\">\n        graphical user interface\n      </a>\n      of a website, through the use of\n      <a class=\"h1 h2\" href=\"https://en.wikipedia.org/wiki/HTML\" target=\"_blank\"> HTML,</a>\n\n      <a class=\"src src2\" id=\"mySrc\" href=\"https://en.wikipedia.org/wiki/CSS\" target=\"_blank\">CSS,</a>\n      and\n      <a href=\"https://en.wikipedia.org/wiki/JavaScript\">JavaScript,</a>\n      so that users can view and interact with that website.\n    </p>"outerText: "Frontend development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website."ownerDocument: documentparentElement: body.vsc-initializedparentNode: body.vsc-initializedpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: hrpreviousSibling: textrole: nullscrollHeight: 37scrollLeft: 0scrollTop: 0scrollWidth: 913shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "P"textContent: "\n       Frontend development  is the development of the\n      \n        graphical user interface\n      \n      of a website, through the use of\n       HTML,\n\n      CSS,\n      and\n      JavaScript,\n      so that users can view and interact with that website.\n    "title: ""translate: truevirtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLParagraphElement(...)8: text9: img.myImg10: text11: ul12: text13: p14: text15: comment16: text17: script18: textlength: 19[[Prototype]]: NodeList

document.body.childNodes[2]
// " "Hello There" "

console.dir(document.body.childNodes[2])
// VM6520:1 #textassignedSlot: nullbaseURI: "http://127.0.0.1:5502/html/projects/front-end-roadmap/index.html"childNodes: NodeList []data: "\n    \"Hello There\"\n    "firstChild: nullisConnected: truelastChild: nulllength: 23nextElementSibling: h2nextSibling: h2nodeName: "#text"nodeType: 3nodeValue: "\n    \"Hello There\"\n    "ownerDocument: documentparentElement: body.vsc-initializedparentNode: body.vsc-initializedpreviousElementSibling: h1previousSibling: h1textContent: "\n    \"Hello There\"\n    "wholeText: "\n    \"Hello There\"\n    "[[Prototype]]: Text
// undefined

document.body.childNodes[2].nodeValue = 'Changed Value'
// 'Changed Value'
```

---

# [append and appendChild?](https://app.procodrr.com/web/courses/6613af35b495b1c7835f280b?chapter=6634bc5034364c5bc1b89e4c)

## appendChild()
appendChild -> Sabse last mein add karna

eg
```js
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const h1 = document.querySelector('h1')

container.appendChild(h1);
```

This is `cut and paste` i.e. it cuts the h1 tag from its place and pastes (appends) it after the card element, i.e. at the end of container element.


for `copy and paste`, we will use `cloneNode()`

This has the option to make a shallow copy or a deep copy

- Shallow Copy (only the tag) 
- Deep Copy (tags + text inside tags)

eg

```js
h1
// <h1>​Append Child and Append​</h1>​

// Shallow Copy
h1.cloneNode()
// <h1>​</h1>​

// Deep Copy -> (deep = true)
h1.cloneNode(true)
<h1>​Append Child and Append​</h1>​
```

Here the copied element h1 will not show any changes,

So to make it show changes

So to do cut (copy and paste)

eg

```js
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const h1 = document.querySelector('h1')

container.appendChild(h1.cloneNode(true));
```

task -> Copy card inside container 100 times

```js
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const h1 = document.querySelector('h1')

// Already 1 is created so we do from 2 to 100
for(let i = 2; i < 101; i++) {
  const newCard = card.cloneNode();
  // document mein new card create nahi hua, memory mein copy create hua hai bas
  newCard.innerText = i;
  container.appendChild(newCard);
  // donot do document.appendChild as only one element is allowed on document
}
```


If we need to do same via html

```html
.card*n{$}

n -> no. of times we need a tag to be duplicated 
```

`We can not append parents to children using appendChild()`

We can do it with other things like children, siblings etc.

## append()

### This is similar to appendChild() but with a few differences

1. append() does not return any value like appendChild() (appendChild returns us the text node that it has appended)

2. We can append things like strings, using append(), but we cannot do so via appendChild()

`container.append('string')`

we can append textNodes, elements and children and siblings using appendChild()

We can append all these using append() too but we can also append strings too!!

```js
container.append("Hello World")
```

To append Strings via appendChild(), we need to first convert it into a text node.

i.e. create a new text node with the string 

```js
const newTextNode = document.createTextNode('Hello World')
container.appendChild(newTextNode)
```

This will work

3. We can also append multiple things at the same time using append()

```js
container.append(h1, "Hello World", "three")
```

---