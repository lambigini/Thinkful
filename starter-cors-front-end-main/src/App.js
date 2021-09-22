import React from "react";
import Home from "./home/Home";
import header from "./header.jpg";

const style = {
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${header})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function App() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-white" style={style}>
        <div className="container">
          <h1 className="display-1">CORS TEST</h1>
        </div>
      </div>
      <main className="container">
        <Home />
      </main>
    </>
  );
}

export default App;
