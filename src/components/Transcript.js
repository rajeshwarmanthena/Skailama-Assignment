import React from 'react'
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import { SlHome } from "react-icons/sl";
import united from "../united-kingdom.png";
import { SlPencil } from "react-icons/sl";
import { BiZoomIn } from "react-icons/bi";


const Transcript = () => {
  return (
    <div className="flex flex-col mx-12 gap-10">
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <a href="/home">
            <SlHome className="text-[#7e22ce] font-bold text-xl " />
          </a>

          <span className="text-[#a7a7a7] font-semibold pl-2">
            / Sample Project /
          </span>
          <span className="text-[#7e22ce] pl-2 font-bold text-lg">
            {" "}
            Transcripit
          </span>
        </div>
        <div className="flex">
          <FaSortDown />
          <h2 className="pl-2 font-semibold">EN</h2>
          <img src={united} className="h-[30px] pl-2" />
          <FaRegBell className="p-1 text-3xl font-bold" />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="font-bold text-4xl text-[#7e22ce]">Edit Transcripit</p>
        <div className="flex gap-3">
          <button className="border border-2 rounded-[5px] border-red-400 text-red-400 px-4 py-1 font-semibold">
            Discard
          </button>
          <button className="border border-1 rounded-[5px] bg-black text-white px-4 py-1">
            Save & exit
          </button>
        </div>
      </div>
      <div className="border border-2 rounded-[6px] border-[#7e22ce] text-red-400 px-4 py-1">
        <div className="flex mt-2  justify-between">
          <button className=" flex gap-1 border border-1 rounded-[20px] bg-gray-700  text-sm px-4 py-1">
            <SlPencil className="text-md text-white mt-1" />
            <p className="text-white">EditMode</p>
          </button>
          <BiZoomIn className="text-[#7e22ce] text-xl" />
        </div>
        <h1 className="text-lg font-bold text-[#7e22ce] mt-2">Speaker</h1>
        <p className="text-black text-md mt-2">
          If you need to use a one-off border-radius value that doesn’t make
          sense to include in your theme, use square brackets to generate a
          property on the fly using any arbitrary value. If you need to use a
          one-off border-radius value that doesn’t make sense to include in your
          theme, use square brackets to generate a property on the fly using any
          arbitrary value. If you need to use a one-off border-radius value that
          doesn’t make sense to include in your theme, use square brackets to
          generate a property on the fly using any arbitrary value. If you need
          to use a one-off border-radius value that doesn’t make sense to
          include in your theme, use square brackets to generate a property on
          the fly using any arbitrary value. If you need to use a one-off
          border-radius value that doesn’t make sense to include in your theme,
          use square brackets to generate a property on the fly using any
          arbitrary value.If you need to use a one-off border-radius value that
          doesn’t make sense to include in your theme, use square brackets to
          generate a property on the fly using any arbitrary value.If you need
          to use a one-off border-radius value that doesn’t make sense to
          include in your theme, use square brackets to generate a property on
          the fly using any arbitrary value.
        </p>
      </div>
    </div>
  );
}

export default Transcript