import React, { useState } from "react";
import Navbar from "./Navbar";

import { FiPlusCircle } from "react-icons/fi";
import { LandingPageImage } from "./LandingPageImage";
import { Modal } from "./Modal";

const LandingPage = () => {
   const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Navbar />

      <p className="text-[#7e22ce] text-5xl font-bold text-center">
        Create a New Project
      </p>
      {/* <img src={landingPage} className="w-[500px] h-[300px] m-auto pl-2" /> */}
      <LandingPageImage />
      <p className="w-[70%] m-auto text-2xl text-[#8c8c8c]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button
        onClick={() => {
          setIsShowModal(true);
        }}
        className="bg-[#211935] items-center text-white gap-3 text-xl rounded-md py-4 px-8 flex m-auto hover:bg-[#342754]"
      >
        <FiPlusCircle className="text-3xl" />

        <p>Create New Project</p>
      </button>

      <Modal setIsShowModal={setIsShowModal} isShowModal={isShowModal} pageName="landing" />
    </div>
  );
};

export default LandingPage;






