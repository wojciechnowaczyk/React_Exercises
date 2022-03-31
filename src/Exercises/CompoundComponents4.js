import React, { useEffect, useState, useCallback } from "react";

const BookContext = React.createContext();
const SteppenWolfImage = require("../images/steppenwolf.jpeg");

function Book(props) {
  const [read, setReadStatus] = useState(false);
  const toggle = useCallback(
    () => setReadStatus((oldBookStatus) => !oldBookStatus),
    []
  );
  useEffect(() => {
    props.onToggle(read);
  }, [read]);
  const value = React.useMemo(() => ({ read, toggle }), [read]);
  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
}

function useBookContext() {
  const context = React.useContext(BookContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

function Read({ children }) {
  const { read } = useBookContext();
  return read ? children : null;
}

function ToRead({ children }) {
  const { read } = useBookContext();
  return read ? null : children;
}

function Button(props) {
  const { read, toggle } = useBookContext();
  return (
    <button onClick={toggle} {...props}>
      {read ? "Mark as not read yet" : "Mark as read"}
    </button>
  );
}

function Cover() {
  const { read } = useBookContext();
  return (
    <img
      src={SteppenWolfImage}
      alt="steppenwolf"
      style={{
        width: 200,
        filter: read ? "grayscale(1)" : "grayscale(0)",
      }}
    />
  );
}

Book.Read = Read;
Book.ToRead = ToRead;
Book.Button = Button;
Book.Cover = Cover;

const CompoundComponents4 = ({
  onToggle = (...args) => console.log("onToggle", ...args),
}) => {
  return (
    <Book onToggle={onToggle}>
      <Book.Read>The book is read</Book.Read>
      <Book.ToRead>The book is not read yet</Book.ToRead>
      <p>Author: Hermann Hesse</p>
      <p>Title: Steppenwolf</p>
      <Book.Cover />
      <hr />
      <Book.Button />
    </Book>
  );
};

export default CompoundComponents4;
