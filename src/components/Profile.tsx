"use client";
import { useState } from "react";
import { FaClock, FaPencilAlt, FaFile } from "react-icons/fa";
import { BsBox2Fill } from "react-icons/bs";
import Data from "../utils/data.json";
import Candidates from "./candidates";
import UserDetails from "./CandidateDetails";
import { Candidate } from "../utils/interfaces";

const Profile: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(
    Data.candidates.length > 0 ? Data.candidates[0].id : null
  );

  const selectedUser = Data.candidates.find(
    (user: Candidate) => user.id === Number(selectedUserId)
  );

  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <>
      <div className="w-[35%] h-screen overflow-hidden bg-white flex justify-between p-4 border shadow-lg rounded-xl">
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between mb-2">
            <span className="mr-2 text-xl font-bold">Sale BDE</span>
            <div className="flex items-center text-center">
              <span className="text-green-500 font-semibold text-lg pr-2">
                Active
              </span>
              <span className="bg-slate-100 p-2 rounded-full ">
                <FaPencilAlt />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="mr-2 font-medium text-gray-500">
              Assignment Link
            </span>
            <a href="#" className="text-blue-500">
              http//sample.org/
            </a>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="mr-2 font-medium text-gray-500">
              Assignment Hours
            </span>
            <div className="flex items-center text-center">
              <span className="text-gray-500 font-medium">3 Hours</span>
              <FaClock className="ml-1 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="mr-2 font-medium text-gray-500">
              Assignment End At
            </span>
            <span className="text-gray-500 font-medium"> 19 May 2024</span>
          </div>
          <div className="mt-5 flex items-center text-center">
            <button className="bg-slate-100 shadow-lg border rounded-xl py-3 px-4 text-sm font-semibold mr-2 flex items-center">
              <span>
                <BsBox2Fill />
              </span>
              <span className="ml-2 text-sm">TO REVIEW</span>
            </button>

            <div className="flex items-center ml-5">
              <span>
                <FaFile />
              </span>
              <h2 className="ml-2 text-sm">SHORTLISTED</h2>
            </div>
          </div>
          <div>
            <Candidates
              candidates={Data.candidates}
              onSelectUser={handleSelectUser}
            />
          </div>
        </div>
      </div>
      <UserDetails Candidate={selectedUser || null} />
    </>
  );
};

export default Profile;
