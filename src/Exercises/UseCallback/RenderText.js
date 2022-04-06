import React from "react";

const RenderText = ({ text }) => {
  console.log("Render Text");
  return <p>{text}</p>;
};

export default React.memo(RenderText);
