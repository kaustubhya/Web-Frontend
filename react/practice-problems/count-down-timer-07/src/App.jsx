import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [value, setValue] = useState(input);


  // now if we use a setInterval directly and use a useState here inside of it, then every time the state changes, the component re-renders and a new set interval is made. This causes multiple set intervals. To prevent that we use a useEffect hook here.

  let timerId = null;

  useEffect(() => {
      timerId = setInterval(() => {
        setValue(value - 1);
      }, 1000);
  }, [])

  if(value === 0) {
    clearInterval(timerId);
  }

  return (
    <>
    <label htmlFor='input-timer'>Enter a number to start the timer</label>
    <input type='number' id='input-timer' value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>{value}</h1>
      <button className=''></button>
    </>
  )
}

export default App
