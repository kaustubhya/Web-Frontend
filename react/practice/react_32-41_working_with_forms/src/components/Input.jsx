import React from "react";

const Input = ({className, id, name, value, onChange, error, label}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      {/* Fetching the data using value attribute */}
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className='error'>{error}</p>
    </div>
  );
};

export default Input;
