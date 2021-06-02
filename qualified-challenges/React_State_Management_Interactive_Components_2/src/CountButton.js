import React, { useState } from "react";

function CountButton() {
  let [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(++count)}>Click Count: {count}</button>
  );
}

export default CountButton;
