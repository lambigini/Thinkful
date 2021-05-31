import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  const list = hobbies.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    hobbies.length > 0 && (
      <div>
        <h4>Hobbies</h4>
        <ul>{list}</ul>
      </div>
    )
  );
}
export default HobbyList;
