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
