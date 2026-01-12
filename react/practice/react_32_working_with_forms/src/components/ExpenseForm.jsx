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
