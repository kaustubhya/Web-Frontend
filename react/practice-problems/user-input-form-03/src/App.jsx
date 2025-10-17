import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <div className="info-display">{name}</div>
      <form>
        <input
          type="text"
          name="name"
          onChange={(e) => {setName(e.target.value)}}
        />
      </form>
    </>
  );
}

export default App;
