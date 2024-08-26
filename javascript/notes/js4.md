# [What is the difference between expression and statement?](https://www.youtube.com/watch?v=lrWs2C76cAs&list=PLfEr2kn3s-brmujLuaVPA_FTkflKbMc5x&index=4)

### Expressions (eg ternary operator) -> This gets converted into a value after its execution and we can store it in a variable.

eg.

```js
const ans = (5 > 4) ? `true` : `false`;
console.log(ans)
```

### Statements (eg. if-else) -> This only runs line by line and it is not converted into a value.

```js
if( 5 > 4) {
    console.log(`true`);
}
else {
    console.log(`false`);
}
```

Some more egs. 

1. For loop (statement)

2. forEach loop (expression)

3. Switch case (statement)

4. Declaring variables (eg. let a = 0;)
(statement)

i.e.

let b = 0; ✅   
let a = let b = 0; ❌❌ 

5. Comparing cases 

(eg. const ans = 5 > 4 => true)

(expression)

6. function call and function definition (expression)

7. Arithmetic expressions (eg. const sum = 5 + 4)

8. Logical Expressions

(eg. const ans = 5 && 6 => 6)

## Some questions:

### Q1 Will this work fine

```js
const a = (6 > 7) ? 'true' : 'false'
console.log(a)
```

#### YES

```js
if(6 > 7) {
    `true`
} else{
    'false'
}
```

#### Here we will see an answer but this is not the result of the expression, here the result `false` is due to the code line `false` rather than the result ans of (6 > 7). 

Verify, store it in a variable and see for yourself.


```js
const ans = if(6 > 7) {
    `true`
} else{
    'false'
}

console.log(ans)
// we get undefined as output
```

### Hence due to this difference; in JSX React, we use expressions rather than statements, to get the output values in a variable.

If statements are absolutely needed, use functions (as they are expressions), write your statement code inside of it and then return and call the functions to make your statements work. 

Or we can use IIFEs, arrow functions etc...

---

# [What is an IIFE in JavaScript? | JavaScript for ProCodrrs](https://www.youtube.com/watch?v=AccGzP0Q1ZA&list=PLfEr2kn3s-brmujLuaVPA_FTkflKbMc5x&index=4)

# IIFE -> Immediately Invoked Function Expression

eg.

```js
(function () {
    console.log('Hi');
})()
```

Semicolons are a must in IIFE, use it before IIFEs or after the statement that is before an IIFE. Also add one after an IIFE ends.

Else the compiler is confused as to when an IIFE is starting or stopping.

```js
;(function () {
    console.log('Hi');
})()
```

or

```js
const a = 5;

(function () {
    console.log('Hi');
})()
```

or

```js
const a = 5;
(function () {
    console.log('Hi');
})();
```

#### We know that we need to pollute our global scope as less as possible. So we can write our code inside IIFEs to do this. If there are tasks or variables with names which have the same names as some packages or libraries then use IIFE to separate them and save the global environment.

We need not name IIFEs, as :
- IIFE comes
- IIFE executes once
- IIFE goes and never comes back.

So we do not use IIFEs again and again like normal functions.

eg.

```js
;(function () {
    const h1 = document.querySelector('hi');
    const p = document.querySelector('p');
    const num = 120;

    h1.style.backgroundColor = 'pink';
    h1.style.color = 'black';
    p.innerText = num;
})();
```

## We can also use async in IIFEs

eg.

```js
;(async function () {
    const h1 = document.querySelector('hi');
    const p = document.querySelector('p');
    const num = 120;

    h1.style.backgroundColor = 'pink';
    h1.style.color = 'black';
    p.innerText = num;
})();
```

## Different Ways to Create IIFEs:

1. 
```js
(function () {
    console.log('Hi');
})();
```

2. 
```js
(function () {
    console.log('Hi');
}());
```

3. Arrow Functions
```js
(() => {
    console.log('Hi');
})();
```

4. 
```js
+function() {
    console.log('Hi');
}()
```

5. 
```js
-function() {
    console.log('Hi');
}()
```

`function` keyword means function declaration i.e. it is treated in as a statement. So when we use `+` or `-`, then that function is treated in as an expression.

6. Normal Expression
```js
const a = function() {
    console.log('Hi');
}()
```

7. Using `NOT` Operator
```js
!function() {
    console.log('Hi');
}()
```

8. Using Bitwise Operator

```js
~function() {
    console.log('Hi');
}()
```

9. Using void

```js
void function() {
    console.log('Hi');
}()
```

10. Using new

```js
new function() {
    console.log('Hi');
}()
```

11. using an extra set of () on functions

```js
((function() {
    console.log('Hi');
})());
```

12. Making IIFE function an expression via `true &&`

```js
true && (function() {
    console.log('Hi');
})()
```

13. `false ||` (same logic as `true &&`)

```js
false || (function() {
    console.log('Hi');
})();
```

14. Using ternary operators to make expressions

```js
true ? (function() {
    console.log('Hi');
})() : ''
// a falsy value ''
```

15. Using `try and catch`

```js
try {
    throw function () {
        console.log('Hi');
    }
} catch(e) {
    e();
}
```

Syntax is a little bit different here. `This is an IIF not an IIFE`
