import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  // State to store the count value
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="button-group">
          <button onClick={increment} className="button">Increment</button>
          <button onClick={decrement} className="button">Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
