import React from 'react'
import youtube from "../youtube.png";
import { RxCross2 } from "react-icons/rx";

export const Modal = ({ isClickedTab, img }) => {
    return (
      <>
        {isClickedTab && (
          <div className="flex flex-col w-[600px] border border-2 shadow-lg border-gray-200 bg-white rounded rounded-r-lg rounded-l-lg absolute top-[20%] left-[40%] p-5">
            <div className="flex mt-4 ml-5 justify-between">
              <div className="flex ">
                <img src={img} className="h-[40px] " />
                <h1 className="text-black text-xl font-bold pl-2 p-1">
                  {" "}
                  Upload from Youtube{" "}
                </h1>
              </div>
              <RxCross2 className="text-2xl font-bold mr-[5%]" />
            </div>
            <div className="flex flex-col mt-4 ml-5 w-full">
              <form className="flex flex-col">
                <label>Name </label>
                <input
                  className="w-[90%]  border border-gray-400 mt-2  rounded rounded-r-lg rounded-l-lg p-1"
                  type="text"
                />
              </form>
              <form className="flex flex-col">
                <label>Discribution </label>
                <input
                  className="w-[90%]  border border-gray-400 mt-2  rounded rounded-r-lg rounded-l-lg p-1"
                  type="text"
                />
              </form>
            </div>
            <div className="flex flex-row-reverse mt-2 mr-10">
              <button className="bg-black text-white w-[90px] rounded-md p-1 mt-1 ">
                Submit
              </button>
            </div>
          </div>
        )}
      </>
    );}