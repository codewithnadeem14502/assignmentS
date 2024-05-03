"use client";
import { useState } from "react";
import { Candidate } from "../utils/interfaces";
import VideoCarousel from "./VideoCarousel";
import Image from "next/image";

interface UserDetailsProps {
  Candidate: Candidate | null;
}
const progressStyle = {
  backgroundColor: "#ddd",
  height: "10px",
  width: "30%",
  borderRadius: "10px",
  marginBottom: "10px",
  marginTop: "5px",
};

const progressBarStyle = (value: number, color: string) => ({
  backgroundColor: color,
  height: "100%",
  width: `${(value / 10) * 100}%`,
  borderRadius: "10px",
});
const videos = [
  "/assests/sampleVideo.mp4",
  "/assests/sampleVideo1.mp4",
  "/assests/sampleVideo.mp4",
  "/assests/sampleVideo1.mp4",
  "/assests/sampleVideo.mp4",
  "/assests/sampleVideo1.mp4",
  "/assests/sampleVideo.mp4",
  "/assests/sampleVideo1.mp4",
  "/assests/sampleVideo.mp4",
  "/assests/sampleVideo1.mp4",
  "/assests/sampleVideo.mp4",
];

const CandidateDetails: React.FC<UserDetailsProps> = ({ Candidate }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  if (!Candidate) return <div>No user selected</div>;
  const handleNextVideo = () => {
    console.log("Next clicked");
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevVideo = () => {
    console.log("Previous clicked");
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[70%] bg-white flex justify-between border shadow-lg rounded-xl p-4">
      <div className="w-[100%] h-auto  ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <Image
              src={Candidate.profileImg}
              alt={Candidate.full_name}
              className="w-20 h-20 rounded-lg "
            />
            <div>
              <h2 className="text-lg font-semibold">{Candidate.full_name}</h2>
              <p className="text-gray-600 text-sm">{Candidate.email}</p>
            </div>
          </div>
          <div
            className={`text-2xl font-semibold ${
              Candidate.score > 50 ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {Candidate.score}%
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-between items-center text-center">
            <p className=" font-semibold text-gray-500">Behavioral </p>
            <div style={progressStyle}>
              <div
                style={progressBarStyle(Candidate.behaviour_score, "#4CAF50")}
              ></div>
            </div>
            <p className="text-sm font-semibold text-green-500">
              {Candidate.behaviour_score}/10
            </p>
          </div>
          <div className="flex justify-between ">
            <p className=" font-semibold text-gray-500">communication</p>
            <div style={progressStyle}>
              <div
                style={progressBarStyle(Candidate.behaviour_score, "#4CAF50")}
              ></div>
            </div>
            <p className="text-sm font-semibold text-green-500">
              {Candidate.communication}/10
            </p>
          </div>
          <div className="flex justify-between ">
            <p className=" font-semibold text-gray-500">Situation handling</p>
            <div style={progressStyle}>
              <div
                style={progressBarStyle(Candidate.behaviour_score, "#FFD700")}
              ></div>
            </div>
            <p className="text-sm font-semibold text-yellow-500">
              {Candidate.situation_handling}/10
            </p>
          </div>
        </div>
        <div className="my-2">
          <p className="font-bold">About</p>
          <p className="text-[15px] text-gray-500">{Candidate.about}</p>
        </div>
        <div>
          <p className="font-bold">Experience</p>
          <p className="text-[15px] text-gray-500">{Candidate.experience}</p>
        </div>
        <div className="my-2">
          <p className="font-bold">Hobbies</p>
          <p className="text-[15px] text-gray-500">{Candidate.hobbies}</p>
        </div>
        <div>
          <p className="font-bold">Introduction:</p>
          <p className="text-[15px] text-gray-500">{Candidate.introduction}</p>
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-14 rounded">
            SHORTLISTED
          </button>
        </div>
      </div>
      <div className="w-[100%] pl-3">
        <VideoCarousel
          videos={videos}
          currentVideoIndex={currentVideoIndex}
          onNext={handleNextVideo}
          onPrev={handlePrevVideo}
        />
      </div>
    </div>
  );
};

export default CandidateDetails;
