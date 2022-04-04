import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CookiesExercises = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);
  const [storedItem, setStoredItem] = useState(
    localStorage.getItem("admin") || null
  );
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
      <p>Cookies:</p>
      <p>{cookies?.admin ? "Admin " + cookies?.admin : null}</p>
      <button
        onClick={() => localStorage.setItem("admin", true)}
        style={{ width: 200, margin: 20 }}
      >
        Add item to local storage
      </button>
      <p>Local storage item value "admin" : {storedItem}</p>
    </div>
  );
};

export default CookiesExercises;
