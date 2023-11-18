import React, { useState } from "react";
import Navitem from "./Navitem";

const Sidenav = () => {
  const [clickedTab, setClickedTab] = useState("Projects");
  return (
    <div className="flex flex-col w-[20%] border border-r-1 border-gray h-screen bg-[#f3e8ff] rounded-r-lg p-4  ">
      <h1 className="text-purple-700 font-bold text-2xl ml-8">LAMA.</h1>
      <p className="font-semibold text-[14px] text-black mt-4 ml-4">
        Podcast Upload flow
      </p>
      <ul className="flex flex-col">
        <Navitem
          selected={clickedTab === "Projects"}
          name="Projects"
          number="1"
          setClickedTab={setClickedTab}
        />
        <Navitem
          selected={clickedTab === "Widget Configurations"}
          name="Widget Configurations"
          number="2"
          setClickedTab={setClickedTab}
        />
      </ul>
    </div>
  );
};

export default Sidenav;
