import React from "react";

function FontIncrease({ loggedIn, handleFontSize }) {
  return loggedIn && <button onClick={handleFontSize}>IncreaseFont</button>;
}

export default FontIncrease;
