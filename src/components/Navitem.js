import React from 'react'

const Navitems = ({ selected, name, number, setClickedTab }) => {
  return (
    <li
      onClick={() => {
        setClickedTab(name);
      }}
      className={`flex items-center w-[100%] gap-2 ${
        selected ? "bg-[#7e22ce] text-white rounded-full" : "text-black"
      }  mt-4 p-2`}
    >
      <span
        className={`${
          selected ? "bg-[#1e1e1e] text-white" : "bg-[#d8cfe4] text-"
        }  text-sm rounded-full px-2 py-[2px]`}
      >
        {number}
      </span>
      <h2 className=" font-semibold text-sm ">{name}</h2>
    </li>
  );
};

export default Navitems