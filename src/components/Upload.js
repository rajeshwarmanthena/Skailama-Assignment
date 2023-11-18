import React, { useState } from "react";
import { SlHome } from "react-icons/sl";
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import united from "../united-kingdom.png";
import QuickUpload from "./QuickUpload";
import rss from '../rss.png';
import spotify from '../spotify.png'
import youtube from "../youtube.png";
import { Modal } from "./Modal";
// import Sidenav from './Sidenav'

const Upload = () => {
const [isClickedTab, setIsClickedTab] = useState(false);
  return (
    <div className="flex flex-col mx-12 ">
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <SlHome className="text-[#7e22ce] font-bold text-xl " />

          <span className="text-[#a7a7a7] font-semibold pl-2">
            / Sample Project /
          </span>
          <span className="text-[#7e22ce] pl-2"> Upload</span>
        </div>
        <div className="flex">
          <FaSortDown />
          <h2 className="pl-2 font-bold">EN</h2>
          <img src={united} className="h-[30px] pl-2" />
          <FaRegBell className="p-1 text-3xl font-bold" />
        </div>
      </div>
      <h1 className=" text-[#7e22ce] font-bold text-3xl ml-5 mt-5">Upload</h1>
      <div
        onClick={() => {
          setIsClickedTab(true);
        }}
        className="mt-10 grid grid-cols-3 gap-x-[90px] gap-y-4"
      >
        <QuickUpload img={youtube} />
        <QuickUpload img={spotify} />
        <QuickUpload img={rss} />
        <QuickUpload img={youtube} />
        <QuickUpload img={spotify} />
        <QuickUpload img={rss} />
      </div>
      <Modal isClickedTab={isClickedTab} img={youtube} absolute />
    </div>
  );
};

export default Upload;
