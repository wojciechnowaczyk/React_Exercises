import React from "react";
import BooksList from "./books.json";

const Books = () => {
  return (
    <>
      {BooksList &&
        BooksList.length > 0 &&
        BooksList.map((book) => {
          return <p key={book.title}>{book.title}</p>;
        })}
    </>
  );
};

export default Books;
