import React from "react";

const ExpenseForm = ({ setFetchData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    setFetchData((prevData) => [...prevData, expense]);
    e.target.reset();
    // clean the fields after submitting

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
