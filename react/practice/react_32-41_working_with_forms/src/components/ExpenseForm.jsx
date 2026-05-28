import React from "react";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setFetchData,
  inputData,
  setInputData,
  editingRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      {
        required: true,
        message: "Please enter a title",
      },
      {
        minLength: 2,
        message: "Title should be atleast 2 characters long",
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
        pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
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
        // We used some instead of forEach because if we use return true in some(), it breaks out of the loop, which is not possible in forEach
        console.log(errorRule);
        if (errorRule.required && !value) {
          // if required is true then display the message
          errorData[key] = errorRule.message;
          // with this we can overcome our multiple ifs as commented below
          return true;
        }

        if (errorRule.minLength && value.length < errorRule.minLength) {
          errorData[key] = errorRule.message;
          return true;
        }

        if (errorRule.pattern && !errorRule.pattern.test(value)) {
          errorData[key] = errorRule.message;
          return true;
        }
      });
    });

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

    // editing form logic
    if (editingRowId) {
      setFetchData((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...inputData, id: editingRowId };
            // in input data we have title, category and amount, we just need to add the id to it, which is same as editingRowId
          }
          return prevExpense;
        }),
      );
      // clear the fields after we save the edit changes
      setInputData({ title: "", category: "", amount: "", email: "" });

      setEditingRowId("");
      return;
      // this return will allow us to edit and exit the function.
      // Earlier it was doing edit and add, but after return, only edit will work
    }

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
        <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
      </form>
    </>
  );
};

export default ExpenseForm;
