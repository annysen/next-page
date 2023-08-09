import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const book = props.book;
  return (
    <div>
      <Link
        to={`/book/${book.isbn13}`}
        className="relative shadow-lg hover:shadow-2xl  transition duration-200 hover:-translate-y-2"
      >
        <img
          className="objcet-cover  w-full h-60 md:h-64 lg:h-80"
          src={book.image}
          alt="book image"
        />
        <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 rounded text-gray-300 absolute inset-0 transition-opacity duration-200 px-4 py-6 flex flex-col">
          <p>{book.title}</p>
          <p className="mt-5">{book.subtitle.substring(0, 45)}...</p>
          <p className="mt-auto">{book.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Book;
