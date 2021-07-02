import React from "react";
import { useParams } from "react-router-dom";

function ViewAllDesk() {
  const params = useParams();
  console.log("inside ViewAllDesk");
  //   return <p>{JSON.stringify(params)}</p>;
  return <p>{JSON.stringify(params)}</p>;
}
export default ViewAllDesk;
