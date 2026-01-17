# [How To Work With Forms in React | Basics of Form Handling | The Complete React Course | Ep.32](https://www.youtube.com/watch?v=OWi1TwVDGR8&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=33)

Here we will start by making an expense tracker. It has 3 main components, the Expense Form, the Expense Table, and the Context Menu which we will see at the end.

So first we see App.jsx

```jsx
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpenseTable />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
```

Then Expense Table.jsx

```jsx
import React from "react";

const ExpenseTable = () => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select>
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow up-arrow"
              >
                <title>Ascending</title>
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow down-arrow"
              >
                <title>Descending</title>
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Milk</td>
          <td>Grocery</td>
          <td>₹40</td>
        </tr>
        <tr>
          <td>Shirt</td>
          <td>Clothes</td>
          <td>₹600</td>
        </tr>
        <tr>
          <td>Vegetables</td>
          <td>Grocery</td>
          <td>₹100</td>
        </tr>
        <tr>
          <td>Electricity Bill</td>
          <td>Bills</td>
          <td>₹1100</td>
        </tr>
        <tr>
          <th>Total</th>
          <th></th>
          <th>₹8100</th>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
```

Here we see that all the values are hardcoded like td values, it is better that we make an array of objects, and then loop through it and fetch data from it, that way, we can work with dynamic data.

So we make a new file called expenseData.js

```js
export const expenseData = [
  {
    id: crypto.randomUUID(),
    title: "Milk",
    category: "Grocery",
    amount: 40,
  },
  {
    id: crypto.randomUUID(),
    title: "Shirt",
    category: "Clothes",
    amount: 600,
  },
  {
    id: crypto.randomUUID(),
    title: "Electricity Bill",
    category: "Bills",
    amount: 1100,
  },
];
```

now for multiple objects, we need to give it a unique id, for that we can do one of these 2 things:

1. use an npm package called `uuid`
2. In modern js we can do `id: crypto.randomUUID()` (this will generate a random uuid (unique user id))

All done in expenseData.js

Now we need to use this data in expense table, so to do that, we will first bring it inside App.jsx and then from there we will send it to expenseTable.jsx

```jsx
import { useState } from "react";
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { expenseData } from "../expenseData";

function App() {
  const [fetchData, setFetchData] = useState(expenseData);
  // initially, we have some values from expense data, so you first show that in the table, we will add some more in the future
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setFetchData={setFetchData} />
        <ExpenseTable fetchData={fetchData} />
        {/* send this fetched in the table to display */}
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
```

We did it like this because we also want to link this data with the form wherein, when we make a new entry in form, it should be appended in expenseData and ExpenseTable. Hence we will use a useState in App.jsx

Now after importing the data in App.jsx, use a useFetch which will update the data in ExpenseTable via a prop.

To show the data now in ExpenseTable, we do it like this:

```jsx
import React from "react";

const ExpenseTable = ({ fetchData }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select>
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow up-arrow"
              >
                <title>Ascending</title>
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow down-arrow"
              >
                <title>Descending</title>
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {fetchData.map(({ id, title, category, amount }) => {
          return (
            <tr key={id}>
              <td>{title}</td>
              <td>{category}</td>
              <td>₹{amount}</td>
            </tr>
          );
        })}
        <tr>
          <th>Total:</th>
          <th></th>
          <th>8400</th>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
```

Now here:

```jsx
{
  fetchData.map(({ id, title, category, amount }) => {
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{category}</td>
        <td>₹{amount}</td>
      </tr>
    );
  });
}
```

We could've used index instead of id for key to give each fetch data entry a unique identity, the problem with that is, suppose we want to delete from this array, then the id we created via indexing will also be deleted, and the ordering will be fucked up as some indexes will be missing. To prevent that, we use id from random UUID, this will be safe as it is not in order and our list will not be affected, even if we delete some data entries.

---

We will come back to this one, for now let us first focus on the form, where we will enter the form values and when we press on submit, then the data will be added to the expense table.

ExpenseForm.jsx

```jsx
import React from "react";

const ExpenseForm = ({ setFetchData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    setFetchData((prevData) => [...prevData, expense]);
    e.target.reset();
  };

  const getFormData = (form) => {
    const myFormData = new FormData(form);
    const data = {};
    for (const [key, value] of myFormData.entries()) {
      console.log(key, value);
      data[key] = value;
    }
    return data;
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
```

Ok, firstly:

To get the values from the form input fields, we will first use this line
`const myFormData = new FormData(.....);`

This is a constructor which by itself will not give anything, but will give something when certain conditions are met

1. We need to loop the values of formData
2. Also use `name` attribute in input fields, these will act as identifiers and help in extracting data

```jsx
const getFormData = (form) => {
  const myFormData = new FormData(form);
  const data = {};
  for (const [key, value] of myFormData.entries()) {
    console.log(key, value);
    data[key] = value;
  }
  return data;
};
```

```jsx
<input id="title" name="title" />
<select id="category" name="category">
<input id="amount" name="amount" />
```

So now when we are inputting values and pressing submit, instead of reloading and not saving, we are now getting this in logs:

```
title Roti
category medicine
amount 333
```

Also we de-structured it in the loop because we want to get the keys and values separately

And after doing console log, we store it in `const data = {};`

So all in all getFormData takes in form, which is basically, e.target ie. value in the input box, and returns the data ie. key:value

We will see it now when we see how we implement handle submit and make the state change because of it. Also we need to mention id.

```jsx
const ExpenseForm = ({ setFetchData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    setFetchData((prevData) => [...prevData, expense]);

    e.target.reset();
    // clean the fields after submitting
  };
};
```

We called this handle submit here:
`<form className="expense-form" onSubmit={handleSubmit}>`

---

# [Unidirectional Data Flow in React | Controlled Components | The Complete React Course | Ep.33](https://www.youtube.com/watch?v=4gHnFthACk8&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=34)

In last lecture, we saw how we extracted data from the input fields using getFormData, now we will see another method.

Now in JS, we can set the value of any input field using the `value` attribute and also we can modify it later, but in react, if we set the value using the `value` attribute and then later try to modify it, then react will not let us do so by default.

#### To make the input value change wrt the `value` attribute in react, we need to update the state of the value attribute each time we do a keypress and keep in mind the previous state. This way of when we do a keypress, the state is getting updated at every keypress is called `one way data binding`

In one way data binding, the UI screen is updated whenever the data is getting updated.

But in two way data binding (as it is in Vue.js and Angular.js), when we type in screen, the value automatically gets updated. No need to update the data via state change.

### This `one way data binding is only called uni-directional data flow`. In short, data will update UI, Not the other way around.

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        {/* Fetching the data using value attribute */}
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
```

Here in input fields, say amount input field:
`<input id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />`

This `value={amount}` -> This amount is the amount from useState and not from any id, or name.

Next, we made it updated to the table when we clicked on add button, handle submit function was at work here:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const expense = { title, category, amount, id: crypto.randomUUID() };
  console.log(expense);
  setFetchData((prevData) => [...prevData, expense]);
  // Clear the form after submission
  setTitle("");
  setCategory("");
  setAmount("");
};
```

Final code of ExpenseForm.jsx

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { title, category, amount, id: crypto.randomUUID() };
    console.log(expense);
    setFetchData((prevData) => [...prevData, expense]);
    // we return an array hence used an array here

    // Clear the form after submission
    setTitle("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        {/* Fetching the data using value attribute */}
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
```

Now we notice, we made a useState for each input field, it is not optimal. To make it more optimal, we will use a single useState

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);

    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        {/* Fetching the data using value attribute */}
        <input
          id="title"
          name="title"
          value={inputData.title}
          onChange={(e) =>
            setInputData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
        {/* () for implicit return and {} inside the parenthesis because we are returning an object via useState updation */}
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={inputData.category}
          onChange={(e) =>
            setInputData((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={inputData.amount}
          onChange={(e) =>
            setInputData((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
```

Since we are using a single useState, for every state change, we need to consider the previous states also, hence we use prevState in every state change.

This is how code works in industry for extracting form data from inputs. Not like the ones we looked before.

`const totalAmtSum = fetchData.reduce((acc, curr) => acc + Number(curr.amount), 0);` => If you want to show the sum of all amounts in the Expense table, do this before return in ExpenseTable.jsx

---

# [useRef Hook Explained in Hindi | The Complete React Course | Ep.34](https://www.youtube.com/watch?v=PiHMQWiqUpU&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=35)

Now why is useRef hook used -> We use the useRef hook when we want to update something but also not to re-render the component on every state change.

Instead the change is reflected all at once when the component state is changed and the component is re-rendered.

Let us see an example:

1. How does a basic useRef hook look like in console in browser

```jsx
import React from "react";
import { useState, useRef } from "react";

const myRef = useRef("hello");

console.log(myRef);
```

```
{
    "current": "hello"
}
```

```jsx
import React from "react";
import { useState, useRef } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const myRef = useRef(0);

  console.log(myRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);

    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  return (
    <>
      <button
        onClick={() => {
          myRef.current = myRef.current + 1;
          console.log("my-ref", myRef.current);
        }}
      >
        Click Me
      </button>
      <h1>{myRef.current}</h1>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input
            id="title"
            name="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          {/* () for implicit return and {} inside the parenthesis because we are returning an object via useState updation */}
          {/* VVIMP, add the name attribute for getFormData to work in react */}
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={inputData.amount}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Now you see in this code, I put 0 in useRef and made a button, inside it I am updating the alue of useRef upon onClick by 1 and trying to display it in console and DOM.

We notice that on every click the console value is updating but not in DOM. This is because the component is not re-rendering to show the updated count. Only when we put any value in the input field ie. alter a state variable linked to useState, then only the component is re-rendered and the change of useRef is reflected in DOM.

Now one theory emerges as to why we can't use a simple js variable myNum, and do it like the same as useRef, why make a hook and do it via that

```jsx
import React from "react";
import { useState, useRef } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const myRef = useRef(0);
  let myNum = 0;

  console.log(myRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);

    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  return (
    <>
      <button
        onClick={() => {
          myRef.current = myRef.current + 1;
          myNum = myNum + 1;
          console.log("myNum", myNum);
          console.log("my-ref", myRef.current);
        }}
      >
        Click Me
      </button>
      <h1>myRef = {myRef.current}</h1>
      <h1>myNum = {myNum}</h1>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input
            id="title"
            name="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          {/* () for implicit return and {} inside the parenthesis because we are returning an object via useState updation */}
          {/* VVIMP, add the name attribute for getFormData to work in react */}
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={inputData.amount}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Upon running the code, I saw that though myNum is getting updated in the console, it is not getting updated in the DOM, even after I enter something in the input field. But useRef is updating like when I did update the input field.

Now normally useRef is used to reference a DOM Node of an HTML element. Say for eg. initially for button, useRef is null, but when we cause a state change, the useRef is now the DOM node of the button, ie. button itself. This state change can be anything like changing the value inside input field.

```jsx
import React, { useEffect } from "react";
import { useState, useRef } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const myRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);

    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  console.log("render phase:", myRef.current);

  useEffect(() => {
    console.log("useEffect phase:", myRef.current);
    // we used use Effect here because we first want the whole component to load and then only fire the console.log statement
    // Also the dependency array helps it to fire only once (empty array)
  }, []);

  return (
    <>
      <button ref={myRef}>Click Me</button>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input
            id="title"
            name="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          {/* () for implicit return and {} inside the parenthesis because we are returning an object via useState updation */}
          {/* VVIMP, add the name attribute for getFormData to work in react */}
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={inputData.amount}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Initial output, before the state is changed, useEffect will only run once.

```
render phase: null
useEffect phase: <button>​Click Me​</button>​
```

When state is changed (enter any input in the text field). Still use Effect is not here as it only ran once, before the state change

```
render phase: null
useEffect phase: <button>​Click Me​</button>​

<!-- after state is changed -->
render phase: <button>​Click Me​</button>​
```

Now apart from assigning useRef to the node of the html element, we can also use useRef with the input values

For now, let us focus on creating the same functionality we used with useState and do it with useRef.

But keep in mind, we cannnot use multiple parameters in one useRef like we did with useState so this method is a bit non preferred compared to useState.

```jsx
import React, { useEffect } from "react";
import { useRef } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      id: crypto.randomUUID(),
    };

    console.log("New expense added:", newExpense);

    setFetchData((prevState) => [
      ...prevState,
      {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID(),
      },
    ]);

    // clear fields after submitting
    titleRef.current.value = "";
    categoryRef.current.value = "";
    amountRef.current.value = "";
  };

  useEffect(() => {
    console.log(titleRef, categoryRef, amountRef);
    // we used use Effect here because we first want the whole component to load and then only fire the console.log statement
    // Also the dependency array helps it to fire only once (empty array)
  }, []);

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input id="title" name="title" ref={titleRef} />
          {/* () for implicit return and {} inside the parenthesis because we are returning an object via useState updation */}
          {/* VVIMP, add the name attribute for getFormData to work in react */}
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" ref={categoryRef}>
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" ref={amountRef} />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

---

# [Form Validation in React | Explained in Hindi | The Complete React Course | Ep.35](https://www.youtube.com/watch?v=qsCW7pRZylk&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=36)

Now we will resume from the part where we did not use useRef, we continue from useState

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);

    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input
            id="title"
            name="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={inputData.amount}
            onChange={(e) =>
              setInputData((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Okay, so firstly we will focus on making our code more crisp, ie. we will try to reduce the onChange on all 3 inputs and try to make it into one singular function.

For this, we will use a handleChange() function

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);
    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  console.log(inputData);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input
            id="title"
            name="title"
            value={inputData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={inputData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Now we have made our code crisp, time to make the form better by validating it.

First we will make sure that when all fields are empty, and when we click on submit, then that entry should not go into the form table.

We will make a function named validate()

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const errorData = {};

    if (!formData.title) {
      errorData.title = "Title is required";
    }

    if (!formData.category) {
      errorData.category = "Category is required";
    }

    if (!formData.amount) {
      errorData.amount = "Amount is required";
    }

    setErrors(errorData);

    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateForm = validate(inputData);

    if (Object.keys(validateForm).length) return;
    // if there is some data in validateForm, it means there are unfilled fields,
    //  hence return and break the flow and do not allow to submit

    setFetchData((prevState) => [
      ...prevState,
      { ...inputData, id: crypto.randomUUID() },
    ]);
    // clear the fields after we submit the form
    setInputData({ title: "", category: "", amount: "" });
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          {/* Fetching the data using value attribute */}
          <input
            id="title"
            name="title"
            value={inputData.title}
            onChange={handleChange}
          />
          <p className="error">{errors.title}</p>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={inputData.category}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
          <p className="error">{errors.category}</p>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={inputData.amount}
            onChange={handleChange}
          />
          <p className="error">{errors.amount}</p>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Here we made these functions first:

```jsx
const [errors, setErrors] = useState({});

const validate = (formData) => {
  const errorData = {};

  if (!formData.title) {
    errorData.title = "Title is required";
  }

  if (!formData.category) {
    errorData.category = "Category is required";
  }

  if (!formData.amount) {
    errorData.amount = "Amount is required";
  }

  setErrors(errorData);

  return errorData;
};
```

First we used a useState to store all those error fields if they are left empty and also returned it.

```jsx
const handleChange = (e) => {
  console.log(e.target);
  const { name, value } = e.target;
  setInputData((prevState) => ({ ...prevState, [name]: value }));
  setErrors({});
};
```

Also once we have started typing, we made sure the error messages go away


```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const validateForm = validate(inputData);

  if (Object.keys(validateForm).length) return;
  // if there is some data in validateForm, it means there are unfilled fields,
  //  hence return and break the flow and do not allow to submit

  setFetchData((prevState) => [
    ...prevState,
    { ...inputData, id: crypto.randomUUID() },
  ]);
  // clear the fields after we submit the form
  setInputData({ title: "", category: "", amount: "" });
};
```

Next we made sure, that when we click on submit, the input data will first be validated ie. be checked if any fields are empty or not. If there is any data in the error keys object, then it means that some fields are empty. It will then make sure that we will return ie. not be able to append that data to the expense table.

`<p className="error">{errors.title}</p>`

Also in UI, we made some `p` tags to show messages as to which fields are missing.

---

# []()