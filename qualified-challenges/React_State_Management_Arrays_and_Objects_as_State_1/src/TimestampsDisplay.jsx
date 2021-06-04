import React from "react";

function TimestampsDisplay(props) {
  const { timestamps } = props;
  console.log(`timestamps in TimestampsDisplay ${timestamps} `);
  console.log(`props in TimestampsDisplay ${props} `);
  return (
    <ol>
      {timestamps.map((ts, i) => (
        <li key={i}>{new Date(ts).toLocaleString()}</li>
      ))}
    </ol>
  );
}

export default TimestampsDisplay;
