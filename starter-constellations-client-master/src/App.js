import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Navigation from "./common/Navigation";
import ConstellationsList from "./home/ConstellationsList";

function App() {
  const [constellations, setConstellations] = useState({
    all: [],
    visible: [],
  });

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/constellations`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setConstellations({
          all: response,
          visible: response,
        });
      });
  }, []);

  return (
    <main>
      <Header
        constellations={constellations}
        setConstellations={setConstellations}
      />
      <Navigation />
      <ConstellationsList constellations={constellations.visible} />
    </main>
  );
}

export default App;
