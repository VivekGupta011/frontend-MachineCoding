import React from "react";
import ReactHooks from "./ReactHooks(CustomHooks)";
const CounterCustomHooks = () => {
  const { count, increment, decrement } = ReactHooks();
  return (
    <div>
      <p style={{ color: "black" }}>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterCustomHooks;
