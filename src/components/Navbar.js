import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";


const Navbar = () => {
  return (
    <header className="flex w-[90%] justify-between">
      <div className="flex">
        <div></div>
        <h1 className="text-purple-700 font-bold text-xl text-left mx-12 mt-5">
          LAMA.
        </h1>
      </div>
      <nav className="flex mt-5 mr-[-4%] text-2xl w-[5%] justify-between">
        <IoSettingsOutline />
        <FaRegBell />
      </nav>
    </header>
  );
};

export default Navbar;
