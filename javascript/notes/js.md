Originally JS was made for Netscape browser.

Originally JS was called "Mocha" then called "LiveScript" and finally called "JavaScript".

JS was made by "Brendan Eich"

Netscape made by Mark Andreessen

ECMA - European Computers Manufacturing Association (organisation that makes laws related to computers).

ECMAScript - Works like JS only but it is made up of things standardised by ECMA.

ECMAScript was inspired by JavaScript and is the standardised version of JavaScript. It is today used in almost all web browsers.

Versions of ECMAScript:

- ES1
- ES2
- ES3
- ES4
- ES5
- ES6
- ES7.....

Chrome came in 2008 and made V8 Engine for JavaScript.

Firefox engine for JS - Spider Monkey

Ryan Dahl took out the V8 Engine out of Chrome and put it in node.js (he created it), this enabled us to run JS in computers and servers (which are out of browsers).

JS was an `interpreted language` earlier. After the V8 engine, it became a `mixture of interpreted and compiled language`.

---

Introduction to JavaScript | The Complete JavaScript Course | Ep.02

JavaScript console is called REPL (Read Eval (Evaluate) Print Loop)

In basically means read our code, evaluate it (calculate it), print it and then loop back to the original position (starting position).

In JS, the BODMAS rule is not applied (here \* and / are given equal importance and whichever comes first is given more importance).

Same with + and -

We can run JS directly inside script tag, but it is normally not preferred. Write it inside script.js file.

---

Data Types in JavaScript | Primitive Data Types Explained | The Complete JavaScript Course | Ep.03

In JS 3, 3.56 etc. all are of datatype numbers

Using quotes inside string:

- single quotes inside double quotes

"Hi I am 'KSD' . Howdy"

- Double quotes inside single quotes
  'Hi I am "Anu Malik". Howdy'

`` also supports string

`` advantage -> It can support input of multiple lines of strings ("" and '' donot support this and give error).

eg.

`Hi
Nice to meet 
you` => Fine

"Hi
Nice to meet
you" => Error

'Hi
Nice to meet
you' => Error

`Template literals` -> using `` to input strings in multiple lines

[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

String to int conversions:

```js
typeof 100;
("number");

typeof "100";
("string");

typeof +"100";
("number");

typeof +`K456SD`;
("NaN"); // => Not a Number as KSD when converted to a number does not fall under any number, hence it was assigned NaN
// 🛑🛑🛑 This NaN is of type Number only (it is an invalid number)
```

🛑🛑 Better Way => Use 'parseInt()'

---

Int to string conversions

`100 + '' => '100'` or `'' + 100`

eg.

`100 + 'avb' => '100avb'` or `'jb' + 100 => 'jb100'`

---

+false => 0

+true => 1

+null => 0 (null is like false (0))

+undefined => NaN

parseInt(undefined)
NaN

parseInt(null)
NaN

BigInt:
https://www.w3schools.com/js/js_bigint.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

---

# JS Variables, var, let, const ep, 04

helloJiMaa -> Camel case
hello_ji_maa -> Snake case
hello-ji-maa -> Kebab Case
HelloJiMaa -> Pascal Case

When we define a variable initially in JavaScript, javascript assigns it a type of 'undefined' by default.

const variables must be initialized as it cannot be updated later on.

🛑🛑🛑 INTERVIEW QUESTION:

var vs let differences ??

1. `let` and `const` are variables inside a block scope { (these variable values cannot be accessed outside of the block, if they are initialized inside the block) }.

1. `var` variables can however be done so, but it causes issues so we donot use var much often nowadays because of its global scopic nature.

1. We can access a variable declared with var before it is even initialized, eg. if we do:

```js
console.log(name);

var name = "ksd";

// Output is undefined but it will not give any error
```

2. But if we try to do the same thing with let and const, we will get a 'Not-defined' error:

```js
console.log(name)

let(or const) name = 'ksd'

// This will give us a not-defined error
```

🛑🛑 Remember, undefined is not an error, it is a datatype in javascript. Whereas not-defined is an error in javascript specifying that we are trying to access a variable that is not defined.

Naming variables in JS:

- only use A-Z or a-z
- use 0-9 (not start with digits)
- Special Chars (only \_ and $ are allowed)

Also we can use any language to name variables like hindi, kannada, bengali etc.. (with same rules above)

---

# Watch Your Code Running Line by Line in Dev Tools | The Complete JavaScript Course | Ep.05

The flow of program running in JavaScript happens in 2 ways:

1. Memory Creation Phase - In this phase, we see that the code is not executed but each variable creates a memory block of datatype `undefined` and inside it inserts values of `undefined`. All the steps like console log or any code execution steps are skipped.

2. Code Execution Phase - In this phase, we see that all the undefined values inserted inside the memory in step 1, gets replaced by the datatype values initialised in the code.

eg. let name = 'ajay';

step 1 => A memory block of undefined type is created and inside it, we give a value of undefined.

step 2 => The value undefined is replaced by 'ajay'

![](./images/code-execution-in-javascript.png)

---

🛑 Why do we use defer after src in script tag in head.

We use defer with src in script tag in head because it gives us an edge when the network connection is slow.

Normal Cases:

loads title, loads script, loads body html

Defer Case:

loads title, calls script tag (simultaneously loads it with html) and loads body html.

This way when network is slow, we donot need to wait for the scipt tag to load after the html is done loading. (It is loaded beforehand and immediately starts working after loading of html body).

Defer Case:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code Execution in JavaScript</title>
    <script src="script.js" defer></script>
  </head>
  <body style="font-family: cursive">
    <h1>Code Execution in JavaScript</h1>
  </body>
</html>
```

Normal Case:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code Execution in JavaScript</title>
  </head>
  <body style="font-family: cursive">
    <h1>Code Execution in JavaScript</h1>
    <script src="script.js"></script>
  </body>
</html>
```

Debugging in JS

```js
debugger;
console.log(firstName); // code stops at this line

var firstName = "Akash";
let lastName = "Singh";
let age = 15;
const yearOfBirth = 1999;

// let userIntro = 'Hi, my name is ' + firstName + ' ' + lastName
```

## Temporal Dead Zone

The Temporal Dead Zone (TDZ) is a concept in JavaScript that relates to the hoisting of the variables and the visibility of variables declared with let and const. In the TDZ, a variable exists but it cannot be accessed until it is not declared. This prevents the variable from being used or accessed before a value is assigned to it.

eg. In the memory creation phase, we give the blocks the values of `undefined`.

This is only related to let and const.

---



Dialog Boxes in JavaScript | Alert, Confirm, & Prompt | The Complete JavaScript Course | Ep.06

There are 3 types of dialog boxes:
- alert('message')
(gives only ok button. Ok -> undefined)
- confirm('message')
(gives ok and cancel button. OK -> True, Cancel -> False)
- prompt('message')
(works like alert but gives us an input field and an OK and cancel button returns the input value as the result).

This dialog box works in a particular tab in a particular browser. Different tabs have different environments in a browser.