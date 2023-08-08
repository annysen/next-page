import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookInfo = useLoaderData();
  console.log(bookInfo);

  const [fold, setFold] = useState(true);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center space-x-32 border rounded mx-10 ">
        {/* img section  */}
        <div className="md:w-1/2">
          <img className="w-full " src={bookInfo.image} alt="" />
        </div>
        {/* details section  */}
        <div className="mb-5 md:w-1/2 mx-auto">
          <small className="bg-yellow-300 inline-flex px-4 rounded-full">
            Brand New
          </small>
          <h1 className="text-3xl leading-none font-bold">{bookInfo.title}</h1>
          <div className="my-2">
            <p>Authors: {bookInfo.authors}</p>
            <p>Publisher: {bookInfo.publisher}</p>
            <p>Year: {bookInfo.year}</p>
            <p>Rating: {bookInfo.rating}</p>
          </div>
          {/* description  */}

          {fold ? (
            <>
              <p className="text-gray-500">{bookInfo.desc.substring(0, 150)}</p>
              <span onClick={() => setFold(!fold)}>
                <button className="text-violet-800">Read More</button>
              </span>
            </>
          ) : (
            <>
              <p className="text-black font-semibold">{bookInfo.desc}</p>
              <span onClick={() => setFold(!fold)}>
                <button className="text-violet-800">Read less</button>
              </span>
            </>
          )}
          {/* buy btn  */}
          <div className="flex  items-center space-x-5 mt-5">
            <Link to={`https://itbook.store/books/${bookInfo.isbn13}`}>
              <button className="px-6 mb-3 rounded  h-12 font-bold bg-violet-600 hover:bg-violet-800 duration-500 text-gray-300 ">
                Buy Now
              </button>
            </Link>
            <p className=" font-bold items-center">Price:{bookInfo.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
