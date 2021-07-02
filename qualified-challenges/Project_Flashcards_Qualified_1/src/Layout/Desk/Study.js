import React from "react";
import { useParams } from "react-router-dom";

function Study() {
  const params = useParams();
  console.log("inside study");
  return <p> Study {JSON.stringify(params)}</p>;
}
export default Study;
