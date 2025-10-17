function App() {
  const liItems = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  return (
    <>
      <ul>
        {liItems.map((item) => {
          const key = crypto.randomUUID();
          console.log(key);

          return <li key={key}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
