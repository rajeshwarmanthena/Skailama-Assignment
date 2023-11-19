import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { ProjectInfoCard } from "./ProjectInfoCard";
import { UserContext } from "../App";
import { FiPlusCircle } from "react-icons/fi";
import { Modal } from "./Modal";
import { API_URL } from "../config/config";

export const Home = () => {
  const [projects, setProjects] = useState([]);

  const { user, setUser } = useContext(UserContext);
  const [isShowModal, setIsShowModal] = useState(false);

  const getProjects = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      const url = `${API_URL}/projects/${user?._id}`;
      let res = await fetch(url);
      let resp = await res.json();
      setProjects(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <Navbar />

      <header className="flex justify-between items-center mx-40">
        <h1 className="text-6xl font-bold text-[#7e22ce]">Projects</h1>
        <button
          onClick={() => {
            setIsShowModal(true);
          }}
          className="bg-[#211935] justify-between items-center text-white gap-3 text-xl rounded-md py-3 px-6 flex hover:bg-[#342754]"
        >
          <FiPlusCircle className="text-3xl" />

          <p>Create New Project</p>
        </button>
      </header>

      <div className="grid grid-cols-3 gap-x-48 gap-y-20 mx-40">
        {projects?.map((item) => (
          <ProjectInfoCard data={item} />
        ))}
      </div>
      <Modal
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        pageName="landing"
      />
    </div>
  );
};
