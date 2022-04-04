import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const CookiesExercises = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);
  const addNewCookie = () => {
    console.log("test");
    setCookie("admin", "true", { maxAge: 10000 });
  };
  useEffect(() => {
    console.log(cookies);
  }, [cookies]);
  return (
    <div style={{ display: "flex", "flex-direction": "column" }}>
      <p>Cookies</p>
      <button onClick={addNewCookie} style={{ width: 200, margin: 20 }}>
        Add cookie
      </button>
      <button
        onClick={() => removeCookie("admin")}
        style={{ width: 200, margin: 20 }}
      >
        Remove cookie
      </button>
      <p>{cookies?.admin ? "Admin " + cookies?.admin : null}</p>
    </div>
  );
};

export default CookiesExercises;
