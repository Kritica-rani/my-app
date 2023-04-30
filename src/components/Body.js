import React from "react";
import { useState } from "react";

export default function Body() {
  const intialState = 100;
  const [count, setCount] = useState(intialState);
  const handleClick = () => {
    setCount((prevState) => prevState + 5);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(intialState);
  };
  return (
    <div>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleDecrease}> Decrease </button>
      <button onClick={handleReset}>Reset</button>

      <h1>My current value: {count}</h1>
    </div>
  );
}
