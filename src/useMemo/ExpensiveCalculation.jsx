
import { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculation running...");
    return number * 100;
  }, [number]);

  const square = useMemo(() => {
    console.log("Square calculation running...");
    return number * number;
  }, [number]);

  return (
    <div>
      <hr />

      <center>
        <h1>useMemo - Hook</h1>
      </center>

      <h2>Expensive Calculation</h2>

      <h3>Number: {number}</h3>

      <h3>Result (Number × 100): {result}</h3>

      <h3>Square: {square}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default ExpensiveCalculation;
