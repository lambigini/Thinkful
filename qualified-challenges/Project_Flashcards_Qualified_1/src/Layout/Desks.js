import React from "react";
import Desk from "./Desk";

function Desks({ listDesks }) {
  // console.log("listDesks in Desks", listDesks);
  const listNumOfDesks = listDesks.map((desk, index) => (
    <Desk desk={desk} key={index} />
  ));

  // console.log("listNumOfDesks", listNumOfDesks);
  return (
    // list of desks
    <div>
      {listNumOfDesks}
      {/* <Desk /> */}
    </div>
  );
}
export default Desks;
