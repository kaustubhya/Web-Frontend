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
{fetchData.map(({ id, title, category, amount }) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{category}</td>
      <td>₹{amount}</td>
    </tr>
  );
})}
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
}

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
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        {/* Fetching the data using value attribute */}
        <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
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
        <input id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
    const expense = {title, category, amount, id: crypto.randomUUID()};
    console.log(expense);
    setFetchData((prevData) => [...prevData, expense]);
    // Clear the form after submission
    setTitle('');
    setCategory('');
    setAmount('');

  };
```

Final code of ExpenseForm.jsx

```jsx
import React from "react";
import { useState } from "react";

const ExpenseForm = ({ setFetchData }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {title, category, amount, id: crypto.randomUUID()};
    console.log(expense);
    setFetchData((prevData) => [...prevData, expense]);
    // we return an array hence used an array here

    // Clear the form after submission
    setTitle('');
    setCategory('');
    setAmount('');

  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        {/* Fetching the data using value attribute */}
        <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
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
        <input id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
const [inputData, setInputData] = useState({title: "", category: "", amount: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setFetchData((prevState) => [...prevState, {...inputData, id: crypto.randomUUID()}]);

    // clear the fields after we submit the form
    setInputData({title: "", category: "", amount: ""});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        {/* Fetching the data using value attribute */}
        <input id="title" name="title" value={inputData.title} onChange={(e) => setInputData((prevState) => ({...prevState, title: e.target.value}))} />
        {/* () for implicit return and {} inside the parenthesis because we are returning an object via useState updation */}
        {/* VVIMP, add the name attribute for getFormData to work in react */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={inputData.category} onChange={(e) => setInputData((prevState) => ({...prevState, category: e.target.value}))}>
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
        <input id="amount" name="amount" value={inputData.amount} onChange={(e) => setInputData((prevState) => ({...prevState, amount: e.target.value}))} />
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

