import React from "react";
import { Bars3BottomRightIcon, BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-200 p-4 mx-auto md:max-w-screen-xl ">
      <div className="flex justify-between items-center">
        {/* icon and title  */}
        <Link to="/" className="flex items-center">
          <BoltIcon className="w-6 h-6 text-blue-600" />
          <span className="text-2xl ml-2 font-bold ">nextPage</span>
        </Link>
        {/* nav item  */}
        <ul className="hidden md:flex space-x-8 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
        {/* responsive nav section for mobile */}
        <div className="md:hidden">{/* dropdown btn  */}</div>
      </div>
    </nav>
  );
};

export default Header;
