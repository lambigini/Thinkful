import React, { useState } from "react";

function IncrementButtons() {
  const [count, setCount] = useState(0);
  const [lastPressed, setLastPressed] = useState(null);
  const handleClick = (label) => {
    if (label === "One") {
      setLastPressed(label);
      setCount((currentCount) => currentCount + 1);
    } else if (label === "Two") {
      setLastPressed(label);
      setCount((currentCount) => currentCount + 1);
      setCount((currentCount) => currentCount + 1);
    }
  };
  return (
    <div>
      <h3>Last Pressed: {lastPressed}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => handleClick("One")}>One</button>

      <button onClick={() => handleClick("Two")}>Two</button>
    </div>
  );
}

export default IncrementButtons;
