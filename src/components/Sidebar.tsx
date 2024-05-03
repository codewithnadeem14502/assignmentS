import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import logo from "../../public/assests/logo.jpg";
import Image from "next/image";
const Sidebar: React.FC = () => {
  return (
    <header className="flex flex-col w-72 h-screen bg-slate-50 p-4">
      <div className="flex items-center my-5">
        <Image src={logo} alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-lg font-semibold">Hi, Atlword</span>
      </div>
      <hr />
      <div className="my-8 ">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center mr-2">
            <FaHome className="w-6 h-6 text-cyan-500" />
          </div>
          <span className="text-lg font-medium">Dashboard</span>
        </div>
        <div className="flex items-start bg-cyan-500 px-4 py-5 rounded-xl flex-col justify-center ">
          <div className="w-8 h-8 bg-white  mr-2 flex items-center justify-center rounded-xl">
            <FaPlus className="w-6 h-6 text-gray-500" />
          </div>
          <p className="text-lg text-white font-semibold mt-5 mb-2">
            New Assignment ?
          </p>
          <p className="text-white text-sm mb-3">
            Select from predefined questions for a quick turnaround
          </p>
          <button className="w-full py-2 bg-white text-black font-semibold  hover:bg-gray-200 rounded-lg">
            Create New Assignment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
