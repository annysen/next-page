import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-200 p-4 mx-auto md:max-w-screen-xl ">
      <div className="flex justify-between items-center">
        {/* icon and title  */}
        <Link to="/" className="flex items-center">
          <BoltIcon className="w-6 h-6 text-violet-600" />
          <span className="text-2xl ml-2 font-bold ">nextPage</span>
        </Link>

        {/* nav item  */}
        <ul className="hidden md:flex space-x-8 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* responsive nav section for mobile */}
        <div className="md:hidden">
          {/* dropdown btn  */}
          <button onClick={() => setIsOpen(true)}>
            <Bars3BottomRightIcon className="w-5 text-gray-500" />
          </button>

          {isOpen && (
            <div className=" top-0 left-0 w-full z-10 absolute  ">
              <div className="bg-gray-300  p-4">
                {/* logo and cross btn  */}
                <div className="flex justify-between items-center">
                  {/* icon and title  */}
                  <div>
                    <Link to="/" className="flex items-center">
                      <BoltIcon className="w-6 h-6 text-violet-600" />
                      <span className="text-2xl ml-2 font-bold ">nextPage</span>
                    </Link>
                  </div>
                  {/* drodown Cross btn  */}
                  <div>
                    <button onClick={() => setIsOpen(false)}>
                      <XMarkIcon className="w-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* nav item  */}
                <div className="mt-4">
                  <ul className="space-y-2 font-bold">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-violet-600" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/books"
                        className={({ isActive }) =>
                          isActive ? "text-violet-600" : ""
                        }
                      >
                        Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "text-violet-600" : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
