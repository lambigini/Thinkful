import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import FontIncrease from "./FontIncrease";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setfontSize] = useState(12);
  let handleFontSize = () => setfontSize(fontSize + 2);

  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} fontSize={fontSize} />
      <FontIncrease loggedIn={loggedIn} handleFontSize={handleFontSize} />
    </div>
  );
}

export default App;
