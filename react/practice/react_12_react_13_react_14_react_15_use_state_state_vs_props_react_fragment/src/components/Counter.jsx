import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          {
            setCount((prev) => prev + 1);
          }
        }}
      >
        Count ko badhaao
      </button>
      {/* Never use count++ with React state. Use count + 1 or the callback form. */}
    </div>
  );
};

export default Counter;
