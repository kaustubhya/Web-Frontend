import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // now just plain fetching using use effect will not do if we also want to display the data, for that we also need a useState
  const [fetched, setFetched] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setFetched(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>Here is the fetched data from api, rendered via useState</h3>
      <div className="container">
        {fetched.map((todo) => {
          const key = crypto.randomUUID();

          /* store this unique keys by making random blocks of div */

          return (
            <div key={key}>
              <p>User id: {todo.id}</p>
              <p>Task Title: {todo.title}</p>
              <p>Completed: {todo.completed ? 'true' : 'false'}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
