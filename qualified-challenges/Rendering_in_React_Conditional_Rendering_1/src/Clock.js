import React from "react";

function Clock() {
  const date = new Date();
  //   console.log(date.getHours());
  if (date.getHours() < 12) {
    return <p>Good Morning!</p>;
  } else if (date.getHours() >= 12 && date.getHours() <= 18) {
    return <p>Good Afternoon!</p>;
  } else {
    return <p>Good Evening!</p>;
  }
}

export default Clock;
