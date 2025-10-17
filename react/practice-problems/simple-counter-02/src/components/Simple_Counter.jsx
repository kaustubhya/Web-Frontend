import React, { useState } from "react";
import Buttons from "./Buttons";

const Simple_Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Simple Counter</h1>
      <div className="value">{count}</div>
      <div className="buttons-container">
        <Buttons
          name="Increment"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        />
        <Buttons 
        name='Decrement'
        onClick={() => {
            setCount((prev) => prev - 1);
        }}
        />
      </div>
    </main>
  );
};

export default Simple_Counter;
