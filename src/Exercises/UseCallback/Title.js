import React from "react";

const Title = ({ title }) => {
  console.log("Title");
  return <p>{title}</p>;
};

export default React.memo(Title);
