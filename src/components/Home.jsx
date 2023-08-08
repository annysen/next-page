import React from "react";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-ful lg:max-w-screen-xl flex flex-col lg:flex-row items-center md:px-24 lg:px-8 lg:py-20">
      {/* text section  */}
      <div className="mb-10  lg:max-w-lg lg:pr-5 lg:mb-0">
        <div className="max-w-xl mb-6 lg:mt-8">
          {/* badge  */}
          <div>
            <small className="inline-block py-2 px-4 font-semibold rounded-full bg-yellow-300">
              ON SALE!
            </small>
          </div>
          {/* title  */}

          <h1 className="text-3xl font-bold">
            A reader lives a <br className="hidden md:block" /> thousand lives{" "}
            <span className="text-violet-400">before he dies</span>
          </h1>

          {/* description  */}
          <p className="text-gray-700">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
        </div>
        {/* btn section  */}
        <div className="mt-4  flex-col md:flex-row md:items-center inline-flex space-x-3 ">
          <Link
            to="/books"
            className="inline-flex items-center h-12 px-6 mb-3 rounded bg-violet-600 hover:bg-violet-800 duration-500 md:w-auto"
          >
            <div className="inline-flex justify-center items-center w-full h-full md:mb-0 ">
              <p className="text-gray-100 mr-3">Visit Page</p>
              <ShoppingCartIcon className="w-5 text-gray-100" />
            </div>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center text-gray-800 transition-colors duration-200 font-bold hover:text-violet-800 "
          >
            Lean More
          </Link>
        </div>
      </div>
      {/* animation section  */}
      <div className="relative lg:w-1/2  ">
        <div className="w-full  lg:w-4/5 lg:ml-auto sm-96 h-72">
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
