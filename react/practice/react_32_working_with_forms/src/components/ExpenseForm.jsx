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

    if (Object.keys(validateForm).length) return
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
    setErrors({})
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
