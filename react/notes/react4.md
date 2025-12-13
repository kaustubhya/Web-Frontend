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
    title: "Milk",
    category: "grocery",
    amount: 40,
  },
];
```

now for multiple objects, we need to give it a unique id, for that we can do one of these 2 things:

1. use an npm package called `uuid`
2. In modern js we can do `id: crypto.randomUUID()` (this will generate a random uuid (unique user id))

All done in expenseData.js

Now we need to use this data in expense table, so to do that, we will first bring it inside App.jsx and then from there we will send it to expenseTable.jsx

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

We will come back to this one, for now let us first focus on the form, where we will enter the form values and when we press on submit, then the data will be added to this table.

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

1. Replace the category input with a select element
2. To enter and get the form values in react, we need a `name` attribute. VVIMP. Use it in all inputs.
3. Then we made a function handleSubmit in form's onSubmit, there we will write our logic
4. In handle submit, first we take care of page reload on form submit, 