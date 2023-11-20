import React from 'react'
// import Sidenav from './Sidenav'
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import { SlHome } from "react-icons/sl";
import united from "../united-kingdom.png";
import { SlPencil } from "react-icons/sl";
import { BiZoomIn } from "react-icons/bi";
// import HorizontalLine from './HorizontalLine'; 

const Configuration = () => {
  return (
    <div className="flex flex-col mx-12 gap-10">
          <div className="flex mt-5 justify-between">
        <div className="flex gap-2">
          <a href="/home">
            <SlHome className="text-[#7e22ce] font-bold text-xl " />
          </a>

          <span className="text-[#a7a7a7] font-semibold pl-2">
            / Sample Project /
          </span>
          <span className="text-[#7e22ce] pl-2 font-bold text-lg">
            {" "}
            Widget Configuration
          </span>
        </div>
        <div className="flex gap-2">
          <FaSortDown />
          <h2 className="pl-2 font-semibold">EN</h2>
          <img src={united} className="h-[30px] pl-2" />
          <FaRegBell className="p-1 text-3xl font-bold" />
        </div>
         </div>
         <p className='text-4xl text-[#7e22ce] font-bold'>Configuration</p>
         <div className='flex text-md font-bold text-[#7e22ce] gap-10' >
          <h1>General</h1>
          <h1>Display</h1>
          <h1>Advance</h1>
         </div>
         {/* <HorizontalLine className='w-[80%] text-gray'/> */}
    </div>
  )
}

export default Configuration