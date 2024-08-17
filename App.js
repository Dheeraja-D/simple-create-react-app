import React, { useState } from "react";

function App() {
  // State to store the count value
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
