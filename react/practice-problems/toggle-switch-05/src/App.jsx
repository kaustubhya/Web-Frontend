import "./App.css";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <form>
        <label htmlFor="myCheckbox">Am I checked</label>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            console.log(!isChecked);
          }}
        />
      </form>
      <p>{isChecked ? "Yes" : "No"}</p>
    </>
  );
}

export default App;
