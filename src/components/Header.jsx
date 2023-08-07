import React from "react";
import { Bars3BottomRightIcon, BoltIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <nav className="bg-gray-200 p-4 mx-auto md:max-w-screen-xl ">
      <div className="">
        {/* icon and title  */}
        <div className="flex items-center">
          <BoltIcon className="w-6 h-6 text-blue-600" />
          <span className="text-2xl ml-2 font-bold ">nextPage</span>
        </div>
        {/* nav item  */}
        <div></div>
        {/* responsive nav section  */}
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
