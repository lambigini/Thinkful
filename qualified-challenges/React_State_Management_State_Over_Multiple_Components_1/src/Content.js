import React from "react";

function Content({ loggedIn, fontSize }) {
  console.log(`fontSizeUp in Content.js ${fontSize} `);
  return loggedIn && <p style={{ fontSize: `${fontSize}px` }}>CONTENT</p>;
}

export default Content;
