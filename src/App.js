import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rodrigo Méndez</p>
        <p>Hello Ksquare Group!</p>
        <p>{count}</p>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </header>
    </div>
  );
}

export default App;
