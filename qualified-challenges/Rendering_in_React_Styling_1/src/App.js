import React from "react";
import "./App.css";

function App() {
  const centerText = {
    textAlign: "center",
  };

  const font = {
    fontFamily: "cursive",
  };

  const monospace = {
    fontFamily: "monospace",
  };

  return (
    <div>
      <h1 style={{ ...centerText, ...font }}>Hello!</h1>
      <h4 style={{ ...centerText, ...monospace }}>How are you?</h4>
      <h5 style={centerText} className="App-weather-message">
        Today is a nice day!
      </h5>
    </div>
  );
}

export default App;
