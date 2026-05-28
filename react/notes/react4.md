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
  // [] means wildcard, it can be name, category or amount
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

# [Create Custom Form Fields in React | Advanced Form Validation | The Complete React Course | Ep.36](https://www.youtube.com/watch?v=w2ebVv_Rp7M&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=37)

In major projects, people usually make custom input fields as the normal input fields do not provide that much functionality, so we will also do it here.

We will make this whole thing custom ie. label, input and error message.

```jsx
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
```

First we will make components for input type text and input type select, so we can reuse them in future

ExpenseForm

```jsx
import React from "react";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

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
      errorData.category = "Please Select a Category";
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
    // [] means wildcard, it can be name, category or amount
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          className="input-container"
          label="Title"
          id="title"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Select
          id="category"
          name="category"
          value={inputData.category}
          onChange={handleChange}
          error={errors.category}
          defaultValue="Select a Category"
          label="Category"
          optionArrays={[
            "Bills",
            "Clothes",
            "Groceries",
            "Education",
            "Medicine",
          ]}
        />
        <Input
          className="input-container"
          label="Amount"
          id="amount"
          name="amount"
          value={inputData.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

Input.jsx

```jsx
import React from "react";

const Input = ({ className, id, name, value, onChange, error, label }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      {/* Fetching the data using value attribute */}
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
```

Select.jsx

```jsx
import React from "react";

const Select = ({
  id,
  name,
  value,
  onChange,
  label,
  defaultValue,
  error,
  optionArrays,
}) => {
  const allOptions = (options) => {
    return options.map((el) => {
      return (
        <option key={el} value={el}>
          {el}
        </option>
      );
    });
  };

  //   use map instead of forEach as for each does not return anything whereas map returns an array
  // also keep in mind how we are using return here

  return (
    <div className="input-container">
      <label htmlFor="category">{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultValue && (
          <option value="" hidden>
            {defaultValue}
          </option>
        )}
        {/* only show this default value option if it is given in Select form in ExpenseForm.jsx, else it will not show anything */}
        {allOptions(optionArrays)}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;
```

Now we will improve our validation logic. Earlier we could only implement one validation, say if field is empty, we cannot submit that data, but what if we have other cases like minlength. Also suppose we add an email field and that email validation needed to be checked. For this we will use an efficient method replacing the outdated method (commented out)

For that we will use this:

```jsx
import React from "react";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      {
        required: true,
        message: "Please enter a title",
      },
      {
        minLength: 5,
        message: "Title should be atleast 5 characters long",
      },
    ],
    category: [
      {
        required: true,
        message: "Please select a category",
      },
    ],
    amount: [
      {
        required: true,
        message: "Please enter an amount",
      },
    ],
    email: [
      {
        required: true,
        message: "Please enter an email",
      },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Please enter a valid email",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};

    // since formData is an object, we have to loop through its keys, we can use Object.keys or Object.entries
    // console.log(Object.entries(formData)) // this is an array of arrays
    Object.entries(formData).forEach(([key, value]) => {
      // console.log(key, value);
      // console.log(validateConfig[key]);
      validateConfig[key].some((errorRule) => {
        console.log(errorRule);
        if (errorRule.required && !value) {
          // if required is true then display the message
          errorData[key] = errorRule.message;
          // with this we can overcome our multiple ifs as commented below
          return true;
        }

        if (errorRule.minLength && value.length < 5) {
          errorData[key] = errorRule.message;
          return true;
        }

        if (errorRule.pattern && !errorRule.pattern.test(value)) {
          errorData[key] = errorRule.message;
          return true;
        }
      });
    });

    // We used some instead of forEach because if we use return true in some(), it breaks out of the loop, which is not possible in forEach

    // if (!formData.title) {
    //   errorData.title = "Title is required";
    // }

    // if (!formData.category) {
    //   errorData.category = "Please Select a Category";
    // }

    // if (!formData.amount) {
    //   errorData.amount = "Amount is required";
    // }

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
    // [] means wildcard, it can be name, category or amount
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          className="input-container"
          label="Title"
          id="title"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Select
          id="category"
          name="category"
          value={inputData.category}
          onChange={handleChange}
          error={errors.category}
          defaultValue="Select a Category"
          label="Category"
          optionArrays={[
            "Bills",
            "Clothes",
            "Groceries",
            "Education",
            "Medicine",
          ]}
        />
        <Input
          className="input-container"
          label="Amount"
          id="amount"
          name="amount"
          value={inputData.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <Input
          className="input-container"
          label="Email"
          id="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

This is the best way to use validation which covers multiple error cases on a single input element. One more benefit of using custom input fields.

---

# [Filter Data Using Custom Hooks | The Complete React Course | Ep.37](https://www.youtube.com/watch?v=QaYWYJ9OuQE&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=38)

Before beginning, we add another validation in amount input where we check if the input is a number or not

```jsx
import React from "react";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setFetchData }) => {
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      {
        required: true,
        message: "Please enter a title",
      },
      {
        minLength: 5,
        message: "Title should be atleast 5 characters long",
      },
    ],
    category: [
      {
        required: true,
        message: "Please select a category",
      },
    ],
    amount: [
      {
        required: true,
        message: "Please enter an amount",
      },
      {
        pattern: /^[0-9]+$/,
        message: "Please Enter a Number",
      },
    ],
    email: [
      {
        required: true,
        message: "Please enter an email",
      },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Please enter a valid email",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};

    // since formData is an object, we have to loop through its keys, we can use Object.keys or Object.entries
    // console.log(Object.entries(formData)) // this is an array of arrays
    Object.entries(formData).forEach(([key, value]) => {
      // console.log(key, value);
      // console.log(validateConfig[key]);
      validateConfig[key].some((errorRule) => {
        console.log(errorRule);
        if (errorRule.required && !value) {
          // if required is true then display the message
          errorData[key] = errorRule.message;
          // with this we can overcome our multiple ifs as commented below
          return true;
        }

        if (errorRule.minLength && value.length < 5) {
          errorData[key] = errorRule.message;
          return true;
        }

        if (errorRule.pattern && !errorRule.pattern.test(value)) {
          errorData[key] = errorRule.message;
          return true;
        }
      });
    });

    // We used some instead of forEach because if we use return true in some(), it breaks out of the loop, which is not possible in forEach

    // if (!formData.title) {
    //   errorData.title = "Title is required";
    // }

    // if (!formData.category) {
    //   errorData.category = "Please Select a Category";
    // }

    // if (!formData.amount) {
    //   errorData.amount = "Amount is required";
    // }

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
    setInputData({ title: "", category: "", amount: "", email: "" });
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
    // [] means wildcard, it can be name, category or amount
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          className="input-container"
          label="Title"
          id="title"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Select
          id="category"
          name="category"
          value={inputData.category}
          onChange={handleChange}
          error={errors.category}
          defaultValue="Select a Category"
          label="Category"
          optionArrays={[
            "Bills",
            "Clothes",
            "Groceries",
            "Education",
            "Medicine",
          ]}
        />
        <Input
          className="input-container"
          label="Amount"
          id="amount"
          name="amount"
          value={inputData.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <Input
          className="input-container"
          label="Email"
          id="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
```

---

Now for filtering, we will first use the normal filter function that we are doing in javascript and then we will implement it via. a custom hook.

1. Via filter function

To make the table shrink when the options are less, we can add a align-self in table in App.css

```css
.expense-table {
  width: 100%;
  border-collapse: collapse;

  align-self: flex-start;
  /* used to make the table smaller when only few values are there */
```

Next we make changes in ExpenseTable.jsx

```jsx
import React, { useState } from "react";

const ExpenseTable = ({ fetchData }) => {
  const [myCategory, setMyCategory] = useState("");

  // filter the details
  const myFilteredExpenses = fetchData.filter((expense) => {
    // return true; // if we return true then we get an array of objects seeing all details
    // return false;
    // console.log(expense.category.toLowerCase()); // this will give us all the categories, since we have to deal with groceries and not Groceries, we need them in lowercase
    // console.log(expense.category.toLowerCase().includes('grocery'));
    // return expense.category.toLowerCase().includes('grocery'); // this will only give us that object which has category grocery, console.log prints everything, return gives selective data

    // using state for dynamic category selection and filtering
    return expense.category.toLowerCase().includes(myCategory);
  });
  console.log(myFilteredExpenses);

  // console.log(fetchData); // array of objects
  const totalAmtSum = myFilteredExpenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0,
  );

  return (
    <>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                onChange={(e) => setMyCategory(e.target.value.toLowerCase())}
              >
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
          {/* fetch wrt myCategory filter */}
          {myFilteredExpenses.map(({ id, title, category, amount }) => {
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
            <th>₹ {totalAmtSum}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
```

Make a myCategory using useState and we will filter it based on onChange and map it via a myFilteredExpenses.

In myFiltered expenses, it will check which state of category is active and based on that return the selective data which we will map and show it.

Also we adjusted the amount calculation, it now calculates by taking into account which category is active.

---

Now we will, show the filtering of data via a custom hook. We do it because, in many apps, there will be filtering but for different data eg. filter based upon name, filter based upon title filter based upon amount etc., so better to make a reusabe component via a custom hook.

Start by making a `hooks` directory

There we make a file called `useFilter.js`, not jsx as no html is needed here

```js
import { useState } from "react";

export function useFilter(dataList, callbackFn) {
  // here we are using a datalist, it is an array of objects having all the data which we will filter
  // callback function will be used when we want to be flexible, eg. filter by category (here), or filter by title or filter by amount

  const [query, setQuery] = useState("");
  // query is the selected on which we filter

  const filteredData = dataList.filter((data) =>
    callbackFn(data).toLowerCase().includes(query),
  );

  return [filteredData, setQuery];
}
```

Here we use no jsx as no html is needed here, we are making a resuable function, not component

```jsx
import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";

const ExpenseTable = ({ fetchData }) => {
  // destructure the array which is returned by useFilter
  const [filteredData, setQuery] = useFilter(
    fetchData,
    (data) => data.category,
  );
  // (data) => data.category => this is when each data is going through datalist in filter function, select their category for filtering
  // if we do data.title, it will filter wrt title, or if we do data.amount, filter will happen wrt amount

  // console.log(fetchData); // array of objects
  const totalAmtSum = filteredData.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0,
  );

  return (
    <>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
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
          {filteredData.map(({ id, title, category, amount }) => {
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
            <th>₹ {totalAmtSum}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
```

Integrated with Expense Table, this is how we implement filter functionality via a custom hook.

---

# [Create Custom Context Menu in React | The Complete React Course | Ep.38](https://www.youtube.com/watch?v=oBwE5XTry1k&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=39)

A context menu is the menu which comes when we press right click, here we will make our own right click custom context menu and disable the browser's context menu.

Let us insert a context menu here on the expense table with 2 options: Edit and Delete.

First, we will make a component for our custom menu `ContextMenu.jsx`

```jsx
import React from "react";

const ContextMenu = ({ menuPosition }) => {
  return (
    <div className="context-menu" style={menuPosition}>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  );
};

export default ContextMenu;
```

In the props, we passed menu position as style, it will be used to get the top and left positions as to where we click, the menu will popup there

For contextMenu, there is an event listener called `contextmenu` that we use.

CSS related to context menu.

```css
.context-menu {
  background-color: white;
  border: 1px solid;
  position: absolute;
  display: none;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.context-menu div {
  padding: 2px 8px;
  cursor: pointer;
  font-weight: 600;
}

.context-menu div:hover {
  background-color: #ddd;
}
```

---

# [Edit Functionality in React | The Complete React Course | Ep.39](https://www.youtube.com/watch?v=heNvLg2B7mQ&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=40)

Now we have made our custom context menu in react, they give us edit and delete functionality.

So now we have already worked on delete where in when we right click on a row, click on delete, that row gets deleted from the table.

Now we will be working on the Edit feature

Our goal is: when we will right click on a row, and press Edit, the entire data from the form should be populated in the Expense Form from where we are allowed to edit.

Now for that to happen, we have to bring this state out from the child to the parent

```jsx
const [inputData, setInputData] = useState({
  title: "",
  category: "",
  amount: "",
  email: "",
});
```

Currently this input is inside the expenseTable only, we need to bring it out of it, so that it is accessible in forms too.

So if we find a way to set the Input data state when we click on Edit option, we will be able to fill the form fields with that value when we click on edit.

So we lift the state of the above code block.

So once we put it in App.jsx, we keep calling it in ExpenseTable.jsx, then ContextMenu.jsx

There, in Edit button onClick, we do this for now

```jsx
setInputData({
  title: "Hi",
  category: "Bills",
  amount: "200",
  email: "saksham@gmail.com",
});
```

Now whenever we click on edit, the entire form will be populated with this same value everytime

But we do not want like this:

So what we need now is the rowId, and the expenses too

For rowId, it is there in ContextMenu, but for expenses, we need to import it in ContextMenu. So we will import fetchData from expense table into ContextMenu

This will give us a list of all expenses, so we will use `find()` method here.

This find method is used to find anything from an array.

Part 2:

Now that we are set by filling the form fields when the Edit button is pressed, we will now work on editing the form field, and then updating it to the table, also we will make sure the `Add` button turns to `Save` button when we are editing.

Now we need to know when to keep the button in add mode or in save mode. For that we will maintain a state in the form which will tell us whether the button should be in editing mode or in adding mode.

Plus when we click on the save button, we need to specify which row we are updating.

So we will make it in App.js because via this, we can take it inside the form and in the context menu

So after App.jsx, we will go to ExpenseForm.jsx, there we work with editingRowId.

Now as for setEditingRowId, we will go to ExpenseTable.jsx, from there it will go to ContextMenu.jsx

Now when you go to the ContextMenu.jsx, and then put the setEditingRowId there, we will be able to see the form submit button change from `Add` to `Edit` when we click on the Edit button in context menu.

Now when we worked on ContextMenu.jsx, we are able to edit the current item in the form and then save it, but one problem. When we click on save, instead of getting replaced, it is appending as a new row and getting treated as a new entry.

Also the `Save` button is also not getting converted back to `Add`

To fix this we will go to the ExpenseForm section where we submit the form. We will make changes AFTER validation part because we need the validation to work for Edit functionality too!

---

# [Sorting in React | Ascending/Descending and Alphabetically | The Complete React Course | Ep.40](https://www.youtube.com/watch?v=Y2VX9aL9N8M&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=41)

Normally if we have an array

`[1, 3, 10, 2, 5]` and do `[1, 3, 10, 2, 5].sort()`, we will get `[1, 10, 2, 3, 5]`

It will not sort wrt increasing order of numbers, rather it performs dictionary sorting.

To make it sort in ascending order, we will do:

```jsx
[1, 3, 10, 2, 5].sort((a, b) => a - b)

/*
a is first number
b is second number

sort in a way that first number is smaller than second number ie. ascending
/*
```

To make it sort in descending order:

```jsx
[1, 3, 10, 2, 5].sort((a, b) => b - a)

/*
a is first number
b is second number

sort in a way that second number is smaller than first number ie. descending
/*
```

Now we will sort an Array of Objects

```jsx
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

Now if just try to do the normal `b - a` or `a - b`, we will not get anywhere.

It is because a and b are objects here

So we will do something different here, i.e. going inside object to amount, and using that we will sort

```jsx
let expenseData = [
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
    amount: 6000,
  },
  {
    id: crypto.randomUUID(),
    title: "Electricity Bill",
    category: "Bills",
    amount: 1100,
  },
];

let ans = expenseData.sort((a, b) => a.amount - b.amount);

console.log(ans);
```

```
[
  {
    id: '4a633685-04db-4bd2-ba5c-4af9f9235ebc',
    title: 'Milk',
    category: 'Grocery',
    amount: 40
  },
  {
    id: 'ac8c0904-8b0d-467a-833b-fd9a33a2dd2d',
    title: 'Electricity Bill',
    category: 'Bills',
    amount: 1100
  },
  {
    id: '87ac05f5-8703-4677-8abc-01fa259c4986',
    title: 'Shirt',
    category: 'Clothes',
    amount: 6000
  }
]
```

This was ascending

For descending

```jsx
let ans = expenseData.sort((a, b) => b.amount - a.amount);

console.log(ans);
```

### Sort function does not create a new array and sort, it modifies the original array.

Now in our code, we will go to expenseTable.jsx, towards the sort icons, first ascending one

```jsx
onClick={() => setFetchData((prevState) =>
  prevState.sort((a, b) => a.amount - b.amount)
)}
```

This is what we have written.

Now one thing to keep in mind is that, the array is updating itself in the backend regardless of the old value that is being set here. Because we know sort function does not create a new array, it modifies array. 

Due to this, we are not able to see the sorting happen because the state does not change as the array is the same. It has just rearranged itself.

To see the sorting happen, we need to make a new array so state can see changes and thus update it and we can see it in ui.

Now but we have added also, an event listener on the table, `onClick={() => setMenuPosition({})}`, this is allowing us to click the table and see the setContext Menu position, so in reality this is being clicked but we are under the assumption that the sort button is being clicked.

So in devtools, we can see clicked but the sort icon is not clicked, the table is clicked.

```jsx
onClick={() => setFetchData((prevState) => 
  [...prevState.sort((a, b) => a.amount - b.amount)]
)}
```

Now see we have made a new array and the sort functionality is working.

So always a good practice:
- copy the array
- then sort the array

Now, we can eliminate the unnecessary Context Menu calling by using an if with this setMenuPosition

After this, we can write the logic for descending order too.

---

Now, we make a functionality for clear sort.

But our current way of sorting logic would not fit here.

So callback function way needs to be updated.

For a new way, 

1. 
```jsx
  const [sortCallback, setSortCallback] = useState(() => () => {});
```

It is important that we return a callback function, because, if we do not, we will get the return value of the function and not the function.

`() => {}` => ✅

`() => {}` ❌ this is only read the return value of the function, which is not useful in sorting

```jsx
setSortCallback(() => (a, b) => a.amount - b.amount)
```

This is the new way, which can now allow us to use clear sort

---

Finally we will see how to sort title alphabetically:

```jsx
setSortCallback(() => (a, b) => a.title.localeCompare(b.title))
```

```jsx
setSortCallback(() => (a, b) => b.title.localeCompare(a.title))
```

This is how we sort in ascending and descending order alphabetically.

---

# [LocalStorage in React Using Custom Hook | The Complete React Course | Ep.41](https://www.youtube.com/watch?v=5uHikv1oBEI&list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&index=42)

Normally we have used localstorage before, but we will use it here with a hook, custom hook.

So our local storage hook will be such that it will be connected to the state automatically.

So make a file called useLocalStorage.js inside the hooks folder.

Here is the code:

```jsx
import React, { useState, useEffect } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    // if there is some existing data in local storage, then we will use that, otherwise we will use the initial data
    if (existingData) {
      setData(existingData);
      // there was already some data in local storage, so we will set that data to our state
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
      // there was no data in local storage, so we will set the initial data to local storage
    }
  }, []);
  // we used useEffect here because we want to run this code only once when the component mounts, we don't want to run this code every time the component re-renders, so we used an empty dependency array here
  // using it without useEffect will cause an infinite loop because we are setting the state inside the component, which will cause the component to re-render, and then it will set the state again, and this will go on indefinitely, so we need to use useEffect here to avoid that infinite loop

  // now we need to update the local storage whenever there is a change in data, so we will create a function for that

  const updateLocalStorage = (newData) => {
    // set the localStorage with new data
    localStorage.setItem(key, JSON.stringify(newData));

    // also update the state with new data
    setData(newData);
  };

  return [data, updateLocalStorage];
}

```

Now this code is for when we did:

```jsx
<h1 onClick={() => {
        setLocalStorageData([4, 5, 6])
      }}>Track Your Expense</h1>
```

But if we do:

```jsx
<h1 onClick={() => {
  setLocalStorageData((prevState) => [...prevState, 4, 5, 6])
  }}>Track Your Expense
</h1>
```

Here we have used a prev State and passed a call back function.

So we need to make some modifications if the callback data is a function in useLocalStorage.js

Updated code:

```jsx
import React, { useState, useEffect } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    // if there is some existing data in local storage, then we will use that, otherwise we will use the initial data
    if (existingData) {
      setData(existingData);
      // there was already some data in local storage, so we will set that data to our state
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
      // there was no data in local storage, so we will set the initial data to local storage
    }
  }, []);
  // we used useEffect here because we want to run this code only once when the component mounts, we don't want to run this code every time the component re-renders, so we used an empty dependency array here
  // using it without useEffect will cause an infinite loop because we are setting the state inside the component, which will cause the component to re-render, and then it will set the state again, and this will go on indefinitely, so we need to use useEffect here to avoid that infinite loop

  // now we need to update the local storage whenever there is a change in data, so we will create a function for that

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      // set the localStorage with new data
      localStorage.setItem(key, JSON.stringify(newData));
    }

    // also update the state with new data
    setData(newData);
  };

  return [data, updateLocalStorage];
}

```

Practice app.jsx for local Storage code

```jsx
import { useState } from "react";
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { expenseData } from "../expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [fetchData, setFetchData] = useState(expenseData);
  // initially, we have some values from expense data,
  // so you first show that in the table, we will add some more in the future

  const [editingRowId, setEditingRowId] = useState("");

  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [localStorageData, setLocalStorageData] = useLocalStorage('key', [1, 2, 3]);
  console.log(localStorageData);

  return (
    <main>
      <h1 onClick={() => {
        setLocalStorageData((prevState) => [...prevState, 4, 5, 6])
      }}>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setFetchData={setFetchData}
          inputData={inputData}
          setInputData={setInputData}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        {/* send this fetched in the table to display*/}
        <ExpenseTable
          fetchData={fetchData}
          setFetchData={setFetchData}
          setInputData={setInputData}
          setEditingRowId={setEditingRowId}
        />
        {/* the setFetchedData inside the table will take care of deletion */}
      </div>
    </main>
  );
}

export default App;

```

Now we can use useLocalStorage inplace of useState in many places.

