import React from "react";
import "./Activity.css";

function Activity({ time, description }) {
  // const text = `${time} ${description}`;
  return (
    <ul>
      <div>{time}</div>
      <div>{description}</div>
    </ul>
  );
}

export default Activity;
