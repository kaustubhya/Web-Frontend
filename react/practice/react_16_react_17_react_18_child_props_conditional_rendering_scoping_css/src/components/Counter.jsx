import { useState } from "react";
import styles from "../Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBlock: "40px" }}>
      <h1 className={styles["text-ksd"]}>{count}</h1>
      <button className={[styles.btn, styles['text-ksd']].join(' ')}
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
