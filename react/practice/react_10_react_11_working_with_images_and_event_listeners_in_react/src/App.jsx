import React from "react";
import AppleCounterComponent from "./components/AppleCounter";
import "./App.css";

function AppComponent() {
  return (
    <div className="App">
      <h1>Apple Counter</h1>
      <AppleCounterComponent oncClick={(e) => console.log(e)} />
    </div>
  );
}

export default AppComponent;
