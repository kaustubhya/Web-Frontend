[Objects in JavaScript Explained in Depth | The Complete JavaScript Course | Ep.18](https://www.youtube.com/watch?v=1Rhdtq5pYoY&list=PLfEr2kn3s-bo4LwlbyZugHPavhcdW8YMC&index=19)

Data types in JS

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol
- (all these are primitive)
8. Non Primitive Datatypes (Object)


Objects are further divided into 3 types:

- Object Literals
- Arrays
- Functions

We will study Object Literals here

```js
const user1 = {
  firstName: "Akash",
  lastName: "Singh",
  age: 22,
  graduated: true,
};

const user2 = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
  };
```

here `user1 === user2` will give `false` as here the address of both objects are different.

### In non primitive data types, they are compared wrt their addresses or reference. Here objects having same value will have different addresses.

### In case of primitive data types, if their values are same, their addresses will also be same.

```js
const user1 = '';
const user2 = '';

user1 === user2
// this will be true
```

### Fetching Values from objects
1. Using `.` operator **(DOT NOTATION)**

eg.
```js
const userb = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
  };

  console.log(userb.firstName);
//   Akash
```

2. Using `['key'] or ["key"]` **(Bracket Notation)**

```js
const userb = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
  };

  console.log(userb['firstName']);
//   console.log(userb["firstName"]); // Also works
   
//   Akash
```  
Here we used `'key'` and not `key` because keys are strings internally in JS.

Normally we donot use '' while writing keys in objects, but when we use other chars, we need them.

eg. Some key syntax 

helpMe ✅ (no '' needed)

help-me ❌

'help-me' ✅ ('' needed) 
### (Also to access this, we need bracket notation as this is not possible with `.` notation)

### WE can also use JS variables and expressions with Bracket notation which was not possible with `.` notation

eg. Bracket Notation + Variables
```js
const myName = 'KSD';

const userb = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
    KSD: 'Boy'
};

console.log(userb['KSD']);
// Output Boy
// See key and variable value is same i.e. object
```

eg. Bracket Notation + Expressions

```js
const myName = 'KSD';

const userb = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
    KSD: 'Boy'
};

// console.log(userb['last']);
// undefined

console.log(userb['last' + 'Name']);
// Output Singh
// Here last was nothing and returned undefined, but when we used + to combine it with Name, it became lastName which was a valid, key and it returned us 'Singh'
```

But mostly we use `.` as we keep our keys simple.

### Updating Objects


1. Using `.`
```js
const userb = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
};

userb.gender = 'male'

console.log(userb);
```

2. Using `[]`

```js
const userb = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
};

userb['gender'] = 'female'

console.log(userb);
```

## Objects inside objects (Nested Objects)

```js
const details = {
    firstName: "Akash",
    lastName: "Singh",
    age: 22,
    graduated: true,
    address: {
        address1: {
            'house-number': '2B',
            street: 12,
        },

        address2: {
            sector: 10,
            city: 'Bhilai',
            state: 'CG',
        },
        phone: 8660421574,
    },
};


console.log(details);
```

![](./images/Nested-Objects.jpeg)

Here is the internal working of nested objects.

Whenever a new object is created, a new address is allocated to it and we just pass its address in the parent object, as shown in the figure.

To make it easy to understand, for primitive data types like strings, we have passed its value directly (but it also internally refers to the address location of a string).

Nested Layout
- user object
    - address object
        - more object

#### Let us update the memory object

```js
const user = {
    firstName: 'KSD',
    lastName: 'JHA',
    age: 20,
    address: {
        city: 'Bhilai',
        state: 'CG',
        more: {
            house: '1B',
            street: 12,
            sector: 10,
        }
    }
}

user.address.more.phoneNumber = 123456789,
// adding a phone number in more object

console.log(user.address.more.phoneNumber);
// Output : 123456789
```

---

[Object.freeze( ) vs Object.seal( ) in JavaScript | The Complete JavaScript Course | Ep.19](https://www.youtube.com/watch?v=K2v08vu-tK0&list=PLfEr2kn3s-bo4LwlbyZugHPavhcdW8YMC&index=20)

### Initialy, Address value ka hota hai, variable ka nahi. And then hum log uss address ko variable ko de dete hai.

### So when a variable is updated (variable value updated using let or var), then actually the address of that variable is changed as the value is related to address and then the variable then points to this new address (giving us the updated value).

🛑🛑🛑🛑🛑🛑  
eg.
```js
let username = 'KSD'; // address is say @20
// variable username points to @20

username = 'Saksham'; // address is now say @10
// variable username points to @10

console.log(username) // we get the value inside address @10 as variable username is pointing to @10. Hence we get output 'Saksham'.
```

### Deleting things from objects

Using the `delete` keyword, we are able to do so.

```js
const user = {
    firstName: 'KSD',
    lastName: 'JHA',
    age: 20,
    address: {
        city: 'Bhilai',
        state: 'CG',
        more: {
            house: '1B',
            street: 12,
            sector: 10,
        }
    }
}

delete user.address.more.house;
```

## Object.freeze() and Object.seal()

### Object.seal()

This is used when we want to prevent any new additions or deletions of key:value pair in objects.

But we can update the existing key:value pairs when using Object.seal().

### Object.freeze()

More advanced version, this will prevent us from adding & deleting new key:value pairs and also it will prevent us from even updating the existing key:value pairs.

| Properties | Object.Freeze() | Object.Seal() |
|------------|--------|------|
| Adding     | ❌      | ❌    |
| Deleting   | ❌      | ❌    |
| Updating   | ❌      | ✅    |


eg. 
```js
const user = {
    firstName: 'KSD',
    lastName: 'JHA',
    age: 20,
    address: {
        city: 'Bhilai',
        state: 'CG',
        more: {
            house: '1B',
            street: 12,
            sector: 10,
        }
    }
}


/* user
{firstName: 'KSD', lastName: 'JHA', age: 20, address: {…}}
address: city: "Bhilai"more: {house: '1B', street: 12, sector: 10}state: "CG"[[Prototype]]: Objectage: 20firstName: "KSD"lastName: "JHA"[[Prototype]]: Object
*/

// Objects.seal()
const user = {
    firstName: 'KSD',
    lastName: 'JHA',
    age: 20,
    address: {
        city: 'Bhilai',
        state: 'CG',
        more: {
            house: '1B',
            street: 12,
            sector: 10,
        }
    }
}
Object.seal(user);
user.gender = 'male';
console.log(user.gender);
// trying to add

/*
user
{firstName: 'KSD', lastName: 'JHA', age: 20, address: {…}}
*/

// No change

// Trying to update
user.firstName = 'MKL';

/*
user
{firstName: 'MKL', lastName: 'JHA', age: 20, address: {…}}
*/
// Update Successful

// Object.freeze()


// addition
const user = {
    firstName: 'KSD',
    lastName: 'JHA',
    age: 20,
    address: {
        city: 'Bhilai',
        state: 'CG',
        more: {
            house: '1B',
            street: 12,
            sector: 10,
        }
    }
}
Object.freeze(user);
user.gender = 'male';
console.log(user.gender);

// updation
user.firstName = 'MKL';
'MKL'

/*
{firstName: 'KSD', lastName: 'JHA', age: 20, address: {…}}
*/
// Addition failed
console.log(user.firstName)
KSD

// Updation also failed
```

## `In` Keyword in objects

This returns a `bool` value indicating whether a key is present in an object or not.

#### See the below examples and clear all your doubts

eg.
```js
const user = {
    firstName: 'KSD',
    lastName: 'JHA',
    age: 20,
    address: {
        city: 'Bhilai',
        state: 'CG',
        more: {
            house: '1B',
            street: 12,
            sector: 10,
        }
    }
}

'firstName' in user
// true

'hello' in user
// false

'city' in user
// false

'city' in address
// VM15393:1 Uncaught ReferenceError: address is not defined
//     at <anonymous>:1:11
// (anonymous) @ VM15393:1Understand this error

'city' in user
// false

'city' in user.address
// true

'house' in user
// false

'house' in address
// VM15557:1 Uncaught ReferenceError: address is not defined
//     at <anonymous>:1:12
// (anonymous) @ VM15557:1Understand this error

'house' in user.address
// false

'house' in user.address.more
// true
```
---