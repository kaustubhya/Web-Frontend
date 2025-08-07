import React from "react";
import AppleCounterComponent from "./components/AppleCounter";
import "./App.css";
import Counter from "./components/Counter";

function AppComponent() {
  return (
    <div className="App">
      <h1>Apple Counter</h1>
      <Counter />
      <AppleCounterComponent onClick={(e) => console.log(e)} />
    </div>
  );
}

export default AppComponent;
