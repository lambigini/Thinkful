import React from "react";

function Holiday({ name, day, month }) {
  return (
    <p>
      {name}: {month} {day}
    </p>
  );
}

export default Holiday;
