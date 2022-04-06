import React, { memo } from "react";
const Button = ({ handleClick, children }) => {
  console.log("Render Button " + children);
  return <button onClick={handleClick}>{children}</button>;
};

export default memo(Button);
