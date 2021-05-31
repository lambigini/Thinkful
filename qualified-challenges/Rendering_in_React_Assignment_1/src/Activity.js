import React from "react";
import "./Activity.css";

function Activity({ time, description }) {
  const text = `${time} ${description}`;
  return <li>{text}</li>;
}

export default Activity;
