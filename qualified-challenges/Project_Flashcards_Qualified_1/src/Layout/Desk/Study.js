import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Desk from "../Desk";
import Header from "../Header";
import BreadCrumb from "../BreadCrumb";
function Study() {
  const { deckId } = useParams();
  //   console.log("desk", desk);
  //   console.log("params.deckId", params.deckId);
  const { url, path } = useRouteMatch();
  console.log("url, path ", url, path);
  const [deskI, setDeskI] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    async function loadCard() {
      const showCardFromAPI = await readDeck(deckId);
      console.log("showCardFromAPI", showCardFromAPI);
      // setDeskI({ ...deskI, ...showCardFromAPI });
      setDeskI((current) => (current = showCardFromAPI));
    }
    loadCard();
    // console.log("desk", deskI);
  }, []);
  console.log("desk", deskI);
  // return <p> Study {JSON.stringify(deckId)}</p>;

  return (
    <div>
      <Header />
      <BreadCrumb name={deskI.name} url={url} />
      {/* <Desk /> */}
    </div>
  );
}
export default Study;
