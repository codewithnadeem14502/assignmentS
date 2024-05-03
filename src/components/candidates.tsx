import React from "react";
import { GetStaticProps } from "next";
import candidatesData from "../utils/data.json";
import { Candidate } from "../utils/interfaces";

interface Props {
  candidates: Candidate[];
  onSelectUser: (userId: number) => void;
}

const Candidates: React.FC<Props> = ({ candidates, onSelectUser }) => {
  return (
    <div className="bg-white  ">
      <div className="flex justify-between text-gray-500 font-semibold  py-5 px-1">
        <h1 className="text-[12px]">CANDIDATE</h1>
        <p className="text-[12px]">SCORE</p>
      </div>
      <div className="container mx-auto ">
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id} onClick={() => onSelectUser(candidate.id)}>
              <div className="flex items-center justify-between py-2 px-2 hover:bg-slate-200">
                <div className="flex gap-3">
                  <img
                    src={candidate.profileImg}
                    alt={candidate.full_name}
                    className="w-10 h-10 rounded-lg "
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {candidate.full_name}
                    </h2>
                    <p className="text-gray-600 text-sm">{candidate.email}</p>
                  </div>
                </div>
                <div
                  className={`text-lg font-semibold ${
                    candidate.score > 50 ? "text-green-500" : "text-yellow-500"
                  }`}
                >
                  {candidate.score}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const candidates: Candidate[] = candidatesData.candidates;
  return {
    props: {
      candidates,
      onSelectUser: () => {},
    },
  };
};

export default Candidates;
